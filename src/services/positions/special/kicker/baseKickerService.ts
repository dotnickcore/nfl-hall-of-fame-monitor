import { IKicker } from "../../../../interfaces/positions/special/kicker/IKicker";
import { CommonService } from "../../../common/commonService";

export abstract class BaseKickerService extends CommonService implements IKicker {
    returnFieldGoalsMadeBefore1980Calculation(goalsMade: number): number {
        throw new Error("Method not implemented.");
    }
    returnFieldGoalsMadeDuringOrAfter1980Calculation(goalsMade: number): number {
        throw new Error("Method not implemented.");
    }
}