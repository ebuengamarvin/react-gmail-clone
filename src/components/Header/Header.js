import React from 'react';
import {
  HeaderContainer,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
  HeaderInputCaret,
  HeaderAppsIcon,
  HeaderNotificationsIcon,
} from './styles';
import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" />
      </HeaderLeft>

      <HeaderMiddle>
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <HeaderInputCaret />
      </HeaderMiddle>

      <HeaderRight>
        <IconButton>
          <HeaderAppsIcon />
        </IconButton>
        <IconButton>
          <HeaderNotificationsIcon />
        </IconButton>
        <Avatar />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
