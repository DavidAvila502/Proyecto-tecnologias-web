import React from "react";
import NabvarBlog from "./Containers/Navbar/NabvarBlog";
const BlogView = () => {
  return (
    <div>
      <NabvarBlog />
      <img
        src="assets/images/cat.jpg"
        style={{ height: "400px" }}
        alt="sad cat"
      />
      <h1>Aqui deberia estar el blog 😢</h1>
    </div>
  );
};

export default BlogView;
