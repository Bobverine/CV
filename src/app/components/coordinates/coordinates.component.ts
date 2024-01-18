import { Component, Input } from "@angular/core";
import { Coordinates } from "../../models/cv/coordinates";

@Component({
  selector: "app-coordinates",
  standalone: true,
  imports: [],
  templateUrl: "./coordinates.component.html",
  styleUrl: "./coordinates.component.scss",
})
export class CoordinatesComponent {
  @Input()
  coordinates!: Coordinates;
}
