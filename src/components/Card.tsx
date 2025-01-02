"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import ShareButton from "./ShareButton";

interface CardProps {
  title: string;
  slug: string;
  className?: string;
}

export default function Card({ title, slug, className }: CardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/p/${slug}`);
  };

  return (
    <div 
      className={`border rounded-lg p-4 shadow-md hover:shadow-xl transition flex flex-col justify-center items-center w-full gap-5 ${className}`}
    >
      <h2
        className="text-lg leading-tight tracking-tight md:text-xl lg:leading-[1.1]"
        aria-label={`Card title: ${title}`}
      >
        {title}
      </h2>
      <div className="flex w-full justify-between items-center">
        <ShareButton slug={slug} />
        <Button 
          onClick={handleNavigate}
          aria-label={`Open the page for ${title}`}
        >
          Open
        </Button>
      </div>
    </div>
  );
}