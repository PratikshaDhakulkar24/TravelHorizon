# TravelWise - Travel Booking Website

## Overview

TravelWise is a static travel booking and destination exploration website built with vanilla HTML, CSS, and JavaScript. The application provides users with the ability to browse travel destinations, view a gallery of travel photos, learn about the company, and submit booking requests through a form. The project is designed as a multi-page website with a responsive design that works across desktop and mobile devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript with no frameworks or build tools.

**Rationale**: The project uses a traditional multi-page application (MPA) architecture rather than a single-page application (SPA). This approach was chosen for simplicity, better SEO potential, and easier maintenance for a content-focused travel website. Each page is a separate HTML file with shared navigation and styling.

**Page Structure**:
- **index.html**: Homepage with hero section and featured destinations
- **explore.html**: Destinations browsing page with detailed package information
- **booking.html**: Booking form for trip reservations
- **gallery.html**: Photo gallery of travel destinations
- **about.html**: Company information and mission statement

**Design System**: CSS custom properties (variables) are used for consistent theming including primary colors (#2563eb blue, #10b981 green), typography, border radius (12px), and transition effects (0.3s ease). This creates a maintainable design system without a CSS framework.

**Responsive Design**: Mobile-first responsive design with hamburger menu navigation for smaller screens. The navigation toggles via JavaScript event listeners, and CSS media queries handle layout adaptations.

### Client-Side Logic

**Form Handling**: The booking form uses client-side JavaScript for form submission prevention and data collection. Form data is logged to the console and a confirmation message is displayed. Currently, no backend processing occurs - this is purely a frontend demonstration.

**Navigation**: Interactive hamburger menu for mobile devices with JavaScript toggle functionality. Active page indication is handled through CSS classes.

**Image Handling**: External images are loaded from Unsplash CDN URLs embedded directly in HTML, avoiding the need for local asset management.

### Backend Architecture

**Development Server**: A simple Python HTTP server (`server.py`) serves static files during development on port 5000. The server implements cache control headers to prevent browser caching during development and includes custom logging.

**Production Deployment**: The application is designed to be deployed as static files to any web hosting service (Netlify, Vercel, GitHub Pages, etc.). No server-side processing is required.

**Rationale**: The simplicity of a static site architecture eliminates the need for a traditional backend framework, reduces hosting costs, and improves page load performance. Future enhancements could add a backend API for actual booking processing.

### Data Architecture

**Current State**: No database or persistent storage exists. Form submissions are handled client-side only with console logging.

**Future Considerations**: If booking functionality needs to be implemented, the architecture would require:
- A backend API (Node.js/Express, Python/Flask, etc.)
- Database for storing bookings, user information, and destination data
- Form submission to POST endpoint instead of client-side handling

## External Dependencies

### Third-Party Services

**Unsplash Image CDN**: Images for destinations and gallery are loaded from `images.unsplash.com`. This provides high-quality travel photography without local storage requirements.

**Rationale**: Using a CDN for images reduces repository size, provides optimized image delivery, and offers a large library of professional travel photos. Trade-off is the external dependency and potential for broken links if Unsplash changes URLs.

### Development Tools

**Python HTTP Server**: Built-in Python `http.server` module provides local development server with no additional dependencies.

### Browser APIs

**Standard Web APIs**: The application uses only native browser APIs:
- DOM manipulation (querySelector, addEventListener)
- FormData API for form handling
- LocalStorage or SessionStorage (referenced but not actively used in current code)

**No External JavaScript Libraries**: No jQuery, React, Vue, or other frameworks. This keeps the bundle size minimal and eliminates dependency management complexity.
