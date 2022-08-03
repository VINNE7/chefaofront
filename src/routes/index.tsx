import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/AuthLogin/RequireAuth";
import FirstStablishmentSignup from "../pages/firstStablishmentSignup";
import Home from "../pages/homepage";
import Login from "../pages/login";
import MenuPage from "../pages/MenuPage";
import SecondStablishmentSignup from "../pages/secondStablishmentSignup";
import Signup from "../pages/signup";
import SuccessfulRegistration from "../pages/successfulRegistration";
<<<<<<< HEAD

=======
>>>>>>> e4365b7828ee68b6c5c100c0dd5d488ba889a053

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
      <Route path="/menu" element={<MenuPage />}></Route>
    </Routes>
  );
}
