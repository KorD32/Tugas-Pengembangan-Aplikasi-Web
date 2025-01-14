import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./page/Dasboard";
import { Login } from "./page/Login";
import "./App.css"

function App() { 
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login/" element={<Login />} />
        </Routes>
    );
}

export default App;
