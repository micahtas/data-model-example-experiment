defineUsers = function() {
  let sampleUsers = [
    {
      firstName: "Philip",
      middleName: "Meadows",
      lastName: "Johnson",
      slug: "philipjohnson",
      password: "foo",
      uhEmail: "johnson@hawaii.edu",
      role: RadGrad.role.admin
    },
    {
      firstName: "Henri",
      middleName: "",
      lastName: "Casanova",
      slug: "henricasanova",
      password: "foo",
      uhEmail: "henric@hawaii.edu",
      role: RadGrad.role.faculty
    },
    {
      firstName: "Sergey",
      middleName: "",
      lastName: "Negrashov",
      slug: "sergeynegrashov",
      password: "foo",
      uhEmail: "sin8@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Anthony",
      middleName: "",
      lastName: "Christe",
      slug: "anthonychriste",
      password: "foo",
      uhEmail: "achriste@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Bob",
      middleName: "",
      lastName: "King",
      slug: "bobking",
      password: "foo",
      uhEmail: "bobking@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Rob",
      middleName: "",
      lastName: "Knight",
      slug: "robknight",
      password: "foo",
      uhEmail: "robknight@hawaii.edu",
      role: RadGrad.role.student
    }
  ];

  _.each(sampleUsers, RadGrad.user.define);
}