import { FeelingJournalHelperService } from '@app/feeling-journal-helper/services';
import { CatchException } from '@daki/logr';
import { CreateFeelingJournalInRepository, CreateFeelingJournalInService } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { FeelingType } from '@domain/types';
import { FeelingJournalRepository } from '@infra/database/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateFeelingJournalService {
  constructor(
    private readonly repository: FeelingJournalRepository,
    private readonly helperService: FeelingJournalHelperService
  ) {}

  private getCount(feelingType?: FeelingType): number {
    const countByFeelingType: Record<FeelingType, number> = {
      VERY_GOOD: 4,
      GOOD: 2,
      NORMAL: 1,
      BAD: -1,
      VERY_BAD: -2
    };

    return countByFeelingType[feelingType as FeelingType] || 0;
  }

  @CatchException({
    bubbleException: true
  })
  public async exec(payload: CreateFeelingJournalInService): Promise<FeelingJournal> {
    const lastValues = await this.helperService.getLastOrCreateDefault();

    const newCount = lastValues.lastFeelingJournalCount + this.getCount(payload.howWasToday);

    const toInsert: CreateFeelingJournalInRepository = {
      ...payload,
      count: newCount
    };

    const created = await this.repository.insert(toInsert);
    if (newCount !== 0) {
      await this.helperService.updateLastValues(lastValues.id, created.id, newCount);
    }

    return created;
  }
}
