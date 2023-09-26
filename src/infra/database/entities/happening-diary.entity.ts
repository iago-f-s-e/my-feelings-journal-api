import { HappeningDiary } from '@domain/interfaces/entities';
import { FeelingType } from '@domain/types';
import { FeelingJournalEntity } from '@infra/database/entities';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('happening_diary')
export class HappeningDiaryEntity implements HappeningDiary {
  @PrimaryGeneratedColumn('increment', {
    type: 'integer',
    name: 'happening_diary_id',
    primaryKeyConstraintName: 'PK_happening_diary_id'
  })
  public id!: number;

  @Column({ type: 'integer', name: 'feeling_journal_id' })
  public feelingJournalId!: number;

  @Column({ type: 'varchar' })
  public description!: string;

  @Column({ type: 'varchar', name: 'how_i_felt' })
  public howIFelt!: FeelingType;

  @ManyToOne(() => FeelingJournalEntity, feelingJournal => feelingJournal.happeningsDiary, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({
    name: 'feeling_journal_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_happening_diary_feeling_journal'
  })
  public feelingJournal!: FeelingJournalEntity;
}
