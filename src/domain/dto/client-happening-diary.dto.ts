import { FeelingType } from '@domain/types';

export type ClientHappeningDiaryDto = {
  id: number;
  title: string;
  order: number;
  description?: string;
  feelingType?: FeelingType;
};
