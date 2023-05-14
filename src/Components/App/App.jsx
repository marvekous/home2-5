import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import {
  AboutPage,
  MainPage,
  Posts,
} from "../../pages";
import PostDetailsPage from "../../pages/PostDetailsPage";

import NavbarMenu from "../NavbarMenu/NavbarMenu";

const App = () => {
  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="users/:id" element={<  PostDetailsPage/>} />
        <Route path="*" element={<div>Not found 404</div>} />
      </Routes>
    </Router>
  );
};

const Protected = ({ children }) => {
  const [token] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/login");
  }, []);

  return children;
};

export default App;
