import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/homepage";
import Login from "../pages/login";
import SecondStablishmentSignup from "../pages/secondStablishmentSignup";
import Signup from "../pages/signup";
import SuccessfulRegistration from "../pages/successfulRegistration";

import { RequireAuth } from "../contexts/Auth/AuthLogin/RequireAuth";
import MenuPage from "../pages/MenuPage";

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
      <Route path="/firstStablishmentSignup" element={<></>}></Route>
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
