import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../page/Dasboard";
import { Login } from "../page/Login";
import NotFound from "../page/NotFound";
import { Profile } from "../page/Profile";
import ProductDetail from "../page/ProductDetail";
import Register from "../page/register";
import { HomePage } from "../page/HomePage";
import History from "../page/History";
import ProtectedRoute from "./ProtectedRoute";

function Routesutils() { 
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/register/" element={<Register />} />
            <Route path="/home/" element={<HomePage />} />
            <Route path="/history" element={<History /> } />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/productdetail/" element={<ProductDetail />} />
            
           {/* <Route 
                path="/home/" 
                element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/profile/" 
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="/productdetail/" 
                element={
                    <ProtectedRoute>
                        <ProductDetail />
                    </ProtectedRoute>
                } 
            /> */}
        </Routes>
    );
}

export default Routesutils;