/**
 * Profile View - Comprehensive Student Profile Management
 * Career Compass
 */

const ProfileView = {
  render() {
    const student = StorageService.getStudentProfile();
    const completionPct = this.calculateCompletion(student);

    return `
      <div class="app-container">
        <!-- Official Advisory -->
        <div class="disclaimer-banner compact">
          <div class="disclaimer-icon">ℹ️</div>
          <div class="disclaimer-text">
            <strong>Personalized Profile:</strong> Your answers directly tune the AI recommendation engine and skill-gap analyzer. The more comprehensive your inputs, the more tailored your course, career, and project roadmaps will be.
          </div>
        </div>

        <div class="profile-container">
          <!-- Profile Sidebar -->
          <div class="profile-sidebar">
            <div class="profile-card-summary">
              <div class="profile-avatar-large">${student.avatar || "👨‍🎓"}</div>
              <h3 style="margin-bottom: 2px;">${student.fullName || "Student Name"}</h3>
              <p class="text-muted" style="font-size:0.85rem;">${student.streamCode || "MPC"} Stream | ${student.qualificationStatus === 'completed_12th' ? 'Completed 12th' : 'College Student'}</p>
              
              <div class="profile-completion-meter">
                <div class="flex justify-between items-center mb-xs" style="font-size: 0.85rem;">
                  <span>Profile Strength</span>
                  <strong>${completionPct}%</strong>
                </div>
                <div class="progress-bar-wrapper">
                  <div class="progress-bar-fill ${completionPct >= 80 ? 'success' : 'warning'}" style="width: ${completionPct}%;"></div>
                </div>
              </div>

              <div class="text-left mt-md" style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
                <div>📍 <strong>Location:</strong> ${student.location || "Not specified"}</div>
                <div>📧 <strong>Email:</strong> ${student.email || "Not specified"}</div>
                <div>📊 <strong>12th Aggregate:</strong> ${student.aggregatePercentage || 0}%</div>
                <div>🎯 <strong>Target Goal:</strong> ${student.careerGoal ? student.careerGoal.slice(0, 45) + '...' : 'Not defined'}</div>
              </div>

              <div class="mt-lg">
                <button class="btn btn-primary btn-sm w-full" onclick="ProfileView.saveCurrentProfile()">💾 Save All Changes</button>
              </div>
            </div>

            <!-- Quick Action Shortcuts -->
            <div class="card">
              <h5 class="mb-sm">Next Steps</h5>
              <div class="flex flex-col gap-xs">
                <button class="btn btn-outline btn-sm w-full" onclick="App.navigate('assessment')">🧪 Retake Assessment</button>
                <button class="btn btn-outline btn-sm w-full" onclick="App.navigate('courses')">🎓 View Recommended Courses</button>
                <button class="btn btn-outline btn-sm w-full" onclick="App.navigate('skill-gap')">📊 Check Skill Gaps</button>
              </div>
            </div>
          </div>

          <!-- Main Profile Form Fields -->
          <div class="profile-form-area card">
            <h3 class="mb-lg">Personal & Academic Profile</h3>

            <form id="studentProfileForm" onsubmit="event.preventDefault(); ProfileView.saveCurrentProfile();">
              <!-- SECTION 1: Personal Information -->
              <div class="mb-xl">
                <h4 class="mb-md" style="color: var(--primary-light);">1. Personal Information</h4>
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">Full Name <span class="req">*</span></label>
                    <input type="text" id="prof_name" class="form-control" value="${student.fullName || ''}" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Age</label>
                    <input type="number" id="prof_age" class="form-control" value="${student.age || 18}" min="15" max="35">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Email Address <span class="req">*</span></label>
                    <input type="email" id="prof_email" class="form-control" value="${student.email || ''}" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Phone Number</label>
                    <input type="tel" id="prof_phone" class="form-control" value="${student.phone || ''}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Current City / Location</label>
                    <input type="text" id="prof_location" class="form-control" value="${student.location || ''}">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Avatar Emoji</label>
                    <select id="prof_avatar" class="form-select">
                      <option value="👨‍🎓" ${student.avatar === '👨‍🎓' ? 'selected' : ''}>👨‍🎓 Student (Male)</option>
                      <option value="👩‍🎓" ${student.avatar === '👩‍🎓' ? 'selected' : ''}>👩‍🎓 Student (Female)</option>
                      <option value="🧑‍💻" ${student.avatar === '🧑‍💻' ? 'selected' : ''}>🧑‍💻 Tech Developer</option>
                      <option value="👩‍⚕️" ${student.avatar === '👩‍⚕️' ? 'selected' : ''}>👩‍⚕️ Healthcare Aspirant</option>
                      <option value="🧑‍💼" ${student.avatar === '🧑‍💼' ? 'selected' : ''}>🧑‍💼 Business Aspirant</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- SECTION 2: Academic Information -->
              <div class="mb-xl">
                <h4 class="mb-md" style="color: var(--primary-light);">2. Academic Information (10+2 / Intermediate & College)</h4>
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">Current Qualification Status</label>
                    <select id="prof_qualification" class="form-select">
                      <option value="completed_12th" ${student.qualificationStatus === 'completed_12th' ? 'selected' : ''}>Completed Intermediate / 10+2 / 12th</option>
                      <option value="college_yr1" ${student.qualificationStatus === 'college_yr1' ? 'selected' : ''}>College Year 1 (Freshman)</option>
                      <option value="college_yr2" ${student.qualificationStatus === 'college_yr2' ? 'selected' : ''}>College Year 2 (Sophomore)</option>
                      <option value="college_yr3" ${student.qualificationStatus === 'college_yr3' ? 'selected' : ''}>College Year 3 (Junior)</option>
                      <option value="college_yr4" ${student.qualificationStatus === 'college_yr4' ? 'selected' : ''}>College Final Year / Graduating</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Intermediate / 12th Stream <span class="req">*</span></label>
                    <div class="stream-selector-grid">
                      <div class="stream-radio-btn ${student.streamCode === 'MPC' ? 'selected' : ''}" onclick="ProfileView.selectStream('MPC')">MPC</div>
                      <div class="stream-radio-btn ${student.streamCode === 'BiPC' ? 'selected' : ''}" onclick="ProfileView.selectStream('BiPC')">BiPC</div>
                      <div class="stream-radio-btn ${student.streamCode === 'MEC' ? 'selected' : ''}" onclick="ProfileView.selectStream('MEC')">MEC</div>
                      <div class="stream-radio-btn ${student.streamCode === 'CEC' ? 'selected' : ''}" onclick="ProfileView.selectStream('CEC')">CEC</div>
                      <div class="stream-radio-btn ${student.streamCode === 'Commerce' ? 'selected' : ''}" onclick="ProfileView.selectStream('Commerce')">Commerce</div>
                      <div class="stream-radio-btn ${student.streamCode === 'ARTS' ? 'selected' : ''}" onclick="ProfileView.selectStream('ARTS')">Arts / Hum.</div>
                    </div>
                    <input type="hidden" id="prof_stream" value="${student.streamCode || 'MPC'}">
                  </div>

                  <div class="form-group">
                    <label class="form-label">Overall 12th Marks / Percentage (%) <span class="req">*</span></label>
                    <input type="number" step="0.1" id="prof_percentage" class="form-control" value="${student.aggregatePercentage || 85}" min="35" max="100" required>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Grade / CGPA</label>
                    <input type="text" id="prof_grade" class="form-control" value="${student.grade || 'A+'}">
                  </div>

                  <div class="form-group">
                    <label class="form-label">Board / Council</label>
                    <input type="text" id="prof_board" class="form-control" value="${student.board || 'State Board / CBSE'}" placeholder="e.g. CBSE, ICSE, State Board">
                  </div>

                  <div class="form-group">
                    <label class="form-label">Entrance Exam Scores / Ranks</label>
                    <input type="text" id="prof_entrance" class="form-control" value="${student.entranceScores ? JSON.stringify(student.entranceScores).replace(/[{}"]/g, '') : ''}" placeholder="e.g. JEE Main: 94%ile, NEET: 520, EAMCET: 4250">
                  </div>
                </div>
              </div>

              <!-- SECTION 3: Skills & Proficiencies -->
              <div class="mb-xl">
                <h4 class="mb-md" style="color: var(--primary-light);">3. Skills & Self-Reported Proficiencies</h4>
                <p class="form-hint mb-sm">Add or adjust your current technical and soft skills (0% = Novice, 100% = Mastered):</p>
                <div id="skillsContainer" class="flex flex-col gap-sm">
                  ${this.renderSkillsSliders(student.skills || [])}
                </div>
                <div class="flex gap-sm mt-md">
                  <input type="text" id="newSkillName" class="form-control" placeholder="Add custom skill (e.g. SQL, Graphic Design, C++)" style="max-width:320px;">
                  <button type="button" class="btn btn-secondary btn-sm" onclick="ProfileView.addNewSkill()">+ Add Skill</button>
                </div>
              </div>

              <!-- SECTION 4: Career & Financial Preferences -->
              <div class="mb-xl">
                <h4 class="mb-md" style="color: var(--primary-light);">4. Career & Study Preferences</h4>
                <div class="form-grid">
                  <div class="form-group" style="grid-column: 1 / -1;">
                    <label class="form-label">Primary Career Ambition / Goal</label>
                    <textarea id="prof_goal" class="form-textarea" rows="2" placeholder="e.g. Become an AI/ML Engineer developing intelligent systems, or become a Clinical Surgeon...">${student.careerGoal || ''}</textarea>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Education Annual Budget</label>
                    <select id="prof_budget" class="form-select">
                      <option value="low" ${student.budgetTier === 'low' ? 'selected' : ''}>Under ₹1,00,000 / year (Govt / Affordable)</option>
                      <option value="moderate" ${student.budgetTier === 'moderate' ? 'selected' : ''}>₹1,00,000 - ₹3,50,000 / year (Standard Private)</option>
                      <option value="high" ${student.budgetTier === 'high' ? 'selected' : ''}>₹3,50,000 - ₹10,00,000 / year (Premium Tier)</option>
                      <option value="unconstrained" ${student.budgetTier === 'unconstrained' ? 'selected' : ''}>Above ₹10,00,000 / year (International / Medical)</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Preferred Study Location</label>
                    <select id="prof_study_loc" class="form-select">
                      <option value="in_state" ${student.studyLocationPreference === 'in_state' ? 'selected' : ''}>In-State / Local Region</option>
                      <option value="pan_india" ${student.studyLocationPreference === 'pan_india' ? 'selected' : ''}>Pan-India (Top Central / Metro Institutes)</option>
                      <option value="abroad" ${student.studyLocationPreference === 'abroad' ? 'selected' : ''}>International / Overseas Studies</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Preferred Work Mode</label>
                    <select id="prof_work_type" class="form-select">
                      <option value="hybrid" ${student.preferredWorkType === 'hybrid' ? 'selected' : ''}>Hybrid (Mix of office & remote)</option>
                      <option value="remote" ${student.preferredWorkType === 'remote' ? 'selected' : ''}>Remote / Distributed</option>
                      <option value="onsite" ${student.preferredWorkType === 'onsite' ? 'selected' : ''}>On-Site (Lab / Hospital / Plant / Corporate Office)</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Sector Interest</label>
                    <select id="prof_sector" class="form-select">
                      <option value="private" ${student.sectorPreference === 'private' ? 'selected' : ''}>Private Corporate / High Growth Tech</option>
                      <option value="government" ${student.sectorPreference === 'government' ? 'selected' : ''}>Government Services / PSUs / Civil Services</option>
                      <option value="both" ${student.sectorPreference === 'both' ? 'selected' : ''}>Open to Both Pathways</option>
                      <option value="entrepreneurship" ${student.sectorPreference === 'entrepreneurship' ? 'selected' : ''}>Entrepreneurship / Startup Founder</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Form Submit -->
              <div class="flex items-center justify-between pt-md border-t" style="border-top: 1px solid var(--border-subtle);">
                <button type="button" class="btn btn-outline" onclick="App.resetData()">Reset to Demo Defaults</button>
                <button type="submit" class="btn btn-primary btn-lg">💾 Save Profile & Update Recommendations</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  },

  renderSkillsSliders(skills) {
    if (!skills || skills.length === 0) return "<p class='text-muted'>No skills added yet.</p>";

    return skills.map((s, index) => `
      <div class="flex items-center gap-md" style="background: var(--bg-surface-elevated); padding: 0.6rem 1rem; border-radius: var(--radius-md);">
        <strong style="min-width: 140px; font-size: 0.9rem;">${s.name}</strong>
        <input type="range" min="0" max="100" value="${s.proficiency}" class="skill-slider w-full" 
               oninput="document.getElementById('skill-val-${index}').innerText = this.value + '%'"
               data-skill-name="${s.name}" data-skill-category="${s.category || 'technical'}">
        <span id="skill-val-${index}" style="min-width: 45px; text-align: right; font-weight: 700; font-size: 0.85rem; color: var(--primary-light);">${s.proficiency}%</span>
        <button type="button" class="skill-tag-remove" onclick="ProfileView.removeSkill(${index})" title="Remove skill">✕</button>
      </div>
    `).join("");
  },

  selectStream(streamCode) {
    document.querySelectorAll(".stream-radio-btn").forEach(el => el.classList.remove("selected"));
    event.target.classList.add("selected");
    document.getElementById("prof_stream").value = streamCode;
  },

  addNewSkill() {
    const input = document.getElementById("newSkillName");
    const name = input.value.trim();
    if (!name) return;

    const student = StorageService.getStudentProfile();
    student.skills = student.skills || [];
    if (!student.skills.some(s => s.name.toLowerCase() === name.toLowerCase())) {
      student.skills.push({ name, proficiency: 40, category: "technical" });
      StorageService.saveStudentProfile(student);
      App.render();
      App.showToast(`Skill "${name}" added!`, "success");
    }
  },

  removeSkill(index) {
    const student = StorageService.getStudentProfile();
    if (student.skills && student.skills[index]) {
      student.skills.splice(index, 1);
      StorageService.saveStudentProfile(student);
      App.render();
    }
  },

  calculateCompletion(student) {
    let score = 0;
    if (student.fullName) score += 15;
    if (student.email) score += 10;
    if (student.streamCode) score += 15;
    if (student.aggregatePercentage) score += 15;
    if (student.careerGoal) score += 15;
    if (student.skills && student.skills.length >= 3) score += 15;
    if (student.budgetTier) score += 15;
    return Math.min(100, score);
  },

  saveCurrentProfile() {
    const student = StorageService.getStudentProfile();

    student.fullName = document.getElementById("prof_name").value.trim();
    student.age = parseInt(document.getElementById("prof_age").value) || 18;
    student.email = document.getElementById("prof_email").value.trim();
    student.phone = document.getElementById("prof_phone").value.trim();
    student.location = document.getElementById("prof_location").value.trim();
    student.avatar = document.getElementById("prof_avatar").value;

    student.qualificationStatus = document.getElementById("prof_qualification").value;
    student.streamCode = document.getElementById("prof_stream").value;
    student.aggregatePercentage = parseFloat(document.getElementById("prof_percentage").value) || 75;
    student.grade = document.getElementById("prof_grade").value.trim();
    student.board = document.getElementById("prof_board").value.trim();

    // Map stream code to stream id
    const streamMap = {
      "MPC": "stream-mpc",
      "BiPC": "stream-bipc",
      "MEC": "stream-mec",
      "CEC": "stream-cec",
      "ARTS": "stream-arts",
      "Commerce": "stream-mec"
    };
    student.streamId = streamMap[student.streamCode] || "stream-mpc";

    // Update skills from sliders
    const skillSliders = document.querySelectorAll(".skill-slider");
    const updatedSkills = [];
    skillSliders.forEach(slider => {
      updatedSkills.push({
        name: slider.getAttribute("data-skill-name"),
        proficiency: parseInt(slider.value),
        category: slider.getAttribute("data-skill-category")
      });
    });
    if (updatedSkills.length > 0) {
      student.skills = updatedSkills;
    }

    student.careerGoal = document.getElementById("prof_goal").value.trim();
    student.budgetTier = document.getElementById("prof_budget").value;
    student.studyLocationPreference = document.getElementById("prof_study_loc").value;
    student.preferredWorkType = document.getElementById("prof_work_type").value;
    student.sectorPreference = document.getElementById("prof_sector").value;

    student.profileCompletionPct = this.calculateCompletion(student);

    StorageService.saveStudentProfile(student);
    App.showToast("Profile successfully saved and synchronized!", "success");
    App.render();
  }
};

if (typeof window !== "undefined") {
  window.ProfileView = ProfileView;
}
