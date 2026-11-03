/**
 * Timeline Component - 6-Stage Comprehensive Course & Career Roadmap
 * Career Compass
 */

class TimelineComponent {
  /**
   * Render the 6-stage roadmap for a specific course
   * @param {Object} course 
   * @returns {string} HTML markup
   */
  static renderCourseRoadmap(course) {
    if (!course) return "<p>Select a course to view its comprehensive learning roadmap.</p>";

    const stages = [
      {
        stageNumber: 1,
        title: "Stage 1 — Post-Intermediate (10+2 Transition & Admission)",
        tag: "Admission & Eligibility",
        icon: "🎓",
        blocks: [
          { label: "Eligibility & Academic Benchmarks", content: course.eligibility },
          { label: "Entrance Examinations", content: course.entranceRequirements },
          { label: "Admission Pathway", content: "Centralized State/National Counseling (JoSAA / State CET Cell / CUET Portal), Document Verification, Merit Seat Allotment." },
          { label: "Critical Considerations", content: "Verify university NAAC grade, AICTE/UGC affiliation, campus placement statistics, and official scholarship deadlines before locking choices." }
        ]
      },
      {
        stageNumber: 2,
        title: "Stage 2 — College Year 1 (Foundations & Core Fundamentals)",
        tag: "Core Fundamentals",
        icon: "📚",
        blocks: [
          { label: "Important Subjects", content: (course.mainSubjects || []).slice(0, 3).join(", ") + ", Mathematics, Digital Foundations." },
          { label: "Foundational Skills to Build", content: "Algorithmic logic, Git/GitHub, Clean code principles, Technical documentation, Effective communication." },
          { label: "Beginner Certifications", content: "NPTEL Programming in Python / CS50 by Harvard / Google Foundations Certificate." },
          { label: "Starter Projects", content: "Interactive CLI tools, personal portfolio website, marks calculator, exploratory data visualizations." }
        ]
      },
      {
        stageNumber: 3,
        title: "Stage 3 — College Year 2 (Domain Specialization & Projects)",
        tag: "Specialization",
        icon: "⚡",
        blocks: [
          { label: "Intermediate Skills", content: "Object-Oriented Design, Database Management Systems (SQL), Data Structures, RESTful APIs." },
          { label: "Domain Specialization", content: "Select your elective track: Artificial Intelligence, Cloud Infrastructure, Cyber Defense, or Full-Stack Engineering." },
          { label: "Competitions & Hackathons", content: "Participate in Smart India Hackathon (SIH), Kaggle community competitions, and university code-jams." },
          { label: "Portfolio Development", content: "Publish 2-3 production-tested repositories on GitHub with architectural README documentation." }
        ]
      },
      {
        stageNumber: 4,
        title: "Stage 4 — College Year 3 (Industry-Aligned Projects & Internship Prep)",
        tag: "Internship Readiness",
        icon: "💼",
        blocks: [
          { label: "Advanced Skills", content: "System Design, Microservices, Cloud Deployment (AWS/Azure/GCP), CI/CD Automation." },
          { label: "Major Industry Projects", content: "Full-stack end-to-end platform with authentication, payment gateway or analytics dashboard." },
          { label: "Internship Preparation", content: "Practice LeetCode medium questions, refine STAR-format behavioral stories, complete mock interviews." },
          { label: "Resume & Professional Presence", content: "Craft an ATS-optimized 1-page resume; optimize LinkedIn headline, project tags, and network with alumni." }
        ]
      },
      {
        stageNumber: 5,
        title: "Stage 5 — Final Year (Internship, Capstone & Placements)",
        tag: "Graduation & Placement",
        icon: "🚀",
        blocks: [
          { label: "Internship Execution", content: "Complete a 3-6 month mandatory corporate or research laboratory internship." },
          { label: "Placement Drive Drill", content: "Intensive training in Quantitative Aptitude, Logical Reasoning, and live whiteboard technical coding." },
          { label: "Final-Year Capstone Project", content: "A comprehensive team or individual research project solving a real-world societal or enterprise problem." },
          { label: "Job Applications", content: "Apply to on-campus placement drives and targeted off-campus opportunities via referral networks." }
        ]
      },
      {
        stageNumber: 6,
        title: "Stage 6 — Post-Graduation (Career Progression & Higher Studies)",
        tag: "Long-Term Growth",
        icon: "🌟",
        blocks: [
          { label: "Entry-Level Job Roles", content: (course.careerOpportunities || []).slice(0, 3).join(", ") },
          { label: "Higher Studies Options", content: (course.higherStudies || []).join(", ") },
          { label: "Government Career Pathways", content: "GATE for PSUs (ONGC, BHEL, IOCL), UPSC Engineering/Civil Services, Banking Specialist Officer." },
          { label: "Long-Term Trajectory", content: "Junior Specialist -> Senior Technical Lead -> Systems Architect -> Chief Technology Officer (CTO) / Entrepreneur." }
        ]
      }
    ];

    let stagesHtml = "";
    stages.forEach(st => {
      let blocksHtml = "";
      st.blocks.forEach(b => {
        blocksHtml += `
          <div class="stage-block">
            <h6>${b.label}</h6>
            <p>${b.content}</p>
          </div>
        `;
      });

      stagesHtml += `
        <div class="timeline-stage" id="stage-${st.stageNumber}">
          <div class="timeline-node">${st.stageNumber}</div>
          <div class="stage-content-card">
            <div class="stage-header">
              <div>
                <span class="badge badge-primary">${st.tag}</span>
                <h4 style="margin-top: 6px;">${st.icon} ${st.title}</h4>
              </div>
            </div>
            <div class="stage-grid">
              ${blocksHtml}
            </div>
          </div>
        </div>
      `;
    });

    return `
      <div class="timeline-header-card card mb-lg">
        <div class="flex items-center justify-between flex-wrap gap-md">
          <div>
            <span class="badge badge-stream">${course.degreeType || "Undergraduate Degree"}</span>
            <h2 style="margin-top: 6px;">${course.name}</h2>
            <p>${course.duration} | Official Verification Required</p>
          </div>
          <button class="btn btn-outline btn-sm" onclick="App.toggleSaveCourse('${course.id}')">
            ⭐ Bookmark Roadmap
          </button>
        </div>
      </div>
      <div class="timeline-container">
        <div class="timeline-line"></div>
        ${stagesHtml}
      </div>
    `;
  }
}

if (typeof window !== "undefined") {
  window.TimelineComponent = TimelineComponent;
}
