import { IReceivingTouchdownsMonitor } from "./IReceivingTouchdowns";
import { IReceivingYardsMonitor } from "./IReceivingYards";

export interface IReceiving extends IReceivingYardsMonitor, IReceivingTouchdownsMonitor {};