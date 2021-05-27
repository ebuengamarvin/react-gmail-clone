import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid ${(props) => props.color};
  border-bottom-width: 2px;
  padding: 15px;
  min-width: 200px;
  cursor: pointer;
  color: grey;
  border-width: 0 !important;

  && {
    ${(props) =>
      props.selected &&
      `background-color: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
        border-width: 3px !important;
        border-bottom: 3px solid ${props.color}
        `}
  }

  &:hover {
    background-color: whitesmoke;
    border-width: 3px !important;
  }

  > h4 {
    font-size: 14px;
    margin-left: 15px;
  }
`;
