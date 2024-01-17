import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Coordinates } from '../../models/cv/coordinates';
import { Experience } from '../../models/cv/experience';
import { Language } from '../../models/cv/language';
import { Profile } from '../../models/cv/profile';
import { Skill } from '../../models/cv/skill';
import { Training } from '../../models/cv/training';
import { Job } from '../../models/dc/job';
import { EPeriod } from '../../models/utils/period';
import { ExperienceComponent } from '../experience/experience.component';
import { TrainingComponent } from '../training/training.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [TrainingComponent, ExperienceComponent, NgFor],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  public jobs: Job[] = [
    {
      title: 'Développeur web fullstack',
      period: {
        beginYear: new Date('2022'),
        endYear: new Date('2023'),
        duration: 1.5,
        durationUnit: 'Y',
      },
      client: 'OBS',
      project: 'Arkéa Suravenir',
      description:
        "Migration de Liferay et refonte de l'interface VueJS pour le portail d'assurance vie Suravenir",
      teamsAndMethods:
        'Agile ~15 personnes, CDP, PPOs / testeurs, développeurs',
      tasks: [
        'Développement des portlets Rachat et Souscription',
        'Ecriture de mappers REST / SOAP',
        "Correction d'anomalies",
        'Accompagnement de juniors',
      ],
      toolsAndTechnologies: [
        'Java / Gradle / Liferay / VueJS / SCSS / Yarn / IntelliJ / Gitlab',
      ],
    },
  ];

  public trainings: Training[] = [
    {
      title: "Formation d'ingénieur en informatique & réseaux",
      school: 'ESIPE',
      address: {
        city: 'Champs-sur-Marne',
        country: 'France',
      },
      date: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: '2015',
        to: '2018',
      },
    },
    {
      title: 'DUT Informatique',
      school: 'IUT Sénart-Fontainebleau',
      address: {
        city: 'Fontainebleau',
        country: 'France',
      },
      date: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: '2012',
        to: '2015',
      },
    },
    {
      title: 'Baccalauréat, Série S spécialité SVT',
      school: 'Lycée Gaspart-Monge',
      address: {
        city: 'Savigny-sur-Orge',
        country: 'France',
      },
      date: {
        periodType: EPeriod.DATE,
        value: new Date('2012'),
      },
    },
  ];

  public experiences: Experience[] = [
    {
      title: 'Apprenti ingénieur',
      company: 'TSEI',
      address: {
        city: 'Paris 19ème',
        country: 'France',
      },
      date: {
        periodType: EPeriod.YEAR_INTERVAL,
        from: '2015',
        to: '2018',
      },
      tasks: [
        "Création d'un environnement de test pour les systèmes de sécurité de l'entreprise (contrôle d'accès, incendie, vidéosurveillance, ...)",
        'Administration réseau',
      ],
    },
    {
      title: 'Stage en développement web',
      company: 'Uniity LTD',
      address: {
        city: 'Hanoï',
        country: 'Vietnam',
      },
      date: {
        periodType: EPeriod.MONTH_INTERVAL,
        from: '04/2015',
        to: '07/2015',
      },
      tasks: [
        "Développement d'une solution de centre de support multi-tenante avec gestion des tickets et d'une base de connaissance (AngularJS, WorpPress)",
        "Transition Material Design et ajout de nouvelles fonctionnalités pour l'application Echoes",
      ],
    },
    {
      title: 'Participant aux 24h des IUT Informatique',
      address: {
        city: 'Strasbourg',
        country: 'France',
      },
      date: {
        periodType: EPeriod.DATE,
        value: new Date('2014'),
      },
      tasks: [
        'Concours entre tous les DUT Informatique de France (32 équipes de 6 personnes)',
        '3 épreuves de 8h : intelligence ar tificielle, développement web, sécurité',
      ],
    },
  ];

  public coordinates: Coordinates = {
    phone: '+33 6 07 47 03 38',
    email: 'hugo.feuillatre@gmail.com',
    city: 'Nantes',
  };

  public profile: Profile = {
    title: 'Développeur web Fullstack',
    age: 29,
    yearsOfExperience: 7,
    expertise: "Appétence naturelle à l'UX/UI et la qualité de code",
    knowHow: 'Curieux, pédagogue et polyvalent',
    situation: 'Célibataire, sans enfant',
    mobility: 'Nantes',
  };

  public skils: Skill[] = [
    {
      label: 'Angular',
      rating: 3,
    },
    { label: 'VueJS', rating: 3 },
    { label: 'Java', rating: 3 },
    { label: 'Docker', rating: 2 },
  ];

  public language: Language = { label: 'Anglais', rating: 'B2' };
}
