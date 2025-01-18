import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderHome } from "../component/HeaderHome";
import "../style/profile.css";
import { TextField, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AccountBalance from "@mui/icons-material/AccountBalance";
import History from "@mui/icons-material/History";
import Settings from "@mui/icons-material/Settings";
import SaveIcon from "@mui/icons-material/Save"; 
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Footer } from "../component/FooterPart";
import { FooterCr } from "../component/FooterCr";
import axios from "axios";

export const Profile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        id: "",
        username: "",
        email: "",
        phone_number: "",
        address: "",
        token: "",
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSI6ujefGy4TmYhsTShYP4mU62702wVLlO9g&s",
    });

    const [originalUser, setOriginalUser] = useState({ ...user });

    const [isEditable, setIsEditable] = useState({
        username: false,
        email: false,
        phone_number: false,
        address: false,
    });

    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
    });

    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedInStatus");
        if (loggedIn === "true") {
            const storedUser = {
                id: localStorage.getItem("id"),
                token: localStorage.getItem("token"),
                username: localStorage.getItem("username"),
                email: localStorage.getItem("email"),
                phone_number: localStorage.getItem("phone_number"),
                address: localStorage.getItem("address"),
            };

            setUser(storedUser);
            setOriginalUser(storedUser);
        } else {
            navigate("/login");
        }
    }, [navigate]);

    const handleEditToggle = (field) => {
        if (isEditable[field]) {
            setUser({ ...originalUser }); // Kembalikan data jika dibatalkan
        }
        setIsEditable({ ...isEditable, [field]: !isEditable[field] });
    };

    const handleNameChange = (field, value) => {
        setUser({ ...user, [field]: value });
    };

    const handleSave = async () => {
        try {
            // Update profil
            if (JSON.stringify(user) !== JSON.stringify(originalUser)) {
                const profileResponse = await axios.put(
                    `http://localhost:3000/web/users/update/${user.id}`,
                    {
                        username: user.username,
                        email: user.email,
                        phone_number: user.phone_number,
                        address: user.address,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
    
                if (profileResponse.status === 200) {
                    setOriginalUser({ ...user });
                    alert("Profile updated successfully!");
                }
            }
    
            // Update password jika ada perubahan
            if (passwords.oldPassword && passwords.newPassword) {
                const passwordResponse = await axios.put(
                    `http://localhost:3000/web/users/update-password/${user.id}`,
                    {
                        oldPassword: passwords.oldPassword,
                        newPassword: passwords.newPassword,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
    
                if (passwordResponse.status === 200) {
                    setPasswords({ oldPassword: "", newPassword: "" }); // Reset fields
                    alert("Password updated successfully!");
                }
            }
    
            // Reset state edit
            setIsEditable({
                username: false,
                email: false,
                phone_number: false,
                address: false,
            });
        } catch (error) {
            console.error("Error in saving profile or updating password:", error);
            alert("Failed to save profile or update password. Please try again.");
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="profile">
            <div className="profile-page">
                <HeaderHome />

                <div className="nav-hamburger">
                    <IconButton onClick={() => setDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        <List style={{ width: 250 }}>
                            <ListItem button component="a" href="#profile">
                                <ListItemIcon><AccountCircle /></ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItem>
                            <ListItem button component="a" href="#transaction">
                                <ListItemIcon><AccountBalance /></ListItemIcon>
                                <ListItemText primary="Transaction" />
                            </ListItem>
                            <ListItem button component="a" href="#history">
                                <ListItemIcon><History /></ListItemIcon>
                                <ListItemText primary="History" />
                            </ListItem>
                            <ListItem button component="a" href="#settings">
                                <ListItemIcon><Settings /></ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                        </List>
                    </Drawer>
                </div>

                <div className="profile-container">
                    <div className="profile-title">
                        <h1>Profile</h1>
                        <p className="text">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
                    </div>
                    <div className="profile-header">
                        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                        <div className="informasi">
                            <p className="title">Username:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    value={user.username}
                                    onChange={(e) => handleNameChange("username", e.target.value)}
                                    className="text-input"
                                    disabled={!isEditable.username}
                                />
                            </div>
                            <div className="edit-button">
                                <Button onClick={() => handleEditToggle("username")}>
                                    {isEditable.username ? "Cancel" : "Edit"}
                                </Button>
                            </div>
                        </div>
                        <div className="informasi">
                            <p className="title">Password:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    value={passwords.oldPassword}
                                    onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
                                    className="text-input"
                                />
                            </div>
                            <div className="edit-button"></div>
                        </div>
                        <div className="informasi">
                            <p className="title">New Password:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    type="password"
                                    value={passwords.newPassword}
                                    onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                                    className="text-input"
                                />
                            </div>
                            <div className="edit-button"></div>
                        </div>
                        
                        <div className="informasi">
                            <p className="title">Email:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    value={user.email}
                                    onChange={(e) => handleNameChange("email", e.target.value)}
                                    className="text-input"
                                    disabled={!isEditable.email}
                                />
                            </div>
                            <div className="edit-button">
                                <Button onClick={() => handleEditToggle("email")}>
                                    {isEditable.email ? "Cancel" : "Edit"}
                                </Button>
                            </div>
                        </div>
                        <div className="informasi">
                            <p className="title">No HP:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    value={user.phone_number}
                                    onChange={(e) => handleNameChange("phone_number", e.target.value)}
                                    className="text-input"
                                    disabled={!isEditable.phone_number}
                                />
                            </div>
                            <div className="edit-button">
                                <Button onClick={() => handleEditToggle("phone_number")}>
                                    {isEditable.phone_number ? "Cancel" : "Edit"}
                                </Button>
                            </div>
                        </div>
                        <div className="informasi">
                            <p className="title">Alamat:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    value={user.address}
                                    onChange={(e) => handleNameChange("address", e.target.value)}
                                    className="text-input"
                                    disabled={!isEditable.address}
                                />
                            </div>
                            <div className="edit-button">
                                <Button onClick={() => handleEditToggle("address")}>
                                    {isEditable.address ? "Cancel" : "Edit"}
                                </Button>
                            </div>
                        </div>
                        <div className="profile-actions">
                            <button className="save-button" onClick={handleSave}>
                                <SaveIcon style={{ marginRight: "8px" }} />
                                Save
                            </button>
                            <button className="logout-button" onClick={handleLogout}>
                                <ExitToAppIcon style={{ marginRight: "8px" }} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
                <FooterCr />
            </footer>
        </div>
    );
};