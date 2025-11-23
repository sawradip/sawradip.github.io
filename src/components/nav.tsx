'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { config } from '@/config';
import { loaderDelay } from '@/utils';
import { useScrollDirection, usePrefersReducedMotion } from '@/hooks';
import Menu from './menu';
import { IconLogo } from './icons';

const StyledHeader = styled.header<{
  scrollDirection: string;
  scrolledToTop: boolean;
}>`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
`;

const StyledRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledResumeButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    font-size: var(--fz-xs);
  }
`;

interface NavProps {
  isHome?: boolean;
}

const Nav = ({ isHome = false }: NavProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const pathname = usePathname();
  const logoRef = React.useRef<HTMLDivElement>(null);
  const resumeRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (typeof window === 'undefined') return;
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsMounted(true);

    if (prefersReducedMotion) {
      return;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const Logo = (
    <div className="logo" tabIndex={-1} ref={logoRef}>
      <Link href="/" aria-label="home">
        <IconLogo />
      </Link>
    </div>
  );

  const ResumeLink = (
    <a
      className="resume-button"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  // Always render the same structure to avoid hydration mismatches
  // Use CSS transitions instead of conditional rendering
  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {Logo}

            <StyledLinks>
              <ol>
                {config.navLinks &&
                  config.navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link href={url}>{name}</Link>
                    </li>
                  ))}
              </ol>
            </StyledLinks>

            <StyledRightSide>
              <StyledResumeButton>
                <div>{ResumeLink}</div>
              </StyledResumeButton>
              <Menu />
            </StyledRightSide>
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              <CSSTransition
                nodeRef={logoRef}
                classNames={fadeClass}
                timeout={timeout}
                appear={isMounted && isHome}
                in={isMounted || !isHome}
              >
                <>{Logo}</>
              </CSSTransition>
            </TransitionGroup>

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {config.navLinks &&
                    config.navLinks.map(({ url, name }, i) => {
                      const nodeRef = React.createRef<HTMLLIElement>();
                      return (
                        <CSSTransition
                          key={i}
                          nodeRef={nodeRef}
                          classNames={fadeDownClass}
                          timeout={timeout}
                          appear={isMounted && isHome}
                          in={isMounted || !isHome}
                        >
                          <li
                            ref={nodeRef}
                            style={
                              isMounted && isHome
                                ? { transitionDelay: `${i * 100}ms` }
                                : undefined
                            }
                          >
                            <Link href={url}>{name}</Link>
                          </li>
                        </CSSTransition>
                      );
                    })}
                </TransitionGroup>
              </ol>
            </StyledLinks>

            <StyledRightSide>
              <StyledResumeButton>
                <TransitionGroup component={null}>
                  <CSSTransition
                    nodeRef={resumeRef}
                    classNames={fadeDownClass}
                    timeout={timeout}
                    appear={isMounted && isHome}
                    in={isMounted || !isHome}
                  >
                    <div
                      ref={resumeRef}
                      style={
                        isMounted && isHome
                          ? {
                              transitionDelay: `${
                                (config.navLinks?.length || 0) * 100
                              }ms`,
                            }
                          : undefined
                      }
                    >
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </StyledResumeButton>

              <TransitionGroup component={null}>
                <CSSTransition
                  nodeRef={menuRef}
                  classNames={fadeClass}
                  timeout={timeout}
                  appear={isMounted && isHome}
                  in={isMounted || !isHome}
                >
                  <div ref={menuRef}>
                    <Menu />
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </StyledRightSide>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
