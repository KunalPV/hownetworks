import CardContainer from "@/components/CardContainer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="max-w-full flex flex-col justify-center items-center md:max-w-full mt-10">
      <MaxWidthWrapper>
        <section className=" flex flex-col justify-center items-start m-4 px-5 pb-10 gap-2 border-b">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">Some Edgy title for the website.</h1>
          <p className="text-balance text-lg font-light text-foreground ">Some paragraph for the explainantion of what website does. Maybe 2 lines. Some paragraph for the explainantion of what website does. Maybe 2 lines.</p>
        </section>
        <section className="flex flex-col justify-center items-center w-full">
          <CardContainer />
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
