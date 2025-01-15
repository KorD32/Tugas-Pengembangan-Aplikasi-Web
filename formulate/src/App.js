import { Routes, Route } from 'react-router-dom'; // pastikan sudah import Routes dan Route
import Routesutils from "./routes/Routesutils";
import { Dashboard } from './page/Dasboard';
import { Login } from './page/Login';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/routesutils" element={<Routesutils />} /> {/* Jika ingin menambahkan Route untuk Routesutils */}
        </Routes>
    );
}

export default App;
