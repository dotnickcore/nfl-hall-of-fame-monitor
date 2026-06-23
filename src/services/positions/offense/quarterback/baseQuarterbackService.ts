import { IQuarterback } from '../../../../interfaces/positions/offense/quarterback/IQuarterback';
import { CommonService } from '../../../common/commonService';

export abstract class BaseQuarterbackService extends CommonService implements IQuarterback {
  returnFirstTeamSelectedCalculation(): number {
    throw new Error('Method not implemented.');
  }
  returnSecondTeamSelectedCalculation(): number {
    throw new Error('Method not implemented.');
  }
  returnNoDesignationTeamSelectedCalculation(): number {
    throw new Error('Method not implemented.');
  }
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
  returnPassingTouchdownsBefore1980Calculation(passingTouchdowns: number): number {
    throw new Error('Method not implemented.');
  }
  returnPassingTouchdownsDuringOrAfter1980Calculation(passingTouchdowns: number): number {
    throw new Error('Method not implemented.');
  }
}
