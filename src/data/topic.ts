export interface Topic {
  slug: string;
  title: string;
  image: string;
  explanation: string;
  playgroundComponent: string;
}

export const topics: Topic[] = [
  {
    slug: "what-happens-when-you-accept-cookies",
    title: "What Happens When You Accept Cookies.",
    image: "/topic-images/user-cookie.png",
    explanation: `Ever wondered why every website you visit greets you with a pop-up asking you to accept cookies? Cookies are small files that websites store on your device to remember your preferences and activity. They’re designed to enhance your browsing experience, but what exactly do they do? And are they as harmless as they seem? \n
    Cookies make your online journey smoother and more personalized. They remember your login details, saving you from typing them repeatedly. Ever noticed how your favorite shopping site keeps items in your cart even after you close the tab? That’s cookies at work. They also enable websites to load faster by caching certain elements. On top of that, cookies allow websites to suggest content tailored to your interests, making your browsing experience efficient and enjoyable. \n 
    But there’s a darker side. Cookies can track your online behavior, collecting data about the websites you visit, the products you browse, and even how long you spend on a page. This information is often used for targeted advertising, meaning you might start seeing ads for something you casually searched for days ago. Worse, some cookies, known as third-party cookies, track you across multiple sites, creating detailed profiles of your online habits. This raises serious privacy concerns, especially when this data is sold to advertisers or, in rare cases, falls into the wrong hands.`,
    playgroundComponent: "CookiePlayground",
  },
  {
    slug: "what-happens-when-you-give-permission-to-websites",
    title: "What Happens When You Give Permission to Websites.",
    image: "/topic-images/user-permission.png",
    explanation: `Have you ever granted a website access to your camera, microphone, or contacts and wondered what happens next? These permissions can unlock powerful features, but they can also open the door to potential misuse. Let’s explore the implications of granting permissions online. \n
    Permissions can vastly improve your online experience. For instance, allowing camera access lets you video chat with loved ones, and microphone access enables voice search or virtual meetings. Location permissions can provide local recommendations, like finding nearby restaurants or tracking deliveries. These features make technology more intuitive and user-friendly. \n
    However, not all requests for permissions are benign. Some websites and apps request access to data they don’t need, raising red flags. For example, why would a flashlight app need access to your contacts? This overreach can lead to unauthorized data collection. Worse, if a malicious website gains access to your device, it can exploit these permissions to eavesdrop on conversations, capture sensitive information, or even hijack your device.`,
    playgroundComponent: "PermissionsPlayground",
  },
  {
    slug: "what-websites-know-about-your-device",
    title: "What Websites Know About Your Device.",
    image: "/topic-images/user-data.png",
    explanation: `Every time you browse a website, it learns something about your device. This might sound intrusive, but it’s part of how the internet works. Websites use this data to improve your browsing experience, but they may also collect more information than you realize. \n
    By knowing your device type, operating system, and browser, websites can optimize their design and functionality. For instance, mobile-friendly layouts ensure smoother navigation on your phone. Similarly, knowing your screen resolution helps websites display content correctly. These insights ensure that your experience is seamless and error-free. \n
    On the flip side, websites often gather excessive data. Your IP address can reveal your general location, and cookies can track your browsing history. Some sites even detect installed plugins or your device’s fingerprint—a unique combination of settings that makes you identifiable. While this data helps websites operate, it also exposes you to targeted ads and potential data breaches.`,
    playgroundComponent: "DeviceInfoPlayground",
  },
  {
    slug: "what-happens-when-you-enable-your-location",
    title: "What Happens When You Enable Your Location.",
    image: "/topic-images/user-geolocation.png",
    explanation: `Enabling location services can feel like unlocking a world of convenience. From navigation apps to weather updates, your location plays a pivotal role in enhancing digital services. But how much are you giving away when you share your location? \n
    Sharing your location lets apps and websites provide real-time benefits. Navigation apps like Google Maps guide you with turn-by-turn directions, while weather apps deliver accurate local forecasts. Restaurants and service providers nearby can offer timely recommendations. Additionally, location data is crucial in emergencies, helping responders find you quickly. \n
    Yet, location tracking can be a double-edged sword. Companies often store your location history, creating detailed records of your movements. This data might be used for profiling or sold to advertisers, leading to invasive marketing. In worst-case scenarios, hackers could exploit location data, compromising your safety and privacy.`,
    playgroundComponent: "LocationPlayground",
  },
  {
    slug: "how-incognito-mode-works-and-doesnt-work",
    title: "How Incognito Mode Works (and Doesn't Work).",
    image: "/topic-images/user-incognito.png",
    explanation: `Many people believe Incognito mode is the ultimate tool for online privacy. It’s often associated with anonymity, but does it truly make you invisible online? The answer is more nuanced than you might think. 
    \n Incognito mode ensures that your browser doesn’t save your history, cookies, or form data. This is useful for shared devices, where you don’t want others seeing your activity. It’s also great for temporary tasks like checking prices without affecting personalized recommendations. \n
    However, Incognito mode doesn’t hide your activity from your internet service provider, employer, or the websites you visit. They can still track your actions. Additionally, any downloads or bookmarks you create remain on your device. Many users misunderstand its limitations, thinking it’s a comprehensive privacy solution when it’s not.`,
    playgroundComponent: "IncognitoPlayground",
  },
];
