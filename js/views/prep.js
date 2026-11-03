/**
 * Prep View - Internship & Job Placement Readiness Hub
 * Career Compass
 */

const PrepView = {
  checklist: [
    { id: "c1", label: "Build a 1-page ATS-compliant PDF resume (No columns, clear headers)", checked: true },
    { id: "c2", label: "Pin top 3 GitHub repositories with architectural architecture diagrams and live demo links", checked: true },
    { id: "c3", label: "Optimize LinkedIn headline with target role keywords and skills", checked: false },
    { id: "c4", label: "Practice 50 LeetCode Medium / domain technical problems", checked: false },
    { id: "c5", label: "Prepare 5 STAR stories (Situation, Task, Action, Result) for behavioral questions", checked: false },
    { id: "c6", label: "Conduct 2 peer or AI mock interviews", checked: false },
    { id: "c7", label: "Assemble target spreadsheet of 30 hiring companies and alumni contacts", checked: false }
  ],

  render() {
    const checkedCount = this.checklist.filter(c => c.checked).length;
    const readinessPct = Math.round((checkedCount / this.checklist.length) * 100);

    return `
      <div class="app-container">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <span class="badge badge-primary">Career Readiness</span>
            <h2 class="mt-xs">Internship & Job Placement Preparation</h2>
            <p>Master every phase of campus recruitment, off-campus drives, ATS resume screening, and technical interviews.</p>
          </div>

          <div class="card" style="padding: var(--space-sm) var(--space-md); min-width: 220px;">
            <div class="flex justify-between items-center mb-xs" style="font-size: 0.85rem;">
              <span>Readiness Score:</span>
              <strong>${readinessPct}%</strong>
            </div>
            <div class="progress-bar-wrapper">
              <div class="progress-bar-fill ${readinessPct >= 70 ? 'success' : 'warning'}" style="width: ${readinessPct}%;"></div>
            </div>
          </div>
        </div>

        <div class="dashboard-grid">
          <!-- Left: Guides and Frameworks -->
          <div class="flex flex-col gap-lg">
            <!-- 1. Resume Preparation -->
            <div class="card">
              <div class="flex items-center gap-sm mb-sm">
                <span class="step-icon" style="margin-bottom:0; width:36px; height:36px; font-size:1.1rem;">📄</span>
                <h4>1. ATS-Friendly Resume Framework</h4>
              </div>
              <p style="font-size:0.9rem; margin-bottom:12px;">
                Applicant Tracking Systems (ATS) reject up to 75% of resumes due to fancy multi-column graphics or unrecognized tables.
              </p>
              <div style="background: var(--bg-surface-elevated); padding: var(--space-md); border-radius: var(--radius-md); font-size: 0.85rem; line-height: 1.6;">
                <div>✅ <strong>Format:</strong> Clean single-column layout, standard reverse chronological format.</div>
                <div>✅ <strong>Formula:</strong> Accomplished [X] as measured by [Y], by doing [Z] (Google XYZ format).</div>
                <div>✅ <strong>Action Verbs:</strong> Engineered, Architected, Spearheaded, Optimized, Quantified.</div>
                <div>❌ <strong>Avoid:</strong> Skill rating bars (e.g. 4/5 stars in Python), personal photos, icons.</div>
              </div>
            </div>

            <!-- 2. Portfolio & GitHub Setup -->
            <div class="card">
              <div class="flex items-center gap-sm mb-sm">
                <span class="step-icon" style="margin-bottom:0; width:36px; height:36px; font-size:1.1rem;">💻</span>
                <h4>2. GitHub & Portfolio Presentation</h4>
              </div>
              <p style="font-size:0.9rem; margin-bottom:12px;">
                Showcase tangible technical evidence rather than claiming skills on paper.
              </p>
              <div style="background: var(--bg-surface-elevated); padding: var(--space-md); border-radius: var(--radius-md); font-size: 0.85rem; line-height: 1.6;">
                <div>⭐ <strong>README Perfection:</strong> Include project GIFs, problem statements, architecture diagrams, and setup instructions.</div>
                <div>⭐ <strong>Live Deployment:</strong> Provide hosted URLs (Vercel, Render, GitHub Pages) on the repo homepage.</div>
                <div>⭐ <strong>Commit Hygiene:</strong> Frequent descriptive commit messages showing continuous problem solving.</div>
              </div>
            </div>

            <!-- 3. Behavioral Interview (STAR Method) -->
            <div class="card">
              <div class="flex items-center gap-sm mb-sm">
                <span class="step-icon" style="margin-bottom:0; width:36px; height:36px; font-size:1.1rem;">🗣️</span>
                <h4>3. Behavioral & HR Prep (STAR Method)</h4>
              </div>
              <p style="font-size:0.9rem; margin-bottom:12px;">
                Master answering questions like <em>"Tell me about a time you faced a difficult conflict in a team project."</em>
              </p>
              <div class="form-grid" style="font-size: 0.85rem;">
                <div style="background: var(--bg-surface-elevated); padding: var(--space-sm); border-radius: var(--radius-sm);">
                  <strong>S - Situation:</strong> Set the context and challenge faced.
                </div>
                <div style="background: var(--bg-surface-elevated); padding: var(--space-sm); border-radius: var(--radius-sm);">
                  <strong>T - Task:</strong> Clarify your specific responsibility.
                </div>
                <div style="background: var(--bg-surface-elevated); padding: var(--space-sm); border-radius: var(--radius-sm);">
                  <strong>A - Action:</strong> Describe the precise steps and problem-solving you enacted.
                </div>
                <div style="background: var(--bg-surface-elevated); padding: var(--space-sm); border-radius: var(--radius-sm);">
                  <strong>R - Result:</strong> Share quantifiable outcomes (e.g. "Reduced load time by 34%").
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Checklist -->
          <div class="card">
            <h4 class="mb-sm">Job Application Checklist</h4>
            <p class="text-muted" style="font-size:0.85rem; margin-bottom:16px;">
              Check off items as you complete your preparation milestones:
            </p>

            <div class="flex flex-col gap-sm">
              ${this.checklist.map((item, idx) => `
                <label class="flex items-center gap-sm" style="background: var(--bg-surface-elevated); padding: 0.65rem 0.85rem; border-radius: var(--radius-md); cursor: pointer; font-size: 0.88rem;">
                  <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="PrepView.toggleCheck(${idx})" style="width: 18px; height: 18px;">
                  <span style="${item.checked ? 'text-decoration: line-through; opacity: 0.7;' : ''}">${item.label}</span>
                </label>
              `).join("")}
            </div>

            <div class="mt-lg">
              <button class="btn btn-outline btn-sm w-full" onclick="PrepView.resetChecklist()">
                🔄 Reset Checklist
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  toggleCheck(index) {
    this.checklist[index].checked = !this.checklist[index].checked;
    App.render();
  },

  resetChecklist() {
    this.checklist.forEach(c => c.checked = false);
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.PrepView = PrepView;
}
