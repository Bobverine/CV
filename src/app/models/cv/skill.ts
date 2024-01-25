import { Rating } from "../utils/rating";

enum ESkill {
  NOTE,
  RATING,
  VALUE,
}

interface NoteSkill {
  skillType: ESkill.NOTE;
  label: string;
  note: string;
}

interface RatingSkill {
  skillType: ESkill.RATING;
  label: string;
  rating: Rating;
}

interface ValueSkill {
  skillType: ESkill.VALUE;
  label: string;
  value: string;
}

type Skill = NoteSkill | RatingSkill | ValueSkill;

export { ESkill, NoteSkill, RatingSkill, Skill, ValueSkill };
