/**
 * Projects View - Portfolio & Capstone Project Recommendations
 * Career Compass
 */

const ProjectsView = {
  activeCategoryFilter: "all",

  render() {
    const projects = StorageService.getProjects();
    const progress = StorageService.getProgress();

    let filtered = projects;
    if (this.activeCategoryFilter !== "all") {
      filtered = projects.filter(p => p.category === this.activeCategoryFilter);
    }

    const completedCount = projects.filter(p => progress[p.id] === "completed").length;
    const inProgressCount = projects.filter(p => progress[p.id] === "in_progress").length;

    return `
      <div class="app-container">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <span class="badge badge-primary">Hands-on Experience</span>
            <h2 class="mt-xs">Practical Project Recommendations</h2>
            <p>Stand out to recruiters with industry-aligned portfolio projects tiered from beginner drills to enterprise capstones.</p>
          </div>

          <div class="flex items-center gap-sm">
            <span class="badge badge-success">Completed: ${completedCount}</span>
            <span class="badge badge-warning">In Progress: ${inProgressCount}</span>
          </div>
        </div>

        <!-- Filter Chips -->
        <div class="filter-bar">
          <div class="flex items-center gap-xs flex-wrap">
            <button class="btn btn-sm ${this.activeCategoryFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="ProjectsView.setFilter('all')">All Projects (${projects.length})</button>
            <button class="btn btn-sm ${this.activeCategoryFilter === 'beginner' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="ProjectsView.setFilter('beginner')">🌱 Beginner</button>
            <button class="btn btn-sm ${this.activeCategoryFilter === 'intermediate' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="ProjectsView.setFilter('intermediate')">⚡ Intermediate</button>
            <button class="btn btn-sm ${this.activeCategoryFilter === 'advanced' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="ProjectsView.setFilter('advanced')">🔥 Advanced</button>
            <button class="btn btn-sm ${this.activeCategoryFilter === 'capstone' ? 'btn-primary' : 'btn-secondary'}" 
                    onclick="ProjectsView.setFilter('capstone')">🏆 Final-Year Capstone</button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="courses-grid">
          ${filtered.map(proj => this.renderProjectCard(proj, progress[proj.id] || "not_started")).join("")}
        </div>
      </div>
    `;
  },

  renderProjectCard(proj, status) {
    let diffBadge = "badge-info";
    if (proj.difficulty.includes("Intermediate")) diffBadge = "badge-warning";
    else if (proj.difficulty.includes("Advanced")) diffBadge = "badge-danger";
    else if (proj.difficulty.includes("Capstone")) diffBadge = "badge-primary";

    return `
      <div class="course-card" style="border-top: 4px solid ${status === 'completed' ? 'var(--success)' : status === 'in_progress' ? 'var(--warning)' : 'var(--border-medium)'};">
        <div class="course-card-top">
          <div class="flex justify-between items-center gap-xs mb-xs">
            <span class="badge ${diffBadge}">${proj.difficulty}</span>
            <span class="badge badge-secondary">${proj.careerField}</span>
          </div>

          <h3 class="course-title" style="margin-top: 6px;">${proj.title}</h3>

          <p style="font-size: 0.88rem; margin: 8px 0; color: var(--text-secondary);">
            ${proj.description}
          </p>

          <div class="course-why-box" style="margin: 10px 0;">
            <strong>Expected Outcome:</strong> ${proj.expectedOutcome}
          </div>

          <div class="mb-sm">
            <strong style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted);">Technologies Used:</strong>
            <div class="flex flex-wrap gap-xs mt-xs">
              ${(proj.technologies || []).map(t => `<span class="badge badge-primary">${t}</span>`).join("")}
            </div>
          </div>

          <div>
            <strong style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted);">Learning Objectives:</strong>
            <ul style="padding-left: 1.2rem; font-size: 0.82rem; margin-top: 4px; color: var(--text-secondary);">
              ${(proj.learningObjectives || []).map(lo => `<li>${lo}</li>`).join("")}
            </ul>
          </div>
        </div>

        <div class="course-card-footer">
          <span style="font-size: 0.82rem; color: var(--text-muted);">⏱️ ~${proj.estimatedHours} Hours</span>

          <div class="flex items-center gap-xs">
            <span style="font-size: 0.8rem; font-weight: 600;">Status:</span>
            <select class="form-select" style="padding: 0.35rem 1.6rem 0.35rem 0.65rem; font-size: 0.8rem; width: auto;"
                    onchange="ProjectsView.updateStatus('${proj.id}', this.value)">
              <option value="not_started" ${status === 'not_started' ? 'selected' : ''}>⏳ Not Started</option>
              <option value="in_progress" ${status === 'in_progress' ? 'selected' : ''}>🔄 In Progress</option>
              <option value="completed" ${status === 'completed' ? 'selected' : ''}>✅ Completed</option>
            </select>
          </div>
        </div>
      </div>
    `;
  },

  setFilter(filter) {
    this.activeCategoryFilter = filter;
    App.render();
  },

  updateStatus(projId, status) {
    StorageService.setItemStatus(projId, status);
    App.showToast(`Project status updated to ${status.replace('_', ' ')}!`, "success");
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.ProjectsView = ProjectsView;
}
