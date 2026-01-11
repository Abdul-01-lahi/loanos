import { TrendingUp, Shield, CheckCircle2, Info, DollarSign } from 'lucide-react';
import { loans } from '../mockData';

export default function LoanTrading() {
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

  const tradingPositions = loans.map((loan) => ({
    ...loan,
    availableAmount: loan.principal * 0.3,
    minimumTicket: loan.principal * 0.05,
    lastTrade: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    lastPrice: 98 + Math.random() * 4,
    volume24h: Math.floor(Math.random() * 50) + 10,
  }));

  const recentTrades = [
    { id: 'TRD-001', loanId: 'LN-2024-001', buyer: 'Institutional Investor A', amount: 25000000, price: 99.8, date: '2024-01-10' },
    { id: 'TRD-002', loanId: 'LN-2024-002', buyer: 'Asset Manager B', amount: 18000000, price: 101.2, date: '2024-01-09' },
    { id: 'TRD-003', loanId: 'LN-2024-003', buyer: 'Pension Fund C', amount: 12500000, price: 97.5, date: '2024-01-08' },
    { id: 'TRD-004', loanId: 'LN-2024-001', buyer: 'Insurance Company D', amount: 30000000, price: 99.5, date: '2024-01-07' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Transparent Loan Trading</h1>
          <p className="text-slate-600">Efficient secondary market with real-time loan health transparency</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">
              {formatCurrency(tradingPositions.reduce((sum, p) => sum + p.availableAmount, 0))}
            </div>
            <div className="text-sm text-slate-600">Available Positions</div>
            <div className="mt-3 text-xs text-slate-500">
              {tradingPositions.length} loans available for trading
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">142</div>
            <div className="text-sm text-slate-600">Trades (30 days)</div>
            <div className="mt-3 text-xs text-green-600 font-medium">
              +24% vs. previous period
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-violet-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">99.2%</div>
            <div className="text-sm text-slate-600">Avg Price/Par</div>
            <div className="mt-3 text-xs text-slate-500">
              Near-par trading with transparency
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">2.3 days</div>
            <div className="text-sm text-slate-600">Avg Settlement Time</div>
            <div className="mt-3 text-xs text-emerald-600 font-medium">
              Faster liquidity enabled
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 mb-8">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Available Loan Positions</h2>
              <div className="flex items-center space-x-2 text-xs text-slate-600">
                <Info className="w-4 h-4" />
                <span>All positions include real-time health metrics</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {tradingPositions.map((position) => (
                <div
                  key={position.id}
                  className="border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-base font-semibold text-slate-900">{position.borrower}</h3>
                        <span className="text-xs text-slate-500">{position.id}</span>
                        <span className={`text-xs px-2 py-1 rounded font-medium border ${getRiskColor(position.riskLevel)}`}>
                          {position.riskLevel} Risk
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-slate-600">
                        <span>{position.sector}</span>
                        <span>•</span>
                        <span>{position.region}</span>
                        <span>•</span>
                        <span>{position.interestRate}% APR</span>
                        <span>•</span>
                        <span>Maturity: {position.maturityDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">{position.healthScore}</div>
                        <div className="text-xs text-slate-500">Health</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">{position.esgScore}</div>
                        <div className="text-xs text-slate-500">ESG</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">{position.lastPrice.toFixed(2)}</div>
                        <div className="text-xs text-slate-500">Price/Par</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-4 pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Available Amount</div>
                      <div className="text-sm font-semibold text-slate-900">
                        {formatCurrency(position.availableAmount)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Minimum Ticket</div>
                      <div className="text-sm font-semibold text-slate-900">
                        {formatCurrency(position.minimumTicket)}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Covenant Status</div>
                      <div className="text-sm font-semibold text-green-600">
                        {position.covenantCompliance}% Compliant
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">24h Volume</div>
                      <div className="text-sm font-semibold text-slate-900">
                        {position.volume24h}M
                      </div>
                    </div>
                    <div className="flex items-end">
                      <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-slate-700">Full transparency on loan health</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-slate-700">Real-time covenant monitoring</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-slate-700">Complete audit trail</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Recent Trade History</h2>
            <div className="space-y-3">
              {recentTrades.map((trade) => {
                const loan = loans.find((l) => l.id === trade.loanId);
                return (
                  <div
                    key={trade.id}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-900 mb-1">{loan?.borrower}</div>
                      <div className="flex items-center space-x-3 text-xs text-slate-600">
                        <span>{trade.id}</span>
                        <span>•</span>
                        <span>{trade.buyer}</span>
                        <span>•</span>
                        <span>{trade.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">
                          {formatCurrency(trade.amount)}
                        </div>
                        <div className="text-xs text-slate-500">Trade Amount</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">{trade.price.toFixed(2)}</div>
                        <div className="text-xs text-slate-500">Price/Par</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Market Insights</h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Avg Bid-Ask Spread</div>
                <div className="text-2xl font-semibold text-slate-900 mb-2">0.42%</div>
                <div className="text-xs text-green-600 font-medium">Tight spreads via transparency</div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Market Depth</div>
                <div className="text-2xl font-semibold text-slate-900 mb-2">$315M</div>
                <div className="text-xs text-slate-600">Available within 2% of market</div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <div className="text-xs text-slate-600 mb-1">Price Discovery</div>
                <div className="text-2xl font-semibold text-slate-900 mb-2">Real-time</div>
                <div className="text-xs text-green-600 font-medium">Health-based pricing</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-200 p-6">
            <Shield className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Full Transparency</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Real-time loan health scores eliminate information asymmetry between buyers and sellers
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-lg border border-emerald-200 p-6">
            <TrendingUp className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Better Liquidity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent health metrics enable efficient price discovery and faster execution
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-slate-50 rounded-lg border border-violet-200 p-6">
            <CheckCircle2 className="w-8 h-8 text-violet-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Fractional Exposure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Access diversified loan portfolios with flexible position sizing and lower minimums
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
