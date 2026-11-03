/**
 * Admin View - Comprehensive Administrator Dashboard & Management Modules
 * Career Compass
 */

const AdminView = {
  activeModule: "overview", // overview, courses, careers, questions, rules, schema
  searchQuery: "",

  render() {
    const stats = this.getStats();

    return `
      <div class="app-container">
        <!-- Admin Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <div class="flex items-center gap-xs mb-xs flex-wrap">
              <span class="badge badge-danger">Administrator Console</span>
              <span class="badge badge-secondary" style="font-family: var(--font-mono);">bhaskarasharmabvss@gmail.com</span>
            </div>
            <h2 class="mt-xs">Platform Governance & Data Management</h2>
            <p>Manage curriculum databases, AI recommendation rules, assessment psychometrics, and examine cohort analytics.</p>
          </div>

          <div class="flex gap-sm flex-wrap">
            <button class="btn btn-outline btn-sm" onclick="AdminView.openSchemaModal()">
              🗄️ Relational DB Schema
            </button>
            <button class="btn btn-danger btn-sm" onclick="App.adminLogout()">
              🚪 Sign Out
            </button>
          </div>
        </div>

        <!-- Admin Navigation Ribbon -->
        <div class="tabs-nav">
          <button class="tab-btn ${this.activeModule === 'overview' ? 'active' : ''}" onclick="AdminView.setModule('overview')">
            📊 Cohort Analytics & Metrics
          </button>
          <button class="tab-btn ${this.activeModule === 'courses' ? 'active' : ''}" onclick="AdminView.setModule('courses')">
            🎓 Manage Courses Catalog
          </button>
          <button class="tab-btn ${this.activeModule === 'careers' ? 'active' : ''}" onclick="AdminView.setModule('careers')">
            💼 Manage Careers & Roles
          </button>
          <button class="tab-btn ${this.activeModule === 'questions' ? 'active' : ''}" onclick="AdminView.setModule('questions')">
            🧪 Assessment Questions
          </button>
          <button class="tab-btn ${this.activeModule === 'rules' ? 'active' : ''}" onclick="AdminView.setModule('rules')">
            ⚙️ Recommendation Weights
          </button>
        </div>

        <!-- Active Admin Module Content -->
        ${this.renderModuleContent(stats)}
      </div>
    `;
  },

  renderModuleContent(stats) {
    if (this.activeModule === "overview") return this.renderOverview(stats);
    if (this.activeModule === "courses") return this.renderCoursesManager();
    if (this.activeModule === "careers") return this.renderCareersManager();
    if (this.activeModule === "questions") return this.renderQuestionsManager();
    if (this.activeModule === "rules") return this.renderRulesManager();
    return this.renderOverview(stats);
  },

  // Module 1: Overview Analytics
  renderOverview(stats) {
    return `
      <!-- Statistics Metric Grid -->
      <div class="admin-stats-grid">
        <div class="card">
          <span class="text-muted" style="font-size:0.8rem; font-weight:600; text-transform:uppercase;">Total Enrolled Students</span>
          <div class="stat-number" style="font-size:2rem; margin: 4px 0;">${stats.totalStudents}</div>
          <span class="text-success" style="font-size:0.8rem;">↑ +14% this month</span>
        </div>

        <div class="card">
          <span class="text-muted" style="font-size:0.8rem; font-weight:600; text-transform:uppercase;">Active Platform Users</span>
          <div class="stat-number" style="font-size:2rem; margin: 4px 0;">${stats.activeStudents}</div>
          <span class="text-muted" style="font-size:0.8rem;">Past 7 days session activity</span>
        </div>

        <div class="card">
          <span class="text-muted" style="font-size:0.8rem; font-weight:600; text-transform:uppercase;">Assessment Completion Rate</span>
          <div class="stat-number" style="font-size:2rem; margin: 4px 0;">${stats.assessmentCompletionRate}%</div>
          <span class="text-success" style="font-size:0.8rem;">High engagement benchmark</span>
        </div>

        <div class="card">
          <span class="text-muted" style="font-size:0.8rem; font-weight:600; text-transform:uppercase;">Total Courses Cataloged</span>
          <div class="stat-number" style="font-size:2rem; margin: 4px 0;">${stats.totalCourses}</div>
          <span class="text-muted" style="font-size:0.8rem;">Across 6 academic streams</span>
        </div>
      </div>

      <div class="dashboard-grid">
        <!-- Most Explored Careers & Courses -->
        <div class="card">
          <h4 class="mb-md">🔥 Most Selected Courses & Explored Careers</h4>
          <div class="admin-table-container">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Course / Career Pathway</th>
                  <th>Stream</th>
                  <th>Popularity / Inquiries</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>B.Tech in Computer Science & Engg</strong></td>
                  <td><span class="badge badge-primary">MPC</span></td>
                  <td>1,420 Students (48%)</td>
                  <td><button class="btn btn-outline btn-sm" onclick="App.viewRoadmap('course-btech-cse')">Inspect</button></td>
                </tr>
                <tr>
                  <td><strong>B.Tech in Artificial Intelligence & ML</strong></td>
                  <td><span class="badge badge-primary">MPC</span></td>
                  <td>1,180 Students (39%)</td>
                  <td><button class="btn btn-outline btn-sm" onclick="App.viewRoadmap('course-btech-aiml')">Inspect</button></td>
                </tr>
                <tr>
                  <td><strong>MBBS (Medicine & Surgery)</strong></td>
                  <td><span class="badge badge-secondary">BiPC</span></td>
                  <td>890 Students (30%)</td>
                  <td><button class="btn btn-outline btn-sm" onclick="App.viewRoadmap('course-mbbs')">Inspect</button></td>
                </tr>
                <tr>
                  <td><strong>Chartered Accountancy (CA Pathway)</strong></td>
                  <td><span class="badge badge-warning">MEC / CEC</span></td>
                  <td>740 Students (25%)</td>
                  <td><button class="btn btn-outline btn-sm" onclick="App.viewRoadmap('course-ca-pathway')">Inspect</button></td>
                </tr>
                <tr>
                  <td><strong>Integrated 5-Year Law (BA LLB)</strong></td>
                  <td><span class="badge badge-info">Arts / All</span></td>
                  <td>610 Students (21%)</td>
                  <td><button class="btn btn-outline btn-sm" onclick="App.viewRoadmap('course-law-integrated')">Inspect</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Quick System Status -->
        <div class="card">
          <h4 class="mb-sm">⚙️ Engine & System Health</h4>
          <div class="flex flex-col gap-sm" style="font-size: 0.88rem;">
            <div class="flex justify-between p-xs" style="border-bottom: 1px solid var(--border-subtle);">
              <span>AI Recommendation Engine:</span>
              <span class="badge badge-success">ONLINE (v2.4)</span>
            </div>
            <div class="flex justify-between p-xs" style="border-bottom: 1px solid var(--border-subtle);">
              <span>Relational Storage Layer:</span>
              <span class="badge badge-success">HEALTHY (LocalStore)</span>
            </div>
            <div class="flex justify-between p-xs" style="border-bottom: 1px solid var(--border-subtle);">
              <span>Aptitude Evaluator:</span>
              <span class="badge badge-success">10 DIMENSIONS ACTIVE</span>
            </div>
            <div class="flex justify-between p-xs" style="border-bottom: 1px solid var(--border-subtle);">
              <span>Official Verification Status:</span>
              <span class="badge badge-info">OCT 2026 AUDITED</span>
            </div>
          </div>

          <div class="mt-lg">
            <button class="btn btn-outline btn-sm w-full" onclick="App.resetData()">
              🔄 Reset DB to Demo Seed Data
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // Module 2: Manage Courses Catalog
  renderCoursesManager() {
    const courses = StorageService.getCourses();

    return `
      <div class="card">
        <div class="flex justify-between items-center mb-md flex-wrap gap-sm">
          <div>
            <h4>Master Courses Catalog (${courses.length} Programs)</h4>
            <p class="text-muted" style="font-size:0.85rem;">Add, modify academic parameters, update entrance exams, and verify regulatory accreditation.</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="AdminView.openAddCourseModal()">
            + Add New Course
          </button>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Program Name</th>
                <th>Stream</th>
                <th>Duration</th>
                <th>Entrance Exams</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${courses.map(c => `
                <tr>
                  <td><code>${c.code}</code></td>
                  <td><strong>${c.name}</strong></td>
                  <td><span class="badge badge-primary">${c.streamId.replace('stream-', '').toUpperCase()}</span></td>
                  <td>${c.duration}</td>
                  <td><small>${c.entranceRequirements.slice(0, 35)}...</small></td>
                  <td>
                    <div class="flex gap-xs">
                      <button class="btn btn-secondary btn-sm" onclick="AdminView.editCourse('${c.id}')">Edit</button>
                      <button class="btn btn-outline btn-sm" onclick="AdminView.deleteCourse('${c.id}')" style="color:var(--danger);">Delete</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // Module 3: Manage Careers
  renderCareersManager() {
    const careers = StorageService.getCareers();

    return `
      <div class="card">
        <div class="flex justify-between items-center mb-md flex-wrap gap-sm">
          <div>
            <h4>Industry Careers Catalog (${careers.length} Roles)</h4>
            <p class="text-muted" style="font-size:0.85rem;">Configure job responsibilities, salary ranges, and prerequisite degrees.</p>
          </div>
          <button class="btn btn-primary btn-sm" onclick="AdminView.openAddCareerModal()">
            + Add New Career Role
          </button>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Field Category</th>
                <th>Required Degree</th>
                <th>Salary Benchmark Band</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${careers.map(car => `
                <tr>
                  <td><strong>${car.title}</strong></td>
                  <td><span class="badge badge-secondary">${car.fieldCategory}</span></td>
                  <td><small>${car.requiredDegree}</small></td>
                  <td><small>${car.salaryBenchmark}</small></td>
                  <td>
                    <div class="flex gap-xs">
                      <button class="btn btn-outline btn-sm" onclick="AdminView.deleteCareer('${car.id}')" style="color:var(--danger);">Delete</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // Module 4: Questions Manager
  renderQuestionsManager() {
    const questions = SeedData.assessmentQuestions;

    return `
      <div class="card">
        <div class="flex justify-between items-center mb-md">
          <div>
            <h4>Skill & Aptitude Test Question Bank (${questions.length} Items)</h4>
            <p class="text-muted" style="font-size:0.85rem;">Questions spanning Analytical, Logical, Technical, Communication, and Creativity.</p>
          </div>
        </div>

        <div class="admin-table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Type</th>
                <th>Question Text</th>
                <th>Options Count</th>
              </tr>
            </thead>
            <tbody>
              ${questions.map((q, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><span class="badge badge-primary">${q.category}</span></td>
                  <td><code>${q.type}</code></td>
                  <td>${q.text.slice(0, 65)}...</td>
                  <td>${q.options ? q.options.length : 0} Options</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // Module 5: Recommendation Weights
  renderRulesManager() {
    const rules = StorageService.getRules();

    return `
      <div class="card" style="max-width: 680px; margin: 0 auto;">
        <h4 class="mb-sm">⚙️ Recommendation Algorithm Factor Weights</h4>
        <p class="text-muted" style="font-size:0.85rem; margin-bottom: 20px;">
          Adjust the multi-factor scoring weights applied by the AI recommendation engine. Ensure weights sum to 100%.
        </p>

        <form id="rulesForm" onsubmit="event.preventDefault(); AdminView.saveRules();">
          <div class="form-group">
            <label class="form-label">
              <span>Academic Stream & Marks Compatibility:</span>
              <strong id="weight_academic_val">${rules.weightAcademic}%</strong>
            </label>
            <input type="range" min="10" max="60" value="${rules.weightAcademic}" class="form-control" 
                   oninput="document.getElementById('weight_academic_val').innerText = this.value + '%'" id="rule_academic">
          </div>

          <div class="form-group">
            <label class="form-label">
              <span>Aptitude & Assessment Scores:</span>
              <strong id="weight_aptitude_val">${rules.weightAptitude}%</strong>
            </label>
            <input type="range" min="10" max="50" value="${rules.weightAptitude}" class="form-control"
                   oninput="document.getElementById('weight_aptitude_val').innerText = this.value + '%'" id="rule_aptitude">
          </div>

          <div class="form-group">
            <label class="form-label">
              <span>Stated Interests & Career Goals:</span>
              <strong id="weight_interests_val">${rules.weightInterests}%</strong>
            </label>
            <input type="range" min="10" max="40" value="${rules.weightInterests}" class="form-control"
                   oninput="document.getElementById('weight_interests_val').innerText = this.value + '%'" id="rule_interests">
          </div>

          <div class="form-group">
            <label class="form-label">
              <span>Current Skills & Bridge Competencies:</span>
              <strong id="weight_skills_val">${rules.weightSkills}%</strong>
            </label>
            <input type="range" min="5" max="30" value="${rules.weightSkills}" class="form-control"
                   oninput="document.getElementById('weight_skills_val').innerText = this.value + '%'" id="rule_skills">
          </div>

          <div class="form-group">
            <label class="form-label">
              <span>Budget & Study Location Preferences:</span>
              <strong id="weight_budget_val">${rules.weightBudget}%</strong>
            </label>
            <input type="range" min="0" max="25" value="${rules.weightBudget}" class="form-control"
                   oninput="document.getElementById('weight_budget_val').innerText = this.value + '%'" id="rule_budget">
          </div>

          <div class="mt-lg flex justify-between items-center">
            <button type="button" class="btn btn-outline" onclick="AdminView.resetRules()">Reset Defaults</button>
            <button type="submit" class="btn btn-primary">💾 Save Algorithm Weights</button>
          </div>
        </form>
      </div>
    `;
  },

  setModule(mod) {
    this.activeModule = mod;
    App.render();
  },

  getStats() {
    return {
      totalStudents: 2840,
      activeStudents: 1420,
      assessmentCompletionRate: 88,
      totalCourses: StorageService.getCourses().length
    };
  },

  deleteCourse(id) {
    if (confirm("Are you sure you want to delete this course from the catalog?")) {
      StorageService.deleteCourse(id);
      App.showToast("Course removed from catalog.", "info");
      App.render();
    }
  },

  deleteCareer(id) {
    if (confirm("Are you sure you want to delete this career profile?")) {
      StorageService.deleteCareer(id);
      App.showToast("Career profile removed.", "info");
      App.render();
    }
  },

  saveRules() {
    const rules = {
      weightAcademic: parseInt(document.getElementById("rule_academic").value),
      weightAptitude: parseInt(document.getElementById("rule_aptitude").value),
      weightInterests: parseInt(document.getElementById("rule_interests").value),
      weightSkills: parseInt(document.getElementById("rule_skills").value),
      weightBudget: parseInt(document.getElementById("rule_budget").value)
    };
    StorageService.saveRules(rules);
    App.showToast("Recommendation weights successfully updated!", "success");
    App.render();
  },

  resetRules() {
    StorageService.saveRules({ weightAcademic: 30, weightAptitude: 25, weightInterests: 20, weightSkills: 15, weightBudget: 10 });
    App.showToast("Weights reset to defaults.", "info");
    App.render();
  },

  openSchemaModal() {
    App.openModal("Relational Database Schema (29 Entities)", `
      <div style="font-size: 0.85rem;">
        <p class="mb-md">The platform data model follows a strict relational database architecture linking users, profiles, assessments, courses, careers, and tasks:</p>
        <div style="max-height: 480px; overflow-y: auto;">
          ${Object.keys(DBSchema.tables).map(tName => {
            const tbl = DBSchema.tables[tName];
            return `
              <div class="card mb-sm" style="padding: 10px 14px;">
                <div class="flex justify-between items-center mb-xs">
                  <strong style="color: var(--primary-light); font-size: 0.95rem;">TABLE: ${tName}</strong>
                  <span class="text-muted" style="font-size:0.75rem;">${tbl.columns.length} Columns</span>
                </div>
                <p style="font-size:0.8rem; margin-bottom: 6px;">${tbl.description}</p>
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-secondary);">
                  ${tbl.columns.map(c => `${c.name} (${c.type}${c.isPrimary ? ' PRIMARY' : ''}${c.foreignKey ? ' FK -> ' + c.foreignKey : ''})`).join(" • ")}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `);
  },

  openAddCourseModal() {
    App.openModal("Add New Course Program", `
      <form onsubmit="event.preventDefault(); AdminView.saveNewCourse();">
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Course Code (e.g. BTECH_DATA_SCI)</label>
            <input type="text" id="new_c_code" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">Program Name</label>
            <input type="text" id="new_c_name" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">Stream</label>
            <select id="new_c_stream" class="form-select">
              <option value="stream-mpc">MPC</option>
              <option value="stream-bipc">BiPC</option>
              <option value="stream-mec">MEC</option>
              <option value="stream-cec">CEC</option>
              <option value="stream-arts">Arts / Humanities</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Duration</label>
            <input type="text" id="new_c_duration" class="form-control" value="4 Years (8 Semesters)">
          </div>
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Eligibility Criteria</label>
            <input type="text" id="new_c_eligibility" class="form-control" value="10+2 with minimum 55% aggregate">
          </div>
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Entrance Examinations</label>
            <input type="text" id="new_c_entrance" class="form-control" value="State CETs, National Entrance Tests">
          </div>
        </div>
        <div class="mt-md text-right">
          <button type="submit" class="btn btn-primary">Save Course to Database</button>
        </div>
      </form>
    `);
  },

  saveNewCourse() {
    const newCourse = {
      id: "course-" + Date.now(),
      code: document.getElementById("new_c_code").value.trim().toUpperCase(),
      name: document.getElementById("new_c_name").value.trim(),
      streamId: document.getElementById("new_c_stream").value,
      duration: document.getElementById("new_c_duration").value.trim(),
      degreeType: "Bachelor Degree",
      eligibility: document.getElementById("new_c_eligibility").value.trim(),
      entranceRequirements: document.getElementById("new_c_entrance").value.trim(),
      mainSubjects: ["Core Discipline Foundations", "Laboratory Practicals", "Electives"],
      requiredSkills: ["Analytical Thinking", "Subject Foundations", "Problem Solving"],
      careerOpportunities: ["Specialist Trainee", "Associate Analyst", "Junior Engineer"],
      higherStudies: ["Master's Degree", "Research Fellowship"],
      approxFee: "₹80,000 - ₹2,00,000 / year",
      officialSource: "https://www.ugc.ac.in"
    };

    StorageService.saveCourse(newCourse);
    App.closeModal();
    App.showToast(`Course "${newCourse.name}" added to catalog!`, "success");
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.AdminView = AdminView;
}
