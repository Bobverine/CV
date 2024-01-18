import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Job } from "../../models/dc/job";

@Component({
  selector: "app-job",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./job.component.html",
  styleUrl: "./job.component.scss",
})
export class JobComponent implements OnInit {
  @Input()
  job!: Job;

  yearPeriod!: string;
  cityAndYearPeriod!: string;

  ngOnInit(): void {
    this.yearPeriod = this.getYearPeriod();
    this.cityAndYearPeriod = this.getYearPeriod();
  }

  getYearPeriod(): string {
    const beginYear = this.job.period.beginYear.getFullYear();
    const endYear = this.job.period.endYear.getFullYear();
    return `${beginYear} - ${endYear}`;
  }
}
