import { FlaskConicalOff, RotateCw } from "lucide-react";
import React from "react";

interface PlaygroundFallbackProps {
  hasPlayground: boolean;
  loadingText?: string;
  noPlaygroundText?: string;
  headingText?: string;
}

export const PlaygroundFallback: React.FC<PlaygroundFallbackProps> = React.memo(
  ({
    hasPlayground,
    loadingText = "Loading Playground...",
    noPlaygroundText = "No playground available for this topic.",
    headingText = "User Playground",
  }) => {
    return hasPlayground ? (
      <div
        className="flex gap-2"
        role="status"
        aria-live="polite"
        aria-label="Loading playground content"
      >
        <p>{loadingText}</p>
        <RotateCw className="animate-spin" />
      </div>
    ) : (
      <div>
        <div className="pb-4 border-b w-full text-center">
          <h2 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl lg:leading-[1.1] text-ellipsis">
            {headingText}
          </h2>
        </div>
        <div
          className="flex justify-center items-center gap-2 w-full"
          role="alert"
          aria-live="assertive"
          aria-label="No playground available"
        >
          <p>{noPlaygroundText}</p>
          <FlaskConicalOff />
        </div>
      </div>
    );
  }
);

PlaygroundFallback.displayName = "PlaygroundFallback";
