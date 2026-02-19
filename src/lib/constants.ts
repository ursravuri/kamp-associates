export const COMPANY = {
  name: "KAMP & Associates",
  tagline: "Chartered Accountants",
  fullName: "KAMP & Associates — Chartered Accountants",
  phone: ["+91 8985555081", "+91 9553310208"],
  email: "info.kampca@gmail.com",
  address: "Hyderabad, Telangana, India",
  instagram: "https://www.instagram.com/kamp__ca/",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export interface Service {
  title: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  services: Service[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "Registration Services",
    description:
      "End-to-end registration and incorporation services to help you start and formalize your business with full legal compliance.",
    icon: "FileText",
    services: [
      {
        title: "GST Registration",
        description:
          "Complete GST registration assistance including documentation, application filing, and obtaining your GSTIN.",
      },
      {
        title: "Company Registration",
        description:
          "Incorporation of Private Limited, Public Limited, and One Person Companies under the Companies Act.",
      },
      {
        title: "Partnership Firm Registration",
        description:
          "Registration of partnership firms with drafting of partnership deeds and regulatory filings.",
      },
      {
        title: "LLP Registration",
        description:
          "Limited Liability Partnership formation including name reservation, incorporation, and compliance setup.",
      },
      {
        title: "Labour License Registration",
        description:
          "Obtaining labour licenses under applicable state and central labour laws for your establishment.",
      },
      {
        title: "MSME Registration",
        description:
          "Udyam Registration for Micro, Small, and Medium Enterprises to access government benefits and schemes.",
      },
      {
        title: "Trademark Registration",
        description:
          "Trademark search, application filing, and registration to protect your brand identity.",
      },
      {
        title: "Society Registration",
        description:
          "Registration of societies under the Societies Registration Act with complete documentation support.",
      },
      {
        title: "Trust Registration",
        description:
          "Formation and registration of public and private trusts with trust deed preparation.",
      },
      {
        title: "Income Tax Registration",
        description:
          "PAN and TAN applications, Section 12A/80G registration for trusts and NGOs.",
      },
      {
        title: "PF and PT Registration",
        description:
          "Provident Fund and Professional Tax registration for employers and establishments.",
      },
    ],
  },
  {
    title: "Return Filing",
    description:
      "Timely and accurate filing of all statutory returns to keep your business compliant and penalty-free.",
    icon: "ClipboardCheck",
    services: [
      {
        title: "Income Tax Filing",
        description:
          "Filing of ITR for individuals, HUFs, firms, and companies with tax planning and optimization.",
      },
      {
        title: "GST Return Filing",
        description:
          "Monthly, quarterly, and annual GST return filing including GSTR-1, GSTR-3B, and GSTR-9.",
      },
      {
        title: "Annual Accounts Filing",
        description:
          "Preparation and filing of annual financial statements in compliance with accounting standards.",
      },
      {
        title: "Annual Returns Filing",
        description:
          "Filing of annual returns with the Registrar of Companies for LLPs and companies.",
      },
      {
        title: "PF Return Filing",
        description:
          "Monthly and annual PF return filing with the EPFO, including ECR generation.",
      },
      {
        title: "PT Return Filing",
        description:
          "Professional Tax return filing as per state-specific requirements and deadlines.",
      },
      {
        title: "ESI Return Filing",
        description:
          "Employee State Insurance return filing and compliance management.",
      },
      {
        title: "MCA Forms Filing",
        description:
          "Filing of various MCA forms including DIR-3 KYC, ADT-1, and other statutory forms.",
      },
      {
        title: "ROC Filing",
        description:
          "Registrar of Companies filings including charge creation, modification, and event-based returns.",
      },
      {
        title: "TDS Filing",
        description:
          "Quarterly TDS return filing with Form 26Q, 24Q, and 27Q including TDS certificate generation.",
      },
      {
        title: "Company Filing",
        description:
          "All company-related statutory filings with MCA including board resolutions and compliance documents.",
      },
    ],
  },
  {
    title: "Other Services",
    description:
      "Comprehensive professional services to support your business operations, growth, and strategic decision-making.",
    icon: "Briefcase",
    services: [
      {
        title: "Accounting Services",
        description:
          "Complete bookkeeping and accounting services with periodic financial statement preparation.",
      },
      {
        title: "Compliance Services",
        description:
          "Ongoing regulatory compliance management across GST, Income Tax, Companies Act, and labour laws.",
      },
      {
        title: "Payroll Services",
        description:
          "End-to-end payroll processing including salary computation, statutory deductions, and payslip generation.",
      },
      {
        title: "Due Diligence Services",
        description:
          "Financial and legal due diligence for mergers, acquisitions, and investment decisions.",
      },
      {
        title: "Valuation Services",
        description:
          "Business valuation, share valuation, and asset valuation by certified professionals.",
      },
      {
        title: "Charge Creation",
        description:
          "Registration and modification of charges with the Registrar of Companies for secured borrowings.",
      },
      {
        title: "Internal Audit",
        description:
          "Systematic internal audit services to evaluate and improve your organization's risk management and controls.",
      },
      {
        title: "Projections",
        description:
          "Financial projections and forecasting for business planning, loan applications, and investor presentations.",
      },
      {
        title: "Tax Advisory Services",
        description:
          "Strategic tax planning and advisory to optimize your tax position across direct and indirect taxes.",
      },
      {
        title: "PAN Card",
        description:
          "PAN card application and correction services for individuals, firms, and companies.",
      },
      {
        title: "Digital Signature (DSC)",
        description:
          "Class 2 and Class 3 Digital Signature Certificates for MCA, Income Tax, and GST filings.",
      },
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "CA Professional",
    title: "Founding Partner",
    bio: "A seasoned Chartered Accountant with extensive experience in taxation, audit, and business advisory services.",
    initials: "KA",
  },
  {
    name: "Senior Associate",
    title: "Tax & Compliance Head",
    bio: "Specializes in direct and indirect taxation with a focus on GST compliance and corporate tax planning.",
    initials: "SA",
  },
  {
    name: "Associate",
    title: "Registration & Filing Specialist",
    bio: "Expert in company registrations, ROC filings, and statutory compliance for businesses of all sizes.",
    initials: "AS",
  },
  {
    name: "Associate",
    title: "Accounts & Payroll Manager",
    bio: "Manages accounting operations, payroll processing, and financial reporting for multiple clients.",
    initials: "AM",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Expert Chartered Accountants",
    description:
      "Our team of qualified CAs brings deep expertise across taxation, audit, compliance, and business advisory.",
    icon: "Award",
  },
  {
    title: "Comprehensive Services",
    description:
      "From registration to return filing to strategic advisory — we cover every financial need under one roof.",
    icon: "Layers",
  },
  {
    title: "Timely Compliance",
    description:
      "We ensure all your filings and compliances are completed well before deadlines, keeping you penalty-free.",
    icon: "Clock",
  },
  {
    title: "Client-First Approach",
    description:
      "We build long-term relationships by understanding your business and providing personalized solutions.",
    icon: "Users",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. Clear, upfront pricing for all our services so you know exactly what to expect.",
    icon: "Shield",
  },
  {
    title: "Technology Driven",
    description:
      "We leverage modern accounting software and digital tools to deliver fast, accurate, and efficient services.",
    icon: "Laptop",
  },
];

export const FAQS = [
  {
    question: "What services does KAMP & Associates offer?",
    answer:
      "We offer a comprehensive range of Chartered Accountancy services including GST registration and filing, company and LLP registration, income tax filing, accounting and bookkeeping, payroll management, audit services, and business advisory.",
  },
  {
    question: "How can I get started with your firm?",
    answer:
      "Simply reach out to us via phone, email, or through our website's consultation form. We'll schedule an initial discussion to understand your needs and recommend the right services for you.",
  },
  {
    question: "Do you handle both individual and business filings?",
    answer:
      "Yes, we serve individuals, proprietorships, partnerships, LLPs, private limited companies, trusts, and societies with tailored solutions for each entity type.",
  },
  {
    question: "What are your fees?",
    answer:
      "Our fees vary based on the service and complexity involved. We believe in transparent pricing and will provide a clear quote before beginning any engagement.",
  },
  {
    question: "Can you help with GST registration and filing?",
    answer:
      "Absolutely. We handle the complete GST lifecycle — from registration and invoicing setup to monthly/quarterly return filing and annual reconciliation.",
  },
  {
    question: "Do you offer virtual/remote services?",
    answer:
      "Yes, most of our services can be delivered remotely. We use secure digital platforms for document sharing, communication, and filing to serve clients across India.",
  },
];
