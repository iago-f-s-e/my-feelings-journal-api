import { ClientHappeningDiaryDto } from '@domain/dto/client-happening-diary.dto';
import { ClientSelfCareDto } from '@domain/dto/client-self-care.dto';

export type ClientFeelingJournalDto = {
  id: string;
  count: number;
  date: string;
  description?: string;
  feelingType?: string;
  selfCareList: ClientSelfCareDto[];
  happeningDiaryList: ClientHappeningDiaryDto[];
};
