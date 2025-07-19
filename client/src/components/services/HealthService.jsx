import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';

const HealthService = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArea, setSelectedArea] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/health/hospitals');
      setHospitals(response.data);
    } catch (err) {
      setError('Failed to fetch hospital data');
    } finally {
      setLoading(false);
    }
  };

  const areas = ['all', 'alwarpet', 'annanagar', 'tnagar', 'ambattur', 'mylapore', 'kilpauk'];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesArea = selectedArea === 'all' || hospital.area === selectedArea;
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.services.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesArea && matchesSearch;
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Services in Chennai
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find hospitals, diagnostic centers, emergency services, and health insurance information
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Hospitals
              </label>
              <input
                type="text"
                placeholder="Search by name or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Area
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {areas.map(area => (
                  <option key={area} value={area}>
                    {area === 'all' ? 'All Areas' : area.charAt(0).toUpperCase() + area.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Hospital Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((hospital) => (
            <div key={hospital._id} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {hospital.name}
                </h3>
                <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                  <span className="text-yellow-800 text-sm font-medium">
                    ⭐ {hospital.rating}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <span className="text-gray-500 text-sm mr-2">📍</span>
                  <p className="text-gray-600 text-sm line-clamp-2">{hospital.address}</p>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm mr-2">📞</span>
                  <p className="text-gray-600 text-sm">{hospital.phone}</p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-gray-500 text-sm mr-2">🏥</span>
                  <p className="text-gray-600 text-sm line-clamp-2">{hospital.services}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 btn-primary text-sm">
                  View Details
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                  📞 Call
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hospitals found matching your criteria.</p>
          </div>
        )}

        {/* Emergency Services */}
        <div className="mt-16 bg-red-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6">
            🚨 Emergency Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2">Ambulance</h3>
              <p className="text-2xl font-bold text-red-600">108</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2">Fire Service</h3>
              <p className="text-2xl font-bold text-red-600">101</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2">Police</h3>
              <p className="text-2xl font-bold text-red-600">100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthService;