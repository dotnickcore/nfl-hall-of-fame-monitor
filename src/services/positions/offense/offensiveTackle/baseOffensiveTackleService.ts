import { CommonService } from "../../../common/commonService";
import { IOffensiveTackle } from "../../../../interfaces/positions/offense/offensive-tackle/IOffensiveTackle";

export abstract class BaseOffensiveTackleService extends CommonService implements IOffensiveTackle {
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