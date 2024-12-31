import Card from "./Card";
import { topics } from "@/data/topic";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function CardContainer() {
  return (
    <MaxWidthWrapper>
      <div className="max-w-md md:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-2 px-4">
        {topics.map((topic) => (
          <Card key={topic.slug} title={topic.title} slug={topic.slug} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}