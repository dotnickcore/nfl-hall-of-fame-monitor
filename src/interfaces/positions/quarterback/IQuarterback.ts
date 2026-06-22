import { INoChampionshipsPenalty } from '../../monitor/no-championships-penalty/INoChampionshipsPenalty';
import { IPassing } from '../../monitor/passing/IPassing';

export interface IQuarterback extends IPassing, INoChampionshipsPenalty {
  returnSuperBowlLossesCalculation(timesLostSuperBowl: number): number;
}
