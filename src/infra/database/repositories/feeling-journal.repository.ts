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

  public getById(id: number): Promise<FeelingJournal | null> {
    return this.feelingJournal
      .createQueryBuilder('feeling_journal')
      .where(`feeling_journal.id = ${id}`)
      .getOne();
  }

  public getByDate(date: string): Promise<FeelingJournal | null> {
    return this.feelingJournal
      .createQueryBuilder('feeling_journal')
      .where(`feeling_journal.date = '${date}'`)
      .getOne();
  }

  public getWeek(start: string, end: string): Promise<FeelingJournal[]> {
    return this.feelingJournal
      .createQueryBuilder('feeling_journal')
      .where(`feeling_journal.date between '${start}' and '${end}'`)
      .getMany();
  }

  public getFullDetailByDate(date: string): Promise<FeelingJournal | null> {
    return this.feelingJournal
      .createQueryBuilder('feeling_journal')
      .select([
        'feeling_journal.id',
        'feeling_journal.count',
        'feeling_journal.date',
        'feeling_journal.description',
        'feeling_journal.howWasToday',
        'selfCareActivities.id',
        'selfCareActivities.description',
        'selfCareActivities.darkColor',
        'selfCareActivities.normalColor',
        'selfCareActivities.done',
        'happeningsDiary.id',
        'happeningsDiary.title',
        'happeningsDiary.description',
        'happeningsDiary.howIFelt'
      ])
      .where(`feeling_journal.date = '${date}'`)
      .leftJoin('feeling_journal.selfCareActivities', 'selfCareActivities')
      .leftJoin('feeling_journal.happeningsDiary', 'happeningsDiary')
      .getOne();
  }
}
