import { IWideReceiver } from "../../interfaces/positions/wide-receiver/IWideReceiver";
import { CommonService } from "../common/commonService";

export abstract class BaseWideReceiverService extends CommonService implements IWideReceiver {
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