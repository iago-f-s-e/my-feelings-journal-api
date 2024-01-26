import { FeelingType } from '@domain/types';

export type CreateHappeningDiaryDtoInController = {
  date: string;
  title: string;
  description?: string;
  feelingType?: FeelingType;
};

export type CreateHappeningDiaryDtoInService = Pick<
  CreateHappeningDiaryDtoInController,
  'title' | 'description'
> & {
  howIFelt?: FeelingType;
};

export type CreateHappeningDiaryDtoInRepository = CreateHappeningDiaryDtoInService & {
  feelingJournalId: string;
};
