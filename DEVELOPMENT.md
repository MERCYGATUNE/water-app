# Development Guide

## 🏗️ Project Structure

```
water/
├── frontend/          # React.js application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   ├── package.json  # Node.js dependencies
│   └── README.md     # Frontend documentation
├── backend/           # Java Spring Boot application
│   ├── src/          # Java source code
│   ├── pom.xml       # Maven configuration
│   └── README.md     # Backend documentation
├── start-app.sh      # Unix/Mac startup script
├── start-app.bat     # Windows startup script
├── README.md         # Main project documentation
└── .gitignore        # Git ignore rules
```

## 🚀 Quick Start

### Option 1: Use the Startup Scripts

**Unix/Mac:**
```bash
./start-app.sh
```

**Windows:**
```cmd
start-app.bat
```

### Option 2: Manual Startup

**1. Start Backend:**
```bash
cd backend
mvn spring-boot:run
```

**2. Start Frontend (in new terminal):**
```bash
cd frontend
npm install  # First time only
npm start
```

## 🔧 Development Workflow

### Frontend Development
- **Location**: `frontend/` folder
- **Command**: `npm start` (from frontend folder)
- **Port**: 3000
- **Hot Reload**: ✅ Enabled

### Backend Development
- **Location**: `backend/` folder
- **Command**: `mvn spring-boot:run` (from backend folder)
- **Port**: 8080
- **Context Path**: `/api`
- **Hot Reload**: ✅ Enabled (Spring Boot DevTools)

## 📁 File Organization

### Frontend Files
- **Components**: `frontend/src/components/`
- **Styles**: `frontend/src/components/*.css`
- **Main App**: `frontend/src/App.js`
- **Entry Point**: `frontend/src/index.js`

### Backend Files
- **Controllers**: `backend/src/main/java/com/waterapp/controller/`
- **Services**: `backend/src/main/java/com/waterapp/service/`
- **Entities**: `backend/src/main/java/com/waterapp/entity/`
- **Configuration**: `backend/src/main/java/com/waterapp/config/`
- **Security**: `backend/src/main/java/com/waterapp/security/`

## 🛠️ Common Commands

### Frontend
```bash
cd frontend
npm install          # Install dependencies
npm start           # Start development server
npm run build       # Build for production
npm test            # Run tests
```

### Backend
```bash
cd backend
mvn clean          # Clean build artifacts
mvn compile        # Compile Java code
mvn test           # Run tests
mvn spring-boot:run # Start application
mvn package        # Build JAR file
```

## 🔍 Debugging

### Frontend Debugging
- **Browser DevTools**: F12 in browser
- **Console Logs**: Check browser console
- **Network Tab**: Monitor API calls

### Backend Debugging
- **Console Logs**: Check terminal output
- **H2 Database**: `http://localhost:8080/h2-console`
- **API Testing**: Use Postman or curl

## 📊 API Endpoints

### Public Endpoints
- `GET /api/reservoirs` - List all reservoirs
- `GET /api/reservoirs/search` - Search reservoirs
- `GET /api/reservoirs/county/{county}` - Get by county

### Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

## 🗄️ Database

### H2 In-Memory Database
- **URL**: `jdbc:h2:mem:waterdb`
- **Username**: `SA`
- **Password**: (empty)
- **Console**: `http://localhost:8080/h2-console`

### Sample Data
The application automatically populates with:
- 2 sample users
- 12 Kenyan water reservoirs

## 🚨 Troubleshooting

### Port Already in Use
```bash
# Check what's using port 8080
lsof -i :8080

# Check what's using port 3000
lsof -i :3000

# Kill process using port
kill -9 <PID>
```

### Maven Issues
```bash
cd backend
mvn clean
mvn install
```

### Node Issues
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Database Issues
- Check if backend is running
- Verify H2 console access
- Check application logs

## 📝 Logs

### Backend Logs
- **Console**: Terminal where `mvn spring-boot:run` is running
- **File**: `backend.log` (if using startup script)

### Frontend Logs
- **Console**: Terminal where `npm start` is running
- **File**: `frontend.log` (if using startup script)
- **Browser**: F12 → Console tab

## 🔄 Git Workflow

### Making Changes
1. Create feature branch: `git checkout -b feature-name`
2. Make changes in appropriate folder
3. Test changes
4. Commit: `git commit -m "Description"`
5. Push: `git push origin feature-name`

### Folder-Specific Changes
- **Frontend changes**: Commit from `frontend/` folder
- **Backend changes**: Commit from `backend/` folder
- **Root changes**: Commit from root folder

## 🌐 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy 'build' folder to hosting service
```

### Backend Deployment
```bash
cd backend
mvn clean package
# Deploy JAR file to server
java -jar target/water-reservoir-0.0.1-SNAPSHOT.jar
```

---

**Happy Coding! 🚰💻**
