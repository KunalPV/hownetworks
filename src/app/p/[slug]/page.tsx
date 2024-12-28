"use client"

import { notFound } from "next/navigation";
import { topics } from "@/data/topic";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeft, FlaskConicalOff, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cookie from "../../../../public/images/cookie.svg"
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import ShareButton from "@/components/ShareButton";


export default function TopicPage({ params }: {params: Promise<{slug: string}>}) {
  const router = useRouter();
  const { slug } = React.use(params);

  // Find the topic by slug
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    notFound(); // Return 404 if the slug doesn't match any topic
  }

  // Dynamically load the playground component
  const PlaygroundComponent = React.lazy(() =>
    import(`@/components/playgrounds/${topic.playgroundComponent}`).then((mod) => ({ default: mod.default }))
  );

  return (
    <MaxWidthWrapper>
      <section className="p-4 flex flex-col justify-center items-center w-full">
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
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 py-2">
          <div className="flex justify-center items-center h-96 w-full">
            <Image
            src={Cookie}
            alt={topic.title}
            className="w-fit max-w-md mb-4"
            style={{ pointerEvents: "none", userSelect: "none" }}
            onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <ScrollArea className="w-full border rounded-md shadow-sm p-4 h-96">
            <p className="text-balance text-lg font-light text-foreground w-full min-h-full">
              {topic.explanation}
            </p>
          </ScrollArea>
        </div>
        <div className="flex flex-col justify-center items-center w-full p-6 border rounded-md shadow-sm ">
          <div className="w-full">
            {PlaygroundComponent ? (
              <Suspense fallback={
                <div className="flex gap-2">
                  <p>Loading Playground...</p>
                  <RotateCw className="animate-spin" />
                </div>
              }>
                <PlaygroundComponent />
              </Suspense>
            ) : (
              <div>
                <div className="pb-4 border-b w-full text-center">
                  <h2 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] text-ellipsis">User Playground</h2>
                </div>
                <div className="flex justify-center items-center gap-2 w-full">
                  <p>No playground available for this topic.</p>
                  <FlaskConicalOff />
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </MaxWidthWrapper>
  );
}


