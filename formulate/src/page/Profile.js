import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";


export const Profile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSI6ujefGy4TmYhsTShYP4mU62702wVLlO9g&s", 
    });

    const [originalUser, setOriginalUser] = useState({ ...user });

    const [isEditable, setIsEditable] = useState({
        username: false,
        email: false,
        nomor_telepon: false,
        password: false,
        alamat: false,
    });

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleNameChange = (field, value) => {
        setUser({ ...user, [field]: value });
    };

    const handleEditToggle = (field) => {
        if (isEditable[field]) {
            setUser({ ...originalUser });
        }
        setIsEditable({ ...isEditable, [field]: !isEditable[field] });
    };

    const handleSave = () => {
        if (JSON.stringify(user) !== JSON.stringify(originalUser)) {
            setOriginalUser({ ...user });
            setIsEditable({
                username: false,
                email: false,
                nomor_telepon: false,
                password: false,
                alamat: false,
            });
            alert("Profile saved!");
        }
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const [userEmail, setEmail] = useState("")
    const [userAddress, setAddress] = useState("")
    const [userPhone_number, setPhone_number] = useState("")
    const [userName, setUserName] = useState("")


    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedInStatus");
        if (loggedIn === "true") {
            setIsLoggedIn(true);
            const storedUserId = localStorage.getItem("id");
            const storedToken = localStorage.getItem("token");
            const storedUserName = localStorage.getItem("username")
            const storedEmail = localStorage.getItem("email")
            const storedPhone_number = localStorage.getItem("phone_number")
            const storedAddress = localStorage.getItem("address")

            setUserId(storedUserId);
            setToken(storedToken);
            setUserName(storedUserName)
            setEmail(storedEmail)
            setPhone_number(storedPhone_number)
            setAddress(storedAddress)


        } else {
            setIsLoggedIn(false);
            setUserId("");
            setToken("");
            setUserName("")
            setEmail("")
            setPhone_number("")
            setAddress("")

        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("loggedInStatus");
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("username")
        localStorage.removeItem("email")
        localStorage.removeItem("phone_number")
        localStorage.removeItem("address")

        setIsLoggedIn(false);
        setUserId("");
        setToken("");
        setUserName("")
        setEmail("")
        setPhone_number("")
        setAddress("")

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
                                    value={userName}
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
                            <p className="title">Email:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    value={userEmail}
                                    onChange={(e) => handleNameChange("email", e.target.value)}
                                    className="text-input"
                                    disabled={!isEditable.email}
                                />
                            </div>
                            <div className="edit-button">
                            </div>
                        </div>
                        <div className="informasi">
                            <p className="title">Password:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    value="replace nanti"
                                    onChange={(e) => handleNameChange("password", e.target.value)}
                                    className="text-input"
                                    disabled={!isEditable.password}
                                    type={isEditable.password ? "text" : "password"} 
                                />
                            </div>
                            <div className="edit-button">
                            </div>
                        </div>
                        <div className="informasi">
                            <p className="title">No HP:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    value={userPhone_number}
                                    onChange={(e) => handleNameChange("nomor_telepon", e.target.value)}
                                    className="text-input"
                                    disabled={!isEditable.nomor_telepon}
                                />
                            </div>
                            <div className="edit-button">
                                <Button onClick={() => handleEditToggle("nomor_telepon")}>
                                    {isEditable.nomor_telepon ? "Cancel" : "Edit"}
                                </Button>
                            </div>
                        </div>
                        <div className="informasi">
                            <p className="title">Alamat:</p>
                            <div className="user-input">
                                <TextField
                                    variant="outlined"
                                    value={userAddress}
                                    onChange={(e) => handleNameChange("alamat", e.target.value)}
                                    className="text-input"
                                    disabled={!isEditable.alamat}
                                />
                            </div>
                            <div className="edit-button">
                                <Button onClick={() => handleEditToggle("alamat")}>
                                    {isEditable.alamat ? "Cancel" : "Edit"}
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
        </div>
    );
};
