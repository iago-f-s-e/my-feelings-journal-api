import { HappeningDiary } from '@domain/interfaces/entities/happening-diary.interface';
import { SelfCareActivitie } from '@domain/interfaces/entities/self-care-activitie.interface';
import { FeelingType } from '@domain/types';

export interface FeelingJournal {
  id: string;
  count: number;
  date: string;
  description?: string;
  howWasToday: FeelingType;
  selfCareActivities: SelfCareActivitie[];
  happeningsDiary: HappeningDiary[];
}
