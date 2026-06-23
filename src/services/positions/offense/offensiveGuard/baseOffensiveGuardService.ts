import { CommonService } from "../../../common/commonService";
import { IOffensiveGuard } from "../../../../interfaces/positions/offense/offensive-guard/IOffensiveGuard";

export abstract class BaseOffensiveGuardService extends CommonService implements IOffensiveGuard {
    returnFirstTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnSecondTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnNoDesignationTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}