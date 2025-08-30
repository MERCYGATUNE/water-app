# 🌊 Water Oasis

## 📋 Project Overview

**Water Oasis** is a comprehensive water reservoir management application built for Kenya, featuring real-time monitoring, **AI-powered intelligent recommendations**, and user management. In an era where climate change is straining water resources, our platform helps communities find water faster, plan smarter, and stay resilient.

### 🎯 Key Problems Solved
- **Water Scarcity**: Helps locate available water sources during shortages
- **Climate Impact**: Addresses climate change effects on water availability
- **Resource Management**: Provides intelligent insights for water planning
- **Community Access**: Ensures safe water access for Kenyan communities

### 🌟 What Makes Water Oasis Special
- **AI-Powered Intelligence**: Advanced recommendations using Inflection AI
- **Real-time Monitoring**: Live updates on reservoir levels and quality
- **Climate Resilience**: Built for changing environmental conditions
- **Community Focus**: Designed specifically for Kenyan water management needs

## 🏗️ Project Structure

```
water/
├── frontend/                 # React 18 Frontend Application
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   │   ├── LandingPage.js      # Landing page with hero section
│   │   │   ├── Login.js            # Authentication forms
│   │   │   ├── Dashboard.js        # Main dashboard
│   │   │   ├── AIRecommendations.js # AI-powered insights
│   │   │   └── ...                 # Other components
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json         # Frontend dependencies
├── backend/                  # Node.js Backend Application
│   ├── src/                 # Source code
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API endpoints
│   │   ├── middleware/      # Authentication & validation
│   │   └── config/          # Database & environment config
│   ├── server.js            # Main server file
│   └── package.json         # Backend dependencies
├── README.md                 # This file
└── DEVELOPMENT.md            # Development guide
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (running locally or cloud instance)
- **Git**

### 1. Clone & Setup
```bash
git clone https://github.com/MERCYGATUNE/water-app.git
cd water-app
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env  # Configure your environment variables
npm run dev           # Start development server
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start             # Start React development server
```

### 4. Access Your App
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Landing Page**: Beautiful hero section with climate-focused messaging
- **Dashboard**: AI-powered water reservoir management

## 🤖 AI-Powered Intelligence

### Inflection AI Integration
Water Oasis leverages **Inflection AI** to provide intelligent water management insights:

- **Smart Recommendations**: AI-generated reservoir suggestions based on location, quality, and capacity
- **Predictive Analytics**: Forecasts water shortages and capacity issues
- **Personalized Insights**: Tailored recommendations for individual users
- **Climate Adaptation**: AI-powered strategies for changing environmental conditions

### AI Features
- **Reservoir Recommendations**: Find the best water sources for your needs
- **Water Quality Insights**: AI analysis of water safety and quality
- **Capacity Management**: Intelligent tips for water resource planning
- **Urgent Alerts**: AI-powered warnings for critical water situations

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI framework
- **CSS3** - Custom styling with responsive design
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### AI & Security
- **Inflection AI** - Advanced AI recommendations
- **JWT** - Secure authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware

## 🌍 Climate-Focused Features

Water Oasis is specifically designed to address climate change challenges:

- **Climate Resilience**: Built for changing environmental conditions
- **Resource Forecasting**: AI-powered predictions for water availability
- **Community Adaptation**: Tools for communities to adapt to climate impacts
- **Sustainable Planning**: Intelligent recommendations for long-term water security

## 📱 User Experience

### Landing Page
- **Hero Section**: Climate-focused messaging with clear value proposition
- **AI Showcase**: Detailed explanation of AI capabilities
- **Call-to-Action**: Prominent buttons to access the demo

### Dashboard
- **Real-time Monitoring**: Live water reservoir data
- **AI Recommendations**: Intelligent insights and suggestions
- **Search & Filter**: Find reservoirs by location, quality, and capacity
- **Responsive Design**: Works perfectly on all devices

## 🔧 Development

### Running the Application
```bash
# Start both frontend and backend
./start-app.sh          # Unix/Mac
./start-app.bat         # Windows

# Or start individually
cd backend && npm run dev
cd frontend && npm start
```

### API Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User authentication
- `GET /api/reservoirs` - Fetch water reservoirs
- `GET /api/reservoirs/recommendations` - AI-powered insights

## 🚀 Deployment

### Production Build
```bash
cd frontend
npm run build

cd backend
npm start
```

### Environment Variables
Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
INFLEXION_AI_API_KEY=your_ai_api_key
PORT=8080
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Support

For support and questions:
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check DEVELOPMENT.md for detailed guides
- **Community**: Join our water management community

---

**Built with ❤️ for Kenya's water security and climate resilience** 🌊🇰🇪
