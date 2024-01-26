import { FeelingType } from '@domain/types';

export type CreateFeelingJournalInController = {
  date: string;
  feelingType?: FeelingType;
  description?: string;
};

export type CreateFeelingJournalInService = Pick<
  CreateFeelingJournalInController,
  'description'
> & {
  date: string;
  howWasToday?: FeelingType;
};

export type CreateFeelingJournalInRepository = CreateFeelingJournalInService & {
  count: number;
};
