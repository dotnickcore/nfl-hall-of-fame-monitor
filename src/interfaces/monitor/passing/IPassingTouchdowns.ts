export interface IPassingTouchdownsMonitor {
    returnPassingTouchdownsBefore1980Calculation(passingTouchdowns: number): number;
    returnPassingTouchdownsDuringOrAfter1980Calculation(passingTouchdowns: number): number;
};