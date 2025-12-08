# SYLION TECH - WhatsApp AI Assistant Platform

## Overview

SYLION TECH is a modern SaaS platform that provides AI-powered WhatsApp assistants for small and medium businesses (SMEs), primarily targeting the Moroccan and francophone markets. The platform enables businesses to automate customer interactions on WhatsApp 24/7 using intelligent AI assistants trained on their own documents and business knowledge.

The application is built as a full-stack TypeScript solution with a React frontend and Express backend, emphasizing a premium, high-contrast design aesthetic inspired by modern SaaS platforms like Linear, Stripe, and Vercel.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query** (React Query) for server state management
- **Framer Motion** for animations and transitions
- **Tailwind CSS** for styling with custom design system

**Design System:**
The application follows a strict design system defined in `design_guidelines.md`:
- **Color Palette:** High-contrast black (#0B0B0B) and white (#FFFFFF) alternating sections, with purple-to-blue gradients (#4F46E5 to #7C3AED) for CTAs and accents. WhatsApp green (#25D366 to #128C7E) for WhatsApp-specific features.
- **Typography:** Inter for body text, JetBrains Mono for technical elements
- **Component Library:** shadcn/ui components with custom styling (configured in `components.json`)
- **Animation Strategy:** Motion-forward design with background effects (LightRays, GridPattern, FloatingOrbs) and smooth transitions

**Component Structure:**
- Modular page-based architecture (`client/src/pages/`)
- Reusable UI components (`client/src/components/ui/`)
- Custom animated components (`client/src/components/animations/`)
- Background effects components (`client/src/components/backgrounds/`)
- Feature-specific sections (Hero, KPIs, Features, PMEUseCases, OnboardingStepper, RAGMultilingue, BentoMenu, CTA)

**Routing:**
- Single-page application with client-side routing
- Routes: `/` (home), `/products`, `/services`, `/pricing`, `/contact`
- Navigation component conditionally renders only on homepage

### Backend Architecture

**Technology Stack:**
- **Express.js** server with TypeScript
- **ESM modules** (ES Modules throughout)
- **Development:** tsx for TypeScript execution
- **Production:** esbuild for bundling

**Server Structure:**
- Minimal API setup currently (`server/routes.ts` has placeholder routes)
- Middleware for request logging and JSON parsing
- Vite integration in development mode for HMR
- Static file serving in production

**Storage Layer:**
- Abstracted storage interface (`IStorage`) allowing for different implementations
- In-memory storage (`MemStorage`) as default implementation
- Designed to support database migration without changing application code

### Data Storage Solutions

**Database Configuration:**
- **Drizzle ORM** configured for PostgreSQL (via `drizzle.config.ts`)
- **Neon Serverless** driver for database connections
- Schema defined in `shared/schema.ts` with Drizzle-Zod integration for validation
- Currently minimal schema: basic `users` table with id, username, password

**Migration Strategy:**
- Database migrations stored in `./migrations` directory
- Schema changes managed through `npm run db:push` command
- Connection string expected via `DATABASE_URL` environment variable

**Current Storage Pattern:**
The application uses an in-memory storage implementation but is architected to easily swap to PostgreSQL through the storage interface abstraction.

### Authentication and Authorization

Currently minimal authentication infrastructure:
- User schema defined with username/password fields
- No active authentication implementation in routes
- Foundation laid for future session-based or token-based auth

### External Dependencies

**UI Component Library:**
- **shadcn/ui:** Comprehensive set of accessible, customizable React components built on Radix UI primitives
- **Radix UI:** Headless UI primitives for accessibility (accordions, dialogs, dropdowns, popovers, tooltips, etc.)

**Animation Libraries:**
- **Framer Motion:** Primary animation library for page transitions, component animations, and interactive elements
- **Embla Carousel:** Carousel/slider functionality

**Form Management:**
- **React Hook Form:** Form state management
- **@hookform/resolvers:** Validation resolver integration
- **Zod:** Schema validation (integrated with Drizzle for type-safe database schemas)

**Database & ORM:**
- **Drizzle ORM:** Type-safe SQL ORM for PostgreSQL
- **@neondatabase/serverless:** Serverless PostgreSQL driver for Neon
- **drizzle-zod:** Integration layer between Drizzle and Zod

**Styling:**
- **Tailwind CSS:** Utility-first CSS framework
- **class-variance-authority (CVA):** Variant-based component styling
- **clsx & tailwind-merge:** Utility for conditional className merging

**Development Tools:**
- **@replit/vite-plugin-runtime-error-modal:** Development error overlay
- **@replit/vite-plugin-cartographer:** Replit-specific development tools
- **@replit/vite-plugin-dev-banner:** Development environment banner

**Date Handling:**
- **date-fns:** Modern date utility library

**Session Management (Configured but not actively used):**
- **connect-pg-simple:** PostgreSQL session store for Express sessions

**Third-Party Integrations:**
The application is designed to integrate with:
- **WhatsApp Business API** (referenced throughout UI but not yet implemented in backend)
- **CRM Systems** (mentioned in UI: Salesforce, HubSpot, Zoho)
- **Document processing** for RAG (Retrieval-Augmented Generation) knowledge bases

### Key Architectural Decisions

**Monorepo Structure:**
- Single repository with clearly separated `client/`, `server/`, and `shared/` directories
- Shared TypeScript code (schemas, types) accessible to both frontend and backend via path aliases

**Type Safety:**
- End-to-end TypeScript with strict mode enabled
- Shared schema definitions using Drizzle and Zod for runtime validation
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**Build Strategy:**
- **Development:** Vite dev server with HMR proxied through Express
- **Production:** Separate builds for frontend (Vite) and backend (esbuild)
- Frontend builds to `dist/public`, backend to `dist/`

**Design Philosophy:**
- Reference-based design approach (Linear, Stripe, Vercel aesthetic)
- Motion-forward interactions with subtle, professional animations
- High accessibility through Radix UI primitives
- Mobile-responsive with breakpoint-aware components

**Content Strategy:**
The application content is heavily focused on the Moroccan SME market:
- Multilingual support messaging (French, Arabic, Darija, English)
- Industry-specific use cases (real estate, education, healthcare, restaurants, automotive)
- Business-outcome oriented copy rather than technical jargon
- 10-minute onboarding promise for low friction adoption