import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../page/Dasboard";
import { Login } from "../page/Login";
import NotFound from "../page/NotFound";

function Routesutils() { 
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default Routesutils;
