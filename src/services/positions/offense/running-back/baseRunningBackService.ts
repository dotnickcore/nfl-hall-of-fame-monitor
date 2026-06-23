import { CommonService } from "../../../common/commonService";

export abstract class BaseRunningBackService extends CommonService implements IRunningBack {
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