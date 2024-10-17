import Link from "next/link";

import { auth } from "@/auth";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

export const MainNavHeader = async () => {
  const session = await auth();
  return (
    <nav className="flex items-center gap-x-4">
      {session ? <NavSignOut /> : <NavUserMenu />}
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

const NavSignOut = () => {
  return (
    <ul className="flex items-center gap-x-2">
      <li>
        <Button variant="default" size="sm" type="button">
          Sign out
        </Button>
      </li>
    </ul>
  );
};
