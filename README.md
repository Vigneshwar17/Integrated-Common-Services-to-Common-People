# Integrated Common Services to People

A full-stack web application providing centralized access to government, health, transport, and financial services.

## Team Shamrocks
- **Objective**: Convert static HTML/CSS/JS project into a complete full-stack application
- **Tech Stack**: React.js, Node.js, Express.js, MongoDB, Tailwind CSS

## Features

### Frontend (React)
- **Responsive Design**: Modern UI with Tailwind CSS
- **Service Components**: 
  - Government Services (Aadhaar, Passport, Schemes, Pension)
  - Health Services (Hospitals, Diagnostics, Emergency)
  - Transport Services (Bus Routes, Service Centers, Vehicle Sales)
  - Finance Services (Loan Calculator, Interest Rates)
- **Navigation**: React Router for seamless page transitions
- **Interactive Elements**: Search, filters, and dynamic content

### Backend (Node.js + Express)
- **RESTful API**: Organized route structure for each service
- **Database Integration**: MongoDB with Mongoose ODM
- **Data Models**: Structured schemas for all service types
- **CORS Enabled**: Frontend-backend communication
- **Error Handling**: Comprehensive error management

### Database (MongoDB)
- **Collections**: Government Services, Hospitals, Transport, Finance
- **Seed Data**: Pre-populated with sample data for testing
- **Flexible Schema**: Accommodates various service types

## Project Structure

```
project-root/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/     # Header, Footer, MainLayout
│   │   │   ├── services/   # Service-specific components
│   │   │   └── common/     # Reusable components
│   │   ├── pages/          # Page components
│   │   └── App.jsx
│   └── public/
├── server/                 # Node.js Backend
│   ├── routes/            # API routes
│   ├── models/            # Database models
│   ├── config/            # Database configuration
│   └── server.js
└── package.json           # Root package.json for scripts
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### Quick Start

1. **Clone and Install Dependencies**
   ```bash
   git clone <repository-url>
   cd integrated-services
   npm run install-deps
   ```

2. **Environment Setup**
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your MongoDB URI
   ```

3. **Database Setup**
   ```bash
   npm run seed
   ```

4. **Start Development Servers**
   ```bash
   npm run dev
   ```

   This starts both frontend (http://localhost:5173) and backend (http://localhost:5000)

### Individual Commands

```bash
# Install all dependencies
npm run install-deps

# Start both servers
npm run dev

# Start only backend
npm run server

# Start only frontend
npm run client

# Seed database with sample data
npm run seed

# Build for production
npm run build
```

## API Endpoints

### Government Services
- `GET /api/government` - Get all government services
- `GET /api/government/category/:category` - Get services by category
- `POST /api/government` - Create new service

### Health Services
- `GET /api/health/hospitals` - Get all hospitals
- `GET /api/health/hospitals/area/:area` - Get hospitals by area
- `GET /api/health/diagnostic` - Get diagnostic centers
- `GET /api/health/emergency` - Get emergency services

### Transport Services
- `GET /api/transport` - Get all transport data
- `GET /api/transport/type/:type` - Get transport data by type
- `GET /api/transport/buses` - Get bus routes
- `GET /api/transport/services` - Get service centers

### Finance Services
- `GET /api/finance` - Get all finance services
- `GET /api/finance/type/:type` - Get services by type
- `GET /api/finance/loans` - Get loan information

## Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/integrated_services
NODE_ENV=development
```

## Features Implemented

### ✅ Frontend
- [x] React functional components
- [x] React Router DOM navigation
- [x] Tailwind CSS styling
- [x] Responsive design
- [x] Service-specific pages
- [x] Search and filter functionality
- [x] Loading states and error handling
- [x] Interactive loan calculator

### ✅ Backend
- [x] Express.js server setup
- [x] MongoDB integration with Mongoose
- [x] RESTful API routes
- [x] Data models and schemas
- [x] CORS configuration
- [x] Error handling middleware
- [x] Database seeding script

### ✅ Integration
- [x] Axios for API calls
- [x] Frontend-backend communication
- [x] Dynamic data rendering
- [x] Environment configuration

## Deployment

### Frontend (Netlify/Vercel)
```bash
cd client
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway)
```bash
cd server
# Set environment variables
# Deploy server code
```

### Database (MongoDB Atlas)
- Create MongoDB Atlas cluster
- Update MONGODB_URI in environment variables

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## Team Shamrocks

- **Institution**: Rajalakshmi Institute of Technology, Chennai
- **Project**: Integrated Common Services to People
- **Goal**: Simplify access to essential services through technology

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and queries:
- Email: team.shamrocks@ritchennai.edu.in
- Phone: +91 98765 43210

---

**Made with ❤️ by Team Shamrocks**