const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Integrated Services</h3>
            <p className="text-sm text-gray-300">
              Providing centralized access to essential government, health, transport, and financial services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/government" className="hover:text-gray-300 transition-colors">Government Services</a></li>
              <li><a href="/health" className="hover:text-gray-300 transition-colors">Health Services</a></li>
              <li><a href="/transport" className="hover:text-gray-300 transition-colors">Transport Services</a></li>
              <li><a href="/finance" className="hover:text-gray-300 transition-colors">Finance Services</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-md font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Info</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>Rajalakshmi Institute of Technology</p>
              <p>Chennai, Tamil Nadu</p>
              <p>Email: info@integratedservices.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Integrated Services. All rights reserved. | Team Shamrocks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;