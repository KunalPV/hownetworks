import Card from "./Card";
import { topics } from "@/data/topic";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Frown } from "lucide-react";

export default function CardContainer() {
  if (!topics || topics.length === 0) {
    return (
      <div className="text-center p-8 flex justify-center items-center gap-4">
        <p>No topics available to display.</p>
        <Frown className="w-6 h-6" />
      </div>
    );
  }

  return (
    <MaxWidthWrapper>
      <section 
        className="max-w-md md:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-2 px-4"
        aria-label="Topics grid"
      >
        {topics.map((topic) => (
          <Card key={topic.slug} title={topic.title} slug={topic.slug} />
        ))}
      </section>
    </MaxWidthWrapper>
  );
}