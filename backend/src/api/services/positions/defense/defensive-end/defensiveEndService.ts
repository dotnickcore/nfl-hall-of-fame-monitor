import {
  NO_CHAMPIONSHIPS_PENALTY,
  SACKS_MULTIPLIR,
} from '../../../../../consts/positions/defense/defensive-end/defensiveEnd.js';
import { IDefensiveEnd } from '../../../../../interfaces/positions/defense/defensive-end/IDefensiveEnd.js';
import { CommonService } from '../../../common/commonService.js';

export class BaseDefensiveEndService
  extends CommonService
  implements IDefensiveEnd
{
  returnSacksCalculation(sacksMade: number): number {
    return sacksMade * SACKS_MULTIPLIR;
  }
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
