import React, { useState } from "react";
import "../style/headerhome.css";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

export const HeaderHome = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <header className="header-home">
            <div className="container">
                <p className="brand">FORMULATE</p>
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
                                borderRadius: '20px',
                                width: isFocused ? '300px' : '200px',
                                transition: 'width 0.3s ease-in-out',
                            },
                        }}
                    />
                </div>
            </div>
        </header>
    );
};