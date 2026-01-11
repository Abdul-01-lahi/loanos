import { useState } from 'react';
import Navigation, { PageView } from './components/Navigation';
import Dashboard from './components/Dashboard';
import LoanTwins from './components/LoanTwins';
import SmartDocuments from './components/SmartDocuments';
import HealthMonitoring from './components/HealthMonitoring';
import LoanTrading from './components/LoanTrading';
import GreenerLending from './components/GreenerLending';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'loans':
        return <LoanTwins />;
      case 'documents':
        return <SmartDocuments />;
      case 'monitoring':
        return <HealthMonitoring />;
      case 'trading':
        return <LoanTrading />;
      case 'esg':
        return <GreenerLending />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation currentView={currentView} onNavigate={setCurrentView} />
      {renderView()}
    </div>
  );
}

export default App;
