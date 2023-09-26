import { FeelingJournal } from '@domain/interfaces/entities/feeling-journal.interface';

export interface SelfCareActivitie {
  id: number;
  feelingJournalId: number;
  title: string;
  done: boolean;
  rememberMe: boolean;
  createdAt: Date;
  updatedAt: Date;
  feelingJournal: FeelingJournal;
}
