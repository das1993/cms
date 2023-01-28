import "App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/login";
import Dashboard from "pages/admin/dasboard";
import Profile from "pages/admin/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
