export abstract class PlayerProcessor<T> {

    constructor(public statistics: T) {}

    abstract calculatePlayerHOFMonitorScore(): number;
}