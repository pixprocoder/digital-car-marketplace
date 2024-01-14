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

const DropdownMenuPage = ({ userImage }: { userImage: string }) => {
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
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={`/profile`}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Dashboard</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuItem>
          <Button onClick={() => signOut()} className="">
            LOGOUT
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuPage;
