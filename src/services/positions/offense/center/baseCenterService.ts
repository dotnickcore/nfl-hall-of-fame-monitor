import { CommonService } from "../../../common/commonService";
import { ICenter } from "../../../../interfaces/positions/offense/center/ICenter";

export abstract class BaseCenterService extends CommonService implements ICenter {
    returnFirstTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnSecondTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnNoDesignationTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
}