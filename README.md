# 🏠 RentNest Frontend

## Find & List Rental Properties with Ease

RentNest is a modern, responsive rental marketplace built with **Next.js**. It provides an intuitive platform where tenants can discover rental properties, submit rental requests, complete payments, and manage their rental journey. Landlords can create and manage property listings, handle rental requests, and track earnings. Admins can monitor the entire platform through a powerful dashboard.

This project is a **frontend-only application** consuming a custom backend API developed separately.

---

# 🚀 Live Demo

🔗 Frontend Live URL: `Add your deployed URL`

🔗 Backend API URL: `Add your backend URL`

---

# 📌 Project Overview

RentNest connects property owners and tenants through a seamless rental experience.

### Main Features

- 🏠 Browse available rental properties
- 🔎 Advanced property search and filtering
- 📄 Property details with gallery and landlord information
- 🔐 Authentication with role-based access
- 🧑‍💼 Tenant dashboard
- 🏘️ Landlord dashboard
- 👨‍💻 Admin dashboard
- 💳 Secure payment integration
- ⭐ Rental reviews
- 📊 Responsive and modern UI

---

# 🛠️ Technologies Used

## Frontend

- **Next.js (App Router)**
- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **React Hook Form**
- **Zod Validation**
- **Lucide React Icons**
- **Sonner Toast Notifications**
- **Next Image Optimization**

## Backend API

Backend is powered by:

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

(API is consumed from previous backend assignment)

---

# 👥 User Roles & Permissions

## 🏠 Tenant

Tenants can:

- Register and login
- Browse rental properties
- Search and filter properties
- View property details
- Send rental requests
- Track request status
- Make payments after approval
- View payment history
- Submit reviews after completing rental

---

## 🏘️ Landlord

Landlords can:

- Create property listings
- Update property information
- Remove properties
- Upload property images
- Manage availability
- View rental requests
- Approve or reject requests
- Track rental earnings

---

## 👨‍💻 Admin

Admins can:

- View platform statistics
- Manage users
- Ban/unban users
- Monitor properties
- Moderate rental requests

---

# 📂 Project Structure

rentnest-frontend
│
├── app
│ ├── (public)
│ │ ├── page.tsx
│ │ ├── properties
│ │ └── properties/[id]
│ │
│ ├── auth
│ │ ├── login
│ │ └── register
│ │
│ ├── dashboard
│ │ ├── tenant
│ │ ├── landlord
│ │ └── admin
│ │
│ ├── payment
│ │ ├── success
│ │ └── cancel
│ │
│ ├── error.tsx
│ └── loading.tsx
│
├── components
│ ├── ui
│ ├── shared
│ ├── property
│ └── dashboard
│
├── hooks
│
├── lib
│ ├── api.ts
│ ├── utils.ts
│ └── validations.ts
│
├── types
│
├── middleware.ts
│
├── public
│
├── package.json
└── README.md

---

# 🌐 Application Routes

## Public Routes

| Route              | Description                       |
| ------------------ | --------------------------------- |
| `/`                | Homepage with featured properties |
| `/properties`      | Browse and filter properties      |
| `/properties/[id]` | Property details page             |
| `/auth/register`   | User registration                 |
| `/auth/login`      | User login                        |

---

## Tenant Routes

| Route                                 | Description              |
| ------------------------------------- | ------------------------ |
| `/dashboard/tenant`                   | Tenant overview          |
| `/dashboard/tenant/requests/[id]/pay` | Payment page             |
| `/payment/success`                    | Payment success          |
| `/payment/cancel`                     | Payment failed/cancelled |

---

## Landlord Routes

| Route                                | Description            |
| ------------------------------------ | ---------------------- |
| `/dashboard/landlord`                | Landlord dashboard     |
| `/dashboard/landlord/properties/new` | Add new property       |
| `/dashboard/landlord/requests`       | Manage rental requests |

---

## Admin Routes

| Route                    | Description     |
| ------------------------ | --------------- |
| `/dashboard/admin`       | Admin dashboard |
| `/dashboard/admin/users` | User management |

---
