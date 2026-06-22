import { IRushingYardsMonitor } from "./IRushingYards";
import { IRushingTouchdownsMonitor } from "./IRushingTouchdowns";

export interface IRushing extends IRushingYardsMonitor, IRushingTouchdownsMonitor {}