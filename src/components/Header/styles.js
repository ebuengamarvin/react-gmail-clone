import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > img {
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
  }
`;

export const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 5px;

  > .MuiSvgIcon-root {
    color: grey;
  }

  > input {
    border: none;
    width: 100%;
    padding: 10px;
    outline: none;
    font-size: medium;
    background-color: transparent;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  padding-right: 20px;
`;

export const HeaderInputCaret = styled(ArrowDropDownIcon)``;
export const HeaderAppsIcon = styled(AppsIcon)``;
export const HeaderNotificationsIcon = styled(NotificationsIcon)``;
