@echo off
echo 🚰 Starting Water Reservoir Management System...
echo ================================================

echo.
echo 🚀 Starting Backend (Java Spring Boot)...
echo    Port: 8080
echo    Context: /api
echo.

cd backend
start "Backend" cmd /k "mvn spring-boot:run"

echo ⏳ Waiting for backend to start...
timeout /t 10 /nobreak >nul

echo.
echo 🌐 Starting Frontend (React)...
echo    Port: 3000
echo.

cd ../frontend
start "Frontend" cmd /k "npm start"

echo.
echo 🎉 Application is starting up!
echo ================================================
echo 📱 Frontend: http://localhost:3000
echo 🔧 Backend:  http://localhost:8080/api
echo 📊 Health Check: http://localhost:8080/api/reservoirs/health
echo.
echo 🛑 Close the command windows to stop the services
echo.
pause
