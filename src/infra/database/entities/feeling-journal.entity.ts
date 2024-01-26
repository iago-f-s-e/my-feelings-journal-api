import { FeelingJournal } from '@domain/interfaces/entities';
import { FeelingType } from '@domain/types';
import { HappeningDiaryEntity, SelfCareActivitieEntity } from '@infra/database/entities';
import { randomUUID } from 'crypto';
import { BeforeInsert, Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('feeling_journal')
export class FeelingJournalEntity implements FeelingJournal {
  @PrimaryColumn({
    type: 'uuid',
    name: 'feeling_journal_id',
    primaryKeyConstraintName: 'PK_feeling_journal_id'
  })
  public id!: string;

  @Column({ type: 'integer' })
  public count!: number;

  @Index('IDX_feeling_journal_date', { unique: true })
  @Column({ type: 'date' })
  public date!: string;

  @Column({ type: 'text', nullable: true })
  public description?: string;

  @Column({ type: 'varchar', name: 'how_was_today', nullable: true })
  public howWasToday!: FeelingType;

  @OneToMany(
    () => SelfCareActivitieEntity,
    selfCareActivities => selfCareActivities.feelingJournal,
    {
      cascade: true
    }
  )
  public selfCareActivities!: SelfCareActivitieEntity[];

  @OneToMany(() => HappeningDiaryEntity, happeningsDiary => happeningsDiary.feelingJournal, {
    cascade: true
  })
  public happeningsDiary!: HappeningDiaryEntity[];

  @BeforeInsert()
  private setId(): void {
    this.id = randomUUID();
  }
}
