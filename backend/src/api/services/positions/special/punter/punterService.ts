import { IPunter } from '../../../../../interfaces/positions/special/punter/IPunter.js';
import { CommonService } from '../../../common/commonService.js';
import { NO_CHAMPIONSHIPS_PENALTY } from '../../../../../consts/positions/special/punter/punter.js';

export class BasePunterService extends CommonService implements IPunter {
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
