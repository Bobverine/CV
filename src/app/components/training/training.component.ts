import { Component, Input, OnInit } from '@angular/core';
import { Training } from '../../models/cv/training';
import { EPeriod, Period } from '../../models/utils/period';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})
export class TrainingComponent implements OnInit {
  @Input()
  training!: Training;

  date!: string;

  ngOnInit(): void {
    this.date = this.getDate(this.training.date);
  }

  getDate(date: Period): string {
    switch (date.periodType) {
      case EPeriod.YEAR_INTERVAL:
        return `${date.from} - ${date.to}`;
      case EPeriod.MONTH_INTERVAL:
        return `${date.from} - ${date.to}`;
      case EPeriod.DATE:
        return date.value.getFullYear().toString();
      case EPeriod.STRING:
        return date.value;
      default:
        return '';
    }
  }
}
