import { IDefenseTeamAllDecadeSelection } from "./IDefenseTeamAllDecadeSelection";
import { IOffenseTeamAllDecadeSelection } from "./IOffenseTeamAllDecadeSelection";
import { ISpecialTeamsAllDecadeSelection } from "./ISpecialTeamsAllDecadeSelection";

export interface IAllDecadeTeamSelection extends IOffenseTeamAllDecadeSelection, IDefenseTeamAllDecadeSelection, ISpecialTeamsAllDecadeSelection {}