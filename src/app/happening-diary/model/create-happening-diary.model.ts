import { CreateHappeningDiaryDtoInController, CreateHappeningDiaryDtoInService } from '@domain/dto';

export class CreateHappeningDiaryModel {
  private readonly toCreate: CreateHappeningDiaryDtoInService;

  constructor(data: CreateHappeningDiaryDtoInController) {
    this.toCreate = {
      description: data.description,
      howIFelt: data.feelingType,
      title: data.title
    };
  }

  public get value(): CreateHappeningDiaryDtoInService {
    return this.toCreate;
  }
}
