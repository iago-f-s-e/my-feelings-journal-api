import { CreateFeelingJournalInController } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { Body, Controller, Post } from '@nestjs/common';

import { CreateFeelingJournalModel } from '../model';
import { CreateFeelingJournalService } from '../services';

@Controller('feeling-journal')
export class CreateFeelingJournalController {
  constructor(private readonly service: CreateFeelingJournalService) {}

  @Post()
  public async exec(@Body() body: CreateFeelingJournalInController): Promise<FeelingJournal> {
    const feelingJournal = new CreateFeelingJournalModel(body);

    return this.service.exec(feelingJournal.value);
  }
}
