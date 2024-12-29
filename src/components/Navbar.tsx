"use client";

import { Github } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import LogoLight from '../../public/logo-light.svg'
import LogoDark from '../../public/logo-dark.svg'
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return(
    <div className="sticky top-0 z-50 border-b w-full">
      <MaxWidthWrapper className="p-2">
        <div className="flex justify-between items-center py-1 px-2">
          <div className="flex justify-end items-center gap-6">
            <Link href="/" className="flex justify-between items-center gap-1 p-1">
              {mounted && (theme === "light" || resolvedTheme === "light") ? (
                <Image src={LogoLight} alt="Logo" className="w-6 h-6" />
              ) : (
                mounted && <Image src={LogoDark} alt="Logo" className="w-6 h-6" />
              )}
              <h1 className="text-xl font-bold leading-tight tracking-tighter lg:leading-[1.1]">HowNetWorks</h1>
            </Link>
            <div className="flex justify-between items-center gap-4 tracking-wide p-1">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link href="https://github.com/cope-ai/hownetworks" target="_blank" rel="noopener noreferrer" >
              <Button variant="link" size="icon" className="hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md h-8 w-8 px-0">
                <Github />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}