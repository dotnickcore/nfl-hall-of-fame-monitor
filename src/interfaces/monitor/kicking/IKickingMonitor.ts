export interface IKickingMonitor {
    returnFieldGoalsMadeBefore1980Calculation(goalsMade: number): number;
    returnFieldGoalsMadeDuringOrAfter1980Calculation(goalsMade: number): number;
}