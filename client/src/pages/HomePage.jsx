import { Link } from 'react-router-dom';
import { 
  BuildingOffice2Icon, 
  HeartIcon, 
  TruckIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const services = [
    {
      title: 'Government Services',
      description: 'Access Aadhaar, land records, passport services, pension details, and government schemes.',
      icon: BuildingOffice2Icon,
      link: '/government',
      color: 'bg-blue-500',
    },
    {
      title: 'Health Services',
      description: 'Find hospitals, diagnostic centers, emergency services, and health insurance information.',
      icon: HeartIcon,
      link: '/health',
      color: 'bg-red-500',
    },
    {
      title: 'Transport Services',
      description: 'Bus routes, vehicle services, cost comparisons, and transportation information.',
      icon: TruckIcon,
      link: '/transport',
      color: 'bg-green-500',
    },
    {
      title: 'Finance Services',
      description: 'Interest calculators, tax-saving recommendations, and financial planning tools.',
      icon: CurrencyDollarIcon,
      link: '/finance',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Integrated Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your one-stop platform for accessing essential government, health, transport, and financial services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/government"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Services
            </Link>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access all essential services from one unified platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="service-card group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Our Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to providing integrated and accessible services to the community. 
                Our mission is to enhance the quality of life and well-being through comprehensive 
                support and services in health, finance, transport, and various government schemes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated team works tirelessly to ensure that every citizen has access to 
                the resources they need through a single, user-friendly platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary text-white px-6 py-3 rounded-lg">
                  <span className="font-semibold">Team Shamrocks</span>
                </div>
                <div className="bg-secondary text-white px-6 py-3 rounded-lg">
                  <span className="font-semibold">RIT Chennai</span>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">Services Accessed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Happy Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Available Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;