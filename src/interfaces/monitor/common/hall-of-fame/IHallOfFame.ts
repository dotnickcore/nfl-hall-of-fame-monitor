export interface IHallOfFame {
    returnAmountOfTimesWasHallOfFameFinalistCalculation(numberOfNominations: number): number;
    returnAmountOfTimesWasHallOfFameSemifinalistCalculation(numberOfNominations: number): number;
}