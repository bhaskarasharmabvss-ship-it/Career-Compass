/**
 * Intelligent AI Recommendation Engine
 * Career Compass
 * Multi-factor personalized evaluation with transparent explainability
 */

const RecommendationEngine = {
  /**
   * Run the recommendation engine across all courses and careers
   * @param {Object} studentProfile 
   * @param {Object} assessmentResults 
   * @returns {Object} Comprehensive recommendations
   */
  evaluate(studentProfile, assessmentResults) {
    const profile = studentProfile || StorageService.getStudentProfile();
    const assessment = assessmentResults || StorageService.getAssessmentResults();
    const rules = StorageService.getRules();

    const courses = StorageService.getCourses();
    const careers = StorageService.getCareers();

    const evaluatedCourses = courses.map(course => this.evaluateCourse(course, profile, assessment, rules));
    const evaluatedCareers = careers.map(career => this.evaluateCareer(career, profile, assessment, rules));

    // Sort by compatibility score descending
    evaluatedCourses.sort((a, b) => b.matchScore - a.matchScore);
    evaluatedCareers.sort((a, b) => b.matchScore - a.matchScore);

    return {
      topCourses: evaluatedCourses,
      topCareers: evaluatedCareers,
      profileSummary: this.generateProfileSummary(profile, assessment),
      skillGaps: this.computeGlobalSkillGaps(profile, evaluatedCareers[0] || null),
      disclaimer: "These recommendations represent diagnostic advisory guidance based on your self-reported academic profile and assessment indicators. They do not constitute a guarantee of admission, institutional cutoff clearance, or employment."
    };
  },

  /**
   * Evaluate a single course against the student's profile
   */
  evaluateCourse(course, profile, assessment, rules) {
    let score = 50; // base score
    const matchFactors = [];
    const potentialChallenges = [];
    const skillsToDevelop = [];
    const thingsToVerify = [];

    // 1. Stream Compatibility (Highest weight)
    const streamCode = profile.streamCode || "MPC";
    const courseStreamId = course.streamId || "";

    if (
      (streamCode === "MPC" && courseStreamId === "stream-mpc") ||
      (streamCode === "BiPC" && courseStreamId === "stream-bipc") ||
      (streamCode === "MEC" && (courseStreamId === "stream-mec" || courseStreamId === "stream-cec")) ||
      (streamCode === "CEC" && (courseStreamId === "stream-cec" || courseStreamId === "stream-mec")) ||
      (streamCode === "ARTS" && courseStreamId === "stream-arts")
    ) {
      score += 25;
      matchFactors.push(`Direct alignment with your completed Intermediate 10+2 ${streamCode} stream.`);
    } else if (course.code === "BALLB_INTEGRATED" || course.code === "BBA" || course.code === "BCA" || course.code === "BDES_DESIGN" || course.code === "BJMC") {
      // Courses open to all streams
      score += 15;
      matchFactors.push(`Flexible multidisciplinary admission criteria welcoming candidates from ${streamCode}.`);
    } else {
      score -= 25;
      potentialChallenges.push(`Cross-stream transition: Standard prerequisite requires specific subject electives.`);
    }

    // 2. Academic Performance & Marks
    const marks = profile.aggregatePercentage || 75;
    if (marks >= 85) {
      score += 12;
      matchFactors.push(`Your strong academic aggregate (${marks}%) comfortably clears competitive eligibility cutoffs.`);
    } else if (marks >= 65) {
      score += 6;
      matchFactors.push(`Satisfies standard qualifying benchmark (minimum 60% requirement).`);
    } else {
      potentialChallenges.push(`Your percentage (${marks}%) is near the minimum threshold; focused entrance exam prep is critical.`);
    }

    // Check specific subject marks if available
    if (profile.subjects) {
      if (courseStreamId === "stream-mpc" && profile.subjects["Mathematics"]) {
        const mathMark = profile.subjects["Mathematics"];
        if (mathMark >= 85) {
          score += 8;
          matchFactors.push(`Outstanding Mathematics proficiency (${mathMark}%) aligns with analytical engineering coursework.`);
        }
      }
      if (courseStreamId === "stream-bipc" && profile.subjects["Biology"]) {
        const bioMark = profile.subjects["Biology"];
        if (bioMark >= 85) {
          score += 8;
          matchFactors.push(`High Biology score (${bioMark}%) supports rigorous medical & life science demands.`);
        }
      }
    }

    // 3. Aptitude & Assessment Orientation
    if (assessment && assessment.dimensions) {
      const d = assessment.dimensions;
      if (courseStreamId === "stream-mpc") {
        const techAptitude = ((d.analytical || 70) + (d.logical || 70) + (d.technical || 70)) / 3;
        if (techAptitude >= 80) {
          score += 10;
          matchFactors.push(`High analytical & technical assessment score (${Math.round(techAptitude)}%) indicates natural problem-solving fit.`);
        }
      } else if (courseStreamId === "stream-bipc") {
        const bioAptitude = ((d.problemSolving || 70) + (d.analytical || 70)) / 2;
        if (bioAptitude >= 75) {
          score += 8;
          matchFactors.push(`Strong diagnostic problem-solving score (${Math.round(bioAptitude)}%) mirrors clinical practice requirements.`);
        }
      } else if (courseStreamId === "stream-arts" || course.code === "BALLB_INTEGRATED") {
        const commAptitude = ((d.communication || 70) + (d.creativity || 70)) / 2;
        if (commAptitude >= 75) {
          score += 10;
          matchFactors.push(`Strong communication and verbal reasoning score (${Math.round(commAptitude)}%) supports advocacy and policy.`);
        }
      }
    }

    // 4. Stated Career Goals & Interests
    const goal = (profile.careerGoal || "").toLowerCase();
    const courseNameLower = course.name.toLowerCase();
    if (goal.includes("software") || goal.includes("ai") || goal.includes("engineer")) {
      if (course.code === "BTECH_CSE" || course.code === "BTECH_AIML" || course.code === "BCA") {
        score += 12;
        matchFactors.push(`Direct synergy with your stated career ambition: "${profile.careerGoal}".`);
      }
    } else if (goal.includes("doctor") || goal.includes("medic") || goal.includes("health")) {
      if (course.code === "MBBS" || course.code === "BPHARM" || course.code === "ALLIED_HEALTH") {
        score += 12;
        matchFactors.push(`Fulfills the mandatory medical degree trajectory for your healthcare goal.`);
      }
    } else if (goal.includes("finance") || goal.includes("business") || goal.includes("account")) {
      if (course.code === "BCOM_HONS" || course.code === "CA_CHARTERED_ACCOUNTANCY" || course.code === "BBA") {
        score += 12;
        matchFactors.push(`Directly develops the financial & business acumen needed for your stated trajectory.`);
      }
    }

    // 5. Skills & Bridge Skills Needed
    const studentSkillNames = (profile.skills || []).map(s => s.name.toLowerCase());
    course.requiredSkills.forEach(reqSkill => {
      const match = studentSkillNames.find(s => s.includes(reqSkill.toLowerCase()) || reqSkill.toLowerCase().includes(s));
      if (match) {
        score += 3;
      } else {
        skillsToDevelop.push(reqSkill);
      }
    });

    if (skillsToDevelop.length > 3) {
      potentialChallenges.push(`Requires acquiring foundational proficiency in ${skillsToDevelop.slice(0, 3).join(", ")}.`);
    }

    // 6. Things To Verify
    thingsToVerify.push(`Official registration dates for ${course.entranceRequirements.split(",")[0] || "entrance tests"}.`);
    thingsToVerify.push(`Specific domicile / state reservation quota policies.`);
    thingsToVerify.push(`College accreditation (UGC / AICTE / NMC / CoA / BCI).`);

    // Clamp score between 35% and 98%
    const finalScore = Math.min(98, Math.max(35, Math.round(score)));

    // Generate comprehensive explanation paragraph
    const whyExplanation = this.synthesizeWhyExplanation(course, profile, matchFactors, finalScore);

    return {
      ...course,
      matchScore: finalScore,
      whyExplanation,
      matchFactors: matchFactors.slice(0, 4),
      potentialChallenges: potentialChallenges.length ? potentialChallenges : ["Moderate competition during entrance seat allocation.", "Requires consistent semester credit accumulation."],
      skillsToDevelop: skillsToDevelop.slice(0, 5),
      thingsToVerify
    };
  },

  /**
   * Evaluate a career path against the student
   */
  evaluateCareer(career, profile, assessment, rules) {
    let score = 52;
    const matchFactors = [];
    const skillsToDevelop = [];

    // Stream affinity
    const studentStreamId = profile.streamId || "stream-mpc";
    if (career.streamAffinity && career.streamAffinity.includes(studentStreamId)) {
      score += 24;
      matchFactors.push(`Natural progression from your ${profile.streamCode || "12th"} academic foundation.`);
    }

    // Aptitude match
    if (assessment && assessment.dimensions) {
      if (career.fieldCategory.includes("Technology") && assessment.dimensions.technical >= 75) {
        score += 12;
        matchFactors.push(`Your high technical aptitude aligns with modern engineering demands.`);
      }
      if (career.fieldCategory.includes("Finance") && assessment.dimensions.analytical >= 75) {
        score += 10;
        matchFactors.push(`Analytical precision aligns with financial auditing and forecasting.`);
      }
    }

    // Skills comparison
    const studentSkills = (profile.skills || []).map(s => s.name.toLowerCase());
    career.requiredSkills.forEach(req => {
      const found = studentSkills.some(s => req.toLowerCase().includes(s));
      if (found) {
        score += 4;
      } else {
        skillsToDevelop.push(req);
      }
    });

    const finalScore = Math.min(97, Math.max(40, Math.round(score)));

    return {
      ...career,
      matchScore: finalScore,
      matchFactors,
      skillsToDevelop: skillsToDevelop.slice(0, 4),
      whyExplanation: `Based on your ${profile.streamCode || "intermediate"} stream, analytical strengths, and career ambitions, ${career.title} provides high-growth opportunities with clear professional progression.`
    };
  },

  /**
   * Synthesize personalized transparent explanation
   */
  synthesizeWhyExplanation(course, profile, matchFactors, score) {
    const stream = profile.streamCode || "Intermediate";
    const marks = profile.aggregatePercentage || 75;
    const goal = profile.careerGoal || "your long-term career";

    return `This course is recommended because your ${stream} academic background (aggregate: ${marks}%) provides the required prerequisites, and your aptitude scores demonstrate strong alignment with the mathematical and problem-solving demands of ${course.name}. Furthermore, this academic pathway provides the foundational qualifications to advance toward "${goal}".`;
  },

  /**
   * Generate student profile summary
   */
  generateProfileSummary(profile, assessment) {
    const topDimensions = [];
    if (assessment && assessment.dimensions) {
      const dims = assessment.dimensions;
      Object.keys(dims).forEach(key => {
        topDimensions.push({ name: key, score: dims[key] });
      });
      topDimensions.sort((a, b) => b.score - a.score);
    }

    return {
      primaryStream: profile.streamCode || "MPC",
      academicRating: profile.aggregatePercentage >= 85 ? "Excellent" : profile.aggregatePercentage >= 70 ? "Good" : "Average",
      topStrengths: topDimensions.slice(0, 3).map(d => d.name.toUpperCase()),
      learningStyle: profile.preferredStudyMode === "online" ? "Self-Paced Digital" : "Interactive Campus-Based"
    };
  },

  /**
   * Global skill gap computation
   */
  computeGlobalSkillGaps(profile, targetCareer) {
    if (!targetCareer) return [];

    const studentSkills = profile.skills || [];
    const gaps = [];

    targetCareer.requiredSkills.forEach(reqSkill => {
      const matched = studentSkills.find(s => s.name.toLowerCase() === reqSkill.toLowerCase());
      const currentLevel = matched ? matched.proficiency : 20;
      const requiredLevel = 80;
      const gap = Math.max(0, requiredLevel - currentLevel);

      let priority = "Low";
      if (gap > 45) priority = "High";
      else if (gap > 25) priority = "Moderate";

      gaps.push({
        skill: reqSkill,
        current: currentLevel,
        required: requiredLevel,
        gapPct: gap,
        priority,
        recommendedStage: currentLevel < 40 ? "Stage 2: Year 1 Fundamentals" : "Stage 3: Domain Specialization"
      });
    });

    return gaps;
  }
};

if (typeof window !== "undefined") {
  window.RecommendationEngine = RecommendationEngine;
}
