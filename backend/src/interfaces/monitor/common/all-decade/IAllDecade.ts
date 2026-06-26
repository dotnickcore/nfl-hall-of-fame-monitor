export interface IAllDecade {
    returnOffenseFirstTeamSelectedCalculation(timesAwarded: number): number;
    returnDefenseFirstTeamSelectedCalculation(timesAwarded: number): number;
    returnSpecialTeamsFirstTeamSelectedCalculation(timesAwarded: number): number;
    returnOffenseSecondTeamSelectedCalculation(timesAwarded: number): number;
    returnDefenseSecondTeamSelectedCalculation(timesAwarded: number): number;
    returnSpecialTeamsSecondTeamSelectedCalculation(timesAwarded: number): number;
    returnOffenseNoDesignationTeamSelectedCalculation(timesAwarded: number): number;
    returnDefenseNoDesignationTeamSelectedCalculation(timesAwarded: number): number;
    returnSpecialTeamsNoDesignationTeamSelectedCalculation(timesAwarded: number): number;
}