# Vizinhos.com

#### 📌 Technical Overview

Vizinhos.com is a **white-label platform** for creating professional websites focused on small business owners.

From a technical standpoint, the project was designed from day one as a **multi-tenant application**, where multiple client websites are served from a **single frontend** using dynamic routing, reusable templates, and data fully decoupled from the presentation layer.

The project is currently in the **MVP development phase**, with a strong emphasis on structure, scalability, and solid architectural decisions.
***

## 🧱 Overall Architecture (White-label Frontend)

The entire application runs under a single domain `(vizinhos.com)` and dynamically serves client websites through routes such as:

```
vizinhos.com/:companyName
```

Each client has:

* a visual template selected natively within the platform
* its own data (content, institutional information, configuration, etc.)

This approach enables:

* centralized maintenance
* lower initial operational cost
* future scalability
* consistent visual standards across clients

The solution follows a **multi-tenant frontend pattern**, with template-based rendering and data decoupled from layout.
***

## 🗂️ Template System

Templates are **first-class internal components**, rendered dynamically based on structured JSON data.

Conceptual flow:

```
Template JSON → TSX Rendering → Client Page
```

This separation between data and layout allows:

* template reuse
* customization without code duplication
* evolution of the white-label system without breaking existing clients
***

## 🌐 Routing System

Detailed routing documentation is available at:

[👉 Project Route Map](https://github.com/AkoruuDev/vizinhos/edit/main/docs/README/en/routes.md)

### Overview

**Platform routes**

```
/
 /aboutUs
 /contact
 /plans
 /login
```

The `/login` route centralizes:

* sign up
* login
* password recovery

> all handled through a single flow with state-based transitions.

**Client routes**

```
/:companyName
/:companyName/about
/:companyName/contact
```

**Administrative routes**

Internal platform administration:

```
vizinhos.com/admin
```

Client administration panel:

```
/:companyName/admin
```

### Planned Routes (Post-MVP)

Beyond the initial MVP routes, the project already accounts for future expansion of client-facing pages, maintaining the same multi-tenant pattern.

Planned routes include:

```
/:companyName/links
```

* A quick-links page designed for social media bios (similar to Linktree).

```
/:companyName/lp/:lpId
```

* Custom landing pages created by the client, enabling marketing campaigns and conversion-focused pages.
***

## 🔐 Authentication & Security (Planned)

The authentication system is being designed with a focus on **security**, **account recovery**, and **long-term user access reliability**.

Planned features:

* Email & password authentication
* Google OAuth
* Multi-step email verification
* Additional confirmations for sensitive actions (payments, plan changes, critical data updates)
* A future account recovery system not exclusively dependent on email or phone

> These decisions are driven by real-world issues related to account access loss observed in other platforms.
***

## 💳 Payments & Subscriptions

The payment system will be implemented starting from the MVP in a simplified form, allowing clients to manage their own subscription payments.

**Chosen payment gateway:**
Mercado Pago

Initial goals:

* recurring plan billing
* basic access control based on subscribed plan

More advanced features (e-commerce, custom checkout, etc.) are planned for later phases.
***

## 🧠 Backend (Planned)

**The backend has not been implemented yet.**

Planned architecture:

* PostgreSQL
* Prisma ORM

Client data (templates, content, configuration) will be stored in a structured format, allowing the frontend to render pages dynamically based on JSON data.
***

## 🎨 Styling

Styling is handled using **TailwindCSS**, aiming for:

* fast development
* visual consistency across templates
* easy maintenance and scalability of the design system
***

## 🧩 Global State Management

During the initial MVP phase, the project relies primarily on **local state**.

With the introduction of authentication and persistent data, a global state solution is planned, starting with:

* React Context API

This will centralize state such as:

* authenticated user
* active company
* subscribed plan
* permissions
* selected template
***

## 🗂️ Folder Structure

**Current project structure (evolving):**

```
src/
 ├── assets/
 ├── components/
 ├── layouts/
 ├── services/
 ├── templates/
 ├── pages/
 │   ├── client/
 │   └── platform/
 ├── router/
 │   └── AppRouter.tsx
 ├── App.tsx
 ├── index.css
 └── main.tsx
```

Folders such as `components`, `layouts`, and `services` were created from the beginning to ensure organization and scalability, even if they are initially empty.
***

## 🚧 Current MVP Status

At this stage:

* Project bootstrapped with React + Vite
* TSX files in use, with progressive typing as the project evolves
* Routing system under active development
* Base template structure defined

### 🔮 Next Technical Steps

* Finalize frontend MVP
* Complete authentication, backend, and payment planning
* Implement initial authentication flow
* Build client admin dashboard
* Integrate backend
* Implement recurring billing
* Refine template system
***

## ▶️ Running the Project Locally

```
npm install
npm run dev
```
