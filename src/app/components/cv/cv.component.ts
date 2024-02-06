import { Component } from "@angular/core";
import { Coordinates } from "../../models/cv/coordinates";
import { Experience } from "../../models/cv/experience";
import { Hobby } from "../../models/cv/hobby";
import { Profile } from "../../models/cv/profile";
import { ESkill, Skill } from "../../models/cv/skill";
import { Training } from "../../models/cv/training";
import { Job } from "../../models/dc/job";
import { EPeriod } from "../../models/utils/period";
import { CoordinatesComponent } from "../coordinates/coordinates.component";
import { ExperienceComponent } from "../experience/experience.component";
import { HobbiesComponent } from "../hobbies/hobbies.component";
import { JobComponent } from "../job/job.component";
import { SkillsComponent } from "../skills/skills.component";
import { TrainingComponent } from "../training/training.component";

@Component({
  selector: "app-cv",
  standalone: true,
  imports: [
    TrainingComponent,
    ExperienceComponent,
    SkillsComponent,
    CoordinatesComponent,
    JobComponent,
    HobbiesComponent,
  ],
  templateUrl: "./cv.component.html",
  styleUrl: "./cv.component.scss",
})
export class CvComponent {
  jobs: Job[] = [
    {
      title: "Développeur web frontend",
      period: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2023",
        to: "Aujourd'hui",
        duration: 3,
        durationUnit: "M",
      },
      client: "Association Clairs Horizon",
      project: "Top chef de ma santé",
      description:
        "Projet de mécénat accompagnant des personnes ayant subit un cancer",
      teamsAndMethods: "Kanban ~8 personnes",
      tasks: [
        "Refonte des pages en Angular et Ionic",
        "Migration vers les dernières versions d'Angular et Ionic",
      ],
      toolsAndTechnologies: [
        "Angular / Ionic / Bootstrap / Capacitor / Strapi / Azure Dev Ops",
      ],
      address: {
        city: "Nantes",
        country: "France",
      },
    },
    {
      title: "Développeur web frontend",
      period: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2022",
        to: "2023",
        duration: 1.5,
        durationUnit: "Y",
      },
      client: "OBS",
      project: "Arkéa Suravenir",
      description:
        "Migration de Liferay et refonte de l'interface VueJS pour le portail d'assurance vie Suravenir",
      teamsAndMethods:
        "Agile ~15 personnes, CDP, PPOs / testeurs, 10 développeurs",
      tasks: [
        "Développement des portlets Rachat et Souscription",
        "Développement de formulaire multi-étapes et système de cache",
        "Intégration des règles métier de l'assurance vie",
        "Correction d'anomalies",
        "Accompagnement de juniors",
      ],
      toolsAndTechnologies: [
        "Java / Gradle / Liferay / VueJS / SCSS / Yarn / IntelliJ / Gitlab",
      ],
      address: {
        city: "Nantes",
        country: "France",
      },
    },
    {
      title: "Développeur web frontend",
      period: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2020",
        to: "2022",
        duration: 1.5,
        durationUnit: "Y",
      },
      client: "Wiztivi",
      project: "Altice & Vodafone",
      description:
        "Développement des interfaces multi-écrans pour décodeurs et Smart TV",
      teamsAndMethods:
        "Agile - 6 Equipes de 5 développeurs dont un Tech Lead + un testeur",
      tasks: [
        "Développement et maintenance en Javascript et NodeJS du périmètre de la feature team",
        "VOD, pause du direct, clavier virtuel, choix de langue audio et sous-titres",
        "Refactorisation du code",
        "Amélioration de la qualité de code avec SonarQube",
        "Mise en place des bonnes pratiques de développement",
        "Correction d'anomalies",
      ],
      toolsAndTechnologies: ["Javascript / NodeJS"],
      address: {
        city: "Carquefou",
        country: "France",
      },
    },
    // {
    //   title: "Développeur web fullstack",
    //   period: {
    //     periodType: EPeriod.YEAR_INTERVAL,
    //     from: "2020",
    //     to: "2020",
    //     duration: 3,
    //     durationUnit: "M",
    //   },
    //   client: "Kiwatch",
    //   project: "Espace client",
    //   description:
    //     "Système de vidéosurveillance plug-and-play pour particuliers",
    //   teamsAndMethods: "Agile - équipe de 4 développeurs",
    //   tasks: [
    //     "Développement du gestionnaire de caméras et de leur pilotage à distance",
    //     "Refactorisation du code",
    //     "Correction d'anomalies",
    //     "étude de migration vers de nouveaux frameworks de développement",
    //   ],
    //   toolsAndTechnologies: ["Java 8 / Javascript"],
    //   address: {
    //     city: "Orvault",
    //     country: "France",
    //   },
    // },
    {
      title: "Développeur web fullstack",
      period: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2019",
        to: "2020",
        duration: 5,
        durationUnit: "M",
      },
      client: "VIF",
      project: "Analytics & Datalake",
      description:
        "Application web permettant d'observer en temps réel les indices de performances des lignes de production",
      teamsAndMethods: "Agile - équipe de 6 développeurs",
      tasks: [
        "Développement d'une librairie Angular générant les graphes en SVG",
        "Développement d'une librairie Angular de tableaux complexes en vue arborescente et triables",
        "évolution du BE sous Spring Boot",
        "écriture de requêtes ElasticSearch",
        "écriture de tests front-end et back-end",
        "Correction d'anomalies",
      ],
      toolsAndTechnologies: [
        "Angular 9 / Java 8 / Spring / D3js / ElasticSearch / Kafka / Docker / Jenkins / SonarQube / JUnit / TestNG",
      ],
      address: {
        city: "La-Chapelle-sur-Erdre",
        country: "France",
      },
    },
    {
      title: "Développeur web frontend",
      period: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2019",
        to: "2019",
        duration: 6,
        durationUnit: "M",
      },
      client: "ADP",
      project: "Benchmark DC",
      description:
        "Site de référence de salaire avec filtrage par découpages administratifs, secteur d'activité, taille d'entreprise",
      teamsAndMethods: "Autonome - accompagnement ponctuel d'un alternant",
      tasks: [
        "Développement de l'IHM avec Angular et de la carte avec D3js",
        "Paramétrage des graphiques avec HighCharts",
        "Développement des fonctionnalités d'export vers divers formats",
        "Mise en production",
        "écriture de la documentation",
      ],
      toolsAndTechnologies: ["Angular 7 / D3js / HighCharts / Bitbucket"],
      address: {
        city: "Carquefou",
        country: "France",
      },
    },
    {
      title: "Développeur web frontend",
      period: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2019",
        to: "2019",
        duration: 3,
        durationUnit: "M",
      },
      client: "Sirehna",
      project: "Leanships",
      description:
        "Outil d'aide à la décision pour l'optimisation de la consommation de carburant d'un navire",
      teamsAndMethods: "Kanban - Binôme",
      tasks: [
        "Refonte de l'ergonomie de l'interface avec le langage fonctionnelle Elm",
        "Développement du tableau de comparaison des indices de performances",
        "Retrait du Material Design et de Bootstrap",
        "Développement d'un script Python générant des rapports CSV depuis un BDD PostgreSQL",
      ],
      toolsAndTechnologies: ["Angular 7 / D3js / HighCharts / Bitbucket"],
      address: {
        city: "Bouguenais",
        country: "France",
      },
    },
  ];

  astek: Job = {
    title: "Consultant",
    period: {
      periodType: EPeriod.YEAR_INTERVAL,
      from: "2019",
      to: "Aujourd'hui",
      duration: 5,
      durationUnit: "Y",
    },
    client: "Astek Nantes",
    project: "Développement web",
    description: "",
    teamsAndMethods: "",
    tasks: [],
    toolsAndTechnologies: [],
    address: {
      city: "Saint-Herblain",
      country: "France",
    },
  };

  trainings: Training[] = [
    {
      title: "Formation d'ingénieur en informatique & réseaux",
      school: "École Supérieure d'Ingénieurs de Paris-Est (ESIPE)",
      address: {
        city: "Champs-sur-Marne",
        country: "France",
      },
      date: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2015",
        to: "2018",
      },
    },
    {
      title: "DUT Informatique",
      school: "IUT Sénart-Fontainebleau",
      address: {
        city: "Fontainebleau",
        country: "France",
      },
      date: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2012",
        to: "2015",
      },
    },
  ];

  oldTrainings: Training[] = [
    {
      title: "Baccalauréat, Série S spécialité SVT",
      school: "Lycée Gaspart-Monge",
      address: {
        city: "Savigny-sur-Orge",
        country: "France",
      },
      date: {
        periodType: EPeriod.DATE,
        value: new Date("2012"),
      },
    },
  ];

  experiences: Experience[] = [
    {
      title: "Apprenti ingénieur",
      company: "TSEI",
      address: {
        city: "Paris 19ème",
        country: "France",
      },
      date: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2015",
        to: "2018",
      },
      tasks: [
        "Création d'un environnement de test pour les systèmes de sécurité de l'entreprise (contrôle d'accès, incendie, vidéosurveillance, ...)",
        "Administration réseau",
      ],
    },
    {
      title: "Stage en développement web",
      company: "Uniity LTD",
      address: {
        city: "Hanoï",
        country: "Vietnam",
      },
      date: {
        periodType: EPeriod.MONTH_INTERVAL,
        from: "04/2015",
        to: "07/2015",
      },
      tasks: [
        "Développement d'une solution de centre de support multi-tenante avec gestion des tickets et d'une base de connaissance (AngularJS, WorpPress)",
        "Transition Material Design et ajout de nouvelles fonctionnalités pour l'application Echoes",
      ],
    },
    {
      title: "Participant aux 24h des IUT Informatique",
      address: {
        city: "Strasbourg",
        country: "France",
      },
      date: {
        periodType: EPeriod.DATE,
        value: new Date("2014"),
      },
      tasks: [
        "Concours entre tous les DUT Informatique de France (32 équipes de 6 personnes)",
        "3 épreuves de 8h : intelligence artificielle, développement web, sécurité",
      ],
    },
  ];

  coordinates: Coordinates = {
    phone: "+33 6 07 47 03 38",
    email: "hugo.feuillatre@gmail.com",
    city: "Quartier Île-de-Nantes",
  };

  profile: Profile = {
    firstname: "Hugo",
    lastname: "Feuillâtre",
    title: "Développeur web Fullstack",
    age: 29,
    yearsOfExperience: 7,
    expertise: "Appétence naturelle à l'UX/UI et la qualité de code",
    knowHow: "Curieux, pédagogue et polyvalent",
    situation: "Célibataire, sans enfant",
    mobility: "Nantes",
  };

  hobbies: Hobby[] = [
    { label: "Permaculture" },
    { label: "Escalade" },
    { label: "Randonnée" },
    { label: "Cuisine" },
    { label: "Jeux vidéos (RPG, Story-driven)" },
  ];

  sortedSkills: Skill[] = [
    {
      skillType: ESkill.VALUE,
      label: "Notion",
      value: "Haskell, Scala, C, PHP, Python",
    },
    {
      skillType: ESkill.VALUE,
      label: "Capacité partielle",
      value: "Docker, Elm",
    },
    {
      skillType: ESkill.VALUE,
      label: "Capacité autonome",
      value: "VueJS, HTML, Java, Typescript",
    },
    { skillType: ESkill.VALUE, label: "Expertise", value: "Angular, CSS" },
  ];

  skills: Skill[] = [
    {
      skillType: ESkill.VALUE,
      label: "Langages, outils, frameworks",
      value:
        "NodeJS, Spring Boot, ElasticSearch, SQL, Bash, JUnit, TestNG, SonarQube",
    },
    {
      skillType: ESkill.VALUE,
      label: "Dev Ops",
      value: "Gitlab, Jenkins, BitBucket",
    },
    { skillType: ESkill.NOTE, label: "Anglais", note: "B2" },
  ];
}
