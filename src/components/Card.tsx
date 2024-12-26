"use client";

import { Share } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast"

interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  const router = useRouter();
  const { toast } = useToast()

  const handleShare = () => {
    const url = `${window.location.origin}/p/${encodeURIComponent(title)}`;
    navigator.clipboard.writeText(url);
    toast({
      description: "The url has been copied to your clipboard."
    })
  };

  const handleNavigate = () => {
    router.push(`/p/${encodeURIComponent(title)}`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition flex flex-col justify-center items-center w-full gap-5">
      <h2 className="text-lg leading-tight tracking-tight md:text-xl lg:leading-[1.1]">{title}</h2>
      <div className="flex w-full justify-between items-center">
        <Button onClick={handleShare} variant="outline" size="icon">
          <Share />
        </Button>
        <Button onClick={handleNavigate}>
          Open
        </Button>
      </div>
    </div>
  );
}