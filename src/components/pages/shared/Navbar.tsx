"use client";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import DropdownMenuPage from "./DropdownMenuPage";
import { useGetUsersQuery } from "@/redux/api/apiSlice";
import { FaCartPlus } from "react-icons/fa6";
import { useAppSelector } from "@/redux/hooks/hooks";
import { Badge } from "@/components/ui/badge";
import { Cart } from "../cart/Cart";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarPage = () => {
  const { data } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const handleResponsiveMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeToggleMenu = () => {
    setIsOpen(false);
  };
  const user = data?.user;

  const { value } = useAppSelector((state) => state.service);

  const { data: userData, isLoading } = useGetUsersQuery(undefined);

  const admin = userData?.data.filter((role: any) => role.role === "admin");
  const super_admin = userData?.data.filter(
    (role: any) => role.role === "super_admin"
  );

  // console.log(userData?.data);

  // console.log(user);

  return (
    <header className=" sticky top-0  py-4 px-4 lg:container mx-auto z-10 bg-[#000000]  shadow-lg border-b border-gray-900  ">
      <div className=" flex justify-between items-center ">
        <div className="">
          <Link href="/" className=" font-bold text-xl text-white">
            Logo
          </Link>
        </div>
        <GiHamburgerMenu
          onClick={handleResponsiveMenu}
          className="text-white text-2xl lg:hidden cursor-pointer z-30"
        />
        {isOpen ? (
          <ul className="  navItem flex flex-col gap-6 justify-center items-center absolute top-12 left-0  z-20 w-full bg-black">
            {navLinks.map((el, i) => (
              <>
                <Link
                  onClick={closeToggleMenu}
                  className={` bg-white font-semibold mr-4 cursor-pointer hover:font-bold bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-100`}
                  key={i}
                  href={el.href}
                >
                  {el.key}
                </Link>
              </>
            ))}

            <div className="relative">
              <Sheet>
                <SheetTrigger asChild>
                  <FaCartPlus
                    onClick={closeToggleMenu}
                    className="text-[#2563eb] text-3xl cursor-pointer"
                  />
                </SheetTrigger>
                <Cart />
              </Sheet>

              <Badge className="text-white absolute bottom-5 right-6">
                {" "}
                {value.length}
              </Badge>
            </div>

            {user?.email ? (
              <div className="mb-2">
                <DropdownMenuPage
                  userImage={user?.image ? user?.image : "Gust"}
                />
              </div>
            ) : (
              <Link onClick={closeToggleMenu} href="/login">
                <Button className="  mb-2">LOGIN</Button>
              </Link>
            )}
          </ul>
        ) : (
          <ul className=" hidden  navItem  lg:flex gap-6 justify-center items-center">
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

            <div className="relative">
              <Sheet>
                <SheetTrigger asChild>
                  <FaCartPlus className="text-[#2563eb] text-3xl cursor-pointer" />
                </SheetTrigger>
                <Cart />
              </Sheet>

              <Badge className="text-white absolute bottom-5 right-6">
                {" "}
                {value.length}
              </Badge>
            </div>

            {user?.email ? (
              <>
                <DropdownMenuPage
                  userImage={user?.image ? user?.image : "Gust"}
                />
              </>
            ) : (
              <Link href="/login">
                <Button className="">LOGIN</Button>
              </Link>
            )}
          </ul>
        )}
      </div>
    </header>
  );
};

export default NavbarPage;
