<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=30&duration=3000&pause=1000&color=075234&center=true&vCenter=true&width=500&lines=KeenKeeper+%F0%9F%93%96;Your+Friendship+Digital+Diary" alt="KeenKeeper Typing SVG" />

<br />

**KeenKeeper** is a beautifully designed friendship tracker and digital diary that helps you stay intentional about the people who matter most. Log every call, text, and video chat — and never let a meaningful connection slip through the cracks.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Recharts](https://img.shields.io/badge/Recharts-3.x-22B5BF?style=for-the-badge)](https://recharts.org/)

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [License](#-license)

---

## 📖 About the Project

In a world full of distractions, it's easy to lose touch with the people we care about. **KeenKeeper** solves this by giving you a personal, journal-like space to track your social life. Add friends to your circle, log your interactions (calls, texts, video chats), browse a full timeline of your social history, and even visualize your friendship habits through beautiful analytics.

> *"Keep your connections keen — with KeenKeeper."*

---

## ✨ Key Features

### 1. 👥 Friends List Management
Maintain a curated list of your closest connections. Each friend has their own dedicated profile page where you can view your shared history and log new interactions — all in one place.

### 2. 📅 Interaction Timeline
Every call, text, and video chat is logged to a global timeline. Powerful filtering (by interaction type), real-time search by name, and sort controls (newest/oldest) let you navigate your social history effortlessly. Empty states are handled gracefully with Lottie animations.

### 3. 📊 Friendship Analytics (Stats)
Visualize your communication habits with a dynamic, animated Donut/Pie chart powered by **Recharts**. Instantly see whether you connect more through calls, texts, or video — giving you actionable insight into your social patterns.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI v5](https://daisyui.com/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Animations** | [@lottiefiles/dotlottie-react](https://lottiefiles.com/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **State Management** | React Context API |
| **Language** | JavaScript (JSX) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18 or later) and **npm** installed.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tonmoytr/keenkeeper.git
   cd keenkeeper
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser at:**

   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
keenkeeper/
├── public/
│   └── assets/
│       └── animation/        # Lottie animation files
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── friends/      # Friend profile pages (dynamic routing)
│   │   │   ├── stats/        # Friendship analytics page
│   │   │   └── timeline/     # Interaction timeline page
│   │   ├── components/
│   │   │   ├── homepage/     # Banner & FriendsList components
│   │   │   ├── shared/       # Shared/reusable components (Navbar, etc.)
│   │   │   └── ui/           # Generic UI primitives
│   │   ├── layout.js         # Root layout with metadata
│   │   └── page.js           # Homepage entry point
│   └── lib/
│       └── context/
│           └── TimelineContext.js  # Global state for interaction logs
├── package.json
└── next.config.mjs
```

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

<div align="center">

Made with ❤️ by **Tonmoy**

</div>
