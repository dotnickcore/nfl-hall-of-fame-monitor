import {
  INTERCEPTION_MULTIPLIR,
  NO_CHAMPIONSHIPS_PENALTY,
} from '../../../../../consts/positions/defense/inside-linebacker/insideLinebacker.js';
import { IInsideLinebacker } from '../../../../../interfaces/positions/defense/inside-linebacker/IInsideLinebacker.js';
import { CommonService } from '../../../common/commonService.js';

export class InsideLinebackerService
  extends CommonService
  implements IInsideLinebacker
{
  returnInterceptionsCalculation(interceptions: number): number {
    return interceptions * INTERCEPTION_MULTIPLIR;
  }
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
