import styled from 'styled-components';

export const EmailRowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 999;

  &:hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;

export const EmailRowOptions = styled.div`
  display: flex;
`;

export const EmailRowTitle = styled.div`
  flex: 0.3;
  font-size: 13px;
  font-weight: bold;
`;

export const EmailRowMessage = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 13px;

  > h4 {
    display: flex;
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const EmailRowDescription = styled.div`
  font-weight: 400;
  color: grey;
  margin-left: 3px;
`;

export const EmailRowTime = styled.p`
  font-weight: bold;
  padding-right: 15px;
  font-size: 9px;
`;
