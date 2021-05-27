import React from 'react';
import {
  EmailListContainer,
  EmailListSettings,
  EmailListSettingsLeft,
  EmailListSettingsRight,
  EmailListSection,
  EmailListRow,
} from './styles';
import Section from 'components/Section';
import EmailRow from 'components/EmailRow';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const EmailList = () => {
  console.log(
    Array(5)
      .fill(0)
      .map((_, index) => index)
  );
  return (
    <EmailListContainer>
      <EmailListSettings>
        <EmailListSettingsLeft>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </EmailListSettingsLeft>

        <EmailListSettingsRight>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </EmailListSettingsRight>
      </EmailListSettings>

      <EmailListSection>
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </EmailListSection>

      <EmailListRow>
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <EmailRow
              key={index}
              title="React"
              subject="Developer: Marvin Ebuenga"
              description="React was awesome!"
              time="10pm"
            />
          ))}
      </EmailListRow>
    </EmailListContainer>
  );
};

export default EmailList;
