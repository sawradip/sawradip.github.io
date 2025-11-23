'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { config } from '@/config';
import sr from '@/utils/sr';
import { usePrefersReducedMotion } from '@/hooks';

const StyledAboutSection = styled.section<{
  isHovered: boolean;
  entryDirection: string;
  entrySpeed: number;
}>`
  max-width: 1000px;
  margin: 0 auto;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div<{
  isHovered: boolean;
  entryDirection: string;
  entrySpeed: number;
}>`
  position: relative;
  max-width: 400px;
  width: 100%;
  aspect-ratio: 3 / 4;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
    max-width: 350px;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    overflow: hidden;

    &:focus {
      outline: 0;
    }

    .img {
      position: relative;
      z-index: 0;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      ${({ isHovered }) =>
        isHovered &&
        `
        filter: none !important;
        mix-blend-mode: normal !important;
      `}
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      z-index: 1;
      background-color: var(--navy);
      mix-blend-mode: screen;
      transform: ${({ isHovered, entryDirection }) => {
        if (!isHovered) return 'translate(0, 0)';
        const translateValue = 
          entryDirection === 'top'
            ? 'translate(0, 100%)'
            : entryDirection === 'bottom'
            ? 'translate(0, -100%)'
            : entryDirection === 'left'
            ? 'translate(100%, 0)'
            : entryDirection === 'right'
            ? 'translate(-100%, 0)'
            : 'translate(0, 100%)';
        return translateValue;
      }};
      transition: ${({ isHovered, entrySpeed }) => {
        const duration = isHovered
          ? Math.max(0.3, Math.min(0.8, entrySpeed))
          : 0.5;
        return `transform ${duration}s cubic-bezier(0.645, 0.045, 0.355, 1)`;
      }};
      will-change: transform;
    }

    &:after {
      border: 2px solid var(--green);
      top: ${({ isHovered }) => (isHovered ? '15px' : '20px')};
      left: ${({ isHovered }) => (isHovered ? '15px' : '20px')};
      z-index: -1;
      transition: top 0.3s ease, left 0.3s ease;
    }
  }
`;

const About = () => {
  const revealContainer = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [entryDirection, setEntryDirection] = useState('top');
  const [entrySpeed, setEntrySpeed] = useState(0.5);
  const lastScrollY = useRef(0);
  const lastMouseY = useRef(0);
  const lastMouseX = useRef(0);
  const entryTime = useRef(0);
  const hasEnteredViaScroll = useRef(false);
  const hasEnteredViaMouse = useRef(false);
  const previousMouseY = useRef<number | null>(null);
  const previousMouseX = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (revealContainer.current && sr) {
      sr.reveal(revealContainer.current, config.srConfig());
    }
  }, [prefersReducedMotion]);

  // Track mouse movement globally to detect entry direction
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      previousMouseY.current = e.clientY;
      previousMouseX.current = e.clientX;
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [prefersReducedMotion]);

  // Track scroll direction and speed (only for initial scroll-based entry)
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView && !hasEnteredViaScroll.current) {
        const currentScrollY = window.pageYOffset;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
        const scrollSpeed = Math.min(1, scrollDelta / 100); // Normalize speed
        
        if (rect.top < window.innerHeight / 2) {
          setEntryDirection('top');
        } else {
          setEntryDirection('bottom');
        }
        
        setEntrySpeed(Math.max(0.3, Math.min(0.8, 0.5 + scrollSpeed * 0.3)));
        hasEnteredViaScroll.current = true;
        lastScrollY.current = currentScrollY;
      }
      
      lastScrollY.current = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    
      // Capture current mouse position
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    
      // Capture previous mouse position BEFORE calculating direction
      // This ensures we use the position from before entering the section
      const prevY = previousMouseY.current;
      const prevX = previousMouseX.current;

      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // Determine entry direction based on where mouse entered relative to section bounds
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionLeft = rect.left;
      const sectionRight = rect.right;
      
      let direction = 'top';
      
      // Check if mouse entered from outside the section bounds
      if (prevY !== null && prevX !== null) {
        // Calculate movement vector (positive deltaY means moving down, positive deltaX means moving right)
        const deltaY = mouseY - prevY;
        const deltaX = mouseX - prevX;
        
        // Determine entry direction based on movement vector
        // If moving down (deltaY > 0), entered from top
        // If moving up (deltaY < 0), entered from bottom
        // If moving right (deltaX > 0), entered from left
        // If moving left (deltaX < 0), entered from right
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          // Vertical movement dominates
          direction = deltaY > 0 ? 'top' : 'bottom';
        } else {
          // Horizontal movement dominates
          direction = deltaX > 0 ? 'left' : 'right';
        }
      } else {
        // Fallback: determine by position relative to section
        if (mouseY < sectionTop + (sectionBottom - sectionTop) * 0.2) {
          direction = 'top';
        } else if (mouseY > sectionTop + (sectionBottom - sectionTop) * 0.8) {
          direction = 'bottom';
        } else if (mouseX < sectionLeft + (sectionRight - sectionLeft) * 0.2) {
          direction = 'left';
        } else if (mouseX > sectionLeft + (sectionRight - sectionLeft) * 0.8) {
          direction = 'right';
        }
      }
      
      setEntryDirection(direction);
      
      // Calculate speed based on mouse movement distance
      if (prevY !== null && prevX !== null) {
      const mouseSpeed = Math.sqrt(
          Math.pow(mouseY - prevY, 2) + Math.pow(mouseX - prevX, 2)
      );
      const normalizedSpeed = Math.min(1, mouseSpeed / 100);
        setEntrySpeed(
          Math.max(0.3, Math.min(0.8, 0.4 + normalizedSpeed * 0.4))
        );
      } else {
        setEntrySpeed(0.5);
      }
      
      entryTime.current = Date.now();
      hasEnteredViaMouse.current = true;
    
    setIsHovered(true);
      // Update previous mouse position AFTER calculating direction
    previousMouseY.current = mouseY;
    previousMouseX.current = mouseX;
    lastMouseY.current = mouseY;
    },
    [prefersReducedMotion]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    previousMouseY.current = e.clientY;
    previousMouseX.current = e.clientX;
    lastMouseY.current = e.clientY;
    },
    [prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Reset mouse entry tracking when leaving (but keep scroll entry flag)
    hasEnteredViaMouse.current = false;
    // Don't reset previousMouseY/X here - let global tracker maintain them
  }, []);

  const skills = ['PyTorch', 'chatGPT', 'Cuda', 'GPT3', 'C#', 'Dall-E2'];

  return (
    <StyledAboutSection 
      id="about" 
      ref={(node) => {
        revealContainer.current = node;
        sectionRef.current = node;
      }}
      isHovered={isHovered}
      entryDirection={entryDirection}
      entrySpeed={entrySpeed}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I am <b>Sawradip Saha</b>, a machine learning engineer and
              researcher from Dhaka, Bangladesh. I did my BSc in Mechanical
              Engineering at BUET, but most of my work has been in AI,
              especially deep learning and agentic systems. I have coauthored
              several papers in IEEE conferences and journals on computer
              vision, activity recognition, biomedical signals, and document
              analysis, and I enjoy taking ideas all the way from theory to
              working systems.
            </p>

            <p>
              Professionally, I have worked as a founding or early engineer at
              AI-focused startups, building large-scale systems for speech,
              vision and LLM-based workflows. I contributed to{' '}
              <a href="https://summerofcode.withgoogle.com/">
                Google Summer of Code 2023
              </a>{' '}
              with Intel's{' '}
              <a href="https://www.intel.com/content/www/us/en/developer/tools/openvino-toolkit/overview.html">
                OpenVINO Toolkit
              </a>
              , and I actively contribute to open source projects such as{' '}
              <a href="https://github.com/openvinotoolkit/openvino">OpenVINO</a>
              , <a href="https://github.com/pytorch/pytorch">PyTorch</a> and{' '}
              <a href="https://github.com/skorch-dev/skorch">Skorch</a>.
            </p>

            <p>
              Right now I am building <b>RunAgent</b>, an infrastructure
              platform for deploying AI agents into real software products. I am
              especially interested in research at the intersection of LLM
              agents, tools, and systems: how to make agents reliable,
              controllable and efficient enough to be used in production.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic 
          isHovered={isHovered}
          entryDirection={entryDirection}
          entrySpeed={entrySpeed}
        >
          <div className="wrapper">
            <Image
              className="img"
              src="/images/sawra.jpeg"
              width={400}
              height={533}
              alt="Headshot"
              style={{ 
                borderRadius: 'var(--border-radius)',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
