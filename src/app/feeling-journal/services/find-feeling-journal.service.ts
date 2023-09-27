import { CatchException } from '@daki/logr';
import { FeelingJournal } from '@domain/interfaces/entities';
import { FeelingJournalRepository } from '@infra/database/repositories';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class FindFeelingJournalService {
  constructor(private readonly repository: FeelingJournalRepository) {}

  @CatchException({
    bubbleException: true
  })
  public async getById(id: number): Promise<FeelingJournal> {
    const feelingJournal = await this.repository.getById(id);

    if (!feelingJournal) {
      throw new NotFoundException('Feeling journal is not found');
    }

    return feelingJournal;
  }
}
