# Naiton Next.js SSR Project

This is a Next.js 15 project with Server-Side Rendering (SSR), converted from a Vite React CSR project.

## Tech Stack

- **Next.js 15** - React framework with SSR
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Swiper** - Touch slider
- **clsx** - Utility for constructing className strings

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended).

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Create a production build
npm run build
```

### Production

```bash
# Start the production server
npm start
```

## Project Structure

```
nextjs/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── solutions/         # Solutions page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── ProjectsSwiper.tsx
│   ├── ContentSection.tsx
│   ├── CTASection.tsx
│   └── SolutionSection.tsx
├── public/                # Static assets
│   ├── fonts/            # Font files
│   └── img/              # Images
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Key Features

- **Server-Side Rendering (SSR)** - Pages are rendered on the server for better SEO and performance
- **Tailwind CSS 4** - Using the latest version with modern PostCSS plugin
- **TypeScript** - Full type safety across the application
- **Optimized Images** - Using Next.js Image component for automatic optimization
- **Client Components** - Strategic use of 'use client' for interactive components

## Migration Notes

This project was converted from a Vite React CSR application to Next.js SSR. Key changes include:

- React Router → Next.js App Router
- Client-side navigation → Server-side routing
- Vite → Next.js/Turbopack
- CSR components → SSR with selective client components
- Image imports → Next.js Image component
- Tailwind CSS 3 → Tailwind CSS 4

## License

Copyright Naiton, 2023
