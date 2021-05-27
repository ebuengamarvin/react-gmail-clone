import React from 'react';
import { SectionContainer } from './styles';

const Section = ({ Icon, title, color, selected }) => {
  return (
    <SectionContainer color={color} selected={selected}>
      <Icon />
      <h4>{title}</h4>
    </SectionContainer>
  );
};

export default Section;
