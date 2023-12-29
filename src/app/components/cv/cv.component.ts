import { Component } from '@angular/core';
import { TupleComponent } from '../tuple/tuple.component';
import { JobComponent } from '../job/job.component';
import { Job } from '../../models/job';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [TupleComponent, JobComponent, NgFor],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

  public jobs: Job[] = [{
    title: 'Développeur web fullstack',
    client: 'OBS',
    description: "Migration de Liferay et refonte de l'interface VueJS pour le portail d'assurance vie Suravenir",
    period: {
      beginYear: new Date('2022'),
      endYear: new Date('2023'),
      duration: 1.5,
      durationUnit: 'Y'
    },
    project: 'Arkéa Suravenir',
    teamsAndMethods: 'Agile ~15 personnes, CDP, PPOs / testeurs, développeurs',
    tasks: [
      "Développement des portlets Rachat et Souscription",
      "Ecriture de mappers REST / SOAP",
      "Correction d'anomalies",
      "Accompagnement de juniors"
    ],
    toolsAndTechnologies: ['Java / Gradle / Liferay / VueJS / SCSS / Yarn / IntelliJ / Gitlab'],
    city: 'Nantes'
  }];

}
