"use client";

import { useEffect, useState } from "react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getVisitorData } from "@/services/getVisitorData";
import { transformVisitorData } from "@/lib/transformVisitorData";
import LoadingSpinner from "@/components/LoadingSpinner";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface ChartData {
  month: string;
  desktop: number;
  mobile: number;
}

interface ChartData {
  month: string;
  desktop: number;
  mobile: number;
}

export default function About() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        setIsLoading(true);
        const visitors = await getVisitorData();
        const formattedData = transformVisitorData(visitors);
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching visitor data:", error);
        setChartData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <LoadingSpinner />
      </div>
    );
  }

  if (chartData.length === 0) {
    return <div className="text-center mt-10">No data available for the last 6 months.</div>;
  }

  return (
    <MaxWidthWrapper className="w-full">
      <div className="w-full flex justify-center items-center p-4 flex-col">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="pb-4 border-b w-full text-center">
            <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1]">
              Monthly Page Visitor Count
            </h1>
          </div>
          <Card className="w-full md:w-2/3">
            <CardHeader>
              <CardTitle>Line Chart - Visitors</CardTitle>
              <CardDescription>Last 6 Months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  aria-label="Visitor data chart showing desktop and mobile visitors over the last 6 months"
                  data={chartData}
                  margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Line
                    dataKey="desktop"
                    type="natural"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={{
                      fill: "var(--color-desktop)",
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  >
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Line>
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="leading-none text-muted-foreground">Showing total visitors for the last {chartData.length} months
              </div>
            </CardFooter>
          </Card>

        </div>
      </div>
    </MaxWidthWrapper>
  );
}
