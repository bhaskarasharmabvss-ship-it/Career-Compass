/**
 * Mapping View - Visual Course -> Skill -> Career Interactive Pipeline
 * Career Compass
 */

const MappingView = {
  selectedNode: 1,

  render() {
    const student = StorageService.getStudentProfile();
    const stream = student.streamCode || "MPC";

    const pipelineStages = [
      {
        id: 1,
        title: "1. 10+2 Intermediate Stream",
        subtitle: `${stream} Stream (${student.aggregatePercentage || 85}%)`,
        icon: "🎓",
        desc: "Your foundational academic eligibility, core subject marks, and aptitude testing form the input baseline.",
        details: [
          `Primary Subjects: ${Object.keys(student.subjects || { 'Mathematics': 90, 'Physics': 85 }).join(', ')}`,
          `Entrance Eligibility: Qualified for JEE Main / Advanced, State CETs, CUET-UG, BITSAT.`
        ]
      },
      {
        id: 2,
        title: "2. Recommended Degree Course",
        subtitle: "B.Tech Computer Science & Engineering",
        icon: "🏛️",
        desc: "A 4-year formal undergraduate curriculum structured into 8 semesters covering foundational through advanced computing.",
        details: [
          "Degree Type: Bachelor of Technology (AICTE / UGC Accredited)",
          "Duration: 4 Years (160+ Academic Credits)",
          "Annual Fee: ₹40,000 - ₹3,50,000 depending on Govt vs Private institution"
        ]
      },
      {
        id: 3,
        title: "3. Core Subjects & Disciplines",
        subtitle: "Data Structures, OS, Networks, DBMS",
        icon: "📚",
        desc: "The intellectual foundation taught in college lecture halls and practical laboratory sessions.",
        details: [
          "Year 1: Discrete Mathematics, C Programming, Digital Logic",
          "Year 2: Data Structures & Algorithms, Object-Oriented Design, Operating Systems",
          "Year 3: Computer Networks, DBMS, Software Engineering, Electives"
        ]
      },
      {
        id: 4,
        title: "4. Required Industry Skills",
        subtitle: "Python, Java, SQL, System Design",
        icon: "⚡",
        desc: "Practical competencies demanded by modern engineering teams beyond theoretical exams.",
        details: [
          "Technical: Data Structures, Algorithms, RESTful APIs, Git, Cloud Basics",
          "Soft Skills: Problem Solving, Clear Technical Writing, Agile Collaboration"
        ]
      },
      {
        id: 5,
        title: "5. Industry Certifications",
        subtitle: "AWS Cloud Practitioner, NPTEL Python",
        icon: "📜",
        desc: "Standardized third-party credentials verifying technical competence.",
        details: [
          "Foundational: NPTEL Joy of Computing using Python (IIT Madras)",
          "Cloud: AWS Certified Cloud Practitioner / Azure Fundamentals AZ-900",
          "Data: Google Data Analytics Professional Certificate"
        ]
      },
      {
        id: 6,
        title: "6. Practical Projects",
        subtitle: "Portfolio & Full-Stack Applications",
        icon: "🚀",
        desc: "Tangible evidence of your problem-solving capabilities hosted on GitHub.",
        details: [
          "Beginner: Algorithm Visualizer / Budget Tracker",
          "Intermediate: E-Commerce Platform with Auth / Diagnostic Assistant",
          "Capstone: Distributed Microservices System with WebRTC"
        ]
      },
      {
        id: 7,
        title: "7. Corporate / Research Internship",
        subtitle: "3-6 Month Industry Immersion",
        icon: "💼",
        desc: "Real-world engineering experience writing production code under senior mentorship.",
        details: [
          "Preparation: LeetCode Medium, ATS Resume, STAR Behavioral Interviews",
          "Outreach: Campus placements, AngelList/Wellfound, LinkedIn referrals"
        ]
      },
      {
        id: 8,
        title: "8. Entry-Level Job Role",
        subtitle: "Software Development Engineer (SDE I)",
        icon: "💻",
        desc: "Launching your professional career as an autonomous engineering contributor.",
        details: [
          "Starting Salary Benchmark: ₹6,00,000 - ₹24,00,000 / year",
          "Responsibilities: Feature implementation, unit test suites, code reviews"
        ]
      },
      {
        id: 9,
        title: "9. Domain Specialization",
        subtitle: "AI/ML Engineer, Cloud Architect, Systems Lead",
        icon: "🔥",
        desc: "Deepening your vertical expertise 2-4 years into your career.",
        details: [
          "AI Specialization: PyTorch, LLM Fine-Tuning, Distributed Training",
          "Cloud Specialization: Kubernetes, Terraform, High Availability Arch"
        ]
      },
      {
        id: 10,
        title: "10. Advanced Career & Higher Studies",
        subtitle: "Principal Architect / MS / M.Tech / MBA",
        icon: "🌟",
        desc: "Long-term trajectory toward technological leadership, executive management, or PhD research.",
        details: [
          "Higher Studies: MS in Computer Science abroad, M.Tech through GATE, MBA (IIM CAT)",
          "Leadership Track: Staff Engineer -> Principal Architect -> Chief Technology Officer (CTO)"
        ]
      }
    ];

    const activeNodeData = pipelineStages.find(p => p.id === this.selectedNode) || pipelineStages[0];

    return `
      <div class="app-container">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <span class="badge badge-secondary">Holistic Progression Pipeline</span>
            <h2 class="mt-xs">Course → Skill → Career Pathway Mapping</h2>
            <p>Click on any milestone in the pipeline below to inspect its detailed academic and career transitions.</p>
          </div>
        </div>

        <!-- Pipeline Nodes Ribbon -->
        <div class="card mb-xl" style="overflow-x: auto; padding: var(--space-lg) var(--space-md);">
          <div class="flex items-center gap-xs" style="min-width: 950px; justify-content: space-between;">
            ${pipelineStages.map((st, idx) => `
              <div class="flex items-center">
                <div class="field-chip-card ${this.selectedNode === st.id ? 'card-interactive' : ''}" 
                     style="padding: 10px 14px; min-width: 80px; ${this.selectedNode === st.id ? 'border-color: var(--primary); background: rgba(99,102,241,0.15);' : ''}"
                     onclick="MappingView.selectNode(${st.id})">
                  <div style="font-size: 1.4rem;">${st.icon}</div>
                  <div style="font-size: 0.72rem; font-weight: 700; margin-top: 4px; text-align: center;">${st.title.split('.')[1] || st.title}</div>
                </div>
                ${idx < pipelineStages.length - 1 ? `
                  <div style="color: var(--primary-light); font-size: 1.2rem; margin: 0 4px; font-weight: bold;">➔</div>
                ` : ''}
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Active Node Detailed Card -->
        <div class="card" style="background: var(--bg-card); border-top: 4px solid var(--primary);">
          <div class="flex items-center gap-md mb-md">
            <span class="step-icon" style="margin-bottom:0; width:52px; height:52px; font-size:1.8rem;">
              ${activeNodeData.icon}
            </span>
            <div>
              <span class="badge badge-primary">Milestone ${activeNodeData.id} of 10</span>
              <h3 style="margin-top: 4px;">${activeNodeData.title}</h3>
              <p style="font-weight: 600; color: var(--secondary);">${activeNodeData.subtitle}</p>
            </div>
          </div>

          <p style="font-size: 0.95rem; margin-bottom: 16px;">
            ${activeNodeData.desc}
          </p>

          <div style="background: var(--bg-surface-elevated); padding: var(--space-lg); border-radius: var(--radius-md);">
            <h5 class="mb-sm">Key Milestone Requirements & Details:</h5>
            <ul style="padding-left: 1.4rem; font-size: 0.9rem; line-height: 1.7; color: var(--text-secondary);">
              ${activeNodeData.details.map(d => `<li>${d}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  selectNode(id) {
    this.selectedNode = id;
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.MappingView = MappingView;
}
