import { FeelingType } from '@domain/types';

export type UpdateFeelingJournalInController = {
  description?: string;
  howWasToday: FeelingType;
};

export type UpdateFeelingJournalInService = UpdateFeelingJournalInController & {
  id: number;
};

export type UpdateFeelingJournalInRepository = UpdateFeelingJournalInService & {
  count: number;
  closed: boolean;
};
