"use client";
import { Button } from "@/components/ui/button";
import { increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Image from "next/image";

export default function Home() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white">{value}</h1>
      <Button onClick={() => dispatch(increment())}>Button</Button>
    </main>
  );
}
