import { ClientSelfCareDto } from '@domain/dto';
import { SelfCareActivitie } from '@domain/interfaces/entities';

export function clientSelfCareMapping(selfCare: SelfCareActivitie): ClientSelfCareDto {
  return {
    id: selfCare?.id,
    darkColor: selfCare?.darkColor,
    description: selfCare?.description,
    done: selfCare?.done,
    normalColor: selfCare?.normalColor
  };
}
