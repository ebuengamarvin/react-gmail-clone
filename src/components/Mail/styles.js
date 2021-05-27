import styled from 'styled-components';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

export const MailContainer = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

export const MailTools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const MailToolsLeft = styled.div`
  display: flex;
`;

export const MailToolsRight = styled.div``;

export const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 30px;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

export const MailBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding: 20px;
  position: relative;

  > h2 {
    font-weight: 400;
    margin-right: 20px;
  }

  > p {
    margin-left: 20px;
  }
`;

export const MailBodyHeaderTime = styled.p`
  position: absolute;
  top: 24px;
  right: 0;
  font-size: 12px;
  color: grey;
`;

export const MailBodyMessage = styled.div`
  > p {
    padding: 10px;
    margin-right: 20px;
    overflow-wrap: break-word;
  }
`;

export const MailImportantIcon = styled(LabelImportantIcon)`
  color: #e8ab02 !important;
`;
