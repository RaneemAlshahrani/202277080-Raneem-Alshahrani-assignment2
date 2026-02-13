(() => {
  
  const root = document.documentElement; // <html> element for theme attribute

  const themeToggle = document.getElementById("themeToggle"); // Theme toggle button
  const fontToggle = document.getElementById("fontToggle");   // Font size toggle button

  const menuToggle = document.getElementById("menuToggle");   // Hamburger menu button
  const closeMenu = document.getElementById("closeMenu");     // Close button inside mobile menu
  const menu = document.getElementById("menu");               // Mobile menu panel
  const backdrop = document.getElementById("backdrop");       // Dark overlay behind menu

  // Get the system's preferred color scheme (light or dark)
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  // Apply the given theme (light or dark)
  function applyTheme(theme) {
    // Set data-theme attribute on <html> element (used by CSS)
    root.setAttribute("data-theme", theme);
    
    // Save preference to localStorage for persistence across sessions
    localStorage.setItem("theme", theme);

    // Update toggle button emoji: sun for dark mode, moon for light mode
    if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  // Initialize theme on page load (use saved preference or system default)
  const savedTheme = localStorage.getItem("theme");
  applyTheme(savedTheme || getSystemTheme());

  // Toggle theme when button is clicked
  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || getSystemTheme();
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // Apply font size to root element
  function applyFont(sizePx) {
    root.style.fontSize = sizePx; // Set font size on <html>
    localStorage.setItem("fontSize", sizePx); // Save to localStorage

    // Update button text: A- for large (to make smaller), A+ for small (to make larger)
    if (fontToggle) fontToggle.textContent = sizePx === "18px" ? "A-" : "A+";
  }

  // Initialize font size on page load
  const savedFont = localStorage.getItem("fontSize");
  applyFont(savedFont || "16px"); // Default to 16px if no saved preference

  // Toggle font size when button is clicked
  fontToggle?.addEventListener("click", () => {
    const current = localStorage.getItem("fontSize") || "16px";
    applyFont(current === "16px" ? "18px" : "16px");
  });
 
  // Check if viewport is mobile size
  const isMobile = () => window.matchMedia("(max-width: 760px)").matches;

  // Open the mobile menu
  function openMenu() {
    // Only open if elements exist and viewport is mobile
    if (!menu || !backdrop || !isMobile()) return;

    // Show menu and backdrop
    menu.classList.remove("hidden");
    backdrop.classList.remove("hidden");
    
    // Update ARIA attribute for accessibility
    menuToggle?.setAttribute("aria-expanded", "true");
    
    // Prevent body scroll while menu is open
    document.body.classList.add("menu-open");
  }

  // Close the mobile menu
  function closeMenuFn() {
    if (!menu || !backdrop) return;

    // Hide menu and backdrop
    menu.classList.add("hidden");
    backdrop.classList.add("hidden");
    
    // Update ARIA attribute
    menuToggle?.setAttribute("aria-expanded", "false");
    
    // Re-enable body scroll
    document.body.classList.remove("menu-open");
  }

  // Initialize menu as closed on page load
  closeMenuFn();

  // Toggle menu when hamburger button is clicked
  menuToggle?.addEventListener("click", () => {
    if (!menu) return;
    menu.classList.contains("hidden") ? openMenu() : closeMenuFn();
  });

  // Close menu when X button is clicked
  closeMenu?.addEventListener("click", closeMenuFn);
  
  // Close menu when backdrop (dark overlay) is clicked
  backdrop?.addEventListener("click", closeMenuFn);

  // Close menu when any navigation link inside it is clicked
  menu?.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenuFn();
  });

  // Close menu when ESC key is pressed (accessibility)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenuFn();
  });

  // Auto-close menu when window is resized to desktop width
  window.addEventListener("resize", () => {
    if (!isMobile()) closeMenuFn();
  });

  // List of CSS selectors for elements to animate on scroll
  const SELECTORS = [
    "#home",              // Hero section
    "#home .profile-pic", // Profile picture
    "#home .hero-title",  // Hero title
    "#about",             // About section
    "#projects",          // Projects section
    ".project",           // Individual project cards
    "#skills",            // Skills section
    ".skills-group",      // Skill groups
    "#contact",           // Contact section
    "footer"              // Footer
  ];

  // Collect all unique DOM elements matching the selectors
  const targets = [];
  SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!targets.includes(el)) targets.push(el); // Avoid duplicates
    });
  });

  // Add 'reveal' class to all target elements (CSS hides them initially)
  targets.forEach(el => el.classList.add("reveal"));

  // Check if user prefers reduced motion (accessibility)
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  // If reduced motion is preferred OR browser doesn't support IntersectionObserver
  if (prefersReduced || !("IntersectionObserver" in window)) {
    // Show all elements immediately without animation
    targets.forEach(el => el.classList.add("show"));
  } else {
    // Create IntersectionObserver to detect when elements enter viewport
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        // When element is visible in viewport
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Trigger CSS animation
          obs.unobserve(entry.target);        // Stop observing (animate once only)
        }
      });
    }, { 
      threshold: 0.12,                    // Trigger when 12% of element is visible
      rootMargin: "0px 0px -8% 0px"       // Start animation slightly before element enters viewport
    });

    // Start observing all target elements
    targets.forEach(el => io.observe(el));
  }
})();
