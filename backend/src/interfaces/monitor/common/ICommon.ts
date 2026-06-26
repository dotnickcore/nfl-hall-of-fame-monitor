import { IAFLPenalty } from "./afl-penalty/IAFLPenalty";
import { IAllDecade } from "./all-decade/IAllDecade";
import { IChampionshipsWon } from "./championships-won/IChampionshipsWon";
import { IDefensivePlayerOfTheYear } from "./defensive-player-of-the-year/IDefensivePlayerOfTheYear";
import { IFirstTeamAssociatedPress } from "./first-team-associated-press/IFirstTeamAssociatedPress";
import { IHallOfFame } from "./hall-of-fame/IHallOfFame";
import { IMostValuablePlayer } from "./most-valuable-player/IMostValuablePlayer";
import { IProBowl } from "./pro-bowl/IProBowl";
import { IWeightedApproximateValue } from "./weighted-approximate-value/IWeightedApproximateValue";

export interface ICommon extends IAllDecade, IMostValuablePlayer, IFirstTeamAssociatedPress, IProBowl, IChampionshipsWon, IWeightedApproximateValue, IHallOfFame, IAFLPenalty, IDefensivePlayerOfTheYear {};