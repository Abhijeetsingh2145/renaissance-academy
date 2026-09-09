# Architecture --- Renaissance Academy Website

## 1. Technology

Use:

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS

Use the Next.js App Router.

## 2. Rendering

Use Server Components by default.

Use Client Components only where client-side interaction or browser APIs
require them.

## 3. Application Structure

Use a maintainable structure separating:

-   Routes/pages.
-   Reusable UI components.
-   Page sections.
-   Content/data.
-   Configuration.
-   Server-side functionality.
-   Integrations.
-   Static assets.

## 4. Content

Keep reusable institutional content separate from presentation where
practical.

Use structured content for information that may need updating.

Do not introduce a CMS unless required by the confirmed scope.

## 5. Backend

Use a managed backend/database and authentication system suitable for:

-   Admission enquiry storage.
-   Single-admin authentication.
-   Notice storage and management.

The final implementation must support secure server-side access to
private data.

## 6. Admin

Provide one authenticated admin area containing:

-   Enquiries.
-   Notices.

No roles/permissions system is required.

## 7. Notice Data

A notice must support:

-   Title.
-   Description.
-   Expiry date.
-   Published/hidden status.
-   Created/updated information as needed for management.

Public notice queries must return only published and non-expired
notices.

## 8. Admission Data

Store the required admission enquiry fields:

-   Parent/Guardian Name.
-   Student Name.
-   Date of Birth.
-   Class Seeking Admission.
-   Phone Number.
-   Email Address.
-   Previous School.

Admission submissions must remain private to the authorized admin.

## 9. Notifications

The admission submission workflow must support:

-   Email notification.
-   WhatsApp notification.

Use appropriate external services/API integrations without exposing
private credentials to the client.

## 10. Hosting & Domain

The school already owns the domain.

Domain management/transfer will be handled by the project owner.

Use a production hosting platform appropriate for the Next.js
application. Domain ownership and application hosting do not need to be
on the same provider.

## 11. SEO Architecture

Support:

-   Metadata.
-   Clean URLs.
-   Sitemap.
-   Robots configuration.
-   Canonical URLs where required.
-   Structured data where appropriate.
-   Search-engine-readable content.
-   Local SEO requirements.

## 12. Security

-   Protect the admin area with authentication.
-   Keep database and API credentials server-side.
-   Validate submitted data.
-   Do not expose private enquiry data publicly.
-   Use secure production configuration.
-   Protect public forms against abuse where appropriate.

## 13. Performance

Prioritize:

-   Server rendering where appropriate.
-   Optimized images.
-   Minimal client-side JavaScript.
-   Limited third-party scripts.
-   Efficient loading of media.
-   Reusable components.

## 14. Responsive & Accessibility

The architecture must support responsive layouts and accessible
components across mobile, tablet and desktop.

## 15. Analytics

Support Google Analytics and Google Search Console integration.

## 16. Architecture Principle

Use the simplest architecture that satisfies the confirmed requirements.
Do not add unnecessary CMS, CRM, roles, payment systems, portals, or
other infrastructure.
