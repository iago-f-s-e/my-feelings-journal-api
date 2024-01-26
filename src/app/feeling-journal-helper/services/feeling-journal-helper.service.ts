import { CatchException } from '@daki/logr';
import { FeelingJournalHelper } from '@domain/interfaces/entities';
import { FeelingJournalHelperRepository } from '@infra/database/repositories';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FeelingJournalHelperService {
  constructor(private readonly repository: FeelingJournalHelperRepository) {}

  @CatchException({
    returnOnException: () => {
      const fallback: FeelingJournalHelper = {
        id: 1,
        lastFeelingJournalCount: 0,
        lastFeelingJournalId: ''
      };

      return fallback;
    }
  })
  public async getLast(): Promise<FeelingJournalHelper> {
    const feelingJournalHelper = await this.repository.getLast();

    if (!feelingJournalHelper) {
      throw new NotFoundException('Feeling Jornal Helper is not found');
    }

    return feelingJournalHelper;
  }

  public async updateLastValues(
    id: number,
    feelingJournalId: string,
    count: number
  ): Promise<void> {
    await this.repository.updateLastValues(id, feelingJournalId, count);
  }
}
