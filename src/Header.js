import React from 'react';
import './Header.css';
import logo from './net.png';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from  '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
const Header = () => {
return(
    <>
<div className="header">
    <div className="header_icons">
<div className="icons icon_active">
<HomeIcon />
<p> Home</p>
</div>
<div className="icons">
    <FlashOnIcon />
    <p> Treanding</p>
</div>
<div className="icons">
    <LiveTvIcon />
    <p> Verified</p>
</div>

<div className="icons">
    <VideoLibraryIcon />
    <p> Collections</p>
</div>
<div className="icons">
<SearchIcon />
<p> Search</p>
</div>
<div className="icons">
    <PersonOutlineIcon />
    <p> Account </p>
</div>

    </div>
<img src={logo} alt="Netflix" />
</div>
    </>
);
}
export default Header;