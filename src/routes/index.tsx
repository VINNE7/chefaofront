import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/AuthLogin/RequireAuth";
// import FirstStablishmentSignup from "../pages/firstStablishmentSignup";
import Home from "../pages/Homepage";
import Login from "../pages/Login";
import Signup from "../pages/signup";
import SuccessfulRegistration from "../pages/SuccessfulRegistration";
import MenuPage from "../pages/Menu";

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
      {/* <Route path="/firstStablishmentSignup" element={<FirstStablishmentSignup />}></Route> */}
      <Route path="/successfulRegistration" element={<SuccessfulRegistration />}></Route>
      <Route path="/menu" element={<MenuPage />}></Route>
    </Routes>
  );
}
