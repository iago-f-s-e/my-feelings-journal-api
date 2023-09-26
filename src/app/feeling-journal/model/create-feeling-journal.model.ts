import { CreateFeelingJournalInController, CreateFeelingJournalInService } from '@domain/dto';

export class CreateFeelingJournalModel {
  private readonly toCreate: CreateFeelingJournalInService;

  constructor(data: CreateFeelingJournalInController) {
    this.toCreate = {
      ...data,
      date: new Date(data.date)
    };
  }

  public get value(): CreateFeelingJournalInService {
    return this.toCreate;
  }
}
