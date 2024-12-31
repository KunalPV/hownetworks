"use client";

import dynamic from "next/dynamic";
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
import { useState } from "react";
import { Button } from "../ui/button";

const CustomMap = dynamic(() => import("@/components/CustomMap"), { ssr: false });

export default function LocationPlayground() {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [ipData, setIpData] = useState({
    ip: "nil",
    network: "nil",
    latitude: "nil",
    longitude: "nil",
    location: "Please fetch the location to view the map",
  });

  const handleFetchLocationData = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();

      const location = `${data.city || "Unknown"}, ${data.region || "Unknown"}, ${
        data.country || "Unknown"
      }`;

      setIpData({
        ip: data.ip?.toString() || "Unknown",
        network: data.network?.toString() || "Unknown",
        latitude: data.latitude?.toString() || "Unknown",
        longitude: data.longitude?.toString() || "Unknown",
        location,
      });

      setIsDataFetched(true);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setIpData({
        ip: "Error fetching IP",
        network: "Error fetching network",
        latitude: "Error fetching latitude",
        longitude: "Error fetching longitude",
        location: "Error fetching location",
      });
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4 md:p-6 gap-4">
      <div className="flex justify-between items-center w-full border-b pb-4">
        <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl">
          Location Playground
        </h1>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button disabled={isDataFetched}>
                {isDataFetched ? "Data Fetched" : "Share Location"}
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
                <AlertDialogAction onClick={handleFetchLocationData}>Accept</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-6">
        {/* Left Box: Map Viewer */}
        <div className="p-4 border rounded-lg shadow w-full h-80 flex justify-center items-center bg-gray-100">
          {isDataFetched ? (
            <CustomMap
              latitude={parseFloat(ipData.latitude) || 0}
              longitude={parseFloat(ipData.longitude) || 0}
            />
          ) : (
            <p className="text-gray-500 text-center">
              Please fetch the location to view the map.
            </p>
          )}
        </div>

        {/* Right Box: Data Table */}
        <div className="p-4 border rounded-lg shadow w-full">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-200 p-2">Key</th>
                <th className="border border-gray-200 p-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2">IP Address</td>
                <td className="border border-gray-200 p-2">{ipData.ip}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">Network</td>
                <td className="border border-gray-200 p-2">{ipData.network}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">Latitude</td>
                <td className="border border-gray-200 p-2">{ipData.latitude}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">Longitude</td>
                <td className="border border-gray-200 p-2">{ipData.longitude}</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">Location</td>
                <td className="border border-gray-200 p-2">{ipData.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}