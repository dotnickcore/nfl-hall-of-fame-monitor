import { IInsideLinebacker } from "../../../../interfaces/positions/defense/inside-linebacker/IInsideLinebacker";
import { CommonService } from "../../../common/commonService";

export abstract class BaseInsideLinebackerService extends CommonService implements IInsideLinebacker {
    returnInterceptionsCalculation(interceptions: number): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}