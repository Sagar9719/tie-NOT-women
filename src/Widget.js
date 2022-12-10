import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import "./css/widget.css"

function Widget() {
  return (
   <>
    <div className="widget">
       
             <div className="widget_top">
             <div className="widget__header">
            <h4>tie-UP News</h4>
            <InfoIcon/>
        </div>
        <div className="widget__body">
            <ul className="widget__options">
                <li>
                    <h4>Slaying Event Search Fees</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>

                <li>
                    <h4>Cricket Tournament</h4>
                    <p>This year cricket tournament will be held in Ghaziabad</p>
                </li>

                <li>
                    <h4>Volleyball Tournament</h4>
                    <p>This year cricket tournament will be held in Bhagalpur</p>
                </li>

                <li>
                    <h4>Badminton Tournament</h4>
                    <p>This year cricket tournament will be held in Delhi</p>
                </li>

                <li>
                    <h4>Swimming Competition</h4>
                    <p>This year  swimming competition will be held in Mumbai</p>
                </li>


                           </ul>
        </div>
        
 </div>

      

    <div className="widget_bottom">
        <div className="widget__header">
            <h4>Today's Events</h4>
            <InfoIcon/>
        </div>
        <div className="widget__body">
            <ul className="widget__options">
                <li>
                    <h4>Touranments in Ghaziabad</h4>
                    <p>Cricket</p>
                </li>
                <li>
                    <h4> Competitions in your city</h4>
                    <p>Sports</p>
                </li>

                <li>
                    <h4> Cricket Match</h4>
                    <p>Delhi</p>
                </li>
                <li>
                    <h4>Swimming Competition </h4>
                    <p>Meerut</p>
                </li>
                <li>
                    <h4>Wrestling Competiton</h4>
                    <p>Varanasi</p>
                </li>
            </ul>
        </div>
        </div>
        </div>
 </>
  )
}

export default Widget
