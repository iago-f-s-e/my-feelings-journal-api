import { FeelingJournalHelperService } from '@app/feeling-journal-helper/services';
import { UpdateFeelingJournalInRepository, UpdateFeelingJournalInService } from '@domain/dto';
import { FeelingType } from '@domain/types';
import { FeelingJournalRepository } from '@infra/database/repositories';
import { BadRequestException, Injectable } from '@nestjs/common';

import { FindFeelingJournalService } from './find-feeling-journal.service';

@Injectable()
export class UpdateFeelingJournalService {
  constructor(
    private readonly repository: FeelingJournalRepository,
    private readonly findService: FindFeelingJournalService,
    private readonly helperService: FeelingJournalHelperService
  ) {}

  private getCount(feelingType: FeelingType): number {
    const countByFeelingType: Record<FeelingType, number> = {
      VERY_GOOD: 4,
      GOOD: 2,
      NORMAL: 1,
      BAD: -1,
      VERY_BAD: -2
    };

    return countByFeelingType[feelingType];
  }

  public async exec(payload: UpdateFeelingJournalInService): Promise<void> {
    const lastValues = await this.helperService.getLast();

    const feelingJournal = await this.findService.getById(payload.id);

    if (feelingJournal.closed) {
      throw new BadRequestException('Feeling Journal is blocked to updates');
    }

    const newCount = lastValues.lastFeelingJournalCount + this.getCount(payload.howWasToday);

    const toUpdate: UpdateFeelingJournalInRepository = {
      ...payload,
      count: newCount,
      closed: true
    };

    await this.repository.update(toUpdate);

    await this.helperService.updateLastCount(lastValues.id, newCount);
  }
}
