'use client';

import React from 'react';
import styled from 'styled-components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

interface MainContainerProps {
  children: React.ReactNode;
}

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <StyledMainContainer className="fillHeight">
      {children}
    </StyledMainContainer>
  );
}

