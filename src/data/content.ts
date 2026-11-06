import { BusinessVertical, ServiceItem, IndustryItem, TransformationStage, TestimonialItem, ArticleItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Varnith Global',
  tagline: 'Building better teams, empowering better futures.',
  subheadline: 'We connect exceptional talent, professional development and intelligent technology to help businesses move forward.',
  statement: 'Great businesses are built by exceptional people, developed through continuous learning and empowered by technology.',
  phone: '(+91) 9391816116',
  phoneRaw: '+919391816116',
  email: 'info@varnithglobal.com',
  address: '4-36, 1st Floor, Vikash Nagar, Dilshuknagar, Hyderabad 500060, Telangana, India',
  whatsappUrl: 'https://wa.me/919391816116?text=Hello%20Varnith%20Global%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.',
  officeHours: 'Monday – Saturday: 9:00 AM – 6:30 PM IST',
  socials: {
    linkedin: 'https://linkedin.com/company/varnith-global',
    twitter: 'https://twitter.com/varnithglobal',
    instagram: 'https://instagram.com/varnithglobal',
    facebook: 'https://facebook.com/varnithglobal'
  }
};

export const BUSINESS_VERTICALS: BusinessVertical[] = [
  {
    id: 'hr',
    index: '01',
    title: 'HR Consulting & Talent Solutions',
    shortTitle: 'Talent & HR Solutions',
    tagline: 'Strategic talent acquisition, executive hiring, and end-to-end workforce optimization.',
    description: 'We connect visionary enterprises with game-changing talent across India and global markets. From retained executive search and RPO to DE&I hiring and talent intelligence, we build organizations that thrive.',
    badge: 'Primary Vertical',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80',
    highlightPoints: [
      'Precision Talent Acquisition & Niche Hiring',
      'End-to-End Recruitment Process Outsourcing (RPO)',
      'Leadership & C-Suite Executive Search',
      'Data-Driven Talent Intelligence & Workforce Planning'
    ],
    primaryServiceCount: '7 Specialized Practices'
  },
  {
    id: 'training',
    index: '02',
    title: 'Training & Development',
    shortTitle: 'Capability Development',
    tagline: 'Industry-aligned enterprise bootcamps and hands-on skill development programs.',
    description: 'Empowering professionals and corporate engineering cohorts with rigorous, mentor-led programs in DevOps, SAP Security, SAP GRC, Data Analytics, Software Testing, and Python architecture.',
    badge: 'Secondary Vertical',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    highlightPoints: [
      'Live Production Project Simulation & Labs',
      'Industry Veteran Instructors with 10+ Years Experience',
      'Corporate Team Upskilling & Custom Syllabi',
      'Recognized Certifications & Dedicated Career Guidance'
    ],
    primaryServiceCount: '8 In-Demand Curriculums'
  },
  {
    id: 'tech',
    index: '03',
    title: 'Technology & Digital Transformation',
    shortTitle: 'Technology & AI',
    tagline: 'Next-generation IT solutions, AI workflows, and digital engineering consulting.',
    description: 'Helping businesses modernize tech stacks, streamline workflows with intelligent automation, build cloud-native infrastructure, and leverage AI to unlock operational speed and competitive advantages.',
    badge: 'Third Vertical',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80',
    highlightPoints: [
      'Enterprise Cloud & DevOps Architecture',
      'AI & Intelligent Process Automation (IPA)',
      'Custom Software Engineering & Testing QA',
      'Strategic Technology Advisory & Modernization'
    ],
    primaryServiceCount: '5 Digital Transformation Pillars'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  // HR SERVICES (PRIMARY)
  {
    id: 'talent-acquisition',
    vertical: 'hr',
    title: 'Talent Acquisition',
    slug: 'talent-acquisition',
    summary: 'Precision candidate identification, screening, and placement tailored to your organizational goals.',
    description: 'At Varnith Global, we understand that exceptional talent is the cornerstone of any successful organization. Our tailored talent acquisition services help you identify, attract, and hire the best candidates across technology, consulting, and management domains.',
    category: 'HR Consulting',
    deliveryMode: 'Retained / Contingency Search',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Rigorous multi-stage candidate vetting and technical assessment',
      'Deep sourcing networks across tech hubs, Tier 1 campuses, and active leadership pools',
      'Market compensation benchmarking and candidate negotiation assistance',
      'Transparent tracking dashboards with guaranteed turnaround SLAs'
    ],
    benefits: [
      'Reduced time-to-hire by up to 45%',
      'Exceptional candidate retention rates exceeding 92% at 12 months',
      'Seamless cultural alignment with your organizational values'
    ],
    audience: 'Enterprises, fast-scaling venture startups, and mid-sized businesses seeking rapid, high-caliber hiring.',
    processStages: [
      { title: 'Requisition Briefing', desc: 'Direct scoping with hiring managers to map technical requirements and team culture.' },
      { title: 'Market Sourcing', desc: 'Targeted outreach through private talent intelligence databases and active candidate communities.' },
      { title: 'Rigorous Vetting', desc: 'Structured technical interviews, cognitive assessments, and reference checks.' },
      { title: 'Offer & Onboarding', desc: 'Salary benchmarking, compensation negotiation, and 90-day retention support.' }
    ]
  },
  {
    id: 'rpo-services',
    vertical: 'hr',
    title: 'Recruitment Process Outsourcing (RPO)',
    slug: 'rpo-services',
    summary: 'Full-cycle talent acquisition outsourcing designed to optimize hiring strategy and reduce operational cost.',
    description: 'By partnering with Varnith Global for RPO, your executive team focuses on core strategic growth while our embedded recruiting squads manage sourcing, applicant tracking, interview scheduling, assessments, and onboarding.',
    category: 'HR Consulting',
    deliveryMode: 'Embedded Enterprise Partnership',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Dedicated recruiter pods embedded into your tools and ATS',
      'Scalable hiring capacity that ramps up or down with your business cycles',
      'Employer brand amplification across talent communities',
      'Robust recruitment analytics, funnel reporting, and candidate experience NPS'
    ],
    benefits: [
      'Significantly lowers cost-per-hire compared to transactional agency fees',
      'Standardized, compliant hiring workflows across global office locations',
      'Immediate access to our proprietary talent intelligence databases'
    ],
    audience: 'High-growth companies experiencing multi-department hiring surges or undergoing geographic expansion.',
    processStages: [
      { title: 'Diagnostic Audit', desc: 'Evaluating your historical recruitment bottlenecks, ATS stack, and cost-per-hire metrics.' },
      { title: 'Pod Deployment', desc: 'Embedding dedicated sourcers, interview coordinators, and recruiters into your Slack/ATS.' },
      { title: 'Pipeline Scaling', desc: 'Driving multi-channel candidate attraction and automated scheduling workflows.' },
      { title: 'Continuous Review', desc: 'Monthly SLA audits, hiring velocity analytics, and recruiter capacity tuning.' }
    ]
  },
  {
    id: 'executive-hiring',
    vertical: 'hr',
    title: 'Executive Hiring & Leadership Search',
    slug: 'executive-hiring',
    summary: 'Discreet, high-touch executive recruitment for C-suite, VP, and Director level leadership.',
    description: 'The right leadership transforms organizations. Our confidential executive search practice identifies visionary directors, vice presidents, and C-level leaders who bring proven strategic capability, cultural leadership, and commercial acumen.',
    category: 'HR Consulting',
    deliveryMode: 'Confidential Retained Mandate',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Confidential executive profiling and board-level stakeholder alignment',
      'Direct partner-led outreach with comprehensive reference verification',
      'Competency assessment frameworks covering strategic vision and change management',
      'Executive onboarding support and 100-day milestone check-ins'
    ],
    benefits: [
      'Access to passive leaders not visible on public job boards',
      'Discretion protecting market sensitive organizational restructuring',
      'Leadership talent that accelerates shareholder value'
    ],
    audience: 'Board members, founders, CEOs, and CHROs appointing transformational organizational leaders.',
    processStages: [
      { title: 'Board Alignment', desc: 'Defining leadership competencies, governance expectations, and compensation models.' },
      { title: 'Confidential Mapping', desc: 'Discreet research across peer industries to identify high-performing executive leaders.' },
      { title: 'Partner Interviews', desc: 'In-depth competency evaluations examining track records under market pressure.' },
      { title: 'Executive Transition', desc: 'Assisting offer negotiations, notice periods, and 100-day integration plans.' }
    ]
  },
  {
    id: 'dei-hiring',
    vertical: 'hr',
    title: 'DE&I Hiring Services',
    slug: 'dei-hiring',
    summary: 'Intentional diversity, equity, and inclusion recruiting to build high-performing, inclusive teams.',
    description: 'At Varnith Global, we are committed to promoting diversity, equity, and inclusion in every recruitment pipeline. We help organizations attract, hire, and retain underrepresented talent while cultivating an inclusive workplace culture where diverse perspectives drive breakthrough innovation.',
    category: 'HR Consulting',
    deliveryMode: 'Strategic Consulting & Sourcing',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Blind resume evaluation audits and bias-neutral job description crafting',
      'Targeted partnerships with specialized diversity networks and women-in-tech forums',
      'Inclusive interview panel preparation and evaluation rubrics',
      'Retention tracking and employee resource group (ERG) advisory'
    ],
    benefits: [
      'Proven increase in team problem-solving and innovation velocity',
      'Enhanced employer brand reputation and talent attraction magnet',
      'Equitable workplace cultures that attract the next generation of workers'
    ],
    audience: 'Progressive companies committed to building truly equitable, representative leadership and engineering teams.'
  },
  {
    id: 'talent-intelligence',
    vertical: 'hr',
    title: 'Talent Intelligence & Workforce Planning',
    slug: 'talent-intelligence',
    summary: 'Actionable labor market data, compensation benchmarks, and talent supply forecasting.',
    description: 'We empower leaders with actionable workforce data. Leveraging advanced labor analytics, we map talent heatmaps, competitor org structures, compensation percentiles, and future skill demand to guide strategic business decisions.',
    category: 'HR Consulting',
    deliveryMode: 'Analytics & Advisory Reports',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Geographic talent availability mapping across metro & emerging tech hubs',
      'Competitor talent mobility and organizational structural benchmarking',
      'Real-time market salary, equity, and variable compensation reports',
      'Skill obsolescence analysis and forward capability roadmapping'
    ],
    benefits: [
      'Eliminates guesswork from new office location decisions and talent expansion',
      'Ensures compensation budgets are competitive yet fiscally prudent',
      'Strengthens executive board presentations with verifiable labor market intelligence'
    ],
    audience: 'CHROs, Chief People Officers, corporate strategists, and investors planning expansion.'
  },

  // TRAINING & DEVELOPMENT (SECONDARY)
  {
    id: 'devops-training',
    vertical: 'training',
    title: 'DevOps & Cloud Engineering',
    slug: 'devops-training',
    summary: 'Hands-on CI/CD, Kubernetes, Docker, Terraform, and cloud infrastructure mastering.',
    description: 'Software development + IT operations. Faster, better software. Our intensive DevOps program is packed with practical knowledge, automated pipeline engineering, and live project exercises designed for career acceleration in modern cloud ecosystems.',
    category: 'Training & Development',
    duration: '10–12 Weeks',
    deliveryMode: 'Live Interactive + Dedicated Labs',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Docker containerization and multi-node Kubernetes cluster orchestration',
      'Jenkins, GitHub Actions, and GitLab CI/CD automated pipeline workflows',
      'Infrastructure as Code (IaC) with Terraform and Ansible configuration',
      'Production monitoring with Prometheus, Grafana, and ELK stack'
    ],
    benefits: [
      'Industry-recognized portfolio projects demonstrating production-ready cloud skills',
      'Resume reviews, mock technical interviews, and placement assistance',
      'Mentorship from practicing Senior DevOps Engineers'
    ],
    audience: 'Software engineers, system administrators, QA engineers, and career switchers entering cloud engineering.'
  },
  {
    id: 'sap-basis-security',
    vertical: 'training',
    title: 'SAP Basis & Security Administration',
    slug: 'sap-basis-security',
    summary: 'Comprehensive SAP system architecture, installation, authorization, and security administration.',
    description: 'A specialized enterprise program providing complete SAP system security and Basis administration. Learn kernel upgrades, client copies, user management, profile generator, and vulnerability audits on live SAP environments.',
    category: 'Training & Development',
    duration: '8–10 Weeks',
    deliveryMode: 'Instructor-Led Hands-On',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
    features: [
      'SAP NetWeaver architecture and system landscapes (DEV, QAS, PRD)',
      'User administration, role creation, authorization objects, and SU01/PFCG',
      'Database administration, backup recovery, and transport management system (TMS)',
      'Security audit logs, SOD (Segregation of Duties), and vulnerability mitigation'
    ],
    benefits: [
      'Direct preparation for high-demand SAP consultant and administrator roles',
      'Real-world implementation scenarios and enterprise client simulation',
      'Verified certification upon successful project completion'
    ],
    audience: 'IT professionals, database admins, and tech graduates seeking enterprise SAP careers.'
  },
  {
    id: 'sap-grc',
    vertical: 'training',
    title: 'SAP GRC (Governance, Risk & Compliance)',
    slug: 'sap-grc',
    summary: 'Enterprise risk management, access control, and regulatory compliance configuration for SAP.',
    description: 'A program providing deep Governance, Risk, and Compliance expertise for SAP landscapes. Master Access Control (ARA, EAM, ARM, BRM), risk analysis, role remediation, and audit readiness.',
    category: 'Training & Development',
    duration: '8 Weeks',
    deliveryMode: 'Hands-on Scenario Labs',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Access Risk Analysis (ARA) and custom rule set creation',
      'Emergency Access Management (EAM) / Firefighter ID configuration',
      'Access Request Management (ARM) and business role management (BRM)',
      'Sarbanes-Oxley (SOX) compliance alignment and internal audit simulation'
    ],
    benefits: [
      'High-paying niche specialization in global SAP compliance projects',
      'Practical understanding of enterprise governance frameworks',
      'Placement support with multinational corporate partners'
    ],
    audience: 'Security analysts, auditors, SAP consultants, and compliance professionals.'
  },
  {
    id: 'data-analytics',
    vertical: 'training',
    title: 'Data Analytics & Business Intelligence',
    slug: 'data-analytics',
    summary: 'Practical data analysis, SQL, Power BI, Python for analytics, and statistical decision-making.',
    description: 'A program designed to analyze data, uncover actionable business insights, and make informed strategic decisions. Gain hands-on mastery over relational databases, dashboard engineering, and predictive storytelling.',
    category: 'Training & Development',
    duration: '10 Weeks',
    deliveryMode: 'Live Classes + Case Studies',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Advanced SQL queries, window functions, and database schema modeling',
      'Interactive dashboard creation with Power BI and Tableau',
      'Python for data wrangling with Pandas, NumPy, and Seaborn',
      'Real-world business case studies spanning retail, finance, and healthcare'
    ],
    benefits: [
      'Portfolio of interactive dashboards published on public repositories',
      'Beginner-friendly structure accessible to both technical and non-technical backgrounds',
      'Comprehensive interview preparation and resume portfolio polishing'
    ],
    audience: 'Graduates, marketing professionals, financial analysts, and aspirants entering data science.'
  },
  {
    id: 'software-testing',
    vertical: 'training',
    title: 'Software Testing (Manual + Automation + API)',
    slug: 'software-testing',
    summary: 'Full-spectrum quality engineering: manual test lifecycles, Selenium WebDriver, and Postman API testing.',
    description: 'Contains Manual, Automation, and API testing. A complete program for ensuring rock-solid software quality. Learn test case design, Selenium automation with Java/Python, CI integration, and RESTful API verification.',
    category: 'Training & Development',
    duration: '10 Weeks',
    deliveryMode: 'Hands-On Project Driven',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Manual testing methodologies, STLC, defect lifecycles, and Jira tracking',
      'Automation frameworks using Selenium WebDriver, TestNG, and Page Object Model',
      'API testing with Postman, Swagger, and RestAssured',
      'Performance testing basics with Apache JMeter and Git version control'
    ],
    benefits: [
      'Direct hands-on experience on live web application test suites',
      'Immediate boost to testing efficiency and automation engineering ability',
      'Interview question banks and placement support across Hyderabad tech ecosystem'
    ],
    audience: 'Graduates, manual testers transitioning to automation, and engineers seeking QA roles.'
  },
  {
    id: 'python-development',
    vertical: 'training',
    title: 'Python Full-Stack & Engineering',
    slug: 'python-development',
    summary: 'Modern Python programming combining web development, APIs, data pipelines, and scalable architectures.',
    description: 'A program combining Python, web frameworks, and infrastructure concepts. Learn to build efficient, scalable, production-grade applications with clean coding best practices and modular architecture.',
    category: 'Training & Development',
    duration: '10 Weeks',
    deliveryMode: 'Instructor-Led Code Along',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Core Python, OOP principles, data structures, and algorithmic problem-solving',
      'Web application development with FastAPI and Django',
      'Relational database integration with PostgreSQL and SQLAlchemy ORM',
      'Deployment on Linux cloud instances with Docker and Nginx'
    ],
    benefits: [
      '3 full-stack capstone projects deployed to live cloud domains',
      'Deep foundation in clean code architecture and Git collaboration',
      'Direct career support for Junior and Mid-level Python developer roles'
    ],
    audience: 'Computer science students, aspiring software engineers, and backend developers.'
  },

  // TECHNOLOGY & DIGITAL TRANSFORMATION (THIRD)
  {
    id: 'ai-solutions',
    vertical: 'tech',
    title: 'AI-led Solutions & Workflow Intelligence',
    slug: 'ai-solutions',
    summary: 'Practical enterprise AI integration, LLM agent workflows, and intelligent document processing.',
    description: 'Transform manual corporate bottlenecks into agile digital workflows. We architect and implement generative AI assistants, custom knowledge retrieval (RAG) systems, and cognitive automation that empower your workforce to achieve more in less time.',
    category: 'Technology & AI',
    deliveryMode: 'Turnkey Solution Engineering',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Enterprise Retrieval-Augmented Generation (RAG) over private company documents',
      'Autonomous agentic workflows for customer service, compliance, and reporting',
      'Predictive analytics models for operational demand forecasting',
      'Security-hardened model hosting and strict enterprise data privacy boundaries'
    ],
    benefits: [
      'Up to 70% reduction in routine manual data retrieval and triage time',
      'Enhanced employee decision quality with contextual AI copilot tools',
      'Custom models that remain under your full governance and IP ownership'
    ],
    audience: 'Enterprises, law firms, healthcare providers, and financial institutions seeking practical AI integration.'
  },
  {
    id: 'digital-transformation',
    vertical: 'tech',
    title: 'Digital Transformation & Cloud Modernization',
    slug: 'digital-transformation',
    summary: 'Cloud migration, microservices architecture, and legacy system modernization.',
    description: 'Modern businesses need responsive, reliable digital backbones. We guide organizations through multi-cloud adoption, monolithic-to-microservice re-architecting, and continuous automated deployment to ensure agile scale.',
    category: 'Technology & AI',
    deliveryMode: 'End-to-End Consulting & Delivery',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Cloud readiness assessments and AWS / Azure / GCP migration blueprints',
      'Legacy application refactoring into containerized microservices',
      'Automated DevOps pipelines with zero-downtime blue/green deployments',
      'Disaster recovery planning, cyber security audits, and business continuity'
    ],
    benefits: [
      'Significantly reduced infrastructure costs and server management overhead',
      'Faster release cadence for new customer features from months to hours',
      'Uncompromising security and regulatory compliance standards'
    ],
    audience: 'Established businesses modernizing legacy software to scale sustainably.'
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'it-software',
    slug: 'it-and-software-engineering',
    title: 'IT & Software Engineering',
    category: 'Technology Sector',
    tagline: 'Scaling full-stack, DevOps, and cloud engineering squads at startup and enterprise speed.',
    description: 'From rapid startup scaling to Fortune 500 digital engineering centers, we provide specialized recruiting and continuous developer training across cloud, infrastructure, and web architectures.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    challenges: [
      'Severe talent shortages in senior Kubernetes and cloud architecture roles',
      'High candidate counter-offer rates and drawn-out notice periods',
      'Junior engineers requiring intensive onboarding before contributing to live production code'
    ],
    solutionsProvided: [
      'Dedicated tech recruiter pods with active pre-vetted engineering networks',
      'Production bootcamp simulations reducing time-to-productivity from 90 days to 2 weeks',
      'Automated technical skill vetting rubrics minimizing engineering manager interview hours'
    ],
    caseStudy: {
      headline: '45-Day Engineering Scaling for Hyderabad SaaS Center',
      metrics: '28 Engineers Hired · 94% Retention · 35% Faster Delivery',
      summary: 'Partnered with a venture-backed SaaS provider to build an entire product engineering pod from scratch across React, Python FastAPI, and AWS Kubernetes infrastructure.'
    }
  },
  {
    id: 'banking-fintech',
    slug: 'banking-and-financial-services',
    title: 'Banking & Financial Services (BFSI)',
    category: 'Financial Services',
    tagline: 'Security-cleared talent and regulatory compliance frameworks for high-stakes financial operations.',
    description: 'We deliver specialized talent and risk management consulting for retail banking, asset management, and fintech platforms demanding zero-compromise data governance and compliance.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    challenges: [
      'Stringent regulatory requirements (SOX, RBI, PCI-DSS) governing systems access',
      'Scarcity of experienced SAP GRC and financial risk analysts',
      'Legacy mainframe architectures transitioning to hybrid cloud environments'
    ],
    solutionsProvided: [
      'Certified SAP GRC and Basis Security consultant placement and training',
      'Background-verified engineering teams with strict non-disclosure protections',
      'Automated compliance reporting workflows and data governance roadmaps'
    ],
    caseStudy: {
      headline: 'SAP Authorization & GRC Remediation for Regional Bank',
      metrics: '100% Audit Readiness · Zero SOD Violations · 60-Day Turnaround',
      summary: 'Delivered comprehensive role remediation and Segregation of Duties (SOD) cleanup across 4,000 SAP user accounts ahead of mandatory external audit review.'
    }
  },
  {
    id: 'healthcare-lifesciences',
    slug: 'healthcare-and-life-sciences',
    title: 'Healthcare & Life Sciences',
    category: 'Life Sciences',
    tagline: 'HIPAA-compliant digital talent and health informatics analytics capabilities.',
    description: 'Empowering hospital networks, pharmaceutical companies, and healthtech platforms with clinical data analysts, cloud engineers, and technical regulatory compliance specialists.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    challenges: [
      'Strict health data privacy boundaries requiring specialized technical awareness',
      'Integrating heterogeneous electronic health record (EHR) databases',
      'Retaining bioinformatics and healthcare data science specialists'
    ],
    solutionsProvided: [
      'Customized health data analyst training cohorts covering SQL and HIPAA standards',
      'Targeted recruiting for healthtech cloud migrations and interoperability APIs',
      'Discreet executive search for Chief Medical Information Officers (CMIOs)'
    ],
    caseStudy: {
      headline: 'Analytics Pipeline Modernization for Diagnostic Lab Chain',
      metrics: '70% Faster Report Generation · 15 Analysts Upskilled',
      summary: 'Designed an automated data analytics dashboard system tracking patient sample turnaround times across 45 regional diagnostic centers.'
    }
  },
  {
    id: 'enterprise-manufacturing',
    slug: 'manufacturing-and-supply-chain',
    title: 'Manufacturing & Supply Chain',
    category: 'Industrial & Supply Chain',
    tagline: 'Modernizing ERP backbones, SAP logistics, and warehouse workforce planning.',
    description: 'Guiding manufacturing enterprises through Industry 4.0 modernization, SAP ERP migrations, predictive supply chain analytics, and factory floor technical staff upskilling.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    challenges: [
      'Decentralized plant operations running legacy on-premise ERP releases',
      'Shortage of skilled SAP Basis administrators to handle high-availability logistics',
      'Operational downtime risk during technology migrations'
    ],
    solutionsProvided: [
      'Round-the-clock SAP Basis administration support and system performance tuning',
      'Comprehensive plant supervisor analytics training in Power BI and Excel models',
      'Scalable RPO for technical maintenance and industrial software engineers'
    ],
    caseStudy: {
      headline: 'Continuous SAP Basis Support for Auto-Components Leader',
      metrics: '99.98% System Uptime · 12-Hour Upgrade Windows Executed Safely',
      summary: 'Managed complete kernel patch upgrade and database recovery testing for a multi-plant manufacturing setup without impacting daily dispatch schedules.'
    }
  },
  {
    id: 'ecommerce-retail',
    slug: 'digital-commerce-and-retail',
    title: 'Digital Commerce & Retail',
    category: 'Consumer & Retail',
    tagline: 'High-velocity seasonal hiring and customer data analytics for modern omnichannel retail.',
    description: 'Supplying omnichannel retailers and direct-to-consumer brands with seasonal talent surges, customer intelligence analytics, and cloud scalability for high-traffic sale events.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80',
    challenges: [
      'Extreme seasonal spikes requiring rapid ramp-up and ramp-down of tech support squads',
      'Fragmented customer data across in-store POS and digital storefronts',
      'High cart abandonment requiring real-time performance optimization'
    ],
    solutionsProvided: [
      'Agile RPO squads providing rapid contract-to-hire tech and operations staff',
      'Full-stack Python and Node.js developer cohorts building microservice checkout APIs',
      'Customer churn analytics and predictive inventory forecasting dashboards'
    ],
    caseStudy: {
      headline: 'Festival Season Talent Surge for Multi-Brand Retailer',
      metrics: '42 Candidates Onboarded in 21 Days · 0% Staff Deficit',
      summary: 'Deployed an embedded RPO recruiting cell to source, evaluate, and onboard 42 technical support and catalog engineers ahead of peak Diwali shopping traffic.'
    }
  },
  {
    id: 'telecom-cloud',
    slug: 'telecommunications-and-cloud',
    title: 'Telecommunications & Cloud Services',
    category: 'Infrastructure & Telecom',
    tagline: 'Cloud infrastructure engineers and network automation talent for high-throughput networks.',
    description: 'Providing telcos and cloud infrastructure providers with network automation specialists, 5G cloud architecture talent, and continuous DevOps pipeline engineering.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    challenges: [
      'Fast-paced shift from physical network hardware to software-defined networking (SDN)',
      'Scarcity of engineers fluent in both Linux networking and Terraform automation',
      'High SLA penalty risks for network infrastructure downtime'
    ],
    solutionsProvided: [
      'Specialized DevOps and IaC training cohorts for network engineers',
      'Retained search for Cloud Infrastructure and Site Reliability Engineering (SRE) leads',
      'Automated testing workflows for telecommunications software releases'
    ],
    caseStudy: {
      headline: 'DevOps Capability Transformation for Regional Telecom Carrier',
      metrics: '60 Network Engineers Upskilled · Automated Pipeline Established',
      summary: 'Delivered an intensive 10-week corporate training program transitioning network hardware administrators into certified Kubernetes and Terraform engineers.'
    }
  }
];

export const TRANSFORMATION_STAGES: TransformationStage[] = [
  {
    number: '01',
    title: 'Understand the Business',
    subtitle: 'Strategic Discovery & Capability Audit',
    description: 'Every successful transformation begins with deep listening. We examine your strategic roadmap, current talent matrix, operational friction points, and technology bottlenecks to establish an objective baseline.',
    deliverables: [
      'Workforce & skill gap diagnostic',
      'Technology stack and automation readiness review',
      'Custom talent roadmap and ROI projection'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
    quote: {
      text: '“Varnith Global spent the first two weeks truly understanding our delivery cadence and culture. The hires they made fit seamlessly from day one.”',
      context: 'VP of Technology, Enterprise Software Partner'
    }
  },
  {
    number: '02',
    title: 'Identify the Right Talent',
    subtitle: 'Targeted Acquisition & Executive Search',
    description: 'We deploy proactive talent intelligence and confidential sourcing networks to attract high-caliber professionals who align with your organizational goals and company culture.',
    deliverables: [
      'Comprehensive candidate profiling & technical evaluation',
      'DE&I-vetted candidate shortlists',
      'Transparent recruitment dashboards with live progress'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    quote: {
      text: '“Their executive search team brought us three exceptional candidates within three weeks, saving us months of search fatigue.”',
      context: 'Chief People Officer, Fintech Scaleup'
    }
  },
  {
    number: '03',
    title: 'Develop Capabilities',
    subtitle: 'Tailored Training & Team Upskilling',
    description: 'Recruitment is only step one. We run customized enterprise learning cohorts in DevOps, Cloud, SAP Security, and Data to transform potential into production-ready execution.',
    deliverables: [
      'Modular curriculum customized for company tech stacks',
      'Hands-on lab environments and project code reviews',
      'Skill benchmark certifications and performance metrics'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    quote: {
      text: '“Our entire junior QA cohort transitioned to automated API testing after Varnith Global’s intensive training program.”',
      context: 'Engineering Director, Systems Integration Partner'
    }
  },
  {
    number: '04',
    title: 'Enable Technology',
    subtitle: 'Process Automation & AI Integration',
    description: 'We bridge talent with technology. Our digital engineers build intelligent workflows, automate repetitive manual processes, and integrate secure AI solutions that amplify employee productivity.',
    deliverables: [
      'Intelligent process automation workflows',
      'Modern cloud and CI/CD pipelines',
      'Internal knowledge search and AI assistants'
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    quote: {
      text: '“Their team didn’t just train our developers—they helped us modernize our release pipelines to cut our deployment cycle by half.”',
      context: 'Head of Infrastructure, Cloud Solutions Co.'
    }
  },
  {
    number: '05',
    title: 'Support Transformation',
    subtitle: 'Sustained Partnership & Continuous Evolution',
    description: 'Transformation is an ongoing journey. We maintain continuous advisory check-ins, workforce planning updates, and technology support to ensure your growth remains resilient in shifting markets.',
    deliverables: [
      'Quarterly talent intelligence and market benchmarking',
      'Ongoing training refresher modules for new tech evolutions',
      'Dedicated relationship director with 24/7 escalation channel'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    quote: {
      text: '“Having a unified partner that solves talent, training, and technology together is what makes Varnith Global invaluable to our expansion.”',
      context: 'Managing Director, Hyderabad Corporate Operations'
    }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'I\'ve taken several testing courses before, but Varnith Global has been the best by far. The trainers have real-world experience and share practical tips that I can apply immediately. I\'ve already seen a significant improvement in my testing efficiency.',
    author: 'Rahul Radhirao',
    role: 'Quality Assurance Professional',
    serviceOrCourse: 'Software Testing Program (Manual, Automation & API)',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'I was looking for a course that would give me a deep dive into SAP Basis Security, and Varnith Global delivered. The curriculum is comprehensive and the trainers are experts in their field. I\'ve already implemented some of the best practices I learned in my daily work.',
    author: 'Priya Bhaskar',
    role: 'SAP Systems Administrator',
    serviceOrCourse: 'SAP Basis & Security Administration',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'As a beginner in data science, I was a bit intimidated, but Varnith Global made me feel right at home. The instructors are patient and supportive, and the course materials are well-structured. I\'ve gained a solid foundation and I\'m excited to continue my learning journey.',
    author: 'Ravi Theja',
    role: 'Data Analyst Associate',
    serviceOrCourse: 'Data Analytics & Business Intelligence',
    rating: 5
  },
  {
    id: 'test-4',
    quote: 'Varnith Global has been instrumental for my DevOps career. Their courses are packed with practical knowledge and hands-on exercises that really stick. The instructors are super knowledgeable and always support students to help them understand complex concepts.',
    author: 'Manasa Chowdary',
    role: 'Cloud & DevOps Engineer',
    serviceOrCourse: 'DevOps & Cloud Engineering Bootcamp',
    rating: 5
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'recruitment-trends-2026',
    slug: 'navigating-tech-hiring-in-2026',
    category: 'Recruitment Trends',
    readTime: '5 min read',
    date: 'March 2026',
    title: 'Navigating Tech Hiring in 2026: Why Niche Capability Outweighs Generalist Volume',
    excerpt: 'How modern Indian enterprises are restructuring hiring funnels from mass resume screening to precision skill vetting and cultural alignment.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    author: 'Varnith Talent Advisory',
    content: [
      'The hiring landscape across Indian technology hubs has fundamentally shifted. While past cycles prioritized raw resume volume, enterprise hiring managers in 2026 face an opposite challenge: filtering through thousands of AI-generated applications to identify true, hands-on architectural problem solvers.',
      'Our recruitment practice reveals that companies partnering with specialized talent advisory firms cut hiring cycles by over 40% while simultaneously boosting 12-month retention rates.',
      'By focusing on scenario-based live coding evaluations, peer-level cultural checks, and realistic compensation benchmarking, businesses build resilient engineering squads capable of weathering rapid market transitions.'
    ]
  },
  {
    id: 'devops-continuous-learning',
    slug: 'bridging-the-devops-capability-gap',
    category: 'Learning & Development',
    readTime: '6 min read',
    date: 'February 2026',
    title: 'Bridging the DevOps Capability Gap: Moving Beyond Certification to Live Infrastructure',
    excerpt: 'Theoretical cloud certifications no longer guarantee engineering readiness. Why hands-on cluster orchestration is non-negotiable for modern IT teams.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80',
    author: 'DevOps Faculty Lead',
    content: [
      'Every technology company claims to practice DevOps, yet delivery teams still wrestle with slow build cycles, broken staging environments, and brittle configuration drift.',
      'At Varnith Global, our training philosophy centers on real production emulation. Rather than memorizing slide definitions, learners build multi-node Kubernetes clusters, orchestrate automated blue/green pipelines, and debug simulated outage conditions.',
      'When engineers practice under real-world pressure, their confidence and troubleshooting speed rise exponentially, delivering immediate value to their employers from day one.'
    ]
  },
  {
    id: 'ai-digital-transformation',
    slug: 'practical-enterprise-ai-automation',
    category: 'AI & Digital Transformation',
    readTime: '4 min read',
    date: 'January 2026',
    title: 'Practical Enterprise AI: How Mid-Sized Businesses Are Automating Workflows Today',
    excerpt: 'Demystifying generative AI for practical operations: from internal document retrieval to automated candidate triage and customer support.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    author: 'Digital Transformation Team',
    content: [
      'You do not need a multi-million-dollar AI research budget to capture the benefits of modern workflow intelligence. Today’s most impactful transformations happen at the workflow level.',
      'By integrating domain-tuned Retrieval-Augmented Generation (RAG) over internal documentation and automating repetitive multi-department handoffs, companies achieve immense efficiency leaps without disrupting existing systems.',
      'The critical ingredient is not technology alone, but uniting technical architecture with purposeful employee upskilling so teams actively embrace the new tooling.'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the format of your training courses?',
    answer: 'Our courses are an engaging mix of live online interactive classes, recorded lecture access, and hands-on production labs. Students receive continuous access to dedicated course materials, practice sandbox environments, and ongoing mentor support throughout their learning journey.',
    category: 'courses'
  },
  {
    id: 'faq-2',
    question: 'Do I need prior technical experience for the DevOps course?',
    answer: 'While foundational knowledge in IT, Linux commands, or software development is helpful, our DevOps curriculum is designed to be accessible to learners across multiple experience levels. We guide you methodically from core containerization concepts to advanced multi-cloud Kubernetes orchestration.',
    category: 'courses'
  },
  {
    id: 'faq-3',
    question: 'Is the Data Analytics course suitable for non-technical professionals?',
    answer: 'Yes! Our Data Analytics course is specifically structured to be accessible to professionals coming from non-technical backgrounds like marketing, finance, or business operations. We provide a solid step-by-step foundation in Excel, SQL querying, Power BI visualization, and beginner Python concepts.',
    category: 'courses'
  },
  {
    id: 'faq-4',
    question: 'What HR and talent acquisition models do you support for enterprises?',
    answer: 'We provide flexible engagement models tailored to client needs: full-scale Recruitment Process Outsourcing (RPO) for continuous multi-role hiring, Retained Executive Search for leadership positions, Contingent Technical Sourcing for high-growth tech teams, and DE&I talent advisory.',
    category: 'hr'
  },
  {
    id: 'faq-5',
    question: 'What is the certification and placement assistance process?',
    answer: 'Upon successful project completion and evaluation, learners receive a recognized Certificate of Completion from Varnith Global. In addition, our dedicated placement cell assists with resume optimization, portfolio showcase preparation, mock technical interviews, and connections to hiring partner companies across Hyderabad and pan-India.',
    category: 'courses'
  },
  {
    id: 'faq-6',
    question: 'How do you handle confidential executive search mandates?',
    answer: 'Confidentiality is the bedrock of our leadership practice. When conducting executive searches for sensitive leadership transitions or restructuring, all profiling, outreach, and interviewing occur under strict non-disclosure agreements with direct senior partner oversight.',
    category: 'hr'
  }
];

export const COMPANY_FACTS = [
  { label: 'Headquarters', value: 'Hyderabad, India' },
  { label: 'Core Pillars', value: 'Talent, Learning, Technology' },
  { label: 'Primary Focus', value: 'HR Consulting & Strategic Talent' },
  { label: 'Industry Specialization', value: 'DevOps, SAP, Data, Software QA, AI' },
  { label: 'Verified Rating', value: '4.9 / 5.0 (Student & Client Feedback)' }
];
