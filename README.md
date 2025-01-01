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
    ├── public/
    │   └── topic-images/
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── components.json
    ├── eslint.config.mjs
    ├── tailwind.config.ts
    ├── LICENSE
    ├── tsconfig.json
    ├── README.md
    └── src/
        ├── components/
        │   ├── DataTable.tsx
        │   ├── MaxWidthWrapper.tsx
        │   ├── CustomMap.tsx
        │   ├── ModeToggle.tsx
        │   ├── ShareButton.tsx
        │   ├── Navbar.tsx
        │   ├── ui/
        │   │   ├── toaster.tsx
        │   │   ├── input.tsx
        │   │   ├── table.tsx
        │   │   ├── label.tsx
        │   │   ├── dropdown-menu.tsx
        │   │   ├── toast.tsx
        │   │   ├── alert-dialog.tsx
        │   │   ├── hover-card.tsx
        │   │   ├── button.tsx
        │   │   ├── scroll-area.tsx
        │   │   ├── avatar.tsx
        │   │   ├── separator.tsx
        │   │   ├── toggle.tsx
        │   │   └── dialog.tsx
        │   ├── CardContainer.tsx
        │   ├── NameCard.tsx
        │   ├── ImageModel.tsx
        │   ├── Card.tsx
        │   ├── playgrounds/
        │   │   ├── PermissionsPlayground.tsx
        │   │   ├── IncognitoPlayground.tsx
        │   │   ├── DeviceInfoPlayground.tsx
        │   │   ├── LocationPlayground.tsx
        │   │   └── CookiePlayground.tsx
        │   ├── ThemeProviderWrapper.tsx
        │   └── theme-provider.tsx
        ├── lib/
        │   └── utils.ts
        ├── data/
        │   ├── topic.ts
        │   └── creator.ts
        ├── hooks/
        │   └── use-toast.ts
        └── app/
            ├── page.tsx
            ├── globals.css
            ├── p/
            │   └── [slug]/
            │       └── page.tsx
            ├── about/
            │   └── page.tsx
            └── layout.tsx
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