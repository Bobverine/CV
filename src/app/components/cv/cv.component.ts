import { NgOptimizedImage } from "@angular/common";
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
    NgOptimizedImage,
  ],
  templateUrl: "./cv.component.html",
  styleUrl: "./cv.component.scss",
})
export class CvComponent {
  firstPageJobs: Job[] = [
    {
      title: "Développeur web frontend / Lead tech Angular",
      period: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2023",
        to: "Aujourd'hui",
        duration: 6,
        durationUnit: "M",
      },
      client: "Association Clairs Horizon",
      project: "Top chef de ma santé",
      description:
        "Projet de mécénat sur le développement d'un site permettant à l'aide d'un ensemble de questionnaire de suivre l'état de santé de personnes ayant subit une maladie lourde",
      teamsAndMethods: "Kanban ~8 personnes",
      tasks: [
        "Refonte des pages en Angular et Ionic afin d'améliorer la qualité de code",
        "Migration d'Angular 14 et Ionic 4 vers Angular 17 et Ionic 7",
        "Retrait des NgModule au profit des composants standalone",
        "Amélioration de la détection du changement en introduisant les signaux Angular",
        "Formation des nouveaux développeurs",
        "Mise en place des bonnes pratiques de développement et du processus de revue de code",
        "Mise en place d'une réunion hebdomadaire sur la veille technologique",
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
        "Agile, sprint d'un mois, CDP, PPOs / testeurs, ~10 devs",
      tasks: [
        "Développement des portlets Rachat et Souscription : applications VueJS déployées dynamiquement depuis le CMS Liferay",
        "Développement de formulaire multi-étapes et de son système de cache",
        "Intégration des règles métier de l'assurance vie",
        "Évolution de la librairie de composants et des thèmes des portails",
        "Écriture de mappers REST / SOAP en Java",
        "Correction d'anomalies en collaboration avec le client",
        "Accompagnement de juniors : explication des processus de revue de code, apprentissage des bonnes pratiques de développement",
      ],
      toolsAndTechnologies: [
        "Java / Gradle / Liferay / VueJS / Vuex / SCSS / Yarn / IntelliJ / Gitlab",
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
        "Agile, sprint de 2 semaines, 6 Equipes de 5 développeurs dont un tech lead + un testeur",
      tasks: [
        "Développement en NodeJS sur le framework interne de Wiztivi du périmètre de la feature team",
        "Développement du clavier virtuel multilingue utilisable par une télécommande",
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
    {
      title: "Développeur web fullstack",
      period: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: "2020",
        to: "2020",
        duration: 3,
        durationUnit: "M",
      },
      client: "Kiwatch",
      project: "Espace client",
      description:
        "Système de vidéosurveillance plug-and-play pour particuliers",
      teamsAndMethods:
        "Agile, sprint d'une semaine, équipe de 4 développeurs dont 1 SM",
      tasks: [
        "Développement responsive desktop & mobile en Javascript pure",
        "Développement du gestionnaire de caméras",
        "Développement du pilotage des caméras à distance à l'aide du clavier et de la souris",
        "Développement du système d'alerte anti-intrusion par email",
        "étude de migration vers de nouveaux frameworks de développement",
        "Refactorisation du code",
        "Correction d'anomalies",
      ],
      toolsAndTechnologies: ["Java 8 / Javascript"],
      address: {
        city: "Orvault",
        country: "France",
      },
    },
  ];

  secondPageJobs: Job[] = [
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
      teamsAndMethods:
        "Agile, sprint de 3 semaines, 6 développeurs dont SM & PPO + 1 designeur, 1 testeur",
      tasks: [
        "Développement de la librairie Angular générant les graphes en SVG à l'aide de D3js",
        "Développement de la librairie Angular de tableaux responsive en vue arborescente, triables, filtrables et éditables",
        "Développement transverse (ElasticSearch, Java, Angular) du graphique présentant le nombre d'employés présents par ligne de production, poste et bâtiment",
        "évolution du BE sous Spring Boot",
        "écriture de requêtes ElasticSearch",
        "écriture de tests front-end et back-end (~1000 en tout)",
        "Migration d'Angular 8 vers 9",
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
      teamsAndMethods:
        "Autonome - accompagnement d'un alternant en informatique",
      tasks: [
        "Auto-formation du framework Angular",
        "Développement de l'interface avec Angular et la librairie de composants d'ADP",
        "Développement de la carte avec D3js",
        "Paramétrage des graphiques avec HighCharts",
        "Développement des fonctionnalités d'export vers les formats PDF & CSV",
        "Collaboration avec le développeur back-end travaillant le site ADP de Grenoble",
        "Accompagnement d'un alternant en informatique",
        "Mise en production",
        "écriture de la documentation",
        "Passation du projet",
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
        "Auto-formation du langage Elm",
        "Retrait du Material Design et de Bootstrap au profit d'un CSS personnalisé et de flexbox",
        "Refonte de l'ergonomie de l'interface",
        "Développement du tableau de comparaison des indices de performances",
        "Développement d'un script Python générant des rapports CSV depuis un BDD PostgreSQL",
      ],
      toolsAndTechnologies: [
        "Docker / RabbitMQ / Elm / Python / Leaflet / Gitlab / PostgreSQL",
      ],
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
        "Ionic, NodeJS, Spring Boot, ElasticSearch, SQL, Bash, JUnit, TestNG, SonarQube",
    },
    {
      skillType: ESkill.VALUE,
      label: "Dev Ops",
      value: "Gitlab, Jenkins, BitBucket",
    },
    { skillType: ESkill.NOTE, label: "Anglais", note: "B2" },
  ];
}
