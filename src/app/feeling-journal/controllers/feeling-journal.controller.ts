import { CatchException } from '@daki/logr';
import { CreateFeelingJournalInController, UpdateFeelingJournalInController } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { Body, Controller, Param, Post, Put } from '@nestjs/common';

import { CreateFeelingJournalModel, UpdateFeelingJournalModel } from '../model';
import { CreateFeelingJournalService, UpdateFeelingJournalService } from '../services';

@Controller('feeling-journal')
export class FeelingJournalController {
  constructor(
    private readonly createService: CreateFeelingJournalService,
    private readonly updateService: UpdateFeelingJournalService
  ) {}

  @Post()
  @CatchException({
    bubbleException: true
  })
  public async create(@Body() body: CreateFeelingJournalInController): Promise<FeelingJournal> {
    const feelingJournal = new CreateFeelingJournalModel(body);

    return this.createService.exec(feelingJournal.value);
  }

  @Put(':id')
  @CatchException({
    bubbleException: true
  })
  public async update(
    @Param('id') id: number,
    @Body() body: UpdateFeelingJournalInController
  ): Promise<void> {
    const feelingJournal = new UpdateFeelingJournalModel(id, body);

    await this.updateService.exec(feelingJournal.value);
  }
}
