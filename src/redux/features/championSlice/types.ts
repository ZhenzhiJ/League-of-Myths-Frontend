export interface Champion {
  id: string;
  name: string;
  role: string;
  passive: string;
  abilityQ: string;
  abilityW: string;
  abilityE: string;
  ultimateR: string;
  image: string;
  imageBackup: string;
}

export interface ChampionState {
  champions: Champion[];
}
