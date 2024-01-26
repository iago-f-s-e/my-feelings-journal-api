import { FeelingJournalModule } from '@app/feeling-journal';
import { InfraModule } from '@infra/infra-module';
import { Module } from '@nestjs/common';

import { HappeningDiaryController } from './controllers';
import { CreateHappeningDiaryService } from './services';

@Module({
  imports: [InfraModule, FeelingJournalModule],
  controllers: [HappeningDiaryController],
  providers: [CreateHappeningDiaryService]
})
export class HappeningDiaryModuleModule {}
