'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { config } from '@/config';
import sr from '@/utils/sr';
import { usePrefersReducedMotion } from '@/hooks';
import { Icon } from '../icons';

const StyledResearchSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledResearchList = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
`;

const StyledResearchItem = styled.li`
  position: relative;
  padding: 20px 0;
  border-top: 1px solid var(--lightest-navy);
  transition: var(--transition);

  &:last-of-type {
    border-bottom: 1px solid var(--lightest-navy);
  }

  &:hover,
  &:focus-within {
    .research-title {
      color: var(--green);
    }
  }
`;

const StyledResearchContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledResearchInfo = styled.div`
  flex: 1;
`;

const StyledResearchTitle = styled.h3`
  margin: 0 0 10px;
  color: var(--lightest-slate);
  font-size: var(--fz-xl);
  font-weight: 500;
  transition: var(--transition);

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;

const StyledResearchAuthors = styled.p`
  margin: 0 0 8px;
  color: var(--light-slate);
  font-size: var(--fz-sm);
  font-style: italic;
`;

const StyledResearchVenue = styled.p`
  margin: 0 0 8px;
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
`;

const StyledResearchAbstract = styled.p`
  margin: 12px 0 0 0;
  color: var(--slate);
  font-size: var(--fz-sm);
  line-height: 1.6;
`;

const StyledResearchMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

const StyledCitationCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
`;

const StyledResearchLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--lightest-slate);

  a {
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 8px;
    transition: var(--transition);

    &:hover,
    &:focus {
      transform: translateY(-2px);
      color: var(--green);
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const StyledGoogleScholarLink = styled.a`
  ${({ theme }) => theme.mixins.smallButton};
  margin-top: 30px;
  display: inline-block;
  font-size: var(--fz-sm);
`;

interface ResearchPaper {
  title: string;
  authors: string;
  venue: string;
  year: string;
  citations: number;
  abstract?: string;
  url?: string;
  pdf?: string;
  arxiv?: string;
  code?: string;
}

interface ResearchProps {
  papers?: ResearchPaper[];
  scholarUrl?: string;
}

const Research = ({
  papers = [],
  scholarUrl = 'https://scholar.google.com/citations?user=YdqvDuIAAAAJ&hl=en',
}: ResearchProps) => {
  const revealContainer = useRef<HTMLElement>(null);
  const revealItems = useRef<(HTMLLIElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (revealContainer.current && sr) {
      sr.reveal(revealContainer.current, config.srConfig());
    }
    revealItems.current.forEach((ref, i) => {
      if (ref && sr) {
        sr.reveal(ref, config.srConfig(i * 100));
      }
    });
  }, [prefersReducedMotion]);

  const researchPapers = papers.length > 0 ? papers : [];
  const totalCitations = researchPapers.reduce(
    (sum, paper) => sum + paper.citations,
    0
  );

  return (
    <StyledResearchSection id="research" ref={revealContainer}>
      <h2 className="numbered-heading">Research Publications</h2>

      <div
        style={{
          marginBottom: '20px',
          color: 'var(--slate)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fz-sm)',
        }}
      >
        Total Citations:{' '}
        <span style={{ color: 'var(--green)' }}>{totalCitations}</span>
      </div>

      <StyledResearchList>
        {researchPapers.map((paper, i) => (
          <StyledResearchItem
            key={i}
            ref={(el) => {
              revealItems.current[i] = el;
            }}
          >
            <StyledResearchContent>
              <StyledResearchInfo>
                <StyledResearchTitle className="research-title">
                  {paper.url ? (
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {paper.title}
                    </a>
                  ) : (
                    paper.title
                  )}
                </StyledResearchTitle>
                <StyledResearchAuthors>{paper.authors}</StyledResearchAuthors>
                <StyledResearchVenue>
                  {paper.venue} • {paper.year}
                </StyledResearchVenue>
                {paper.abstract && (
                  <StyledResearchAbstract>
                    {paper.abstract}
                  </StyledResearchAbstract>
                )}
              </StyledResearchInfo>
              <StyledResearchMeta>
                <StyledCitationCount>
                  <span>{paper.citations}</span>
                  <span>citations</span>
                </StyledCitationCount>
                <StyledResearchLinks>
                  {paper.pdf && (
                    <a
                      href={paper.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="PDF"
                    >
                      <Icon name="External" />
                    </a>
                  )}
                  {paper.arxiv && (
                    <a
                      href={paper.arxiv}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="arXiv"
                    >
                      <Icon name="External" />
                    </a>
                  )}
                  {paper.code && (
                    <a
                      href={paper.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Code"
                    >
                      <Icon name="GitHub" />
                    </a>
                  )}
                </StyledResearchLinks>
              </StyledResearchMeta>
            </StyledResearchContent>
          </StyledResearchItem>
        ))}
      </StyledResearchList>

      <StyledGoogleScholarLink
        href={scholarUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View All Publications on Google Scholar
      </StyledGoogleScholarLink>
    </StyledResearchSection>
  );
};

export default Research;
