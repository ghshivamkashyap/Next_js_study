import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const MainHeader = () => {
  console.log("Logo", logo);

  return (
    <>
      <Link href="/">
        <img src={logo.src} alt="popan" />
      </Link>

      <ul>
        <li>
          <Link href="/meals">All Meals</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
      </ul>
    </>
  );
};

export default MainHeader;
