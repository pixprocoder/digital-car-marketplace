"use client";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { SiGithub, SiGoogle } from "react-icons/si";
import loginImg from "../../../assets/login.svg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRef } from "react";
import loginUser from "../../../../loginUser";

// eslint-disable-next-line @next/next/no-async-client-component
const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    const email = emailRef?.current!.value;
    const password = passwordRef?.current!.value;
    const profileURL = "profile";
    const role = "admin";
    loginUser(email, password, role, profileURL);
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="">
        <h1 className="text-3xl font-bold mb-2 center">Please Login </h1>
        <Card className="bg-gray-950 border border-gray-800 w-full flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex-1 w-full">
            <CardHeader className="">
              <form>
                <div className="grid w-full max-w-sm items-center my-4">
                  <Label className="text-white mb-1" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    ref={emailRef}
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="grid w-full max-w-sm items-center ">
                  <Label className="text-white mb-1" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    ref={passwordRef}
                    type="password"
                    id="password"
                    placeholder="Your password"
                    required
                  />
                </div>
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white">
                      Do not have account{" "}
                      <Link className="text-blue-500 underline" href="/signup">
                        Signup
                      </Link>
                    </span>
                    <Button
                      onClick={handleLogin}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            </CardHeader>
            <div className="flex w-28 justify-center items-centers mx-auto">
              <Separator className="my-4" />
              <span className="text-white mx-2">OR</span>
              <Separator className="my-4" />
            </div>
            <CardFooter className="flex flex-col w-full gap-2">
              <Button onClick={() => signIn("google")} className="w-full">
                <SiGoogle className="mr-2 h-4 w-4" /> Continue with Google
              </Button>
              <Button onClick={() => signIn("github")} className="w-full">
                <SiGithub className="mr-2 h-4 w-4" /> Continue with Github
              </Button>
            </CardFooter>
          </div>
          <div className="flex-1">
            <Image src={loginImg} alt="login" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoginPage;
