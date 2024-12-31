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

export default function DevicePlayground() {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [deviceData, setDeviceData] = useState({
    os: "nil",
    browserName: "nil",
    userAgent: "nil",
    screenResolution: "nil",
    colorDepth: "nil",
  });

  const [hardwareData, setHardwareData] = useState({
    deviceType: "nil",
    memory: "nil",
    inputDevices: "Unknown",
    doNotTrack: navigator.doNotTrack === "1" ? "True" : "False",
  });

  const handleFetchData = () => {
    // Fetch Device Information
    const deviceType = /Mobi|Android/i.test(navigator.userAgent)
      ? "Mobile"
      : "Desktop";
    const os = navigator.platform || "Unknown";
    const browserName = navigator.userAgent.includes("Chrome")
      ? "Chrome"
      : navigator.userAgent.includes("Firefox")
      ? "Firefox"
      : navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
      ? "Safari"
      : "Unknown";
    const userAgent = navigator.userAgent;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const colorDepth = `${window.screen.colorDepth}-bit`;

    setDeviceData({
      os,
      browserName,
      userAgent,
      screenResolution,
      colorDepth,
    });

    // Fetch Hardware Information
    const memory = "deviceMemory" in navigator 
      ? `${navigator.deviceMemory} GB` 
      : "Unknown";

    const inputDevices =
      "ontouchstart" in window ? "Touchscreen Detected" : "No Touchscreen";

    setHardwareData((prev) => ({
      ...prev,
      deviceType,
      memory,
      inputDevices,
    }));

    setIsDataFetched(true);
  };

  return (
    <div className="flex flex-col items-center w-full p-4 md:p-6 gap-4">
      <div className="flex justify-between items-center w-full border-b pb-4">
        <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] text-ellipsis">Device Playground</h1>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button disabled={isDataFetched}>
                {isDataFetched ? "Data Fetched" : "View Device Info"}
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
                <AlertDialogAction onClick={handleFetchData}>Accept</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-6">
        {/* Device Information Table */}
        <DataTable
          title="Device Information"
          data={[
            { key: "Operating System", value: deviceData.os },
            { key: "Browser Name", value: deviceData.browserName },
            { key: "User Agent", value: deviceData.userAgent },
            { key: "Screen Resolution", value: deviceData.screenResolution },
            { key: "Color Depth", value: deviceData.colorDepth },
          ]}
        />

        {/* Hardware Information Table */}
        <DataTable
          title="Hardware Information"
          data={[
            { key: "Device Type", value: hardwareData.deviceType },
            { key: "Memory", value: hardwareData.memory },
            { key: "Input Devices", value: hardwareData.inputDevices },
            { key: "Do Not Track", value: hardwareData.doNotTrack },
          ]}
        />
      </div>
    </div>
  );
}
