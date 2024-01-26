import { CreateSelfCareDtoInController, CreateSelfCareDtoInService } from '@domain/dto';

export class CreateSelfCareActivitieModel {
  private readonly toCreate: CreateSelfCareDtoInService;

  constructor(data: CreateSelfCareDtoInController) {
    this.toCreate = {
      description: data.description,
      darkColor: data.darkColor,
      normalColor: data.normalColor
    };
  }

  public get value(): CreateSelfCareDtoInService {
    return this.toCreate;
  }
}
