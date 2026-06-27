import { IKicker } from '../../../../../interfaces/positions/special/kicker/IKicker.js';
import { FIELD_GOALS_MULTIPLIER } from '../../../../../consts/positions/special/kicker/kicker.js';
import { CommonService } from '../../../common/commonService.js';

export class KickerService extends CommonService implements IKicker {
  returnFieldGoalsMadeMulitiplierCalculation(goalsMade: number): number {
    return goalsMade * FIELD_GOALS_MULTIPLIER;
  }
}
