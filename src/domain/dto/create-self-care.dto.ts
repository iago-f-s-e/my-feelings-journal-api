export type CreateSelfCareDtoInController = {
  date: string;
  description: string;
  darkColor: string;
  normalColor: string;
};

export type CreateSelfCareDtoInService = Omit<CreateSelfCareDtoInController, 'date'>;

export type CreateSelfCareDtoInRepository = CreateSelfCareDtoInService & {
  feelingJournalId: string;
};
