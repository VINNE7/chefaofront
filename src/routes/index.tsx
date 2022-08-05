import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/AuthLogin/RequireAuth";
import FirstStablishmentSignup from "../pages/firstStablishmentSignup";
import Home from "../pages/Homepage";
import Login from "../pages/Login";
import SecondStablishmentSignup from "../pages/SecondStablishmentSignup";
import Signup from "../pages/Signup";
import SuccessfulRegistration from "../pages/SuccessfulRegistration";
import MenuPage from "../pages/menu";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/firstStablishmentSignup" element={<FirstStablishmentSignup />}></Route>
      <Route path="/secondStablishmentSignup" element={<SecondStablishmentSignup />}></Route>
      <Route path="/successfulRegistration" element={<SuccessfulRegistration />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
    </Routes>
  );
}
