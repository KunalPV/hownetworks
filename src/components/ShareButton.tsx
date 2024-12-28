import { Copy, Share } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react"


interface ShareButtonProps {
  slug: string
}


export default function ShareButton({slug}: ShareButtonProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Set the URL after the component has mounted
    setUrl(`${window.location.origin}/p/${slug}`);
  }, [slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(url);
    toast({
      description: "The URL has been copied to your clipboard.",
    });
  };

  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Share />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
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
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={() => handleShare()}>
            <span className="sr-only">Copy</span>
            <Copy />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}