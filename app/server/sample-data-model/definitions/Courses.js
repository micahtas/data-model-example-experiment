defineCourses = function() {
  let sampleCourses = [
    {
      name: "Program Structure",
      slug: "ics212",
      number: "ICS 212",
      description: "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages.",
      tags: ["software-engineering"]
    },
    {
      name: "nonICS 100-level course",
      slug: "nonICS-1xx",
      number: "nonICS 1xx",
      description: "Any non ICS course at the 100 level.",
      tags: []
    },
    {
      name: "Algorithms",
      slug: "ics311",
      number: "ICS 311",
      description: "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "Introduction to Computer Science I",
      slug: "ics111",
      number: "ICS 111",
      description: "Overview of the fundamentals of computer science emphasizing problem solving, algorithm development, implementation, and debugging/testing using an object-oriented programming language.",
      tags: ["software-engineering"]
    },
    {
      name: "Data Storage and Retrieval",
      slug: "ics321",
      number: "ICS 321",
      description: "Data storage devices, timing and capacity, programming for files, hashed and indexed files, introduction to relational database systems.",
      tags: ["software-engineering"]
    },
    {
      name: "Operating Systems",
      slug: "ics332",
      number: "ICS 332",
      description: "Operating system concepts and structure, processes and threads, CPU scheduling, memory management, scheduling, file systems, inter-process communication, virtualization, popular operating systems",
      tags: ["software-engineering"]
    }

  ];

  _.each(sampleCourses, RadGrad.course.define);
};
