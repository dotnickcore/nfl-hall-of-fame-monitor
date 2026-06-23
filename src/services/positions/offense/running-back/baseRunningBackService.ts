import { IRunningBack } from "../../../../interfaces/positions/offense/running-back/IRunningBack";
import { CommonService } from "../../../common/commonService";

export abstract class BaseRunningBackService extends CommonService implements IRunningBack {
    returnFirstTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnSecondTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnNoDesignationTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnRushingYardsCalculation(rushingYards: number): number {
        throw new Error("Method not implemented.");
    }
    returnRushingTouchdownsCalculation(rushingTouchdowns: number): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}