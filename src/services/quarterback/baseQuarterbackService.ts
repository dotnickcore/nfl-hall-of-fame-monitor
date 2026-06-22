import { IQuarterback } from '../../interfaces/positions/quarterback/IQuarterback';
import { CommonService } from '../common/commonService';

export abstract class BaseQuarterbackService extends CommonService implements IQuarterback {
  returnNoChampionshipsPenaltyCalculation(): number {
    throw new Error('Method not implemented.');
  }
  returnSuperBowlLossesCalculation(timesLostSuperBowl: number): number {
    throw new Error('Method not implemented.');
  }
  returnPassingYardsBefore1980Calculation(passingYards: number): number {
    throw new Error('Method not implemented.');
  }
  returnPassingYardsDuringOrAfter1980Calculation(passingYards: number): number {
    throw new Error('Method not implemented.');
  }
  returnPassingTouchdownsBefore1980Calculation(
    passingTouchdowns: number,
  ): number {
    throw new Error('Method not implemented.');
  }
  returnPassingTouchdownsDuringOrAfter1980Calculation(
    passingTouchdowns: number,
  ): number {
    throw new Error('Method not implemented.');
  }
}
