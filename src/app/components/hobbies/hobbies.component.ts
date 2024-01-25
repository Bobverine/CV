import { Component, Input } from "@angular/core";
import { Hobby } from "../../models/cv/hobby";

@Component({
  selector: "app-hobbies",
  standalone: true,
  imports: [],
  templateUrl: "./hobbies.component.html",
  styleUrl: "./hobbies.component.scss",
})
export class HobbiesComponent {
  @Input()
  hobbies!: Hobby[];
}
