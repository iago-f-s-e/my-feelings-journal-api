import { UpdateFeelingJournalInController, UpdateFeelingJournalInService } from '@domain/dto';

export class UpdateFeelingJournalModel {
  private readonly toUpdate: UpdateFeelingJournalInService;

  constructor(id: number, data: UpdateFeelingJournalInController) {
    this.toUpdate = { ...data, id };
  }

  public get value(): UpdateFeelingJournalInService {
    return this.toUpdate;
  }
}
