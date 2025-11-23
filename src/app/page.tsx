'use client';

import React from 'react';
import styled from 'styled-components';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Education from '@/components/sections/education';
import Jobs from '@/components/sections/jobs';
import Competitions from '@/components/sections/competitions';
import Contact from '@/components/sections/contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home() {
  return (
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Education />
      <Jobs />
      <Competitions />
      <Contact />
    </StyledMainContainer>
  );
}
