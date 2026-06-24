import { NO_CHAMPIONSHIPS_PENALTY, RUSHING_TOUCHDOWNS_MULTIPLIER, RUSHING_YARDS_MULTIPLIER } from "../../../../consts/positions/offense/running-back/runningBack";
import { IRunningBack } from "../../../../interfaces/positions/offense/running-back/IRunningBack";
import { CommonService } from "../../../common/commonService";

export abstract class BaseRunningBackService extends CommonService implements IRunningBack {
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