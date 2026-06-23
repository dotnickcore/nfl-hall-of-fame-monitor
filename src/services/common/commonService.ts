import { ICommon } from "../../interfaces/monitor/common/ICommon";

export abstract class CommonService implements ICommon {
    returnDefensivePlayerOfTheYearCalculation(timesAwarded: number): number {
        throw new Error("Method not implemented.");
    }
    returnFirstTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnSecondTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
    returnNoDesignationTeamSelectedCalculation(): number {
        throw new Error("Method not implemented.");
    }
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