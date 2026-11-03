/**
 * Home View - Modern Engineering Career Guidance Landing Page
 * Career Compass - Tailored for Engineering Students in India
 */

const HomeView = {
  selectedPreviewBranch: "cse",
  previewChecklist: {
    "prev-1": true,
    "prev-2": true,
    "prev-3": false,
    "prev-4": false
  },

  previewData: {
    cse: {
      role: "Full-Stack SDE",
      branchName: "CSE / IT",
      targetCompany: "Product & Top Tech",
      stages: [
        { id: "prev-1", stage: "Stage 1", title: "C++ / Java & Memory Models", desc: "Pointers, recursion & Big-O time complexity" },
        { id: "prev-2", stage: "Stage 2", title: "Data Structures & LeetCode Sheet", desc: "Trees, Graphs, DP & Striver's SDE 150" },
        { id: "prev-3", stage: "Stage 3", title: "Full-Stack Web (React & Node/SQL)", desc: "RESTful microservices, JWT & indexing" },
        { id: "prev-4", stage: "Stage 4", title: "Docker, Cloud Deploy & LLD", desc: "Containerized deployment, Redis & System Design" }
      ]
    },
    aiml: {
      role: "AI / ML Engineer",
      branchName: "AI/ML & Data Science",
      targetCompany: "AI Research & Analytics",
      stages: [
        { id: "prev-1", stage: "Stage 1", title: "Linear Algebra & Vector Calculus", desc: "Matrix operations, gradients & NumPy math" },
        { id: "prev-2", stage: "Stage 2", title: "Scikit-Learn & Classical ML", desc: "Regression, XGBoost & Cross-Validation" },
        { id: "prev-3", stage: "Stage 3", title: "PyTorch & Deep Neural Networks", desc: "CNNs, transfer learning & GPU training" },
        { id: "prev-4", stage: "Stage 4", title: "Transformers, RAG & MLOps", desc: "LangChain, Vector DBs & FastAPI inference" }
      ]
    },
    ece: {
      role: "Embedded & VLSI Engineer",
      branchName: "ECE / EEE",
      targetCompany: "Qualcomm, Intel & TI",
      stages: [
        { id: "prev-1", stage: "Stage 1", title: "Embedded C & Digital Logic", desc: "Bitwise registers, volatile pointers & flip-flops" },
        { id: "prev-2", stage: "Stage 2", title: "Microcontrollers & Protocols", desc: "STM32/ESP32, UART, SPI, I2C & Timers" },
        { id: "prev-3", stage: "Stage 3", title: "FreeRTOS & IoT Networking", desc: "Task priorities, mutex queues & MQTT cloud" },
        { id: "prev-4", stage: "Stage 4", title: "Verilog HDL & FPGA Synthesis", desc: "RTL design, FSM testbenches & Vivado STA" }
      ]
    },
    mech: {
      role: "CAD / CAE & Robotics Engineer",
      branchName: "Mechanical / EV",
      targetCompany: "Tata Motors, L&T & Mahindra",
      stages: [
        { id: "prev-1", stage: "Stage 1", title: "3D Parametric CAD (SolidWorks)", desc: "Assemblies, GD&T ASME standards & BOM" },
        { id: "prev-2", stage: "Stage 2", title: "FEA Structural & Thermal Simulation", desc: "Ansys Workbench, mesh independence & stress" },
        { id: "prev-3", stage: "Stage 3", title: "Robotics Kinematics & ROS 2", desc: "DH parameters, Gazebo simulation & actuators" },
        { id: "prev-4", stage: "Stage 4", title: "DFM & Autonomous Rover Capstone", desc: "CNC toolpaths, 3D printing & validation testing" }
      ]
    }
  },

  render() {
    return `
      <!-- Hero Section with Desktop Split Grid -->
      <section class="hero-section">
        <div class="hero-glow"></div>
        <div class="app-container">
          <div class="hero-grid">
            <!-- Left Text Column -->
            <div class="hero-text-col">
              <div class="hero-pill" style="align-self: flex-start;">
                <span>✨ AI-Powered Engineering Guidance Platform • India</span>
              </div>

              <h1 class="hero-title">
                Your Engineering Journey <span class="highlight">Starts Here.</span>
              </h1>

              <p class="hero-subtitle">
                Discover your path, build industry-ready skills, and turn your goals into a personalized roadmap.
              </p>

              <!-- Main Action CTAs -->
              <div class="hero-cta-group">
                <button class="btn btn-primary btn-lg" onclick="App.navigate('roadmap')" aria-label="Create My Roadmap">
                  🚀 Create My Roadmap
                </button>
                <button class="btn btn-secondary btn-lg" onclick="App.navigate('careers')" aria-label="Explore Engineering Careers">
                  🧭 Explore Careers
                </button>
                <button class="btn btn-outline btn-lg" onclick="App.navigate('projects')" aria-label="Explore Hands-on Projects">
                  🛠️ Explore Projects
                </button>
              </div>

              <!-- Compact Official Verification Advisory Banner -->
              <div class="disclaimer-banner compact mb-md text-left" role="note">
                <div class="disclaimer-icon">⚠️</div>
                <div class="disclaimer-text">
                  <strong>Official Verification Advisory:</strong> Admission criteria, AICTE/university syllabi, and recruitment schedules vary across institutions. Guidance is educational—verify statutory requirements on official portal notices.
                </div>
              </div>

              <!-- Quick Branch Shortcuts -->
              <div class="flex items-center gap-xs flex-wrap mt-xs">
                <span class="text-muted" style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase;">Quick Branches:</span>
                <button class="badge badge-primary cursor-pointer" onclick="HomeView.quickLaunchBranch('cse')" style="cursor:pointer; border:none;">💻 CSE</button>
                <button class="badge badge-secondary cursor-pointer" onclick="HomeView.quickLaunchBranch('aiml')" style="cursor:pointer; border:none;">🧠 AI/ML</button>
                <button class="badge badge-info cursor-pointer" onclick="HomeView.quickLaunchBranch('ece')" style="cursor:pointer; border:none;">📡 ECE</button>
                <button class="badge badge-warning cursor-pointer" onclick="HomeView.quickLaunchBranch('mech')" style="cursor:pointer; border:none;">⚙️ Mechanical</button>
                <button class="badge badge-success cursor-pointer" onclick="HomeView.quickLaunchBranch('civil')" style="cursor:pointer; border:none;">🏗️ Civil</button>
              </div>
            </div>

            <!-- Right Column: Interactive Roadmap Preview -->
            <div class="hero-preview-col" id="heroRoadmapPreviewCol">
              ${this.renderPreviewCard()}
            </div>
          </div>

          <!-- Hero Verified Quick Metrics -->
          <div class="hero-stats-grid">
            <div class="stat-card">
              <div class="stat-number">8+</div>
              <div class="stat-label">Engineering Branches (CSE, ECE, Mech, Civil...)</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">5-Stage</div>
              <div class="stat-label">Structured Curricula & Practical Milestones</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">Local & Private (Browser-persisted Demo Mode)</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">0 Cost</div>
              <div class="stat-label">Curated NPTEL, FreeCodeCamp & Open Repos</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Engineering Disciplines Section -->
      <section class="section py-2xl" style="background: var(--bg-surface-elevated); padding: var(--space-3xl) 0;">
        <div class="app-container">
          <div class="text-center mb-xl">
            <span class="badge badge-secondary">Indian Engineering Disciplines</span>
            <h2 class="mt-sm">Explore Engineering Career Tracks</h2>
            <p>From modern software architectures and AI to semiconductor VLSI, EV powertrains, and infrastructure BIM.</p>
          </div>

          <div class="fields-grid">
            ${this.renderEngineeringFields()}
          </div>
        </div>
      </section>

      <!-- Proven 5-Step Engineering Framework -->
      <section class="section py-2xl" style="padding: var(--space-3xl) 0;">
        <div class="app-container">
          <div class="text-center mb-xl">
            <span class="badge badge-primary">Proven 5-Stage Framework</span>
            <h2 class="mt-sm">How CareerCompass Works</h2>
            <p>Designed systematically for Indian engineering students navigating college exams, campus placements, and GATE.</p>
          </div>

          <div class="steps-grid">
            <div class="step-card">
              <div class="step-number">01</div>
              <div class="step-icon">🎯</div>
              <h4>1. Set Branch & Goal</h4>
              <p>Select your engineering branch (CSE, ECE, Mech, Civil), current year/semester, and target role (SDE, Core, AI, GATE).</p>
            </div>

            <div class="step-card">
              <div class="step-number">02</div>
              <div class="step-icon">🧪</div>
              <h4>2. Aptitude & Skill Diagnostics</h4>
              <p>Assess programming logic, discrete math, data structures, and core domain knowledge with instant spider charts.</p>
            </div>

            <div class="step-card">
              <div class="step-number">03</div>
              <div class="step-icon">📐</div>
              <h4>3. Skill-Gap Benchmarking</h4>
              <p>Identify missing skills compared against standard product-based companies and PSU recruitment requirements.</p>
            </div>

            <div class="step-card">
              <div class="step-number">04</div>
              <div class="step-icon">🗺️</div>
              <h4>4. Structured Semester Roadmap</h4>
              <p>Follow a semester-by-semester plan with verified effort hours, NPTEL/MIT OCW resources, and GitHub project milestones.</p>
            </div>

            <div class="step-card">
              <div class="step-number">05</div>
              <div class="step-icon">📊</div>
              <h4>5. Track Real Progress</h4>
              <p>Check off completed tasks, monitor your weekly study schedule, and stay on track for internship and placement drives.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Platform Features Showcase -->
      <section class="section" style="background: var(--bg-surface); padding: var(--space-3xl) 0; border-top: 1px solid var(--border-subtle);">
        <div class="app-container">
          <div class="text-center mb-xl">
            <span class="badge badge-primary">Comprehensive Toolkit</span>
            <h2 class="mt-sm">Everything You Need to Excel</h2>
            <p>All-in-one suite designed to transition you from academic theory to hands-on engineering excellence.</p>
          </div>

          <div class="steps-grid">
            <div class="card card-interactive" onclick="App.navigate('roadmap')">
              <div class="step-icon">🗺️</div>
              <h4>Personalized Roadmaps</h4>
              <p>Structured 5-stage trajectories customized to your branch, semester, and available study hours.</p>
            </div>
            <div class="card card-interactive" onclick="App.navigate('careers')">
              <div class="step-icon">💼</div>
              <h4>Engineering Careers Directory</h4>
              <p>Realistic Indian salary benchmarks, progression ladders, and essential tech stacks for top roles.</p>
            </div>
            <div class="card card-interactive" onclick="App.navigate('projects')">
              <div class="step-icon">🚀</div>
              <h4>Industry Capstones</h4>
              <p>Tiered project ideas from 1st-year CLI scripts to 4th-year distributed systems and hardware builds.</p>
            </div>
            <div class="card card-interactive" onclick="App.navigate('assessment')">
              <div class="step-icon">🧪</div>
              <h4>10-Dimension Skill Assessment</h4>
              <p>Evaluate mathematical, algorithmic, systems, and communication strengths with radar visualization.</p>
            </div>
            <div class="card card-interactive" onclick="App.navigate('prep')">
              <div class="step-icon">🎯</div>
              <h4>Placement & Interview Prep</h4>
              <p>ATS resume guides, GitHub portfolio setups, aptitude sheets, and technical interview mock checklists.</p>
            </div>
            <div class="card card-interactive" onclick="App.navigate('dashboard')">
              <div class="step-icon">📈</div>
              <h4>Real Student Command Center</h4>
              <p>Continuous learning dashboard synchronized with your live roadmap progress and weekly plans.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderPreviewCard() {
    const branchKey = this.selectedPreviewBranch || "cse";
    const data = this.previewData[branchKey] || this.previewData.cse;

    const completedCount = data.stages.filter(s => !!this.previewChecklist[s.id]).length;
    const progressPct = Math.round((completedCount / data.stages.length) * 100);

    return `
      <div class="roadmap-preview-card" id="homeRoadmapPreviewCard">
        <div class="preview-card-header">
          <div class="flex items-center gap-xs">
            <span style="font-size: 1.1rem;">🧭</span>
            <div>
              <strong style="font-size: 0.95rem; display:block;">Live Roadmap Preview</strong>
              <span class="text-muted" style="font-size: 0.72rem;">Goal: <strong>${data.role}</strong> (${data.targetCompany})</span>
            </div>
          </div>
          <span class="badge badge-primary">${data.branchName}</span>
        </div>

        <!-- Interactive Branch Selector Tabs -->
        <div class="flex items-center justify-between mb-sm gap-xs flex-wrap">
          <div class="preview-pill-tabs">
            <button class="preview-pill-btn ${branchKey === 'cse' ? 'active' : ''}" onclick="HomeView.switchPreviewBranch('cse')">CSE / SDE</button>
            <button class="preview-pill-btn ${branchKey === 'aiml' ? 'active' : ''}" onclick="HomeView.switchPreviewBranch('aiml')">AI / ML</button>
            <button class="preview-pill-btn ${branchKey === 'ece' ? 'active' : ''}" onclick="HomeView.switchPreviewBranch('ece')">ECE / VLSI</button>
            <button class="preview-pill-btn ${branchKey === 'mech' ? 'active' : ''}" onclick="HomeView.switchPreviewBranch('mech')">Mechanical</button>
          </div>
          <span class="text-muted" style="font-size: 0.75rem;">${progressPct}% complete</span>
        </div>

        <!-- Progress Bar Indicator -->
        <div class="progress-bar-wrapper mb-md" style="height: 6px;">
          <div class="progress-bar-fill success" style="width: ${progressPct}%;"></div>
        </div>

        <!-- Interactive Milestone Checkpoints -->
        <div class="preview-timeline">
          ${data.stages.map(item => {
            const isChecked = !!this.previewChecklist[item.id];
            return `
              <div class="preview-stage-row ${isChecked ? 'active' : ''}" onclick="HomeView.togglePreviewItem('${item.id}')">
                <div class="preview-checkbox ${isChecked ? 'checked' : ''}" title="Click to mark milestone">
                  ${isChecked ? '✓' : ''}
                </div>
                <div class="preview-stage-info">
                  <div class="flex items-center gap-xs">
                    <span class="preview-stage-badge">${item.stage}</span>
                    <span class="preview-stage-title" style="${isChecked ? 'text-decoration: line-through; opacity: 0.8;' : ''}">${item.title}</span>
                  </div>
                  <div class="preview-stage-desc">${item.desc}</div>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- Preview Bottom CTA -->
        <div class="flex items-center justify-between gap-sm pt-xs" style="border-top: 1px solid var(--border-subtle);">
          <span class="text-muted" style="font-size: 0.75rem;">Click boxes to test progress</span>
          <button class="btn btn-primary btn-sm" onclick="App.navigate('roadmap')">
            ⚡ Customize This Roadmap
          </button>
        </div>
      </div>
    `;
  },

  switchPreviewBranch(branchKey) {
    this.selectedPreviewBranch = branchKey;
    const container = document.getElementById("heroRoadmapPreviewCol");
    if (container) {
      container.innerHTML = this.renderPreviewCard();
    }
  },

  togglePreviewItem(itemId) {
    this.previewChecklist[itemId] = !this.previewChecklist[itemId];
    const container = document.getElementById("heroRoadmapPreviewCol");
    if (container) {
      container.innerHTML = this.renderPreviewCard();
    }
  },

  quickLaunchBranch(branchId) {
    if (typeof RoadmapView !== "undefined") {
      RoadmapView.generatorState.branch = branchId;
      RoadmapView.activeTab = "generator";
    }
    App.navigate("roadmap");
  },

  renderEngineeringFields() {
    const fields = [
      { name: "Computer Science & Engineering", icon: "💻", roles: "SDE, Systems, Backend, Cloud", link: "cse" },
      { name: "Artificial Intelligence & ML", icon: "🧠", roles: "MLOps, NLP, Computer Vision, LLMs", link: "aiml" },
      { name: "Electronics & Communication", icon: "📡", roles: "Embedded Systems, VLSI, IoT", link: "ece" },
      { name: "Electrical & Electronics", icon: "⚡", roles: "EV Powertrains, Power Systems, Controls", link: "eee" },
      { name: "Mechanical Engineering", icon: "⚙️", roles: "CAD/CAE, Robotics, Automation", link: "mech" },
      { name: "Civil & Infrastructure", icon: "🏗️", roles: "Structural Analysis, BIM, Revit", link: "civil" },
      { name: "Data Science & Analytics", icon: "📊", roles: "Business Analytics, Big Data, SQL", link: "aiml" },
      { name: "Cybersecurity & Networks", icon: "🛡️", roles: "Security Analyst, Pen Testing, DevSecOps", link: "cse" }
    ];

    return fields.map(f => `
      <div class="field-chip-card" onclick="HomeView.quickLaunchBranch('${f.link}')" style="cursor:pointer;" title="Generate ${f.name} Roadmap">
        <div class="field-chip-icon">${f.icon}</div>
        <div class="field-chip-name" style="font-weight:700;">${f.name}</div>
        <div class="text-muted" style="font-size: 0.78rem; margin-top: 4px;">${f.roles}</div>
        <div class="text-primary-color mt-xs" style="font-size: 0.75rem; font-weight: 600;">View Trajectory →</div>
      </div>
    `).join("");
  }
};

if (typeof window !== "undefined") {
  window.HomeView = HomeView;
}
