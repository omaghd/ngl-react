import { Route, Routes } from "react-router-dom";

import GuestLayout from "./layout/GuestLayout";
import AuthLayout from "./layout/AuthLayout";

import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
