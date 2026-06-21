interface BaseMonitor {
    returnMostValuablePlayerCalculation(timesAwarded: number): number;
    returnFirstTeamAssociatedPressAllProSelectionCalculation(timesAwarded: number): number;
    returnChampionshipsWonCalculation(championshipsAwarded: number): number;
    returnProBowlAccoladeCalculation(timesAwarded: number): number;
    returnWeightedApproximateValueCalculation(weightApproximateValue: number): number;
};

interface AllDecadeCalculation {
    returnFirstTeamSelectedCalculation(): number;
    returnSecondTeamSelectedCalculation(): number;
    returnNoDesignationTeamSelectedCalculation(): number;
}

interface OffenseTeamAllDecadeSelectionMonitor extends AllDecadeCalculation {}

interface DefenseTeamAllDecadeSelectionMonitor extends AllDecadeCalculation {}

interface SepcialTeamsAllDecadeSelectionMonitor extends AllDecadeCalculation {}

interface HallOfFameFinalistMonitor {
    returnAmountOfTimesWasHallOfFameFinalistCalculation(numberOfNominations: number): number;
    returnAmountOfTimesWasHallOfFameSemifinalistCalculation(numberOfNominations: number): number;
}

interface PlayedInAFLPenaltyMonitor {
    returnPlayedInAFLPenaltyCalculation(yearsPlayed: number): number;
}

interface NoChampionshipsPenaltyMonitor {
    returnNoChampionshipsPenaltyCalculation(): number;
}

interface DefensivePlayerOfTheYearMonitor {
    returnDefensivePlayerOfTheYearCalculation(timesAwarded: number): number;
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
    returnSacksCalculation(sacksMade: number): number;
}

interface InterceptionsMonitor {
    returnInterceptionsCalculation(interceptions: number): number;
}

interface KickerMonitor {
    returnFieldGoalsMadeBefore1980Calculation(goalsMade: number): number;
    returnFieldGoalsMadeDuringOrAfter1980Calculation(goalsMade: number): number;
}