import { IDefenseTeamAllDecadeSelection } from "../../../monitor/all-decade/IDefenseTeamAllDecadeSelection";
import { IDefensivePlayerOfTheYear } from "../../../monitor/defensive-player-of-the-year/IDefensivePlayerOfTheYear";
import { INoChampionshipsPenalty } from "../../../monitor/no-championships-penalty/INoChampionshipsPenalty";
import { ISacks } from "../../../monitor/sacks/ISacks";

export interface IOutsideLinebacker extends ISacks, IDefenseTeamAllDecadeSelection, IDefensivePlayerOfTheYear, INoChampionshipsPenalty {}