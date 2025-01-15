import React, { useState } from "react";
import { HeaderHome } from "../component/HeaderHome";
import "../style/profile.css"; // Create a CSS file for styling
import { TextField } from "@mui/material";

export const Profile = () => {
    const [user, setUser] = useState({
        username: "John Doe",
        email: "john.doe@example.com",
        nomor_telepon: "081234567890",
        profilePicture: "https://via.placeholder.com/150", // Placeholder image
    });

    const handleNameChange = (event) => {
        setUser({ ...user, name: event.target.value });
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className="side-navigation">
                <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#transaction">Transaction</a></li>
                    <li><a href="#history">History</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </div>
            <div className="profile-page" style={{ flex: 1 }}>
                <HeaderHome />
                <div className="profile-container">
                    <div className="profile-title">
                        <h1>Profile</h1>
                        <p>Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
                    </div>
                    <div className="profile-header">
                        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                        <div className="informasi">
                            <p className="title">Username:</p>
                            <TextField
                                variant="outlined"
                                value={user.username}
                                onChange={handleNameChange}
                                className="text-input"
                            />
                        </div>
                        <div className="informasi">
                            <p className="title">Email:</p>
                            <TextField
                                variant="outlined"
                                value={user.email}
                                onChange={handleNameChange}
                                className="text-input"
                            />
                        </div>
                        <div className="informasi">
                            <p className="title">No HP:</p>
                            <TextField
                                variant="outlined"
                                value={user.nomor_telepon}
                                onChange={handleNameChange}
                                className="text-input"
                            />
                        </div>
                        <div className="profile-actions"></div>
                            <button className="save-button" onClick={() => alert('Profile saved!')}>Save</button>
                            <button className="logout-button" onClick={() => alert('Logged out!')}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};