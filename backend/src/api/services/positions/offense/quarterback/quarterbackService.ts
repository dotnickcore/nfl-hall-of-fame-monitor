import { IQuarterback } from '../../../../../interfaces/positions/offense/quarterback/IQuarterback.js';
import {
  CHAMPIONSHIPS_WON_MULTIPLIER,
  NO_CHAMPIONSHIPS_PENALTY,
  PASSING_TOUCHDOWNS_MULTIPLIER,
  PASSING_YARDS_MULTIPLIER,
  SUPER_BOWL_LOSSES_MULTIPLIER,
} from '../../../../../consts/positions/offense/quarterback/quarterback.js';
import { CommonService } from '../../../common/commonService.js';

export class QuarterbackService extends CommonService implements IQuarterback {
  returnSuperBowlLossesCalculation(timesLostSuperBowl: number): number {
    return timesLostSuperBowl * SUPER_BOWL_LOSSES_MULTIPLIER;
  }
  returnChampionshipsWonCalculation(championshipsAwarded: number): number {
    return championshipsAwarded * CHAMPIONSHIPS_WON_MULTIPLIER;
  }
  returnPassingYardsMulitiplierCalculation(passingYards: number): number {
    return passingYards * PASSING_YARDS_MULTIPLIER;
  }
  returnPassingTouchdownsMulitiplierCalculation(
    passingTouchdowns: number,
  ): number {
    return passingTouchdowns * PASSING_TOUCHDOWNS_MULTIPLIER;
  }
  returnNoChampionshipsPenaltyCalculation(): number {
    return NO_CHAMPIONSHIPS_PENALTY;
  }
}
