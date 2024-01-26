import { HappeningDiaryModuleModule } from '@app/happening-diary';
import { SelfCareActivitieModuleModule } from '@app/self-care-activitie';
import { InfraModule } from '@infra/infra-module';
import { Module } from '@nestjs/common';

import { FeelingJournalModule } from './feeling-journal';
import { FeelingJournalHelperModule } from './feeling-journal-helper';

@Module({
  imports: [
    InfraModule,
    FeelingJournalHelperModule,
    FeelingJournalModule,
    SelfCareActivitieModuleModule,
    HappeningDiaryModuleModule
  ]
})
export class AppModule {}
