"use client";

import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data } = useSession();
  return (
    <div>
      <h1 className="text-white text-2xl text-center">
        {" "}
        Welcome Back {data?.user?.name} 👋
      </h1>
    </div>
  );
};

export default ProfilePage;
