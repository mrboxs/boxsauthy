import Link from "next/link";

import { siteConfig } from "@/config/site-config";
import { BoxsLogo } from "@/components/misc/boxs-logo";

import { MainNavHeader } from "./main-nav-header";

export const SiteHeader = () => {
  return (
    <header className="fixed left-0 top-0 h-16 w-full border-b bg-background/5 filter backdrop-blur">
      <div className="container flex h-full max-w-3xl justify-between">
        {/* Logo */}
        <Link href={siteConfig.url} className="flex items-center">
          <BoxsLogo className="mr-1 size-6 fill-current" />
          <span className="text-2xl font-bold tracking-tight">
            {siteConfig.title}
          </span>
        </Link>

        {/* Main Nav */}
        <MainNavHeader />
      </div>
    </header>
  );
};
