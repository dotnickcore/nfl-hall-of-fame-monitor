import { NO_CHAMPIONSHIPS_PENALTY, SACKS_MULTIPLIR } from "../../../../consts/positions/defense/defensive-end/defensiveEnd";
import { IDefensiveEnd } from "../../../../interfaces/positions/defense/defensive-end/IDefensiveEnd";
import { CommonService } from "../../../common/commonService";

export class BaseDefensiveEndService extends CommonService implements IDefensiveEnd {
    returnSacksCalculation(sacksMade: number): number {
        return sacksMade * SACKS_MULTIPLIR;
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY
    }
}