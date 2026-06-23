import { CommonService } from "../../../common/commonService";
import { IOffensiveTackle } from "../../../../interfaces/positions/offense/offensive-tackle/IOffensiveTackle";
import { NO_CHAMPIONSHIPS_PENALTY } from "../../../../consts/positions/offense/offensive-tackle/offensiveTackle";

export abstract class BaseOffensiveTackleService extends CommonService implements IOffensiveTackle {
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY;
    }
}