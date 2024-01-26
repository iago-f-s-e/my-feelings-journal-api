import { FindOrCreateFeelingJournalService } from '@app/feeling-journal/services';
import { CreateFeelingJournalInService, CreateSelfCareDtoInService } from '@domain/dto';
import { SelfCareActivitie } from '@domain/interfaces/entities';
import { SelfCareRepository } from '@infra/database/repositories/self-care.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateSelfCareService {
  constructor(
    private readonly repository: SelfCareRepository,
    private readonly findOrCreateFeelingJournalService: FindOrCreateFeelingJournalService
  ) {}

  public async exec(
    payload: CreateSelfCareDtoInService,
    feelingJournal: CreateFeelingJournalInService
  ): Promise<SelfCareActivitie> {
    const createdFeelingJournal = await this.findOrCreateFeelingJournalService.exec(feelingJournal);

    return this.repository.insert({ ...payload, feelingJournalId: createdFeelingJournal.id });
  }
}
