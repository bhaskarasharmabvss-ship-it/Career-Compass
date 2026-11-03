/**
 * Courses View - Personalized Course Recommendations & Catalog
 * Career Compass
 */

const CoursesView = {
  currentStreamFilter: "all",
  searchQuery: "",

  render() {
    const student = StorageService.getStudentProfile();
    const evaluation = RecommendationEngine.evaluate(student);
    let courses = evaluation.topCourses;

    // Apply Stream Filter
    if (this.currentStreamFilter !== "all") {
      courses = courses.filter(c => {
        if (this.currentStreamFilter === "mpc") return c.streamId === "stream-mpc";
        if (this.currentStreamFilter === "bipc") return c.streamId === "stream-bipc";
        if (this.currentStreamFilter === "mec_cec") return c.streamId === "stream-mec" || c.streamId === "stream-cec";
        if (this.currentStreamFilter === "arts") return c.streamId === "stream-arts";
        return true;
      });
    }

    // Apply Search Query
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      courses = courses.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        (c.requiredSkills && c.requiredSkills.some(s => s.toLowerCase().includes(q))) ||
        (c.careerOpportunities && c.careerOpportunities.some(co => co.toLowerCase().includes(q)))
      );
    }

    const savedCourses = StorageService.getSavedCourses();
    const compareCourses = App.getCompareCourses();

    return `
      <div class="app-container">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <span class="badge badge-primary">Personalized Guidance</span>
            <h2 class="mt-xs">Undergraduate & Professional Courses</h2>
            <p>Personalized recommendations synthesized from your ${student.streamCode || '10+2'} stream, ${student.aggregatePercentage || 75}% aggregate, and aptitude profile.</p>
          </div>
          <div class="flex gap-sm">
            <button class="btn btn-outline btn-sm" onclick="App.navigate('compare')">
              ⚖️ View Course Comparison (${compareCourses.length})
            </button>
          </div>
        </div>

        <!-- Official Verification Advisory -->
        <div class="disclaimer-banner compact">
          <div class="disclaimer-icon">⚠️</div>
          <div class="disclaimer-text">
            <strong>Verification Notice:</strong> Course admission criteria, entrance exam cutoffs, quotas, and fees vary across colleges and academic sessions. Treat these recommendations as personalized planning guidance. Always check the official conducting authority portal.
          </div>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="filter-bar">
          <div class="search-input-wrapper">
            <span class="search-icon">🔍</span>
            <input type="text" class="form-control" placeholder="Search courses, skills, or entrance exams..." 
                   value="${this.searchQuery}" oninput="CoursesView.onSearch(this.value)">
          </div>

          <div class="flex items-center gap-xs flex-wrap">
            <button class="btn btn-sm ${this.currentStreamFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CoursesView.setFilter('all')">All Pathways</button>
            <button class="btn btn-sm ${this.currentStreamFilter === 'mpc' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CoursesView.setFilter('mpc')">MPC (Engg & Tech)</button>
            <button class="btn btn-sm ${this.currentStreamFilter === 'bipc' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CoursesView.setFilter('bipc')">BiPC (Medical & Bio)</button>
            <button class="btn btn-sm ${this.currentStreamFilter === 'mec_cec' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CoursesView.setFilter('mec_cec')">MEC / CEC (Commerce & Fin)</button>
            <button class="btn btn-sm ${this.currentStreamFilter === 'arts' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="CoursesView.setFilter('arts')">Arts & Humanities (Law / Des)</button>
          </div>
        </div>

        <!-- Courses Grid -->
        ${courses.length === 0 ? `
          <div class="empty-state card">
            <div class="empty-state-icon">🔍</div>
            <h3>No courses match your filter criteria</h3>
            <p>Try searching for a different keyword or switch to "All Pathways".</p>
            <button class="btn btn-primary btn-sm mt-md" onclick="CoursesView.setFilter('all')">Reset Filters</button>
          </div>
        ` : `
          <div class="courses-grid">
            ${courses.map(course => this.renderCourseCard(course, savedCourses, compareCourses)).join("")}
          </div>
        `}
      </div>
    `;
  },

  renderCourseCard(course, savedCourses, compareCourses) {
    const isSaved = savedCourses.includes(course.id);
    const isCompared = compareCourses.includes(course.id);

    return `
      <div class="course-card">
        <div class="course-card-top">
          <div class="flex items-center justify-between gap-xs">
            <span class="course-match-badge">
              🎯 ${course.matchScore}% Compatibility Match
            </span>
            <span class="badge badge-secondary" style="font-size:0.75rem;">${course.code}</span>
          </div>

          <h3 class="course-title" style="margin-top: 6px;">${course.name}</h3>

          <div class="course-meta-row">
            <span>⏱️ ${course.duration}</span>
            <span>🏛️ ${course.degreeType || 'Undergraduate'}</span>
          </div>

          <!-- Why This Is Recommended Box -->
          <div class="course-why-box">
            <strong>Why Recommended:</strong> ${course.whyExplanation}
          </div>

          <!-- Key Match Factors -->
          ${course.matchFactors && course.matchFactors.length > 0 ? `
            <div class="mb-sm">
              <strong style="font-size:0.8rem; text-transform:uppercase; color:var(--text-muted); letter-spacing:0.04em;">Match Factors:</strong>
              <ul style="padding-left: 1.2rem; font-size: 0.82rem; margin-top: 4px; color: var(--text-secondary);">
                ${course.matchFactors.map(mf => `<li>${mf}</li>`).join("")}
              </ul>
            </div>
          ` : ''}

          <!-- Eligibility & Entrance Summary -->
          <div class="course-details-list">
            <div><strong>Eligibility:</strong> ${course.eligibility}</div>
            <div><strong>Entrance Exams:</strong> ${course.entranceRequirements}</div>
            <div><strong>Estimated Fees:</strong> ${course.approxFee || 'Consult official source'}</div>
          </div>

          <!-- Skills Needed -->
          <div class="mt-md">
            <strong style="font-size:0.8rem; text-transform:uppercase; color:var(--text-muted);">Required Skills:</strong>
            <div class="flex flex-wrap gap-xs mt-xs">
              ${(course.requiredSkills || []).map(s => `<span class="badge badge-primary">${s}</span>`).join("")}
            </div>
          </div>
        </div>

        <div class="course-card-footer">
          <div class="flex gap-xs">
            <button class="btn btn-outline btn-sm" onclick="App.toggleSaveCourse('${course.id}')" title="Save Course">
              ${isSaved ? '★ Saved' : '☆ Save'}
            </button>
            <button class="btn ${isCompared ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="App.toggleCompareCourse('${course.id}')" title="Add to compare">
              ${isCompared ? '✓ Compared' : '⚖️ Compare'}
            </button>
          </div>

          <button class="btn btn-primary btn-sm" onclick="App.viewRoadmap('${course.id}')">
            🗺️ View Roadmap
          </button>
        </div>
      </div>
    `;
  },

  setFilter(filter) {
    this.currentStreamFilter = filter;
    App.render();
  },

  onSearch(query) {
    this.searchQuery = query;
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.CoursesView = CoursesView;
}
