import { INTERCEPTION_MULTIPLIR, NO_CHAMPIONSHIPS_PENALTY } from "../../../../consts/positions/defense/inside-linebacker/insideLinebacker";
import { IInsideLinebacker } from "../../../../interfaces/positions/defense/inside-linebacker/IInsideLinebacker";
import { CommonService } from "../../../common/commonService";

export class InsideLinebackerService extends CommonService implements IInsideLinebacker {
    returnInterceptionsCalculation(interceptions: number): number {
        return interceptions * INTERCEPTION_MULTIPLIR;
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY;
    }
}