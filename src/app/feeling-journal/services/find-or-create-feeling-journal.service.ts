import { CreateFeelingJournalService } from '@app/feeling-journal/services/create-feeling-journal.service';
import { FindFeelingJournalService } from '@app/feeling-journal/services/find-feeling-journal.service';
import { CatchException } from '@daki/logr';
import { CreateFeelingJournalInService } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOrCreateFeelingJournalService {
  constructor(
    private readonly findService: FindFeelingJournalService,
    private readonly createService: CreateFeelingJournalService
  ) {}

  public async exec(payload: CreateFeelingJournalInService): Promise<FeelingJournal> {
    const found = await this.findService.getByDate(payload.date);

    if (!found) {
      return this.createService.exec(payload);
    }

    return found;
  }

  @CatchException({
    bubbleException: true
  })
  public async getFullDetailOrCreate(date: string): Promise<FeelingJournal> {
    const found = await this.findService.getFullDetailByDate(date);

    if (!found) {
      return this.createService.exec({ date });
    }

    return found;
  }
}
