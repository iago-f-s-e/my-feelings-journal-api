import { InfraModule } from '@infra/infra-module';
import { Module } from '@nestjs/common';

import { FeelingJournalHelperModule } from '../feeling-journal-helper';
import { CreateFeelingJournalController } from './controllers';
import { CreateFeelingJournalService } from './services';

@Module({
  imports: [InfraModule, FeelingJournalHelperModule],
  controllers: [CreateFeelingJournalController],
  providers: [CreateFeelingJournalService]
})
export class FeelingJournalModule {}
