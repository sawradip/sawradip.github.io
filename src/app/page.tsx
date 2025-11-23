import React from 'react';
import Hero from '@/components/sections/hero';
import Research from '@/components/sections/research';
import About from '@/components/sections/about';
import Education from '@/components/sections/education';
import Jobs from '@/components/sections/jobs';
import Achievements from '@/components/sections/achievements';
import Contact from '@/components/sections/contact';
import { getContent } from '@/lib/getContent';
import { getResearchData } from '@/utils/jsonData';
import MainContainer from '@/components/main-container';

export default async function Home() {
  const { jobs, education, achievements } = await getContent();
  const researchPapers = await getResearchData();

  return (
    <MainContainer>
      <Hero />
      <About />
      <Research papers={researchPapers} />
      <Achievements data={achievements} />
      <Education data={education} />
      <Jobs data={jobs} />
      <Contact />
    </MainContainer>
  );
}
