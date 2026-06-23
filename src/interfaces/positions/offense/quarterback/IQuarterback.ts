import { IOffenseTeamAllDecadeSelection } from '../../../monitor/all-decade/IOffenseTeamAllDecadeSelection';
import { INoChampionshipsPenalty } from '../../../monitor/no-championships-penalty/INoChampionshipsPenalty';
import { IPassing } from '../../../monitor/passing/IPassing';

export interface IQuarterback
  extends IPassing, IOffenseTeamAllDecadeSelection, INoChampionshipsPenalty {
  returnSuperBowlLossesCalculation(timesLostSuperBowl: number): number;
}
