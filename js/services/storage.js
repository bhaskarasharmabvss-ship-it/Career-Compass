/**
 * Storage Service - Relational Data Store Simulation
 * Career Compass
 */

const DB_KEY_PREFIX = "career_compass_";

const StorageService = {
  init() {
    if (!localStorage.getItem(`${DB_KEY_PREFIX}initialized`)) {
      this.resetToDefaults();
    }
  },

  resetToDefaults() {
    if (typeof SeedData === "undefined") {
      console.error("SeedData not loaded");
      return;
    }

    localStorage.setItem(`${DB_KEY_PREFIX}student`, JSON.stringify(SeedData.defaultStudent));
    localStorage.setItem(`${DB_KEY_PREFIX}courses`, JSON.stringify(SeedData.courses));
    localStorage.setItem(`${DB_KEY_PREFIX}careers`, JSON.stringify(SeedData.careers));
    localStorage.setItem(`${DB_KEY_PREFIX}projects`, JSON.stringify(SeedData.projects));
    localStorage.setItem(`${DB_KEY_PREFIX}certifications`, JSON.stringify(SeedData.certifications));
    localStorage.setItem(`${DB_KEY_PREFIX}entranceExams`, JSON.stringify(SeedData.entranceExams));
    localStorage.setItem(`${DB_KEY_PREFIX}scholarships`, JSON.stringify(SeedData.scholarships));
    localStorage.setItem(`${DB_KEY_PREFIX}assessmentQuestions`, JSON.stringify(SeedData.assessmentQuestions));

    // Initial student assessment results
    const initialAssessment = {
      completed: true,
      scorePct: 84,
      dimensions: {
        analytical: 88,
        logical: 86,
        math: 85,
        communication: 76,
        creativity: 72,
        technical: 90,
        problemSolving: 88,
        leadership: 74,
        collaboration: 80
      },
      completedAt: "2026-10-24 19:30"
    };
    localStorage.setItem(`${DB_KEY_PREFIX}assessment_results`, JSON.stringify(initialAssessment));

    // Saved items
    localStorage.setItem(`${DB_KEY_PREFIX}saved_courses`, JSON.stringify(["course-btech-cse", "course-btech-aiml"]));
    localStorage.setItem(`${DB_KEY_PREFIX}saved_careers`, JSON.stringify(["career-swe", "career-aiml"]));

    // Task progress tracking
    const initialProgress = {
      "task-py-basics": "completed",
      "task-dsa-arrays": "in_progress",
      "task-sql-crud": "not_started",
      "proj-1": "in_progress"
    };
    localStorage.setItem(`${DB_KEY_PREFIX}progress`, JSON.stringify(initialProgress));

    // Notifications
    const initialNotifications = [
      {
        id: "notif-1",
        type: "deadline",
        title: "JEE Main Registration Reminder",
        message: "Session 1 registration closes in 2 weeks. Verify details on jeemain.nta.nic.in.",
        time: "2 hours ago",
        read: false
      },
      {
        id: "notif-2",
        type: "scholarship",
        title: "INSPIRE SHE Scholarship Portal Open",
        message: "Eligible 12th board top 1% rankers can submit documentation on online-inspire.gov.in.",
        time: "1 day ago",
        read: false
      },
      {
        id: "notif-3",
        type: "recommendation",
        title: "New AI/ML Project Recommendation",
        message: "Based on your recent assessment, 'Interactive Algorithm Visualizer' has been added to your queue.",
        time: "3 days ago",
        read: true
      }
    ];
    localStorage.setItem(`${DB_KEY_PREFIX}notifications`, JSON.stringify(initialNotifications));

    // Admin custom rules
    const defaultRules = {
      weightAcademic: 30,
      weightAptitude: 25,
      weightInterests: 20,
      weightSkills: 15,
      weightBudget: 10
    };
    localStorage.setItem(`${DB_KEY_PREFIX}recommendation_rules`, JSON.stringify(defaultRules));

    localStorage.setItem(`${DB_KEY_PREFIX}initialized`, "true");
  },

  // Student Profile
  getStudentProfile() {
    try {
      const data = localStorage.getItem(`${DB_KEY_PREFIX}student`);
      return data ? JSON.parse(data) : SeedData.defaultStudent;
    } catch (e) {
      return SeedData.defaultStudent;
    }
  },

  saveStudentProfile(profile) {
    localStorage.setItem(`${DB_KEY_PREFIX}student`, JSON.stringify(profile));
  },

  // Assessment Results
  getAssessmentResults() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}assessment_results`);
    return data ? JSON.parse(data) : null;
  },

  saveAssessmentResults(results) {
    localStorage.setItem(`${DB_KEY_PREFIX}assessment_results`, JSON.stringify(results));
  },

  // Courses
  getCourses() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}courses`);
    return data ? JSON.parse(data) : SeedData.courses;
  },

  getCourseById(id) {
    const courses = this.getCourses();
    return courses.find(c => c.id === id);
  },

  saveCourse(course) {
    const courses = this.getCourses();
    const index = courses.findIndex(c => c.id === course.id);
    if (index >= 0) {
      courses[index] = course;
    } else {
      courses.unshift(course);
    }
    localStorage.setItem(`${DB_KEY_PREFIX}courses`, JSON.stringify(courses));
  },

  deleteCourse(id) {
    let courses = this.getCourses();
    courses = courses.filter(c => c.id !== id);
    localStorage.setItem(`${DB_KEY_PREFIX}courses`, JSON.stringify(courses));
  },

  // Careers
  getCareers() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}careers`);
    return data ? JSON.parse(data) : SeedData.careers;
  },

  getCareerById(id) {
    const careers = this.getCareers();
    return careers.find(c => c.id === id);
  },

  saveCareer(career) {
    const careers = this.getCareers();
    const index = careers.findIndex(c => c.id === career.id);
    if (index >= 0) {
      careers[index] = career;
    } else {
      careers.unshift(career);
    }
    localStorage.setItem(`${DB_KEY_PREFIX}careers`, JSON.stringify(careers));
  },

  deleteCareer(id) {
    let careers = this.getCareers();
    careers = careers.filter(c => c.id !== id);
    localStorage.setItem(`${DB_KEY_PREFIX}careers`, JSON.stringify(careers));
  },

  // Projects
  getProjects() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}projects`);
    return data ? JSON.parse(data) : SeedData.projects;
  },

  saveProject(project) {
    const projects = this.getProjects();
    const index = projects.findIndex(p => p.id === project.id);
    if (index >= 0) {
      projects[index] = project;
    } else {
      projects.unshift(project);
    }
    localStorage.setItem(`${DB_KEY_PREFIX}projects`, JSON.stringify(projects));
  },

  deleteProject(id) {
    let projects = this.getProjects();
    projects = projects.filter(p => p.id !== id);
    localStorage.setItem(`${DB_KEY_PREFIX}projects`, JSON.stringify(projects));
  },

  // Certifications
  getCertifications() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}certifications`);
    return data ? JSON.parse(data) : SeedData.certifications;
  },

  // Saved Items
  getSavedCourses() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}saved_courses`);
    return data ? JSON.parse(data) : [];
  },

  toggleSaveCourse(courseId) {
    let saved = this.getSavedCourses();
    if (saved.includes(courseId)) {
      saved = saved.filter(id => id !== courseId);
    } else {
      saved.push(courseId);
    }
    localStorage.setItem(`${DB_KEY_PREFIX}saved_courses`, JSON.stringify(saved));
    return saved.includes(courseId);
  },

  getSavedCareers() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}saved_careers`);
    return data ? JSON.parse(data) : [];
  },

  toggleSaveCareer(careerId) {
    let saved = this.getSavedCareers();
    if (saved.includes(careerId)) {
      saved = saved.filter(id => id !== careerId);
    } else {
      saved.push(careerId);
    }
    localStorage.setItem(`${DB_KEY_PREFIX}saved_careers`, JSON.stringify(saved));
    return saved.includes(careerId);
  },

  // Progress Tracking
  getProgress() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}progress`);
    return data ? JSON.parse(data) : {};
  },

  setItemStatus(itemId, status) {
    const progress = this.getProgress();
    progress[itemId] = status;
    localStorage.setItem(`${DB_KEY_PREFIX}progress`, JSON.stringify(progress));
  },

  // Active Engineering Roadmap Persistence
  getActiveRoadmap() {
    try {
      const data = localStorage.getItem(`${DB_KEY_PREFIX}active_roadmap`);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn("Error reading active roadmap:", e);
    }

    // Default Fallback Roadmap if not customized yet
    if (typeof RoadmapTemplates !== "undefined") {
      const defaultRoadmap = RoadmapTemplates.generateRoadmap({
        branch: "cse",
        year: "year2",
        role: "swe",
        skills: ["C++", "Python"],
        studyHours: 12,
        targetExam: "placements"
      });
      return defaultRoadmap;
    }
    return null;
  },

  saveActiveRoadmap(roadmap) {
    localStorage.setItem(`${DB_KEY_PREFIX}active_roadmap`, JSON.stringify(roadmap));
  },

  getRoadmapProgressStats() {
    const roadmap = this.getActiveRoadmap();
    const progress = this.getProgress();

    if (!roadmap || !roadmap.stages) {
      return {
        totalTasks: 0,
        completedTasks: 0,
        inProgressTasks: 0,
        progressPct: 0,
        currentStage: null,
        nextTasks: [],
        weeklyPlan: []
      };
    }

    let allTasks = [];
    roadmap.stages.forEach(stage => {
      if (stage.tasks) {
        stage.tasks.forEach(task => {
          const status = progress[task.id] || task.defaultStatus || "not_started";
          allTasks.push({ ...task, status, stageTitle: stage.title, stageNumber: stage.stageNumber });
        });
      }
    });

    const totalTasks = allTasks.length;
    const completedTasks = allTasks.filter(t => t.status === "completed").length;
    const inProgressTasks = allTasks.filter(t => t.status === "in_progress").length;
    const progressPct = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Find current active stage
    let currentStage = null;
    for (const stage of roadmap.stages) {
      const stageTasks = stage.tasks || [];
      const isStageDone = stageTasks.every(t => (progress[t.id] || t.defaultStatus) === "completed");
      if (!isStageDone) {
        currentStage = stage;
        break;
      }
    }
    if (!currentStage && roadmap.stages.length > 0) {
      currentStage = roadmap.stages[roadmap.stages.length - 1];
    }

    const nextTasks = allTasks.filter(t => t.status !== "completed").slice(0, 3);

    // Compute tailored weekly plan breakdown from roadmap.studyHours
    const totalHours = roadmap.studyHours || 12;
    const dsaHours = Math.round(totalHours * 0.4);
    const techHours = Math.round(totalHours * 0.35);
    const projectHours = Math.max(2, totalHours - dsaHours - techHours);

    const weeklyPlan = [
      { category: "Algorithms & Problem Solving", hours: `${dsaHours} hrs/wk`, desc: "LeetCode / GFG Sheet practice & dry runs" },
      { category: "Core Branch & Systems Mastery", hours: `${techHours} hrs/wk`, desc: "Architecture, OS, DBMS & Framework videos" },
      { category: "Applied Project Building", hours: `${projectHours} hrs/wk`, desc: "GitHub repository commits & milestone deliverables" }
    ];

    return {
      roadmap,
      totalTasks,
      completedTasks,
      inProgressTasks,
      progressPct,
      currentStage,
      nextTasks,
      weeklyPlan
    };
  },

  // Notifications
  getNotifications() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}notifications`);
    return data ? JSON.parse(data) : [];
  },

  markNotificationRead(id) {
    const notifs = this.getNotifications();
    const item = notifs.find(n => n.id === id);
    if (item) {
      item.read = true;
      localStorage.setItem(`${DB_KEY_PREFIX}notifications`, JSON.stringify(notifs));
    }
  },

  markAllNotificationsRead() {
    const notifs = this.getNotifications();
    notifs.forEach(n => n.read = true);
    localStorage.setItem(`${DB_KEY_PREFIX}notifications`, JSON.stringify(notifs));
  },

  addNotification(notif) {
    const notifs = this.getNotifications();
    notifs.unshift({
      id: "notif-" + Date.now(),
      time: "Just now",
      read: false,
      ...notif
    });
    localStorage.setItem(`${DB_KEY_PREFIX}notifications`, JSON.stringify(notifs));
  },

  // Recommendation Rules
  getRules() {
    const data = localStorage.getItem(`${DB_KEY_PREFIX}recommendation_rules`);
    return data ? JSON.parse(data) : { weightAcademic: 30, weightAptitude: 25, weightInterests: 20, weightSkills: 15, weightBudget: 10 };
  },

  saveRules(rules) {
    localStorage.setItem(`${DB_KEY_PREFIX}recommendation_rules`, JSON.stringify(rules));
  }
};

StorageService.init();

if (typeof window !== "undefined") {
  window.StorageService = StorageService;
}
