export interface IReceivingTouchdownsMonitor {
    returnReceivingTouchdownsBefore1980Calculation(receivingTouchdowns: number): number;
    returnReceivingTouchdownsDuringOrAfter1980Calculation(receivingTouchdowns: number): number;
};