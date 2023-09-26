import { InfraModule } from '@infra/infra-module';
import { Module } from '@nestjs/common';

import { FeelingJournalModule } from './feeling-journal';
import { FeelingJournalHelperModule } from './feeling-journal-helper';

@Module({
  imports: [InfraModule, FeelingJournalHelperModule, FeelingJournalModule]
})
export class AppModule {}
