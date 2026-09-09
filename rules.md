# Rules --- Renaissance Academy Website

## 1. Source of Truth

Follow:

-   PRD.md for product requirements.
-   Architecture.md for technical structure.
-   design.md for visual decisions.
-   phases.md for implementation order.
-   memory.md for persistent project context.

Do not silently contradict these files.

## 2. Accuracy

Never invent school information.

Do not fabricate:

-   Staff.
-   Achievements.
-   Statistics.
-   Fees.
-   Facilities.
-   Results.
-   Testimonials.
-   Accreditations.
-   Policies.
-   Dates.
-   Other institutional claims.

Flag missing information for verification.

## 3. Existing Website

Use the existing Renaissance Academy website as reference material only.

Do not copy its outdated design, structure, or unverified time-sensitive
content.

## 4. Reference Website

The supplied reference website may inform information breadth and ideas.

Do not copy its homepage structure or make Renaissance Academy's
homepage unnecessarily dense.

## 5. Design

Follow the premium-modern school direction defined in design.md.

Do not add unnecessary visual effects, animations, decorative elements,
or template-like sections.

## 6. Homepage

Keep the homepage focused.

Do not move every piece of school information onto the homepage simply
because the information exists.

Use dedicated inner pages for detailed content.

## 7. Components

Prefer reusable components and avoid unnecessary duplication.

Do not create excessive abstraction without a real reuse case.

## 8. React

Use Server Components by default.

Use Client Components only when necessary.

Avoid unnecessary client-side state and JavaScript.

## 9. TypeScript

Use TypeScript throughout.

Avoid `any` unless technically justified.

Do not suppress errors merely to make the build pass.

## 10. Responsive Design

Every page must work on mobile, tablet and desktop.

Prevent horizontal overflow, clipped content and unusable controls.

## 11. Accessibility

Use semantic HTML, accessible labels, keyboard navigation, visible focus
states, appropriate contrast and meaningful alt text.

## 12. Images

Prefer authentic school photography.

Never present stock photography as if it were the school.

Optimize images before production use.

## 13. Forms

Validate admission data.

Provide clear loading, success and error states.

Never expose private credentials or private submissions to the browser
unnecessarily.

## 14. Admin Security

The admin area must require authentication.

Enquiry data must not be publicly accessible.

Only the authenticated admin can manage notices or view submissions.

## 15. Dependencies

Do not add libraries without a clear requirement.

Prefer existing dependencies and platform capabilities where suitable.

## 16. Code Quality

Remove unnecessary debug code, unused imports and temporary hacks before
production.

Keep code readable and maintainable.

## 17. Verification

After significant changes:

-   Run the application.
-   Check affected pages.
-   Check responsive behavior.
-   Check forms.
-   Check admin functionality.
-   Check build/type errors.
-   Check console errors.

## 18. Scope

Do not add features outside the confirmed requirements without
documenting and approving the change.

## 19. Core Rule

Prioritize factual accuracy, simplicity, usability, performance and
maintainability.
