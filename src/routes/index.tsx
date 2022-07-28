import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/AuthLogin/RequireAuth";
import MenuHeader from "../components/MenuHeader";
import FirstStablishmentSignup from "../pages/firstStablishmentSignup";
import Home from "../pages/homepage";
import Login from "../pages/login";
import MenuPage from "../pages/MenuPage";
import SecondStablishmentSignup from "../pages/secondStablishmentSignup";
import Signup from "../pages/signup";
import SuccessfulRegistration from "../pages/successfulRegistration";
import { Category } from "../components/Category";

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
      <Route path="/menu" element={<MenuHeader />}></Route>
      in
    </Routes>
  );
}
