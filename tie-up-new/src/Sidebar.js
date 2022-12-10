import React from 'react'
import "./css/sidebar.css"
import {Avatar} from "@material-ui/core"
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'

function Sidebar() {

  const user =useSelector(selectUser)
  return (

    <div className="sidebar">
<div className="sidebar__profile">
     <img src="https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/11/6-Reasons-You-Should-Never-Open-a-Gym.jpg"/>
    <div className="profile__details">
        <Avatar src={user.photoURL}/>
        <h4>{user.displayName}</h4>
        <p>Cricketer<br/> Wrestler <br/>National Level Finalist</p>
         </div>
         <div className="profile__stats">
<span>Who viewed your profile</span>
<span className="stat__number">40</span>
         </div>

        
         <div className="profile__stats">
<span>Request</span>
<span className="stat__number">50 </span>
 
         </div>
         <div className="profile__stats">
<span>Connection<br/><b>Grow Your Network</b></span>
<span className="stat__number">150 </span>
 
         </div>

    </div>    


    <div className="sidebar__recent">
        <p>Recent</p>
        <p className="hash"><span>#</span>Fitness_Freak</p>
        <p className="hash"><span>#</span>Badminton</p>
        <p className="hash"><span>#</span>Yoga</p>
        <p className="hash"><span>#</span>Gym</p>
        <p className="hash"><span>#</span>Running</p>
        <p className="hash"><span>#</span>Wrestling</p>
        <p className="hash"><span>#</span>National Finalist</p>
        </div>  
    </div>
  )
}

export default Sidebar

