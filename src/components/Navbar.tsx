
import { Cable } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return(
    <div className="sticky top-0 z-50 border-b w-full">
      <MaxWidthWrapper className="p-2">
        <div className="flex justify-between items-center py-1 px-2">
          <div className="flex justify-end items-center gap-6">
            <div className="flex justify-between items-center gap-1 p-1">
              <Cable  />
              <h1 className="font-bold text-xl">HowNetWorks</h1>
            </div>
            <div className="flex justify-between items-center gap-4 tracking-wide p-1">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div>
          <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}