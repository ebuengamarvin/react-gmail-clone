import React from 'react';
import { SidebarOptionContainer } from './styles';

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <SidebarOptionContainer selected={selected}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
