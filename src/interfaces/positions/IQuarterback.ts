import { IPassing } from "../monitor/passing/IPassing";

export interface IQuarterback extends IPassing {
    returnSuperBowlLossesCalculation(timesLostSuperBowl: number): number;
}