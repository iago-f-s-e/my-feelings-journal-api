import { InfraModule } from '@infra/infra-module';
import { Module } from '@nestjs/common';

import { FeelingJournalHelperService } from './services';

@Module({
  imports: [InfraModule],
  providers: [FeelingJournalHelperService],
  exports: [FeelingJournalHelperService]
})
export class FeelingJournalHelperModule {}
