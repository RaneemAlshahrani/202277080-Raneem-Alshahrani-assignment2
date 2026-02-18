# AI Usage Report

## Overview
This report documents how AI tools were used during the development of the personal portfolio website. AI was used as a support tool for debugging, optimization, UI improvements, and learning modern front-end techniques. All AI suggestions were reviewed, modified when necessary, and tested before being integrated into the final implementation.

## AI Tools Used
**ChatGPT**:
* Debugging layout and JavaScript issues
* Designing dark/light theme behavior
* Implementing mobile navigation logic
* Explaining modern browser APIs

**Claude AI**:
* Reviewing CSS structure
* Identifying redundant rules
* Suggesting performance and accessibility improvements

## Effective Use of AI

AI tools were used meaningfully to solve specific development challenges rather than to generate the entire project. For example:

1. **Dark Mode Icon Handling**

**Problem**: Black icons became invisible in dark mode.
**Solution**: Apply a reusable CSS filter class instead of duplicating assets.
```css
:root[data-theme="dark"] img.dark-invert{
  filter: invert(1) hue-rotate(180deg) contrast(1.05);
}
```
This approach reduced redundancy and improved maintainability.

2. **Theme Toggle with Persistence**
AI suggested using `localStorage` to preserve user preference.
```javascript
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
```
This ensured consistent user experience across sessions.

3. **Performance-Optimized Scroll Animations**

Instead of using scroll event listeners, AI recommended IntersectionObserver.
```javascript
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      obs.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});

```

This reduced unnecessary computations and improved performance.

## Learning Outcomes

**CSS Concepts Learned**:
- Using CSS custom properties for theming
- Applying Flexbox and Grid effectively
- Improving accessibility with proper contrast and reduced-motion support

**JavaScript Concepts Learned**:
- DOM manipulation and event handling
- Using `localStorage` for persistence
- Applying `matchMedia` and `IntersectionObserver` for dynamic behavior

## Benefits & Challenges
- **Benefits**
  * Reduced debugging time by quickly identifying CSS conflicts and missing event logic.
  * Improved code quality through refactoring and removal of redundant styles.

- **Challenge 1**: Dark Icons Invisible in Dark Mode
  * Problem: Icons became invisible on dark backgrounds.
  * AI Role: Suggested using a reusable `.dark-invert` CSS filter instead of duplicating assets.
  * Action Taken: Applied the filter conditionally in dark mode and tested contrast.
  * Benefit: Cleaner asset management and improved maintainability.

- **Challenge 2**: Mobile Menu Not Closing Properly
  * Problem: Menu remained open or conflicted with desktop layout.
  * AI Role: Identified duplicated CSS and incomplete toggle logic.
  * Action Taken: Consolidated styles and implemented a single JavaScript toggle state.
  * Benefit: Stable, predictable responsive navigation.

## Responsible Use & Modifications
- All AI-generated code was reviewed and rewritten where necessary.
- Suggestions were validated using MDN documentation and manual testing.
- Code was refactored to maintain originality and project consistency.
- Only understood and verified implementations were integrated.
AI enhanced development while maintaining academic integrity and full ownership of the final implementation.

## Innovation
AI was used creatively to improve both functionality and accessibility. Examples include:
* Implementing a reusable CSS class (`dark-invert`) to fix dark mode icon issues efficiently
* Replacing inefficient scroll-based animations with `IntersectionObserver`
* Improving user experience by adding persistent UI preferences

Rather than replacing development effort, AI served as an intelligent assistant that enhanced learning and problem-solving.

## Conclusion
AI tools supported debugging, optimization, and conceptual understanding throughout the project. Their integration improved development efficiency while preserving originality and design ownership.

<!-- ================= Assignment 2 Update Required ================= -->

<!-- ToDo(A2-AI-1):
Add a new section titled "Assignment 2 Additions".
Describe how AI helped with:
- Dynamic feature implementation
- User feedback logic
- Error handling improvements
-->

<!-- ToDo(A2-AI-2):
Ensure at least one NEW example of AI-assisted code
is documented (not only reused Assignment 1 examples).
-->

<!-- ToDo(A2-AI-3):
Confirm that all AI-generated suggestions were reviewed,
modified if needed, and understood before integration.
-->
