# FluffyShop

**E-commerce platform for pet adoption and pet products, built on a headless CMS architecture.**

FluffyShop lets users browse and search animals available for adoption alongside toys, food, and accessories — all managed through a Strapi backend so non-technical admins can add/edit products without touching code.

---

## 🚀 What it does

- Browse animals and pet products (toys, food, accessories) with category filtering and live search
- User authentication via Clerk (sign in/sign up)
- Content (products, categories, images) fully managed through a Strapi admin panel — no hardcoded data
- Image hosting via Cloudinary

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend / CMS | Strapi 5 (headless CMS) |
| Auth | Clerk |
| Database | PostgreSQL (production), SQLite (local dev) |
| Media | Cloudinary |
| Deployment | Vercel (frontend), Render (Strapi backend) |

---

## 🏗️ Architecture

```
fluffyShop/
├── e_commerce/          # Next.js frontend — storefront, auth, product browsing
└── ecommerce-strapi/    # Strapi backend — content modeling, admin panel, REST API
```

The frontend is fully decoupled from the backend: Strapi exposes a REST API that the Next.js app consumes, so the product catalog, categories, and images can all be updated from the Strapi admin panel without a frontend deploy.

---

## 📄 License

**All rights reserved.**

This project and its source code are proprietary. No part of this repository may be copied, modified, distributed, or used in any form without explicit written permission from the author.

© Safwen Ben Mabrouk

---

## 📬 Contact

**Safwen Ben Mabrouk** — Full-Stack Software Engineer
- Email: safwenbenmabrouk@gmail.com
- LinkedIn: [linkedin.com/in/safwen-ben-mabrouk](https://linkedin.com/in/safwen-ben-mabrouk)
- GitHub: [@Safwen-bm](https://github.com/Safwen-bm)