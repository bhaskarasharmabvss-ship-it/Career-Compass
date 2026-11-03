/**
 * ComparisonTable Component - Multi-Course Side-by-Side Comparison Matrix
 * Career Compass
 */

class ComparisonTableComponent {
  /**
   * Render side-by-side comparison for up to 4 courses
   * @param {Array<Object>} courses 
   * @returns {string} HTML markup
   */
  static render(courses) {
    if (!courses || courses.length === 0) {
      return `
        <div class="empty-state">
          <div class="empty-state-icon">⚖️</div>
          <h3>No Courses Selected for Comparison</h3>
          <p>Explore courses from the Courses tab and click <strong>"Add to Compare"</strong> (up to 4 courses) to view a comprehensive side-by-side feature matrix.</p>
          <button class="btn btn-primary mt-md" onclick="App.navigate('courses')">Explore Courses Catalog</button>
        </div>
      `;
    }

    const headers = courses.map(c => `
      <th>
        <div class="flex items-center justify-between gap-xs">
          <span>${c.name}</span>
          <button class="btn btn-icon btn-sm" title="Remove course" onclick="App.removeFromCompare('${c.id}')" style="width:24px;height:24px;font-size:0.8rem;">✕</button>
        </div>
        <div class="text-muted" style="font-size:0.75rem; font-weight:normal; margin-top:4px;">${c.code}</div>
      </th>
    `).join("");

    const row = (label, accessor) => {
      const cells = courses.map(c => {
        const val = accessor(c);
        return `<td>${val || "—"}</td>`;
      }).join("");
      return `<tr><td>${label}</td>${cells}</tr>`;
    };

    return `
      <div class="comparison-header flex items-center justify-between mb-md flex-wrap gap-md">
        <div>
          <h3>Comparing ${courses.length} of 4 Courses</h3>
          <p>Detailed side-by-side breakdown of academic requirements, curricula, and career progression.</p>
        </div>
        <div class="flex gap-sm">
          <button class="btn btn-outline btn-sm" onclick="App.clearCompare()">Clear All</button>
          <button class="btn btn-secondary btn-sm" onclick="App.navigate('courses')">+ Add Another Course</button>
        </div>
      </div>

      <div class="comparison-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th style="min-width: 200px;">Feature / Metric</th>
              ${headers}
            </tr>
          </thead>
          <tbody>
            ${row("Degree Type", c => `<span class="badge badge-primary">${c.degreeType || "Undergraduate"}</span>`)}
            ${row("Duration", c => c.duration)}
            ${row("Eligibility Criteria", c => c.eligibility)}
            ${row("Entrance Requirements", c => `<strong>${c.entranceRequirements}</strong>`)}
            ${row("Main Subjects", c => (c.mainSubjects || []).join(", "))}
            ${row("Required Skills", c => (c.requiredSkills || []).map(s => `<span class="badge badge-secondary" style="margin:2px;">${s}</span>`).join(" "))}
            ${row("Career Opportunities", c => (c.careerOpportunities || []).join(", "))}
            ${row("Higher Studies", c => (c.higherStudies || []).join(", "))}
            ${row("Approximate Annual Fee", c => c.approxFee || "Check official institution")}
            ${row("Official Portal Verification", c => `<a href="${c.officialSource}" target="_blank" rel="noopener">Official Portal ↗</a>`)}
            ${row("Roadmap View", c => `<button class="btn btn-primary btn-sm" onclick="App.viewRoadmap('${c.id}')">View 6-Stage Roadmap</button>`)}
          </tbody>
        </table>
      </div>
    `;
  }
}

if (typeof window !== "undefined") {
  window.ComparisonTableComponent = ComparisonTableComponent;
}
