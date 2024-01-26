import { FeelingJournalModule } from '@app/feeling-journal';
import { InfraModule } from '@infra/infra-module';
import { Module } from '@nestjs/common';

import { SelfCareActivieController } from './controllers';
import { CreateSelfCareService } from './services';

@Module({
  imports: [InfraModule, FeelingJournalModule],
  controllers: [SelfCareActivieController],
  providers: [CreateSelfCareService]
})
export class SelfCareActivitieModuleModule {}
