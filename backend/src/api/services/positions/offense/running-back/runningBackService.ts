import {
  NO_CHAMPIONSHIPS_PENALTY,
  RUSHING_TOUCHDOWNS_MULTIPLIER,
  RUSHING_YARDS_MULTIPLIER,
} from '../../../../../consts/positions/offense/running-back/runningBack.js';
import { IRunningBack } from '../../../../../interfaces/positions/offense/running-back/IRunningBack.js';
import { CommonService } from '../../../common/commonService.js';

export class RunningBackService extends CommonService implements IRunningBack {
  returnRushingYardsCalculation(rushingYards: number): number {
    return rushingYards * RUSHING_YARDS_MULTIPLIER;
  }
  returnRushingTouchdownsCalculation(rushingTouchdowns: number): number {
    return rushingTouchdowns * RUSHING_TOUCHDOWNS_MULTIPLIER;
  }
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
