'use client';

import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@/utils';
import { usePrefersReducedMotion } from '@/hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setIsMounted(true);
    if (prefersReducedMotion) {
      return;
    }
  }, [prefersReducedMotion]);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sawradip Saha.</h2>;
  const three = <h3 className="big-heading">I create intelligence.</h3>;
  const four = (
    <>
      <p>
        I'm a machine learning engineer specializing in building complex data processing and model
        training pipelines. Currently, I'm focused on contributing to open-source projects , in
        addition to my role at{' '}
        <a href="https://magicmind.me/" target="_blank" rel="noreferrer">
          MagicMind
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="/resume.pdf" target="_blank" rel="noreferrer">
      Check out my CV!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {items.map((item, i) => {
            const nodeRef = React.createRef<HTMLDivElement>();
            return (
              <CSSTransition 
                key={i} 
                nodeRef={nodeRef}
                classNames="fadeup" 
                timeout={loaderDelay}
                appear={isMounted}
                in={isMounted}
              >
                <div ref={nodeRef} style={isMounted ? { transitionDelay: `${i + 1}00ms` } : undefined}>
                  {item}
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;

