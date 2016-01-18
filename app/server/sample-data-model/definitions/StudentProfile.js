defineStudentProfile = function() {
  let acID = RadGrad.user.findBySlug("anthonychriste")._id;

  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID
    }
  ];

  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: acID
  });

  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Fall", 2018));

  let bkID = RadGrad.user.findBySlug("bobking")._id;

  let bksampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: bkID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: bkID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: bkID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics321", verified: true, grade: "A", studentID: bkID}
  ];

  let bksampleCourseInstanceIDs = _.map(bksampleCourseInstanceData, RadGrad.courseinstance.define);

  let bksampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: bkID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: bkID
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "ieee-manoa",
      verified: false,
      hrswk: 2,
      studentID: bkID
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "career-day-manoa",
      verified: true,
      hrswk: 1,
      studentID: bkID
    }
  ];

  let bksampleOpportunityInstanceIDs = _.map(bksampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let rkID = RadGrad.user.findBySlug("robknight")._id;

  let rksampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: rkID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: rkID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: rkID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics332", verified: true, grade: "A", studentID: rkID}

  ];

  let rksampleCourseInstanceIDs = _.map(rksampleCourseInstanceData, RadGrad.courseinstance.define);

  let rksampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: rkID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: rkID
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "ieee-manoa",
      verified: true,
      hrswk: 2,
      studentID: rkID
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "career-day-manoa",
      verified: false,
      hrswk: 1,
      studentID: rkID
    }

  ];

  let rksampleOpportunityInstanceIDs = _.map(rksampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

};

