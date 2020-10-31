import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DataUsageOutlinedIcon from "@material-ui/icons/DataUsageOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import RowingOutlinedIcon from "@material-ui/icons/RowingOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <Avatar src="https://static.toiimg.com/photo/70703164.cms" />
        <h4>Feb 02, 2020</h4>
        <p>08:43 am</p>
      </div>
      <SidebarRow Icon={HomeOutlinedIcon} title="Home" />
      <SidebarRow Icon={DataUsageOutlinedIcon} title="International" />
      <SidebarRow Icon={BusinessCenterOutlinedIcon} title="Business" />
      <SidebarRow Icon={PlayCircleOutlineOutlinedIcon} title="Entertainment" />
      <SidebarRow Icon={RowingOutlinedIcon} title="Sports" />
      <SidebarRow Icon={FavoriteBorderOutlinedIcon} title="Health" />
      <div className="inbox">
        <div className="inbox__details">
          <div className="message">
            <h4>News in a box</h4>
            <p>Box is all you need</p>
          </div>
          <DraftsOutlinedIcon />
        </div>
        <button>Upgrade</button>
      </div>
    </div>
  );
}

export default Sidebar;
