# Job Portal

> **Job Portal** — A modern, full‑stack recruitment platform built with **React + Vite + Supabase + Clerk**.
>
> Clean UI, real-time backend, employer & candidate workflows, and a modular codebase designed for contribution and learning.

---

&#x20;&#x20;

## Table of contents

1. [Demo & Live URL](#demo--live-url)
2. [What is this project?](#what-is-this-project)
3. [Features](#features)
4. [Tech stack](#tech-stack)
5. [Quick start (local)](#quick-start-local)
6. [Environment variables (](#environment-variables-envexample)[`.env.example`](#environment-variables-envexample)[)](#environment-variables-envexample)
7. [Project structure — how to explore fast](#project-structure---how-to-explore-fast)
8. [Key files & where to find features](#key-files--where-to-find-features)
9. [Architecture & notes](#architecture--notes)
10. [Developing & common tasks](#developing--common-tasks)
11. [Troubleshooting & gotchas](#troubleshooting--gotchas)
12. [Testing & mock data](#testing--mock-data)
13. [Contributing](#contributing)
14. [License](#license)
15. [Short Arabic summary / مُلخَّص بالعربي](#short-arabic-summary--ملخّص-بالعربي)

---

## Demo & Live URL

Visit the app preview (if deployed): `https://job-portal-anas.vercel.app/`

> Replace with your deployed URL or remove this line if not deployed.

---

## What is this project?

Job Portal is a full‑stack web application to connect job seekers and employers. It provides job listings, search & filters, candidate application flows, employer job management, and dashboards — all wired to Supabase for data/storage and Clerk for authentication.

This repository is organized to be easy to explore for contributors and learners: modular components, custom hooks, mock data for local development, and clear utility layers for backend integrations.

---

## Features

- Browse and filter job listings (company, role, location)
- Detailed job pages with apply button
- Candidate dashboard to track applications and statuses
- Employer dashboard to post, edit and manage job postings
- Authentication & protected routes via **Clerk**
- Realtime DB and file storage via **Supabase**
- Responsive, reusable UI components
- Custom hooks for data fetching and state handling
- Mock data and API simulation for development & testing

---

## Tech stack

**Frontend**

- React (hooks & components)
- Vite (dev server & build)
- JavaScript (ES6+)
- CSS Modules (scoped styles)

**Backend & Auth**

- Supabase (Postgres, Realtime, Storage)
- Clerk (Authentication & session management)

**Tools**

- ESLint (linting)
- (Optional) React Router for routing

---

## Quick start (local)

```bash
# 1. clone
git clone https://github.com/anaswail/Job-Portal.git
cd Job-Portal

# 2. install dependencies
npm install

# 3. create .env from template and add keys
cp .env.example .env
# then edit .env with your Supabase & Clerk keys

# 4. start dev server
npm run dev
# open http://localhost:5173 (Vite default)
```

---

## Environment variables (`.env.example`)

Make sure browser-facing env variables that the frontend needs are prefixed with `VITE_` (Vite requirement).

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxxxxxx
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxx
VITE_API_BASE_URL=http://localhost:5173/api
```

**Notes**

- Create a Supabase project and set up required tables (jobs, applications, companies, profiles) and a storage bucket for files if required.
- Configure Clerk application and allowed origins ([http://localhost:5173](http://localhost:5173) and your production domain).
- For development you can use mock API files under `src/api/` so a running Supabase instance is not required.

---

## Project structure — how to explore fast

```
src/
├─ api/           # API simulation & feature endpoints
├─ components/    # Reusable UI components & subcomponents
├─ data/          # Mock data (companies, faqs, mock jobs)
├─ hooks/         # Custom hooks (useFetch, useAuth wrappers)
├─ layouts/       # Layout components (Header, Footer, Dashboard layout)
├─ lib/           # Utility functions (formatters, validators)
├─ pages/         # Route pages (JobsList, JobDetails, PostJob, Onboarding)
├─ utils/         # Supabase & Clerk integration helpers
public/           # Static assets (images, logos)
```

**Start exploring**

1. `src/pages/` — see how pages map to features
2. `src/components/` — shared UI building blocks
3. `src/utils/supabase.js` & `src/utils/clerk.js` — backend wiring
4. `src/api/` & `src/data/` — mock flows and test data

---

## Key files & where to find features

- **Job listings / search**

  - `src/pages/JobsList.jsx` — list view & filters
  - `src/components/JobCard.jsx` — job card UI
  - `src/pages/JobDetails.jsx` — full job description & apply form

- **Applications**

  - `src/pages/ApplicationDashboard.jsx` — candidate dashboard
  - `src/api/applications.js` — application functions (mock or supabase)

- **Employer dashboard**

  - `src/pages/PostJob.jsx` — post job form
  - `src/pages/EmployerJobs.jsx` — manage posted jobs

- **Auth & routing**

  - `src/utils/clerk.js` — Clerk client setup
  - `src/components/ProtectedRoute.jsx` — route protection

- **Supabase integration**

  - `src/utils/supabase.js` — supabase client and helpers
  - `src/api/` — CRUD wrappers & mock implementations

- **Hooks**

  - `src/hooks/useFetch.jsx` — central data fetching example
  - `src/hooks/useAuth.jsx` — optional Clerk hook wrappers

---

## Architecture & notes

- Frontend-first architecture: UI components are isolated and communicate via props and hooks.
- `src/api/` contains both mock implementations and real Supabase calls — swap easily for production.
- Keep environment variables secure. Do not commit `.env` to source control.
- For production, ensure Supabase RLS policies are correctly configured (least privilege) and Clerk webhooks/origins are set.

---

## Developing & common tasks

**Add a new page**

1. Create `src/pages/MyPage.jsx` with UI logic.
2. Add route in the router file (`src/main.jsx` or `src/App.jsx`).
3. Add tests / story if applicable.

**Add API helper**

- Put new file under `src/api/` and use it from pages or hooks.

**Useful commands**

- `npm run dev` — start dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production build
- `npm run lint` — run ESLint (if configured)

---

## Troubleshooting & gotchas

- **Auth not working**: check `VITE_CLERK_PUBLISHABLE_KEY` and allowed origins in Clerk dashboard.
- **Supabase permission errors**: Row Level Security (RLS) policies may block queries. Use Supabase SQL editor to test queries and adjust policies for production.
- **File uploads not showing**: verify Supabase storage bucket permissions and saved paths.
- **Env variables not loaded**: use `VITE_` prefix for env variables used by browser code.
- **SPA routing 404 after refresh**: configure your deployment (Vercel, Netlify, etc.) to serve `index.html` on unknown routes (single page app fallback).

---

## Testing & mock data

- Use `src/data/` mock files (e.g. `mockJobs.js`, `companies.js`) for visually testing UI components.
- Mock API endpoints in `src/api/` to simulate responses without external services.
- Consider adding unit tests with Jest + React Testing Library for critical components and hooks.

---

## Contributing

1. Fork the repository
2. Create a branch: `feature/your-feature`
3. Implement changes with clear commits
4. Open a PR with a description and screenshots if UI changes
5. Keep code style consistent and add tests when possible

Please open issues for bug reports and feature requests.

---

## License

This project is licensed under the **MIT License**. See `LICENSE` for details.

---

## File map quick cheat (one-liner guide to explore)

- Start at `src/pages` to see main features map to UI pages.
- Check `src/components` for shared UI controls.
- Inspect `src/utils/supabase.js` & `src/utils/clerk.js` for backend wiring.
- Use `src/api/` and `src/data/` for mock flows.

---

## Example: Where is the apply flow?

1. `src/pages/JobDetails.jsx` contains the apply button & form.
2. The form submits to `src/api/applications.js` (mock or supabase implementation).
3. Application status is visible in `src/pages/ApplicationDashboard.jsx`.

---

## Short Arabic summary / ملخص بالعربي

مشروع **Job Portal** هو تطبيق ويب كامل لتوصيل الباحثين عن عمل بأصحاب الشركات. يحتوي على:

- عرض وفرز الوظائف وتفاصيل كل وظيفة
- تقديم ومتابعة الطلبات من لوحة المتقدم
- لوحة خاصة لأصحاب العمل لنشر وإدارة الوظائف واستقبال الطلبات
- تسجيل دخول وتأمين الجلسات عبر Clerk
- تخزين وبيانات في Supabase (قاعدة بيانات، ملفات، وRealtime)
