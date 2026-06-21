interface BaseMonitor {
    
};

interface NoChampionshipsPenaltyMonitor {
    returnNoChampionshipsPenaltyCalculation(): number;
}

interface PassingYardsMonitor {
    returnPassingYardsBefore1980Calculation(passingYards: number): number;
    returnPassingYardsDuringOrAfter1980Calculation(passingYards: number): number;
};

interface PassingTouchdownsMonitor {
    returnPassingTouchdownsBefore1980Calculation(passingTouchdowns: number): number;
    returnPassingTouchdownsDuringOrAfter1980Calculation(passingTouchdowns: number): number;
};

interface RushingMonitor {
    returnRushingYardsCalculation(rushingYards: number): number;
}

interface RushingTouchdownsMonitor {
    returnRushingTouchdownsCalculation(rushingTouchdowns: number): number;
}

interface ReceivingYardsMonitor {
    returnReceivingYardsBefore1980Calculation(receivingYards: number): number;
    returnReceivingYardsDuringOrAfter1980Calculation(receivingYards: number): number;
};

interface ReceivingTouchdownsMonitor {
    returnReceivingTouchdownsBefore1980Calculation(receivingTouchdowns: number): number;
    returnReceivingTouchdownsDuringOrAfter1980Calculation(receivingTouchdowns: number): number;
};

interface SacksMonitor {
    returnSacksCalculation(): number;
}

interface InterceptionsMonitor {
    returnInterceptionsCalculation(): number;
}

interface KickerMonitor {
    returnFieldGoalsMadeCalculation(debutYear: string): number;
}