# Water Reservoir Management System

A comprehensive water reservoir management application built for Kenya, featuring real-time monitoring, intelligent forecasting, and user management.

## 🏗️ Project Structure

```
water/
├── frontend/          # React.js frontend application
├── backend/           # Java Spring Boot backend API
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites
- **Java 17** or higher
- **Node.js 18** or higher
- **Maven 3.6** or higher

### 1. Start the Backend (Java Spring Boot)

```bash
cd backend
mvn spring-boot:run
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

### 📊 Real-time Monitoring
- Water capacity and current levels
- Water quality ratings
- Estimated runout predictions
- Contact information and management details

### 🔍 Smart Search
- Search by county, sub-county, and ward
- Geographic location filtering
- Real-time data updates

## 🛠️ Technology Stack

### Frontend
- **React 18** with modern hooks
- **CSS3** with custom design system
- **Responsive design** for all devices

### Backend
- **Java 17** with Spring Boot 3.2.0
- **Spring Security** with JWT authentication
- **Spring Data JPA** with Hibernate
- **H2 Database** (in-memory for development)
- **Maven** for dependency management

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
├── src/main/java/com/waterapp/
│   ├── config/       # Configuration classes
│   ├── controller/   # REST API controllers
│   ├── dto/          # Data Transfer Objects
│   ├── entity/       # JPA entities
│   ├── repository/   # Data access layer
│   ├── security/     # Security configuration
│   ├── service/      # Business logic
│   └── util/         # Utility classes
├── src/main/resources/
│   └── application.yml # Application configuration
└── pom.xml           # Maven configuration
```

## 🔧 Development

### Running in Development Mode
1. **Backend**: `cd backend && mvn spring-boot:run`
2. **Frontend**: `cd frontend && npm start`

### Building for Production
1. **Backend**: `cd backend && mvn clean package`
2. **Frontend**: `cd frontend && npm run build`

## 🌍 Environment Configuration

### Backend Configuration
- **Port**: 8080
- **Context Path**: `/api`
- **Database**: H2 in-memory
- **JWT Secret**: Configured in `application.yml`

### Frontend Configuration
- **Port**: 3000
- **API Base URL**: `http://localhost:8080/api`
- **Environment**: Development mode

## 📱 Demo Credentials

- **Email**: `john@example.com`
- **Password**: `password123`

## 🚀 Deployment

### Backend Deployment
- Build JAR: `mvn clean package`
- Run: `java -jar target/water-reservoir-0.0.1-SNAPSHOT.jar`

### Frontend Deployment
- Build: `npm run build`
- Deploy `build/` folder to any static hosting service

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
