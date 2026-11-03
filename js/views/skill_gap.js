/**
 * SkillGap View - Intelligent Skill-Gap Analyzer
 * Career Compass
 */

const SkillGapView = {
  selectedCareerId: null,

  render() {
    const student = StorageService.getStudentProfile();
    const careers = StorageService.getCareers();

    // Default to first career if not set
    if (!this.selectedCareerId && careers.length > 0) {
      this.selectedCareerId = careers[0].id;
    }

    const currentCareer = careers.find(c => c.id === this.selectedCareerId) || careers[0];
    const skillGaps = RecommendationEngine.computeGlobalSkillGaps(student, currentCareer);

    // Prepare radar comparison data
    const radarData = skillGaps.map(g => ({
      label: g.skill,
      value: g.current,
      targetValue: g.required
    }));

    setTimeout(() => {
      RadarChart.render("#skillGapRadarChart", radarData, { width: 380, height: 380 });
    }, 50);

    return `
      <div class="app-container">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <span class="badge badge-warning">Diagnostic Benchmark</span>
            <h2 class="mt-xs">Skill-Gap Analysis</h2>
            <p>Comparing your self-reported proficiency against target industry requirements for <strong>${currentCareer.title}</strong>.</p>
          </div>

          <!-- Career Selector Dropdown -->
          <div class="flex items-center gap-xs">
            <label class="form-label mb-0" style="margin-bottom:0;">Target Career:</label>
            <select class="form-select" style="min-width: 240px;" onchange="SkillGapView.onCareerChange(this.value)">
              ${careers.map(c => `
                <option value="${c.id}" ${c.id === currentCareer.id ? 'selected' : ''}>${c.title}</option>
              `).join("")}
            </select>
          </div>
        </div>

        <!-- Official Disclaimer Notice -->
        <div class="disclaimer-banner compact">
          <div class="disclaimer-icon">⚠️</div>
          <div class="disclaimer-text">
            <strong>Diagnostic Tool Advisory:</strong> Skill gap percentages indicate curriculum readiness areas. They are designed to help you prioritize your upcoming learning schedule, projects, and certifications. A narrow gap is not a guarantee of employment or immediate placement.
          </div>
        </div>

        <!-- Skill Gap Main Layout -->
        <div class="skill-gap-layout">
          <!-- Left: Comparative Spider Chart -->
          <div class="card">
            <h4 class="mb-sm text-center">Current vs. Target Industry Benchmark</h4>
            <div class="flex justify-center items-center gap-md mb-md text-sm" style="font-size:0.8rem;">
              <span class="flex items-center gap-xs">
                <span style="display:inline-block;width:12px;height:12px;background:var(--primary);border-radius:2px;"></span>
                Your Current Level
              </span>
              <span class="flex items-center gap-xs">
                <span style="display:inline-block;width:12px;height:12px;background:var(--secondary);border-radius:2px;border:1px dashed var(--secondary);"></span>
                Target Industry Benchmark (80%)
              </span>
            </div>

            <div class="chart-container">
              <div id="skillGapRadarChart"></div>
            </div>

            <!-- What-if Interactive Simulator Box -->
            <div class="card mt-lg" style="background: var(--bg-surface-elevated); padding: var(--space-md);">
              <h5>💡 "What-If" Learning Simulator</h5>
              <p style="font-size: 0.82rem; margin-bottom: 10px;">
                Simulate spending 6 weeks building your primary gap skill. Notice how closing high-priority gaps unlocks advanced projects and internships.
              </p>
              <button class="btn btn-primary btn-sm w-full" onclick="SkillGapView.simulateSkillBoost()">
                ⚡ Boost Skill Scores (+15% Across Gaps)
              </button>
            </div>
          </div>

          <!-- Right: Detailed Skill Breakdown Cards -->
          <div>
            <div class="flex justify-between items-center mb-md">
              <h4>Skill Breakdown & Priority Actions</h4>
              <span class="badge badge-primary">${skillGaps.length} Key Competencies</span>
            </div>

            <div class="flex flex-col gap-sm">
              ${skillGaps.map(item => this.renderSkillCard(item)).join("")}
            </div>

            <!-- Next Step CTA -->
            <div class="card mt-lg" style="background: var(--bg-surface-elevated);">
              <h5>Turn These Gaps into a Structured Learning Plan</h5>
              <p style="font-size: 0.85rem; margin-bottom: 12px;">
                Our personalized roadmap breaks down these exact skills into monthly bite-sized milestones.
              </p>
              <button class="btn btn-primary btn-sm" onclick="App.navigate('roadmap')">
                🗺️ View Personalized Learning Roadmap →
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderSkillCard(item) {
    let priorityBadge = "badge-success";
    if (item.priority === "High") priorityBadge = "badge-danger";
    else if (item.priority === "Moderate") priorityBadge = "badge-warning";

    return `
      <div class="skill-compare-card">
        <div class="flex justify-between items-center mb-xs">
          <div>
            <strong style="font-size: 1rem;">${item.skill}</strong>
            <div class="text-muted" style="font-size: 0.78rem;">Target Benchmark: ${item.required}%</div>
          </div>
          <span class="badge ${priorityBadge}">${item.priority} Priority Gap (${item.gapPct}%)</span>
        </div>

        <div class="skill-bar-row">
          <div class="skill-bar-header">
            <span>Current: <strong>${item.current}%</strong></span>
            <span>Target: <strong>${item.required}%</strong></span>
          </div>

          <div class="skill-bar-double">
            <div class="skill-bar-required" style="width: ${item.required}%;"></div>
            <div class="skill-bar-current" style="width: ${item.current}%;"></div>
          </div>
        </div>

        <div class="flex justify-between items-center flex-wrap gap-xs text-xs" style="font-size: 0.8rem; color: var(--text-secondary); border-top: 1px solid var(--border-subtle); padding-top: 6px;">
          <span>📍 <strong>Recommended Stage:</strong> ${item.recommendedStage}</span>
          <a href="javascript:void(0)" onclick="App.navigate('resources')">Explore Recommended Tutorials ↗</a>
        </div>
      </div>
    `;
  },

  onCareerChange(careerId) {
    this.selectedCareerId = careerId;
    App.render();
  },

  simulateSkillBoost() {
    const student = StorageService.getStudentProfile();
    student.skills = student.skills || [];
    student.skills.forEach(s => {
      s.proficiency = Math.min(95, s.proficiency + 15);
    });
    StorageService.saveStudentProfile(student);
    App.showToast("Skill proficiencies simulated +15%! Gaps recalculated.", "success");
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.SkillGapView = SkillGapView;
}
