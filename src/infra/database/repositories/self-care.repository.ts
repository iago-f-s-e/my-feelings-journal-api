import { CreateSelfCareDtoInRepository } from '@domain/dto';
import { SelfCareActivitie } from '@domain/interfaces/entities';
import { SelfCareActivitieEntity } from '@infra/database/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SelfCareRepository {
  constructor(
    @InjectRepository(SelfCareActivitieEntity)
    private readonly selfCare: Repository<SelfCareActivitieEntity>
  ) {}

  public insert(payload: CreateSelfCareDtoInRepository): Promise<SelfCareActivitie> {
    return this.selfCare.save(this.selfCare.create(payload));
  }
}
