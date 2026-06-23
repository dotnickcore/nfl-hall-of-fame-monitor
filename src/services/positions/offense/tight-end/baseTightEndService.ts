import { ITightEnd } from "../../../../interfaces/positions/offense/tight-end/ITightEnd";
import { CommonService } from "../../../common/commonService";

export abstract class BaseTightEndService extends CommonService implements ITightEnd {
    returnReceivingYardsMulitiplierCalculation(receivingYards: number): number {
        throw new Error("Method not implemented.");
    }
    returnReceivingTouchdownsMulitiplierCalculation(receivingTouchdowns: number): number {
        throw new Error("Method not implemented.");
    }

}