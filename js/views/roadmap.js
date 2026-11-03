/**
 * Roadmap View - Engineering Learning Trajectory Engine
 * Custom Roadmap Generator & 5-Stage Indian Engineering Pathways
 * Career Compass
 */

const RoadmapView = {
  activeTab: "custom", // "custom", "generator", or "6stage"
  selectedCourseId: "course-btech-cse",
  expandedStages: {
    "stage-swe-1": true,
    "stage-aiml-1": true,
    "stage-emb-1": true,
    "stage-mech-1": true,
    "stage-civ-1": true
  },

  generatorState: {
    branch: "cse",
    year: "year2",
    role: "swe",
    skills: ["C++", "Python", "Git & GitHub", "SQL"],
    studyHours: 12,
    targetExam: "placements"
  },

  availableSkills: [
    "C / C++", "Java", "Python", "JavaScript", "TypeScript", "React", "Node.js", 
    "SQL / PostgreSQL", "Git & GitHub", "Linux Basics", "Data Structures", 
    "OOP Concepts", "Docker", "Verilog / VHDL", "STM32 / ESP32", "AutoCAD", 
    "SolidWorks", "Ansys FEA", "Revit BIM", "STAAD.Pro", "MATLAB", "Machine Learning"
  ],

  render() {
    const student = StorageService.getStudentProfile();
    const courses = StorageService.getCourses();
    const currentCourse = courses.find(c => c.id === this.selectedCourseId) || courses[0];
    const stats = StorageService.getRoadmapProgressStats();
    const activeRoadmap = stats.roadmap;

    return `
      <div class="app-container">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <div class="flex items-center gap-xs">
              <span class="badge badge-primary">Engineering Trajectories</span>
              <span class="badge badge-secondary">${activeRoadmap ? activeRoadmap.branchName : 'CSE'}</span>
            </div>
            <h2 class="mt-xs">Personalized Engineering Roadmaps</h2>
            <p>Targeted learning paths calibrated for Indian engineering branches, semester milestones, and campus recruitment.</p>
          </div>

          <!-- Top Quick Actions -->
          <div class="flex items-center gap-xs flex-wrap">
            <button class="btn btn-secondary btn-sm" onclick="RoadmapView.openGenerator()">
              ⚡ Customize Roadmap
            </button>
            <button class="btn btn-outline btn-sm" onclick="window.print()" title="Print or save PDF of your study roadmap">
              🖨️ Export PDF
            </button>
          </div>
        </div>

        <!-- Verification Advisory Banner -->
        <div class="disclaimer-banner compact" role="note">
          <div class="disclaimer-icon">⚠️</div>
          <div class="disclaimer-text">
            <strong>Planning Notice:</strong> Weekly effort hours, semester timelines, and capstone milestones are algorithmic models. Placement success depends on verified coding competence, internship projects, and market hiring cycles; no guaranteed placements are implied.
          </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="tabs-nav">
          <button class="tab-btn ${this.activeTab === 'custom' ? 'active' : ''}" onclick="RoadmapView.setTab('custom')">
            🗺️ Active Engineering Roadmap (${activeRoadmap ? activeRoadmap.roleTitle : 'Full-Stack SDE'})
          </button>
          <button class="tab-btn ${this.activeTab === 'generator' ? 'active' : ''}" onclick="RoadmapView.setTab('generator')">
            ⚙️ Roadmap Generator & Customizer
          </button>
          <button class="tab-btn ${this.activeTab === '6stage' ? 'active' : ''}" onclick="RoadmapView.setTab('6stage')">
            🏛️ 4-Year Academic Degree Syllabus Map
          </button>
        </div>

        <!-- Tab Content Routing -->
        ${this.activeTab === 'generator' 
          ? this.renderGeneratorForm() 
          : this.activeTab === '6stage' 
          ? this.renderDegreeSyllabusMap(courses, currentCourse) 
          : this.renderCustomRoadmap(stats)}
      </div>
    `;
  },

  /**
   * 1. Render the Active Custom Engineering Roadmap
   */
  renderCustomRoadmap(stats) {
    const roadmap = stats.roadmap;
    if (!roadmap || !roadmap.stages) {
      return `
        <div class="card empty-state">
          <div class="empty-state-icon">🧭</div>
          <h3>No Active Roadmap Configured</h3>
          <p>Configure your branch, semester, target career, and weekly study hours to generate an industry-ready trajectory.</p>
          <button class="btn btn-primary" onclick="RoadmapView.setTab('generator')">Launch Roadmap Generator</button>
        </div>
      `;
    }

    const progress = StorageService.getProgress();

    return `
      <!-- Active Roadmap Overview Card -->
      <div class="card mb-lg" style="background: linear-gradient(135deg, rgba(22, 32, 56, 0.9) 0%, rgba(15, 23, 42, 0.98) 100%);">
        <div class="flex items-center justify-between flex-wrap gap-md">
          <div>
            <div class="flex items-center gap-xs mb-xs flex-wrap">
              <span class="badge badge-primary">${roadmap.branchIcon || '💻'} ${roadmap.branchName}</span>
              <span class="badge badge-secondary">${roadmap.yearLabel}</span>
              <span class="badge badge-info">${roadmap.paceLabel}</span>
            </div>
            <h3 style="margin: 4px 0;">${roadmap.roleTitle}</h3>
            <p class="text-muted" style="font-size: 0.88rem; margin: 0;">
              Salary Benchmark: <strong style="color: var(--success);">${roadmap.salaryRange}</strong> • Focus: ${roadmap.targetExam.toUpperCase()}
            </p>
          </div>

          <!-- Overall Progress Box -->
          <div style="min-width: 240px; text-align: right;">
            <div class="flex items-center justify-between mb-xs">
              <span class="text-muted" style="font-size: 0.82rem; font-weight: 600;">Overall Progress</span>
              <span class="badge badge-success">${stats.progressPct}% Completed</span>
            </div>
            <div class="progress-bar-wrapper">
              <div class="progress-bar-fill success" style="width: ${stats.progressPct}%;"></div>
            </div>
            <div class="text-muted mt-xs" style="font-size: 0.75rem;">
              ${stats.completedTasks} of ${stats.totalTasks} milestones verified
            </div>
          </div>
        </div>

        <!-- Core Skills Tags -->
        <div class="flex items-center gap-xs flex-wrap mt-md pt-sm" style="border-top: 1px solid var(--border-subtle);">
          <span class="text-muted" style="font-size: 0.78rem; font-weight: 600;">KEY TECH STACK:</span>
          ${(roadmap.coreSkills || []).map(skill => `
            <span class="badge badge-secondary" style="font-size: 0.75rem;">${skill}</span>
          `).join("")}
        </div>
      </div>

      <!-- Expandable Stage Accordion -->
      <div class="stage-accordion mb-2xl">
        ${roadmap.stages.map((stage, sIdx) => {
          const isExpanded = this.expandedStages[stage.id] !== false; // default open
          const stageTasks = stage.tasks || [];
          const stageDoneCount = stageTasks.filter(t => (progress[t.id] || t.defaultStatus) === "completed").length;
          const isStageComplete = stageTasks.length > 0 && stageDoneCount === stageTasks.length;

          return `
            <div class="stage-accordion-item ${isExpanded ? 'expanded' : ''}" id="${stage.id}">
              <!-- Stage Header -->
              <div class="stage-header" onclick="RoadmapView.toggleStage('${stage.id}')" role="button" aria-expanded="${isExpanded}">
                <div class="stage-title-wrap">
                  <div class="stage-number-badge" style="${isStageComplete ? 'background: var(--success);' : ''}">
                    ${isStageComplete ? '✓' : stage.stageNumber}
                  </div>
                  <div>
                    <h4 style="margin: 0; font-size: 1.05rem;">${stage.title}</h4>
                    <div class="flex items-center gap-sm mt-xs flex-wrap">
                      <span class="text-muted" style="font-size: 0.8rem;">📅 ${stage.period}</span>
                      <span class="text-muted" style="font-size: 0.8rem;">⏱️ ${stage.effort}</span>
                      <span class="badge ${isStageComplete ? 'badge-success' : stageDoneCount > 0 ? 'badge-warning' : 'badge-secondary'}" style="font-size: 0.72rem;">
                        ${stageDoneCount} / ${stageTasks.length} Done
                      </span>
                    </div>
                  </div>
                </div>

                <div class="stage-chevron">▼</div>
              </div>

              <!-- Stage Body -->
              <div class="stage-body">
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin: var(--space-md) 0 var(--space-sm); line-height: 1.5;">
                  ${stage.summary}
                </p>

                <!-- High-Yield Free Learning Resources -->
                <div class="p-sm mb-md" style="background: rgba(99, 102, 241, 0.05); border: 1px dashed var(--border-accent); border-radius: var(--radius-md);">
                  <div class="text-muted mb-xs" style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">
                    📚 Curated High-Yield Resources:
                  </div>
                  <div class="flex items-center gap-sm flex-wrap">
                    ${(stage.resources || []).map(r => `
                      <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="badge badge-primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:4px;">
                        🔗 ${r.name} ↗
                      </a>
                    `).join("")}
                  </div>
                </div>

                <!-- Actionable Checklist Tasks -->
                <h5 style="margin-bottom: var(--space-xs);">Milestone Checkpoints:</h5>
                <div class="stage-tasks-list">
                  ${stageTasks.map(task => {
                    const status = progress[task.id] || task.defaultStatus || "not_started";
                    const isChecked = status === "completed";

                    return `
                      <div class="task-item-card ${status}">
                        <!-- Interactive Checkbox -->
                        <div class="task-checkbox-btn ${isChecked ? 'checked' : ''}" 
                             onclick="RoadmapView.toggleTaskCheck('${task.id}', '${status}')" 
                             title="Click to toggle completion"
                             role="checkbox"
                             aria-checked="${isChecked}">
                          ${isChecked ? '✓' : ''}
                        </div>

                        <!-- Task Details -->
                        <div class="task-details">
                          <div class="flex items-center justify-between flex-wrap gap-xs mb-xs">
                            <span class="task-name" style="${isChecked ? 'text-decoration: line-through; opacity: 0.85;' : ''}">
                              ${task.title}
                            </span>
                            <span class="badge badge-secondary" style="font-size: 0.7rem;">⏱️ ${task.hours || '15h'}</span>
                          </div>
                          <div class="task-desc">${task.desc}</div>
                        </div>

                        <!-- Status Dropdown Selector -->
                        <div style="flex-shrink: 0;">
                          <select class="form-select form-select-sm" style="font-size: 0.75rem; padding: 0.25rem 1.6rem 0.25rem 0.5rem; width: auto;"
                                  onchange="RoadmapView.updateTaskStatus('${task.id}', this.value)">
                            <option value="not_started" ${status === 'not_started' ? 'selected' : ''}>⏳ Pending</option>
                            <option value="in_progress" ${status === 'in_progress' ? 'selected' : ''}>🔄 Active</option>
                            <option value="completed" ${status === 'completed' ? 'selected' : ''}>✅ Done</option>
                          </select>
                        </div>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  },

  /**
   * 2. Render Roadmap Generator & Customizer Wizard
   */
  renderGeneratorForm() {
    const s = this.generatorState;
    const branches = RoadmapTemplates ? RoadmapTemplates.branches : [];
    const years = RoadmapTemplates ? RoadmapTemplates.years : [];

    return `
      <div class="roadmap-flow-card">
        <div class="mb-lg">
          <span class="badge badge-primary">Interactive Wizard</span>
          <h3 class="mt-xs">Configure Your Engineering Trajectory</h3>
          <p>Tailor your milestones, technical stack, and weekly study schedule to your university year and career goals.</p>
        </div>

        <!-- 1. Engineering Branch Selection -->
        <div class="mb-lg">
          <label class="form-label font-bold">1. Select Your Engineering Branch:</label>
          <div class="branch-select-grid">
            ${branches.map(b => `
              <div class="branch-pill-option ${s.branch === b.id ? 'selected' : ''}" 
                   onclick="RoadmapView.selectBranch('${b.id}')"
                   role="radio"
                   aria-checked="${s.branch === b.id}">
                <div class="branch-pill-icon">${b.icon}</div>
                <div class="branch-pill-text">${b.name}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- 2. Academic Year / Semester -->
        <div class="mb-lg">
          <label class="form-label font-bold">2. Select Your Current College Year / Semester:</label>
          <div class="form-grid">
            ${years.map(y => `
              <div class="branch-pill-option ${s.year === y.id ? 'selected' : ''}" 
                   onclick="RoadmapView.selectYear('${y.id}')"
                   role="radio"
                   aria-checked="${s.year === y.id}">
                <div>
                  <div class="branch-pill-text">${y.label}</div>
                  <div class="text-muted" style="font-size: 0.75rem;">${y.desc}</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- 3. Target Career Pathway -->
        <div class="mb-lg">
          <label class="form-label font-bold">3. Target Career Pathway:</label>
          <select class="form-select" onchange="RoadmapView.selectRole(this.value)">
            <option value="swe" ${s.role === 'swe' ? 'selected' : ''}>Full-Stack Software Development Engineer (SDE / Cloud)</option>
            <option value="aiml" ${s.role === 'aiml' ? 'selected' : ''}>AI / Machine Learning & Data Science Specialist</option>
            <option value="embedded" ${s.role === 'embedded' ? 'selected' : ''}>Embedded Systems, IoT & VLSI Semiconductor Engineer</option>
            <option value="mech" ${s.role === 'mech' ? 'selected' : ''}>Mechanical CAD / CAE, EV & Robotics Automation</option>
            <option value="civil" ${s.role === 'civil' ? 'selected' : ''}>Structural Engineering, BIM & Infrastructure Projects</option>
          </select>
        </div>

        <!-- 4. Current Familiar Skills -->
        <div class="mb-lg">
          <label class="form-label font-bold">4. Your Current Skills (Click to toggle what you already know):</label>
          <div class="skills-chip-cloud">
            ${this.availableSkills.map(skill => {
              const isActive = s.skills.includes(skill);
              return `
                <button type="button" class="skill-toggle-chip ${isActive ? 'active' : ''}" 
                        onclick="RoadmapView.toggleSkill('${skill}')"
                        aria-pressed="${isActive}">
                  ${isActive ? '✓ ' : '+ '} ${skill}
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <!-- 5. Weekly Available Study Hours -->
        <div class="mb-xl">
          <label class="form-label font-bold">5. Dedicated Weekly Study Time (outside college lectures):</label>
          <div class="form-grid">
            <div class="branch-pill-option ${s.studyHours === 8 ? 'selected' : ''}" onclick="RoadmapView.selectHours(8)">
              <div>
                <strong>8 Hours / Week</strong>
                <div class="text-muted" style="font-size:0.75rem;">Balanced Pace • College Exams Focus</div>
              </div>
            </div>
            <div class="branch-pill-option ${s.studyHours === 12 ? 'selected' : ''}" onclick="RoadmapView.selectHours(12)">
              <div>
                <strong>12 Hours / Week</strong>
                <div class="text-muted" style="font-size:0.75rem;">Recommended • Steady Placement Sprint</div>
              </div>
            </div>
            <div class="branch-pill-option ${s.studyHours === 16 ? 'selected' : ''}" onclick="RoadmapView.selectHours(16)">
              <div>
                <strong>16 Hours / Week</strong>
                <div class="text-muted" style="font-size:0.75rem;">Intensive • High-Tier Product Track</div>
              </div>
            </div>
            <div class="branch-pill-option ${s.studyHours === 20 ? 'selected' : ''}" onclick="RoadmapView.selectHours(20)">
              <div>
                <strong>20+ Hours / Week</strong>
                <div class="text-muted" style="font-size:0.75rem;">Immersive Bootcamp • Fast Acceleration</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center justify-between flex-wrap gap-md pt-md" style="border-top: 1px solid var(--border-subtle);">
          <button class="btn btn-secondary" onclick="RoadmapView.setTab('custom')">Cancel / Return</button>
          <button class="btn btn-primary btn-lg" onclick="RoadmapView.generateAndSave()">
            ⚡ Generate Structured Roadmap
          </button>
        </div>
      </div>
    `;
  },

  /**
   * 3. Degree Syllabus Map
   */
  renderDegreeSyllabusMap(courses, currentCourse) {
    return `
      <div>
        <div class="card mb-lg">
          <div class="flex items-center justify-between flex-wrap gap-md">
            <div>
              <h4>University Curriculum Overview</h4>
              <p class="text-muted" style="font-size: 0.85rem;">Standard 8-semester course framework aligned with AICTE model curricula.</p>
            </div>
            <select class="form-select form-select-sm" style="width: auto;" onchange="RoadmapView.onCourseChange(this.value)">
              ${courses.map(c => `
                <option value="${c.id}" ${c.id === currentCourse.id ? 'selected' : ''}>${c.name}</option>
              `).join("")}
            </select>
          </div>
        </div>

        ${TimelineComponent.renderCourseRoadmap(currentCourse)}
      </div>
    `;
  },

  // Controllers & Event Handlers
  setTab(tab) {
    this.activeTab = tab;
    App.render();
  },

  openGenerator() {
    this.activeTab = "generator";
    App.render();
    window.scrollTo({ top: 120, behavior: "smooth" });
  },

  selectBranch(branchId) {
    this.generatorState.branch = branchId;
    // Auto-update suggested target role
    if (branchId === "ece" || branchId === "eee") this.generatorState.role = "embedded";
    else if (branchId === "mech") this.generatorState.role = "mech";
    else if (branchId === "civil") this.generatorState.role = "civil";
    else if (branchId === "aiml") this.generatorState.role = "aiml";
    else this.generatorState.role = "swe";
    App.render();
  },

  selectYear(yearId) {
    this.generatorState.year = yearId;
    App.render();
  },

  selectRole(roleId) {
    this.generatorState.role = roleId;
    App.render();
  },

  selectHours(hours) {
    this.generatorState.studyHours = hours;
    App.render();
  },

  toggleSkill(skill) {
    const skills = this.generatorState.skills;
    if (skills.includes(skill)) {
      this.generatorState.skills = skills.filter(s => s !== skill);
    } else {
      this.generatorState.skills.push(skill);
    }
    App.render();
  },

  toggleStage(stageId) {
    this.expandedStages[stageId] = !this.expandedStages[stageId];
    const el = document.getElementById(stageId);
    if (el) {
      el.classList.toggle("expanded", this.expandedStages[stageId]);
    }
  },

  toggleTaskCheck(taskId, currentStatus) {
    const nextStatus = currentStatus === "completed" ? "not_started" : "completed";
    StorageService.setItemStatus(taskId, nextStatus);
    App.showToast(nextStatus === "completed" ? "Milestone marked as complete! 🎯" : "Milestone reverted.", "info");
    App.render();
  },

  updateTaskStatus(taskId, status) {
    StorageService.setItemStatus(taskId, status);
    App.showToast(`Task status updated to ${status.replace('_', ' ')}!`, "success");
    App.render();
  },

  generateAndSave() {
    if (typeof RoadmapTemplates === "undefined") {
      App.showToast("Roadmap generator templates loading...", "warning");
      return;
    }

    const newRoadmap = RoadmapTemplates.generateRoadmap({
      branch: this.generatorState.branch,
      year: this.generatorState.year,
      role: this.generatorState.role,
      skills: this.generatorState.skills,
      studyHours: this.generatorState.studyHours,
      targetExam: this.generatorState.targetExam
    });

    StorageService.saveActiveRoadmap(newRoadmap);

    // Also update student profile career goal
    const student = StorageService.getStudentProfile();
    student.careerGoal = `${newRoadmap.roleTitle} (${newRoadmap.branchName})`;
    StorageService.saveStudentProfile(student);

    this.activeTab = "custom";
    App.showToast("Your personalized engineering roadmap is ready!", "success");
    App.render();
    window.scrollTo({ top: 100, behavior: "smooth" });
  },

  onCourseChange(courseId) {
    this.selectedCourseId = courseId;
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.RoadmapView = RoadmapView;
}
