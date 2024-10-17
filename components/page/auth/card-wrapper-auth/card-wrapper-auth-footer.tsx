import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface CardWrapperAuthFooterProps {
  label: string;
  href: string;
  title: string;
}

export const CardWrapperAuthFooter = ({
  href,
  label,
  title,
}: CardWrapperAuthFooterProps) => {
  return (
    <div className="w-full text-center">
      <p className="text-sm text-muted-foreground">
        {title}{" "}
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "link", size: "default" }),
            "p-0"
          )}
        >
          {label}
        </Link>
      </p>
    </div>
  );
};
