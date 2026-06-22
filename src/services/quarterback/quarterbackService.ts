import { IQuarterback } from "../../interfaces/positions/IQuarterback";

export abstract class QuarterbackService implements IQuarterback {
    returnSuperBowlLossesCalculation(timesLostSuperBowl: number): number {
        throw new Error("Method not implemented.");
    }
    returnPassingYardsBefore1980Calculation(passingYards: number): number {
        throw new Error("Method not implemented.");
    }
    returnPassingYardsDuringOrAfter1980Calculation(passingYards: number): number {
        throw new Error("Method not implemented.");
    }
    returnPassingTouchdownsBefore1980Calculation(passingTouchdowns: number): number {
        throw new Error("Method not implemented.");
    }
    returnPassingTouchdownsDuringOrAfter1980Calculation(passingTouchdowns: number): number {
        throw new Error("Method not implemented.");
    }
}