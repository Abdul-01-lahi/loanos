import { Leaf, TrendingDown, TrendingUp, Target, CheckCircle2, ArrowDown } from 'lucide-react';
import { loans, esgMetrics } from '../mockData';

export default function GreenerLending() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const portfolioESGScore = Math.round(
    loans.reduce((sum, loan) => sum + loan.esgScore, 0) / loans.length
  );

  const totalRateReduction = esgMetrics
    .filter((m) => m.impactOnRate < 0)
    .reduce((sum, m) => sum + Math.abs(m.impactOnRate), 0);

  const sustainabilityImpacts = [
    {
      category: 'Carbon Emissions',
      baseline: 1250,
      current: 1025,
      target: 950,
      unit: 'tCO2e',
      reduction: 18,
      rateImpact: -0.25,
    },
    {
      category: 'Renewable Energy',
      baseline: 35,
      current: 68,
      target: 75,
      unit: '% of total',
      improvement: 94,
      rateImpact: -0.15,
    },
    {
      category: 'Water Consumption',
      baseline: 1500,
      current: 1150,
      target: 1000,
      unit: 'm³/M revenue',
      reduction: 23,
      rateImpact: 0.0,
    },
    {
      category: 'Waste Recycling',
      baseline: 55,
      current: 81,
      target: 85,
      unit: '% recycled',
      improvement: 47,
      rateImpact: -0.05,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Greener Lending Module</h1>
          <p className="text-slate-600">Sustainability-linked lending with measurable environmental impact</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">{portfolioESGScore}</div>
            <div className="text-sm text-slate-600">Portfolio ESG Score</div>
            <div className="mt-3 text-xs text-emerald-600 font-medium">
              +12 pts vs. last year
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">87%</div>
            <div className="text-sm text-slate-600">Targets Achieved</div>
            <div className="mt-3 text-xs text-slate-500">
              13 of 15 ESG commitments met
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">-{totalRateReduction.toFixed(0)}bps</div>
            <div className="text-sm text-slate-600">Rate Reduction Earned</div>
            <div className="mt-3 text-xs text-green-600 font-medium">
              ESG performance incentive
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-violet-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-slate-900 mb-1">22%</div>
            <div className="text-sm text-slate-600">Carbon Reduction</div>
            <div className="mt-3 text-xs text-slate-500">
              Portfolio-wide improvement
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {sustainabilityImpacts.map((impact) => {
            const isReduction = impact.category.includes('Carbon') || impact.category.includes('Water');
            const progress = isReduction
              ? ((impact.baseline - impact.current) / (impact.baseline - impact.target)) * 100
              : ((impact.current - impact.baseline) / (impact.target - impact.baseline)) * 100;
            const onTrack = progress >= 70;

            return (
              <div key={impact.category} className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">{impact.category}</h3>
                    <p className="text-xs text-slate-600">
                      Target: {impact.target} {impact.unit}
                    </p>
                  </div>
                  {onTrack ? (
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-green-50 text-green-600 border border-green-200">
                      On Track
                    </span>
                  ) : (
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-amber-50 text-amber-600 border border-amber-200">
                      In Progress
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Baseline</div>
                    <div className="text-lg font-semibold text-slate-900">
                      {impact.baseline}
                      <span className="text-xs text-slate-600 ml-1">{impact.unit}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Current</div>
                    <div className="text-lg font-semibold text-emerald-600">
                      {impact.current}
                      <span className="text-xs text-emerald-600 ml-1">{impact.unit}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Target</div>
                    <div className="text-lg font-semibold text-blue-600">
                      {impact.target}
                      <span className="text-xs text-blue-600 ml-1">{impact.unit}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-600">Progress to target</span>
                    <span className="text-xs font-semibold text-slate-900">{Math.min(progress, 100).toFixed(0)}%</span>
                  </div>
                  <div className="bg-slate-100 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${onTrack ? 'bg-green-600' : 'bg-amber-500'}`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    {isReduction ? (
                      <TrendingDown className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    )}
                    <span className="text-xs text-slate-600">
                      {isReduction
                        ? `${((1 - impact.current / impact.baseline) * 100).toFixed(0)}% reduction achieved`
                        : `${((impact.current / impact.baseline - 1) * 100).toFixed(0)}% improvement achieved`}
                    </span>
                  </div>
                  <div className={`text-xs font-semibold ${
                    impact.rateImpact < 0 ? 'text-green-600' : impact.rateImpact > 0 ? 'text-red-600' : 'text-slate-600'
                  }`}>
                    {impact.rateImpact !== 0 && (
                      <>
                        {impact.rateImpact > 0 ? '+' : ''}
                        {impact.rateImpact}bps
                      </>
                    )}
                    {impact.rateImpact === 0 && 'Neutral'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-8 mb-8 text-white">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Leaf className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">How Sustainability-Linked Lending Works</h2>
              <p className="text-emerald-50 leading-relaxed mb-6">
                Loan terms are dynamically adjusted based on measurable environmental and social performance.
                Borrowers who exceed sustainability targets earn interest rate reductions, while those who fall
                short may face rate increases. This creates powerful economic incentives for positive impact.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">-45bps</div>
                  <div className="text-sm text-emerald-100">
                    Average rate reduction for top ESG performers
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">$8.5M</div>
                  <div className="text-sm text-emerald-100">
                    Annual savings earned through ESG incentives
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm text-emerald-100">
                    Third-party verified sustainability metrics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Interest Rate Impact by Performance</h2>
          <div className="space-y-4">
            {loans.map((loan) => {
              const esgImpact = ((loan.esgScore - 50) / 50) * -0.5;
              const adjustedRate = loan.interestRate + esgImpact;

              return (
                <div key={loan.id} className="border border-slate-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">{loan.borrower}</div>
                      <div className="text-xs text-slate-600">{loan.id}</div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-xs text-slate-500 mb-1">ESG Score</div>
                        <div className="text-lg font-semibold text-slate-900">{loan.esgScore}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 mb-1">Base Rate</div>
                        <div className="text-lg font-semibold text-slate-900">{loan.interestRate}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 mb-1">ESG Adjustment</div>
                        <div className={`text-lg font-semibold ${esgImpact < 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {esgImpact > 0 ? '+' : ''}{esgImpact.toFixed(2)}%
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 mb-1">Effective Rate</div>
                        <div className="text-lg font-semibold text-blue-600">{adjustedRate.toFixed(2)}%</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    {esgImpact < -0.2 && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Strong ESG performance bonus applied</span>
                      </div>
                    )}
                    {esgImpact >= -0.2 && esgImpact < 0 && (
                      <div className="flex items-center space-x-1 text-blue-600">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>ESG performance bonus applied</span>
                      </div>
                    )}
                    {esgImpact >= 0 && (
                      <div className="flex items-center space-x-1 text-amber-600">
                        <Target className="w-3 h-3" />
                        <span>Opportunity for rate reduction through improved ESG performance</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-lg border border-emerald-200 p-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">ESG Accountability</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sustainability commitments built directly into loan economics with transparent tracking
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-200 p-6">
            <Target className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Measurable Impact</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Third-party verified metrics ensure credibility and prevent greenwashing
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-slate-50 rounded-lg border border-violet-200 p-6">
            <Leaf className="w-8 h-8 text-violet-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Aligned Incentives</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Economic rewards for environmental progress align borrower and lender interests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
