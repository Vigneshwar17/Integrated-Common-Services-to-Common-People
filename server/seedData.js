const mongoose = require('mongoose');
require('dotenv').config();

const GovernmentService = require('./models/governmentModel');
const Hospital = require('./models/hospitalModel');
const Transport = require('./models/transportModel');
const Finance = require('./models/financeModel');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const governmentServices = [
  {
    name: "Aadhaar Seva Kendra - Alandur",
    category: "aadhaar",
    type: "Enrollment Center",
    description: "Aadhaar enrollment and update services",
    location: "Alandur",
    address: "16 GST Road St Thomas Mount Ho",
    contact: "044-12345678",
    fee: 50,
    documents: ["Proof of Identity", "Proof of Address", "Date of Birth Certificate"]
  },
  {
    name: "Passport Seva Kendra - Aminjikarai",
    category: "passport",
    type: "PSK",
    description: "Passport application and renewal services",
    location: "Aminjikarai",
    address: "Navins Presidium, No. 103, Nelson Manickam Road",
    contact: "044-23456789",
    fee: 1500,
    documents: ["Birth Certificate", "Address Proof", "Identity Proof"]
  },
  {
    name: "PM-KISAN Scheme",
    category: "schemes",
    type: "Agricultural Scheme",
    description: "Financial support to farmers",
    location: "All Districts",
    address: "District Collector Office",
    contact: "1800-180-1551",
    fee: 0,
    documents: ["Land Records", "Bank Details", "Aadhaar Card"]
  },
  {
    name: "Pension Consultant Services",
    category: "pension",
    type: "Consultation",
    description: "Pension and Gratuity planning, PF management",
    location: "Chennai",
    address: "Various Locations",
    contact: "123-456-7890",
    fee: 500,
    documents: ["Employment Records", "PF Details", "Bank Account"]
  }
];

const hospitals = [
  {
    name: "Apollo Spectra Hospital",
    area: "alwarpet",
    address: "12, CP Ramaswamy Iyer Rd, Natesan Colony, Alwarpet",
    phone: "084484 40991",
    rating: 4.5,
    services: "General Surgery, Orthopedics",
    type: "hospital",
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    emergency: true
  },
  {
    name: "Billroth Hospital",
    area: "annanagar",
    address: "43, Lakshmi Talkies Road, Shenoy Nagar",
    phone: "044 2664 2200",
    rating: 4.5,
    services: "General Surgery, Cardiology",
    type: "hospital",
    specialties: ["Cardiology", "General Surgery"],
    emergency: true
  },
  {
    name: "Be Well Hospitals",
    area: "tnagar",
    address: "5A, Vijaya Raghava Rd, Drivers Colony, T Nagar",
    phone: "044 2435 3434",
    rating: 4.3,
    services: "General Surgery, Pediatrics",
    type: "hospital",
    specialties: ["Pediatrics", "General Surgery"],
    emergency: false
  },
  {
    name: "Ehrlich Laboratory Pvt Ltd",
    area: "mylapore",
    address: "No 46 & 48, Near Vitan Super Market, Masilamani Road Royapettah",
    phone: "044-28594780",
    rating: 4.2,
    services: "Diagnostic Services, Lab Tests",
    type: "diagnostic",
    specialties: ["Pathology", "Radiology"],
    emergency: false
  }
];

const transportData = [
  {
    type: "buses",
    busNumber: "1",
    startPoint: "Thiruvottiyur",
    endPoint: "Thiruvanmiyur",
    route: "Adyar, Mylapore, Royapettah, Parry's Corner",
    timing: "05:30 AM - 10:30 PM"
  },
  {
    type: "buses",
    busNumber: "101",
    startPoint: "Thiruvottiyur",
    endPoint: "Poonamallee",
    route: "Tollgate, Central, KMC, Mathuravoyal",
    timing: "06:00 AM - 11:00 PM"
  },
  {
    type: "services",
    name: "K S R Motors",
    address: "Plot No 13, Lakshmi Nagar, Nedunkundram, Vandalur Post",
    contact: "044-26258677",
    category: "Body Work"
  },
  {
    type: "vehicles",
    name: "Sell Car Online - CNB Chennai",
    address: "26PW+JHX, Teynampet, Chennai, Tamil Nadu 600018",
    contact: "096060 45096",
    category: "Car Sales"
  },
  {
    type: "comparison",
    model: "Dzire",
    minCharge: 30,
    perKm: 14,
    waitingCharge: 1
  },
  {
    type: "comparison",
    model: "Innova",
    minCharge: 158,
    perKm: 18,
    waitingCharge: 2
  }
];

const financeServices = [
  {
    type: "loan",
    category: "personal",
    name: "Personal Loan - HDFC Bank",
    description: "Quick personal loans with competitive interest rates",
    interestRate: 10.25,
    features: ["Quick approval", "Minimal documentation", "Flexible tenure"],
    eligibility: ["Minimum salary 25,000", "Age 21-60 years", "Good credit score"],
    documents: ["Salary slips", "Bank statements", "Identity proof"]
  },
  {
    type: "loan",
    category: "home",
    name: "Home Loan - SBI",
    description: "Home loans with attractive interest rates",
    interestRate: 8.75,
    features: ["Long tenure", "Tax benefits", "Part payment facility"],
    eligibility: ["Stable income", "Good credit history", "Property documents"],
    documents: ["Income proof", "Property papers", "Bank statements"]
  },
  {
    type: "insurance",
    category: "health",
    name: "Health Insurance - Star Health",
    description: "Comprehensive health insurance coverage",
    features: ["Cashless treatment", "Pre and post hospitalization", "Day care procedures"],
    eligibility: ["Age 18-65 years", "Medical checkup may be required"],
    documents: ["Age proof", "Income proof", "Medical reports"]
  }
];

const seedDatabase = async () => {
  try {
    // Clear existing data
    await GovernmentService.deleteMany({});
    await Hospital.deleteMany({});
    await Transport.deleteMany({});
    await Finance.deleteMany({});

    // Insert seed data
    await GovernmentService.insertMany(governmentServices);
    await Hospital.insertMany(hospitals);
    await Transport.insertMany(transportData);
    await Finance.insertMany(financeServices);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();