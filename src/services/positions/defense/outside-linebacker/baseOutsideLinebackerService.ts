import { IOutsideLinebacker } from "../../../../interfaces/positions/defense/outside-linebacker/IOutsideLinebacker";
import { CommonService } from "../../../common/commonService";

export abstract class BaseOutsideLinebackerService extends CommonService implements IOutsideLinebacker {
    returnSacksCalculation(sacksMade: number): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}