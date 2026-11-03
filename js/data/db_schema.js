/**
 * Relational Database Schema Definition
 * Career Compass - Student Skill & Career Recommendation Platform
 */

const DBSchema = {
  version: "1.0.0",
  tables: {
    Users: {
      description: "Authentication and role identity table",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "email", type: "VARCHAR(255)", isUnique: true, isNullable: false },
        { name: "password_hash", type: "VARCHAR(255)", isNullable: false },
        { name: "role", type: "ENUM('student', 'admin')", defaultValue: "'student'" },
        { name: "created_at", type: "DATETIME", defaultValue: "CURRENT_TIMESTAMP" },
        { name: "last_login", type: "DATETIME", isNullable: true }
      ]
    },
    StudentProfiles: {
      description: "Student demographic and career preferences",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "user_id", type: "VARCHAR(36)", foreignKey: "Users.id" },
        { name: "full_name", type: "VARCHAR(150)", isNullable: false },
        { name: "age", type: "INT", isNullable: true },
        { name: "phone", type: "VARCHAR(20)", isNullable: true },
        { name: "location", type: "VARCHAR(100)", isNullable: true },
        { name: "avatar", type: "VARCHAR(255)", isNullable: true },
        { name: "budget_tier", type: "ENUM('low', 'moderate', 'high', 'unconstrained')" },
        { name: "preferred_study_mode", type: "ENUM('offline', 'online', 'hybrid')" },
        { name: "study_location_preference", type: "ENUM('in_state', 'pan_india', 'abroad')" },
        { name: "preferred_work_type", type: "ENUM('remote', 'hybrid', 'onsite')" },
        { name: "sector_preference", type: "ENUM('private', 'government', 'both', 'entrepreneurship')" },
        { name: "career_goal", type: "TEXT", isNullable: true },
        { name: "profile_completion_pct", type: "INT", defaultValue: 20 },
        { name: "updated_at", type: "DATETIME", defaultValue: "CURRENT_TIMESTAMP" }
      ]
    },
    AcademicRecords: {
      description: "Intermediate/12th academic marks and entrance exam scores",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "student_id", type: "VARCHAR(36)", foreignKey: "StudentProfiles.id" },
        { name: "qualification_status", type: "ENUM('completed_12th', 'college_yr1', 'college_yr2', 'college_yr3', 'college_yr4')" },
        { name: "stream_id", type: "VARCHAR(36)", foreignKey: "Streams.id" },
        { name: "aggregate_percentage", type: "FLOAT", isNullable: false },
        { name: "grade", type: "VARCHAR(10)", isNullable: true },
        { name: "board", type: "VARCHAR(100)", isNullable: true },
        { name: "subjects_marks_json", type: "JSON", description: "Subject name -> marks mapping" },
        { name: "entrance_exam_scores_json", type: "JSON", description: "Exam name -> rank/score mapping" }
      ]
    },
    Streams: {
      description: "Pre-university academic streams (MPC, BiPC, MEC, CEC, Arts)",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "code", type: "VARCHAR(20)", isUnique: true },
        { name: "name", type: "VARCHAR(100)", isNullable: false },
        { name: "description", type: "TEXT" }
      ]
    },
    Skills: {
      description: "Master catalog of technical, domain, and soft skills",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "name", type: "VARCHAR(100)", isUnique: true },
        { name: "category", type: "ENUM('technical', 'programming', 'tools', 'soft_skills', 'domain')" },
        { name: "description", type: "TEXT" }
      ]
    },
    StudentSkills: {
      description: "Student assessed or self-reported skill proficiency",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "student_id", type: "VARCHAR(36)", foreignKey: "StudentProfiles.id" },
        { name: "skill_id", type: "VARCHAR(36)", foreignKey: "Skills.id" },
        { name: "proficiency_pct", type: "INT", defaultValue: 0 },
        { name: "verified_by_assessment", type: "BOOLEAN", defaultValue: false }
      ]
    },
    Assessments: {
      description: "Skill and aptitude test configuration and metadata",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "title", type: "VARCHAR(150)", isNullable: false },
        { name: "duration_minutes", type: "INT", defaultValue: 25 },
        { name: "total_questions", type: "INT", defaultValue: 20 },
        { name: "is_active", type: "BOOLEAN", defaultValue: true }
      ]
    },
    AssessmentQuestions: {
      description: "Individual questions spanning 10 key aptitude categories",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "assessment_id", type: "VARCHAR(36)", foreignKey: "Assessments.id" },
        { name: "category", type: "VARCHAR(50)" },
        { name: "question_type", type: "ENUM('mcq', 'scenario', 'rating', 'interest')" },
        { name: "question_text", type: "TEXT", isNullable: false },
        { name: "options_json", type: "JSON", description: "Array of options with weights" }
      ]
    },
    AssessmentResults: {
      description: "Scores across analytical, logical, math, communication, creativity, etc.",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "student_id", type: "VARCHAR(36)", foreignKey: "StudentProfiles.id" },
        { name: "overall_score_pct", type: "FLOAT" },
        { name: "dimension_scores_json", type: "JSON" },
        { name: "completed_at", type: "DATETIME", defaultValue: "CURRENT_TIMESTAMP" }
      ]
    },
    Courses: {
      description: "Degree and diploma programs across all streams",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "code", type: "VARCHAR(50)", isUnique: true },
        { name: "name", type: "VARCHAR(150)", isNullable: false },
        { name: "stream_id", type: "VARCHAR(36)", foreignKey: "Streams.id" },
        { name: "duration_years", type: "INT", defaultValue: 4 },
        { name: "degree_type", type: "VARCHAR(50)" },
        { name: "eligibility_criteria", type: "TEXT" },
        { name: "entrance_exams", type: "TEXT" },
        { name: "main_subjects_json", type: "JSON" },
        { name: "approx_annual_fee", type: "VARCHAR(50)" },
        { name: "official_source_url", type: "VARCHAR(255)" },
        { name: "last_verified_date", type: "DATE" }
      ]
    },
    Careers: {
      description: "Career opportunities and industry roles",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "title", type: "VARCHAR(150)", isNullable: false },
        { name: "field_category", type: "VARCHAR(80)" },
        { name: "description", type: "TEXT" },
        { name: "required_degree", type: "VARCHAR(150)" },
        { name: "entry_responsibilities", type: "TEXT" },
        { name: "salary_benchmark_range", type: "VARCHAR(80)" },
        { name: "growth_outlook", type: "ENUM('moderate', 'high', 'very_high')" }
      ]
    },
    Roadmaps: {
      description: "Structured learning trajectories for courses and careers",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "course_id", type: "VARCHAR(36)", foreignKey: "Courses.id", isNullable: true },
        { name: "career_id", type: "VARCHAR(36)", foreignKey: "Careers.id", isNullable: true },
        { name: "title", type: "VARCHAR(150)" },
        { name: "total_stages", type: "INT", defaultValue: 6 }
      ]
    },
    RoadmapStages: {
      description: "Stages 1 to 6 (From Post-12th to Post-Graduation)",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "roadmap_id", type: "VARCHAR(36)", foreignKey: "Roadmaps.id" },
        { name: "stage_number", type: "INT" },
        { name: "stage_title", type: "VARCHAR(100)" },
        { name: "content_json", type: "JSON" }
      ]
    },
    RoadmapTasks: {
      description: "Granular learning tasks within roadmap stages",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "stage_id", type: "VARCHAR(36)", foreignKey: "RoadmapStages.id" },
        { name: "title", type: "VARCHAR(150)" },
        { name: "description", type: "TEXT" },
        { name: "duration_weeks", type: "INT" },
        { name: "difficulty", type: "ENUM('beginner', 'intermediate', 'advanced')" }
      ]
    },
    StudentProgress: {
      description: "Tracking completion states for tasks, projects, certifications",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "student_id", type: "VARCHAR(36)", foreignKey: "StudentProfiles.id" },
        { name: "entity_type", type: "ENUM('roadmap_task', 'project', 'certification', 'module')" },
        { name: "entity_id", type: "VARCHAR(36)" },
        { name: "status", type: "ENUM('not_started', 'in_progress', 'completed')" },
        { name: "updated_at", type: "DATETIME", defaultValue: "CURRENT_TIMESTAMP" }
      ]
    },
    Projects: {
      description: "Project recommendations by difficulty and year",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "title", type: "VARCHAR(150)" },
        { name: "category", type: "ENUM('beginner', 'intermediate', 'advanced', 'capstone')" },
        { name: "career_field", type: "VARCHAR(80)" },
        { name: "technologies_json", type: "JSON" },
        { name: "description", type: "TEXT" },
        { name: "expected_outcome", type: "TEXT" },
        { name: "estimated_hours", type: "INT" }
      ]
    },
    Certifications: {
      description: "Recommended industry certifications",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "name", type: "VARCHAR(150)" },
        { name: "issuing_organization", type: "VARCHAR(100)" },
        { name: "cost_type", type: "ENUM('free', 'paid')" },
        { name: "difficulty_level", type: "ENUM('beginner', 'intermediate', 'advanced')" },
        { name: "official_url", type: "VARCHAR(255)" }
      ]
    },
    EntranceExams: {
      description: "National, state, and institutional entrance examinations",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "exam_name", type: "VARCHAR(100)" },
        { name: "conducted_by", type: "VARCHAR(150)" },
        { name: "streams_eligible_json", type: "JSON" },
        { name: "tentative_registration_window", type: "VARCHAR(100)" },
        { name: "tentative_exam_window", type: "VARCHAR(100)" },
        { name: "official_portal_url", type: "VARCHAR(255)" },
        { name: "disclaimer", type: "TEXT" }
      ]
    },
    Scholarships: {
      description: "Government and private merit-cum-means scholarships",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "scheme_name", type: "VARCHAR(150)" },
        { name: "provider", type: "VARCHAR(150)" },
        { name: "eligibility_summary", type: "TEXT" },
        { name: "approx_benefit", type: "VARCHAR(100)" },
        { name: "application_portal", type: "VARCHAR(255)" }
      ]
    },
    Notifications: {
      description: "System alerts, deadlines, and personalized reminders",
      columns: [
        { name: "id", type: "VARCHAR(36)", isPrimary: true },
        { name: "user_id", type: "VARCHAR(36)", foreignKey: "Users.id" },
        { name: "type", type: "ENUM('deadline', 'exam', 'scholarship', 'recommendation', 'task')" },
        { name: "title", type: "VARCHAR(150)" },
        { name: "message", type: "TEXT" },
        { name: "is_read", type: "BOOLEAN", defaultValue: false },
        { name: "created_at", type: "DATETIME", defaultValue: "CURRENT_TIMESTAMP" }
      ]
    }
  }
};

// Export to window if in browser environment
if (typeof window !== "undefined") {
  window.DBSchema = DBSchema;
}
