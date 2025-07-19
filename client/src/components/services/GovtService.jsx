import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';

const GovtService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('aadhaar');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/government');
      setServices(response.data);
    } catch (err) {
      setError('Failed to fetch government services');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'aadhaar', name: 'Aadhaar Services', icon: '🆔' },
    { id: 'passport', name: 'Passport Services', icon: '📘' },
    { id: 'schemes', name: 'Government Schemes', icon: '🏛️' },
    { id: 'pension', name: 'Pension Services', icon: '👴' },
  ];

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Government Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access essential government services including Aadhaar, passport, schemes, and pension services
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services
            .filter(service => service.category === activeTab)
            .map((service) => (
              <div key={service._id} className="card p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {service.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Location:</span>
                    <span className="text-gray-900">{service.location}</span>
                  </div>
                  {service.contact && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Contact:</span>
                      <span className="text-gray-900">{service.contact}</span>
                    </div>
                  )}
                  {service.fee && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Fee:</span>
                      <span className="text-gray-900">₹{service.fee}</span>
                    </div>
                  )}
                </div>
                <button className="w-full mt-4 btn-primary">
                  Learn More
                </button>
              </div>
            ))}
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Required Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                For Aadhaar Services
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Proof of Identity</li>
                <li>Proof of Address</li>
                <li>Date of Birth Certificate</li>
                <li>Passport-sized photographs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                For Passport Services
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Birth Certificate</li>
                <li>Address Proof</li>
                <li>Identity Proof</li>
                <li>Passport-sized photographs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovtService;