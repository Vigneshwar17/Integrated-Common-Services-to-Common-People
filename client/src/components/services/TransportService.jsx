import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';

const TransportService = () => {
  const [transportData, setTransportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('buses');

  useEffect(() => {
    fetchTransportData();
  }, []);

  const fetchTransportData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transport');
      setTransportData(response.data);
    } catch (err) {
      setError('Failed to fetch transport data');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'buses', name: 'Bus Routes', icon: '🚌' },
    { id: 'services', name: 'Service Centers', icon: '🔧' },
    { id: 'vehicles', name: 'Vehicle Sales', icon: '🚗' },
    { id: 'comparison', name: 'Cost Comparison', icon: '💰' },
  ];

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const filteredData = transportData.filter(item => item.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transport Services in Chennai
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access bus routes, service centers, vehicle information, and cost comparisons
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

        {/* Bus Routes */}
        {activeTab === 'buses' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-primary text-white">
              <h2 className="text-xl font-semibold">MTC Bus Routes</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bus Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Route
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timing
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((bus) => (
                    <tr key={bus._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {bus.busNumber}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <div>
                          <div className="font-medium">{bus.startPoint} → {bus.endPoint}</div>
                          <div className="text-gray-500 text-xs mt-1">{bus.route}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {bus.timing}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Service Centers */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((service) => (
              <div key={service._id} className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <span className="text-gray-500 text-sm mr-2">📍</span>
                    <p className="text-gray-600 text-sm">{service.address}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm mr-2">📞</span>
                    <p className="text-gray-600 text-sm">{service.contact}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm mr-2">🔧</span>
                    <p className="text-gray-600 text-sm">{service.category}</p>
                  </div>
                </div>
                <button className="w-full btn-primary">
                  Contact Service
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Vehicle Sales */}
        {activeTab === 'vehicles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((dealer) => (
              <div key={dealer._id} className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {dealer.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <span className="text-gray-500 text-sm mr-2">📍</span>
                    <p className="text-gray-600 text-sm">{dealer.address}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm mr-2">📞</span>
                    <p className="text-gray-600 text-sm">{dealer.contact}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary text-sm">
                    View Inventory
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    📞 Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cost Comparison */}
        {activeTab === 'comparison' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-primary text-white">
              <h2 className="text-xl font-semibold">Vehicle Cost Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vehicle Model
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Min Charge
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Per KM
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Waiting Charge
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((vehicle) => (
                    <tr key={vehicle._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {vehicle.model}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{vehicle.minCharge}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{vehicle.perKm}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ₹{vehicle.waitingCharge}/min
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransportService;