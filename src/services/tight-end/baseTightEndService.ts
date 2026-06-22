import { ITightEnd } from "../../interfaces/positions/tight-end/ITightEnd";

export abstract class BaseTightEndService implements ITightEnd {
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