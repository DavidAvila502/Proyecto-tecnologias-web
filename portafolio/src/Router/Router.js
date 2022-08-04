import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../Views/Home/HomeView";
import BlogView from "../Views/Blog/BlogView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="blog" element={<BlogView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
