import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between">
        <p>this is header</p>
        <SignedOut>
          <Link href={'/sign-in'} className="bg-orange-200 m-8 p-4 cursor-pointer">
            Login
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
