export type RiskLevel = 'Low' | 'Medium' | 'High';
export type LoanStatus = 'Active' | 'Pending' | 'Matured' | 'Default';

export interface Loan {
  id: string;
  borrower: string;
  sector: string;
  region: string;
  principal: number;
  interestRate: number;
  tenor: number;
  healthScore: number;
  riskLevel: RiskLevel;
  status: LoanStatus;
  esgScore: number;
  covenantCompliance: number;
  nextPaymentDate: string;
  originationDate: string;
  maturityDate: string;
}

export interface PortfolioMetrics {
  totalAUM: number;
  averageHealthScore: number;
  activeAlerts: number;
  totalLoans: number;
  esgImpactScore: number;
  covenantBreaches: number;
}

export interface Alert {
  id: string;
  loanId: string;
  severity: 'Critical' | 'Warning' | 'Info';
  message: string;
  timestamp: string;
}

export interface ESGMetric {
  category: string;
  target: number;
  actual: number;
  unit: string;
  impactOnRate: number;
}

export interface SmartClause {
  id: string;
  name: string;
  condition: string;
  action: string;
  status: 'Active' | 'Triggered' | 'Inactive';
}
