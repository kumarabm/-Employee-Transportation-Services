# Overview

This is a full-stack web application for ENTREX, a premium chauffeur service company. The application is built as a modern landing page showcasing their corporate transportation services, certifications, and booking capabilities. It features a React frontend with TypeScript, a Node.js/Express backend, and uses Drizzle ORM with PostgreSQL for data management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful API with /api prefix for all routes
- **Development Setup**: Vite middleware integration for seamless full-stack development
- **Error Handling**: Centralized error middleware with structured responses

## Data Storage
- **Database**: PostgreSQL with Neon serverless database
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Type Safety**: Shared schema types between frontend and backend
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Development Tools
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: Path mapping for clean imports (@/, @shared/, @assets/)
- **Development Experience**: Hot module replacement and runtime error overlay

## Component Architecture
- **Design System**: Modular UI components with consistent theming
- **Layout**: Section-based page composition with reusable components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Built-in accessibility features through Radix UI primitives

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router
- **date-fns**: Date manipulation and formatting

## UI/UX Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

## Development Tools
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for Node.js
- **drizzle-kit**: Database migration and introspection tool
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling

## Form and Validation
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Additional Utilities
- **nanoid**: Unique ID generation
- **connect-pg-simple**: PostgreSQL session store
- **embla-carousel-react**: Carousel/slider component