import React from "react";
import "./SideBarOptions.css";

const SideBarOptions = ({active, Icon, text}) => {
    return (
        <div className={`sidebar-options ${active && "sidebar-options--active"}`}>
            <Icon className="option-icons"/>
            <h2>{text}</h2>
        </div>
    );
 };

export default SideBarOptions;