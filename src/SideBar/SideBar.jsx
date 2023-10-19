import React from "react";
import "./SideBar.css";
import { FaXTwitter } from 'react-icons/fa6';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TopicIcon from '@mui/icons-material/Topic';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SideBarOptions from "../SideBarOptions/SideBarOptions";
import { Button } from "@mui/material";
import { UserAuth } from "../Context/AuthContext";
import {useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const {logOut, user } = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    })

    const LoginFn = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className="sidebar">
            <FaXTwitter className="sidebar-twitter-icon" />
            <SideBarOptions active Icon={HomeIcon} text="Home" />
            <SideBarOptions Icon={SearchIcon} text="Explore" />
            <SideBarOptions Icon={NotificationsNoneIcon} text="Notifications" />
            <SideBarOptions Icon={MailOutlineIcon} text="Messages" />
            <SideBarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SideBarOptions Icon={ListAltIcon} text="Lists" />
            <SideBarOptions Icon={PermIdentityIcon} text="Profile" />
            <SideBarOptions Icon={TopicIcon} text="Topics" />
            <SideBarOptions Icon={MoreHorizIcon} text="More" />
            <Button className="signBtn" onClick={LoginFn}>SignOut</Button>
        </div>
    );
};

export default SideBar;