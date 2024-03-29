"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiGoogle } from "react-icons/si";
import loginImg from "../../../assets/login.svg";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import signupUser from "@/helpers/signupUser";
import { useToast } from "@/components/ui/use-toast";

//*  Page start
const SignupPage = () => {
  const { toast } = useToast();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignup = () => {
    return alert(
      "signup functionality not properly completed please signup with GITHUB"
    );
    const name = nameRef.current!.value;
    const email = emailRef?.current!.value;
    const password = passwordRef?.current!.value;
    const profileURL =
      "https://avatars.githubusercontent.com/u/87263170?s=80&v=4";
    const role = "user";

    signupUser(name, email, password, profileURL, role);

    name.value = "";
    email.value = "";
    password.value = "";
  };

  return (
    <section className="min-h-screen flex justify-center items-center flex-row-reverse">
      <div className="">
        <h1 className="text-3xl font-bold mb-2 center">Please Sign up </h1>
        <Card className="bg-gray-950 border border-gray-800 w-full flex justify-between items-center flex-col-reverse lg:flex-row">
          <div className="flex-1 w-full">
            <CardHeader className="">
              <div>
                <div className="grid w-full max-w-sm items-center ">
                  <Label className="text-white mb-1" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    required
                    ref={nameRef}
                    type="text"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center my-4">
                  <Label className="text-white mb-1" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    required
                    ref={emailRef}
                    type="email"
                    id="email"
                    placeholder="Your Email"
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
                    required
                    placeholder="Your password"
                  />
                </div>
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white">
                      Already have an account{" "}
                      <Link className="text-blue-500 underline" href="/login">
                        Login
                      </Link>
                    </span>
                    <Button
                      onClick={handleSignup}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Signup
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <div className="flex w-28 justify-center items-centers mx-auto">
              <Separator className="my-4" />
              <span className="text-white mx-2">OR</span>
              <Separator className="my-4" />
            </div>
            <CardFooter className="flex flex-col w-full gap-2">
              <Button
                disabled
                onClick={() => signIn("google")}
                className="w-full"
              >
                <SiGoogle className="mr-2 h-4 w-4" /> Continue with Google
                {/* <UserButton afterSignOutUrl="/" /> */}
              </Button>
              <Button onClick={() => signIn("github")} className="w-full">
                <SiGithub className="mr-2 h-4 w-4" /> Continue with Github
              </Button>
            </CardFooter>
          </div>
          <div className="hidden lg:flex flex-1">
            <Image src={loginImg} alt="login" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SignupPage;
