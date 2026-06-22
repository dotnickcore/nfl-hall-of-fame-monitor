export interface IHallOfFameMonitor {
    returnAmountOfTimesWasHallOfFameFinalistCalculation(numberOfNominations: number): number;
    returnAmountOfTimesWasHallOfFameSemifinalistCalculation(numberOfNominations: number): number;
}