export interface IReceivingYardsMonitor {
    returnReceivingYardsBefore1980Calculation(receivingYards: number): number;
    returnReceivingYardsDuringOrAfter1980Calculation(receivingYards: number): number;
};
