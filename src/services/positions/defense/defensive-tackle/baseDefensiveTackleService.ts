import { IDefensiveTackle } from "../../../../interfaces/positions/defense/defensive-tackle/IDefensiveTackle";
import { CommonService } from "../../../common/commonService";

export abstract class BaseDefensiveTackleService extends CommonService implements IDefensiveTackle {
    returnSacksCalculation(sacksMade: number): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}