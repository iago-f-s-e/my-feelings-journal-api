import { CreateFeelingJournalModel } from '@app/feeling-journal/model';
import { CreateSelfCareActivitieModel } from '@app/self-care-activitie/model';
import { CreateSelfCareService } from '@app/self-care-activitie/services';
import { CatchException } from '@daki/logr';
import { CreateSelfCareDtoInController } from '@domain/dto';
import { SelfCareActivitie } from '@domain/interfaces/entities';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('self-care')
export class SelfCareActivieController {
  constructor(private readonly createServivce: CreateSelfCareService) {}

  @Post()
  @CatchException({
    bubbleException: true
  })
  public async create(@Body() body: CreateSelfCareDtoInController): Promise<SelfCareActivitie> {
    const selfCare = new CreateSelfCareActivitieModel(body);
    const feelingJournal = new CreateFeelingJournalModel({ date: body.date });

    return this.createServivce.exec(selfCare.value, feelingJournal.value);
  }
}
