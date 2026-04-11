<div align="center">

# ✍️ BlogVibes

### *A Dynamic Blogging Platform with Real-Time Content Management*

**A full-stack blogging application where users can create, edit, delete, and share blog posts with image uploads and JWT-based authentication.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)

</div>

---

## 📖 Overview

**BlogVibes** is a full-stack blogging platform built with **Node.js**, **Express**, **MongoDB**, and **EJS templating**. It provides a clean, intuitive interface for users to register, authenticate, and manage their blog posts. The application supports image uploads via **Multer**, secure session handling with **JWT cookies**, and user-specific post management.

Whether you're a casual writer or an avid blogger, BlogVibes delivers a seamless experience for sharing your thoughts and ideas with the world.

---

## ✨ Key Features

### 📝 Blog Management
- **Create Posts** — Rich blog creation with title, body, and cover image upload
- **View Posts** — Browse all blogs on a clean, responsive home feed
- **Edit & Update** — Modify existing posts anytime
- **Delete Posts** — Remove unwanted blogs with a single click
- **Comments System** — Engage with blogs through a threaded comments model

### 🔐 Authentication & Security
- **User Registration** — Secure signup with email & password
- **JWT Authentication** — Stateless token-based auth via HttpOnly cookies
- **Protected Routes** — Middleware-enforced access control
- **Password Hashing** — Secure credential storage

### 🖼️ Media & UX
- **Image Uploads** — Cover images powered by Multer middleware
- **Server-Side Rendering** — Fast initial page loads with EJS templates
- **Partials** — DRY layout with reusable header, footer, and navbar components
- **Static Asset Serving** — Public uploads accessible via `/public` route

---

## 🛠️ Tech Stack

### **Backend**
| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **MongoDB + Mongoose** | NoSQL database & ODM |
| **JWT (jsonwebtoken)** | Authentication tokens |
| **Cookie Parser** | Cookie-based session handling |
| **Multer** | File upload middleware |
| **Express Session** | Session management |

### **Frontend**
| Technology | Purpose |
|---|---|
| **EJS** | Server-side templating |
| **HTML5 & CSS3** | Markup and styling |
| **Bootstrap** (via CDN) | Responsive UI components |

### **Dependencies**
```json
{
  "cookie-parser": "^1.4.6",
  "ejs": "^3.1.10",
  "express": "^4.19.2",
  "express-session": "^1.18.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.5.4",
  "multer": "^1.4.5-lts.1",
  "path": "^0.12.7"
}
```

---

## 🏗️ Architecture

BlogVibes follows a classic **MVC architecture** with clear separation of concerns between routes, models, views, and middleware.

```
┌──────────────────────────────────────────────────────────┐
│                  CLIENT (Browser)                        │
│         Home │ Blog Detail │ Sign In │ Sign Up           │
└───────────────────────┬──────────────────────────────────┘
                        │ HTTP Requests
┌───────────────────────▼──────────────────────────────────┐
│              Express.js Application                     │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Middleware: Cookie Parser │ Auth │ Multer (upload)│  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │                    ROUTES                          │  │
│  │  /         → Home (list all blogs)                │  │
│  │  /user/*   → Register, Login, Logout              │  │
│  │  /blog/*   → Create, View, Edit, Delete blogs     │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │                   VIEWS (EJS)                      │  │
│  │  home │ blog │ addBlog │ signin │ signup           │  │
│  │  partials: header, footer, navbar                  │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │                    MODELS                          │  │
│  │  User │ Blog │ Comment                             │  │
│  └────────────────────────────────────────────────────┘  │
└───────────────────────┬──────────────────────────────────┘
                        │
                ┌───────▼───────┐
                │   MongoDB     │
                │  (Mongoose)   │
                │               │
                │ • users       │
                │ • blogs       │
                │ • comments    │
                └───────────────┘
```

---

## 📁 Project Structure

```
BlogVibes/
├── index.js                      # App entry point
├── package.json
│
├── models/
│   ├── user.js                   # User schema (email, password, role)
│   ├── blog.js                   # Blog schema (title, body, coverImage, author)
│   └── comments.js               # Comment schema (content, blogId, userId)
│
├── routes/
│   ├── user.js                   # Auth routes (register, login, logout)
│   └── blog.js                   # Blog CRUD routes
│
├── middlewares/
│   └── authentication.js         # JWT cookie verification middleware
│
├── services/
│   └── authentication.js         # Token generation & verification logic
│
├── views/
│   ├── home.ejs                  # Landing page with blog feed
│   ├── blog.ejs                  # Individual blog view with comments
│   ├── addBlog.ejs               # Create blog form
│   ├── signin.ejs                # Login page
│   ├── signup.ejs                # Registration page
│   └── partials/                 # Reusable header, footer, navbar
│
├── public/
│   └── uploads/                  # User-uploaded blog cover images
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Irtiza1/BlogVibes.git
cd BlogVibes
```

**2. Install dependencies**
```bash
npm install
```

**3. Start MongoDB**

Make sure MongoDB is running locally on `mongodb://localhost:27017`. Alternatively, update the connection string in `index.js` to use your MongoDB Atlas URI.

**4. Run the application**
```bash
npm run dev
```

**5. Access the app**

Open your browser and navigate to:
```
http://localhost:8000
```

---

## 🔌 Routes Overview

### **User Routes** (`/user`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user/signup` | Display registration page |
| POST | `/user/signup` | Register a new user |
| GET | `/user/signin` | Display login page |
| POST | `/user/signin` | Authenticate user & set JWT cookie |
| GET | `/user/logout` | Clear token and logout |

### **Blog Routes** (`/blog`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/blog/add-new` | Display "create blog" form |
| POST | `/blog/` | Create a new blog with cover image |
| GET | `/blog/:id` | View individual blog with comments |
| POST | `/blog/comment/:blogId` | Add a comment to a blog |

---

## 🔐 Security Features

- **🔑 JWT-Based Authentication** — Stateless tokens stored in HttpOnly cookies
- **🛡️ Route Protection** — Middleware ensures only authenticated users can create/edit posts
- **🍪 Secure Cookies** — HttpOnly flag prevents XSS attacks
- **📂 File Upload Validation** — Multer configured with safe upload paths
- **🔒 Password Handling** — Secure credential storage on signup

---

## 🚀 Future Enhancements

- [ ] Rich text editor integration (Quill or TinyMCE)
- [ ] User profile pages with bio and avatar
- [ ] Like/bookmark system
- [ ] Tag and category filtering
- [ ] Blog search functionality
- [ ] Email verification on signup
- [ ] Admin dashboard for moderation
- [ ] Deployment to cloud (Heroku, Vercel, Render)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**Muhammad Irtiza**
Full Stack Developer | FAST NUCES
🔗 [GitHub](https://github.com/Irtiza1) · [LinkedIn](https://www.linkedin.com/in/muhammadirtiza/)

---

<div align="center">

### ⭐ If you found this project useful, please give it a star!

**Made with ✍️ for writers and storytellers**

[🔝 Back to Top](#-blogvibes)

</div>
