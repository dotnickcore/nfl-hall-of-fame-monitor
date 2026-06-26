import { NO_CHAMPIONSHIPS_PENALTY, RECEIVING_TOUCHDOWNS_MULTIPLIER, RECEIVING_YARDS_MULTIPLIER } from "../../../../consts/positions/offense/wide-receiver/wideReceiver";
import { IWideReceiver } from "../../../../interfaces/positions/offense/wide-receiver/IWideReceiver";
import { CommonService } from "../../../common/commonService";

export class WideReceiverService extends CommonService implements IWideReceiver {
    returnReceivingYardsMulitiplierCalculation(receivingYards: number): number {
        return receivingYards * RECEIVING_YARDS_MULTIPLIER
    }
    returnReceivingTouchdownsMulitiplierCalculation(receivingTouchdowns: number): number {
        return receivingTouchdowns * RECEIVING_TOUCHDOWNS_MULTIPLIER;
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        return NO_CHAMPIONSHIPS_PENALTY
    }
}