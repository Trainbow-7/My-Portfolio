# Temitayo Oyedeji — Professional Portfolio

Personal portfolio website for **Temitayo Oyedeji** — mathematics educator, UAV/drone technology professional, AI/ML practitioner, and Co-Founder & Managing Director/COO of [UAV HUB SYSTEMS LIMITED](#).

> Education . AI . UAV . Innovation

The site's job: a visitor who has never heard of him should, within 90 seconds, understand what he does, believe he can do it, and know how to engage him.

---

## Status

**Phase 1 — MVP build in progress.**
Statically-generated marketing site with a working contact form. No database, admin dashboard, blog, or auth in this phase (see [Roadmap](#roadmap)).

## Tech stack

- **Next.js** (App Router) + **TypeScript** (strict)
- **Tailwind CSS**
- **lucide-react** for icons
- **Zod** for form validation (shared client/server)
- **Resend** for transactional email
- **Plausible** for privacy-friendly analytics
- Content lives in typed modules under `/content` — no CMS or database in Phase 1

## Getting started

```bash
# install dependencies
npm install

# copy env template and fill in values
cp .env.example .env.local

# run the dev server
npm run dev
```

The site builds and renders correctly even with env vars unset — the contact form falls back to showing direct email/WhatsApp details.

### Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends contact-form notification + autoresponse emails |
| `CONTACT_TO_EMAIL` | Inbox that receives contact-form submissions |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in metadata/sitemap |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics domain |

## Project structure

```
/app                 Routes (App Router)
/content             Typed content modules — all site copy lives here
/components          UI components
/public              Static assets
CONTENT-TODO.md       Outstanding real-world content to fill in
```

## Editing content

All copy is in `/content/*.ts` as typed, exported arrays — there is no CMS to log into in Phase 1. To update a project, service, qualification, etc., edit the relevant file and redeploy.

Placeholders are marked `TODO(content): …` and tracked in [`CONTENT-TODO.md`](./CONTENT-TODO.md). Nothing in this repo should contain invented credentials, project outcomes, or metrics — see that file for what's still needed before launch.

## Routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/about` | Bio, qualifications, experience timeline |
| `/expertise` | Expertise grid |
| `/projects` | Project index (filterable) |
| `/projects/[slug]` | Individual case study |
| `/services` | AI/ML · UAV & drone · STEM · AI for education |
| `/uav-hub` | Role at UAV HUB SYSTEMS + link to the company site |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |

## Design principles

- Minimal, premium, technology-professional — not a generic CV template
- Deep navy/charcoal palette with electric blue and cyan accents
- Motion kept to subtle fades and hover states; respects `prefers-reduced-motion`
- Accessibility and performance are launch requirements, not polish: WCAG-conscious markup, Lighthouse mobile > 90 target

## Relationship to the UAV HUB SYSTEMS site

This site is about **the person** — capability, credentials, individual consulting and training. The separate UAV HUB SYSTEMS site is about **the company** — enterprise drone services delivered by the team. Service copy is intentionally not duplicated between the two; this site links out to UAV HUB rather than re-selling its services.

## Deployment

Built for deployment on [Vercel](https://vercel.com). Push to `main` to trigger a production deploy once environment variables are configured in the project settings.

## Roadmap

- **Phase 2** — Database (Supabase), admin dashboard, CRUD for projects/services/qualifications/experience, enquiry inbox
- **Phase 3** — Insights/blog, resources/document centre, optional AI assistant

## License

All rights reserved. This is a personal portfolio and its content is not licensed for reuse.
