# 🛒 E-Dokan – Modern E-Commerce Platform

**E-Dokan** is a modern, responsive e-commerce platform built with **Next.js 16 (App Router)** and **Tailwind CSS**.  
Users can browse products, register/login, manage their accounts, and perform CRUD operations if authorized.  
It includes secure authentication, protected routes, and a smooth loading spinner for improved user experience.

---

## 🌐 Live Demo

🔗 [(https://e-dokan-1.vercel.app/)]

---

## 🎯 Key Features

- User registration and login with protected routes  
- Browse and view products with detailed product pages  
- Add, edit, and delete products (Admin only)  
- Password reset / Forgot password functionality  
- Smooth loading spinner for page transitions  
- Fully responsive design for mobile, tablet, and desktop  

---

## 🖼️ Screenshots

<p align="center">
  <img src="https://i.ibb.co/XfqYYxcZ/Screenshot-2025-12-31-124609.png" width="48%" />
  <img src="https://i.ibb.co/DDNMy27N/Screenshot-2025-12-31-124634.png" width="48%" />
</p>
<p align="center">
  <img src="https://i.ibb.co/S4xnLPv0/Screenshot-2025-12-31-124740.png" width="48%" />
</p>


## 🛠️ Technologies Used

- **Frontend:** Next.js 16 (App Router), Tailwind CSS  
- **Authentication & State:** NextAuth.js / Firebase (if used), React Hooks  
- **UI Enhancements:** Loading spinners, responsive layout, reusable components  
- **Backend / Database:** (Specify if using Firebase, MongoDB, etc.)  

---

## 📋 Route Summary

| Route | Description |
|-------|-------------|
| `/` | Home page – main landing page |
| `/login` | Login page for existing users |
| `/register` | Registration page for new users |
| `/forget-pass` | Password reset / forgot password page |
| `/products` | Product listing page – shows all available products |
| `/products/[id]` | Product details page – shows details of a specific product |
| `/addProductPage` | Add new product – admin only |
| `/manageProducts` | Manage all products – admin can edit/delete/view |
| `/_not-found` | 404 page – displayed when a route does not exist |

---

## 💾 Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/TawhidulIslamRefat/E-Dokan.git
cd E-Dokan

# Install dependencies
npm install

# Start development server
npm run dev
