# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume website project for showcasing TikTok marketing and content creation skills. The project contains resume information and job requirements for TikTok operations roles.

## Commands

### Development Server
```bash
# Start Python HTTP server (Mac/Linux)
python3 -m http.server 8000

# Start Python HTTP server (Windows)
python -m http.server 8000

# Access the website at http://localhost:8000
```

### Project Structure
```
self-introduction/
├── docs/
│   ├── resume.md         # Personal resume content in Chinese
│   └── jd.md            # Job description for TikTok operations role
├── index.html           # Main responsive website with sections: hero, about, skills, projects, contact
├── styles.css           # Modern CSS with dark/light theme support, animations, and mobile responsiveness
├── script.js            # ES6 class-based JavaScript with modular functionality
└── CLAUDE.md            # This file
```

## Technical Architecture

### Frontend Structure
- **Single Page Application**: All content in one HTML file with smooth scrolling navigation
- **CSS Architecture**: CSS custom properties (variables) system with dark/light theme toggle
- **JavaScript Modules**: Object-oriented approach with `TikTokExpertSite` class containing modular methods
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Performance**: Optimized loading with intersection observers and lazy loading animations

### Key Components
- **Navigation**: Auto-hiding navbar with hamburger menu for mobile
- **Hero Section**: Animated typewriter effect with statistics counters 
- **Skills Radar Chart**: Canvas-based visualization using Chart.js-like implementation
- **Timeline Projects**: CSS-based timeline with animated project cards
- **Contact Form**: Interactive form with floating labels and validation
- **Theme System**: CSS custom properties with JavaScript theme switcher

## Resume Content Focus

The resume highlights experience in:
- TikTok account growth (0 to 1000 followers in 3 months)
- Content strategy and video production
- Data analysis and optimization using TikTok Analytics
- TikTok Shop operations and conversion optimization
- Basic TikTok Ads Manager experience
- Influencer collaboration and partnership management
- Tools: CapCut, PR, PS, Excel, data analytics tools
- Education: Engineering Cost Management, Chongqing University of Arts and Sciences (2024)

## Job Requirements Alignment

Target position focuses on:
- TikTok account management and growth
- Content planning and creation
- Data analysis and performance optimization
- TikTok Shop daily operations
- Advertising campaign management
- Influencer relationship management

## Development Notes

### Design Principles
- **Mobile-First Responsive**: Optimized for mobile viewing with progressive enhancement for desktop
- **Chinese Language Content**: All content based on resume.md with professional TikTok marketing terminology
- **Data-Driven Presentation**: Emphasize quantifiable results (1000 followers, 51.1% engagement, 20M+ views)
- **Modern Tech Aesthetic**: Clean, professional design with code-inspired elements and dark theme
- **Performance Optimized**: Lazy loading, intersection observers, and optimized animations

### Content Strategy
- Hero section highlights key metrics as animated counters
- Skills section uses visual progress bars and interactive elements
- Projects timeline showcases concrete achievements with specific numbers
- All text emphasizes measurable results and professional competencies
- Contact section maintains professional tone while being approachable

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox for layouts
- CSS Custom Properties for theming
- ES6+ JavaScript features (classes, arrow functions, template literals)