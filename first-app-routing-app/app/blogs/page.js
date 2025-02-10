import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <ul className="       ">
        <li>
          <Link href="/blogs/1">Blog 1</Link>
        </li>
        <li>
          <Link href="/blogs/2">Blog 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
