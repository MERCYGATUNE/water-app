import React, { useState, useEffect } from 'react';
import ReservoirSearch from './ReservoirSearch';
import ReservoirList from './ReservoirList';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [reservoirs, setReservoirs] = useState([]);
  const [filteredReservoirs, setFilteredReservoirs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate loading reservoirs data
    const loadReservoirs = async () => {
      try {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data for demonstration
        const mockReservoirs = [
          {
            id: 1,
            name: "Central Valley Reservoir",
            location: "San Francisco, CA",
            capacity: 85,
            currentLevel: 72,
            lastUpdated: "2024-01-15",
            coordinates: { lat: 37.7749, lng: -122.4194 },
            estimatedRunout: "2024-06-15"
          },
          {
            id: 2,
            name: "Mountain Lake Reservoir",
            location: "San Francisco, CA",
            capacity: 100,
            currentLevel: 45,
            lastUpdated: "2024-01-15",
            coordinates: { lat: 37.7849, lng: -122.4094 },
            estimatedRunout: "2024-04-20"
          },
          {
            id: 3,
            name: "Golden Gate Reservoir",
            location: "San Francisco, CA",
            capacity: 95,
            currentLevel: 88,
            lastUpdated: "2024-01-15",
            coordinates: { lat: 37.7649, lng: -122.4294 },
            estimatedRunout: "2024-08-10"
          },
          {
            id: 4,
            name: "Bay Area Reservoir",
            location: "Oakland, CA",
            capacity: 90,
            currentLevel: 32,
            lastUpdated: "2024-01-15",
            coordinates: { lat: 37.8049, lng: -122.3994 },
            estimatedRunout: "2024-03-15"
          },
          {
            id: 5,
            name: "Pacific Heights Reservoir",
            location: "San Francisco, CA",
            capacity: 80,
            currentLevel: 67,
            lastUpdated: "2024-01-15",
            coordinates: { lat: 37.7949, lng: -122.4194 },
            estimatedRunout: "2024-05-25"
          },
          {
            id: 6,
            name: "Marina Reservoir",
            location: "San Francisco, CA",
            capacity: 75,
            currentLevel: 91,
            lastUpdated: "2024-01-15",
            coordinates: { lat: 37.8049, lng: -122.4294 },
            estimatedRunout: "2024-09-20"
          }
        ];
        
        setReservoirs(mockReservoirs);
        setFilteredReservoirs(mockReservoirs);
      } catch (err) {
        setError('Failed to load reservoir data');
      } finally {
        setIsLoading(false);
      }
    };

    loadReservoirs();
  }, []);

  const handleSearch = (searchTerm, location) => {
    let filtered = reservoirs;
    
    if (searchTerm) {
      filtered = filtered.filter(reservoir => 
        reservoir.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reservoir.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (location) {
      filtered = filtered.filter(reservoir => 
        reservoir.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    setFilteredReservoirs(filtered);
  };

  const handleReset = () => {
    setFilteredReservoirs(reservoirs);
  };

  if (isLoading) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="loading">
            <h2>Loading reservoir data...</h2>
            <p>Please wait while we fetch the latest information</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="error">
            <h2>Error</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="dashboard-header">
          <h1 className="page-title">Water Reservoir Dashboard</h1>
          <p className="page-subtitle">
            Monitor water levels and capacity of reservoirs in your area
          </p>
        </div>

        <ReservoirSearch 
          onSearch={handleSearch}
          onReset={handleReset}
          totalReservoirs={reservoirs.length}
          filteredCount={filteredReservoirs.length}
        />

        <ReservoirList 
          reservoirs={filteredReservoirs}
          onRefresh={() => window.location.reload()}
        />
      </div>
    </div>
  );
};

export default Dashboard;
