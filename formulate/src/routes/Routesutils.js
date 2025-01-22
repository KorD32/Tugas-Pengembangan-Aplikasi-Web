import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../page/Dasboard";
import { Login } from "../page/Login";
import NotFound from "../page/NotFound";
import { Profile } from "../page/Profile";
import ProductDetail from "../page/ProductDetail";
import Register from "../page/register";
import { HomePage } from "../page/HomePage";

function Routesutils() { 
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/home/" element={<HomePage />}/>
            <Route path="/login/" element={<Login />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/register/" element={<Register/>}/>
            <Route path="/productdetail/" element={<ProductDetail />} />
        </Routes>
    );
}

export default Routesutils;
