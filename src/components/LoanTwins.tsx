import { useState } from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, Shield, AlertCircle, CheckCircle2, FileText, Activity, Leaf, Clock } from 'lucide-react';
import { loans, smartClauses, esgMetrics } from '../mockData';
import { Loan } from '../types';

interface LoanTwinsProps {
  selectedLoanId?: string;
  onBack?: () => void;
}

export default function LoanTwins({ selectedLoanId, onBack }: LoanTwinsProps) {
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(
    selectedLoanId ? loans.find(l => l.id === selectedLoanId) || loans[0] : loans[0]
  );
  const [activeTab, setActiveTab] = useState<'overview' | 'clauses' | 'metrics' | 'covenants' | 'esg' | 'audit'>('overview');

  if (!selectedLoan) return null;

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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'clauses', label: 'Smart Clauses', icon: Shield },
    { id: 'metrics', label: 'Performance', icon: Activity },
    { id: 'covenants', label: 'Covenants', icon: CheckCircle2 },
    { id: 'esg', label: 'ESG Metrics', icon: Leaf },
    { id: 'audit', label: 'Audit Trail', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </button>
        )}

        <div className="bg-white rounded-lg border border-slate-200 p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-semibold text-slate-900">{selectedLoan.borrower}</h1>
                <span className={`text-xs px-3 py-1 rounded-full font-medium border ${getRiskColor(selectedLoan.riskLevel)}`}>
                  {selectedLoan.riskLevel} Risk
                </span>
                <span className="text-xs px-3 py-1 rounded-full font-medium bg-blue-50 text-blue-600 border border-blue-200">
                  {selectedLoan.status}
                </span>
              </div>
              <p className="text-sm text-slate-600">{selectedLoan.id}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-semibold text-slate-900 mb-1">{selectedLoan.healthScore}</div>
              <div className="text-sm text-slate-600">Loan Health Score</div>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 pt-6 border-t border-slate-200">
            <div>
              <div className="text-xs text-slate-500 mb-1">Principal</div>
              <div className="text-sm font-semibold text-slate-900">{formatCurrency(selectedLoan.principal)}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Interest Rate</div>
              <div className="text-sm font-semibold text-slate-900">{selectedLoan.interestRate}%</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Tenor</div>
              <div className="text-sm font-semibold text-slate-900">{selectedLoan.tenor} months</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Sector</div>
              <div className="text-sm font-semibold text-slate-900">{selectedLoan.sector}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Region</div>
              <div className="text-sm font-semibold text-slate-900">{selectedLoan.region}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">ESG Score</div>
              <div className="text-sm font-semibold text-slate-900">{selectedLoan.esgScore}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200">
          <div className="border-b border-slate-200">
            <div className="flex space-x-1 px-6 pt-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">Origination Date</div>
                    <div className="text-lg font-semibold text-slate-900">{selectedLoan.originationDate}</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">Maturity Date</div>
                    <div className="text-lg font-semibold text-slate-900">{selectedLoan.maturityDate}</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">Next Payment</div>
                    <div className="text-lg font-semibold text-slate-900">{selectedLoan.nextPaymentDate}</div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Loan Structure</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Principal Amount</span>
                      <span className="font-semibold text-slate-900">{formatCurrency(selectedLoan.principal)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Interest Rate (Annual)</span>
                      <span className="font-semibold text-slate-900">{selectedLoan.interestRate}%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Loan Term</span>
                      <span className="font-semibold text-slate-900">{selectedLoan.tenor} months</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-slate-600">Covenant Compliance</span>
                      <span className="font-semibold text-green-600">{selectedLoan.covenantCompliance}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Digital Loan Twin</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        This loan is represented as a living digital entity with automated monitoring,
                        real-time risk assessment, and self-enforcing covenants. All changes are logged
                        in an immutable audit trail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'clauses' && (
              <div className="space-y-4">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Smart Clauses</h3>
                  <p className="text-sm text-slate-600">
                    Machine-executable covenant logic with automated enforcement
                  </p>
                </div>
                {smartClauses.map((clause) => (
                  <div key={clause.id} className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">{clause.name}</h4>
                        <span className="text-xs text-slate-500">{clause.id}</span>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        clause.status === 'Active' ? 'bg-green-50 text-green-600 border border-green-200' :
                        clause.status === 'Triggered' ? 'bg-red-50 text-red-600 border border-red-200' :
                        'bg-slate-50 text-slate-600 border border-slate-200'
                      }`}>
                        {clause.status}
                      </span>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 mb-3">
                      <div className="text-xs font-mono text-slate-700 mb-2">{clause.condition}</div>
                      <div className="text-xs font-mono text-slate-700">{clause.action}</div>
                    </div>
                    {clause.status === 'Triggered' && (
                      <div className="flex items-center space-x-2 text-xs text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        <span>Clause triggered - automated action executed</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Performance Metrics</h3>
                  <p className="text-sm text-slate-600">Real-time financial performance tracking</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-sm font-semibold text-slate-900">Cashflow Trend</h4>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="space-y-3">
                      {['Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024'].map((quarter, i) => (
                        <div key={quarter} className="flex items-center space-x-3">
                          <span className="text-xs text-slate-600 w-16">{quarter}</span>
                          <div className="flex-1 bg-slate-100 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${60 + i * 8}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-slate-900 w-12 text-right">
                            {60 + i * 8}M
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-sm font-semibold text-slate-900">Debt Service Coverage</h4>
                      <Activity className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-center py-6">
                      <div className="text-4xl font-semibold text-slate-900 mb-2">2.8x</div>
                      <div className="text-sm text-slate-600">Current DSCR</div>
                      <div className="mt-4 text-xs text-green-600 font-medium">
                        Above minimum threshold (2.0x)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-4">Key Financial Ratios</h4>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Interest Coverage</div>
                      <div className="text-2xl font-semibold text-slate-900">3.2x</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Debt-to-Equity</div>
                      <div className="text-2xl font-semibold text-slate-900">2.1</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 mb-1">Current Ratio</div>
                      <div className="text-2xl font-semibold text-slate-900">1.8</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'covenants' && (
              <div className="space-y-4">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Covenant Monitoring</h3>
                  <p className="text-sm text-slate-600">Automated compliance tracking with real-time alerts</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-slate-900">Minimum EBITDA</h4>
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-900 mb-1">$58M</div>
                    <div className="text-xs text-slate-600">Threshold: $50M</div>
                    <div className="mt-3 text-xs text-green-600 font-medium">In compliance</div>
                  </div>

                  <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-slate-900">Max Debt/Equity</h4>
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-900 mb-1">2.1</div>
                    <div className="text-xs text-slate-600">Threshold: 3.0</div>
                    <div className="mt-3 text-xs text-green-600 font-medium">In compliance</div>
                  </div>

                  <div className="border border-amber-200 bg-amber-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-slate-900">Interest Coverage</h4>
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-900 mb-1">2.2x</div>
                    <div className="text-xs text-slate-600">Threshold: 2.5x</div>
                    <div className="mt-3 text-xs text-amber-600 font-medium">Approaching threshold</div>
                  </div>

                  <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-slate-900">Current Ratio</h4>
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-2xl font-semibold text-slate-900 mb-1">1.8</div>
                    <div className="text-xs text-slate-600">Threshold: 1.2</div>
                    <div className="mt-3 text-xs text-green-600 font-medium">In compliance</div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Activity className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Automated Monitoring</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Covenant compliance is monitored in real-time with automatic notifications
                        when thresholds are approached or breached. Manual oversight eliminated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'esg' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">ESG Performance</h3>
                  <p className="text-sm text-slate-600">Sustainability-linked lending incentives</p>
                </div>

                {esgMetrics.map((metric) => {
                  const performance = (metric.actual / metric.target) * 100;
                  const isPositive = metric.category.includes('Renewable') || metric.category.includes('Recycling');
                  const onTrack = isPositive ? metric.actual >= metric.target : metric.actual <= metric.target;

                  return (
                    <div key={metric.category} className="border border-slate-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 mb-1">{metric.category}</h4>
                          <p className="text-xs text-slate-600">Target: {metric.target} {metric.unit}</p>
                        </div>
                        {onTrack ? (
                          <span className="text-xs px-3 py-1 rounded-full font-medium bg-green-50 text-green-600 border border-green-200">
                            Target Met
                          </span>
                        ) : (
                          <span className="text-xs px-3 py-1 rounded-full font-medium bg-amber-50 text-amber-600 border border-amber-200">
                            In Progress
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex-1 bg-slate-100 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${onTrack ? 'bg-green-600' : 'bg-amber-500'}`}
                            style={{ width: `${Math.min(performance, 100)}%` }}
                          />
                        </div>
                        <div className="text-sm font-semibold text-slate-900 w-24 text-right">
                          {metric.actual} {metric.unit}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">
                          {isPositive ? 'Progress' : 'Reduction'}: {Math.abs(((metric.actual - metric.target) / metric.target) * 100).toFixed(1)}%
                        </span>
                        <span className={metric.impactOnRate < 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                          Rate impact: {metric.impactOnRate > 0 ? '+' : ''}{metric.impactOnRate}bps
                        </span>
                      </div>
                    </div>
                  );
                })}

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Leaf className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Interest Rate Incentive</h4>
                      <p className="text-xs text-slate-700 leading-relaxed mb-3">
                        Combined ESG performance has earned a rate reduction of 35bps,
                        lowering the effective interest rate to {(selectedLoan.interestRate - 0.35).toFixed(2)}%.
                      </p>
                      <div className="text-xs text-emerald-600 font-medium">
                        ESG accountability built into loan economics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'audit' && (
              <div className="space-y-4">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Audit Trail</h3>
                  <p className="text-sm text-slate-600">Immutable record of all loan events and changes</p>
                </div>

                {[
                  { date: '2024-01-10 14:23', event: 'Covenant Alert', description: 'Interest coverage ratio dropped below 2.5x threshold', type: 'warning' },
                  { date: '2024-01-09 09:15', event: 'Payment Received', description: 'Quarterly interest payment of $3.2M processed', type: 'success' },
                  { date: '2024-01-05 16:42', event: 'ESG Report', description: 'Q4 2023 sustainability metrics submitted and verified', type: 'info' },
                  { date: '2024-01-03 11:30', event: 'Rate Adjustment', description: 'ESG performance bonus applied: -25bps rate reduction', type: 'success' },
                  { date: '2023-12-15 08:00', event: 'Covenant Check', description: 'All financial covenants verified in compliance', type: 'success' },
                  { date: '2023-12-10 14:20', event: 'Document Update', description: 'Amendment to smart clause SC-003 executed', type: 'info' },
                ].map((entry, i) => (
                  <div key={i} className="border border-slate-200 rounded-lg p-4 flex items-start space-x-4">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      entry.type === 'success' ? 'bg-green-600' :
                      entry.type === 'warning' ? 'bg-amber-600' :
                      'bg-blue-600'
                    }`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-900">{entry.event}</span>
                        <span className="text-xs text-slate-500">{entry.date}</span>
                      </div>
                      <p className="text-xs text-slate-600">{entry.description}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Regulatory Transparency</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Complete audit trail maintained for regulatory compliance. All events are timestamped,
                        cryptographically signed, and immutable. Audit-ready by design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
