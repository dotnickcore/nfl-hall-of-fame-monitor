import {
  CHAMPIONSHIPS_WON_MULTIPLIER,
  DEFENSE_TEAMS_OTHER_SELECTION,
  DEFENSIVE_PLAYER_MULTIPLIER,
  EACH_YEAR_PLAYED_IN_AFL_PENALTY,
  FIRST_TEAM_DEFENSE_SELECTION,
  FIRST_TEAM_OFFENSE_SELECTION,
  FIRST_TEAM_SPECIAL_TEAMS_SELECTION,
  HALL_OF_FAME_BALLOT_FINALIST_BONUS,
  HALL_OF_FAME_BALLOT_SEMIFINALIST_BONUS,
  MOST_VALUABLE_PLAYER_MULTIPLIER,
  OFFENSE_TEAMS_OTHER_SELECTION,
  PRO_BOWL_MULTIPLIER,
  PRO_FOOTBALL_HALL_OF_FAME_ALL_DECADE_SELECTIONS_BONUS,
  SECOND_TEAM_DEFENSE_SELECTION,
  SECOND_TEAM_OFFENSE_SELECTION,
  SECOND_TEAM_SPECIAL_TEAMS_SELECTION,
  SPECIAL_TEAMS_OTHER_SELECTION,
  WEIGHTED_APPROXIMATE_VALUE_MULTIPLIER,
  ZERO,
} from '../../../consts/common/common.js';
import { ICommon } from '../../../interfaces/monitor/common/ICommon.js';
import { isPercentageOver } from '../../../utils/isPercentageOver.js';

export abstract class CommonService implements ICommon {
  returnOffenseFirstTeamSelectedCalculation(timesAwarded: number): number {
    return timesAwarded * FIRST_TEAM_OFFENSE_SELECTION;
  }
  returnDefenseFirstTeamSelectedCalculation(timesAwarded: number): number {
    return timesAwarded * FIRST_TEAM_DEFENSE_SELECTION;
  }
  returnSpecialTeamsFirstTeamSelectedCalculation(timesAwarded: number): number {
    return timesAwarded * FIRST_TEAM_SPECIAL_TEAMS_SELECTION;
  }
  returnOffenseSecondTeamSelectedCalculation(timesAwarded: number): number {
    return timesAwarded * SECOND_TEAM_OFFENSE_SELECTION;
  }
  returnDefenseSecondTeamSelectedCalculation(timesAwarded: number): number {
    return timesAwarded * SECOND_TEAM_DEFENSE_SELECTION;
  }
  returnSpecialTeamsSecondTeamSelectedCalculation(
    timesAwarded: number,
  ): number {
    return timesAwarded * SECOND_TEAM_SPECIAL_TEAMS_SELECTION;
  }
  returnOffenseNoDesignationTeamSelectedCalculation(
    timesAwarded: number,
  ): number {
    return timesAwarded * OFFENSE_TEAMS_OTHER_SELECTION;
  }
  returnDefenseNoDesignationTeamSelectedCalculation(
    timesAwarded: number,
  ): number {
    return timesAwarded * DEFENSE_TEAMS_OTHER_SELECTION;
  }
  returnSpecialTeamsNoDesignationTeamSelectedCalculation(
    timesAwarded: number,
  ): number {
    return timesAwarded * SPECIAL_TEAMS_OTHER_SELECTION;
  }
  returnDefensivePlayerOfTheYearCalculation(timesAwarded: number): number {
    return timesAwarded * DEFENSIVE_PLAYER_MULTIPLIER;
  }
  returnPlayedInAFLPenaltyCalculation(yearsPlayed: number): number {
    return yearsPlayed * EACH_YEAR_PLAYED_IN_AFL_PENALTY;
  }
  returnMostValuablePlayerCalculation(timesAwarded: number): number {
    return timesAwarded * MOST_VALUABLE_PLAYER_MULTIPLIER;
  }
  returnFirstTeamAssociatedPressAllProSelectionCalculation(
    careeringStartingSeasons: number,
    timesAwarded: number,
  ): number {
    if (isPercentageOver(timesAwarded, careeringStartingSeasons))
      return PRO_FOOTBALL_HALL_OF_FAME_ALL_DECADE_SELECTIONS_BONUS;
    return ZERO;
  }
  returnProBowlAccoladeCalculation(timesAwarded: number): number {
    return timesAwarded * PRO_BOWL_MULTIPLIER;
  }
  returnChampionshipsWonCalculation(championshipsAwarded: number): number {
    return championshipsAwarded * CHAMPIONSHIPS_WON_MULTIPLIER;
  }
  returnWeightedApproximateValueCalculation(
    weightApproximateValue: number,
  ): number {
    return weightApproximateValue * WEIGHTED_APPROXIMATE_VALUE_MULTIPLIER;
  }
  returnAmountOfTimesWasHallOfFameFinalistCalculation(
    numberOfNominations: number,
  ): number {
    return numberOfNominations * HALL_OF_FAME_BALLOT_FINALIST_BONUS;
  }
  returnAmountOfTimesWasHallOfFameSemifinalistCalculation(
    numberOfNominations: number,
  ): number {
    return numberOfNominations * HALL_OF_FAME_BALLOT_SEMIFINALIST_BONUS;
  }
}
