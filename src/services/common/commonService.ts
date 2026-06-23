import { ICommon } from "../../interfaces/monitor/common/ICommon";

export abstract class CommonService implements ICommon {
    returnPlayedInAFLPenaltyCalculation(yearsPlayed: number): number {
        throw new Error("Method not implemented.");
    }
    returnMostValuablePlayerCalculation(timesAwarded: number): number {
        throw new Error("Method not implemented.");
    }
    returnFirstTeamAssociatedPressAllProSelectionCalculation(timesAwarded: number): number {
        throw new Error("Method not implemented.");
    }
    returnProBowlAccoladeCalculation(timesAwarded: number): number {
        throw new Error("Method not implemented.");
    }
    returnChampionshipsWonCalculation(championshipsAwarded: number): number {
        throw new Error("Method not implemented.");
    }
    returnWeightedApproximateValueCalculation(weightApproximateValue: number): number {
        throw new Error("Method not implemented.");
    }
    returnAmountOfTimesWasHallOfFameFinalistCalculation(numberOfNominations: number): number {
        throw new Error("Method not implemented.");
    }
    returnAmountOfTimesWasHallOfFameSemifinalistCalculation(numberOfNominations: number): number {
        throw new Error("Method not implemented.");
    }
}