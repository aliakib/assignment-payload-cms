# Restroworks Assignment – Round 2  
Next.js + PayloadCMS (Blank Template)

## Overview

This project is a CMS-powered website prototype built using **Next.js (App Router)** and **PayloadCMS**, created from the **Payload blank template**.  
It demonstrates CMS modeling, frontend integration, SEO best practices, cloud media handling, and production deployment.

The project fulfills the requirements outlined in the Restroworks Round 2 assignment.

---

## Tech Stack

### Frontend
- Next.js 14+ (App Router)
- React
- TypeScript
- Tailwind CSS
- next/image for image optimization
- SSR / SSG where applicable

### Backend (CMS)
- PayloadCMS (v3)
- MongoDB
- Payload Blank Template

### Media & Storage
- @payloadcms/plugin-cloud-storage
- @payloadcms/storage-vercel-blob
- Vercel Blob Storage

### Deployment
- Vercel (Frontend + Payload CMS)

---

## Pages Implemented

### Homepage
- Modular CMS-driven layout
- Reusable blocks:
  - Hero
  - Features
  - Testimonials
  - Call To Action (CTA)
- Fully responsive design

### Contact Page
- Contact form connected to PayloadCMS
- Form submissions stored in CMS

---

## CMS Modeling

The CMS is designed for real-world content editing and scalability.

### Collections
- **Pages**
  - Modular block-based layout
  - SEO fields (title, description)
  - Localization support
- **Contact Submissions**
  - Stores contact form entries
- **Media**
  - Handles image uploads via Vercel Blob Storage

### Blocks
- Hero
- Feature List
- Testimonials
- CTA

All blocks are reusable and configurable from the Payload Admin UI.

---

## Localization (i18n)

- Supports English and one additional language
- Selective block-level translations
- Frontend language switcher
- Localized content fetched dynamically from PayloadCMS

---

## SEO & Performance

- SEO metadata (title & description) managed from CMS
- sitemap.xml and robots.txt configured
- Image optimization using next/image
- SSR / SSG used where appropriate

---

## Image Uploads (Vercel Blob)

Image uploads are handled using **Vercel Blob Storage**, integrated with PayloadCMS via the cloud storage plugin.

### Benefits
- No local file system dependency
- Optimized for Vercel deployments
- Secure and scalable media handling

---

## Environment Variables

Create a `.env` file with the following values:

```env
PAYLOAD_SECRET=your-secret-key
MONGODB_URI=your-mongodb-uri

BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
NEXT_PUBLIC_SERVER_URL=https://your-vercel-app.vercel.app