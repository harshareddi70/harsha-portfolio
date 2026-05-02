export const personal = {
  name: 'Harsha Vardhan Reddy Vippala',
  firstName: 'Harsha',
  title: 'Data Analyst',
  location: 'Troy, Michigan',
  email: 'harshareddi.70@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harshavippala1',
  summary:
    'Data Analyst with 4+ years of experience delivering data-driven insights and building scalable reporting solutions across supply chain and business operations. Strong expertise in SQL, Power BI, and Python — with proven impact: 60% reduction in manual reporting effort and 12% reduction in distribution costs.',
  resume: '/Harsha_Data_Analyst_Resume.pdf',
}

export const skills = [
  {
    category: 'BI & Reporting',
    icon: '📊',
    items: ['Power BI', 'Tableau', 'Excel', 'DAX', 'Power Automate'],
  },
  {
    category: 'Data & Querying',
    icon: '🗄️',
    items: ['SQL', 'T-SQL', 'Python', 'Pandas', 'NumPy'],
  },
  {
    category: 'Analytics & Modeling',
    icon: '📈',
    items: ['Demand Forecasting', 'Regression Analysis', 'Data Modeling', 'KPI Design'],
  },
  {
    category: 'Cloud & Data Engineering',
    icon: '☁️',
    items: ['Snowflake', 'Azure Data Factory', 'Azure Data Lake', 'Databricks', 'DBT'],
  },
  {
    category: 'Business & Operations',
    icon: '🔗',
    items: ['Supply Chain Analytics', 'Data Quality Frameworks', 'Anomaly Detection', 'Reporting Automation'],
  },
]

export const projects = [
  {
    title: 'Supply Chain KPI Analysis',
    description:
      'End-to-end analytics pipeline on 180k+ row DataCo supply chain dataset. Cleaned messy raw data with pandas, engineered KPI flags (on-time delivery, late delivery, profit margin), built 7 EDA charts and a full KPI dashboard. Key finding: 57.3% late delivery rate concentrated in specific shipping modes — a major operational risk.',
    tech: ['Python', 'pandas', 'SQL', 'Snowflake SQL', 'matplotlib', 'seaborn'],
    github: 'https://github.com/harshareddi70/supply-chain-kpi-analysis',
    impact: '57.3% late delivery rate identified across 180k orders',
  },
]

export const experience = [
  {
    role: 'Data Analyst',
    company: 'Blue Yonder',
    duration: 'May 2023 – Present',
    location: 'Dallas, TX (Remote)',
    description:
      'Supply chain analytics, BI, and forecasting. Partnering with supply chain and data science teams to improve inventory visibility, logistics performance, and reporting reliability.',
    highlights: [
      'Automated end-to-end report distribution using Power Automate — reducing manual reporting effort by 60% and eliminating recurring ad-hoc requests',
      'Partnered with logistics and supply chain managers on cost and delivery performance analysis, contributing to a 12% reduction in distribution costs',
      'Developed Power BI dashboards to track inventory health, logistics delays, and on-time delivery performance, leveraging Tableau for additional visualization needs',
      'Designed data pipelines and data models within Azure Data Lake for centralized and scalable reporting and analytics',
      'Established data validation and anomaly detection routines across Snowflake and Power BI pipelines, ensuring accuracy in daily KPI dashboards',
      'Developed analytical models for demand forecasting and trend analysis using Python, integrated results into Power BI dashboards',
    ],
    tech: ['SQL', 'Power BI', 'Tableau', 'Python', 'Snowflake', 'Azure Data Factory', 'Power Automate', 'DAX'],
  },
  {
    role: 'Data Analyst',
    company: 'Cimpress India Pvt Ltd',
    duration: 'Jun 2021 – Dec 2022',
    location: 'Bangalore, India',
    description:
      'Sales analytics, BI reporting, and cloud data migration. Built dashboards across sales and marketing teams, replacing manual Excel-based reporting.',
    highlights: [
      'Designed and automated Power BI and Tableau dashboards combining sales, customer, and financial datasets for performance tracking',
      'Optimized SQL queries, stored procedures, views, and indexes — reducing execution time on heavy reporting queries by 30%',
      'Leveraged Python (pandas, NumPy) for data cleansing and exploratory analysis, uncovering customer churn patterns that shaped the retention team\'s next campaign',
      'Implemented automated data quality and validation checks in SQL and Python before report publication, strengthening stakeholder trust',
      'Built parameterized Power BI reports with dynamic DAX measures, enabling self-service analysis and reducing ad-hoc data requests',
      'Supported cloud migration of legacy SQL Server reports to Snowflake and Azure Synapse, validating output accuracy before production cutover',
    ],
    tech: ['SQL', 'Power BI', 'Tableau', 'Python', 'Excel', 'Snowflake', 'Azure Data Factory', 'DAX'],
  },
]

export const education = [
  {
    degree: 'M.S. in Information Systems',
    school: 'Central Michigan University',
    location: 'Mount Pleasant, MI, USA',
    duration: 'Jan 2023 – Dec 2024',
    coursework: ['Application Development', 'Data Visualization', 'Database Management for Business Systems'],
  },
]
