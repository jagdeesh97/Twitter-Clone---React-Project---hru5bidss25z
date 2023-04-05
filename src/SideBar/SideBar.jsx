import React from "react";
import "./SideBar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
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
import { async } from "@firebase/util";
import { useState, useEffect } from "react";

const SideBar = () => {
    const { googleSignIn, logOut, user } = UserAuth();

    const [isSignIn, setSignIn] = useState(true);
    const [title, setTitle] = useState("Sign In");

    const LoginFn = async () => {
        try {
            let signIn = !isSignIn;
            setSignIn(signIn);
            if (isSignIn) {
                await googleSignIn();
            } else {
                await logOut();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            setTitle("Sign Out");
        } else {
            setTitle("Sign In");
        }
    }, [user]);
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitter-icon" />
            <SideBarOptions active Icon={HomeIcon} text="Home" />
            <SideBarOptions Icon={SearchIcon} text="Explore" />
            <SideBarOptions Icon={NotificationsNoneIcon} text="Notifications" />
            <SideBarOptions Icon={MailOutlineIcon} text="Messages" />
            <SideBarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SideBarOptions Icon={ListAltIcon} text="Lists" />
            <SideBarOptions Icon={PermIdentityIcon} text="Profile" />
            <SideBarOptions Icon={TopicIcon} text="Topics" />
            <SideBarOptions Icon={MoreHorizIcon} text="More" />
            <Button className="signBtn" onClick={LoginFn}>{title}</Button>
            <Button className="sidebar-tweet" variant="outlined">Tweet</Button>
        </div>
    );
};

export default SideBar;