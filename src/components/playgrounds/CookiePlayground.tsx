"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import DataTable from "../DataTable";

export default function CookiePlayground() {
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [data, setData] = useState({
    browserInfo: { browser: "nil", language: "nil" },
    userPreference: { theme: "nil", language: "nil" },
    locationInfo: { ip: "nil", region: "nil", timezone: "nil" },
    analytics: { pageViewed: "nil", referrer: "nil", timeSpent: "nil" },
    adTargeting: { adId: "nil", interests: "nil" },
  });

  const handleAcceptCookies = async () => {
    // Fetch browser information
    const browserInfo = {
      browser: navigator.userAgent.match(/^[^()]+(?:\([^)]*\))?/g)?.[0] || "Unknown",
      language: navigator.language || "Unknown",
    };

    // Fetch user preferences (Simulated in this case)
    const userPreference = {
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "Dark"
        : "Light",
      language: navigator.language || "Unknown",
    };

    // Fetch location information using a free IP geolocation API
    const locationInfo = await fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => ({
        ip: data.ip || "Unknown",
        region: data.region || "Unknown",
        timezone: data.timezone || "Unknown",
      }))
      .catch(() => ({
        ip: "Error Fetching IP",
        region: "Error Fetching Region",
        timezone: "Error Fetching Timezone",
      }));

    setData((prev) => ({
      ...prev,
      browserInfo,
      userPreference,
      locationInfo,
      analytics: {
        pageViewed: "HowNetWorks.com/home",
        referrer: "HowNetWorks.com",
        timeSpent: "01m 03sec",
      }, // Static values set after button click
      adTargeting: { adId: "unique123", interests: "technology, gaming" }, 
    }));
    setIsCookieAccepted(true);
  };

  return (
    <div className="flex flex-col items-center w-full p-1 md:p-2 gap-4">
      <div className="flex justify-between items-center w-full border-b pb-4">
        <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] text-ellipsis">Cookie Playground</h1>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button disabled={isCookieAccepted}>
                {isCookieAccepted ? "Cookies Accepted" : "Accept Cookies"}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] text-ellipsis">We value your privacy.</AlertDialogTitle>
                <AlertDialogDescription>
                  We do not store your data. This is a simulation to show what websites can access. Click &apos;Accept&apos; to proceed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Deny</AlertDialogCancel>
                <AlertDialogAction onClick={handleAcceptCookies}>Accept</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-6">
        <DataTable
          title="Browser Information"
          data={[
            { key: "Browser", value: data.browserInfo.browser },
            { key: "Language", value: data.browserInfo.language },
          ]}
        />
        <DataTable
          title="User Preference"
          data={[
            { key: "Theme", value: data.userPreference.theme },
            { key: "Language", value: data.userPreference.language },
          ]}
        />
        <DataTable
          title="Analytics"
          data={[
            { key: "Page Viewed", value: data.analytics.pageViewed },
            { key: "Referrer", value: data.analytics.referrer },
            { key: "Time Spent", value: data.analytics.timeSpent },
          ]}
        />
        <DataTable
          title="Location Information"
          data={[
            { key: "IP Address", value: data.locationInfo.ip },
            { key: "Region", value: data.locationInfo.region },
            { key: "Timezone", value: data.locationInfo.timezone },
          ]}
        />
        <DataTable
          title="Ad Targeting"
          data={[
            { key: "Ad ID", value: data.adTargeting.adId },
            { key: "Interests", value: data.adTargeting.interests },
          ]}
        />
      </div>
    </div>
  );
}
