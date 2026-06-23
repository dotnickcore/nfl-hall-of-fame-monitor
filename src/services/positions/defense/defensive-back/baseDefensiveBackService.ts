import { CommonService } from "../../../common/commonService";
import { IDefensiveBack } from "../../../../interfaces/positions/defense/defensive-back/IDefensiveBack";

export abstract class BaseDefensiveBackService extends CommonService implements IDefensiveBack {
    returnInterceptionsCalculation(interceptions: number): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}