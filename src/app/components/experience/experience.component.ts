import { NgFor } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Experience } from "../../models/cv/experience";
import { EPeriod, Period } from "../../models/utils/period";

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
})
export class ExperienceComponent implements OnInit {
  @Input()
  public experience!: Experience;

  date!: string;

  ngOnInit(): void {
    this.date = this.getDate(this.experience.date);
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
        return "";
    }
  }
}
