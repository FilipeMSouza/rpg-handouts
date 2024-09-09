export interface atributo {
  value: number;
  bonus: number;
  base: number;
  racial: number;
};

export interface Skill {
  label: string;
  value: number;
  atributo: string;
  treinado: boolean;
  penalidadeDeArmadura: boolean;
  treinamento: number;
  nivel: number;
  outros: number;
  notes: string;
  mod: number;
  temp: number;
  bonus: number;
  penalidade: number;
}

export interface CharAtributos {
  for: atributo;
  des: atributo;
  con: atributo;
  int: atributo;
  sab: atributo;
  car: atributo;
}

export interface PVPM {
  value: number;
  min: number;
  max: number;
  temp: number;
}

export interface Defense {
  base: number;
  value: number;
  outros: number;
  atributo: string;
  bonus: string[];
  penalidade: number;
  condi: number;
}

export interface Movement {
  burrow: number;
  climb: number;
  fly: number;
  swim: number;
  walk: number;
  hover: boolean;
}

export interface XP {
  value: number;
  min: number;
  proximo: number;
}

export interface CharacterLevel {
  value: number;
  xp: XP;
}

export interface Biography {
  value: string;
  public: string;
}

export interface CharacterDetails {
  biography: Biography;
  raca: string;
  divindade: string;
  origem: string;
}

export interface Item {
  name: string;
  type: string;
}

export interface Character {
  name: string;
  type: string;
  imagem: string;
  backStory: string;
  data: {
    tamanho: string;
    pericias: Skill[];
    atributos: {
      treino: number;
      pv: PVPM;
      pm: PVPM;
      charLvl: CharacterLevel;
      movement: Movement;
      defesa: Defense;
      sentidos: {
        value: string[];
        custom: string
      };
      conjuracao: string;
    };
    detalhes: CharacterDetails;
    rd: {
      value: number;
      base: number;
      temp: number;
      bonus: number;
      penalidade: number;
    };
    charAtributos: CharAtributos;
  };
  items: Item[];
}
