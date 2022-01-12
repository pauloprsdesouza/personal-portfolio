import {
  android,
  angular,
  aws,
  bootstrap,
  cSharp,
  dotnet,
  dynamoDB,
  github,
  ionic,
  java,
  latex,
  mySQL,
  python,
  reactJS,
  sciKitLearn,
  springBoot,
  sqlServer,
  vueJS,
} from "./Stacks";

// eslint-disable-next-line import/prefer-default-export
export const jobsDB = [{
    id: 1,
    role: "Academic Researcher",
    company: {
      name: "UFBA - Federal University of Bahia",
      url: "https://computacao.ufba.br/pt-br/programa-de-pos-graduacao-em-ciencia-da-computacao",
    },
    place: "Salvador/BA, Brasil",
    startedAt: "May, 2017",
    finishedAt: "Now",
    activity: {
      description: "Nowadays, I have developed and researched algorithms that aim to deal with problems for decision-making. In addition, these systems use machine learning techniques, data mining, big data, etc. More precisely, I have worked in researches on the Recommender Systems area, which are widely used by companies like Netflix, Amazon, Spotify, etc. Furthermore, the researches involve at the beginning a conception of the idea until the development of algorithms to be tested by real users or through existing databases. Hence, for the development of these systems, several stacks are used such as the following presented below:",
      usedStacks: [vueJS, bootstrap, reactJS, dynamoDB, aws, mySQL, cSharp, dotnet, sciKitLearn, python, java, dynamoDB, springBoot, github, latex],
    },
    brand: "ufba.png",
  },
  {
    id: 2,
    role: "Senior Developer",
    company: {
      name: "Stefanini",
      url: "https://stefanini.com/en",
    },
    place: "Aracaju/SE, Brasil",
    startedAt: "Nov, 2016",
    finishedAt: "May, 2017",
    activity: {
      description: "I was responsible to develop a few web and mobile apps during that time for many areas of public security. Those apps were developed using many technologies such as: ",
      usedStacks: [angular, vueJS, bootstrap, ionic, sqlServer, cSharp, dotnet, android],
    },
    brand: "stefanini.png",
  },
  {
    id: 3,
    role: "Junior Developer",
    company: {
      name: "Indra Company",
      url: "https://www.indracompany.com/",
    },
    place: "Aracaju/SE, Brasil",
    startedAt: "Dec, 2013",
    finishedAt: "Nov, 2016",
    activity: {
      description: "I was responsible to develop a few web and mobile apps during that time for many areas of public security. Those apps were developed using many technologies such as: ",
      usedStacks: [angular, vueJS, bootstrap, ionic, sqlServer, cSharp, dotnet, android],
    },
    brand: "indra.png",
  },
  {
    id: 4,
    role: "Full-Stack Web Developer",
    company: {
      name: "Code 2",
      url: "https://www.linkedin.com/company/code-2/about/",
    },
    place: "Aracaju/SE, Brasil",
    startedAt: "May, 2012",
    finishedAt: "Dec, 2013",
    activity: {
      description: "I was responsible to develop a few web apps during that time for many areas such as academic and law. Those apps were developed using many technologies such as: ",
      usedStacks: [sqlServer, cSharp, dotnet],
    },
    brand: "code2.jpg",
  },
];