import { FeelingJournalHelperService } from '@app/feeling-journal-helper/services';
import { CatchException } from '@daki/logr';
import { CreateFeelingJournalInRepository, CreateFeelingJournalInService } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { FeelingJournalRepository } from '@infra/database/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateFeelingJournalService {
  constructor(
    private readonly repository: FeelingJournalRepository,
    private readonly helperService: FeelingJournalHelperService
  ) {}

  @CatchException({
    bubbleException: true
  })
  public async exec(payload: CreateFeelingJournalInService): Promise<FeelingJournal> {
    const lastValues = await this.helperService.getLast();

    const toInsert: CreateFeelingJournalInRepository = {
      ...payload,
      count: lastValues.lastFeelingJournalCount
    };

    const created = await this.repository.insert(toInsert);

    await this.helperService.updateLastFeelingJournal(lastValues.id, created.id);

    return created;
  }
}
