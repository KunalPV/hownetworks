This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# How Networks

A dynamic, interactive web application designed to educate and explore how networks operate. This project provides an engaging way to learn about concepts like device information, permissions, cookies, and incognito mode through interactive playgrounds and detailed visualizations.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview
This project aims to break down complex networking concepts into simple, interactive modules. The platform leverages modern web technologies to create a responsive and visually appealing user experience.

## Features
- **Interactive Playgrounds**:
  - **Cookie Playground**: Illustrates cookie management and usage.  
  - **Permissions Playground**: Demonstrates website permission handling (camera, microphone, and location).
  - **Device Info Playground**: Displays detailed browser and system information.
  - **Incognito Playground**: Explains incognito mode limitations and functionalities.
  - **Location Playground**: Fetches and displays user location in a readable format.
- **Dynamic Visualizations**: 
  - Audio waveforms for microphone input.
  - Maps and real-time geolocation.
- **Responsive Design**: Optimized for all device sizes using TailwindCSS.
- **Thematic Components**: Supports light and dark mode toggling.

## Technologies Used
- **Framework**: Next.js
- **Languages**: TypeScript, JavaScript
- **Styling**: TailwindCSS
- **Utilities**: PostCSS, ESLint
- **State Management**: React Context API
- **APIs**: Geolocation API, MediaDevices API
- **Visualization**: Canvas API

## Directory Structure

This repository is structured as follows:
```
Directory structure:
└── cope-ai-hownetworks/
    ├── README.md
    ├── CONTRIBUTING.md
    ├── LICENSE
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── public/
    │   └── topic-images/
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── page.tsx
        │   ├── impact/
        │   │   └── page.tsx
        │   └── p/
        │       └── [slug]/
        │           └── page.tsx
        ├── components/
        │   ├── Card.tsx
        │   ├── CardContainer.tsx
        │   ├── CustomMap.tsx
        │   ├── DataTable.tsx
        │   ├── ErrorBoundry.tsx
        │   ├── HeadlineSection.tsx
        │   ├── ImageModel.tsx
        │   ├── LoadingSpinner.tsx
        │   ├── MaxWidthWrapper.tsx
        │   ├── ModeToggle.tsx
        │   ├── NameCard.tsx
        │   ├── Navbar.tsx
        │   ├── PlaygroundFallback.tsx
        │   ├── ShareButton.tsx
        │   ├── ThemeProviderWrapper.tsx
        │   ├── theme-provider.tsx
        │   ├── playgrounds/
        │   │   ├── CookiePlayground.tsx
        │   │   ├── DeviceInfoPlayground.tsx
        │   │   ├── IncognitoPlayground.tsx
        │   │   ├── LocationPlayground.tsx
        │   │   └── PermissionsPlayground.tsx
        │   └── ui/
        │       ├── alert-dialog.tsx
        │       ├── avatar.tsx
        │       ├── button.tsx
        │       ├── card.tsx
        │       ├── chart.tsx
        │       ├── dialog.tsx
        │       ├── dropdown-menu.tsx
        │       ├── hover-card.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       ├── scroll-area.tsx
        │       ├── separator.tsx
        │       ├── table.tsx
        │       ├── toast.tsx
        │       ├── toaster.tsx
        │       └── toggle.tsx
        ├── data/
        │   ├── creator.ts
        │   └── topic.ts
        ├── hooks/
        │   └── use-toast.ts
        ├── lib/
        │   ├── firebase.ts
        │   ├── fonts.ts
        │   ├── transformVisitorData.ts
        │   └── utils.ts
        └── services/
            ├── getVisitorData.ts
            └── postVisitorData.ts
```

## Installation
Follow these steps to get the project up and running on your local machine:

### Prerequisites
- Node.js (v16 or later)
- npm or yarn package manager

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/cope-ai/hownetworks.git
   ```

2. Navigate to project directory:
   ```bash
   cd cope-ai-hownetworks
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   ### or
   ```bash
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   ### or
   ```bash
   yarn dev
   ```

5. Open your browser and visit http://localhost:3000.

## Usage
Navigate to various playgrounds using the provided interface.
Interact with each module to understand networking concepts.
Toggle between light and dark modes for a personalized experience.

## Contributing
[Contributions](https://github.com/cope-ai/hownetworks/blob/main/CONTRIBUTING.md) are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```

4. Push to the branch:
   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/cope-ai/hownetworks/blob/main/LICENSE.md). file for details.