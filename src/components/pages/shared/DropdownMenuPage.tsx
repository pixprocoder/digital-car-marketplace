import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";

const DropdownMenuPage = ({
  userImage,
  closeToggleMenu,
}: {
  userImage: string;
  closeToggleMenu: any;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-blue-500">
        <Button className="border-none  p-2 flex flex-row justify-between gap-2">
          <Avatar className="w-7 h-7 rounded-full">
            <AvatarImage src={userImage} />
            <AvatarFallback className="text-black">GU</AvatarFallback>
          </Avatar>
          My Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900  border-none">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem className="hover:bg-gray-900">
          <Link onClick={closeToggleMenu} className="w-full" href={`/profile`}>
            <Button className="w-full">Profile</Button>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link onClick={closeToggleMenu} href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button onClick={() => signOut()} className="w-full">
            LOGOUT
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuPage;
