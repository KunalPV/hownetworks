"use client";

import { Github } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) => (
  <Link
    href={href}
    className={cn(
      "transition-colors hover:text-foreground/80",
      isActive ? "text-foreground" : "text-foreground/80"
    )}
    aria-label={`Navigate to ${label}`}
  >
    {label}
  </Link>
);

const Navbar: React.FC = React.memo(() => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 border-b w-full">
      <MaxWidthWrapper className="p-2">
        <div className="flex justify-between items-center py-1 px-2">
          {/* Logo and Navigation Links */}
          <div className="flex justify-end items-center gap-4">
            <Link
              href="/"
              className="flex justify-between items-center gap-1"
              aria-label="Navigate to Home"
            >
              <Image
                src={Logo}
                alt="HowNetWorks Logo"
                className="w-6 h-6 dark:invert"
                width={24}
                height={24}
                priority
              />
              <h1 className="text-xl font-bold leading-tight tracking-tighter lg:leading-[1.1] hidden md:block">
                HowNetWorks
              </h1>
            </Link>
            <div className="flex justify-between items-center gap-4 p-1 leading-tight tracking-tight">
              <NavLink href="/" label="Home" isActive={pathname === "/"} />
              <NavLink
                href="/impact"
                label="Impact"
                isActive={pathname === "/impact"}
              />
            </div>
          </div>
          {/* External Links and Theme Toggle */}
          <div className="flex justify-center items-center gap-2">
            <Link
              href="https://github.com/cope-ai/hownetworks"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the HowNetWorks GitHub repository"
            >
              <Button
                variant="link"
                size="icon"
                className="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md h-8 w-8 px-0"
              >
                <Github />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
