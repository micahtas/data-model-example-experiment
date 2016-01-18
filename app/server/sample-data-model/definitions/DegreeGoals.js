defineDegreeGoals = function() {
  let sampleDegreeGoals = [
    {name: "Silicon Valley Tech", slug: "degree-goal-sv-tech", description: "TBD"},
    {name: "Ph.D. Prep", slug: "degree-goal-phd-prep", description: "TBD"},
    {name: "security", slug: "degree-goal-security", description: "TBD"},
    {name: "Network Security", slug: "degree-goal-network-security", description: "TBD"},
    {name: "Game Designer", slug: "degree-goal-game-designer", description: "TBD"}
  ];

  _.each(sampleDegreeGoals, RadGrad.degreegoal.define);
};