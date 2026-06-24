import { SACKS_MULTIPLIR, NO_CHAMPIONSHIPS_PENALTY } from "../../../../consts/positions/defense/outsider-linebacker/outsideLinebacker";
import { IOutsideLinebacker } from "../../../../interfaces/positions/defense/outside-linebacker/IOutsideLinebacker";
import { CommonService } from "../../../common/commonService";

export abstract class BaseOutsideLinebackerService extends CommonService implements IOutsideLinebacker {
    returnSacksCalculation(sacksMade: number): number {
        return sacksMade * SACKS_MULTIPLIR;
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY;
    }
}