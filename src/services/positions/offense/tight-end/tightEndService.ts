import { RECEIVING_TOUCHDOWNS_MULTIPLIER, RECEIVING_YARDS_MULTIPLIER } from "../../../../consts/positions/offense/tight-end/tightEnd";
import { ITightEnd } from "../../../../interfaces/positions/offense/tight-end/ITightEnd";
import { CommonService } from "../../../common/commonService";

export abstract class TightEndService extends CommonService implements ITightEnd {
    returnReceivingYardsMulitiplierCalculation(receivingYards: number): number {
        return receivingYards * RECEIVING_YARDS_MULTIPLIER;
    }
    returnReceivingTouchdownsMulitiplierCalculation(receivingTouchdowns: number): number {
        return receivingTouchdowns * RECEIVING_TOUCHDOWNS_MULTIPLIER
    }
}