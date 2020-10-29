import React from "react";
import "./Header.css";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <AccessAlarmIcon />
        <h3>
          Good morning,<span>Pragya</span>
        </h3>
      </div>
      <div className="header__right">
        <input type="text" placeholder="search article" />
        <SearchOutlinedIcon />
      </div>
    </div>
  );
}

export default Header;
