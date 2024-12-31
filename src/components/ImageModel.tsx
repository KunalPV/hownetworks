import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

interface ImageModelProps {
  imageSrc: string;
  imageAlt: string;
}

export default function ImageModel({imageSrc, imageAlt}: ImageModelProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-fit max-w-md"
            width={500}
            height={600}
            style={{ pointerEvents: "none", userSelect: "none" }}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{imageAlt}</DialogTitle>
        </DialogHeader>
        <div className="w-full flex justify-center dark:invert border rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="rounded-md"
            width={700}
            height={500}
            style={{ pointerEvents: "none", userSelect: "none" }}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
