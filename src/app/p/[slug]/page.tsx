"use client"

import { notFound } from "next/navigation";
import { topics } from "@/data/topic";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { Suspense, useMemo } from "react";
import ShareButton from "@/components/ShareButton";
import ImageModel from "@/components/ImageModel";
import LoadingSpinner from "@/components/LoadingSpinner";
import { PlaygroundFallback } from "@/components/PlaygroundFallback";
import ErrorBoundary from "@/components/ErrorBoundry";

export default function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [slug, setSlug] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchSlug() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    fetchSlug();
  }, [params]);

  // Find the topic by slug
  const topic = useMemo(() => topics.find((t) => t.slug === slug) ?? null, [slug]);

  if (!slug) {
    return (
      <LoadingSpinner />
    );
  }

  if (!topic) {
    notFound();
  }

  // Dynamically load the playground component
  const PlaygroundComponent = topic.playgroundComponent
    ? React.lazy(() =>
        import(`@/components/playgrounds/${topic.playgroundComponent}`).then(
          (mod) => ({ default: mod.default })
        )
      )
    : null;

  return (
    <MaxWidthWrapper>
      <section className="p-4 flex flex-col justify-center items-center gap-4 w-full">
        <div className="flex justify-between items-center w-full pb-2 border-b">
          <Button variant="outline" size="icon" className="flex-none m-1" onClick={() => router.back()}>
            <ArrowLeft />
          </Button>
          <div className="flex-auto w-full text-center px-2">
            <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:leading-[1.1] text-ellipsis">
              {topic.title}
            </h1>
          </div>
          <div className="flex-none m-1">
            <ShareButton slug={slug} />
          </div>
        </div>

        <div className="flex justify-center items-center w-full dark:invert">
          <ImageModel imageSrc={topic.image} imageAlt={topic.title} />
        </div>

        <div className="text-wrap text-lg font-light text-foreground w-full min-h-full whitespace-pre-line p-4 text-justify">{topic.explanation}</div>

        <div className="flex flex-col justify-center items-center w-full border rounded-md shadow-sm ">
          <div className="w-full flex justify-center items-center">
            {PlaygroundComponent ? (
              <ErrorBoundary fallback={<PlaygroundFallback hasPlayground={false} />}>
                <Suspense fallback={<PlaygroundFallback hasPlayground={true} />}>
                  <PlaygroundComponent />
                </Suspense>
              </ErrorBoundary>
            ) : (
              <PlaygroundFallback hasPlayground={false} />
            )}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}