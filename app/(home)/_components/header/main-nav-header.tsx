import Link from "next/link";

import { auth } from "@/auth";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { NavSignOutUserHeader } from "./nav-signout-user-header";

export const MainNavHeader = async () => {
  const session = await auth();
  return (
    <nav className="flex items-center gap-x-4">
      {session ? <NavSignOutUserHeader /> : <NavUserMenu />}
    </nav>
  );
};

const NavUserMenu = () => {
  return (
    <ul className="flex items-center gap-x-2">
      <li>
        <Link
          href="/auth/signin"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "bg-transparent"
          )}
        >
          Sign in
        </Link>
      </li>
      <li>
        <Link
          href="/auth/signup"
          className={cn(buttonVariants({ variant: "default", size: "sm" }))}
        >
          Sign up
        </Link>
      </li>
    </ul>
  );
};
