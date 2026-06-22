import { INoChampionshipsPenalty } from "../../monitor/no-championships-penalty/INoChampionshipsPenalty";
import { IReceiving } from "../../monitor/receiving/IReceiving";

export interface IWideReceiver extends IReceiving, INoChampionshipsPenalty {}