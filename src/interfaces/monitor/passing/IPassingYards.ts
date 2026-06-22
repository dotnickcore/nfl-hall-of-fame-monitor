export interface IPassingYardsMonitor {
    returnPassingYardsBefore1980Calculation(passingYards: number): number;
    returnPassingYardsDuringOrAfter1980Calculation(passingYards: number): number;
};