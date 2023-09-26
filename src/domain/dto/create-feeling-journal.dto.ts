export type CreateFeelingJournalInController = {
  date: string;
  description?: string;
};

export type CreateFeelingJournalInService = Omit<CreateFeelingJournalInController, 'date'> & {
  date: Date;
};

export type CreateFeelingJournalInRepository = CreateFeelingJournalInService & {
  count: number;
};
