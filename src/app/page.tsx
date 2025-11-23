import React from 'react';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Education from '@/components/sections/education';
import Jobs from '@/components/sections/jobs';
import Competitions from '@/components/sections/competitions';
import Contact from '@/components/sections/contact';
import { getContent } from '@/lib/getContent';
import MainContainer from '@/components/main-container';

export default async function Home() {
  const { jobs, education, competitions } = await getContent();

  return (
    <MainContainer>
      <Hero />
      <About />
      <Education data={education} />
      <Jobs data={jobs} />
      <Competitions data={competitions} />
      <Contact />
    </MainContainer>
  );
}
