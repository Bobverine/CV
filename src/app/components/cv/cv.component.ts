import { Component } from "@angular/core";
import { Coordinates } from "../../models/cv/coordinates";
import { Experience } from "../../models/cv/experience";
import { Language } from "../../models/cv/language";
import { Profile } from "../../models/cv/profile";
import { Skill } from "../../models/cv/skill";
import { Training } from "../../models/cv/training";
import { Job } from "../../models/dc/job";
import { EPeriod } from "../../models/utils/period";
import { CoordinatesComponent } from "../coordinates/coordinates.component";
import { ExperienceComponent } from "../experience/experience.component";
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
  ],
  templateUrl: "./cv.component.html",
  styleUrl: "./cv.component.scss",
})
export class CvComponent {
  public jobs: Job[] = [
    {
      title: "Développeur web fullstack",
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
        "Ecriture de mappers REST / SOAP",
        "Correction d'anomalies",
        "Accompagnement de juniors",
      ],
      toolsAndTechnologies: [
        "Java / Gradle / Liferay / VueJS / SCSS / Yarn / IntelliJ / Gitlab",
      ],
    },
    {
      title: "Développeur web fullstack",
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
        "Développement des interfaces multi-écrans pour décodeurs et Smart TV. \
        Fonctionnalités : VOD, pause et enregistrement du direct, choix de langue audio et sous-titres",
      teamsAndMethods:
        "Agile - 6 Equipes de 5 développeurs dont un Tech Lead + un testeur",
      tasks: [
        "Développement web en Javascript / Node.JS",
        "Correction d'anomalies",
        "Refactorisation du code",
      ],
      toolsAndTechnologies: ["Javascript / NodeJS"],
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
      teamsAndMethods: "Agile - équipe de 4 développeurs",
      tasks: [
        "Développement du pilotage de caméra à distance",
        "Refactorisation du code",
        "Correction d'anomalies",
        "étude de migration vers de nouveaux frameworks de développement",
      ],
      toolsAndTechnologies: ["Java 8 / Javascript"],
    },
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
        "Développement d'une librairie générant plusieurs types de graphes en SVG",
        "Développement d'une librairie de tableaux complexes en vue arborescente et triables",
        "écriture de tests front-end et back-end",
        "Correction de bugs et d'anomalies",
      ],
      toolsAndTechnologies: [
        "Angular 9 / Java 8 / Spring / D3js / ElasticSearch / Kafka / Docker / Jenkins / SonarQube / JUnit / TestNG",
      ],
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
        "Site de référence de salaire avec filtrage par plusieurs découpages administratifs, secteur d'activité, taille d'entreprise",
      teamsAndMethods: "Autonome - accompagnement ponctuel d'un alternant",
      tasks: [
        "Développement de l'IHM avec Angular et de la carte avec D3js",
        "Paramétrage des graphiques avec HighCharts",
        "Développement des fonctionnalités d'export vers divers formats",
        "Mise en production",
        "écriture de la documentation",
      ],
      toolsAndTechnologies: ["Angular 7 / D3js / HighCharts / Bitbucket"],
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
      tasks: [""],
      toolsAndTechnologies: ["Angular 7 / D3js / HighCharts / Bitbucket"],
    },
  ];

  public trainings: Training[] = [
    {
      title: "Formation d'ingénieur en informatique & réseaux",
      school: "ESIPE",
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

  public experiences: Experience[] = [
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

  public coordinates: Coordinates = {
    phone: "+33 6 07 47 03 38",
    email: "hugo.feuillatre@gmail.com",
    city: "Nantes",
  };

  public profile: Profile = {
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

  public skills: Skill[] = [
    {
      label: "Angular",
      rating: 3,
    },
    { label: "VueJS", rating: 3 },
    { label: "Java", rating: 3 },
    { label: "Docker", rating: 2 },
  ];

  public language: Language = { label: "Anglais", rating: "B2" };
}
