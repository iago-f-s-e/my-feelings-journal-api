import { ClientHappeningDiaryDto } from '@domain/dto';
import { HappeningDiary } from '@domain/interfaces/entities';
import { FeelingType } from '@domain/types';

function getOrder(howIFelt: FeelingType): number {
  const howIFeltOrder: Record<FeelingType, number> = {
    VERY_GOOD: 1,
    GOOD: 2,
    NORMAL: 3,
    BAD: 4,
    VERY_BAD: 5
  };

  return howIFeltOrder[howIFelt] || 6;
}

export function clientHappeningDiaryMapping(
  happeningDiary: HappeningDiary
): ClientHappeningDiaryDto {
  return {
    id: happeningDiary?.id,
    description: happeningDiary?.description,
    order: getOrder(happeningDiary?.howIFelt),
    title: happeningDiary?.title,
    feelingType: happeningDiary?.howIFelt
  };
}
