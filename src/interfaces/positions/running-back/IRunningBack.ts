import { INoChampionshipsPenalty } from "../../monitor/no-championships-penalty/INoChampionshipsPenalty";
import { IRushing } from "../../monitor/rushing/IRushing";

export interface IRunningBack extends IRushing, INoChampionshipsPenalty {}