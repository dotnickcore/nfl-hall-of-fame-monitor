import { IPunter } from "../../../../interfaces/positions/special/punter/IPunter";
import { CommonService } from "../../../common/commonService";
import { NO_CHAMPIONSHIPS_PENALTY } from "../../../../consts/positions/special/punter/punter";

export class BasePunterService extends CommonService implements IPunter {
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY;
    }
}