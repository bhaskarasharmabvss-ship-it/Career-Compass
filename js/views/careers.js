/**
 * Careers View - Career Recommendation & Comprehensive Explorer
 * Career Compass
 */

const CareersView = {
  currentCategoryFilter: "all",
  searchQuery: "",

  render() {
    const student = StorageService.getStudentProfile();
    const evaluation = RecommendationEngine.evaluate(student);
    let careers = evaluation.topCareers;

    if (this.currentCategoryFilter !== "all") {
      careers = careers.filter(c => 
        c.fieldCategory.toLowerCase().includes(this.currentCategoryFilter.toLowerCase())
      );
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      careers = careers.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.fieldCategory.toLowerCase().includes(q) ||
        (c.requiredSkills && c.requiredSkills.some(s => s.toLowerCase().includes(q)))
      );
    }

    const savedCareers = StorageService.getSavedCareers();

    return `
      <div class="app-container">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <span class="badge badge-secondary">Industry Pathways</span>
            <h2 class="mt-xs">Career Explorer & Role Pathways</h2>
            <p>Explore high-growth career trajectories aligned with your academic stream, competencies, and goals.</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="App.navigate('skill-gap')">
            📊 Analyze Skill Gaps for Top Role
          </button>
        </div>

        <!-- Official Disclaimer -->
        <div class="disclaimer-banner compact">
          <div class="disclaimer-icon">⚠️</div>
          <div class="disclaimer-text">
            <strong>Advisory Notice:</strong> Salary benchmark figures and hiring criteria depend on regional economic conditions, institutional caliber, individual technical competency, and industry shifts. Salary estimates are indicative benchmarks, not guaranteed compensation.
          </div>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="filter-bar">
          <div class="search-input-wrapper">
            <span class="search-icon">🔍</span>
            <input type="text" class="form-control" placeholder="Search career titles, skills, or fields (e.g. Data, Doctor, Lawyer)..." 
                   value="${this.searchQuery}" oninput="CareersView.onSearch(this.value)">
          </div>

          <div class="flex items-center gap-xs flex-wrap">
            <button class="btn btn-sm ${this.currentCategoryFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CareersView.setFilter('all')">All Fields</button>
            <button class="btn btn-sm ${this.currentCategoryFilter === 'technology' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CareersView.setFilter('technology')">💻 Technology</button>
            <button class="btn btn-sm ${this.currentCategoryFilter === 'medicine' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CareersView.setFilter('medicine')">🩺 Medicine & Health</button>
            <button class="btn btn-sm ${this.currentCategoryFilter === 'finance' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CareersView.setFilter('finance')">💰 Finance & Commerce</button>
            <button class="btn btn-sm ${this.currentCategoryFilter === 'law' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CareersView.setFilter('law')">⚖️ Law & Justice</button>
            <button class="btn btn-sm ${this.currentCategoryFilter === 'design' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CareersView.setFilter('design')">🎨 Design & Media</button>
            <button class="btn btn-sm ${this.currentCategoryFilter === 'government' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CareersView.setFilter('government')">🏛️ Government</button>
          </div>
        </div>

        <!-- Careers Grid -->
        ${careers.length === 0 ? `
          <div class="empty-state card">
            <div class="empty-state-icon">💼</div>
            <h3>No careers matched your search</h3>
            <p>Try broadening your query or select "All Fields".</p>
            <button class="btn btn-primary btn-sm mt-md" onclick="CareersView.setFilter('all')">Reset Filters</button>
          </div>
        ` : `
          <div class="courses-grid">
            ${careers.map(career => this.renderCareerCard(career, savedCareers)).join("")}
          </div>
        `}
      </div>
    `;
  },

  renderCareerCard(career, savedCareers) {
    const isSaved = savedCareers.includes(career.id);

    return `
      <div class="course-card">
        <div class="course-card-top">
          <div class="flex items-center justify-between gap-xs">
            <span class="course-match-badge" style="background: rgba(6, 182, 212, 0.12); color: var(--secondary); border-color: rgba(6,182,212,0.3);">
              ✨ ${career.matchScore}% Role Fit
            </span>
            <span class="badge badge-primary">${career.fieldCategory}</span>
          </div>

          <h3 class="course-title" style="margin-top: 8px;">${career.title}</h3>

          <p style="font-size:0.875rem; margin-bottom: 12px; color: var(--text-secondary);">
            ${career.description}
          </p>

          <div class="course-why-box" style="border-left-color: var(--secondary); background: rgba(6, 182, 212, 0.08);">
            <strong>Role Match Rationale:</strong> ${career.whyExplanation}
          </div>

          <div class="course-details-list">
            <div><strong>Required Degree:</strong> ${career.requiredDegree}</div>
            <div><strong>Entry Responsibilities:</strong> ${career.entryResponsibilities}</div>
            <div><strong>Career Progression:</strong> <span class="text-primary-color" style="font-weight:600;">${career.progression}</span></div>
            <div><strong>Salary Benchmark Band:</strong> ${career.salaryBenchmark}</div>
          </div>

          <div class="mt-md">
            <strong style="font-size:0.8rem; text-transform:uppercase; color:var(--text-muted);">Key Skills Needed:</strong>
            <div class="flex flex-wrap gap-xs mt-xs">
              ${(career.requiredSkills || []).map(s => `<span class="badge badge-secondary">${s}</span>`).join("")}
            </div>
          </div>
        </div>

        <div class="course-card-footer">
          <button class="btn btn-outline btn-sm" onclick="App.toggleSaveCareer('${career.id}')">
            ${isSaved ? '★ Saved' : '☆ Save Role'}
          </button>
          
          <button class="btn btn-secondary btn-sm" onclick="CareersView.launchRoadmapForRole('${career.id}')">
            🗺️ Create Roadmap
          </button>

          <button class="btn btn-primary btn-sm" onclick="App.analyzeRoleSkillGap('${career.id}')">
            📊 Skill Gap
          </button>
        </div>
      </div>
    `;
  },

  launchRoadmapForRole(careerId) {
    if (typeof RoadmapView !== "undefined") {
      if (careerId === "career-swe") RoadmapView.generatorState.role = "swe";
      else if (careerId === "career-aiml" || careerId === "career-data-scientist") RoadmapView.generatorState.role = "aiml";
      else if (careerId === "career-ece") RoadmapView.generatorState.role = "embedded";
      else if (careerId === "career-mech") RoadmapView.generatorState.role = "mech";
      else if (careerId === "career-civil") RoadmapView.generatorState.role = "civil";
      RoadmapView.generateAndSave();
    } else {
      App.navigate("roadmap");
    }
  },

  setFilter(filter) {
    this.currentCategoryFilter = filter;
    App.render();
  },

  onSearch(query) {
    this.searchQuery = query;
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.CareersView = CareersView;
}
