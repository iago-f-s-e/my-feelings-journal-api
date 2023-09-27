import { CreateFeelingJournalInRepository, UpdateFeelingJournalInRepository } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { FeelingJournalEntity } from '@infra/database/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class FeelingJournalRepository {
  constructor(
    @InjectRepository(FeelingJournalEntity)
    private readonly feelingJournal: Repository<FeelingJournalEntity>
  ) {}

  public insert(payload: CreateFeelingJournalInRepository): Promise<FeelingJournal> {
    return this.feelingJournal.save(this.feelingJournal.create(payload));
  }

  public update(payload: UpdateFeelingJournalInRepository): Promise<UpdateResult> {
    const { id, ...toUpdate } = payload;
    return this.feelingJournal.update(id, toUpdate);
  }

  public getById(id: number): Promise<FeelingJournal | null> {
    return this.feelingJournal
      .createQueryBuilder('feeling_journal')
      .where(`feeling_journal.id = ${id}`)
      .getOne();
  }
}
