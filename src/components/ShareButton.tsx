import { Copy, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import React, { useEffect, useState } from "react";

interface ShareButtonProps {
  slug: string;
  dialogTitle?: string;
  dialogDescription?: string;
}

const ShareButton: React.FC<ShareButtonProps> = React.memo(
  ({
    slug,
    dialogTitle = "Share link",
    dialogDescription = "Anyone who has this link will be able to view this.",
  }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
      setUrl(`${window.location.origin}/p/${slug}`);
    }, [slug]);

    const handleShare = async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(url);
          toast({
            description: "The URL has been copied to your clipboard.",
          });
        } else {
          toast({
            description: "Clipboard functionality is not supported in this browser.",
          });
        }
      } catch (error) {
        console.error("Failed to copy URL:", error);
        toast({
          description: "Failed to copy the URL. Please try again.",
        });
      }
    };

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            aria-label="Open share dialog"
          >
            <Share />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md" aria-label="Share Dialog">
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                value={url}
                readOnly
                aria-label="Shareable link"
              />
            </div>
            <Button
              type="button"
              size="sm"
              className="px-3"
              onClick={handleShare}
              aria-label="Copy link"
            >
              <span className="sr-only">Copy</span>
              <Copy />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary" aria-label="Close dialog">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
);

ShareButton.displayName = "ShareButton";

export default ShareButton;
