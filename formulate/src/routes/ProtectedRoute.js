/* import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loggedInStatus") === "true";

    if (!isLoggedIn) {
        alert("Harus login dulu"); // Tampilkan alert jika belum login
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute; */