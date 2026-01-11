import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, DollarSign, Activity, Leaf, Shield } from 'lucide-react';
import { portfolioMetrics, loans, alerts } from '../mockData';

export default function Dashboard() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'text-green-600 bg-green-50';
      case 'Medium':
        return 'text-amber-600 bg-amber-50';
      case 'High':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-slate-600 bg-slate-50';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'border-red-500 bg-red-50';
      case 'Warning':
        return 'border-amber-500 bg-amber-50';
      case 'Info':
        return 'border-blue-500 bg-blue-50';
      default:
        return 'border-slate-300 bg-slate-50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Portfolio Overview</h1>
          <p className="text-slate-600">Autonomous Operating System for Global Loans</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">
              {formatCurrency(portfolioMetrics.totalAUM)}
            </div>
            <div className="text-sm text-slate-600">Total AUM</div>
            <div className="mt-3 text-xs text-slate-500">
              {portfolioMetrics.totalLoans} active loans
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">
              {portfolioMetrics.averageHealthScore}
            </div>
            <div className="text-sm text-slate-600">Avg Health Score</div>
            <div className="mt-3 text-xs text-green-600 font-medium">
              Real-time compliance monitoring
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">
              {portfolioMetrics.activeAlerts}
            </div>
            <div className="text-sm text-slate-600">Active Alerts</div>
            <div className="mt-3 text-xs text-slate-500">
              {portfolioMetrics.covenantBreaches} covenant breaches
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">
              {portfolioMetrics.esgImpactScore}
            </div>
            <div className="text-sm text-slate-600">ESG Impact Score</div>
            <div className="mt-3 text-xs text-emerald-600 font-medium">
              Sustainability-linked incentives
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Active Loan Portfolio</h2>
              <div className="flex items-center space-x-2 text-xs text-slate-600">
                <Shield className="w-4 h-4" />
                <span>Audit-ready by design</span>
              </div>
            </div>
            <div className="space-y-3">
              {loans.map((loan) => (
                <div
                  key={loan.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-slate-900">{loan.borrower}</span>
                      <span className="text-xs text-slate-500">{loan.id}</span>
                      <span className={`text-xs px-2 py-1 rounded font-medium ${getRiskColor(loan.riskLevel)}`}>
                        {loan.riskLevel} Risk
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-slate-600">
                      <span>{loan.sector}</span>
                      <span>•</span>
                      <span>{loan.region}</span>
                      <span>•</span>
                      <span>{formatCurrency(loan.principal)}</span>
                      <span>•</span>
                      <span>{loan.interestRate}% APR</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-900">{loan.healthScore}</div>
                      <div className="text-xs text-slate-500">Health Score</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-slate-900">{loan.esgScore}</div>
                      <div className="text-xs text-slate-500">ESG Score</div>
                    </div>
                    <div className="w-32 bg-slate-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          loan.healthScore >= 80
                            ? 'bg-green-600'
                            : loan.healthScore >= 60
                            ? 'bg-amber-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${loan.healthScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Risk Alerts</h2>
            <div className="space-y-3">
              {alerts.slice(0, 5).map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 border-l-4 rounded ${getSeverityColor(alert.severity)}`}
                >
                  <div className="flex items-start space-x-2 mb-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs font-medium text-slate-900 mb-1">{alert.severity}</div>
                      <div className="text-xs text-slate-700 leading-relaxed">{alert.message}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-2">{alert.loanId}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-200 p-6">
            <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Reduced Operational Risk</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated covenant monitoring eliminates manual oversight errors
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-lg border border-emerald-200 p-6">
            <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Faster Origination</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Smart documents reduce time-to-close by 60% with digital certainty
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-slate-50 rounded-lg border border-violet-200 p-6">
            <CheckCircle className="w-8 h-8 text-violet-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Better Liquidity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent loan health enables efficient secondary market trading
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
