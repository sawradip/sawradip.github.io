'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { config } from '@/config';
import sr from '@/utils/sr';
import { usePrefersReducedMotion } from '@/hooks';

const StyledAboutSection = styled.section`
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

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
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
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (revealContainer.current && sr) {
      sr.reveal(revealContainer.current, config.srConfig());
    }
  }, [prefersReducedMotion]);

  const skills = ['PyTorch', 'chatGPT', 'Cuda', 'GPT3', 'C#', 'Dall-E2'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! I am <b>Sawradip</b>. I am deeply passionate about using my expertise in machine
              learning and computer vision to tackle real-world problems. With a strong foundation
              in deep learning and Python programming, I have consistently demonstrated my ability
              to successfully design and implement complex data processing and model training
              pipelines.
            </p>

            <p>
              Fast-forward to today, and I've had participated in several international and regional
              Deep Learning competitions, including{' '}
              <a href="https://signalprocessingsociety.org/community-involvement/vip-cup-2021-icip-2021/">
                IEEE VIP CUP 2021
              </a>{' '}
              (1st Place),{' '}
              <a href="https://www.kaggle.com/competitions/dlsprint/discussion/349991/">
                Deep Learning Sprint 2022
              </a>{' '}
              (2nd Place),{' '}
              <a href="https://2022.ieeeicip.org/video-and-image-processing-cup//">
                IEEE VIP CUP 2022
              </a>{' '}
              (3rd Place), and <a href="https://www.robi.com.bd/en/datathon/">Robi Datathon 2.0 </a>{' '}
              (Top 10). My main focus these days is core deep learning, GPU Programming and making a
              larger contribution at open-source projects including{' '}
              <a href="https://github.com/pytorch/pytorch/">PyTorch</a>.
            </p>

            <p>
              I recently joined <a href="https://magicmind.me">MagicMind,</a> a Next-generation
              wellness platform &amp; Spiritual experiences as a Machine Learning Intern.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              className="img"
              src="/images/sawra.jpeg"
              width={500}
              height={500}
              alt="Headshot"
              style={{ borderRadius: 'var(--border-radius)' }}
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

