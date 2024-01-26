import { CreateFeelingJournalInController, CreateFeelingJournalInService } from '@domain/dto';

export class CreateFeelingJournalModel {
  private readonly toCreate: CreateFeelingJournalInService;

  constructor(data: CreateFeelingJournalInController) {
    this.toCreate = {
      date: data.date,
      howWasToday: data.feelingType,
      description: data.description
    };
  }

  public get value(): CreateFeelingJournalInService {
    return this.toCreate;
  }
}
