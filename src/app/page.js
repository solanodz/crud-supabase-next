import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex max-w-3xl flex-wrap blur-3xl absolute">
        <div className="h-52 w-80 rounded-full bg-red-400  " />
        <div className="h-72 w-40 rounded-full bg-blue-400  " />
        <div className="h-72 w-60 rounded-full bg-yellow-300  " />
        <div className="h-72 w-96 rounded-full bg-purple-300  " />
        <div className="h-52 w-96 rounded-full bg-orange-300  " />
      </div>
      <div className="z-10 bg-slate-500 px-12 flex flex-col justify-center p-8 rounded-2xl bg-opacity-15 border">
        <h1 className="tracking-tighter text-5xl font-bold z-10">Welcome to the landing</h1>
        <div className="z-10 flex gap-2 mx-auto my-4">
          <Link className={buttonVariants({ variant: 'default' })} href="/login">Log in</Link>
          <Link className={buttonVariants({ variant: 'default' })} href="/login">Sign Up</Link>
        </div>
      </div>
    </main>
  );
}
