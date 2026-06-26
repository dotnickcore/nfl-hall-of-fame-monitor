import { IKicker } from "../../../../interfaces/positions/special/kicker/IKicker";
import { FIELD_GOALS_MULTIPLIER } from "../../../../consts/positions/special/kicker/kicker";
import { CommonService } from "../../../common/commonService";

export class KickerService extends CommonService implements IKicker {
    returnFieldGoalsMadeMulitiplierCalculation(goalsMade: number): number {
        return goalsMade * FIELD_GOALS_MULTIPLIER;
    }
}