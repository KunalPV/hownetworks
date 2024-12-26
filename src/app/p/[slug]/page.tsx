"use client"

import { notFound } from "next/navigation";
import { topics } from "@/data/topic";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowLeft, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cookie from "../../../../public/images/cookie.svg"
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"
import { handleShare } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import React from "react";


export default function TopicPage({ params }: {params: Promise<{slug: string}>}) {
  const router = useRouter();
  const { slug } = React.use(params);

  // Find the topic by slug
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    notFound(); // Return 404 if the slug doesn't match any topic
  }

  const playground = false;

  // const PlaygroundComponent =
  //   topic.playgroundComponent &&
  //   (await import(`@/components/playground/${topic.playgroundComponent}`).then((mod) => mod.default));

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
          <Button variant="outline" size="icon" className="flex-none m-1" onClick={() => handleShare(slug)}>
            <Share />
          </Button>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 p-2">
          <div className="flex justify-center items-center h-96 w-full">
            <Image
            src={Cookie}
            alt={topic.title}
            className="w-fit max-w-md mb-4"
            />
          </div>
          <ScrollArea className="w-full border rounded-md shadow-sm p-4 h-96">
            <p className="text-balance text-lg font-light text-foreground w-full min-h-full">
              {/* {topic.explanation} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos optio doloremque, libero repellendus quasi laudantium. In tenetur iste quia reprehenderit porro. Esse eum cupiditate eveniet placeat, odit error odio ullam a, quidem distinctio consectetur possimus. Quaerat, obcaecati? Similique atque voluptates nemo nostrum quae fuga explicabo modi itaque aliquid nulla, quidem commodi sequi nam expedita inventore quisquam veniam ipsum quo architecto accusamus culpa fugit hic quam accusantium! Odio neque alias, nisi odit saepe pariatur! Qui nam impedit placeat, tempora minima nulla itaque, labore nihil dignissimos inventore enim quasi aliquid error nisi est mollitia, consectetur voluptate laudantium ipsa voluptas harum dolores.
            </p>
          </ScrollArea>
        </div>
        <div className="flex flex-col justify-center items-center w-full p-4 border rounded-md shadow-sm">
          <div className="pb-4 border-b w-full text-center">
            <h2 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] text-ellipsis">User Playground</h2>
          </div>
          <div className="p-2">
            {playground ? (
              <div>
                Hello
              </div>
            ) : (
              <p>No playground available for this topic.</p>
            )}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}