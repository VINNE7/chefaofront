import { Routes, Route, Link } from "react-router-dom";
import FirstStablishmentSignup from "../pages/firstStablishmentSignup";
import Home from "../pages/homepage";
import Login from "../pages/signup";
import SecondStablishmentSignup from "../pages/secondStablishmentSignup";
import Signup from "../pages/signup";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
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
    </Routes>
  );
}
