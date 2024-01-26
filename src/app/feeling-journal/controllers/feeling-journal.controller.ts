import { CatchException } from '@daki/logr';
import { CreateFeelingJournalInController } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { CreateFeelingJournalModel } from '../model';
import { CreateFeelingJournalService, FindFeelingJournalService } from '../services';

type WeekQuery = {
  start: string;
  end: string;
};

@Controller('feeling-journal')
export class FeelingJournalController {
  constructor(
    private readonly createService: CreateFeelingJournalService,
    private readonly findService: FindFeelingJournalService
  ) {}

  @Post()
  @CatchException({
    bubbleException: true
  })
  public async create(@Body() body: CreateFeelingJournalInController): Promise<FeelingJournal> {
    const feelingJournal = new CreateFeelingJournalModel(body);

    return this.createService.exec(feelingJournal.value);
  }

  @Get('week')
  @CatchException({
    bubbleException: true
  })
  public async getWeek(@Query() weekQuery: WeekQuery): Promise<FeelingJournal[]> {
    return this.findService.getWeek(weekQuery.start, weekQuery.end);
  }
}
