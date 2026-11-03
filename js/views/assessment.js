/**
 * Assessment View - Interactive Skill & Aptitude Assessment System
 * Career Compass
 */

const AssessmentView = {
  currentIndex: 0,
  answers: {},
  timerSeconds: 15 * 60, // 15 mins
  timerInterval: null,
  isCompleted: false,

  render() {
    const questions = SeedData.assessmentQuestions;
    const existingResult = StorageService.getAssessmentResults();

    if (this.isCompleted || (existingResult && existingResult.completed && this.currentIndex === -1)) {
      return this.renderResults(existingResult);
    }

    const currentQ = questions[this.currentIndex] || questions[0];
    const progressPct = Math.round(((this.currentIndex + 1) / questions.length) * 100);

    return `
      <div class="app-container">
        <div class="assessment-layout">
          <!-- Quiz Header with Timer & Progress -->
          <div class="quiz-header">
            <div>
              <span class="badge badge-primary">${currentQ.category}</span>
              <div class="text-muted mt-xs" style="font-size: 0.85rem;">
                Question ${this.currentIndex + 1} of ${questions.length}
              </div>
            </div>
            
            <div class="quiz-timer">
              ⏱️ <span id="assessmentTimeDisplay">${this.formatTime(this.timerSeconds)}</span>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="progress-bar-wrapper mb-lg">
            <div class="progress-bar-fill" style="width: ${progressPct}%;"></div>
          </div>

          <!-- Question Card -->
          <div class="question-box">
            <div class="flex justify-between items-center">
              <span class="badge badge-secondary">${currentQ.type.toUpperCase()}</span>
              <span class="text-muted" style="font-size:0.8rem;">Auto-saving response</span>
            </div>

            <div class="question-prompt">
              ${currentQ.text}
            </div>

            <div class="options-list">
              ${this.renderOptions(currentQ)}
            </div>
          </div>

          <!-- Quiz Navigation Controls -->
          <div class="flex justify-between items-center flex-wrap gap-sm">
            <button class="btn btn-secondary" onclick="AssessmentView.previousQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''}>
              ← Previous
            </button>

            <div class="flex gap-sm">
              <button class="btn btn-outline" onclick="AssessmentView.saveDraft()">
                💾 Save Progress
              </button>

              ${this.currentIndex < questions.length - 1 ? `
                <button class="btn btn-primary" onclick="AssessmentView.nextQuestion()">
                  Next Question →
                </button>
              ` : `
                <button class="btn btn-success" onclick="AssessmentView.submitAssessment()">
                  ✅ Submit Assessment & Generate Profile
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderOptions(question) {
    const selectedOptionIndex = this.answers[question.id];

    return question.options.map((opt, idx) => `
      <div class="quiz-option ${selectedOptionIndex === idx ? 'selected' : ''}" 
           onclick="AssessmentView.selectOption('${question.id}', ${idx})">
        <div class="quiz-option-radio"></div>
        <div style="flex: 1;">${opt.text}</div>
      </div>
    `).join("");
  },

  selectOption(questionId, optionIndex) {
    this.answers[questionId] = optionIndex;
    this.renderInPlace();
  },

  previousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderInPlace();
    }
  },

  nextQuestion() {
    const questions = SeedData.assessmentQuestions;
    if (this.currentIndex < questions.length - 1) {
      this.currentIndex++;
      this.renderInPlace();
    }
  },

  saveDraft() {
    App.showToast("Assessment progress draft saved!", "info");
  },

  submitAssessment() {
    // Tally dimension scores
    const questions = SeedData.assessmentQuestions;
    const dimensions = {
      analytical: 70,
      logical: 72,
      math: 75,
      communication: 74,
      creativity: 70,
      technical: 78,
      problemSolving: 76,
      leadership: 72,
      collaboration: 75
    };

    questions.forEach(q => {
      const selectedIndex = this.answers[q.id];
      if (selectedIndex !== undefined && q.options[selectedIndex] && q.options[selectedIndex].weight) {
        const weights = q.options[selectedIndex].weight;
        Object.keys(weights).forEach(k => {
          if (dimensions[k] !== undefined) {
            dimensions[k] = Math.round((dimensions[k] + weights[k]) / 2);
          }
        });
      }
    });

    const scoresList = Object.values(dimensions);
    const overallScore = Math.round(scoresList.reduce((a, b) => a + b, 0) / scoresList.length);

    const result = {
      completed: true,
      scorePct: overallScore,
      dimensions,
      completedAt: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    StorageService.saveAssessmentResults(result);
    this.isCompleted = true;
    App.showToast("Assessment successfully completed! Profile generated.", "success");
    App.render();
  },

  renderResults(result) {
    const d = result.dimensions;
    const radarData = [
      { label: "Analytical", value: d.analytical },
      { label: "Logical", value: d.logical },
      { label: "Mathematics", value: d.math },
      { label: "Communication", value: d.communication },
      { label: "Creativity", value: d.creativity },
      { label: "Technical", value: d.technical },
      { label: "Problem Solving", value: d.problemSolving },
      { label: "Leadership", value: d.leadership },
      { label: "Collaboration", value: d.collaboration }
    ];

    setTimeout(() => {
      RadarChart.render("#assessmentRadarChart", radarData, { width: 380, height: 380 });
    }, 50);

    return `
      <div class="app-container">
        <!-- Results Banner -->
        <div class="card mb-lg text-center" style="background: var(--hero-gradient); color: #fff;">
          <h2>🎉 Personalized Skill Profile Generated</h2>
          <p style="color: rgba(255,255,255,0.9); max-width: 650px; margin: 8px auto 0;">
            Your aptitude, logical reasoning, and career orientations have been analyzed. Here is your multidimensional evaluation.
          </p>
        </div>

        <div class="results-summary-card">
          <!-- Left: Radar Chart -->
          <div class="chart-container">
            <h4 class="mb-sm">Multidimensional Aptitude Spider Graph</h4>
            <div id="assessmentRadarChart"></div>
            <div class="text-muted" style="font-size:0.75rem; margin-top:8px;">
              Visual representation of your cognitive and domain orientation.
            </div>
          </div>

          <!-- Right: Breakdown Metrics -->
          <div>
            <div class="flex justify-between items-center mb-md">
              <div>
                <span class="badge badge-success">Overall Aptitude Index</span>
                <div style="font-size: 2.4rem; font-weight: 800; color: var(--primary-light);">${result.scorePct}%</div>
              </div>
              <button class="btn btn-outline btn-sm" onclick="AssessmentView.retake()">Retake Assessment</button>
            </div>

            <div class="flex flex-col gap-sm">
              ${radarData.map(item => `
                <div>
                  <div class="flex justify-between text-sm" style="font-size: 0.85rem; font-weight: 600; margin-bottom: 2px;">
                    <span>${item.label}</span>
                    <span style="color: var(--primary-light);">${item.value}%</span>
                  </div>
                  <div class="progress-bar-wrapper">
                    <div class="progress-bar-fill" style="width: ${item.value}%;"></div>
                  </div>
                </div>
              `).join("")}
            </div>

            <!-- Recommendation CTA -->
            <div class="mt-xl card" style="background: var(--bg-surface-elevated); padding: var(--space-md);">
              <h5 style="margin-bottom: 4px;">Ready to Explore Matching Courses?</h5>
              <p style="font-size: 0.85rem; margin-bottom: 12px;">The recommendation engine has matched these scores with post-12th degree courses.</p>
              <div class="flex gap-sm">
                <button class="btn btn-primary btn-sm" onclick="App.navigate('courses')">🎓 View Recommended Courses</button>
                <button class="btn btn-secondary btn-sm" onclick="App.navigate('skill-gap')">📊 Analyze Skill Gaps</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  retake() {
    this.isCompleted = false;
    this.currentIndex = 0;
    this.answers = {};
    App.render();
  },

  renderInPlace() {
    App.render();
  },

  formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
};

if (typeof window !== "undefined") {
  window.AssessmentView = AssessmentView;
}
