import { InfraModule } from '@infra/infra-module';
import { Module } from '@nestjs/common';

import { FeelingJournalHelperModule } from '../feeling-journal-helper';
import { FeelingJournalController } from './controllers';
import {
  CreateFeelingJournalService,
  FindFeelingJournalService,
  FindOrCreateFeelingJournalService
} from './services';

@Module({
  imports: [InfraModule, FeelingJournalHelperModule],
  controllers: [FeelingJournalController],
  providers: [
    CreateFeelingJournalService,
    FindFeelingJournalService,
    FindOrCreateFeelingJournalService
  ],
  exports: [FindOrCreateFeelingJournalService]
})
export class FeelingJournalModule {}
