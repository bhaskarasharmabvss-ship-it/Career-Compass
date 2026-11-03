/**
 * Main Application Controller & Router
 * Career Compass - AI-Powered Skill & Career Recommendation Platform
 */

const App = {
  currentRoute: "home",
  currentRole: "student", // "student" or "admin"
  theme: "dark",
  compareCourseIds: ["course-btech-cse", "course-btech-aiml"],

  init() {
    // 1. Initialize Theme
    const savedTheme = localStorage.getItem("career_compass_theme") || "dark";
    this.setTheme(savedTheme, false);

    // 2. Initialize Role based on Session Authentication
    if (this.isAdminAuthenticated()) {
      this.currentRole = "admin";
    } else {
      this.currentRole = "student";
    }

    // 3. Initialize Route from URL hash if present
    const hash = window.location.hash.replace("#", "").trim();
    if (hash && this.isValidRoute(hash)) {
      this.currentRoute = hash;
    }

    // 4. Handle window hash changes
    window.addEventListener("hashchange", () => {
      const newHash = window.location.hash.replace("#", "").trim();
      if (newHash && this.isValidRoute(newHash)) {
        this.currentRoute = newHash;
        this.render();
      }
    });

    // 5. Initial Render
    this.render();
    console.log("Career Compass Platform Initialized.");
  },

  // Administrator Credentials
  ADMIN_CREDENTIALS: {
    username: "bhaskarasharmabvss@gmail.com",
    password: "252629"
  },

  isAdminAuthenticated() {
    return sessionStorage.getItem("career_compass_admin_auth") === "true";
  },

  isValidRoute(route) {
    const valid = ["home", "assessment", "courses", "careers", "skill-gap", "roadmap", "projects", "resources", "prep", "mapping", "dashboard", "profile", "compare", "admin"];
    return valid.includes(route);
  },

  navigate(route) {
    if (!this.isValidRoute(route)) return;
    this.currentRoute = route;
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.render();
  },

  render() {
    const mainContent = document.getElementById("mainContent");
    if (!mainContent) return;

    // Update active desktop primary nav links
    document.querySelectorAll(".nav-link").forEach(link => {
      const targetRoute = link.getAttribute("data-route");
      if (targetRoute === this.currentRoute) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Update 'More' dropdown highlighting for secondary features
    const moreRoutes = ["courses", "skill-gap", "mapping", "prep", "compare"];
    const moreBtn = document.getElementById("navMoreBtn");
    if (moreBtn) {
      if (moreRoutes.includes(this.currentRoute)) {
        moreBtn.classList.add("active");
      } else {
        moreBtn.classList.remove("active");
      }
    }

    // Update dropdown items active class
    document.querySelectorAll(".nav-dropdown-item").forEach(item => {
      const targetRoute = item.getAttribute("data-route");
      if (targetRoute === this.currentRoute) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update mobile drawer links active class
    document.querySelectorAll(".mobile-nav-item").forEach(item => {
      const targetRoute = item.getAttribute("data-route");
      if (targetRoute === this.currentRoute) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update notification unread count
    const unreadCount = StorageService.getNotifications().filter(n => !n.read).length;
    const badgeEl = document.getElementById("navNotificationBadge");
    if (badgeEl) {
      badgeEl.innerText = unreadCount;
      badgeEl.style.display = unreadCount > 0 ? "flex" : "none";
    }

    // Render corresponding view (Securing Admin behind Auth Gate)
    let viewHtml = "";
    switch (this.currentRoute) {
      case "home":
        viewHtml = HomeView.render();
        break;
      case "assessment":
        viewHtml = AssessmentView.render();
        break;
      case "courses":
        viewHtml = CoursesView.render();
        break;
      case "careers":
        viewHtml = CareersView.render();
        break;
      case "skill-gap":
        viewHtml = SkillGapView.render();
        break;
      case "roadmap":
        viewHtml = RoadmapView.render();
        break;
      case "projects":
        viewHtml = ProjectsView.render();
        break;
      case "resources":
        viewHtml = ResourcesView.render();
        break;
      case "prep":
        viewHtml = PrepView.render();
        break;
      case "mapping":
        viewHtml = MappingView.render();
        break;
      case "dashboard":
        viewHtml = DashboardView.render();
        break;
      case "profile":
        viewHtml = ProfileView.render();
        break;
      case "compare":
        const coursesToCompare = this.compareCourseIds.map(id => StorageService.getCourseById(id)).filter(Boolean);
        viewHtml = `<div class="app-container">${ComparisonTableComponent.render(coursesToCompare)}</div>`;
        break;
      case "admin":
        viewHtml = this.isAdminAuthenticated() ? AdminView.render() : AdminAuthView.render();
        break;
      default:
        viewHtml = HomeView.render();
    }

    mainContent.innerHTML = viewHtml;

    // Update separated admin slots in header & mobile drawer
    this.renderAdminNavigationSlots();
  },

  // Separated Admin Navigation Slots Renderer
  renderAdminNavigationSlots() {
    const isAuth = this.isAdminAuthenticated();
    const navSlot = document.getElementById("navAdminSlot");
    if (navSlot) {
      if (isAuth) {
        navSlot.innerHTML = `
          <div class="flex items-center gap-xs" title="Administrator Session: ${this.ADMIN_CREDENTIALS.username}">
            <span class="badge badge-danger" style="font-size:0.75rem;">🛡️ Admin</span>
            <button class="btn btn-outline btn-xs" onclick="App.adminLogout()" style="padding: 2px 7px; font-size: 0.72rem; border-color: var(--danger); color: var(--danger);" title="Sign out of Admin session">Sign Out</button>
          </div>
        `;
      } else {
        navSlot.innerHTML = `
          <button class="btn btn-outline btn-sm nav-admin-btn" onclick="App.openAdminPortal()" title="Administrator Security Gate" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; border-color: var(--border-medium); gap: 4px;">
            <span>🔒</span> Admin
          </button>
        `;
      }
    }

    const mobileAdminSlot = document.getElementById("mobileAdminSlot");
    if (mobileAdminSlot) {
      if (isAuth) {
        mobileAdminSlot.innerHTML = `
          <div class="text-muted mb-xs" style="font-size:0.72rem; text-transform:uppercase;">Admin Active:</div>
          <div class="p-xs mb-xs" style="font-size:0.78rem; color:var(--text-primary); font-family:var(--font-mono); word-break:break-all;">${this.ADMIN_CREDENTIALS.username}</div>
          <button class="btn btn-danger btn-sm w-full" onclick="App.adminLogout(); App.closeMobileDrawer();">Sign Out of Admin</button>
        `;
      } else {
        mobileAdminSlot.innerHTML = `
          <a href="javascript:void(0)" class="mobile-nav-item" onclick="App.openAdminPortal(); App.closeMobileDrawer();" style="border: 1px dashed var(--border-medium); justify-content:center;">
            <span>🔒</span> Administrator Portal Login
          </a>
        `;
      }
    }
  },

  // Theme Management
  toggleTheme() {
    const nextTheme = this.theme === "dark" ? "light" : "dark";
    this.setTheme(nextTheme, true);
  },

  setTheme(theme, showToastMsg = false) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("career_compass_theme", theme);

    const themeIcon = document.getElementById("themeToggleIcon");
    if (themeIcon) {
      themeIcon.innerText = theme === "dark" ? "🌙" : "☀️";
    }

    if (showToastMsg) {
      this.showToast(`Switched to ${theme.toUpperCase()} mode`, "info");
    }
  },

  // Administrator Portal Authentication
  openAdminPortal() {
    this.navigate("admin");
  },

  handleAdminLogin() {
    const emailInput = document.getElementById("adminEmailInput");
    const passwordInput = document.getElementById("adminPasswordInput");
    const alertBox = document.getElementById("adminAuthAlert");
    const alertMsg = document.getElementById("adminAuthAlertMsg");

    const email = emailInput ? emailInput.value.trim().toLowerCase() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";

    if (email === this.ADMIN_CREDENTIALS.username.toLowerCase() && password === this.ADMIN_CREDENTIALS.password) {
      sessionStorage.setItem("career_compass_admin_auth", "true");
      this.currentRole = "admin";
      this.showToast(`Welcome, Administrator Bhaskara Sharma!`, "success");
      this.navigate("admin");
    } else {
      if (alertBox && alertMsg) {
        alertBox.style.display = "flex";
        alertMsg.innerText = "Authentication Failed: Incorrect administrator email or password. Access is restricted to authorized platform administrators.";
      } else {
        this.showToast("Authentication Failed: Invalid email or password.", "error");
      }
      if (passwordInput) passwordInput.value = "";
    }
  },

  adminLogout() {
    sessionStorage.removeItem("career_compass_admin_auth");
    this.currentRole = "student";
    this.showToast("Signed out of Administrator Console. Reverted to Student workspace.", "info");
    this.navigate("home");
  },

  // Notifications Drawer
  toggleNotificationPanel() {
    const panel = document.getElementById("notificationPanel");
    if (!panel) return;
    const isShown = panel.classList.contains("show");
    if (isShown) {
      panel.classList.remove("show");
    } else {
      this.renderNotificationList();
      panel.classList.add("show");
    }
  },

  renderNotificationList() {
    const listEl = document.getElementById("notificationItemsList");
    if (!listEl) return;
    const notifications = StorageService.getNotifications();

    if (notifications.length === 0) {
      listEl.innerHTML = "<p class='text-muted p-sm' style='font-size:0.85rem;'>No active notifications.</p>";
      return;
    }

    listEl.innerHTML = notifications.map(n => `
      <div class="notification-item ${n.read ? '' : 'unread'}" onclick="App.handleNotificationClick('${n.id}')">
        <div class="notification-icon">
          ${n.type === 'deadline' ? '⏳' : n.type === 'scholarship' ? '💰' : '💡'}
        </div>
        <div class="notification-content">
          <h5>${n.title}</h5>
          <p>${n.message}</p>
          <div class="notification-time">${n.time}</div>
        </div>
      </div>
    `).join("");
  },

  handleNotificationClick(id) {
    StorageService.markNotificationRead(id);
    this.renderNotificationList();
    this.render();
  },

  // Saved Courses & Careers
  toggleSaveCourse(courseId) {
    const isSaved = StorageService.toggleSaveCourse(courseId);
    this.showToast(isSaved ? "Course saved to bookmarks!" : "Course removed from bookmarks.", "info");
    this.render();
  },

  toggleSaveCareer(careerId) {
    const isSaved = StorageService.toggleSaveCareer(careerId);
    this.showToast(isSaved ? "Career saved to bookmarks!" : "Career removed from bookmarks.", "info");
    this.render();
  },

  // Course Comparison
  getCompareCourses() {
    return this.compareCourseIds;
  },

  toggleCompareCourse(courseId) {
    if (this.compareCourseIds.includes(courseId)) {
      this.compareCourseIds = this.compareCourseIds.filter(id => id !== courseId);
      this.showToast("Removed from comparison matrix.", "info");
    } else {
      if (this.compareCourseIds.length >= 4) {
        this.showToast("Maximum 4 courses can be compared simultaneously.", "warning");
        return;
      }
      this.compareCourseIds.push(courseId);
      this.showToast("Added to comparison matrix!", "success");
    }
    this.render();
  },

  removeFromCompare(courseId) {
    this.compareCourseIds = this.compareCourseIds.filter(id => id !== courseId);
    this.render();
  },

  clearCompare() {
    this.compareCourseIds = [];
    this.render();
  },

  viewRoadmap(courseId) {
    RoadmapView.selectedCourseId = courseId;
    RoadmapView.activeTab = "6stage";
    this.navigate("roadmap");
  },

  analyzeRoleSkillGap(careerId) {
    SkillGapView.selectedCareerId = careerId;
    this.navigate("skill-gap");
  },

  filterCareersByField(fieldName) {
    CareersView.currentCategoryFilter = fieldName.toLowerCase().replace(/[^a-z]/g, "");
    this.navigate("careers");
  },

  // Modals
  openModal(title, contentHtml) {
    const backdrop = document.getElementById("appModalBackdrop");
    const titleEl = document.getElementById("appModalTitle");
    const bodyEl = document.getElementById("appModalBody");
    if (!backdrop || !titleEl || !bodyEl) return;

    titleEl.innerText = title;
    bodyEl.innerHTML = contentHtml;
    backdrop.classList.add("show");
  },

  closeModal() {
    const backdrop = document.getElementById("appModalBackdrop");
    if (backdrop) backdrop.classList.remove("show");
  },

  // Toasts
  showToast(message, type = "info", duration = 3000) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    else if (type === "warning") icon = "⚠️";
    else if (type === "error") icon = "❌";

    toast.innerHTML = `
      <span style="font-size:1.1rem;">${icon}</span>
      <span style="font-size:0.875rem; flex:1;">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(40px)";
      setTimeout(() => toast.remove(), 250);
    }, duration);
  },

  // More Features Dropdown
  toggleMoreDropdown(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById("navMoreDropdown");
    if (!dropdown) return;
    dropdown.classList.toggle("open");
    const btn = document.getElementById("navMoreBtn");
    if (btn) btn.setAttribute("aria-expanded", dropdown.classList.contains("open") ? "true" : "false");
  },

  closeMoreDropdown() {
    const dropdown = document.getElementById("navMoreDropdown");
    if (dropdown) {
      dropdown.classList.remove("open");
      const btn = document.getElementById("navMoreBtn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  },

  // Mobile Drawer Navigation
  toggleMobileDrawer() {
    const drawer = document.getElementById("mobileNavDrawer");
    const backdrop = document.getElementById("mobileNavBackdrop");
    const toggleBtn = document.getElementById("mobileNavToggleBtn");
    if (!drawer || !backdrop) return;

    const isShowing = drawer.classList.contains("show");
    if (isShowing) {
      this.closeMobileDrawer();
    } else {
      drawer.classList.add("show");
      backdrop.classList.add("show");
      if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
    }
  },

  closeMobileDrawer() {
    const drawer = document.getElementById("mobileNavDrawer");
    const backdrop = document.getElementById("mobileNavBackdrop");
    const toggleBtn = document.getElementById("mobileNavToggleBtn");
    if (drawer) drawer.classList.remove("show");
    if (backdrop) backdrop.classList.remove("show");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
  },

  // Reset Data to Default
  resetData() {
    if (confirm("Reset database to initial demonstration seed data? All custom entries will be reverted.")) {
      StorageService.resetToDefaults();
      this.showToast("Database successfully restored to defaults.", "success");
      this.render();
    }
  }
};

// Global click handler to close dropdowns when clicking outside
window.addEventListener("click", (e) => {
  // 1. Close Notifications Panel
  const panel = document.getElementById("notificationPanel");
  const bell = document.getElementById("navNotificationBtn");
  if (panel && bell && panel.classList.contains("show")) {
    if (!panel.contains(e.target) && !bell.contains(e.target)) {
      panel.classList.remove("show");
    }
  }

  // 2. Close More Dropdown
  const moreDropdown = document.getElementById("navMoreDropdown");
  if (moreDropdown && moreDropdown.classList.contains("open")) {
    if (!moreDropdown.contains(e.target)) {
      App.closeMoreDropdown();
    }
  }
});

// Boot application upon DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

if (typeof window !== "undefined") {
  window.App = App;
}
