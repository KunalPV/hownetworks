/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function PermissionsPlayground() {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const audioRef = useRef<HTMLCanvasElement | null>(null);

  // Function to visualize audio waveform
  const visualizeAudio = (audioStream: MediaStream) => {
    if (!audioRef.current) {
      console.error("Canvas for audio visualization not found!");
      return;
    }

    const canvas = audioRef.current;
    const canvasContext = canvas.getContext("2d");

    if (!canvasContext) {
      console.error("Unable to get 2D context from canvas!");
      return;
    }

    // Modern AudioContext
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(audioStream);

    source.connect(analyser);
    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    const draw = () => {
      requestAnimationFrame(draw);

      analyser.getByteTimeDomainData(dataArray);

      canvasContext.fillStyle = "rgba(0, 0, 0, 0.8)";
      canvasContext.fillRect(0, 0, canvas.width, canvas.height);

      canvasContext.lineWidth = 2;
      canvasContext.strokeStyle = "rgb(255, 255, 255)";
      canvasContext.beginPath();

      const sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          canvasContext.moveTo(x, y);
        } else {
          canvasContext.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasContext.lineTo(canvas.width, canvas.height / 2);
      canvasContext.stroke();
    };

    draw();
  };

  // Function to handle permissions
  const handlePermissions = async () => {
    try {
      // Request camera access
      const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(videoStream);

      // Request microphone access
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Delay visualization until the canvas is rendered
      setTimeout(() => {
        if (audioRef.current) {
          visualizeAudio(audioStream);
        }
      }, 0);

      // Request location access
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=e638a55a5fce4266a48351c10e682a31`
            );
            const data = await response.json();
            if (data.results.length > 0) {
              const locationDetails = data.results[0].components;
              setLocation(
                `${locationDetails.city || locationDetails.town || locationDetails.village}, ${locationDetails.state}, ${locationDetails.country}`
              );
            } else {
              setLocation("Unable to determine location.");
            }
          } catch (error) {
            setLocation("Error fetching location details.");
          }
        },
        (error) => {
          setLocation("Location permission denied.");
        }
      );
    } catch (error) {
      console.error("Error accessing permissions:", error);
    }

    setIsPermissionGranted(true);
  };

  return (
    <div className="flex flex-col items-center w-full p-4 md:p-6 gap-4">
      <div className="flex justify-between items-center w-full border-b pb-4">
        <h1 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] text-ellipsis">Permissions Playground</h1>
        <div>
          <Button onClick={handlePermissions} disabled={isPermissionGranted}>
            {isPermissionGranted ? "Permissions Granted" : "Grant Permissions"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Camera Feed */}
        <div className="p-4 border rounded-lg shadow w-full h-64 flex justify-center items-center bg-gray-100">
          {cameraStream ? (
            <video
              autoPlay
              playsInline
              ref={(video) => {
                if (video && cameraStream) video.srcObject = cameraStream;
              }}
              className="w-full h-full"
            />
          ) : (
            <p className="text-gray-500 text-center">Camera feed will appear here</p>
          )}
        </div>

        <div className="p-4 border rounded-lg shadow w-full h-64 flex flex-col justify-center items-center bg-gray-100">
          {/* Audio Waveform */}
          <div className="p-2 w-full h-2/3 border-b">
            {isPermissionGranted ? (
              <canvas
                ref={audioRef}
                width="275"
                height="150"
                className="border border-gray-300"
              ></canvas>
            ) : (
              <p className="text-gray-500 text-center">Microphone will appear here</p>
            )}
          </div>

          {/* Location */}
          <div className="p-2 w-full text-center h-1/3">
            {location ? (
              <p className="text-gray-700 al">{location}</p>
            ) : (
              <p className="text-gray-500">Location will appear here</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
