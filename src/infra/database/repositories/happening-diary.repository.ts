import { CreateHappeningDiaryDtoInRepository } from '@domain/dto';
import { HappeningDiary } from '@domain/interfaces/entities';
import { HappeningDiaryEntity } from '@infra/database/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HappeningDiaryRepository {
  constructor(
    @InjectRepository(HappeningDiaryEntity)
    private readonly happeningDiary: Repository<HappeningDiaryEntity>
  ) {}

  public insert(payload: CreateHappeningDiaryDtoInRepository): Promise<HappeningDiary> {
    return this.happeningDiary.save(this.happeningDiary.create(payload));
  }
}
