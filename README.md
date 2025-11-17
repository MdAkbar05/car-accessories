# Project Name: E-commerce Platform | Online Shopping.

### Figma Design: https://www.figma.com/design/WGHre0yNFZD5OOyLoRGhoY/Tools-121---UX?node-id=110-103

# 🚗 Car Accessories E-commerce Platform

A full-featured **Next.js 15** e-commerce web app built for selling and managing car accessories.  
It uses **Server Components by default**, **Prisma + PostgreSQL** for database, **NextAuth** for authentication, and **Zustand** for state management.  
This project focuses on clean server-first architecture with optimized rendering and API routes.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend Framework | [Next.js 15 (App Router)](https://nextjs.org/docs/app) |
| Language | JavaScript (ESNext) |
| Styling | Tailwind CSS |
| Database ORM | [Prisma ORM](https://www.prisma.io/) |
| Database | PostgreSQL |
| Auth | [NextAuth.js](https://next-auth.js.org/) |
| State Management | [Zustand](https://github.com/pmndrs/zustand) |
| Deployment | Vercel |
| Image Hosting | Cloudinary |

---

## ⚙️ Features

### 🛒 Product & Category Management
- Product listing with **server-side fetching** from Prisma.
- Category-based product filtering using searchParams.
- Product seeding from `prisma/seed-products.js`.
- Supports multiple product images and long descriptions.

### ❤️ Wishlist System
- Stores user’s wishlist in a single JSON field.
- Supports **add/remove** operations with server validation.
- Each wishlist tied to a specific user via `userId`.
- Wishlist page uses **Server Component** to display items in a table with “Visit” and “Delete” actions.

### 🛍️ Cart System
- Managed fully with **Zustand** store.
- Features:
  - Add/Remove/Update quantity
  - Total item count
  - Real-time total price
- Supports **intercepted route modal** for cart preview (`/cart` modal).

### 💳 Checkout Flow
- Checkout form pre-fills user data from `NextAuth` session.
- Saves order details to `Order` table.
- Each order includes product, quantity, price, and user details.
- “Place Order” button confirms purchase and redirects to success page.

### 📦 Order Management
- Each order linked with `userId`.
- Fetch all user orders via `/api/orders`.
- Admin can manage orders via `GET`, `POST`, `PUT`, `DELETE`.

### 🔐 Authentication
- Implemented using `NextAuth.js`.
- Supports session-based auth.
- `getServerSession(authOptions)` used in protected routes and server components.

---

## 🚗 Key Features of Car Accessories BD

- 🔋 Wide range of high-quality car batteries  
- 🛠️ Premium car accessories and spare parts  
- 🚚 Fast delivery across Bangladesh  
- 📦 Easy ordering system with secure checkout  
- 🔍 Smart product filtering and search  
- ⭐ Customer reviews and rating system  
- 💳 Multiple payment options  
- 📱 Fully responsive mobile-friendly design  
- 🔧 Tools, electronics, interior & exterior accessories  
- 🛡️ Reliable products from trusted brands  
- 📝 Detailed product descriptions and specifications  
- 🎯 User-friendly UI for smooth shopping experience  
- 🏷️ Regular offers, discounts, and special deals  
- 🛒 Quick add-to-cart and seamless checkout flow




