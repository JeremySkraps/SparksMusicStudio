# Music Lessons Website

## Overview

This is a full-stack web application for a music lessons business called "Sparks Music Lessons" located in Huntsville, Alabama. The application features a cyberpunk-themed design with a theatrical curtain-opening hero section and provides information about music lessons including guitar, drums, piano, and Ableton Live production.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom cyberpunk theme colors and fonts (Orbitron, Rajdhani)
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animation**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple

### Build System
- **Bundler**: Vite for frontend development and building
- **Backend Build**: esbuild for server-side bundling
- **Development**: tsx for TypeScript execution in development

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **CurtainHero**: Theatrical curtain-opening animation on scroll
- **ServicesSection**: Display of music lesson offerings
- **AboutSection**: Information about the business
- **AmphitheaterSection**: Call-to-action section
- **ContactSection**: Contact form and information
- **Footer**: Social media links and business info

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Routes**: RESTful API endpoints (currently minimal setup)
- **Database Schema**: User management with Drizzle ORM

### UI System
- **Design System**: shadcn/ui components with "new-york" style
- **Theme**: Dark cyberpunk theme with custom CSS variables
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

1. **Client Requests**: React frontend makes API calls through TanStack Query
2. **Server Processing**: Express.js handles API requests and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with proper error handling
5. **State Management**: TanStack Query caches and manages server state

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight routing
- **express**: Web framework
- **zod**: Schema validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: Connected to Neon Database via DATABASE_URL environment variable

### Production
- **Build Process**: 
  - Frontend: Vite builds to `dist/public`
  - Backend: esbuild bundles server to `dist/index.js`
- **Deployment**: Single Node.js process serving both static files and API
- **Database**: Drizzle migrations via `db:push` command

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Configuration**: PostgreSQL-based session storage

### Key Features
- **Replit Integration**: Special handling for Replit development environment
- **Error Handling**: Runtime error overlay in development
- **Asset Management**: Configurable asset paths and aliases
- **TypeScript**: Full type safety across frontend and backend