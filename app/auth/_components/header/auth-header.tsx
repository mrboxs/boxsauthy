import Link from "next/link";

import { MdKeyboardArrowLeft } from "react-icons/md";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const AuthHeaderPage = () => {
  return (
    <header className="fixed h-20 w-full">
      <div className="flex h-full items-center justify-start">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "group ml-4 rounded-full text-muted-foreground"
          )}
        >
          <MdKeyboardArrowLeft className="size-4 transition-all duration-300 ease-out group-hover:-translate-x-2" />
          <span>Home</span>
        </Link>
      </div>
    </header>
  );
};
