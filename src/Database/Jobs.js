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
    vueJS
} from "./Stacks";

const jobs = [{
        id: 1,
        role: "Pesquisador Acadêmico",
        company: {
            name: "Universidade Federal da Bahia (UFBA)",
            url: "https://computacao.ufba.br/pt-br/programa-de-pos-graduacao-em-ciencia-da-computacao",
        },
        place: "Salvador/BA, Brasil",
        startedAt: "Maio de 2017",
        finishedAt: "Atual",
        activity: {
            description: "Atualmente, desenvolvo e pesquiso algoritmos que visem auxiliar na solução de problemas para apoio a decisões. Esses sistemas compreendem técnicas de <a href='https://www.ibm.com/br-pt/analytics/machine-learning'>machine learning</a>, data mining, big data, entre outras. Mais precisamente, eu atuo em pesquisas na área de Sistemas de Recomendação, os quais são amplamente utilizados por empresas como a <a href='https://netflix.com'>Netflix</a>, <a href='https://amazon.com'>Amazon</a>, <a href='https://spotfy.com'>Spotify</a>, etc. Em face dessas informações, a pesquisa envolve toda a fase da concepção da ideia até o desenvolvimento de um algoritmo, para que o mesmo possa ser testado por usuários reais ou através do uso de bases de dados existentes, mas que compreendam o contexto abordado. Portanto, para o desenvolvimento dos sistemas que compreendem a implementação de um determinado algoritmo proposto, várias stacks são utilizadas, como às apresentada a seguir:",
            usedStacks: [vueJS, bootstrap, reactJS, dynamoDB, aws, mySQL, cSharp, dotnet, sciKitLearn, python, java, dynamoDB, springBoot, github, latex],
        },
        brand: "ufba.png",
    },
    {
        id: 2,
        role: "Desenvolvedor Sênior",
        company: {
            name: "Stefanini",
            url: "https://stefanini.com/en"
        },
        place: "Aracaju/SE, Brasil",
        startedAt: "Novembro de 2016",
        finishedAt: "Maio de 2017",
        activity: {
            description: "Alocado na <a href='https://www.ssp.se.gov.br/'>Secretaria de Segurança Pública de Sergipe</a>, participei do desenvolvimento de projetos internos para a Polícia Civil, bem como para o público externo como o aplicativo <a href='https://apps.apple.com/br/app/disque-den%C3%BAncia-se/id1221486095'>Disque Denúncia SE 181</a>.",
            usedStacks: [angular, vueJS, bootstrap, ionic, sqlServer, cSharp, dotnet, android]
        },
        brand: "stefanini.png",
    },
    {
        id: 3,
        role: "Desenvolvedor Júnior",
        company: {
            name: "Indra Company",
            url: "https://www.indracompany.com/",
        },
        place: "Aracaju/SE, Brasil",
        startedAt: "Dezembro de 2013",
        finishedAt: "Novembro de 2016",
        activity: {
            description: "Alocado na <a href='https://www.ssp.se.gov.br/'>Secretaria de Segurança Pública de Sergipe</a>, participei do desenvolvimento de projetos internos para a Polícia Civil, bem como para o público externo como o aplicativo <a href='https://apps.apple.com/br/app/disque-den%C3%BAncia-se/id1221486095'>Disque Denúncia SE 181</a>.",
            usedStacks: [angular, vueJS, bootstrap, ionic, sqlServer, cSharp, dotnet, android]
        },
        brand: "indra.png",
    },
    {
        id: 4,
        role: "Full Stack Web Developer",
        company: {
            name: "Code 2",
            url: "https://www.linkedin.com/company/code-2/about/",
        },
        place: "Aracaju/SE, Brasil",
        startedAt: "Maio de 2012",
        finishedAt: "Dezembro de 2013",
        activity: {
            description: "Actually, I am developing researches on Recommender Systems, Information Retrieval, Semantic Web, and Social Media areas. Besides, I am developing both applications web and mobile using some technologies based on AWS cloud computin",
            usedStacks: [sqlServer, cSharp, dotnet]
        },
        brand: "code2.jpg",
    },
];

export {
    jobs
}