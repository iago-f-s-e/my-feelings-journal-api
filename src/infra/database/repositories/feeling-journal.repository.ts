import { CreateFeelingJournalInRepository } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { FeelingJournalEntity } from '@infra/database/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FeelingJournalRepository {
  constructor(
    @InjectRepository(FeelingJournalEntity)
    private readonly feelingJournal: Repository<FeelingJournalEntity>
  ) {}

  public insert(payload: CreateFeelingJournalInRepository): Promise<FeelingJournal> {
    return this.feelingJournal.save(this.feelingJournal.create(payload));
  }
}
