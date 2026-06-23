import { IDefenseTeamAllDecadeSelection } from "../../../monitor/all-decade/IDefenseTeamAllDecadeSelection";
import { IDefensivePlayerOfTheYear } from "../../../monitor/defensive-player-of-the-year/IDefensivePlayerOfTheYear";
import { IInterceptions } from "../../../monitor/interceptions/IInterceptions";
import { INoChampionshipsPenalty } from "../../../monitor/no-championships-penalty/INoChampionshipsPenalty";

export interface IInsideLinebacker extends IInterceptions, IDefenseTeamAllDecadeSelection, IDefensivePlayerOfTheYear, INoChampionshipsPenalty {}