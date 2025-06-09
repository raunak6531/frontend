# TechLearn Solutions - React Frontend

A modern React + Tailwind CSS frontend for the TechLearn learning platform, featuring authentication, dashboard, and an interactive VS Code-like code editor.

## 🚀 Features

### Authentication System
- **Sign Up/Sign In**: Secure authentication with form validation
- **Protected Routes**: Route protection with React Router
- **Session Management**: Persistent authentication state
- **Responsive Design**: Mobile-first responsive design

### Dashboard
- **Dynamic Content**: Real-time data from backend API
- **Progress Tracking**: Visual progress indicators and statistics
- **Interactive Metrics**: Animated cards with hover effects
- **Learning Goals**: Dynamic goal tracking and achievements

### Code Compiler
- **VS Code-like Interface**: Professional code editor with CodeMirror
- **Multi-language Support**: HTML, CSS, JavaScript with syntax highlighting
- **Live Preview**: Real-time code preview
- **Exercise Navigation**: Seamless exercise switching

## 🛠️ Tech Stack

- **React 19**: Modern React with hooks and context
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **CodeMirror**: Professional code editor
- **Vite**: Fast build tool and dev server

## 📁 Project Structure

```
techlearn-frontend/
├── src/
│   ├── components/
│   │   ├── Auth/              # Authentication components
│   │   ├── Dashboard/         # Dashboard components
│   │   ├── Compiler/          # Code editor components
│   │   └── ProtectedRoute.jsx # Route protection
│   ├── context/
│   │   └── AuthContext.jsx    # Authentication context
│   ├── styles/
│   │   └── dashboard.css      # Dashboard-specific styles
│   ├── index.css              # Global styles and Tailwind
│   ├── App.jsx                # Main app component
│   └── main.jsx               # App entry point
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd techlearn-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🌐 API Integration

The frontend communicates with the Flask backend through these endpoints:

### Authentication
- `POST /signup` - Create new user account
- `POST /login` - User authentication
- `GET /session-status` - Check authentication status
- `POST /logout` - End user session

### Exercises & Progress
- `GET /exercises` - Fetch all available exercises
- `GET /exercise/:id` - Get specific exercise details
- `GET /progress` - Get user's exercise progress
- `POST /progress` - Save exercise progress
- `GET /statistics` - Get user statistics

## 🎨 Design System

### Color Scheme
- **Background**: Dark purple-blue gradient (`#0f0f23`, `#1a1a2e`, `#16213e`)
- **Cards**: Glassmorphism with `rgba(31, 41, 55, 0.8)` background
- **Accent**: Tech blue (`#070054`) for highlights
- **Text**: White primary, gray secondary

### Components
- **Responsive Design**: Mobile-first approach
- **Glassmorphism**: Modern translucent design elements
- **Smooth Animations**: Micro-interactions and transitions
- **Consistent Typography**: Inter font family

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Dependencies
- **React**: UI library
- **React Router DOM**: Routing
- **Tailwind CSS**: Styling
- **CodeMirror**: Code editor
- **Vite**: Build tool

## 🚀 Deployment

The app is built as a static SPA and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is part of TechLearn Solutions.