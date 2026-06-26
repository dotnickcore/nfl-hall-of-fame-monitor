import { CommonService } from "../../../common/commonService";
import { IOffensiveGuard } from "../../../../interfaces/positions/offense/offensive-guard/IOffensiveGuard";
import { NO_CHAMPIONSHIPS_PENALTY } from "../../../../consts/positions/offense/offensive-guard/offensiveGuard";

export class OffensiveGuardService extends CommonService implements IOffensiveGuard {
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY;
    }
}