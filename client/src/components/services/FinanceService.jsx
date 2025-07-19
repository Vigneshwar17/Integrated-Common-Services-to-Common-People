import { useState } from 'react';

const FinanceService = () => {
  const [loanType, setLoanType] = useState('personal');
  const [loanAmount, setLoanAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [results, setResults] = useState([]);

  const loanRates = {
    personal: [
      { bank: 'AXIS BANK', rate: 10.5 },
      { bank: 'HDFC BANK', rate: 10.25 },
      { bank: 'STATE BANK OF INDIA', rate: 11.75 },
      { bank: 'CANARA BANK', rate: 10.6 },
      { bank: 'BANK OF INDIA', rate: 10.4 },
      { bank: 'KOTAK MAHINDRA BANK', rate: 16.99 },
      { bank: 'TAMILNADU MERCANTILE BANK', rate: 14.05 },
    ],
    home: [
      { bank: 'AXIS BANK', rate: 8.5 },
      { bank: 'HDFC BANK', rate: 8.25 },
      { bank: 'STATE BANK OF INDIA', rate: 8.75 },
      { bank: 'CANARA BANK', rate: 8.6 },
      { bank: 'BANK OF INDIA', rate: 8.4 },
      { bank: 'KOTAK MAHINDRA BANK', rate: 8.70 },
      { bank: 'TAMILNADU MERCANTILE BANK', rate: 9.45 },
    ],
    vehicle: [
      { bank: 'AXIS BANK', rate: 7.5 },
      { bank: 'HDFC BANK', rate: 7.25 },
      { bank: 'STATE BANK OF INDIA', rate: 7.75 },
      { bank: 'CANARA BANK', rate: 7.6 },
      { bank: 'BANK OF INDIA', rate: 7.4 },
      { bank: 'KOTAK MAHINDRA BANK', rate: 8.2 },
      { bank: 'TAMILNADU MERCANTILE BANK', rate: 9.70 },
    ],
    education: [
      { bank: 'AXIS BANK', rate: 6.5 },
      { bank: 'HDFC BANK', rate: 6.25 },
      { bank: 'STATE BANK OF INDIA', rate: 6.75 },
      { bank: 'CANARA BANK', rate: 6.6 },
      { bank: 'BANK OF INDIA', rate: 6.4 },
      { bank: 'KOTAK MAHINDRA BANK', rate: 11.50 },
      { bank: 'TAMILNADU MERCANTILE BANK', rate: 11.75 },
    ],
  };

  const calculateInterest = () => {
    if (!loanAmount || !tenure) {
      alert('Please enter loan amount and tenure');
      return;
    }

    const amount = parseFloat(loanAmount);
    const years = parseInt(tenure);
    const banks = loanRates[loanType];

    const calculations = banks.map(bank => {
      const monthlyRate = bank.rate / 100 / 12;
      const months = years * 12;
      const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                  (Math.pow(1 + monthlyRate, months) - 1);
      const totalAmount = emi * months;
      const totalInterest = totalAmount - amount;

      return {
        ...bank,
        emi: emi.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalAmount: totalAmount.toFixed(2),
      };
    });

    setResults(calculations);
  };

  const loanTypes = [
    { id: 'personal', name: 'Personal Loan', icon: '👤' },
    { id: 'home', name: 'Home Loan', icon: '🏠' },
    { id: 'vehicle', name: 'Vehicle Loan', icon: '🚗' },
    { id: 'education', name: 'Education Loan', icon: '🎓' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Finance Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate loan EMIs, compare interest rates, and get financial planning assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Loan EMI Calculator
            </h2>

            {/* Loan Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Loan Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {loanTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setLoanType(type.id)}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                      loanType === type.id
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 text-gray-700 hover:border-primary'
                    }`}
                  >
                    <span className="mr-2">{type.icon}</span>
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Enter loan amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tenure (Years)
                </label>
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  placeholder="Enter tenure in years"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={calculateInterest}
              className="w-full btn-primary"
            >
              Calculate EMI
            </button>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Interest Rate Comparison
            </h2>

            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{result.bank}</h3>
                      <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                        {result.rate}%
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Monthly EMI:</span>
                        <div className="font-medium text-gray-900">₹{result.emi}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Total Interest:</span>
                        <div className="font-medium text-gray-900">₹{result.totalInterest}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 text-6xl mb-4">📊</div>
                <p className="text-gray-500">
                  Enter loan details and click calculate to see comparison
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Financial Tips */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Financial Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Save Regularly</h3>
              <p className="text-gray-600 text-sm">
                Set aside at least 20% of your income for savings and investments
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Invest Wisely</h3>
              <p className="text-gray-600 text-sm">
                Diversify your portfolio with a mix of equity, debt, and other instruments
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get Insured</h3>
              <p className="text-gray-600 text-sm">
                Protect yourself and your family with adequate life and health insurance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceService;