# Water Reservoir Management System

> **💧 A comprehensive AI-powered water reservoir management application built specifically for Kenya, featuring real-time monitoring, intelligent forecasting, and smart recommendations to ensure sustainable water resource management.**

## 🌟 **Project Overview**

The Water Reservoir Management System is a cutting-edge web application designed to address Kenya's water management challenges. It provides real-time monitoring of water reservoirs across the country, offering intelligent insights and AI-powered recommendations to water authorities, farmers, and communities.

### **🎯 Key Problems Solved:**
- **Water Scarcity Monitoring**: Track reservoir levels and predict runout dates
- **Quality Management**: Monitor water quality across different locations
- **Resource Optimization**: AI-powered recommendations for efficient water distribution
- **Emergency Alerts**: Early warning system for critical water situations
- **Data Accessibility**: Centralized platform for water resource information

### **🚀 What Makes It Special:**
- **AI-Powered Intelligence**: Inflection AI integration for smart recommendations
- **Kenya-Specific Data**: Authentic reservoir data from 12+ Kenyan counties
- **Real-time Updates**: Live monitoring and instant notifications
- **User-Friendly Interface**: Modern, responsive design for all devices
- **Professional Authentication**: Secure JWT-based user management

---

A comprehensive water reservoir management application built for Kenya, featuring real-time monitoring, **AI-powered intelligent recommendations**, and user management.

## 🏗️ Project Structure

```
water/
├── frontend/          # React.js frontend application
├── backend/           # Node.js + Express.js backend API
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 18** or higher
- **MongoDB** (local or cloud instance)
- **npm** or **yarn**

### 1. Start the Backend (Node.js + Express)

```bash
cd backend
npm install
npm run dev
```

The backend will start on `http://localhost:8080/api`

### 2. Start the Frontend (React)

```bash
cd frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000`

## 🌐 Application Features

### 🔐 Authentication
- User login and signup
- JWT-based security
- Role-based access control

### 🚰 Water Reservoir Management
- **12 Authentic Kenyan Locations** including:
  - Nairobi: Ndakaini Dam, Ruiru Dam
  - Mombasa: Mbaraki Reservoir
  - Nakuru: Lake Nakuru
  - Kisumu: Kisumu Water Works
  - Eldoret: Eldoret Dam
  - And 7 more locations across Kenya

### 🤖 **AI-Powered Intelligence**
- **Inflection AI Integration** for smart recommendations
- Personalized reservoir suggestions based on user preferences
- Water quality insights and capacity management tips
- Urgent alerts and warnings for critical situations
- Location-based intelligent filtering

### 📊 Real-time Monitoring
- Water capacity and current levels
- Water quality ratings
- Estimated runout predictions
- Contact information and management details

### 🔍 Smart Search
- Search by county, sub-county, and ward
- Geographic location filtering
- Real-time data updates
- **AI-enhanced search results**

## 🛠️ Technology Stack

### Frontend
- **React 18** with modern hooks
- **CSS3** with custom design system
- **Responsive design** for all devices

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **JWT authentication** with bcryptjs
- **Inflection AI API** integration
- **Helmet** for security headers
- **Morgan** for request logging

## 🤖 **Inflection AI Integration**

### **What is Inflection AI?**
Inflection AI is a cutting-edge artificial intelligence platform that provides intelligent insights and recommendations. In our water reservoir system, it analyzes reservoir data to provide:

- **Smart Recommendations**: Top 3 recommended reservoirs with detailed reasoning
- **Water Quality Insights**: AI-powered analysis of water quality patterns
- **Capacity Management Tips**: Intelligent suggestions for water management
- **Urgent Alerts**: AI-generated warnings for critical situations

### **How It Works**
1. **Data Analysis**: AI analyzes reservoir data including location, capacity, water quality, and status
2. **User Personalization**: Recommendations are tailored to individual user preferences and location
3. **Real-time Insights**: AI provides up-to-date recommendations based on current reservoir conditions
4. **Actionable Intelligence**: Each recommendation includes specific reasons and actionable steps

### **API Endpoint**
```
GET /api/reservoirs/recommendations
Authorization: Bearer <JWT_TOKEN>
Query Parameters: location, waterQuality, capacity
```

### **Sample AI Response**
```json
{
  "reservoirs": [...],
  "aiInsights": "Based on your location in Kiambu County, I recommend...",
  "waterQualityTips": "Excellent water quality reservoirs in your area...",
  "capacityAlerts": "Ruiru Dam is running at 80% capacity..."
}
```

## 📁 Detailed Structure

### Frontend (`/frontend`)
```
frontend/
├── public/           # Static assets
├── src/              # React source code
│   ├── components/   # React components
│   ├── App.js        # Main application
│   └── index.js      # Entry point
├── package.json      # Node.js dependencies
└── README.md         # Frontend documentation
```

### Backend (`/backend`)
```
backend/
├── src/
│   ├── config/       # Database configuration
│   ├── middleware/   # Authentication middleware
│   ├── models/       # Mongoose schemas
│   └── routes/       # API route handlers
├── server.js         # Main server file
├── package.json      # Node.js dependencies
└── .env              # Environment variables
```

## 🔧 Development

### Running in Development Mode
1. **Backend**: `cd backend && npm run dev`
2. **Frontend**: `cd frontend && npm start`

### Building for Production
1. **Backend**: `cd backend && npm start`
2. **Frontend**: `cd frontend && npm run build`

## 🌍 Environment Configuration

### Backend Configuration
- **Port**: 8080
- **Database**: MongoDB (local or cloud)
- **AI API Key**: Inflection AI integration key
- **JWT Secret**: Configured in environment variables

### Environment Variables (.env)
```bash
MONGODB_URI=mongodb://localhost:27017/water-reservoirs
JWT_SECRET=your-secret-key
INFLEXION_AI_API_KEY=your-ai-api-key
PORT=8080
```

### Frontend Configuration
- **Port**: 3000
- **API Base URL**: `http://localhost:8080/api`
- **Environment**: Development mode

## 📱 Demo Credentials

- **Email**: `john@example.com`
- **Password**: `password123`

## 🚀 Deployment

### Backend Deployment
- Install dependencies: `npm install`
- Set environment variables
- Run: `npm start` or `npm run dev`

### Frontend Deployment
- Build: `npm run build`
- Deploy `build/` folder to any static hosting service

## 🔐 **AI API Security**

- **API Key Protection**: Inflection AI key stored securely in environment variables
- **Rate Limiting**: Built-in protection against API abuse
- **User Authentication**: AI recommendations require valid JWT tokens
- **Data Privacy**: User data is anonymized before AI processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the GitHub repository.

---

**Built with ❤️ for Kenya's water management needs**

**Powered by 🤖 Inflection AI for intelligent insights**
