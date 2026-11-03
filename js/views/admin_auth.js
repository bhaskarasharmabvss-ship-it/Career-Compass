/**
 * Admin Auth View - Security Gate & Administrator Login
 * Career Compass
 */

const AdminAuthView = {
  render() {
    return `
      <div class="app-container" style="max-width: 520px; padding-top: var(--space-2xl); padding-bottom: var(--space-3xl);">
        <div class="card" style="box-shadow: 0 16px 40px rgba(0,0,0,0.6); border: 1px solid var(--border-accent); position: relative; overflow: hidden;">
          <div style="height: 4px; background: var(--accent-gradient); position: absolute; top:0; left:0; right:0;"></div>
          
          <div class="text-center mb-lg">
            <div style="width: 58px; height: 58px; margin: 0 auto var(--space-sm); border-radius: 50%; background: rgba(99, 102, 241, 0.12); border: 1px solid var(--border-accent); display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">
              🛡️
            </div>
            <span class="badge badge-danger">Restricted Access</span>
            <h2 style="margin: 8px 0 4px; font-size: 1.5rem;">Administrator Security Gate</h2>
            <p class="text-muted" style="font-size: 0.86rem; margin: 0; line-height: 1.45;">
              Enter your authorized platform administrator credentials to access platform governance, catalog controls, and cohort analytics.
            </p>
          </div>

          <!-- Alert box for errors -->
          <div id="adminAuthAlert" class="disclaimer-banner compact" style="display: none; border-left-color: var(--danger); background: rgba(239, 68, 68, 0.08); margin-bottom: var(--space-md);">
            <div class="disclaimer-icon" style="color: var(--danger);">✕</div>
            <div class="disclaimer-text" id="adminAuthAlertMsg" style="color: var(--danger); font-size: 0.85rem;"></div>
          </div>

          <form id="adminLoginForm" onsubmit="event.preventDefault(); App.handleAdminLogin();">
            <div class="mb-md">
              <label class="form-label" for="adminEmailInput">
                <span>Administrator Email / Username</span>
                <span class="req">*</span>
              </label>
              <input type="email" id="adminEmailInput" class="form-control" 
                     placeholder="bhaskarasharmabvss@gmail.com" 
                     autocomplete="username" required>
            </div>

            <div class="mb-lg">
              <div class="flex items-center justify-between mb-xs">
                <label class="form-label mb-0" for="adminPasswordInput" style="margin-bottom:0;">
                  <span>Security Password</span>
                  <span class="req">*</span>
                </label>
                <a href="javascript:void(0)" onclick="AdminAuthView.togglePasswordVisibility()" style="font-size:0.75rem; color:var(--text-muted);" id="togglePassText">Show password</a>
              </div>
              <input type="password" id="adminPasswordInput" class="form-control" 
                     placeholder="Enter administrator password" 
                     autocomplete="current-password" required>
            </div>

            <button type="submit" class="btn btn-primary w-full btn-lg mb-md" id="adminLoginSubmitBtn" style="font-size: 1rem;">
              🔓 Authenticate & Access Admin
            </button>
          </form>

          <div class="flex items-center justify-between pt-sm" style="border-top: 1px solid var(--border-subtle); font-size: 0.8rem;">
            <a href="javascript:void(0)" onclick="App.navigate('home')" class="text-muted">
              ← Return to Student Portal
            </a>
            <span class="text-muted">CareerCompass Security</span>
          </div>
        </div>
      </div>
    `;
  },

  togglePasswordVisibility() {
    const input = document.getElementById("adminPasswordInput");
    const toggle = document.getElementById("togglePassText");
    if (!input || !toggle) return;
    if (input.type === "password") {
      input.type = "text";
      toggle.innerText = "Hide password";
    } else {
      input.type = "password";
      toggle.innerText = "Show password";
    }
  }
};

if (typeof window !== "undefined") {
  window.AdminAuthView = AdminAuthView;
}
