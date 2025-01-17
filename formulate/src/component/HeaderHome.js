import React, { useState } from "react";
import "../style/headerhome.css";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import Notification from "./Notification";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export const HeaderHome = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <header className="header-home">
            <div className="container">
                <Link to="/" className="brand">FORMULATE</Link>
                <div className="search-box">
                    <TextField
                        placeholder="Search..."
                        variant="outlined"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            style: {
                                borderRadius: '15px',
                                height: "45px",
                                width: isFocused ? '300px' : '200px',
                                transition: 'width 0.3s ease-in-out',
                            },
                        }}
                    />
                </div>
                <div className="icons">
                    <Link to="/home"> <HomeIcon className="icon-home" /> </Link>
                    <Notification />    
                    <Link to="/keranjang"> <ShoppingBasketIcon className="icon-basket"/> </Link>
                    <Link to="/profile"> <AccountCircleIcon className="icon-profile" /> </Link>
                </div>
            </div>
        </header>
    );
};