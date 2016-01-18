defineTags = function() {

  let sampleTags = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Silicon Valley",
      slug: "silicon-valley",
      description: "the southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
      tagType: "locations"
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: "Combine statistics, data mining, and predictive analytics to gain insight from large data sets.",
      tagType: "professional-goals"
    },
    {
      name: "Programming",
      slug: "programming",
      description: "Process that leads from an original formulation of a computing problem to executable computer" +
      " programs.",
      tagType: "cs-disciplines"
    },
    {
      name: "Databases",
      slug: "databases",
      description: "Collection of information that is organized so that it can easily be accessed, managed, and" +
      " updated.",
      tagType: "cs-disciplines"
    },
    {
      name: "Network Security",
      slug: "network-security",
      description: "Process of taking physical and software preventative measures to protect the underlying networking infrastructure from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure, thereby creating a secure platform",
      tagType: "professional-goals"
    },
    {
      name: "Java",
      slug: "java",
      description: "General-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.",
      tagType: "cs-disciplines"
    }

  ];

  _.each(sampleTags, RadGrad.tag.define);
};