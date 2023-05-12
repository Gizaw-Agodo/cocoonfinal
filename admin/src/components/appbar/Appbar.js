import { NotificationsNone, Settings } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

import {handleLogout} from "../../api"
import React from "react";
import "./stylex.css";

export default function Topbar() {
  const navigate = useNavigate()
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <h3 className="logo " style={{ fontFamily: "pacifico" }}>
            CoCoon Admin
          </h3>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone /> <span className="topIconBadge">2</span>{" "}
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <button className="productAddButton" onClick={()=>handleLogout(navigate)}>Logout</button>

         
        </div>
      </div>
    </div>
  );
}
