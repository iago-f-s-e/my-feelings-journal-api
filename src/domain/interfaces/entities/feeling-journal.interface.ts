import { HappeningDiary } from '@domain/interfaces/entities/happening-diary.interface';
import { SelfCareActivitie } from '@domain/interfaces/entities/self-care-activitie.interface';
import { FeelingType } from '@domain/types';

export interface FeelingJournal {
  id: number;
  count: number;
  date: Date;
  closed: boolean;
  description?: string;
  howWasToday: FeelingType;
  selfCareActivities: SelfCareActivitie[];
  happeningsDiary: HappeningDiary[];
}
