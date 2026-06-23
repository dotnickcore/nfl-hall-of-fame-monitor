import { IWideReceiver } from "../../../../interfaces/positions/offense/wide-receiver/IWideReceiver";
import { CommonService } from "../../../common/commonService";

export abstract class BaseWideReceiverService extends CommonService implements IWideReceiver {
    returnReceivingYardsMulitiplierCalculation(receivingYards: number): number {
        throw new Error("Method not implemented.");
    }
    returnReceivingTouchdownsMulitiplierCalculation(receivingTouchdowns: number): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}