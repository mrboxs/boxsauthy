"use client";

import { signoutUserAction } from "@/actions/signout-user-action";

import { Button } from "@/components/ui/button";

export const NavSignOutUserHeader = () => {
  const handleSignout = async () => {
    try {
      await signoutUserAction();
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to sign out", error);
    }
  };
  return (
    <ul className="flex items-center gap-x-2">
      <li>
        <Button variant="default" size="sm" onClick={handleSignout}>
          Sign out
        </Button>
      </li>
    </ul>
  );
};
