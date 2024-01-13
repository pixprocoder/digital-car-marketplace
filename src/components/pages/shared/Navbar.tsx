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

const NavbarPage = () => {
  const { data } = useSession();
  const user = data?.user;

  const { value } = useAppSelector((state) => state.service);
  console.log(value);

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

          <div className="relative">
            <FaCartPlus className="text-[#2563eb] text-3xl cursor-pointer" />
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
      </div>
    </header>
  );
};

export default NavbarPage;
