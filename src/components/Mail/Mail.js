import React from 'react';
import { IconButton } from '@material-ui/core';
import {
  MailContainer,
  MailTools,
  MailToolsLeft,
  MailToolsRight,
  MailBody,
  MailBodyHeader,
  MailBodyHeaderTime,
  MailBodyMessage,
  MailImportantIcon,
} from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';

const Mail = () => {
  const history = useHistory();

  return (
    <MailContainer>
      <MailTools>
        <MailToolsLeft>
          <IconButton onClick={() => history.push('/')}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>

          <IconButton>
            <WatchLaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <LabelImportantIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </MailToolsLeft>

        <MailToolsRight>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>

          <IconButton>
            <PrintIcon />
          </IconButton>

          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </MailToolsRight>
      </MailTools>

      <MailBody>
        <MailBodyHeader>
          <h2>Subject</h2>
          <MailImportantIcon />
          <p>Title</p>
          <MailBodyHeaderTime>10pm</MailBodyHeaderTime>
        </MailBodyHeader>

        <MailBodyMessage>
          <p>This is a message</p>
        </MailBodyMessage>
      </MailBody>
    </MailContainer>
  );
};

export default Mail;
