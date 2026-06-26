const PERCENTAGE = 0.33;

export function isPercentageOver(numberOfFirstTeamAllProsWon: number, careerStarts: number): boolean {
    return (numberOfFirstTeamAllProsWon / careerStarts) > PERCENTAGE;
}