import type { AlgoCapability, AlgoProject, FlowNode } from './types';

/**
 * Personal technical exploration — explicitly NOT professional employment.
 *
 * Nothing in this file makes a performance, profitability or returns claim,
 * and nothing should be added that does. The purpose of this section is to
 * demonstrate event-driven architecture, API integration and systems
 * thinking, not trading outcomes.
 */

export const algoIntro =
  'Outside of client work I build trading automation for MetaTrader 5 — Expert Advisors in MQL5 paired with an ASP.NET Core middleware layer. It is a personal engineering sandbox: an excuse to work on event-driven systems, real-time integration between processes that were never designed to talk to each other, and software that has to run unattended and fail safely.';

export const algoDisclaimer =
  'A personal side interest, not professional experience or a financial service. Nothing here is investment advice, and no performance or profitability claims are made or implied.';

export const algoProjects: AlgoProject[] = [
  {
    id: 'liquidity-sweep',
    name: 'Gold Liquidity Sweep EA',
    status: 'built',
    description:
      'An Expert Advisor that tracks the Asian session range, identifies sweeps of that range, and takes entries on Break of Structure confirmation during the London session.',
    details: [
      'Asian session high/low range detection',
      'Liquidity sweep identification',
      'Break of Structure entry confirmation',
      'Automated position and risk handling',
    ],
  },
  {
    id: 'auto-fibonacci',
    name: 'Auto Fibonacci Retracement EA',
    status: 'built',
    description:
      'A multi-timeframe Expert Advisor that detects price swings programmatically, waits for a retracement into a configured Fibonacci level, and enters on confirmation.',
    details: [
      'Multi-timeframe swing analysis',
      'ZigZag-based swing detection',
      'Configurable Fibonacci retracement entries',
      'Configurable trailing stop',
    ],
  },
  {
    id: 'linear-grid',
    name: 'Linear Grid Incremental Lot EA',
    status: 'in-development',
    description:
      'A grid-based Expert Advisor with parameterised position sizing, used to explore state management across a series of related open positions.',
    details: [
      'Grid-based entry sequencing',
      'Incremental position sizing rules',
      'Configurable grid spacing',
      'Aggregate position state management',
    ],
  },
];

export const algoCapabilities: AlgoCapability[] = [
  {
    title: 'Event-driven integration',
    description:
      'TradingView alerts arrive as webhooks at an ASP.NET Core endpoint, which validates and translates them into commands for the terminal.',
    icon: 'link',
  },
  {
    title: '.NET middleware',
    description:
      'An ASP.NET Core layer sits between cloud services and MetaTrader 5, providing secure, real-time communication between the two.',
    icon: 'server',
  },
  {
    title: 'Risk controls',
    description:
      'Position sizing, stop placement and exposure limits are configuration rather than hard-coded constants, so behaviour is tunable per strategy.',
    icon: 'sliders',
  },
  {
    title: 'Unattended operation',
    description:
      'Deployed to VPS infrastructure for 24/7 unattended operation — which makes failure handling and safe restarts a design requirement, not a nicety.',
    icon: 'cloud',
  },
];

/** TradingView alert → execution. */
export const signalFlow: FlowNode[] = [
  { label: 'TradingView', meta: 'Alert condition' },
  { label: 'Webhook', meta: 'HTTP POST' },
  { label: '.NET API', meta: 'ASP.NET Core', emphasis: true },
  { label: 'Validation', meta: 'Rules & risk checks', emphasis: true },
  { label: 'MetaTrader 5', meta: 'Terminal' },
  { label: 'Expert Advisor', meta: 'MQL5', emphasis: true },
  { label: 'Execution', meta: 'Order placed' },
];

/** Master/slave trade replication. */
export const copierFlow: FlowNode[] = [
  { label: 'Master MT5', meta: 'Source terminal' },
  { label: 'Trade Event', meta: 'Open / modify / close' },
  { label: 'Communication Layer', meta: '.NET middleware', emphasis: true },
  { label: 'Slave MT5', meta: 'Target terminal' },
];
