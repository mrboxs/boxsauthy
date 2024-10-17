"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type OAuthSigninButtonProps = {
  Signup?: boolean;
};

export const OAuthSigninButton = ({
  Signup = false,
}: OAuthSigninButtonProps) => {
  const text = Signup ? "Sign up" : "Sign in";
  return (
    <div className="space-y-4">
      <Button type="button" variant="outline" size="lg" className="w-full">
        <FaGithub className="mr-2 size-4" />
        <span>{text} with Github</span>
      </Button>
      <Button type="button" variant="outline" size="lg" className="w-full">
        <FcGoogle className="mr-2 size-4" />
        <span>{text} with Google</span>
      </Button>
    </div>
  );
};

export const OAuthSigninButtonSkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2].map((index) => (
        <Skeleton key={index} className="h-11 w-full" />
      ))}
      {/* <Button
        type="button"
        variant="outline"
        size="lg"
        className="w-full"
        disabled
      >
        <Skeleton className="mr-2 size-4 rounded-full" />
        <Skeleton className="h-4 w-32" />
      </Button> */}
    </div>
  );
};
