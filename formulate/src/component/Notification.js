import React, { useState } from 'react';
import { Popover, List, ListItem, ListItemText } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notifications from '../data/Notifications'; // Adjust the path as necessary
import "../style/headerhome.css";

const Notification = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <NotificationsIcon className="icon notification" onClick={handleClick} />
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List>
                    {Notifications.map((notification) => (
                        <ListItem button key={notification.id} onClick={handleClose}>
                            <ListItemText primary={notification.message} />
                        </ListItem>
                    ))}
                </List>
            </Popover>
        </div>
    );
};

export default Notification;