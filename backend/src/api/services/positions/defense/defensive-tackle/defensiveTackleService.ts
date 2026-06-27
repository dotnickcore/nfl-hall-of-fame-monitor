import {
  NO_CHAMPIONSHIPS_PENALTY,
  SACKS_MULTIPLIR,
} from '../../../../../consts/positions/defense/defensive-tackle/defensiveTackle.js';
import { IDefensiveTackle } from '../../../../../interfaces/positions/defense/defensive-tackle/IDefensiveTackle.js';
import { CommonService } from '../../../common/commonService.js';

export class BaseDefensiveTackleService
  extends CommonService
  implements IDefensiveTackle
{
  returnSacksCalculation(sacksMade: number): number {
    return sacksMade * SACKS_MULTIPLIR;
  }
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
