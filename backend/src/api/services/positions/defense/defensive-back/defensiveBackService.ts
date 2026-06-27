import { CommonService } from '../../../common/commonService.js';
import { IDefensiveBack } from '../../../../../interfaces/positions/defense/defensive-back/IDefensiveBack.js';
import {
  INTERCEPTION_MULTIPLIR,
  NO_CHAMPIONSHIPS_PENALTY,
} from '../../../../../consts/positions/defense/defensive-back/defensiveBack.js';

export class DefensiveBackService
  extends CommonService
  implements IDefensiveBack
{
  returnInterceptionsCalculation(interceptions: number): number {
    return interceptions * INTERCEPTION_MULTIPLIR;
  }
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
