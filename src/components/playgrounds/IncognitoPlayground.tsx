"use client";

import React, { useState, useEffect } from "react";
import DataTable from "../DataTable";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function IncognitoPlayground() {
  const [isIncognito, setIsIncognito] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Set the URL after the component has mounted
    setUrl(`${window.location.origin}/p/how-incognito-mode-works-and-doesnt-work`);
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(url);
    toast({
      description: "The URL has been copied to your clipboard.",
    });
  };

  // Check if the user is in incognito mode using the Storage Quota Method
  useEffect(() => {
    const checkIncognito = async () => {
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        const { quota } = await navigator.storage.estimate();
        const fs = window.webkitURL;
        console.log(fs);
        const incognito = quota && quota < 1200000000; 
        setIsIncognito(!!incognito);
      } else {
        setIsIncognito(false);
      }
    };

    checkIncognito();
  }, []);

  const dataFields = [
    { key: "History", normal: "www.example.com, www.google.com", incognito: "No data" },
    { key: "Cookies", normal: "SessionId=12345; AuthToken=abc", incognito: "No data" },
    { key: "Site Data", normal: "Cache, LocalStorage", incognito: "No data" },
    { key: "Input Data", normal: "Username: JohnDoe", incognito: "No data" },
  ];

  return (
    <div className="w-full p-4 md:p-6 flex flex-col justify-center items-center">
      <div className="text-center w-full border-b pb-4">
        <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] text-ellipsis">Incognito Playground</h1>
      </div>

      <div className="my-4 flex flex-col justify-center items-center w-full gap-4 px-4">
        <div className="flex flex-col justify-center gap-4 items-center w-full">
          <p className="text-justify text-lg font-light text-foreground w-full min-h-full">
            {!isIncognito ? "In this playground, you can explore how data visibility changes when browsing in normal mode versus incognito mode. The table below shows the types of data that are typically stored in a browser during a normal session, such as history, cookies, and site data. However, in incognito mode, much of this data is either not stored or only temporarily accessible, ensuring a higher degree of privacy." : "You are currently viewing this playground in incognito mode. The table below demonstrates how most data, such as history, cookies, and site data, is not stored or is only temporarily accessible. While incognito mode provides enhanced privacy, it doesn’t make you completely anonymous—websites can still collect limited information like your IP address and browser details."}
          </p>
          <p className="text-sm text-center text-gray-500">
            Note: As not all browsers allow distinguishing between normal and incognito modes, we recommend using Chrome for accurate results.
          </p>
          {!isIncognito && (
            <div className="flex flex-col justify-center items-center gap-1">
              <span className="text-sm ">Copy the link below and open it in an incognito tab to see how data visibility changes.</span>
              <div className="flex items-center space-x-2 w-80">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    value={url}
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3" onClick={() => handleShare()}>
                  <span className="sr-only">Copy</span>
                  <Copy />
                </Button>
              </div>
            </div>
          )}
        </div>

        <div>
          <DataTable
            title={!isIncognito ? "Normal Mode" : "Incognito Mode"}
            data={dataFields.map((field) => ({
              key: field.key,
              value: !isIncognito ? field.normal : "Not visible in incognito mode",
            }))}
          />
        </div>
      </div>
    </div>
  )
}