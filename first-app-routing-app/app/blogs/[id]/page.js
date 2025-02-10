import React from "react";

const Blog = async (props) => {
  const paramaData = await props;
  console.log("props", paramaData);
  return <div>i am dynamic blog page</div>;
};

export default Blog;
