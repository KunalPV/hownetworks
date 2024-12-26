import { toast } from "@/hooks/use-toast";

// Reusable share function
export const handleShare = (slug: string) => {
  const url = `${window.location.origin}/p/${slug}`;
  navigator.clipboard.writeText(url);
  toast({
    description: "The URL has been copied to your clipboard.",
  });
};