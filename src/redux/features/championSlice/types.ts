export interface Champion {
  name: string;
  role: string;
  passive: string;
  abilityQ: string;
  abilityW: string;
  abilityE: string;
  ultimateR: string;
}

export interface ChampionState {
  champions: Champion[];
}
