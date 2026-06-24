import { CommonService } from "../../../common/commonService";
import { IDefensiveBack } from "../../../../interfaces/positions/defense/defensive-back/IDefensiveBack";
import { INTERCEPTION_MULTIPLIR, NO_CHAMPIONSHIPS_PENALTY } from "../../../../consts/positions/defense/defensive-back/defensiveBack";

export abstract class BaseDefensiveBackService extends CommonService implements IDefensiveBack {
    returnInterceptionsCalculation(interceptions: number): number {
        return interceptions * INTERCEPTION_MULTIPLIR;
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY;
    }
}