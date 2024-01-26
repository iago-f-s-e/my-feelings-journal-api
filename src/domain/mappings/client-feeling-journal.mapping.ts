import { ClientFeelingJournalDto } from '@domain/dto';
import { FeelingJournal } from '@domain/interfaces/entities';

import { clientHappeningDiaryMapping } from './client-happening-diary.mapping';
import { clientSelfCareMapping } from './client-self-care.mapping';

export function clientFeelingJournalMapping(
  feelingJournal: FeelingJournal
): ClientFeelingJournalDto {
  return {
    id: feelingJournal?.id,
    count: feelingJournal?.count,
    date: feelingJournal?.date,
    feelingType: feelingJournal?.howWasToday,
    description: feelingJournal?.description,
    happeningDiaryList: (feelingJournal?.happeningsDiary || []).map(feelingJournal =>
      clientHappeningDiaryMapping(feelingJournal)
    ),
    selfCareList: (feelingJournal?.selfCareActivities || []).map(selfCare =>
      clientSelfCareMapping(selfCare)
    )
  };
}
