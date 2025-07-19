import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import GovtService from './components/services/GovtService';
import HealthService from './components/services/HealthService';
import TransportService from './components/services/TransportService';
import FinanceService from './components/services/FinanceService';
import './index.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/government" element={<GovtService />} />
          <Route path="/health" element={<HealthService />} />
          <Route path="/transport" element={<TransportService />} />
          <Route path="/finance" element={<FinanceService />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;