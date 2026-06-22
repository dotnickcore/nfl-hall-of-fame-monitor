import { IWideReceiver } from "../../interfaces/positions/wide-receiver/IWideReceiver";

export abstract class BaseWideReceiverService implements IWideReceiver {
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
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
    
}