import React from 'react';
import {
  EmailRowContainer,
  EmailRowOptions,
  EmailRowTitle,
  EmailRowMessage,
  EmailRowDescription,
  EmailRowTime,
} from './styles';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router';

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();

  return (
    <EmailRowContainer onClick={() => history.push('/mail')}>
      <EmailRowOptions>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </EmailRowOptions>

      <EmailRowTitle>
        <h3>{title}</h3>
      </EmailRowTitle>

      <EmailRowMessage>
        <h4>
          {`${subject} - `}
          <EmailRowDescription>
            <span>{description}</span>
          </EmailRowDescription>
        </h4>
      </EmailRowMessage>

      <EmailRowTime>{time}</EmailRowTime>
    </EmailRowContainer>
  );
};

export default EmailRow;
