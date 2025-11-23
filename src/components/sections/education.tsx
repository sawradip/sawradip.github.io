'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { config } from '@/config';
import sr from '@/utils/sr';
import { usePrefersReducedMotion } from '@/hooks';

const StyledEducationSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .inner {
    width: 100%;
  }
`;

const StyledEducationPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;
  }

  .institution {
    display: block;
    margin-top: 8px;
    font-size: var(--fz-xxl);
    color: var(--green);

    a {
      color: var(--green);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

import type { MarkdownFile } from '@/utils/markdown';

interface EducationProps {
  data?: MarkdownFile[];
}

const Education = ({ data = [] }: EducationProps) => {
  const educationData = data;
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

  if (educationData.length === 0) {
    return null;
  }

  // Get the first education entry (BUET Mechanical Engineering)
  const buetEducation = educationData[0];
  if (!buetEducation) {
    return null;
  }

  const { frontmatter, html } = buetEducation;
  const { title, url } = frontmatter;

  // Spell out BUET in full form
  const institutionName =
    frontmatter.institution === 'BUET'
      ? 'Bangladesh University of Engineering and Technology'
      : frontmatter.institution || frontmatter.company;

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Where I've Learned</h2>

      <div className="inner">
        <StyledEducationPanel>
          <h3>
            <span>{title}</span>
          </h3>
          <span className="institution">
            <a href={url} className="inline-link">
              {institutionName}
            </a>
          </span>
          {frontmatter.location && (
            <p className="range">{frontmatter.location}</p>
          )}
          <p className="range">{frontmatter.range}</p>

          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledEducationPanel>
      </div>
    </StyledEducationSection>
  );
};

export default Education;
