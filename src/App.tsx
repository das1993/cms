import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/login";
import Dashboard from "pages/admin/dasboard";
import Profile from "pages/admin/profile";
import Layout from "pages/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
