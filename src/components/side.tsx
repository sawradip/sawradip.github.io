'use client';

import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { loaderDelay } from '@/utils';
import { usePrefersReducedMotion } from '@/hooks';

const StyledSideElement = styled.div<{ orientation: 'left' | 'right' }>`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

interface SideProps {
  children: React.ReactNode;
  isHome?: boolean;
  orientation: 'left' | 'right';
}

const Side = ({ children, isHome = false, orientation }: SideProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const sideRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    if (!isHome || prefersReducedMotion) {
      return;
    }
  }, [isHome, prefersReducedMotion]);

  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <TransitionGroup component={null}>
          <CSSTransition 
            nodeRef={sideRef}
            classNames={isHome ? 'fade' : ''} 
            timeout={isHome ? loaderDelay : 0}
            appear={isMounted && isHome}
            in={isMounted || !isHome}
          >
            <div ref={sideRef}>
              {children}
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    </StyledSideElement>
  );
};

export default Side;

