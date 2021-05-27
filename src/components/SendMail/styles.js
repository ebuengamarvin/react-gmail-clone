import styled from 'styled-components';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const SendMailContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 30px;
  background-color: #404040;
  width: 40%;
  height: 50%;
  max-width: 350px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

export const SendMailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  color: gray;

  > h3 {
    color: whitesmoke;
    font-size: 13px;
  }
`;

export const SendMailForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  > input {
    height: 30px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid whitesmoke;
    outline: none;
  }

  > textarea {
    flex: 1;
    padding: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid whitesmoke;
  }
`;

export const SendMailOptions = styled.div`
  /* display: flex;
  justify-content: flex-end; */
`;

export const SendMailButton = styled(Button)`
  background-color: #3079ed !important;
  text-transform: capitalize !important;
  margin: 15px !important;
`;

export const SendMailCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  background-color: white;
  color: red;
  padding: 2px;
  font-size: 12px;
`;
