# VDU Portal

A comprehensive video creator platform built with Next.js 14 App Router, featuring character selection, challenges, leaderboards, and analytics.

## Features

### 🎬 Core Pages
- **Landing Page**: Beautiful hero section with login functionality
- **Onboarding Flow**: Interactive character selection with progress tracking
- **Dashboard**: Overview of stats, challenges, and recent content
- **Content Creation Studio**: Upload interface with drag-and-drop support
- **Leaderboard**: Competitive rankings with filtering options
- **Achievements Gallery**: Progress tracking and badge system
- **Analytics Dashboard**: Detailed performance metrics and insights
- **Profile & Settings**: User management and preferences

### 🎨 Design & UX
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Animations**: Smooth transitions using Framer Motion
- **Loading States**: Proper loading indicators and skeleton screens
- **Error Boundaries**: Graceful error handling throughout the app
- **SEO Optimized**: Comprehensive meta tags and Open Graph support

### 🔧 Technical Features
- **Next.js 14 App Router**: Latest Next.js features and routing
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework with custom theme
- **Heroicons**: Beautiful SVG icons
- **Responsive Design**: Works seamlessly on all devices
- **Accessibility**: WCAG compliant components and interactions

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── (routes)/          # Route groups
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── layout/           # Layout components
│   └── features/         # Feature-specific components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── data/                 # Mock data and constants
└── hooks/                # Custom React hooks
```

## Key Components

### UI Components
- **Button**: Configurable button with variants and loading states
- **Card**: Flexible card component with header, content, and footer
- **Badge**: Status indicators with different variants
- **ProgressBar**: Linear and circular progress indicators
- **LoadingSpinner**: Loading states with error boundaries

### Layout Components
- **Header**: Navigation with user info and notifications
- **ErrorBoundary**: Error handling wrapper
- **LoadingState**: Universal loading state handler

## Features Overview

### Landing Page
- Hero section with engaging visuals
- Feature highlights
- Statistics showcase
- Call-to-action sections

### Onboarding
- Multi-step character selection
- Progress tracking
- Character abilities and rarities
- Smooth transitions between steps

### Dashboard
- Performance metrics
- Active challenges with progress
- Recent content overview
- User progress visualization

### Content Creation
- Drag-and-drop file upload
- Multiple content type support
- Rich metadata forms
- Upload progress tracking

### Leaderboard
- Real-time rankings
- Filtering and sorting options
- User comparison features
- Achievement showcases

### Achievements
- Progress tracking
- Rarity system
- Category filtering
- Achievement details modal

### Analytics
- Performance metrics
- Audience demographics
- Content performance
- Device usage statistics

### Profile & Settings
- User profile management
- Privacy settings
- Notification preferences
- Account security options

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Heroicons**: SVG icon library
- **React**: UI library

## Contributing

This is a demo project showcasing modern web development practices with Next.js App Router. Feel free to explore the code and use it as a reference for your own projects.

## License

This project is for educational and demonstration purposes.