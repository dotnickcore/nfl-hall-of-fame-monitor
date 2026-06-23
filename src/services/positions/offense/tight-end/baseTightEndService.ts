import { ITightEnd } from "../../../../interfaces/positions/offense/tight-end/ITightEnd";
import { CommonService } from "../../../common/commonService";

export abstract class BaseTightEndService extends CommonService implements ITightEnd {
    returnFirstTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnSecondTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnNoDesignationTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnReceivingYardsBefore1980Calculation(receivingYards: number): number {
        throw new Error("Method not implemented.");
    }
    returnReceivingYardsDuringOrAfter1980Calculation(receivingYards: number): number {
        throw new Error("Method not implemented.");
    }
    returnReceivingTouchdownsBefore1980Calculation(receivingTouchdowns: number): number {
        throw new Error("Method not implemented.");
    }
    returnReceivingTouchdownsDuringOrAfter1980Calculation(receivingTouchdowns: number): number {
        throw new Error("Method not implemented.");
    } 
}