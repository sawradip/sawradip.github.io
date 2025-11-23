'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { GlobalStyle, theme } from '@/styles';
import { Nav, Social, Email, Footer, Loader } from '@/components';
import { usePathname } from 'next/navigation';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    if (typeof window === 'undefined') return;
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    // Only show loader on home page and only on client
    if (isHome) {
      setIsLoading(true);
    }
  }, [isHome]);

  useEffect(() => {
    if (!mounted || isLoading) {
      return;
    }

    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading, mounted]);

  // Prevent hydration mismatch by not rendering loader on initial server render
  if (!mounted) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <a className="skip-to-content" href="#content">
          Skip to Content
        </a>
        <StyledContent>
          <Nav isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />
          <div id="content">
            {children}
            <Footer />
          </div>
        </StyledContent>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <a className="skip-to-content" href="#content">
        Skip to Content
      </a>

      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <StyledContent>
          <Nav isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />

          <div id="content">
            {children}
            <Footer />
          </div>
        </StyledContent>
      )}
    </ThemeProvider>
  );
}

