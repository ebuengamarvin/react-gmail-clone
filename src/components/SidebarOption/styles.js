import styled from 'styled-components';

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #818181;
  cursor: pointer;

  && {
    ${(props) =>
      props.selected &&
      `
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
    `}
  }

  > .MuiSvgIcon-root {
    padding: 5px;
  }

  > h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }

  > p {
    display: none;

    ${(props) => props.selected && 'display: inline'}
  }

  &:hover > p {
    display: inline;
  }

  &:hover,
  &:hover > p,
  &:hover > h3,
  &:active,
  &:active > p,
  &:active > h3 {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800 !important;
  }
`;
