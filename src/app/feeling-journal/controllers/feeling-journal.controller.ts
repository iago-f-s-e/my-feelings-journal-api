import { CatchException } from '@daki/logr';
import { ClientFeelingJournalDto, CreateFeelingJournalInController } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { clientFeelingJournalMapping } from '@domain/mappings';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

import { CreateFeelingJournalModel } from '../model';
import {
  CreateFeelingJournalService,
  FindFeelingJournalService,
  FindOrCreateFeelingJournalService
} from '../services';

type WeekQuery = {
  start: string;
  end: string;
};

@Controller('feeling-journal')
export class FeelingJournalController {
  constructor(
    private readonly createService: CreateFeelingJournalService,
    private readonly findService: FindFeelingJournalService,
    private readonly findOrCreateService: FindOrCreateFeelingJournalService
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

  @Get(':date')
  @CatchException({
    bubbleException: true
  })
  public async getByDate(@Param('date') date: string): Promise<ClientFeelingJournalDto> {
    return clientFeelingJournalMapping(await this.findOrCreateService.getFullDetailOrCreate(date));
  }
}
