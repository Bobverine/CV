import { Component, HostBinding, Input } from "@angular/core";
import { ESkill, Skill } from "../../models/cv/skill";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
  @Input()
  skills!: Skill[];

  @HostBinding("class.sorted")
  @Input()
  isSorted!: boolean;

  ratingCount: [] = [].constructor(4);

  skillTypes = ESkill;
}
