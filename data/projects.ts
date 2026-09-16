import type { Project } from './types';

/**
 * Client work delivered at Tark Technologies LLP.
 *
 * All four are client-confidential: source and UI are under NDA, so no
 * repository links or screenshots exist for any of them. Each is presented
 * through its domain, problem, solution and architecture instead.
 */
export const projects: Project[] = [
  {
    id: 'cheese-mes',
    name: 'Cheese Manufacturing Execution & Traceability System',
    domain: 'Manufacturing / Food Production',
    summary:
      'A centralised MES for a US-based cheese manufacturer, modelling the full production lifecycle as one traceable workflow.',
    status: 'shipped',
    problem:
      'Production tracking ran on manual, paper-based records. With no single system of record spanning intake to shipment, tracing a finished product back to the raw milk it came from meant reconstructing the trail by hand across disconnected paperwork.',
    solution:
      'A centralised Manufacturing Execution System modelling milk receiving, quality testing, silo management, cheese production, packaging and shipment as one continuous, traceable workflow rather than a set of isolated stages.',
    contributions: [
      'Implemented end-to-end batch traceability linking every finished product back to its originating raw milk lot.',
      'Built production monitoring across the processing stages so operational state is visible as it happens rather than after the fact.',
      'Delivered inventory management and operational reporting over the same domain model.',
      'Designed the relational schema underpinning the lifecycle, and the ASP.NET Core Web API and Angular UI on top of it.',
    ],
    stack: [
      'ASP.NET Core',
      'Angular',
      'SQL Server',
      'Entity Framework Core',
      'Web API',
    ],
    workflow: [
      'Milk Receiving',
      'Quality Testing',
      'Silo Management',
      'Cheese Production',
      'Packaging',
      'Shipment',
    ],
  },
  {
    id: 'financial-processing',
    name: 'Financial Transaction Processing & Expense Management',
    domain: 'Fintech / Document Automation',
    summary:
      'Automated bank statement ingestion with a rule-based categorisation engine replacing manual financial data entry.',
    status: 'shipped',
    problem:
      'Financial record-keeping depended on manually transcribing bank statements and classifying every transaction by hand — slow, repetitive, and a steady source of entry errors.',
    solution:
      'An automated processing pipeline that ingests bank statements, derives structured transactions from them, and drives downstream expense records and notifications from the result — turning a manual transcription task into a document-processing workflow.',
    contributions: [
      'Automated bank statement processing and financial record management, eliminating manual data entry.',
      'Designed a rule-based categorisation engine that maps each transaction to its category, subcategory and participant automatically.',
      'Triggered expense record creation and email notifications on successful document processing.',
      'Modelled the transaction and categorisation domain in PostgreSQL via Entity Framework Core.',
    ],
    stack: [
      'ASP.NET Core',
      'PostgreSQL',
      'Entity Framework Core',
      'Web API',
    ],
    workflow: [
      'Statement Upload',
      'Document Processing',
      'Transaction Extraction',
      'Rule-Based Categorisation',
      'Expense Records',
      'Email Notification',
    ],
  },
  {
    id: 'agri-oms',
    name: 'Agricultural Equipment Order Management System',
    domain: 'Agriculture / Manufacturing',
    summary:
      'Order lifecycle management for an agricultural equipment manufacturer, centralising tracking across dealers and internal teams.',
    status: 'shipped',
    problem:
      'Orders moved between dealers, retailers, production and dispatch with tracking fragmented across the parties involved, leaving no shared view of where any given order actually stood.',
    solution:
      'An order management platform covering the full lifecycle from dealer and retailer placement through production, dispatch and delivery, with a single source of truth shared by dealers and internal teams.',
    contributions: [
      'Built order lifecycle management spanning placement, production, dispatch and delivery.',
      'Centralised order tracking across dealers, retailers and internal teams.',
      'Modelled configurable products — seed drills, cultivators, rotavators, spare parts and accessories — so each order captures its own product-specific configuration data.',
      'Delivered the ASP.NET Core Web API and Angular front end over a SQL Server schema.',
    ],
    stack: ['ASP.NET Core', 'Angular', 'SQL Server', 'Web API'],
    workflow: [
      'Dealer / Retailer Order',
      'Configuration Capture',
      'Production',
      'Dispatch',
      'Delivery',
    ],
  },
  {
    id: 'pos-restaurant',
    name: 'Point of Sale & Restaurant Management System',
    domain: 'Retail / Food & Beverage',
    summary:
      'A multi-outlet POS platform covering order processing, billing, payments and inventory under per-outlet access control.',
    status: 'in-development',
    problem:
      'Multi-outlet food and beverage operations need consistent order, billing and inventory handling across locations, while keeping each outlet’s data and operations scoped to the staff who work there.',
    solution:
      'A multi-outlet POS platform covering order processing, billing, payment management and inventory tracking, with menu management, sales reporting and cashier-operation modules governed by per-outlet role-based access control.',
    contributions: [
      'Developing order processing, billing and payment management across multiple outlets.',
      'Building inventory tracking and menu management shared across the outlet model.',
      'Implementing per-outlet role-based access control over cashier operations and reporting.',
      'Delivering sales reporting over the transactional schema.',
    ],
    stack: ['ASP.NET Core', 'Angular', 'SQL Server', 'Web API'],
  },
];
