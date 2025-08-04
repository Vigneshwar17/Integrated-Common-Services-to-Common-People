// Tailwind CSS Conversion Helper Script
// This script provides common patterns and utilities for converting HTML files to Tailwind CSS

// Common Tailwind configuration for the project
const tailwindConfig = `
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0b3c5d',
                secondary: '#C2CFD7',
                accent: '#0056b3'
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'arial': ['Arial', 'sans-serif']
            }
        }
    }
}
`;

// Common HTML head structure with Tailwind
const commonHead = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="icon" href="TN logo.png">
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Custom Tailwind Config -->
    <script>
        ${tailwindConfig}
    </script>
</head>
`;

// Common navigation bar structure
const commonNavbar = `
<nav class="bg-primary shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a href="home.html">
                    <img src="TN logo.png" alt="Government Logo" class="h-12 w-auto">
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                    <a href="home.html" class="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
                    <a href="#" class="text-white bg-white bg-opacity-20 px-3 py-2 rounded-md text-sm font-medium">Current Page</a>
                </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-md">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-primary">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="home.html" class="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" class="text-white bg-white bg-opacity-20 block px-3 py-2 rounded-md text-base font-medium">Current Page</a>
        </div>
    </div>
</nav>
`;

// Common page structure
const commonPageStructure = `
<body class="bg-gray-100 font-arial">
    ${commonNavbar}
    
    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header Section -->
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Page Title</h1>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">Page description goes here.</p>
        </div>

        <!-- Content goes here -->
        
    </div>

    <!-- JavaScript -->
    <script>
        // Mobile menu functionality
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });
    </script>
</body>
`;

// Common table structure
const commonTableStructure = `
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-primary">
                <tr>
                    <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Column 1</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Column 2</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Column 3</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr class="hover:bg-gray-50 transition-colors duration-200">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">Data 1</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">Data 2</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">Data 3</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button class="text-primary hover:text-blue-700 transition-colors duration-200">
                            <i class="fas fa-info-circle mr-1"></i>Details
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`;

// Common form structure
const commonFormStructure = `
<div class="bg-white rounded-lg shadow-md p-6">
    <form class="space-y-6">
        <div>
            <label for="input-field" class="block text-sm font-medium text-gray-700 mb-2">Label</label>
            <input type="text" id="input-field" name="input-field" 
                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                   placeholder="Enter value">
        </div>
        
        <div>
            <label for="select-field" class="block text-sm font-medium text-gray-700 mb-2">Select Option</label>
            <select id="select-field" name="select-field" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                <option value="">Choose an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
        </div>
        
        <button type="submit" 
                class="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-700 transform hover:scale-105">
            Submit
        </button>
    </form>
</div>
`;

// Common card structure
const commonCardStructure = `
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <img src="image.jpg" alt="Card Image" class="w-full h-48 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-3 text-gray-800">Card Title</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">Card description goes here.</p>
            <a href="#" class="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">Learn More</a>
        </div>
    </div>
</div>
`;

// Common modal structure
const commonModalStructure = `
<div id="modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full hidden z-50">
    <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div class="mt-3">
            <div class="flex justify-between items-center mb-4">
                <h3 id="modal-title" class="text-2xl font-bold text-gray-800">Modal Title</h3>
                <button id="close-modal" class="text-gray-400 hover:text-gray-600 text-2xl">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div id="modal-content" class="space-y-4">
                <!-- Modal content goes here -->
            </div>
        </div>
    </div>
</div>
`;

// Common search and filter structure
const commonSearchFilterStructure = `
<div class="bg-white rounded-lg shadow-md p-6 mb-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
            <label for="search" class="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div class="relative">
                <input type="text" id="search" placeholder="Search..." 
                       class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
        </div>
        <div>
            <label for="filter1" class="block text-sm font-medium text-gray-700 mb-2">Filter 1</label>
            <select id="filter1" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">All Options</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
        </div>
        <div>
            <label for="filter2" class="block text-sm font-medium text-gray-700 mb-2">Filter 2</label>
            <select id="filter2" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">All Options</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
        </div>
    </div>
</div>
`;

// Common footer structure
const commonFooterStructure = `
<footer class="bg-gray-800 text-white mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="space-y-4">
                <div class="text-xl font-bold">Integrated Services Scheme</div>
                <div class="flex space-x-4">
                    <a href="#" class="text-white hover:text-blue-400 transition-colors duration-300">
                        <i class="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="#" class="text-white hover:text-blue-400 transition-colors duration-300">
                        <i class="fab fa-google text-xl"></i>
                    </a>
                    <a href="#" class="text-white hover:text-blue-400 transition-colors duration-300">
                        <i class="fab fa-twitter text-xl"></i>
                    </a>
                </div>
            </div>
            <!-- Add more footer sections as needed -->
        </div>
    </div>
    <div class="bg-gray-900 py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© 2024 Government Services. All Rights Reserved.</p>
        </div>
    </div>
</footer>
`;

// Export all structures for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        tailwindConfig,
        commonHead,
        commonNavbar,
        commonPageStructure,
        commonTableStructure,
        commonFormStructure,
        commonCardStructure,
        commonModalStructure,
        commonSearchFilterStructure,
        commonFooterStructure
    };
} 