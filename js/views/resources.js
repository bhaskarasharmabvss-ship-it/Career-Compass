/**
 * Resources View - Certifications, Curated Tutorials & Practice Platforms
 * Career Compass
 */

const ResourcesView = {
  activeCostFilter: "all",
  activeLevelFilter: "all",

  render() {
    const certs = StorageService.getCertifications();

    let filteredCerts = certs;
    if (this.activeCostFilter !== "all") {
      filteredCerts = filteredCerts.filter(c => c.costType === this.activeCostFilter);
    }
    if (this.activeLevelFilter !== "all") {
      filteredCerts = filteredCerts.filter(c => c.difficulty.toLowerCase().includes(this.activeLevelFilter));
    }

    const practicePlatforms = [
      { name: "LeetCode", category: "DSA & Coding", type: "Free / Premium", desc: "Top platform for algorithmic interview prep.", url: "https://leetcode.com" },
      { name: "HackerRank", category: "Problem Solving", type: "Free", desc: "Beginner-friendly domain certifications and drills.", url: "https://hackerrank.com" },
      { name: "Kaggle", category: "Data Science & ML", type: "Free", desc: "Real-world datasets, Jupyter kernels, and competitive modeling.", url: "https://kaggle.com" },
      { name: "Swayam / NPTEL", category: "Govt of India MOOC", type: "Free Course / Subsidized Exam", desc: "College credit-eligible courses taught by IIT/IISc professors.", url: "https://swayam.gov.in" },
      { name: "Harvard CS50", category: "Computer Science", type: "Free Audit", desc: "World-renowned foundational computing curriculum.", url: "https://pll.harvard.edu/course/cs50-introduction-computer-science" }
    ];

    return `
      <div class="app-container">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-md mb-lg">
          <div>
            <span class="badge badge-primary">Curated Directory</span>
            <h2 class="mt-xs">Certifications & Learning Resources</h2>
            <p>Verified learning portals, industry credentials, and skill practice platforms to bolster your resume.</p>
          </div>
        </div>

        <!-- Verification Advisory -->
        <div class="disclaimer-banner compact">
          <div class="disclaimer-icon">ℹ️</div>
          <div class="disclaimer-text">
            <strong>Resource Authenticity:</strong> External credential fees, exam dates, and financial aid policies can change. Verify all information on the issuing provider's official portal.
          </div>
        </div>

        <!-- Filter Controls -->
        <div class="filter-bar">
          <div class="flex items-center gap-xs flex-wrap">
            <span class="text-muted" style="font-size:0.85rem; font-weight:600;">Cost:</span>
            <button class="btn btn-sm ${this.activeCostFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" onclick="ResourcesView.setCostFilter('all')">All</button>
            <button class="btn btn-sm ${this.activeCostFilter === 'free' ? 'btn-primary' : 'btn-secondary'}" onclick="ResourcesView.setCostFilter('free')">🎁 Free Only</button>
            <button class="btn btn-sm ${this.activeCostFilter === 'paid' ? 'btn-primary' : 'btn-secondary'}" onclick="ResourcesView.setCostFilter('paid')">💳 Paid Credentials</button>

            <span class="text-muted" style="font-size:0.85rem; font-weight:600; margin-left: 1rem;">Level:</span>
            <button class="btn btn-sm ${this.activeLevelFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" onclick="ResourcesView.setLevelFilter('all')">All</button>
            <button class="btn btn-sm ${this.activeLevelFilter === 'beginner' ? 'btn-primary' : 'btn-secondary'}" onclick="ResourcesView.setLevelFilter('beginner')">Beginner</button>
            <button class="btn btn-sm ${this.activeLevelFilter === 'intermediate' ? 'btn-primary' : 'btn-secondary'}" onclick="ResourcesView.setLevelFilter('intermediate')">Intermediate</button>
            <button class="btn btn-sm ${this.activeLevelFilter === 'advanced' ? 'btn-primary' : 'btn-secondary'}" onclick="ResourcesView.setLevelFilter('advanced')">Advanced</button>
          </div>
        </div>

        <!-- Recommended Certifications Grid -->
        <h3 class="mb-md">🏆 High-Impact Industry Certifications</h3>
        <div class="courses-grid mb-xl">
          ${filteredCerts.map(cert => `
            <div class="course-card">
              <div class="course-card-top">
                <div class="flex justify-between items-center mb-xs">
                  <span class="badge ${cert.costType === 'free' ? 'badge-success' : 'badge-primary'}">${cert.costType.toUpperCase()}</span>
                  <span class="badge badge-secondary">${cert.field}</span>
                </div>

                <h3 class="course-title" style="margin-top:6px;">${cert.name}</h3>
                <div class="text-muted" style="font-size:0.85rem; margin-bottom:8px;">Issued by: <strong>${cert.issuingOrg}</strong></div>

                <div class="course-details-list">
                  <div><strong>Difficulty:</strong> ${cert.difficulty}</div>
                  <div><strong>Typical Duration:</strong> ${cert.duration}</div>
                </div>
              </div>

              <div class="course-card-footer">
                <a href="${cert.url}" target="_blank" rel="noopener" class="btn btn-outline btn-sm w-full text-center">
                  Verify & Enroll on Official Portal ↗
                </a>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Practice Platforms & MOOCs Grid -->
        <h3 class="mb-md">💻 Core Practice Platforms & MOOC Hubs</h3>
        <div class="courses-grid">
          ${practicePlatforms.map(p => `
            <div class="card">
              <div class="flex justify-between items-center mb-xs">
                <span class="badge badge-primary">${p.category}</span>
                <span class="badge badge-success">${p.type}</span>
              </div>
              <h4 style="margin: 8px 0 4px;">${p.name}</h4>
              <p style="font-size:0.85rem; margin-bottom: 12px;">${p.desc}</p>
              <a href="${p.url}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
                Open Platform ↗
              </a>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  },

  setCostFilter(cost) {
    this.activeCostFilter = cost;
    App.render();
  },

  setLevelFilter(level) {
    this.activeLevelFilter = level;
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.ResourcesView = ResourcesView;
}
