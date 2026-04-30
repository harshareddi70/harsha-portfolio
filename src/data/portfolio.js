export const personal = {
  name: 'Harsha Vardhan Reddy Vippala',
  firstName: 'Harsha',
  title: 'Data Analyst',
  location: 'Troy, Michigan',
  email: 'harshareddi.70@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harshavippala1',
  summary:
    'Data Analyst with 4+ years of experience in SQL, Power BI, and Python. Focused on supply chain analytics, dashboard automation, and data quality frameworks.',
  resume: '/Harsha_Data_Analyst_Resume.pdf',
}

export const skills = [
  {
    category: 'BI & Reporting',
    icon: '📊',
    items: ['Power BI', 'Tableau', 'Excel', 'DAX', 'SSRS'],
  },
  {
    category: 'Data & Querying',
    icon: '🗄️',
    items: ['SQL', 'T-SQL', 'Python', 'Pandas', 'NumPy'],
  },
  {
    category: 'Analytics & Modeling',
    icon: '📈',
    items: ['Forecasting', 'Statistical Analysis', 'Data Modeling', 'KPI Design'],
  },
  {
    category: 'Cloud & Data Engineering',
    icon: '☁️',
    items: ['Snowflake', 'Azure Data Factory', 'Databricks', 'Azure', 'ETL Pipelines'],
  },
  {
    category: 'Business & Operations',
    icon: '🔗',
    items: ['Supply Chain Analytics', 'Inventory Management', 'Demand Planning', 'Reporting Automation'],
  },
]

export const projects = [
  {
    title: 'Supply Chain KPI Dashboard',
    description:
      'End-to-end Power BI dashboard tracking supply chain performance metrics across procurement, inventory, and fulfillment for enterprise clients.',
    tech: ['Power BI', 'SQL', 'Azure Data Factory', 'Snowflake'],
    impact: 'Case study in progress',
  },
  {
    title: 'Inventory Reconciliation & Variance Analysis',
    description:
      'SQL-based reconciliation framework comparing system inventory records against physical counts to surface discrepancy patterns and root causes.',
    tech: ['SQL', 'Python', 'Excel', 'Power BI'],
    impact: 'Coming soon',
  },
  {
    title: 'Forecasting & Reporting Automation',
    description:
      'Automated demand forecasting pipeline and scheduled reporting system that reduces manual analyst effort and improves forecast accuracy for planning teams.',
    tech: ['Python', 'Pandas', 'SQL', 'Azure'],
    impact: 'Coming soon',
  },
]

export const experience = [
  {
    role: 'Data Analyst',
    company: 'Blue Yonder',
    duration: '2023 – Present',
    location: 'Troy, Michigan',
    description:
      'Working on supply chain analytics and business intelligence solutions for enterprise clients. Building automated dashboards, data pipelines, and quality frameworks that drive operational efficiency.',
    highlights: [
      'Designed and deployed Power BI dashboards tracking key supply chain KPIs across procurement and fulfillment',
      'Built SQL-based validation and reconciliation pipelines reducing reporting errors significantly',
      'Supported forecasting workflows by preparing and validating demand planning datasets',
      'Automated ETL workflows using Azure Data Factory and Databricks, cutting manual processing time',
    ],
    tech: ['SQL', 'Power BI', 'Python', 'Azure', 'Snowflake', 'Databricks'],
  },
  {
    role: 'Data Analytics Project',
    company: 'Cimpress',
    duration: '2021 – 2023',
    location: 'Remote',
    description:
      'Delivered a data analytics engagement focused on improving reporting accuracy and operational visibility across business units through SQL-driven reconciliation and Power BI dashboards.',
    highlights: [
      'Developed Power BI dashboards to monitor inventory and operations KPIs for stakeholder reporting',
      'Wrote SQL validation queries for inventory reconciliation and variance root-cause analysis',
      'Automated recurring reports to reduce analyst turnaround time on weekly business reviews',
      'Contributed to supply chain data quality reviews identifying gaps in source-system records',
    ],
    tech: ['SQL', 'Power BI', 'Python', 'Excel'],
  },
]
