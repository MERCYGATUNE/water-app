#!/bin/bash

echo "🚰 Starting Water Reservoir Management System..."
echo "================================================"

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        echo "❌ Port $1 is already in use"
        return 1
    else
        echo "✅ Port $1 is available"
        return 0
    fi
}

# Check if ports are available
echo "🔍 Checking port availability..."
check_port 8080 || exit 1
check_port 3000 || exit 1

echo ""
echo "🚀 Starting Backend (Java Spring Boot)..."
echo "   Port: 8080"
echo "   Context: /api"
echo ""

# Start backend in background
cd backend
mvn spring-boot:run > ../backend.log 2>&1 &
BACKEND_PID=$!

echo "⏳ Waiting for backend to start..."
sleep 10

# Check if backend is running
if curl -s http://localhost:8080/api/reservoirs/health > /dev/null 2>&1; then
    echo "✅ Backend is running successfully!"
else
    echo "⚠️  Backend may still be starting up..."
fi

echo ""
echo "🌐 Starting Frontend (React)..."
echo "   Port: 3000"
echo ""

# Start frontend in background
cd ../frontend
npm start > ../frontend.log 2>&1 &
FRONTEND_PID=$!

echo "⏳ Waiting for frontend to start..."
sleep 5

echo ""
echo "🎉 Application is starting up!"
echo "================================================"
echo "📱 Frontend: http://localhost:3000"
echo "🔧 Backend:  http://localhost:8080/api"
echo "📊 Health Check: http://localhost:8080/api/reservoirs/health"
echo ""
echo "📝 Logs:"
echo "   Backend:  tail -f backend.log"
echo "   Frontend: tail -f frontend.log"
echo ""
echo "🛑 To stop the application, press Ctrl+C"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping services..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Services stopped"
    exit 0
}

# Set trap to cleanup on exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait
