/**
 * Comprehensive Seed Data for Career Compass
 * Covers MPC, BiPC, MEC, CEC, Commerce, Arts/Humanities
 */

const SeedData = {
  streams: [
    { id: "stream-mpc", code: "MPC", name: "Mathematics, Physics, Chemistry", description: "Pathways toward engineering, computer science, physical sciences, mathematics, architecture, and technology." },
    { id: "stream-bipc", code: "BiPC", name: "Biology, Physics, Chemistry", description: "Pathways toward medicine, dentistry, pharmacy, biotechnology, agriculture, nursing, veterinary, and life sciences." },
    { id: "stream-mec", code: "MEC", name: "Mathematics, Economics, Commerce", description: "Pathways combining quantitative aptitude with business, economics, actuarial science, finance, and analytics." },
    { id: "stream-cec", code: "CEC", name: "Civics, Economics, Commerce", description: "Pathways focused on business administration, professional accountancy (CA/CMA/CS), banking, and corporate law." },
    { id: "stream-arts", code: "ARTS", name: "Humanities & Social Sciences", description: "Pathways toward psychology, law, civil services, journalism, media, literature, design, and public policy." },
    { id: "stream-other", code: "OTHER", name: "Vocational / Mixed Streams", description: "Interdisciplinary curricula, diploma transitions, and specialized vocational education tracks." }
  ],

  courses: [
    // --- MPC Pathways ---
    {
      id: "course-btech-cse",
      streamId: "stream-mpc",
      code: "BTECH_CSE",
      name: "B.Tech in Computer Science & Engineering",
      duration: "4 Years (8 Semesters)",
      degreeType: "Bachelor of Technology",
      eligibility: "10+2 with Physics, Mathematics, and Chemistry/CS (Minimum 60% aggregate)",
      entranceRequirements: "JEE Main, JEE Advanced, State CETs (EAMCET, KCET, MHT-CET, WBJEE), BITSAT, VITEEE",
      mainSubjects: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Software Engineering", "Theory of Computation"],
      requiredSkills: ["Problem Solving", "Logical Reasoning", "Programming (C++/Java/Python)", "Mathematics (Discrete, Calculus)", "Algorithmic Thinking"],
      careerOpportunities: ["Software Development Engineer", "Full-Stack Developer", "Systems Architect", "Cloud Engineer", "DevOps Engineer"],
      higherStudies: ["M.Tech in Computer Science", "MS in CS (USA/Europe)", "MBA in Tech Management", "PhD in Computing"],
      approxFee: "₹1,50,000 - ₹3,50,000 / year (Private) | ₹40,000 - ₹1,20,000 / year (Govt)",
      officialSource: "https://www.aicte-india.org",
      verificationNote: "Fee structures and admission cutoffs vary by category and state quota. Verify via official counseling portals."
    },
    {
      id: "course-btech-aiml",
      streamId: "stream-mpc",
      code: "BTECH_AIML",
      name: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "4 Years (8 Semesters)",
      degreeType: "Bachelor of Technology",
      eligibility: "10+2 with Mathematics, Physics, Chemistry (Minimum 60% aggregate)",
      entranceRequirements: "JEE Main, State CETs, University Entrance Tests",
      mainSubjects: ["Machine Learning Algorithms", "Deep Learning & Neural Networks", "Probability & Statistics", "Natural Language Processing", "Computer Vision", "Reinforcement Learning"],
      requiredSkills: ["Python", "Linear Algebra", "Calculus & Statistics", "Data Modeling", "Critical Thinking"],
      careerOpportunities: ["AI/ML Engineer", "Data Scientist", "NLP Specialist", "Computer Vision Researcher", "Prompt Engineer"],
      higherStudies: ["MS in Artificial Intelligence", "M.Tech in Data Engineering", "PhD in Cognitive Systems"],
      approxFee: "₹1,75,000 - ₹3,80,000 / year",
      officialSource: "https://www.aicte-india.org",
      verificationNote: "Ensure the AICTE curriculum aligns with your specific institution's autonomous accreditation."
    },
    {
      id: "course-btech-ece",
      streamId: "stream-mpc",
      code: "BTECH_ECE",
      name: "B.Tech in Electronics & Communication Engineering",
      duration: "4 Years (8 Semesters)",
      degreeType: "Bachelor of Technology",
      eligibility: "10+2 with PCM (Minimum 55-60%)",
      entranceRequirements: "JEE Main, State CETs, GATE (for higher studies)",
      mainSubjects: ["Digital Signal Processing", "VLSI Design", "Embedded Systems", "Analog Circuits", "Microprocessors & Microcontrollers", "Wireless Networks"],
      requiredSkills: ["Circuit Design", "C/Embedded C", "MATLAB", "Hardware Troubleshooting", "Physics of Semiconductors"],
      careerOpportunities: ["VLSI Design Engineer", "Embedded Systems Developer", "Telecom Specialist", "IoT Solutions Architect"],
      higherStudies: ["M.Tech in Microelectronics", "MS in Electrical Engineering", "MBA"],
      approxFee: "₹1,20,000 - ₹3,00,000 / year",
      officialSource: "https://www.aicte-india.org",
      verificationNote: "High demand in semiconductor fabrication and defense electronics."
    },
    {
      id: "course-barch",
      streamId: "stream-mpc",
      code: "BARCH",
      name: "Bachelor of Architecture (B.Arch)",
      duration: "5 Years (10 Semesters)",
      degreeType: "Bachelor of Architecture",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics (Minimum 50%) + NATA score",
      entranceRequirements: "NATA (National Aptitude Test in Architecture), JEE Main Paper 2",
      mainSubjects: ["Architectural Design", "Building Construction & Materials", "Structural Analysis", "History of Architecture", "Urban Planning & Landscape", "AutoCAD & 3D BIM"],
      requiredSkills: ["Spatial Reasoning", "Creativity & Sketching", "3D Modeling", "Mathematical Precision", "Aesthetic Sense"],
      careerOpportunities: ["Architect", "Interior Architect", "Urban Designer", "Landscape Consultant", "Sustainable Building Specialist"],
      higherStudies: ["Master of Architecture (M.Arch)", "Master of Urban Planning (MUP)", "Interior Architecture MS"],
      approxFee: "₹1,50,000 - ₹3,20,000 / year",
      officialSource: "https://www.coa.gov.in",
      verificationNote: "Must ensure institution is recognized by Council of Architecture (CoA)."
    },
    {
      id: "course-bca",
      streamId: "stream-mpc",
      code: "BCA",
      name: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years (6 Semesters)",
      degreeType: "Bachelor Degree",
      eligibility: "10+2 with Mathematics/Computer Science or any stream with 50%",
      entranceRequirements: "CUET-UG, IPU CET, State University entrance tests",
      mainSubjects: ["Programming in C/Java", "Web Technologies", "DBMS", "Software Testing", "Cloud Foundations", "Mobile App Development"],
      requiredSkills: ["Web Development (HTML/CSS/JS)", "SQL", "Object-Oriented Programming", "Communication"],
      careerOpportunities: ["Front-End Developer", "Software Support Specialist", "Database Administrator", "Junior Programmer"],
      higherStudies: ["MCA (Master of Computer Applications)", "M.Sc Computer Science", "MBA in IT"],
      approxFee: "₹60,000 - ₹1,80,000 / year",
      officialSource: "https://www.ugc.ac.in",
      verificationNote: "Top choice for students seeking faster entry into IT with options for MCA lateral entry."
    },
    {
      id: "course-nda",
      streamId: "stream-mpc",
      code: "DEFENCE_NDA",
      name: "National Defence Academy (NDA) / Technical Navy & Army Entry",
      duration: "3 Years NDA + 1 Year IMA/AFA/NA",
      degreeType: "B.Sc / B.Tech (JNU Affiliated) + Officer Commission",
      eligibility: "10+2 MPC for Air Force & Navy wings; Any stream for Army wing. Unmarried candidates age 16.5 - 19.5 yrs",
      entranceRequirements: "UPSC NDA & NA Exam + 5-day SSB Interview + Comprehensive Medical Board",
      mainSubjects: ["Mathematics", "General Ability Test (English & General Knowledge)", "Military Tactics & Strategy", "Leadership & Physical Endurance"],
      requiredSkills: ["Physical Fitness", "Mental Resilience", "Officer Like Qualities (OLQ)", "Rapid Decision Making", "Integrity"],
      careerOpportunities: ["Lieutenant (Army)", "Sub-Lieutenant (Navy)", "Flying Officer (Air Force)"],
      higherStudies: ["Defence Services Staff College (DSSC)", "Specialized Aviation/Weapons Training"],
      approxFee: "Fully funded by Government of India with stipend during training",
      officialSource: "https://upsc.gov.in",
      verificationNote: "Rigorous physical and medical criteria apply. Strict age deadlines."
    },

    // --- BiPC Pathways ---
    {
      id: "course-mbbs",
      streamId: "stream-bipc",
      code: "MBBS",
      name: "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
      duration: "5.5 Years (4.5 Years Academic + 1 Year Compulsory Rotatory Internship)",
      degreeType: "Medical Degree",
      eligibility: "10+2 with Physics, Chemistry, Biology/Biotechnology & English (Min 50% for General, 40% reserved)",
      entranceRequirements: "NEET-UG (National Eligibility cum Entrance Test)",
      mainSubjects: ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "Forensic Medicine", "Community Medicine", "General Medicine", "General Surgery", "Pediatrics"],
      requiredSkills: ["Clinical Empathy", "Diagnostic Acumen", "Extensive Memorization", "Stress Endurance", "Observation"],
      careerOpportunities: ["General Medical Officer", "Resident Doctor", "Primary Health Physician", "Medical Consultant"],
      higherStudies: ["MD (Doctor of Medicine)", "MS (Master of Surgery)", "DNB", "Super-specialization (DM/M.Ch)"],
      approxFee: "Govt Colleges: ₹10,000 - ₹80,000/yr | Private/Deemed: ₹12,00,000 - ₹25,00,000/yr",
      officialSource: "https://www.nmc.org.in",
      verificationNote: "National Medical Commission guidelines mandate qualifying NEET. State counseling governs quotas."
    },
    {
      id: "course-bpharm",
      streamId: "stream-bipc",
      code: "BPHARM",
      name: "Bachelor of Pharmacy (B.Pharm)",
      duration: "4 Years (8 Semesters)",
      degreeType: "Bachelor Degree",
      eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics (Minimum 50%)",
      entranceRequirements: "State CETs (EAMCET, MHT-CET, WBJEE), CUET, GPAT (for postgrad)",
      mainSubjects: ["Pharmaceutics", "Medicinal Chemistry", "Pharmacology & Toxicology", "Pharmacognosy", "Pharmaceutical Analysis", "Clinical Pharmacy"],
      requiredSkills: ["Chemical Synthesis Knowledge", "Analytical Laboratory Skills", "Quality Control", "Detail Orientation"],
      careerOpportunities: ["Formulation Scientist", "Drug Inspector", "Regulatory Affairs Executive", "Clinical Research Associate", "Pharmacy Entrepreneur"],
      higherStudies: ["M.Pharm (Pharmaceutics/Pharmacology)", "Pharm.D (Post-Baccalaureate)", "MBA in Pharma Management"],
      approxFee: "₹80,000 - ₹2,20,000 / year",
      officialSource: "https://www.pci.nic.in",
      verificationNote: "Pharmacy Council of India (PCI) approval required for license to practice."
    },
    {
      id: "course-bsc-biotech",
      streamId: "stream-bipc",
      code: "BSC_BIOTECH",
      name: "B.Sc in Biotechnology / Bioinformatics",
      duration: "3-4 Years (as per NEP 2020)",
      degreeType: "Bachelor of Science (Honours)",
      eligibility: "10+2 with Biology, Chemistry, and Physics/Mathematics (Minimum 50%)",
      entranceRequirements: "CUET-UG, State University Entrance Exams",
      mainSubjects: ["Molecular Biology", "Genetic Engineering", "Cell Biology", "Immunology", "Bioinformatics & Genomics", "Bioprocess Engineering"],
      requiredSkills: ["PCR & Gel Electrophoresis", "Python/R for Genomics", "Scientific Writing", "Laboratory Safety"],
      careerOpportunities: ["Biotech Laboratory Technician", "Genomics Research Assistant", "Quality Analyst in Biopharma", "Bioinformatics Analyst"],
      higherStudies: ["M.Sc Biotechnology", "Integrated PhD (IISc/IIT/TIFR through JAM/GAT-B)", "Bioprocess MBA"],
      approxFee: "₹50,000 - ₹1,60,000 / year",
      officialSource: "https://dbtindia.gov.in",
      verificationNote: "Research-driven sector; long-term career growth typically requires postgraduate specialization."
    },
    {
      id: "course-bsc-agri",
      streamId: "stream-bipc",
      code: "BSC_AGRI",
      name: "B.Sc (Hons) Agriculture",
      duration: "4 Years (8 Semesters with Rural Agricultural Work Experience - RAWE)",
      degreeType: "Bachelor of Science (Honours)",
      eligibility: "10+2 with PCB, PCM, or Inter Agriculture (Minimum 50%)",
      entranceRequirements: "ICAR AIEEA (via CUET-UG), State Agricultural CETs",
      mainSubjects: ["Agronomy", "Soil Science", "Plant Genetics & Breeding", "Horticulture", "Plant Pathology", "Agricultural Economics & Extension"],
      requiredSkills: ["Field Experimentation", "Soil Chemistry Analysis", "Crop Protection Techniques", "Agri-Business Management"],
      careerOpportunities: ["Agricultural Field Officer (IBPS AFO)", "Seed Production Specialist", "Plantation Manager", "Agri-Tech Startup Founder"],
      higherStudies: ["M.Sc Agriculture", "MBA in Agribusiness Management (IIM-A/L)", "Agricultural Research Service (ARS)"],
      approxFee: "₹30,000 - ₹1,20,000 / year",
      officialSource: "https://icar.org.in",
      verificationNote: "Verify that the college has ICAR accreditation for government job eligibility."
    },
    {
      id: "course-allied-health",
      streamId: "stream-bipc",
      code: "ALLIED_HEALTH",
      name: "B.Sc Allied Health Sciences (Radiology & Medical Imaging)",
      duration: "3 Years + 1 Year Internship",
      degreeType: "Bachelor Degree",
      eligibility: "10+2 with PCB (Minimum 50%)",
      entranceRequirements: "Merit-based / State Paramedical Board Entrance",
      mainSubjects: ["Radiographic Techniques", "Computed Tomography (CT)", "Magnetic Resonance Imaging (MRI)", "Radiation Physics & Safety", "Human Anatomy"],
      requiredSkills: ["Equipment Operation", "Patient Safety Standards", "Anatomical Imaging Interpretation", "Protocol Adherence"],
      careerOpportunities: ["MRI/CT Technologist", "Radiology Imaging Specialist", "Medical Equipment Applications Specialist"],
      higherStudies: ["M.Sc Medical Imaging Technology", "Healthcare Administration"],
      approxFee: "₹60,000 - ₹1,80,000 / year",
      officialSource: "https://www.mohfw.gov.in",
      verificationNote: "Critical frontline hospital demand with high global migration avenues."
    },

    // --- MEC / Commerce / CEC Pathways ---
    {
      id: "course-bcom-hons",
      streamId: "stream-mec",
      code: "BCOM_HONS",
      name: "B.Com (Honours) / Accounting & Finance",
      duration: "3-4 Years (as per NEP 2020)",
      degreeType: "Bachelor of Commerce",
      eligibility: "10+2 with Commerce, Mathematics, or Economics (Minimum 50-60%)",
      entranceRequirements: "CUET-UG (Delhi University, BHU, etc.), University Merit",
      mainSubjects: ["Financial Accounting", "Corporate Law", "Income Tax Law & Practice", "Cost Accounting", "Auditing & Corporate Governance", "Financial Management"],
      requiredSkills: ["Financial Analysis", "Tally & Excel", "Tax Compliance", "Analytical Reasoning", "Commercial Awareness"],
      careerOpportunities: ["Accountant", "Tax Consultant", "Financial Analyst", "Audit Associate", "Treasury Assistant"],
      higherStudies: ["M.Com", "MBA Finance", "Chartered Accountancy (CA)", "CFA", "CMA", "ACCA"],
      approxFee: "₹25,000 - ₹1,50,000 / year",
      officialSource: "https://www.ugc.ac.in",
      verificationNote: "Combine with professional credentials (CA/CMA/CS/ACCA) for maximum industry value."
    },
    {
      id: "course-ca-pathway",
      streamId: "stream-cec",
      code: "CA_CHARTERED_ACCOUNTANCY",
      name: "Chartered Accountancy (ICAI CA Pathway)",
      duration: "Approx. 4-5 Years (Foundation -> Intermediate -> 2-yr Articleship -> Final)",
      degreeType: "Professional Certification (Recognized equivalent to Master's Degree)",
      eligibility: "Can register after 10th; eligible to appear in Foundation after 10+2 in any stream",
      entranceRequirements: "ICAI CA Foundation Exam",
      mainSubjects: ["Accounting & Auditing", "Business Law", "Direct & Indirect Taxation", "Strategic Financial Management", "Corporate and Economic Laws"],
      requiredSkills: ["Extreme Discipline", "Statutory Auditing", "Taxation Nuances", "Financial Valuation", "Integrity & Ethics"],
      careerOpportunities: ["Chartered Accountant", "Chief Financial Officer (CFO)", "Statutory Auditor", "Tax Director", "Investment Banker"],
      higherStudies: ["Independent Practice", "PhD in Commerce/Finance", "International CPA/ICAEW reciprocal paths"],
      approxFee: "Exam & Registration fees approx. ₹80,000 total across all stages + Coaching if opted",
      officialSource: "https://www.icai.org",
      verificationNote: "Pass percentages are rigorous. Requires simultaneous mandatory practical articleship training."
    },
    {
      id: "course-bba",
      streamId: "stream-mec",
      code: "BBA",
      name: "Bachelor of Business Administration (BBA) / Business Analytics",
      duration: "3-4 Years",
      degreeType: "Bachelor of Business Administration",
      eligibility: "10+2 in any stream with minimum 50% aggregate",
      entranceRequirements: "IPMAT (IIM Indore/Rohtak 5-yr integrated), CUET-UG, SET, NPAT",
      mainSubjects: ["Principles of Management", "Marketing Strategy", "Organizational Behavior", "Business Analytics & Statistics", "Operations Management", "Business Communication"],
      requiredSkills: ["Leadership", "Public Speaking & Presentation", "Data Interpretation", "Strategic Thinking", "Negotiation"],
      careerOpportunities: ["Business Analyst", "Marketing Associate", "Operations Coordinator", "HR Executive", "Product Associate"],
      higherStudies: ["MBA / PGDM (CAT, XAT, GMAT)", "Master of Science in Analytics"],
      approxFee: "₹80,000 - ₹3,50,000 / year",
      officialSource: "https://www.ugc.ac.in",
      verificationNote: "IPMAT offers direct 5-year integrated management pathway into premier IIMs straight after 12th."
    },
    {
      id: "course-bsc-economics",
      streamId: "stream-mec",
      code: "BSC_ECONOMICS",
      name: "B.Sc / BA (Honours) in Economics",
      duration: "3-4 Years",
      degreeType: "Bachelor Degree",
      eligibility: "10+2 with Mathematics / Business Mathematics (Minimum 60%)",
      entranceRequirements: "CUET-UG, St. Stephen's / Ashoka / Symbiosis Entrance",
      mainSubjects: ["Microeconomics", "Macroeconomics", "Econometrics", "Mathematical Economics", "Development Economics", "Public Policy Analysis"],
      requiredSkills: ["Statistical Modeling (R/Stata)", "Econometric Regressions", "Quantitative Logic", "Economic Policy Evaluation"],
      careerOpportunities: ["Economic Consultant", "Data & Policy Analyst", "Risk Analyst in Banking", "Research Associate at Think Tanks"],
      higherStudies: ["Master in Economics (DSE/ISI/MSE/JNU)", "MS Financial Economics", "Civil Services / IES"],
      approxFee: "₹30,000 - ₹2,50,000 / year",
      officialSource: "https://www.ugc.ac.in",
      verificationNote: "Strong mathematical aptitude is essential for modern quantitative econometrics."
    },

    // --- Arts / Humanities Pathways ---
    {
      id: "course-law-integrated",
      streamId: "stream-arts",
      code: "BALLB_INTEGRATED",
      name: "Integrated 5-Year Law (BA LLB / BBA LLB Hons)",
      duration: "5 Years (10 Semesters)",
      degreeType: "Dual Integrated Bachelor of Arts & Law",
      eligibility: "10+2 in any stream (Minimum 45% for General, 40% for SC/ST)",
      entranceRequirements: "CLAT (Common Law Admission Test for NLUs), AILET, LSAT-India, State Law CETs",
      mainSubjects: ["Constitutional Law", "Law of Torts", "Criminal Law (IPC/BNS)", "Corporate & Commercial Law", "Contract Law", "Moot Courts & Legal Drafting"],
      requiredSkills: ["Legal Reasoning", "Verbal Advocacy & Rhetoric", "Case Analysis", "Document Drafting", "Critical Research"],
      careerOpportunities: ["Litigation Advocate", "Corporate Legal Counsel", "Judicial Officer (after Judicial Services Exam)", "Legal Journalist", "Human Rights Advocate"],
      higherStudies: ["LLM (Master of Laws)", "Civil Services Examination", "Judicial Services"],
      approxFee: "NLUs: ₹2,00,000 - ₹3,20,000 / year | State Law Colleges: ₹20,000 - ₹80,000 / year",
      officialSource: "https://consortiumofnlus.ac.in",
      verificationNote: "Admission to 25 National Law Universities is governed by CLAT. High competition."
    },
    {
      id: "course-ba-psychology",
      streamId: "stream-arts",
      code: "BA_PSYCHOLOGY",
      name: "BA / B.Sc in Applied Psychology",
      duration: "3-4 Years",
      degreeType: "Bachelor Degree",
      eligibility: "10+2 in any stream with minimum 50%",
      entranceRequirements: "CUET-UG, University Merit",
      mainSubjects: ["Cognitive Psychology", "Abnormal Psychology", "Developmental Psychology", "Psychological Testing & Statistics", "Counseling Psychology", "Social Psychology"],
      requiredSkills: ["Empathetic Listening", "Observation & Behavioral Coding", "Statistical Evaluation (SPSS)", "Interpersonal Rapport"],
      careerOpportunities: ["Behavioral Counselor Associate", "HR People Operations Specialist", "Mental Wellness Coordinator", "Market Research Analyst"],
      higherStudies: ["MA/M.Sc Psychology", "M.Phil / Professional Diploma in Clinical Psychology (RCI approved)", "Psy.D / PhD"],
      approxFee: "₹30,000 - ₹1,80,000 / year",
      officialSource: "https://www.rehabcouncil.nic.in",
      verificationNote: "To practice as a licensed Clinical Psychologist in India, RCI-recognized post-graduate credential is required."
    },
    {
      id: "course-bdes",
      streamId: "stream-arts",
      code: "BDES_DESIGN",
      name: "Bachelor of Design (B.Des - UI/UX, Product, Communication)",
      duration: "4 Years (8 Semesters)",
      degreeType: "Bachelor of Design",
      eligibility: "10+2 in any stream with minimum 50%",
      entranceRequirements: "UCEED (IITs), NID DAT, NIFT Entrance, SEED",
      mainSubjects: ["Design Thinking & Human-Centered Design", "Interaction Design (UI/UX)", "Visual Branding", "Typography & Color Theory", "Prototyping & Wireframing", "User Research Methods"],
      requiredSkills: ["Figma / Adobe XD", "User Empathy", "Visual Composition", "Design Systems", "Usability Testing"],
      careerOpportunities: ["UI/UX Designer", "Product Designer", "Visual Experience Specialist", "Design Strategist"],
      higherStudies: ["M.Des (Master of Design at IITs/NID)", "MS Human-Computer Interaction (HCI) abroad"],
      approxFee: "NID/IIT: ₹1,50,000 - ₹2,50,000/yr | Private: ₹2,50,000 - ₹4,50,000/yr",
      officialSource: "https://www.uceed.iitb.ac.in",
      verificationNote: "Requires submission of creative portfolios during personal studio tests."
    },
    {
      id: "course-bjmc",
      streamId: "stream-arts",
      code: "BJMC",
      name: "BA in Journalism & Mass Communication (BJMC)",
      duration: "3 Years",
      degreeType: "Bachelor Degree",
      eligibility: "10+2 in any stream with minimum 50%",
      entranceRequirements: "CUET-UG, IIMC Entrance, University Merit",
      mainSubjects: ["Investigative Reporting & Writing", "Digital Media Production", "Media Ethics & Law", "Audio-Visual Editing", "Public Relations & Advertising", "Podcasting & New Media"],
      requiredSkills: ["Storytelling", "Video & Audio Editing", "Interviewing Skills", "Fact-Checking", "Social Media Strategy"],
      careerOpportunities: ["Journalist / News Reporter", "Content Strategist", "Public Relations Executive", "Podcast Producer", "Corporate Communications Specialist"],
      higherStudies: ["Master in Mass Communication", "PG Diploma at IIMC / ACJ", "Media Management MBA"],
      approxFee: "₹40,000 - ₹1,90,000 / year",
      officialSource: "https://www.ugc.ac.in",
      verificationNote: "Portfolio of published articles, podcasts, or video journalism heavily enhances placement."
    }
  ],

  careers: [
    {
      id: "career-swe",
      title: "Software Development Engineer (SDE)",
      fieldCategory: "Technology",
      streamAffinity: ["stream-mpc", "stream-mec"],
      requiredDegree: "B.Tech CSE / IT / BCA + MCA / B.Sc Computer Science",
      salaryBenchmark: "₹6,00,000 - ₹24,00,000 / year (Entry to Mid)",
      growthOutlook: "very_high",
      description: "Builds, tests, and deploys high-scale software applications, backend services, and APIs powering modern digital infrastructure.",
      requiredSkills: ["Data Structures & Algorithms", "Java/Python/Go", "System Design", "Git & CI/CD", "Databases (SQL/NoSQL)"],
      entryResponsibilities: "Writing clean, unit-tested code, reviewing peer pull requests, triaging defects, and collaborating in agile sprints.",
      progression: "Junior SDE -> SDE II -> Senior SDE -> Staff Engineer -> Principal Architect / Engineering Manager",
      higherStudies: ["MS Computer Science", "M.Tech", "Executive MBA"]
    },
    {
      id: "career-aiml",
      title: "AI / Machine Learning Engineer",
      fieldCategory: "Technology",
      streamAffinity: ["stream-mpc"],
      requiredDegree: "B.Tech AIML / CSE / Data Science or M.Sc Computing",
      salaryBenchmark: "₹8,00,000 - ₹30,00,000 / year",
      growthOutlook: "very_high",
      description: "Designs predictive models, fine-tunes deep neural networks, and deploys scalable AI systems for generative intelligence, computer vision, and NLP.",
      requiredSkills: ["Python", "PyTorch / TensorFlow", "Vector Databases", "Mathematics & Statistics", "Model Optimization"],
      entryResponsibilities: "Preparing datasets, training baseline ML models, benchmarking inference latency, and tracking experiment telemetry.",
      progression: "Junior ML Engineer -> Applied AI Scientist -> Lead Machine Learning Engineer -> Head of AI",
      higherStudies: ["PhD in Artificial Intelligence", "MS in Machine Learning"]
    },
    {
      id: "career-data-scientist",
      title: "Data Scientist / Business Analytics Specialist",
      fieldCategory: "Technology & Finance",
      streamAffinity: ["stream-mpc", "stream-mec"],
      requiredDegree: "B.Tech / B.Sc Statistics / B.Sc Economics / BBA Analytics",
      salaryBenchmark: "₹7,00,000 - ₹22,00,000 / year",
      growthOutlook: "very_high",
      description: "Extracts actionable strategic insights from massive structured and unstructured datasets to drive business decision-making.",
      requiredSkills: ["SQL", "Python / R", "Tableau / PowerBI", "Statistical Hypothesis Testing", "Business Acumen"],
      entryResponsibilities: "Writing complex queries, building automated executive dashboards, conducting A/B testing analysis.",
      progression: "Junior Data Analyst -> Data Scientist -> Senior Data Scientist -> Director of Data Analytics",
      higherStudies: ["MS in Business Analytics", "Master of Statistics (ISI)", "MBA"]
    },
    {
      id: "career-doctor",
      title: "Medical Practitioner / Physician",
      fieldCategory: "Medicine & Healthcare",
      streamAffinity: ["stream-bipc"],
      requiredDegree: "MBBS + MD / MS / DNB",
      salaryBenchmark: "₹8,00,000 - ₹28,00,000 / year (Junior to Senior Consultant)",
      growthOutlook: "very_high",
      description: "Diagnoses illnesses, prescribes clinical therapies, performs patient management, and saves lives in primary, secondary, and tertiary hospitals.",
      requiredSkills: ["Clinical Diagnosis", "Pharmacotherapy Knowledge", "Patient Empathy", "Emergency Life Support", "Observation"],
      entryResponsibilities: "Conducting patient rounds, taking medical histories, ordering diagnostic tests, administering medical treatments.",
      progression: "Junior Resident -> Senior Resident -> Assistant Professor -> Consultant Physician -> Medical Director",
      higherStudies: ["Super-specialty (DM / M.Ch)", "Fellowship in Interventional Cardiology/Neurology"]
    },
    {
      id: "career-pharma-scientist",
      title: "Pharmaceutical Formulation & Research Scientist",
      fieldCategory: "Medicine & Science",
      streamAffinity: ["stream-bipc"],
      requiredDegree: "B.Pharm / M.Pharm / Pharm.D / M.Sc Chemistry",
      salaryBenchmark: "₹4,50,000 - ₹15,00,000 / year",
      growthOutlook: "high",
      description: "Synthesizes innovative drug delivery systems, conducts bioequivalence studies, and ensures stringent regulatory compliance.",
      requiredSkills: ["High-Performance Liquid Chromatography (HPLC)", "Drug Formulation", "Regulatory Documentation (USFDA/EMA)", "Pharmacology"],
      entryResponsibilities: "Executing stability testing, developing tablet/capsule formulations, authoring standard operating procedures (SOPs).",
      progression: "Research Associate -> Senior Scientist -> R&D Manager -> VP of Pharmaceutical Development",
      higherStudies: ["PhD in Pharmaceutical Sciences", "MBA in Healthcare Management"]
    },
    {
      id: "career-agri-officer",
      title: "Agricultural Development Officer / Agri-Tech Consultant",
      fieldCategory: "Agriculture & Science",
      streamAffinity: ["stream-bipc"],
      requiredDegree: "B.Sc (Hons) Agriculture",
      salaryBenchmark: "₹5,00,000 - ₹14,00,000 / year",
      growthOutlook: "high",
      description: "Guides farming communities on sustainable agronomy, manages institutional crop insurance, and develops precision farming solutions.",
      requiredSkills: ["Soil Science", "Crop Protection", "Pest Management", "Agri-Extension Communication", "Precision Drone Technology"],
      entryResponsibilities: "Field inspections, soil testing analysis, guiding farmers on high-yield hybrid seed varieties, credit assessment.",
      progression: "Field Officer -> District Agricultural Officer -> NABARD Manager -> Agri-Commodity Trading Head",
      higherStudies: ["M.Sc in Agronomy", "MBA in Food & Agribusiness Management"]
    },
    {
      id: "career-ca",
      title: "Chartered Accountant (CA)",
      fieldCategory: "Commerce & Finance",
      streamAffinity: ["stream-mec", "stream-cec"],
      requiredDegree: "ICAI CA Qualification (+ optional B.Com / BBA)",
      salaryBenchmark: "₹9,00,000 - ₹35,00,000 / year",
      growthOutlook: "very_high",
      description: "Oversees corporate audit, statutory tax compliance, corporate restructuring, forensic investigation, and financial strategy.",
      requiredSkills: ["Statutory Auditing", "Indian Accounting Standards (Ind AS)", "Direct & Indirect Tax Laws", "Financial Modeling", "Corporate Ethics"],
      entryResponsibilities: "Auditing balance sheets, filing corporate tax returns, verifying internal controls, preparing financial statements.",
      progression: "Audit Senior -> Assistant Audit Manager -> Audit Partner / Chief Financial Officer (CFO)",
      higherStudies: ["CFA (USA)", "Insolvency Professional Certification", "International CPA"]
    },
    {
      id: "career-fin-analyst",
      title: "Financial Analyst / Investment Banking Associate",
      fieldCategory: "Finance",
      streamAffinity: ["stream-mec", "stream-cec", "stream-mpc"],
      requiredDegree: "B.Com / BBA / Economics Hons / B.Tech + MBA / CFA",
      salaryBenchmark: "₹8,00,000 - ₹28,00,000 / year",
      growthOutlook: "very_high",
      description: "Evaluates financial assets, builds discounted cash flow (DCF) valuation models, and advises on mergers & acquisitions (M&A).",
      requiredSkills: ["Advanced Financial Modeling (Excel)", "DCF & LBO Valuation", "Bloomberg / PitchBook", "Equity Research", "Presentation Pitching"],
      entryResponsibilities: "Building three-statement financial models, authoring market pitch decks, analyzing competitor balance sheets.",
      progression: "Financial Analyst -> Associate -> Vice President -> Managing Director",
      higherStudies: ["CFA Charter", "Top-tier MBA (IIMs/ISB/Wharton)"]
    },
    {
      id: "career-lawyer",
      title: "Corporate Legal Counsel / Advocate",
      fieldCategory: "Law",
      streamAffinity: ["stream-arts", "stream-cec", "stream-mec"],
      requiredDegree: "5-Year Integrated BA LLB / BBA LLB / 3-Year LLB",
      salaryBenchmark: "₹7,00,000 - ₹26,00,000 / year",
      growthOutlook: "high",
      description: "Drafts high-stakes commercial agreements, structures joint ventures, ensures corporate governance, and represents clients in dispute resolution.",
      requiredSkills: ["Contractual Drafting", "Legal Research (SCC Online / Manupatra)", "Negotiation", "Due Diligence", "Regulatory Compliance"],
      entryResponsibilities: "Drafting non-disclosure agreements, conducting legal due diligence audits, reviewing regulatory filings.",
      progression: "Junior Associate -> Senior Associate -> Partner at Law Firm / General Counsel at Multinational",
      higherStudies: ["LLM in Corporate Law (Cambridge/Harvard/NLSIU)", "Company Secretary (CS)"]
    },
    {
      id: "career-uiux-designer",
      title: "UI / UX & Product Experience Designer",
      fieldCategory: "Design & Technology",
      streamAffinity: ["stream-arts", "stream-mpc"],
      requiredDegree: "B.Des / B.Arch / B.Tech / Any Degree with strong design portfolio",
      salaryBenchmark: "₹6,00,000 - ₹20,00,000 / year",
      growthOutlook: "very_high",
      description: "Crafts intuitive digital interfaces, conducts ethnographic user research, and architecturally defines product interaction design.",
      requiredSkills: ["Figma", "User Journey Mapping", "Wireframing & High-Fidelity Prototyping", "Design Systems", "Usability Testing"],
      entryResponsibilities: "Creating responsive UI component libraries, conducting usability interviews, collaborating with frontend engineers.",
      progression: "Associate Product Designer -> Senior Product Designer -> Staff Designer -> VP of Design",
      higherStudies: ["Master of Design (M.Des)", "HCI Specialization"]
    },
    {
      id: "career-psychologist",
      title: "Clinical / Counseling Psychologist",
      fieldCategory: "Medicine & Humanities",
      streamAffinity: ["stream-arts", "stream-bipc"],
      requiredDegree: "BA/B.Sc Psychology + MA/M.Sc + M.Phil (RCI registered)",
      salaryBenchmark: "₹4,50,000 - ₹16,00,000 / year",
      growthOutlook: "very_high",
      description: "Administers psychometric diagnostics, delivers cognitive behavioral therapy (CBT), and guides patients through emotional recovery.",
      requiredSkills: ["Empathetic Inquiry", "Cognitive Behavioral Therapy (CBT)", "Psychometric Assessment", "Active Listening", "Confidentiality"],
      entryResponsibilities: "Conducting clinical intake interviews, administering standardized IQ/personality tests, formulating therapy plans.",
      progression: "Trainee Psychologist -> Clinical Psychologist -> Head of Mental Health Clinic -> Private Consultant",
      higherStudies: ["Psy.D / PhD in Clinical Psychology", "Neuropsychology Specialization"]
    },
    {
      id: "career-civil-services",
      title: "Civil Services Officer (IAS / IPS / IFS / IRS)",
      fieldCategory: "Government Careers",
      streamAffinity: ["stream-arts", "stream-mpc", "stream-bipc", "stream-mec", "stream-cec"],
      requiredDegree: "Graduation in any recognized discipline (Age 21-32, relaxations for reserved categories)",
      salaryBenchmark: "Government Pay Level 10 (Basic ₹56,100 + DA + HRA + Allowances + Official Quarters & Transport)",
      growthOutlook: "high",
      description: "Administers government districts, maintains law and order, formulates public policy, and manages national socioeconomic development.",
      requiredSkills: ["Public Administration", "Integrity & Impartiality", "Holistic General Knowledge", "Crisis Management", "Analytical Writing"],
      entryResponsibilities: "Sub-Divisional Magistrate (SDM) / Assistant Commissioner, supervising public services, disaster management.",
      progression: "SDM -> District Magistrate (DM/Collector) -> Joint Secretary -> Secretary to Government of India / Chief Secretary",
      higherStudies: ["Mid-career Masters at Harvard Kennedy School / LSE", "National Defence College"]
    }
  ],

  assessmentQuestions: [
    {
      id: "q1",
      category: "Logical Reasoning",
      type: "mcq",
      text: "Look at this sequence: 4, 9, 25, 49, 121, ... What number comes next?",
      options: [
        { text: "144", weight: { analytical: 10, logical: 10 } },
        { text: "169", weight: { analytical: 95, logical: 95, math: 90 } }, // Squares of primes: 2^2, 3^2, 5^2, 7^2, 11^2, 13^2 = 169
        { text: "196", weight: { analytical: 20, logical: 20 } },
        { text: "225", weight: { analytical: 20, logical: 20 } }
      ],
      explanation: "The numbers are squares of consecutive prime numbers: 2, 3, 5, 7, 11, 13. 13 squared is 169."
    },
    {
      id: "q2",
      category: "Mathematics",
      type: "mcq",
      text: "If a system's throughput increases by 50% while the average latency decreases by 20%, what is the relative change in efficiency (Throughput / Latency)?",
      options: [
        { text: "Increases by 30%", weight: { math: 30, analytical: 30 } },
        { text: "Increases by 70%", weight: { math: 40, analytical: 40 } },
        { text: "Increases by 87.5%", weight: { math: 100, analytical: 95 } }, // 1.5 / 0.8 = 1.875 (+87.5%)
        { text: "Remains constant", weight: { math: 10, analytical: 10 } }
      ]
    },
    {
      id: "q3",
      category: "Technical Knowledge",
      type: "scenario",
      text: "You are tasked with storing millions of customer purchase transactions so that analysts can run complex analytical aggregation queries in seconds. Which tool is most appropriate?",
      options: [
        { text: "A traditional spreadsheet like Excel", weight: { technical: 15, analytical: 20 } },
        { text: "A distributed column-oriented data warehouse (like BigQuery/Snowflake) with SQL", weight: { technical: 100, analytical: 90, problemSolving: 90 } },
        { text: "Plain text CSV files stored on a flash drive", weight: { technical: 0, analytical: 5 } },
        { text: "A simple client-side browser cookie", weight: { technical: 0, analytical: 0 } }
      ]
    },
    {
      id: "q4",
      category: "Communication",
      type: "scenario",
      text: "A non-technical client asks why their website took 4 days to fix a database bottleneck. How do you respond?",
      options: [
        { text: "Send them raw query execution plans and error log dumps without comments", weight: { communication: 10, leadership: 10 } },
        { text: "Explain using a clear analogy (e.g. widening a highway lane during heavy traffic) and provide the preventative steps taken", weight: { communication: 100, leadership: 90, collaboration: 85 } },
        { text: "Tell them it is too complicated for non-engineers to understand", weight: { communication: 0, collaboration: 0 } },
        { text: "Blame the server hosting company entirely", weight: { communication: 10, leadership: 0 } }
      ]
    },
    {
      id: "q5",
      category: "Creativity",
      type: "rating",
      text: "When confronted with an open-ended assignment, how much do you enjoy experimenting with visual design, storytelling, and novel presentations rather than following rigid templates?",
      options: [
        { text: "Strongly Prefer Templates (1/5)", weight: { creativity: 20 } },
        { text: "Somewhat Prefer Guided Steps (2/5)", weight: { creativity: 40 } },
        { text: "Balanced Mix of Structure & Novelty (3/5)", weight: { creativity: 65 } },
        { text: "Enthusiastic about Creative Exploration (4/5)", weight: { creativity: 85 } },
        { text: "Love Pioneering Unconventional Solutions (5/5)", weight: { creativity: 100 } }
      ]
    },
    {
      id: "q6",
      category: "Problem Solving",
      type: "scenario",
      text: "Your team has two weeks left before a critical competition or project submission, and a core component fails unexpected stress testing. What is your immediate course of action?",
      options: [
        { text: "Abandon the project and start an entirely different easy one", weight: { problemSolving: 10, resilience: 10 } },
        { text: "Isolate the root cause using systematic triage, prioritize the minimum viable fix, and distribute tasks across team strengths", weight: { problemSolving: 100, leadership: 95, collaboration: 90 } },
        { text: "Hide the defect and hope the evaluators do not test that specific edge case", weight: { problemSolving: 5, leadership: 0 } },
        { text: "Wait until the final day to see if anyone else on the team fixes it", weight: { problemSolving: 10, collaboration: 10 } }
      ]
    },
    {
      id: "q7",
      category: "Subject Strengths",
      type: "interest",
      text: "Which of the following topics gives you the highest intellectual energy when diving deep?",
      options: [
        { text: "Algorithms, writing code, building digital devices, and robotics", weight: { technical: 95, analytical: 90, streamPref: "MPC" } },
        { text: "Human anatomy, biological genetics, pharmaceuticals, and agricultural ecology", weight: { science: 95, biology: 95, streamPref: "BiPC" } },
        { text: "Stock markets, corporate balance sheets, economic trends, and business scaling", weight: { commerce: 95, math: 80, streamPref: "MEC" } },
        { text: "Constitutional justice, human psychology, investigative journalism, and creative arts", weight: { humanities: 95, communication: 90, streamPref: "ARTS" } }
      ]
    },
    {
      id: "q8",
      category: "Personality & Work Preference",
      type: "mcq",
      text: "In an ideal workplace, which environment would you thrive in most?",
      options: [
        { text: "A high-tech lab or software hub solving complex technical puzzles with high autonomy", weight: { technical: 90, analytical: 85 } },
        { text: "A clinical hospital, diagnostic lab, or field research center helping people directly", weight: { empathy: 95, collaboration: 90 } },
        { text: "A high-tempo financial trading floor, corporate consulting firm, or startup venture", weight: { leadership: 90, business: 95 } },
        { text: "A courtroom, creative design studio, news agency, or public policy think tank", weight: { creativity: 90, communication: 95 } }
      ]
    },
    {
      id: "q9",
      category: "Analytical Ability",
      type: "mcq",
      text: "All engineers are problem-solvers. Some problem-solvers are chess players. No chess player dislikes logic. Which conclusion MUST be true?",
      options: [
        { text: "All engineers play chess", weight: { analytical: 20 } },
        { text: "Some problem-solvers do not dislike logic", weight: { analytical: 100, logical: 100 } },
        { text: "All chess players are engineers", weight: { analytical: 10 } },
        { text: "Nobody who dislikes logic can solve problems", weight: { analytical: 30 } }
      ]
    },
    {
      id: "q10",
      category: "Leadership & Collaboration",
      type: "scenario",
      text: "During a group presentation, your peer freezes on stage and forgets their portion of the data slides. How do you respond?",
      options: [
        { text: "Laugh along with the audience to lighten the mood", weight: { leadership: 0, collaboration: 0 } },
        { text: "Smoothly step in with an encouraging transition, summarize the key takeaway, and prompt them with an easy cue to regain momentum", weight: { leadership: 100, collaboration: 100, communication: 95 } },
        { text: "Leave them to figure it out so you don't overstep", weight: { leadership: 20, collaboration: 20 } },
        { text: "Publicly correct them right on stage", weight: { leadership: 10, collaboration: 10 } }
      ]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Interactive Student Portfolio & Algorithm Visualizer",
      category: "beginner",
      careerField: "Technology",
      difficulty: "Beginner",
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      description: "Build a responsive web application that visualizes sorting algorithms (Bubble, Insertion, QuickSort) with animation speeds and step counters.",
      expectedOutcome: "A deployable GitHub portfolio project demonstrating DOM manipulation and algorithmic comprehension.",
      estimatedHours: 25,
      learningObjectives: ["DOM manipulation", "Time complexity visualization", "Responsive CSS flex/grid", "Git workflow"]
    },
    {
      id: "proj-2",
      title: "Personal Finance & Investment Budget Tracker",
      category: "beginner",
      careerField: "Finance & Commerce",
      difficulty: "Beginner",
      technologies: ["Excel/Google Sheets", "Python (Pandas)", "Matplotlib"],
      description: "Design an automated financial tracker that imports bank statements, categorizes spending, and forecasts savings according to the 50/30/20 budget rule.",
      expectedOutcome: "Clean dashboards tracking monthly cash inflows, recurring expenses, and dividend reinvestment plans.",
      estimatedHours: 20,
      learningObjectives: ["Data cleaning with Pandas", "Financial statement reconciliation", "Budgeting principles"]
    },
    {
      id: "proj-3",
      title: "AI-Powered Medical Diagnostic Assistant & Symptom Triager",
      category: "intermediate",
      careerField: "Medicine & Technology",
      difficulty: "Intermediate",
      technologies: ["Python", "FastAPI", "Scikit-Learn", "React"],
      description: "Develop a clinical triage decision support system that correlates patient symptoms with differential diagnoses, referencing verified medical datasets.",
      expectedOutcome: "A full-stack diagnostic prototype with confidence scores and mandatory disclaimer warning to consult certified physicians.",
      estimatedHours: 50,
      learningObjectives: ["Machine learning classification", "RESTful API architecture", "Healthcare ethics and data disclaimers"]
    },
    {
      id: "proj-4",
      title: "Corporate Balance Sheet & Statutory Tax Analyzer",
      category: "intermediate",
      careerField: "Commerce & Finance",
      difficulty: "Intermediate",
      technologies: ["Python", "OpenPyXL", "SQL", "Streamlit"],
      description: "Build an interactive platform to ingest audited annual reports, compute DuPont financial ratios, and flag potential statutory GST/TDS anomalies.",
      expectedOutcome: "Comprehensive automated ratio analysis report exportable to PDF for equity research.",
      estimatedHours: 45,
      learningObjectives: ["DuPont analysis", "Ind AS statutory ratios", "Automated executive reporting"]
    },
    {
      id: "proj-5",
      title: "Precision Farming & Crop Disease Detection via Computer Vision",
      category: "advanced",
      careerField: "Agriculture & Technology",
      difficulty: "Advanced",
      technologies: ["PyTorch", "OpenCV", "YOLOv8", "Raspberry Pi / Mobile App"],
      description: "Train a convolutional neural network on leaf imagery to classify 15+ plant pathologies (rust, blight, mosaic) and suggest eco-friendly remediation.",
      expectedOutcome: "Real-time edge-device or mobile inference giving actionable disease diagnosis in under 500ms.",
      estimatedHours: 80,
      learningObjectives: ["Transfer learning with CNNs", "Image data augmentation", "Agricultural pathology", "Edge model quantization"]
    },
    {
      id: "proj-6",
      title: "Full-Stack Enterprise Microservices Platform with WebRTC",
      category: "capstone",
      careerField: "Technology",
      difficulty: "Capstone / Final-Year",
      technologies: ["Docker", "Kubernetes", "Node.js/Go", "PostgreSQL", "Redis", "Kafka", "React"],
      description: "A production-grade distributed consultation portal featuring encrypted video calls, queuing microservices, distributed logging, and role-based access control.",
      expectedOutcome: "Production-ready repository with Docker Compose and CI/CD pipelines deployed to cloud.",
      estimatedHours: 120,
      learningObjectives: ["Distributed microservices architecture", "Event-driven messaging with Kafka", "Container orchestration", "End-to-end encryption"]
    }
  ],

  certifications: [
    {
      id: "cert-aws-cloud",
      name: "AWS Certified Cloud Practitioner",
      issuingOrg: "Amazon Web Services",
      costType: "paid",
      difficulty: "Beginner",
      duration: "4-6 Weeks",
      field: "Technology",
      url: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
    },
    {
      id: "cert-google-data",
      name: "Google Data Analytics Professional Certificate",
      issuingOrg: "Google (via Coursera)",
      costType: "paid",
      difficulty: "Beginner to Intermediate",
      duration: "3-6 Months",
      field: "Technology & Business",
      url: "https://grow.google/certificates/data-analytics/"
    },
    {
      id: "cert-meta-frontend",
      name: "Meta Front-End Developer Professional Certificate",
      issuingOrg: "Meta (via Coursera)",
      costType: "paid",
      difficulty: "Intermediate",
      duration: "4 Months",
      field: "Technology",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
    },
    {
      id: "cert-nptel-python",
      name: "Joy of Computing using Python (NPTEL / Swayam)",
      issuingOrg: "IIT Madras / Ministry of Education, Govt of India",
      costType: "free",
      difficulty: "Beginner",
      duration: "12 Weeks",
      field: "Technology",
      url: "https://swayam.gov.in"
    },
    {
      id: "cert-cfa-1",
      name: "CFA Level 1 Exam",
      issuingOrg: "CFA Institute",
      costType: "paid",
      difficulty: "Advanced",
      duration: "6 Months",
      field: "Finance",
      url: "https://www.cfainstitute.org"
    },
    {
      id: "cert-who-epidemiology",
      name: "Basic Epidemiology & Global Health Surveillance",
      issuingOrg: "World Health Organization (OpenWHO)",
      costType: "free",
      difficulty: "Beginner",
      duration: "3 Weeks",
      field: "Medicine & Health",
      url: "https://openwho.org"
    }
  ],

  entranceExams: [
    {
      id: "exam-jee-main",
      name: "JEE (Main) - Joint Entrance Examination",
      conductedBy: "National Testing Agency (NTA)",
      streams: ["MPC"],
      registrationWindow: "November - December (Session 1) | February - March (Session 2)",
      examDates: "January & April",
      officialUrl: "https://jeemain.nta.nic.in",
      disclaimer: "Gateway to NITs, IIITs, CFTIs, and eligibility threshold for JEE (Advanced) to IITs."
    },
    {
      id: "exam-neet-ug",
      name: "NEET (UG) - National Eligibility cum Entrance Test",
      conductedBy: "National Testing Agency (NTA)",
      streams: ["BiPC"],
      registrationWindow: "February - March",
      examDates: "First Sunday of May",
      officialUrl: "https://neet.nta.nic.in",
      disclaimer: "Single national entrance examination for MBBS, BDS, BAMS, BHMS, and Allied Medical courses in India."
    },
    {
      id: "exam-cuet-ug",
      name: "CUET (UG) - Common University Entrance Test",
      conductedBy: "National Testing Agency (NTA)",
      streams: ["MPC", "BiPC", "MEC", "CEC", "ARTS"],
      registrationWindow: "February - April",
      examDates: "May - June",
      officialUrl: "https://cuetug.ntaonline.in",
      disclaimer: "Centralized test for admission to undergraduate programs in Central, State, and participating Private Universities."
    },
    {
      id: "exam-clat",
      name: "CLAT - Common Law Admission Test",
      conductedBy: "Consortium of National Law Universities",
      streams: ["ARTS", "CEC", "MEC", "MPC", "BiPC"],
      registrationWindow: "July - October",
      examDates: "First Sunday of December",
      officialUrl: "https://consortiumofnlus.ac.in",
      disclaimer: "Mandatory test for 5-Year Integrated Law (BA LLB / BBA LLB) in 25 National Law Universities."
    },
    {
      id: "exam-ca-foundation",
      name: "CA Foundation Exam",
      conductedBy: "Institute of Chartered Accountants of India (ICAI)",
      streams: ["MEC", "CEC", "Commerce", "MPC", "ARTS"],
      registrationWindow: "Up to Jan 1 for June exam | Up to July 1 for Dec/Jan exam",
      examDates: "May/June and November/December",
      officialUrl: "https://www.icai.org",
      disclaimer: "Entry-level milestone for the Chartered Accountancy qualification in India."
    }
  ],

  scholarships: [
    {
      id: "sch-inspire",
      name: "INSPIRE Scholarship for Higher Education (SHE)",
      provider: "Department of Science & Technology (DST), Govt of India",
      eligibility: "Top 1% rankers in 12th board exams opting for B.Sc / BS-MS in Natural & Basic Sciences.",
      benefit: "₹80,000 / year (₹60,000 scholarship + ₹20,000 summer research mentorship)",
      portal: "https://online-inspire.gov.in"
    },
    {
      id: "sch-central-sector",
      name: "Central Sector Scheme of Scholarships for College & University Students",
      provider: "Ministry of Education, Govt of India (via National Scholarship Portal)",
      eligibility: "Above 80th percentile in relevant stream in 10+2 with family income < ₹4.5 Lakh/yr.",
      benefit: "₹12,000 / year for undergraduate studies; ₹20,000 / year for postgrad",
      portal: "https://scholarships.gov.in"
    },
    {
      id: "sch-pmsss",
      name: "Prime Minister's Special Scholarship Scheme (PMSSS)",
      provider: "AICTE & Ministry of Education",
      eligibility: "Students from J&K and Ladakh passing 12th board securing admission in AICTE recognized colleges.",
      benefit: "Full academic fee reimbursement up to ₹1.25 - ₹3 Lakhs + ₹1 Lakh maintenance allowance",
      portal: "https://aicte-jk-scholarship-gov.in"
    }
  ],

  defaultStudent: {
    id: "student-sample-1",
    fullName: "Arjun Sharma",
    age: 18,
    email: "student@example.com",
    phone: "+91 98765 43210",
    location: "Hyderabad, India",
    avatar: "👨‍🎓",
    qualificationStatus: "completed_12th",
    streamId: "stream-mpc",
    streamCode: "MPC",
    aggregatePercentage: 88.5,
    grade: "A+",
    board: "Telangana State Board / CBSE",
    subjects: {
      "Mathematics": 92,
      "Physics": 86,
      "Chemistry": 84,
      "English": 90,
      "Computer Science": 94
    },
    entranceScores: {
      "JEE Main": "94.2 Percentile",
      "TS EAMCET": "Rank 4250"
    },
    skills: [
      { name: "Python", proficiency: 65, category: "programming" },
      { name: "Problem Solving", proficiency: 75, category: "soft_skills" },
      { name: "Mathematics", proficiency: 85, category: "technical" },
      { name: "SQL", proficiency: 30, category: "tools" },
      { name: "Communication", proficiency: 70, category: "soft_skills" }
    ],
    interests: ["Artificial Intelligence", "Software Development", "Robotics", "Space Science"],
    difficultAreas: ["Organic Chemistry", "Memorization-heavy Biology"],
    preferredWorkType: "hybrid",
    sectorPreference: "private",
    careerGoal: "Become a high-impact AI/ML Software Engineer building scalable intelligent applications.",
    budgetTier: "moderate", // ₹1.5L - 3L/yr
    preferredStudyMode: "offline",
    studyLocationPreference: "pan_india",
    profileCompletionPct: 85
  }
};

if (typeof window !== "undefined") {
  window.SeedData = SeedData;
}
