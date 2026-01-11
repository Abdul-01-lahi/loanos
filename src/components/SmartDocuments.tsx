import { useState } from 'react';
import { FileText, Code, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function SmartDocuments() {
  const [viewMode, setViewMode] = useState<'legal' | 'logic'>('legal');

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Smart Loan Documents</h1>
          <p className="text-slate-600">Machine-readable contracts with human-readable legal text</p>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 mb-6">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-1">
                  Senior Secured Credit Agreement - TechCorp Industries Ltd.
                </h2>
                <p className="text-sm text-slate-600">Loan ID: LN-2024-001 • Executed: February 15, 2023</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('legal')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'legal'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Legal View</span>
                </button>
                <button
                  onClick={() => setViewMode('logic')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'logic'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Code className="w-4 h-4" />
                  <span>Logic View</span>
                </button>
              </div>
            </div>
          </div>

          {viewMode === 'legal' && (
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                  Article IV - Financial Covenants
                </h3>
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <p className="pl-6 border-l-2 border-blue-600">
                    <span className="font-semibold">Section 4.01 - Minimum EBITDA.</span> The Borrower shall maintain,
                    as of the last day of each fiscal quarter, consolidated EBITDA of not less than Fifty Million Dollars
                    ($50,000,000) for any period of two (2) consecutive fiscal quarters. In the event of non-compliance
                    with this covenant for two consecutive quarters, the applicable margin shall automatically increase
                    by fifty (50) basis points, and the Lender shall be notified within two (2) business days.
                  </p>
                  <p className="pl-6 border-l-2 border-slate-300">
                    <span className="font-semibold">Section 4.02 - Maximum Leverage Ratio.</span> The Borrower shall not
                    permit the ratio of (a) consolidated total indebtedness to (b) consolidated total equity to exceed
                    3.00 to 1.00 as of the last day of any fiscal quarter. Breach of this covenant shall restrict the
                    Borrower's ability to incur additional indebtedness and trigger a mandatory review of credit terms.
                  </p>
                  <p className="pl-6 border-l-2 border-slate-300">
                    <span className="font-semibold">Section 4.03 - Interest Coverage Ratio.</span> The Borrower shall
                    maintain a ratio of (a) consolidated EBIT to (b) consolidated interest expense of not less than 2.50
                    to 1.00 as of the last day of each fiscal quarter. Failure to maintain this ratio shall trigger
                    accelerated amortization schedules and increased cash reserve requirements.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                  Article V - Sustainability-Linked Provisions
                </h3>
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <p className="pl-6 border-l-2 border-emerald-600">
                    <span className="font-semibold">Section 5.01 - ESG Performance Targets.</span> The Borrower commits
                    to achieving measurable improvements in environmental, social, and governance metrics as set forth
                    in Schedule E. Achievement of carbon intensity reduction targets exceeding fifteen percent (15%)
                    year-over-year shall result in a reduction of the applicable margin by twenty-five (25) basis points
                    for the succeeding interest period.
                  </p>
                  <p className="pl-6 border-l-2 border-slate-300">
                    <span className="font-semibold">Section 5.02 - ESG Reporting Obligations.</span> The Borrower shall
                    provide quarterly sustainability reports verified by an independent third party, detailing progress
                    against established targets including carbon emissions, renewable energy usage, water consumption,
                    and waste recycling rates.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                  Article VI - Events of Default and Remedies
                </h3>
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <p className="pl-6 border-l-2 border-red-600">
                    <span className="font-semibold">Section 6.01 - Material Adverse Change.</span> In the event the
                    Borrower experiences a credit rating downgrade of more than two (2) notches by any major rating
                    agency, the Lender may declare an Event of Default and require mandatory prepayment of twenty-five
                    percent (25%) of outstanding principal, with mandatory renegotiation of loan terms.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">Beyond PDFs</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      This legal text is simultaneously represented in machine-readable format,
                      enabling automated monitoring, enforcement, and compliance verification.
                      Switch to Logic View to see the executable representation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {viewMode === 'logic' && (
            <div className="p-8 space-y-6">
              <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
                <div className="text-emerald-400 mb-4">// Financial Covenants - Machine Executable Logic</div>

                <div className="space-y-6">
                  <div className="bg-slate-800 rounded p-4">
                    <div className="text-blue-400 mb-2">covenant MinimumEBITDA {`{`}</div>
                    <div className="pl-4 space-y-1">
                      <div className="text-slate-300">id: <span className="text-amber-400">"SC-001"</span></div>
                      <div className="text-slate-300">name: <span className="text-amber-400">"Minimum EBITDA Requirement"</span></div>
                      <div className="text-slate-300">status: <span className="text-green-400">ACTIVE</span></div>
                      <div className="text-slate-300 mt-2">condition: {`{`}</div>
                      <div className="pl-4 space-y-1">
                        <div className="text-slate-300">metric: <span className="text-amber-400">"EBITDA"</span></div>
                        <div className="text-slate-300">operator: <span className="text-amber-400">"LESS_THAN"</span></div>
                        <div className="text-slate-300">threshold: <span className="text-purple-400">50000000</span></div>
                        <div className="text-slate-300">period: <span className="text-amber-400">"2_CONSECUTIVE_QUARTERS"</span></div>
                      </div>
                      <div className="text-slate-300">{`}`}</div>
                      <div className="text-slate-300 mt-2">actions: [</div>
                      <div className="pl-4 space-y-1">
                        <div className="text-slate-300">{`{ type: `}<span className="text-amber-400">"ADJUST_MARGIN"</span>, value: <span className="text-purple-400">0.50</span> {`}`},</div>
                        <div className="text-slate-300">{`{ type: `}<span className="text-amber-400">"NOTIFY_LENDER"</span>, priority: <span className="text-amber-400">"HIGH"</span> {`}`}</div>
                      </div>
                      <div className="text-slate-300">]</div>
                    </div>
                    <div className="text-blue-400">{`}`}</div>
                  </div>

                  <div className="bg-slate-800 rounded p-4">
                    <div className="text-blue-400 mb-2">covenant MaxLeverageRatio {`{`}</div>
                    <div className="pl-4 space-y-1">
                      <div className="text-slate-300">id: <span className="text-amber-400">"SC-002"</span></div>
                      <div className="text-slate-300">name: <span className="text-amber-400">"Maximum Debt-to-Equity"</span></div>
                      <div className="text-slate-300">status: <span className="text-green-400">ACTIVE</span></div>
                      <div className="text-slate-300 mt-2">condition: {`{`}</div>
                      <div className="pl-4 space-y-1">
                        <div className="text-slate-300">metric: <span className="text-amber-400">"DEBT_TO_EQUITY"</span></div>
                        <div className="text-slate-300">operator: <span className="text-amber-400">"GREATER_THAN"</span></div>
                        <div className="text-slate-300">threshold: <span className="text-purple-400">3.0</span></div>
                      </div>
                      <div className="text-slate-300">{`}`}</div>
                      <div className="text-slate-300 mt-2">actions: [</div>
                      <div className="pl-4 space-y-1">
                        <div className="text-slate-300">{`{ type: `}<span className="text-amber-400">"RESTRICT_BORROWING"</span> {`}`},</div>
                        <div className="text-slate-300">{`{ type: `}<span className="text-amber-400">"TRIGGER_REVIEW"</span> {`}`}</div>
                      </div>
                      <div className="text-slate-300">]</div>
                    </div>
                    <div className="text-blue-400">{`}`}</div>
                  </div>

                  <div className="bg-slate-800 rounded p-4">
                    <div className="text-emerald-400 mb-2">covenant ESGPerformanceBonus {`{`}</div>
                    <div className="pl-4 space-y-1">
                      <div className="text-slate-300">id: <span className="text-amber-400">"SC-003"</span></div>
                      <div className="text-slate-300">name: <span className="text-amber-400">"ESG Performance Incentive"</span></div>
                      <div className="text-slate-300">status: <span className="text-green-400">ACTIVE</span></div>
                      <div className="text-slate-300 mt-2">condition: {`{`}</div>
                      <div className="pl-4 space-y-1">
                        <div className="text-slate-300">metric: <span className="text-amber-400">"CARBON_REDUCTION_YOY"</span></div>
                        <div className="text-slate-300">operator: <span className="text-amber-400">"GREATER_THAN"</span></div>
                        <div className="text-slate-300">threshold: <span className="text-purple-400">15</span></div>
                        <div className="text-slate-300">unit: <span className="text-amber-400">"PERCENT"</span></div>
                      </div>
                      <div className="text-slate-300">{`}`}</div>
                      <div className="text-slate-300 mt-2">actions: [</div>
                      <div className="pl-4 space-y-1">
                        <div className="text-slate-300">{`{ type: `}<span className="text-amber-400">"REDUCE_MARGIN"</span>, value: <span className="text-purple-400">-0.25</span> {`}`}</div>
                      </div>
                      <div className="text-slate-300">]</div>
                    </div>
                    <div className="text-emerald-400">{`}`}</div>
                  </div>

                  <div className="bg-slate-800 rounded p-4">
                    <div className="text-red-400 mb-2">covenant MaterialAdverseChange {`{`}</div>
                    <div className="pl-4 space-y-1">
                      <div className="text-slate-300">id: <span className="text-amber-400">"SC-005"</span></div>
                      <div className="text-slate-300">name: <span className="text-amber-400">"Material Adverse Change"</span></div>
                      <div className="text-slate-300">status: <span className="text-green-400">ACTIVE</span></div>
                      <div className="text-slate-300 mt-2">condition: {`{`}</div>
                      <div className="pl-4 space-y-1">
                        <div className="text-slate-300">metric: <span className="text-amber-400">"CREDIT_RATING_DOWNGRADE"</span></div>
                        <div className="text-slate-300">operator: <span className="text-amber-400">"GREATER_THAN"</span></div>
                        <div className="text-slate-300">threshold: <span className="text-purple-400">2</span></div>
                        <div className="text-slate-300">unit: <span className="text-amber-400">"NOTCHES"</span></div>
                      </div>
                      <div className="text-slate-300">{`}`}</div>
                      <div className="text-slate-300 mt-2">actions: [</div>
                      <div className="pl-4 space-y-1">
                        <div className="text-slate-300">{`{ type: `}<span className="text-amber-400">"MANDATORY_PREPAYMENT"</span>, percentage: <span className="text-purple-400">25</span> {`}`},</div>
                        <div className="text-slate-300">{`{ type: `}<span className="text-amber-400">"RENEGOTIATE_TERMS"</span>, mandatory: <span className="text-green-400">true</span> {`}`}</div>
                      </div>
                      <div className="text-slate-300">]</div>
                    </div>
                    <div className="text-red-400">{`}`}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Machine-Readable Format</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Contract logic is represented in structured, executable format enabling
                        real-time monitoring and automated enforcement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Legal Certainty</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Logic view is derived directly from legal text, ensuring consistency
                        between human and machine interpretation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-200 p-6">
            <CheckCircle2 className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Manual Process Eliminated</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Contract terms are monitored automatically, eliminating manual covenant tracking
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-lg border border-emerald-200 p-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Real-Time Compliance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Covenant status is continuously evaluated against live financial data
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-slate-50 rounded-lg border border-violet-200 p-6">
            <CheckCircle2 className="w-8 h-8 text-violet-600 mb-4" />
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Audit-Ready Documentation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All contract logic and execution history is transparent and verifiable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
