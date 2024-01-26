import { FindOrCreateFeelingJournalService } from '@app/feeling-journal/services';
import { CreateFeelingJournalInService, CreateHappeningDiaryDtoInService } from '@domain/dto';
import { HappeningDiary } from '@domain/interfaces/entities';
import { HappeningDiaryRepository } from '@infra/database/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateHappeningDiaryService {
  constructor(
    private readonly repository: HappeningDiaryRepository,
    private readonly findOrCreateFeelingJournalService: FindOrCreateFeelingJournalService
  ) {}

  public async exec(
    payload: CreateHappeningDiaryDtoInService,
    feelingJournal: CreateFeelingJournalInService
  ): Promise<HappeningDiary> {
    const createdFeelingJournal = await this.findOrCreateFeelingJournalService.exec(feelingJournal);

    return this.repository.insert({ ...payload, feelingJournalId: createdFeelingJournal.id });
  }
}
