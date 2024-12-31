import CardContainer from "@/components/CardContainer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { NameCard } from "@/components/NameCard";
import { creators } from "@/data/creator";

export default function Home() {
  return (
    <div className="max-w-full flex flex-col justify-center items-center md:max-w-full mt-10">
      <MaxWidthWrapper>
        <section className=" flex flex-col justify-center items-start m-4 pb-4 px-4 gap-1 border-b">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">The Internet&apos;s Black Box Economy.</h1>
          <p className="text-xl leading-tight tracking-tight md:text-2xl flex flex-col items-start justify-start w-full">
            <span>
              Think the internet is free? Think again.
            </span>
            <span>
              Websites trade your clicks, preferences, and actions like currency.
            </span>
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
        <section className="flex flex-col justify-center items-center w-full">
          <CardContainer />
        </section>
      </MaxWidthWrapper>
    </div>
  );
}