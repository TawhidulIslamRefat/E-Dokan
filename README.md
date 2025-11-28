# E-Dokan

## Short Project Description
E-Dokan is a modern e-commerce platform built with **Next.js 16 (App Router)** and **Tailwind CSS**.  
Users can browse products, register/login, manage their account, and perform CRUD operations if authorized.  
It includes features like authentication, protected routes, and a loading spinner during page navigation for a better user experience.

---

## Setup & Installation Instructions

### 1. Clone the repository
```bash
git clone https://github.com/TawhidulIslamRefat/E-Dokan.git
cd E-Dokan

## Route Summary

| Route | Description |
|-------|-------------|
| `/` | Home page – main landing page of the application |
| `/login` | Login page for existing users |
| `/register` | Registration page for new users |
| `/forget-pass` | Password reset / forgot password page |
| `/products` | Product listing page – shows all available products |
| `/products/[id]` | Product details page – shows details of a specific product based on its ID |
| `/addProductPage` | Add new product page – accessible only by admin users |
| `/manageProducts` | Manage all products – admin can edit, delete, or view products |
| `/_not-found` | 404 page – displayed when a route does not exist |
