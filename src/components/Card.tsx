"use client";

import { Share } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { handleShare } from "@/utils/navigation";

interface CardProps {
  title: string;
  slug: string;
}

export default function Card({ title, slug }: CardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/p/${slug}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition flex flex-col justify-center items-center w-full gap-5">
      <h2 className="text-lg leading-tight tracking-tight md:text-xl lg:leading-[1.1]">{title}</h2>
      <div className="flex w-full justify-between items-center">
        <Button onClick={() => handleShare(slug)} variant="outline" size="icon">
          <Share />
        </Button>
        <Button onClick={handleNavigate}>
          Open
        </Button>
      </div>
    </div>
  );
}