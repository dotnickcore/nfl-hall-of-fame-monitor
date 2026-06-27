import {
  RECEIVING_TOUCHDOWNS_MULTIPLIER,
  RECEIVING_YARDS_MULTIPLIER,
} from '../../../../../consts/positions/offense/tight-end/tightEnd.js';
import { ITightEnd } from '../../../../../interfaces/positions/offense/tight-end/ITightEnd.js';
import { CommonService } from '../../../common/commonService.js';

export abstract class TightEndService
  extends CommonService
  implements ITightEnd
{
  returnReceivingYardsMulitiplierCalculation(receivingYards: number): number {
    return receivingYards * RECEIVING_YARDS_MULTIPLIER;
  }
  returnReceivingTouchdownsMulitiplierCalculation(
    receivingTouchdowns: number,
  ): number {
    return receivingTouchdowns * RECEIVING_TOUCHDOWNS_MULTIPLIER;
  }
}
