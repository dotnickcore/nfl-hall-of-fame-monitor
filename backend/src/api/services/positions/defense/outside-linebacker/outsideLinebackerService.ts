import {
  SACKS_MULTIPLIR,
  NO_CHAMPIONSHIPS_PENALTY,
} from '../../../../../consts/positions/defense/outsider-linebacker/outsideLinebacker.js';
import { IOutsideLinebacker } from '../../../../../interfaces/positions/defense/outside-linebacker/IOutsideLinebacker.js';
import { CommonService } from '../../../common/commonService.js';

export class OutsideLinebackerService
  extends CommonService
  implements IOutsideLinebacker
{
  returnSacksCalculation(sacksMade: number): number {
    return sacksMade * SACKS_MULTIPLIR;
  }
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
