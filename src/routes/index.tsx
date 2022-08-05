import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/AuthLogin/RequireAuth";
import FirstStablishmentSignup from "../pages/firstStablishmentSignup";
import Home from "../pages/Homepage";
import Login from "../pages/Login";
import MenuPage from "../pages/MenuPage";
import SecondStablishmentSignup from "../pages/SecondStablishmentSignup";
import Signup from "../pages/Signup";
import SuccessfulRegistration from "../pages/SuccessfulRegistration";

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
      <Route
        path="/firstStablishmentSignup"
        element={<FirstStablishmentSignup />}
      ></Route>
      <Route
        path="/secondStablishmentSignup"
        element={<SecondStablishmentSignup />}
      ></Route>
      <Route
        path="/successfulRegistration"
        element={<SuccessfulRegistration />}
      ></Route>
      <Route path="/menupage" element={<MenuPage />}></Route>
    </Routes>
  );
}
