import { CommonService } from '../../../common/commonService.js';
import { IOffensiveTackle } from '../../../../../interfaces/positions/offense/offensive-tackle/IOffensiveTackle.js';
import { NO_CHAMPIONSHIPS_PENALTY } from '../../../../../consts/positions/offense/offensive-tackle/offensiveTackle.js';

export class OffensiveTackleService
  extends CommonService
  implements IOffensiveTackle
{
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
