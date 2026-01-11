import { TrendingUp, TrendingDown, AlertCircle, Activity, Shield, CheckCircle2 } from 'lucide-react';
import { loans } from '../mockData';

export default function HealthMonitoring() {
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
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Medium':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'High':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const riskIndicators = [
    { name: 'Credit Rating', status: 'Stable', trend: 'neutral', value: 'BBB+' },
    { name: 'Market Volatility', status: 'Low', trend: 'down', value: '12.3%' },
    { name: 'Sector Risk', status: 'Moderate', trend: 'up', value: '24.5%' },
    { name: 'Liquidity', status: 'Strong', trend: 'up', value: '1.8x' },
  ];

  const earlyWarnings = [
    { metric: 'Interest Coverage', current: 2.2, threshold: 2.5, status: 'warning', trend: 'declining' },
    { metric: 'Debt/EBITDA', current: 4.8, threshold: 5.0, status: 'warning', trend: 'stable' },
    { metric: 'Current Ratio', current: 1.8, threshold: 1.2, status: 'healthy', trend: 'improving' },
    { metric: 'Working Capital', current: 45.2, threshold: 30.0, status: 'healthy', trend: 'improving' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Loan Health Monitoring Engine</h1>
          <p className="text-slate-600">Real-time risk assessment with predictive analytics</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {loans.slice(0, 4).map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-lg border border-slate-200 p-6 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                  loan.healthScore >= 80 ? 'bg-green-100 text-green-600' :
                  loan.healthScore >= 60 ? 'bg-amber-100 text-amber-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  {loan.healthScore}
                </div>
                {loan.healthScore >= 70 ? (
                  <TrendingUp className="w-5 h-5 text-green-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-600" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{loan.borrower}</h3>
              <p className="text-xs text-slate-600 mb-3">{loan.id}</p>
              <div className={`text-xs px-2 py-1 rounded font-medium border inline-block ${getRiskColor(loan.riskLevel)}`}>
                {loan.riskLevel} Risk
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Cashflow Trends</h2>
              <div className="text-xs text-slate-600">Last 12 months</div>
            </div>

            <div className="space-y-4">
              {['TechCorp Industries', 'GreenEnergy Solutions', 'Global Logistics', 'Manufacturing Dynamics'].map((company, i) => {
                const trend = [65, 68, 72, 75, 78, 82, 85, 88, 90, 92, 94, 96];
                const health = 80 - i * 10;
                return (
                  <div key={company} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-slate-900">{company}</span>
                      <span className={`text-sm font-semibold ${getHealthScoreColor(health)}`}>
                        {health} Health Score
                      </span>
                    </div>
                    <div className="flex items-end space-x-1 h-16">
                      {trend.map((value, index) => (
                        <div
                          key={index}
                          className="flex-1 bg-blue-600 rounded-t"
                          style={{ height: `${(value / 100) * 100}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-slate-600">
                      <span>Jan 2023</span>
                      <span>Dec 2023</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">External Risk Indicators</h2>
            <div className="space-y-4">
              {riskIndicators.map((indicator) => (
                <div key={indicator.name} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-600">{indicator.name}</span>
                    {indicator.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : indicator.trend === 'down' ? (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    ) : (
                      <Activity className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-1">{indicator.value}</div>
                  <div className="text-xs text-slate-600">{indicator.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Early Warning Signals</h2>
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-4">
              {earlyWarnings.map((warning) => (
                <div
                  key={warning.metric}
                  className={`border rounded-lg p-4 ${
                    warning.status === 'warning'
                      ? 'border-amber-200 bg-amber-50'
                      : 'border-green-200 bg-green-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-900">{warning.metric}</span>
                    {warning.status === 'warning' ? (
                      <span className="text-xs px-2 py-1 rounded bg-amber-200 text-amber-800 font-medium">
                        Monitor
                      </span>
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-600">Current: </span>
                      <span className="font-semibold text-slate-900">{warning.current}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Threshold: </span>
                      <span className="font-semibold text-slate-900">{warning.threshold}</span>
                    </div>
                    <div className={`font-medium ${
                      warning.trend === 'improving' ? 'text-green-600' :
                      warning.trend === 'declining' ? 'text-red-600' :
                      'text-slate-600'
                    }`}>
                      {warning.trend}
                    </div>
                  </div>
                  <div className="mt-2 bg-white rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        warning.status === 'warning' ? 'bg-amber-500' : 'bg-green-600'
                      }`}
                      style={{
                        width: `${Math.min((warning.current / warning.threshold) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-900">Covenant Compliance Status</h2>
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-700">Financial Covenants</span>
                  <span className="text-sm font-semibold text-green-600">92% Compliant</span>
                </div>
                <div className="bg-slate-100 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '92%' }} />
                </div>
                <div className="mt-2 text-xs text-slate-600">23 of 25 covenants in compliance</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-700">Reporting Requirements</span>
                  <span className="text-sm font-semibold text-green-600">100% Current</span>
                </div>
                <div className="bg-slate-100 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '100%' }} />
                </div>
                <div className="mt-2 text-xs text-slate-600">All reports submitted on time</div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-700">ESG Commitments</span>
                  <span className="text-sm font-semibold text-amber-600">75% On Track</span>
                </div>
                <div className="bg-slate-100 rounded-full h-3">
                  <div className="bg-amber-500 h-3 rounded-full" style={{ width: '75%' }} />
                </div>
                <div className="mt-2 text-xs text-slate-600">3 of 4 targets achieved</div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="text-sm font-semibold text-slate-900 mb-2">Overall Portfolio Health</div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="bg-slate-100 rounded-full h-4">
                      <div className="bg-blue-600 h-4 rounded-full" style={{ width: '74%' }} />
                    </div>
                  </div>
                  <span className="text-2xl font-semibold text-slate-900">74</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <Activity className="w-10 h-10 text-blue-600 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How Health Score is Calculated</h3>
              <div className="grid grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Financial Performance (40%)</div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    EBITDA trends, debt service coverage, liquidity ratios, and cashflow stability
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Covenant Compliance (30%)</div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Real-time monitoring of all covenant requirements and historical compliance record
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">External Risk (20%)</div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Market conditions, sector risk, credit ratings, and macroeconomic indicators
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">ESG Performance (10%)</div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Progress against sustainability targets and adherence to ESG commitments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
