import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const MainHeader = () => {
  // console.log("Logo", logo);

  return (
    <div className="flex justify-between items-center p-4 ">
      <Link href="/">
        <Image src={logo} height={100} width={100} priority alt="popan" />
      </Link>

      <ul className="flex space-x-4">
        <li className="text-xl">
          <Link href="/meals">All Meals</Link>
        </li>
        <li className="text-xl">
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainHeader;
