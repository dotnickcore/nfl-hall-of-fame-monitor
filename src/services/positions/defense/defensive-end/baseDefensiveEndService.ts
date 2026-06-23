import { IDefensiveEnd } from "../../../../interfaces/positions/defense/defensive-end/IDefensiveEnd";
import { CommonService } from "../../../common/commonService";

export abstract class BaseDefensiveEndService extends CommonService implements IDefensiveEnd {
    returnSacksCalculation(sacksMade: number): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}