import { CommonService } from '../../../common/commonService.js';
import { IOffensiveGuard } from '../../../../../interfaces/positions/offense/offensive-guard/IOffensiveGuard.js';
import { NO_CHAMPIONSHIPS_PENALTY } from '../../../../../consts/positions/offense/offensive-guard/offensiveGuard.js';

export class OffensiveGuardService
  extends CommonService
  implements IOffensiveGuard
{
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
