# Rawipon Ponsarutwanit — Personal Web Portfolio

A personal portfolio website built to showcase my experience, projects, and technical skills. Designed as a digital resume for recruiters, collaborators, and anyone curious about my work.

**Live sections:** Hero · About · Education · Skills · Experience · Projects

---

## About Me

**Rawipon Ponsarutwanit** (Garfieldlnwza) — Full-Stack Developer & CS Student based in Bangkok, Thailand.

- Computer Science student at **Kasetsart University** (B.Sc., 2023–Present, GPAX 3.20)
- **ServiceNow Associate Consultant Intern** at **Fujitsu (Thailand) Co., Ltd.** — focused on ITSM, ITIL frameworks, and CMDB configuration
- **Full-Stack Developer Intern** at the **Office of Computer Service, Kasetsart University** — built full-stack systems used by thousands of students (KU Activity & Club, SAKU, OAKU)

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion, Magic UI |
| UI Components | shadcn/ui |
| Icons | Lucide React, React Icons |
| i18n | Custom context-based (EN/TH) |
| Theme | next-themes (dark/light) |
| Containerization | Docker |

---

## Features

- **Bilingual (EN/TH)** — full internationalization with a language toggle
- **Dark / Light mode** — persisted preference via next-themes
- **Responsive** — mobile-first layout that scales up cleanly to desktop
- **Interactive UI** — animated dock, orbiting circles, pixelated canvas
- **Experience cards** — clean card-based layout for internship highlights and academic work

---

## Experience Highlights

### ServiceNow Associate Consultant Intern · Fujitsu (Thailand) Co., Ltd.
- ITSM process configuration (Incident, Problem, Change Management)
- CMDB build-out and asset management
- ITIL v4 framework implementation for SLA tracking and service catalog

### Full-Stack Developer Intern · Office of Computer Service, KU (Apr–Jul 2025)
- **KU Activity & Club** — central hub for student activities (Next.js, TypeScript, Express)
- **SAKU System** — club management features, data modification, image uploads
- **OAKU System** — project management system with ER modeling & API provisioning

### Computer Science Student · Kasetsart University (2023–Present)
- Software Engineering, Algorithms & Data Structures, Cloud Computing / DevOps, AI

---

## Projects

| Project | Stack | Description |
|---|---|---|
| Kasetfair Management | Go Fiber, Next.js, PostgreSQL | Booth management with randomized allocation algorithm |
| CheckBill | Next.js, React | Bill-splitting web app with real-time-like UX |
| Teammate | Flutter, Firebase | Mobile app for task management and team collaboration |
| University Online Request | Java (OOP, RBAC) | Desktop app for processing user requests |

---

## Getting Started

### Prerequisites
- Node.js v18+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Docker (optional)

```bash
# Development
docker build -f Dockerfile.dev -t portfolio-dev .
docker run -p 3000:3000 portfolio-dev

# Production
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Project Structure

```
src/
├── app/               # Next.js App Router (layout, page)
├── components/
│   ├── home/          # Page sections (hero, about, education, skills, experience, projects)
│   ├── layouts/       # Navbar
│   └── ui/            # Reusable UI primitives (card, badge, dock, etc.)
├── constants/
│   ├── experience.ts  # Experience data (Fujitsu, OCS, KU CS)
│   ├── projects.ts    # Project data
│   ├── educations.ts  # Education data
│   ├── skills.tsx     # Skills data with icons
│   └── i18n.ts        # EN/TH translations
└── styles/
    └── globals.css
public/                # Static assets (logos, images, CV/portfolio PDFs)
```

---

For a full list of technical skills see [skill.md](./skill.md).
