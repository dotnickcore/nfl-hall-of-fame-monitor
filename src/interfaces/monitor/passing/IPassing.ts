import { IPassingTouchdownsMonitor } from "./IPassingTouchdowns";
import { IPassingYardsMonitor } from "./IPassingYards";

export interface IPassing extends IPassingYardsMonitor, IPassingTouchdownsMonitor {}