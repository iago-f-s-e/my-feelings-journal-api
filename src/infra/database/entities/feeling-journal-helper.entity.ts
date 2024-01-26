import { FeelingJournalHelper } from '@domain/interfaces/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feeling_journal_helper')
export class FeelingJournalHelperEntity implements FeelingJournalHelper {
  @PrimaryGeneratedColumn('increment', {
    type: 'integer',
    name: 'feeling_journal_helper_id',
    primaryKeyConstraintName: 'PK_feeling_journal_helper_id'
  })
  public id!: number;

  @Column({ type: 'uuid', name: 'last_feeling_journal_id', nullable: true })
  public lastFeelingJournalId!: string;

  @Column({ type: 'integer', name: 'last_feeling_journal_count', default: 0, nullable: true })
  public lastFeelingJournalCount!: number;
}
