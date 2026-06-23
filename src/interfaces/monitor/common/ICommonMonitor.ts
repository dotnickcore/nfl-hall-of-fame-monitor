import { IHallOfFame } from "./hall-of-fame/IHallOfFame";
import { IChampionshipsWon } from "./championships-won/IChampionshipsWon";
import { IFirstTeamAssociatedPress } from "./first-team-associated-press/IFirstTeamAssociatedPress";
import { IMostValuablePlayer } from "./most-valuable-player/IMostValuablePlayer";
import { IProBowl } from "./pro-bowl/IProBowl";
import { IWeightedApproximateValue } from "./weighted-approximate-value/IWeightedApproximateValue";
import { IAFLPenalty } from "./afl-penalty/IAFLPenalty";

export interface ICommonMonitor extends IMostValuablePlayer, IFirstTeamAssociatedPress, IProBowl, IChampionshipsWon, IWeightedApproximateValue, IHallOfFame, IAFLPenalty {};