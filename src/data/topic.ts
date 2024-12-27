export interface Topic {
  slug: string;
  title: string;
  image: string;
  explanation: string;
  playgroundComponent: string; // New field to reference the playground component
}

export const topics: Topic[] = [
  {
    slug: "what-happens-when-you-accept-cookies",
    title: "What Happens When You Accept Cookies.",
    image: "/images/cookies.png",
    explanation: "Cookies are small data files stored on your device by websites...",
    playgroundComponent: "CookiePlay", // Reference the playground component
  },
  {
    slug: "what-happens-when-you-give-permission-to-websites",
    title: "What Happens When You Give Permission to Websites.",
    image: "/images/permissions.png",
    explanation: "Giving permissions allows websites to access resources...",
    playgroundComponent: "PermissionsPlay",
  },
  {
    slug: "what-websites-know-about-your-device",
    title: "What Websites Know About Your Device.",
    image: "/images/device-info.png",
    explanation: "Websites can access details about your device, browser...",
    playgroundComponent: "DeviceInfoPlay",
  },
  {
    slug: "what-happens-when-you-enable-your-location",
    title: "What Happens When You Enable Your Location.",
    image: "/images/location.png",
    explanation: "Enabling location allows websites to fetch your geolocation...",
    playgroundComponent: "LocationPlay",
  },
  {
    slug: "how-incognito-mode-works-and-doesnt-work",
    title: "How Incognito Mode Works (and Doesn't Work).",
    image: "/images/incognito.png",
    explanation: "Incognito mode prevents history saving but does not prevent tracking...",
    playgroundComponent: "IncognitoPlay",
  },
];
