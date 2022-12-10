import React from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {Avatar} from "@material-ui/core"
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
function Header() {

  const user = useSelector(selectUser);
  return (
    <div className="header">
        <div className="header__left">
        <div className="header__logo">
         
            <img src="./images/logo.png"/>
           
            </div>
            <div className="header__search">
            <SearchIcon/>
            <input type="text" placeholder="Search"/>
        </div>
        </div>
      <div className="header__right">
            <Headeroptions Icon={HomeIcon} title="Home"/>
            <Headeroptions Icon={MessageIcon} title="Messaging"/>
            <Headeroptions Icon={NotificationsIcon} title="Notification"/>
          
            <Headeroptions Icon={BusinessCenterIcon} title="Events"/>
            <Headeroptions Icon={PeopleAltIcon} title="My Network"/>
            
            <Headeroptions avatar={Avatar} title={user.displayName}/>
        </div>
    </div>
  )
}

export default Header
