import { Route, Routes } from "react-router-dom";

import GuestLayout from "./layout/GuestLayout";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
