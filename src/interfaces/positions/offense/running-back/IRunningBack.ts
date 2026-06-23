import { IOffenseTeamAllDecadeSelection } from "../../../monitor/all-decade/IOffenseTeamAllDecadeSelection";
import { INoChampionshipsPenalty } from "../../../monitor/no-championships-penalty/INoChampionshipsPenalty";
import { IRushing } from "../../../monitor/rushing/IRushing";

export interface IRunningBack extends IRushing, IOffenseTeamAllDecadeSelection, INoChampionshipsPenalty {}