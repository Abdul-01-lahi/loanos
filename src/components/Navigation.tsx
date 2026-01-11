import { LayoutDashboard, FileText, Activity, TrendingUp, Leaf, BarChart3 } from 'lucide-react';

export type PageView = 'dashboard' | 'loans' | 'documents' | 'monitoring' | 'trading' | 'esg';

interface NavigationProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'dashboard' as PageView, label: 'Portfolio Overview', icon: LayoutDashboard },
    { id: 'loans' as PageView, label: 'Digital Loan Twins', icon: FileText },
    { id: 'documents' as PageView, label: 'Smart Documents', icon: BarChart3 },
    { id: 'monitoring' as PageView, label: 'Health Monitoring', icon: Activity },
    { id: 'trading' as PageView, label: 'Loan Trading', icon: TrendingUp },
    { id: 'esg' as PageView, label: 'Greener Lending', icon: Leaf },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">LO</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">LOANOS™</span>
            </div>
            <div className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
