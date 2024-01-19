import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Job } from "../../models/dc/job";
import { EPeriod, IntervalPeriod, Period } from "../../models/utils/period";
import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector: "app-job",
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: "./job.component.html",
  styleUrl: "./job.component.scss",
})
export class JobComponent implements OnInit {
  @Input()
  job!: Job;

  date!: string;

  ngOnInit(): void {
    this.date = this.getDate(this.job.period);
  }

  getDate(date: Period): string {
    switch (date.periodType) {
      case EPeriod.YEAR_INTERVAL:
        const period =
          date.from === date.to ? `${date.from}` : `${date.from} - ${date.to}`;
        const duration = this.getDuration(date);
        return duration ? `${period} (${duration})` : `${period}`;
      case EPeriod.MONTH_INTERVAL:
        return `${date.from} - ${date.to}`;
      case EPeriod.DATE:
        return date.value.getFullYear().toString();
      case EPeriod.STRING:
        return date.value;
      default:
        return "";
    }
  }

  getDuration(date: IntervalPeriod): string {
    if (!date.duration || !date.durationUnit) {
      return "";
    }
    const duration = date.duration.toLocaleString();
    if (date.durationUnit === "M") {
      return `${duration} mois`;
    } else {
      return `${duration} ans`;
    }
  }
}
