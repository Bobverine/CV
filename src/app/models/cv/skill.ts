import { Rating } from "../utils/rating";

enum ESkill {
  NOTE,
  RATING,
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

type Skill = NoteSkill | RatingSkill;

export { ESkill, NoteSkill, RatingSkill, Skill };
