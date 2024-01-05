import { Button } from "@/components/ui/button";

const NavbarPage = () => {
  return (
    <header className="bg-gray-500">
      <nav className="flex items-center justify-between w-[1400px] mx-auto py-4">
        <div className="logo">Logo</div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Book</li>
          <li>Service</li>
          <li>Blog</li>
        </ul>
        <div>
          <Button>Sign up</Button>
        </div>
      </nav>
    </header>
  );
};

export default NavbarPage;
