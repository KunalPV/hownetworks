"use client"

import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CardContainer from "@/components/CardContainer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { postVisitorData } from "@/services/postVisitorData";
import HeadlineSection from "@/components/HeadlineSection";

export default function Home() {
  useEffect(() => {
    const logVisitor = async () => {
      try {
        const visitorId = `${uuidv4()}-${Date.now()}`;
        await postVisitorData(visitorId);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        throw new Error("Failed to post visitor data.");
      }
    };

    logVisitor();
  }, []);

  return (
    // Main container for the homepage
    <div className="max-w-full flex flex-col justify-center items-center md:max-w-full mt-10">
      <MaxWidthWrapper>
        <HeadlineSection />
        <section className="flex flex-col justify-center items-center w-full">
          <CardContainer />
        </section>
      </MaxWidthWrapper>
    </div>
  );
}