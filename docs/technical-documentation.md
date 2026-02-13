# Technical Documentation

## Overview

This project is a front-end personal portfolio website developed to present academic background, technical skills, and completed projects in a structured and accessible format. The system is designed as a static web application and focuses on usability, clarity, and organized content presentation.

The website runs entirely on the client side and does not require backend services or database integration.

### Scope

* Front-end only (HTML, CSS, JavaScript)
* No backend or database integration
* Optimized for desktop and mobile browsers

## Architecture

### System Design and Components

The system follows a static front-end architecture composed of:

* **HTML**: Semantic structure of the website
* **CSS**: Layout, theming (light/dark mode), animations, and responsiveness
* **JavaScript**: UI interactivity and state management

### Folder Structure

```
202277080-Raneem-Alshahrani-assignment2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore

```
This structure separates content, styling, logic, and documentation for better maintainability.

### Main Components

* Navigation Bar
* Hero Section
* About Section
* Projects Section
* Skills Section
* Contact Form
* Footer

Each section is implemented using semantic HTML elements for readability and structured layout.

### User Interaction Flow

* User actions (clicks, toggles, navigation) trigger JavaScript event listeners

* Interface preferences (such as theme or font size) are saved using `localStorage`

* The system updates the UI dynamically without page reload

No data is transmitted to external services.

## Installation

### Prerequisites

* A modern web browser (Chrome, Firefox, Edge, Safari)
* Optional: VS Code with Live Server extension for local development

### Setup Instructions

1. Download or clone the repository.
2. Ensure all project folders remain in the same directory structure.

```
202277080-Raneem-Alshahrani-assignment2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore

```

3. Open `index.html` directly in a browser **or**
4. Use the Live Server extension in VS Code for local development.

No additional configuration is required.

## Configuration

* No environment variables required
* Theme and font preferences are automatically saved in the browser

## Usage

### How to Use the Website

* Navigate using the top navigation bar
* Scroll to view different sections
* Use buttons in the navigation bar to:

  * Toggle Light/Dark Mode
  * Increase/Decrease Font Size
  * Open Mobile Menu (on small screens)

### Common Workflows

* **Viewing Projects**: Scroll to the Projects section
* **Changing Theme**: Click the moon/sun icon
* **Mobile Navigation**: Click ☰ on mobile view
* **Contacting**: Fill out the contact form to send an email

## API Reference

This project does not expose or consume external APIs.

### Internal JavaScript Functions (Examples)

* `applyTheme(theme)` – switches between light and dark modes
* `openMenu()` / `closeMenu()` – controls mobile menu visibility
* `IntersectionObserver` – triggers scroll-based animations

## Troubleshooting

### Common Issues

* **Issue**: Dark icons not visible in dark mode  
  **Solution**: Apply the `dark-invert` CSS class to black icons

* **Issue**: Mobile menu does not close  
  **Solution**: Ensure the `.hidden` class is applied correctly and JavaScript event listeners are active

* **Issue**: Theme or font size resets on refresh  
  **Solution**: Verify `localStorage` access is not blocked by the browser

## Contributing

### Contribution Guidelines

This project is currently a personal academic portfolio and not open for external contributions.

### Development Setup

* Modify HTML for content updates
* Update CSS variables for design changes
* Extend JavaScript for new UI features

## References

* zybook of the course
* w3schools Web
* YouTube video

## Conclusion

This portfolio website demonstrates a structured front-end architecture, responsive design principles, and modern JavaScript techniques. The documentation ensures maintainability, clarity, and ease of future extension while serving as a technical reference for understanding the system.

## Next Steps

1. Review the documentation for clarity
2. Add screenshots for each major section
3. Document future enhancements (e.g., backend integration)
4. Keep documentation updated with new features
5. Validate accessibility improvements periodically

