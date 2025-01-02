import { Github, Linkedin } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface Creator {
  creatorName: string;
  fullName: string;
  designation: string;
  avatarURL: string;
  socialsURL: {
    github: string;
    linkedIn: string;
  };
}

export function NameCard({ creatorName, fullName, designation, avatarURL, socialsURL }: Creator) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button 
          variant="link"
          className="p-1 underline font-semibold"
          aria-label={`View details of ${creatorName}`}
        >
          @{creatorName}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-70">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={avatarURL} alt={`${fullName}'s avatar`} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="">
            <h4 className="text-sm font-semibold">{fullName}</h4>
            <p className="text-sm">
              {designation}
            </p>
            <Separator className="my-2" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <Link
                href={socialsURL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${fullName}'s GitHub profile`}
              >
                <Button variant="link" size="icon"><Github /></Button>
              </Link>
              <Separator orientation="vertical" />
              <Link 
                href={socialsURL.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${fullName}'s LinkedIn profile`}
              >
                <Button variant="link" size="icon"><Linkedin /></Button>
              </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
