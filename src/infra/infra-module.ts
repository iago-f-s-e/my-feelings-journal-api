import { DatabaseModule } from '@infra/database';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  exports: [DatabaseModule]
})
export class InfraModule {}
