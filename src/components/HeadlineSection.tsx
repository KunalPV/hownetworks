import { NameCard } from "@/components/NameCard";
import { creators } from "@/data/creator";

interface HeadlineSectionProps {
  headline?: string;
  subheadline?: string;
  className?: string;
}

export default function HeadlineSection({
  headline = "The Internet's Black Box Economy.",
  subheadline = "Think the internet is free? Think again. Websites trade your clicks, preferences, and actions like currency.",
  className = "",
}: HeadlineSectionProps) {
  if (!creators || creators.length < 2) {
    console.warn("Not enough creators to display.");
    return null;
  }

  return (
    <section 
      className={`flex flex-col justify-center items-start m-4 pb-4 px-4 gap-1 border-b ${className}`}
      aria-labelledby="headline-title"
      aria-describedby="headline-description"
    >
      <h1 
        id="headline-title"
        className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
      >
        {headline}
      </h1>
      <p 
        id="headline-description"
        className="text-xl leading-tight tracking-tight md:text-2xl flex flex-col items-start justify-start w-full"
      >
        {subheadline.split(". ").map((sentence, idx) => (
          <span key={idx}>{sentence.trim()}</span>
        ))}
      </p>
      <div className="flex justify-center items-center leading-tight tracking-tight">
        <span>
          Designed and built by
        </span>
        <NameCard {...creators[0]} />
        <span>and</span>
        <NameCard {...creators[1]} />
      </div>
    </section>
  )
}