import { SelfCareActivitie } from '@domain/interfaces/entities';
import { FeelingJournalEntity } from '@infra/database/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('self_care_activitie')
export class SelfCareActivitieEntity implements SelfCareActivitie {
  @PrimaryGeneratedColumn('increment', {
    type: 'integer',
    name: 'self_care_activitie_id',
    primaryKeyConstraintName: 'PK_self_care_activitie_id'
  })
  public id!: number;

  @Column({ type: 'uuid', name: 'feeling_journal_id' })
  public feelingJournalId!: string;

  @Column({ type: 'varchar' })
  public description!: string;

  @Column({ type: 'varchar', name: 'dark_color' })
  public darkColor!: string;

  @Column({ type: 'varchar', name: 'normal_color' })
  public normalColor!: string;

  @Column({ type: 'boolean', default: false })
  public done!: boolean;

  @Column({ type: 'boolean', name: 'remember_me', default: false })
  public rememberMe!: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: 'now()', select: false })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', default: 'now()', select: false })
  public updatedAt!: Date;

  @ManyToOne(() => FeelingJournalEntity, feelingJournal => feelingJournal.selfCareActivities, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({
    name: 'feeling_journal_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_self_care_activitie_feeling_journal'
  })
  public feelingJournal!: FeelingJournalEntity;
}
