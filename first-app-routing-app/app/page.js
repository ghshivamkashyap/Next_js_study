import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">
        i am home page
        <Link className=" text-blue-500 text-xl ml-10" href={"/about"}>About</Link>
      </main>
    </div>
  );
}
