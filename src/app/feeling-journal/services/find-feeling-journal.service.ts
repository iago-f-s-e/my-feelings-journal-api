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

  public async getByDate(date: string): Promise<FeelingJournal | null> {
    return this.repository.getByDate(date);
  }

  @CatchException({
    bubbleException: true
  })
  public async getWeek(start: string, end: string): Promise<FeelingJournal[]> {
    return this.repository.getWeek(start, end);
  }

  @CatchException({
    bubbleException: true
  })
  public async getFullDetailByDate(date: string): Promise<FeelingJournal | null> {
    return this.repository.getFullDetailByDate(date);
  }
}
