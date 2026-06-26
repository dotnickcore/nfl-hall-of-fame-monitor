import { NO_CHAMPIONSHIPS_PENALTY, SACKS_MULTIPLIR } from "../../../../consts/positions/defense/defensive-tackle/defensiveTackle";
import { IDefensiveTackle } from "../../../../interfaces/positions/defense/defensive-tackle/IDefensiveTackle";
import { CommonService } from "../../../common/commonService";

export class BaseDefensiveTackleService extends CommonService implements IDefensiveTackle {
    returnSacksCalculation(sacksMade: number): number {
        return sacksMade * SACKS_MULTIPLIR;
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY
    }
}