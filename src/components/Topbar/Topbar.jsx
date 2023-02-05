import React from "react";
import "./Topbar.css";
import { Notifications, Language, Settings } from "@mui/icons-material";
import myphoto from 'E:/mern/react-admin/src/assets/images/my_photo.jpg'; 

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Salman dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span className="topbarIconBadge">2</span>

          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarIconBadge">2</span>
            
          </div>
          <div className="topbarIconContainer">
            <Settings />
           
            
          </div>
          <img className="topbarAvatar " src={myphoto} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
