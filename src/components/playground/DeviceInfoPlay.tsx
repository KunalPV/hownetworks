"use client"

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
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
import { Button } from "@/components/ui/button";

declare global {
  interface BatteryManager {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
  }

  interface Navigator {
    deviceMemory?: number;
    getBattery?: () => Promise<BatteryManager>;
  }
}

export default function DeviceInfoPlay() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [data, setData] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    const consent = Cookies.get("cookiesConsent");
    if (consent === "true") {
      setCookiesAccepted(true);
      fetchBrowserData();
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookiesConsent", "true", { expires: 7 });
    setCookiesAccepted(true);
    fetchBrowserData();
  };

  const handleDeny = () => {
    Cookies.set("cookiesConsent", "false", { expires: 7 });
    setCookiesAccepted(false);
    setData([]);
  };

  const fetchBrowserData = async () => {
    const browserData: { key: string; value: string }[] = [
      { key: "Browser", value: navigator.userAgent },
      { key: "Platform", value: navigator.platform },
      { key: "Language", value: navigator.language },
      { key: "Screen Resolution", value: `${window.screen.width} x ${window.screen.height}` },
      { key: "Window Size", value: `${window.innerWidth} x ${window.innerHeight}` },
      { key: "Time Zone", value: Intl.DateTimeFormat().resolvedOptions().timeZone },
      { key: "Cookies Enabled", value: navigator.cookieEnabled ? "Yes" : "No" },
      { key: "Device Memory", value: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "Unknown" },
      { key: "CPU Cores", value: `${navigator.hardwareConcurrency}` },
    ];

    if (navigator.getBattery) {
      try {
        const battery = await navigator.getBattery();
        browserData.push(
          { key: "Battery Level", value: `${Math.round(battery.level * 100)}%` },
          { key: "Charging", value: battery.charging ? "Yes" : "No" }
        );
      } catch {
        browserData.push({ key: "Battery Status", value: "Not Available" });
      }
    } else {
      browserData.push({ key: "Battery Status", value: "Not Available" });
    }

    setData(browserData);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Accept Cookies</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>We value your privacy.</AlertDialogTitle>
            <AlertDialogDescription>
              We need your consent to set cookies on your device.<br />
              To agree, click "Accept" below.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDeny}>Deny</AlertDialogCancel>
            <AlertDialogAction onClick={handleAccept}>Accept</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="mt-6">
        <table className="min-w-full border text-sm">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left font-semibold">Data</th>
              <th className="border px-4 py-2 text-left font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={2} className="text-center py-4">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.key}</td>
                  <td className="border px-4 py-2">{item.value}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
