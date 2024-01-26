import { FeelingJournalHelper } from '@domain/interfaces/entities';
import { FeelingJournalHelperEntity } from '@infra/database/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class FeelingJournalHelperRepository {
  constructor(
    @InjectRepository(FeelingJournalHelperEntity)
    private readonly feelingJournalHelper: Repository<FeelingJournalHelperEntity>
  ) {}

  public getLast(): Promise<FeelingJournalHelper | null> {
    return this.feelingJournalHelper.createQueryBuilder().getOne();
  }

  public updateLastValues(
    id: number,
    lastFeelingJournalId: string,
    lastFeelingJournalCount: number
  ): Promise<UpdateResult> {
    return this.feelingJournalHelper.update(id, { lastFeelingJournalId, lastFeelingJournalCount });
  }
}
