import { IRunningBack } from "../../interfaces/positions/running-back/IRunningBack";

export abstract class RunningBackService implements IRunningBack {
    returnRushingYardsCalculation(rushingYards: number): number {
        throw new Error("Method not implemented.");
    }
    returnRushingTouchdownsCalculation(rushingTouchdowns: number): number {
        throw new Error("Method not implemented.");
    }
    returnNoChampionshipsPenaltyCalculation(): number {
        throw new Error("Method not implemented.");
    }
}