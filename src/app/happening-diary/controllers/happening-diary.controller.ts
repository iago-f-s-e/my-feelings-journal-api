import { CreateFeelingJournalModel } from '@app/feeling-journal/model';
import { CreateHappeningDiaryModel } from '@app/happening-diary/model';
import { CreateHappeningDiaryService } from '@app/happening-diary/services';
import { CatchException } from '@daki/logr';
import { CreateHappeningDiaryDtoInController } from '@domain/dto';
import { HappeningDiary } from '@domain/interfaces/entities';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('happening-diary')
export class HappeningDiaryController {
  constructor(private readonly createServivce: CreateHappeningDiaryService) {}

  @Post()
  @CatchException({
    bubbleException: true
  })
  public async create(@Body() body: CreateHappeningDiaryDtoInController): Promise<HappeningDiary> {
    const happeningDiary = new CreateHappeningDiaryModel(body);
    const feelingJournal = new CreateFeelingJournalModel({ date: body.date });

    return this.createServivce.exec(happeningDiary.value, feelingJournal.value);
  }
}
