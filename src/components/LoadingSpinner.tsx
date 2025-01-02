import { LoaderCircle } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  message = "Loading...",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div 
      className={`w-full pt-10 flex justify-center items-center gap-2 ${className}`}
      aria-busy="true"
      role="status"
    >
      {message}
      <LoaderCircle className="w-6 h-6 animate-spin" />
    </div>
  );
}