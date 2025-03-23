import { FileText } from "lucide-react";
import NavLink from "./nav-link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <nav className="container flex justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex gap-1 items-center lg:gap-2 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-90 transform transition duration-200 ease-in-out" />
          Sommaire{" "}
        </NavLink>
      </div>

      <div className="gap-4 flex lg:justify-between lg:gap-12 lg:items-center">
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries </NavLink>
        </SignedIn>
        

        <SignedOut>
          <NavLink href="/#price">Price </NavLink>
        </SignedOut>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF </NavLink>
            <div>Pro</div>
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <div>
            <NavLink href="/sign-in/">Sign in </NavLink>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
