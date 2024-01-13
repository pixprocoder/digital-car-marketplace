"use client";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const NavbarPage = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <header className=" sticky top-0  py-4 px-4 lg:container mx-auto z-10 bg-[#000000]  shadow-lg border-b border-gray-900  ">
      <div className=" flex justify-between items-center ">
        <div className="flex-1 ">
          <Link href="/" className=" font-bold text-xl text-white">
            Logo
          </Link>
        </div>
        <ul className="hidden navItem  lg:flex gap-6 justify-center items-center">
          {navLinks.map((el, i) => (
            <>
              <Link
                className={` bg-white font-semibold mr-4 cursor-pointer hover:font-bold bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-100`}
                key={i}
                href={el.href}
              >
                {el.key}
              </Link>
            </>
          ))}

          <h1 className="text-white">{user?.name}</h1>

          {user?.email ? (
            <Button onClick={() => signOut()} className="">
              LOGOUT
            </Button>
          ) : (
            <Link href="/login">
              <Button className="">LOGIN</Button>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default NavbarPage;
