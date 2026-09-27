import React from 'react';
import {
  AnilloIcon,
  PelotaIcon,
  AvionIcon,
  SolIcon,
  BarcoIcon,
  BallenaIcon,
  BotaIcon,
  ManzanaIcon,
  CasaIcon,
  CaracolIcon,
  ConejoIcon,
  PatoIcon,
  DadoIcon,
  DienteIcon,
  DelfinIcon,
  FlorIcon,
  EstrellaIcon,
  ElefanteIcon,
  EscaleraIcon,
  LunaIcon,
  FocaIcon,
  FresaIcon,
  FuegoIcon,
  GatoIcon,
  GorraIcon,
  GusanoIcon,
  HojaIcon,
  HuevoIcon,
  HadaIcon,
  IslaIcon,
  IgluIcon,
  ImanIcon,
  JirafaIcon,
  JarraIcon,
  JugueteIcon,
  KoalaIcon,
  KiwiIcon,
  KimonoIcon,
  LeonIcon,
  LapizIcon,
  LamparaIcon,
  MonoIcon,
  MariposaIcon,
  MesaIcon,
  NubeIcon,
  NidoIcon,
  NaranjaIcon,
  OsoIcon,
  OjoIcon,
  OllaIcon,
  PezIcon,
  PinaIcon,
  QuesoIcon,
  QuetzalIcon,
  QuitasolIcon,
  RatonIcon,
  RelojIcon,
  RanaIcon,
  SillaIcon,
  SerpienteIcon,
  SopaIcon,
  TortugaIcon,
  TomateIcon,
  TamborIcon,
  UvasIcon,
  UnicornioIcon,
  UnaIcon,
  VacaIcon,
  VelaIcon,
  VolcanIcon,
  WafleIcon,
  WaterpoloIcon,
  WebIcon,
  XilofonoIcon,
  RayosXIcon,
  TaxiIcon,
  YoyoIcon,
  YateIcon,
  YogurIcon,
  ZorroIcon,
  ZapatoIcon,
  ZanahoriaIcon
} from '../components/ActivityIllustrations.tsx';

export type InteractiveLetter = 
  | 'A' | 'B' | 'C' | 'D' | 'E' 
  | 'F' | 'G' | 'H' | 'I' | 'J' 
  | 'K' | 'L' | 'M' | 'N' | 'O' 
  | 'P' | 'Q' | 'R' | 'S' | 'T' 
  | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export interface InteractiveLetterConfig {
  letter: InteractiveLetter;
  letterLower: string;
  name: string;
  bgHeader: string;
  textColor: string;
  bubbles: Array<{ id: number; char: string; isTarget: boolean }>;
  soundQuestion: {
    question: string;
    wordSyllables: string;
    IconComponent: React.FC<{ className?: string }>;
    choices: Array<{ char: string; isCorrect: boolean }>;
  };
  fillWord: {
    prefix?: string;
    wordRemainder: string;
    fullWord: string;
    IconComponent: React.FC<{ className?: string }>;
    choices: Array<{ char: string; isCorrect: boolean }>;
  };
  soundCards: Array<{
    name: string;
    hint: string;
    isCorrect: boolean;
    Component: React.FC<{ className?: string }>;
  }>;
}

export const ALL_INTERACTIVE_LETTERS: InteractiveLetter[] = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z'
];

export const INTERACTIVE_GAMES_DATA: Record<InteractiveLetter, InteractiveLetterConfig> = {
  // ================= A =================
  A: {
    letter: 'A',
    letterLower: 'a',
    name: 'Letra A',
    bgHeader: 'from-rose-500 to-red-500',
    textColor: 'text-rose-500',
    bubbles: [
      { id: 1, char: 'A', isTarget: true }, { id: 2, char: 'O', isTarget: false },
      { id: 3, char: 'a', isTarget: true }, { id: 4, char: 'E', isTarget: false },
      { id: 5, char: 'A', isTarget: true }, { id: 6, char: 'U', isTarget: false },
      { id: 7, char: 'a', isTarget: true }, { id: 8, char: 'M', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza AVIÓN?',
      wordSyllables: 'A - VI - ÓN',
      IconComponent: AvionIcon,
      choices: [{ char: 'A', isCorrect: true }, { char: 'M', isCorrect: false }, { char: 'P', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'N I L L O',
      fullWord: 'ANILLO',
      IconComponent: AnilloIcon,
      choices: [{ char: 'A', isCorrect: true }, { char: 'E', isCorrect: false }, { char: 'I', isCorrect: false }]
    },
    soundCards: [
      { name: 'ANILLO', hint: 'A - ni - llo', isCorrect: true, Component: AnilloIcon },
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: false, Component: PelotaIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon }
    ]
  },

  // ================= B =================
  B: {
    letter: 'B',
    letterLower: 'b',
    name: 'Letra B',
    bgHeader: 'from-sky-500 to-blue-600',
    textColor: 'text-sky-600',
    bubbles: [
      { id: 1, char: 'B', isTarget: true }, { id: 2, char: 'D', isTarget: false },
      { id: 3, char: 'b', isTarget: true }, { id: 4, char: 'P', isTarget: false },
      { id: 5, char: 'B', isTarget: true }, { id: 6, char: 'R', isTarget: false },
      { id: 7, char: 'b', isTarget: true }, { id: 8, char: 'O', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza BARCO?',
      wordSyllables: 'BAR - CO',
      IconComponent: BarcoIcon,
      choices: [{ char: 'D', isCorrect: false }, { char: 'B', isCorrect: true }, { char: 'P', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'O T A',
      fullWord: 'BOTA',
      IconComponent: BotaIcon,
      choices: [{ char: 'B', isCorrect: true }, { char: 'D', isCorrect: false }, { char: 'L', isCorrect: false }]
    },
    soundCards: [
      { name: 'MANZANA', hint: 'Man - za - na', isCorrect: false, Component: ManzanaIcon },
      { name: 'BALLENA', hint: 'Ba - lle - na', isCorrect: true, Component: BallenaIcon },
      { name: 'LUNA', hint: 'Lu - na', isCorrect: false, Component: LunaIcon }
    ]
  },

  // ================= C =================
  C: {
    letter: 'C',
    letterLower: 'c',
    name: 'Letra C',
    bgHeader: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-600',
    bubbles: [
      { id: 1, char: 'C', isTarget: true }, { id: 2, char: 'O', isTarget: false },
      { id: 3, char: 'c', isTarget: true }, { id: 4, char: 'G', isTarget: false },
      { id: 5, char: 'C', isTarget: true }, { id: 6, char: 'Q', isTarget: false },
      { id: 7, char: 'c', isTarget: true }, { id: 8, char: 'U', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza CASA?',
      wordSyllables: 'CA - SA',
      IconComponent: CasaIcon,
      choices: [{ char: 'S', isCorrect: false }, { char: 'C', isCorrect: true }, { char: 'K', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'O N E J O',
      fullWord: 'CONEJO',
      IconComponent: ConejoIcon,
      choices: [{ char: 'C', isCorrect: true }, { char: 'G', isCorrect: false }, { char: 'O', isCorrect: false }]
    },
    soundCards: [
      { name: 'PATO', hint: 'Pa - to', isCorrect: false, Component: PatoIcon },
      { name: 'CARACOL', hint: 'Ca - ra - col', isCorrect: true, Component: CaracolIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon }
    ]
  },

  // ================= D =================
  D: {
    letter: 'D',
    letterLower: 'd',
    name: 'Letra D',
    bgHeader: 'from-purple-500 to-indigo-600',
    textColor: 'text-purple-600',
    bubbles: [
      { id: 1, char: 'D', isTarget: true }, { id: 2, char: 'B', isTarget: false },
      { id: 3, char: 'd', isTarget: true }, { id: 4, char: 'P', isTarget: false },
      { id: 5, char: 'D', isTarget: true }, { id: 6, char: 'Q', isTarget: false },
      { id: 7, char: 'd', isTarget: true }, { id: 8, char: 'T', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza DIENTE?',
      wordSyllables: 'DIEN - TE',
      IconComponent: DienteIcon,
      choices: [{ char: 'B', isCorrect: false }, { char: 'T', isCorrect: false }, { char: 'D', isCorrect: true }]
    },
    fillWord: {
      wordRemainder: 'A D O',
      fullWord: 'DADO',
      IconComponent: DadoIcon,
      choices: [{ char: 'B', isCorrect: false }, { char: 'D', isCorrect: true }, { char: 'P', isCorrect: false }]
    },
    soundCards: [
      { name: 'BARCO', hint: 'Bar - co', isCorrect: false, Component: BarcoIcon },
      { name: 'FLOR', hint: 'Flor', isCorrect: false, Component: FlorIcon },
      { name: 'DELFÍN', hint: 'Del - fín', isCorrect: true, Component: DelfinIcon }
    ]
  },

  // ================= E =================
  E: {
    letter: 'E',
    letterLower: 'e',
    name: 'Letra E',
    bgHeader: 'from-amber-400 to-orange-500',
    textColor: 'text-amber-500',
    bubbles: [
      { id: 1, char: 'E', isTarget: true }, { id: 2, char: 'F', isTarget: false },
      { id: 3, char: 'e', isTarget: true }, { id: 4, char: 'L', isTarget: false },
      { id: 5, char: 'E', isTarget: true }, { id: 6, char: 'I', isTarget: false },
      { id: 7, char: 'e', isTarget: true }, { id: 8, char: 'T', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza ELEFANTE?',
      wordSyllables: 'E - LE - FAN - TE',
      IconComponent: ElefanteIcon,
      choices: [{ char: 'A', isCorrect: false }, { char: 'E', isCorrect: true }, { char: 'I', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'S T R E L L A',
      fullWord: 'ESTRELLA',
      IconComponent: EstrellaIcon,
      choices: [{ char: 'A', isCorrect: false }, { char: 'E', isCorrect: true }, { char: 'I', isCorrect: false }]
    },
    soundCards: [
      { name: 'LUNA', hint: 'Lu - na', isCorrect: false, Component: LunaIcon },
      { name: 'ESCALERA', hint: 'Es - ca - le - ra', isCorrect: true, Component: EscaleraIcon },
      { name: 'FLOR', hint: 'Flor', isCorrect: false, Component: FlorIcon }
    ]
  },

  // ================= F =================
  F: {
    letter: 'F',
    letterLower: 'f',
    name: 'Letra F',
    bgHeader: 'from-rose-500 to-red-600',
    textColor: 'text-rose-600',
    bubbles: [
      { id: 1, char: 'F', isTarget: true }, { id: 2, char: 'E', isTarget: false },
      { id: 3, char: 'f', isTarget: true }, { id: 4, char: 'T', isTarget: false },
      { id: 5, char: 'F', isTarget: true }, { id: 6, char: 'P', isTarget: false },
      { id: 7, char: 'f', isTarget: true }, { id: 8, char: 'L', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza FOCA?',
      wordSyllables: 'FO - CA',
      IconComponent: FocaIcon,
      choices: [{ char: 'P', isCorrect: false }, { char: 'F', isCorrect: true }, { char: 'T', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'R E S A',
      fullWord: 'FRESA',
      IconComponent: FresaIcon,
      choices: [{ char: 'F', isCorrect: true }, { char: 'P', isCorrect: false }, { char: 'B', isCorrect: false }]
    },
    soundCards: [
      { name: 'FUEGO', hint: 'Fue - go', isCorrect: true, Component: FuegoIcon },
      { name: 'GATO', hint: 'Ga - to', isCorrect: false, Component: GatoIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon }
    ]
  },

  // ================= G =================
  G: {
    letter: 'G',
    letterLower: 'g',
    name: 'Letra G',
    bgHeader: 'from-lime-500 to-green-600',
    textColor: 'text-green-600',
    bubbles: [
      { id: 1, char: 'G', isTarget: true }, { id: 2, char: 'C', isTarget: false },
      { id: 3, char: 'g', isTarget: true }, { id: 4, char: 'Q', isTarget: false },
      { id: 5, char: 'G', isTarget: true }, { id: 6, char: 'O', isTarget: false },
      { id: 7, char: 'g', isTarget: true }, { id: 8, char: 'J', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza GATO?',
      wordSyllables: 'GA - TO',
      IconComponent: GatoIcon,
      choices: [{ char: 'C', isCorrect: false }, { char: 'G', isCorrect: true }, { char: 'J', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'O R R A',
      fullWord: 'GORRA',
      IconComponent: GorraIcon,
      choices: [{ char: 'G', isCorrect: true }, { char: 'C', isCorrect: false }, { char: 'Q', isCorrect: false }]
    },
    soundCards: [
      { name: 'GUSANO', hint: 'Gu - sa - no', isCorrect: true, Component: GusanoIcon },
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: false, Component: PelotaIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon }
    ]
  },

  // ================= H =================
  H: {
    letter: 'H',
    letterLower: 'h',
    name: 'Letra H',
    bgHeader: 'from-teal-400 to-cyan-600',
    textColor: 'text-teal-600',
    bubbles: [
      { id: 1, char: 'H', isTarget: true }, { id: 2, char: 'N', isTarget: false },
      { id: 3, char: 'h', isTarget: true }, { id: 4, char: 'I', isTarget: false },
      { id: 5, char: 'H', isTarget: true }, { id: 6, char: 'L', isTarget: false },
      { id: 7, char: 'h', isTarget: true }, { id: 8, char: 'A', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza HOJA?',
      wordSyllables: 'HO - JA',
      IconComponent: HojaIcon,
      choices: [{ char: 'O', isCorrect: false }, { char: 'H', isCorrect: true }, { char: 'A', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'U E V O',
      fullWord: 'HUEVO',
      IconComponent: HuevoIcon,
      choices: [{ char: 'H', isCorrect: true }, { char: 'U', isCorrect: false }, { char: 'B', isCorrect: false }]
    },
    soundCards: [
      { name: 'HADA', hint: 'Ha - da', isCorrect: true, Component: HadaIcon },
      { name: 'FLOR', hint: 'Flor', isCorrect: false, Component: FlorIcon },
      { name: 'LUNA', hint: 'Lu - na', isCorrect: false, Component: LunaIcon }
    ]
  },

  // ================= I =================
  I: {
    letter: 'I',
    letterLower: 'i',
    name: 'Letra I',
    bgHeader: 'from-amber-400 to-yellow-500',
    textColor: 'text-amber-500',
    bubbles: [
      { id: 1, char: 'I', isTarget: true }, { id: 2, char: 'L', isTarget: false },
      { id: 3, char: 'i', isTarget: true }, { id: 4, char: 'E', isTarget: false },
      { id: 5, char: 'I', isTarget: true }, { id: 6, char: 'T', isTarget: false },
      { id: 7, char: 'i', isTarget: true }, { id: 8, char: 'J', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza ISLA?',
      wordSyllables: 'IS - LA',
      IconComponent: IslaIcon,
      choices: [{ char: 'E', isCorrect: false }, { char: 'I', isCorrect: true }, { char: 'A', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'G L Ú',
      fullWord: 'IGLÚ',
      IconComponent: IgluIcon,
      choices: [{ char: 'I', isCorrect: true }, { char: 'E', isCorrect: false }, { char: 'U', isCorrect: false }]
    },
    soundCards: [
      { name: 'IMÁN', hint: 'I - mán', isCorrect: true, Component: ImanIcon },
      { name: 'BARCO', hint: 'Bar - co', isCorrect: false, Component: BarcoIcon },
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: false, Component: PelotaIcon }
    ]
  },

  // ================= J =================
  J: {
    letter: 'J',
    letterLower: 'j',
    name: 'Letra J',
    bgHeader: 'from-orange-500 to-amber-600',
    textColor: 'text-orange-600',
    bubbles: [
      { id: 1, char: 'J', isTarget: true }, { id: 2, char: 'I', isTarget: false },
      { id: 3, char: 'j', isTarget: true }, { id: 4, char: 'L', isTarget: false },
      { id: 5, char: 'J', isTarget: true }, { id: 6, char: 'G', isTarget: false },
      { id: 7, char: 'j', isTarget: true }, { id: 8, char: 'U', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza JIRAFA?',
      wordSyllables: 'JI - RA - FA',
      IconComponent: JirafaIcon,
      choices: [{ char: 'G', isCorrect: false }, { char: 'J', isCorrect: true }, { char: 'I', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'A R R A',
      fullWord: 'JARRA',
      IconComponent: JarraIcon,
      choices: [{ char: 'J', isCorrect: true }, { char: 'G', isCorrect: false }, { char: 'L', isCorrect: false }]
    },
    soundCards: [
      { name: 'JUGUETE', hint: 'Ju - gue - te', isCorrect: true, Component: JugueteIcon },
      { name: 'GATO', hint: 'Ga - to', isCorrect: false, Component: GatoIcon },
      { name: 'CASA', hint: 'Ca - sa', isCorrect: false, Component: CasaIcon }
    ]
  },

  // ================= K =================
  K: {
    letter: 'K',
    letterLower: 'k',
    name: 'Letra K',
    bgHeader: 'from-amber-500 to-yellow-600',
    textColor: 'text-amber-600',
    bubbles: [
      { id: 1, char: 'K', isTarget: true }, { id: 2, char: 'X', isTarget: false },
      { id: 3, char: 'k', isTarget: true }, { id: 4, char: 'C', isTarget: false },
      { id: 5, char: 'K', isTarget: true }, { id: 6, char: 'H', isTarget: false },
      { id: 7, char: 'k', isTarget: true }, { id: 8, char: 'R', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza KOALA?',
      wordSyllables: 'KO - A - LA',
      IconComponent: KoalaIcon,
      choices: [{ char: 'C', isCorrect: false }, { char: 'K', isCorrect: true }, { char: 'Q', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'I W I',
      fullWord: 'KIWI',
      IconComponent: KiwiIcon,
      choices: [{ char: 'K', isCorrect: true }, { char: 'C', isCorrect: false }, { char: 'P', isCorrect: false }]
    },
    soundCards: [
      { name: 'KIMONO', hint: 'Ki - mo - no', isCorrect: true, Component: KimonoIcon },
      { name: 'CASA', hint: 'Ca - sa', isCorrect: false, Component: CasaIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon }
    ]
  },

  // ================= L =================
  L: {
    letter: 'L',
    letterLower: 'l',
    name: 'Letra L',
    bgHeader: 'from-cyan-500 to-blue-600',
    textColor: 'text-cyan-600',
    bubbles: [
      { id: 1, char: 'L', isTarget: true }, { id: 2, char: 'I', isTarget: false },
      { id: 3, char: 'l', isTarget: true }, { id: 4, char: 'T', isTarget: false },
      { id: 5, char: 'L', isTarget: true }, { id: 6, char: 'J', isTarget: false },
      { id: 7, char: 'l', isTarget: true }, { id: 8, char: 'E', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza LEÓN?',
      wordSyllables: 'LE - ÓN',
      IconComponent: LeonIcon,
      choices: [{ char: 'T', isCorrect: false }, { char: 'L', isCorrect: true }, { char: 'D', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'Á P I Z',
      fullWord: 'LÁPIZ',
      IconComponent: LapizIcon,
      choices: [{ char: 'L', isCorrect: true }, { char: 'T', isCorrect: false }, { char: 'I', isCorrect: false }]
    },
    soundCards: [
      { name: 'LÁMPARA', hint: 'Lám - pa - ra', isCorrect: true, Component: LamparaIcon },
      { name: 'FLOR', hint: 'Flor', isCorrect: false, Component: FlorIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon }
    ]
  },

  // ================= M =================
  M: {
    letter: 'M',
    letterLower: 'm',
    name: 'Letra M',
    bgHeader: 'from-pink-500 to-rose-600',
    textColor: 'text-pink-600',
    bubbles: [
      { id: 1, char: 'M', isTarget: true }, { id: 2, char: 'N', isTarget: false },
      { id: 3, char: 'm', isTarget: true }, { id: 4, char: 'W', isTarget: false },
      { id: 5, char: 'M', isTarget: true }, { id: 6, char: 'U', isTarget: false },
      { id: 7, char: 'm', isTarget: true }, { id: 8, char: 'V', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza MONO?',
      wordSyllables: 'MO - NO',
      IconComponent: MonoIcon,
      choices: [{ char: 'N', isCorrect: false }, { char: 'M', isCorrect: true }, { char: 'P', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'E S A',
      fullWord: 'MESA',
      IconComponent: MesaIcon,
      choices: [{ char: 'M', isCorrect: true }, { char: 'N', isCorrect: false }, { char: 'P', isCorrect: false }]
    },
    soundCards: [
      { name: 'MARIPOSA', hint: 'Ma - ri - po - sa', isCorrect: true, Component: MariposaIcon },
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: false, Component: PelotaIcon },
      { name: 'BARCO', hint: 'Bar - co', isCorrect: false, Component: BarcoIcon }
    ]
  },

  // ================= N =================
  N: {
    letter: 'N',
    letterLower: 'n',
    name: 'Letra N',
    bgHeader: 'from-emerald-400 to-teal-500',
    textColor: 'text-emerald-600',
    bubbles: [
      { id: 1, char: 'N', isTarget: true }, { id: 2, char: 'M', isTarget: false },
      { id: 3, char: 'n', isTarget: true }, { id: 4, char: 'U', isTarget: false },
      { id: 5, char: 'N', isTarget: true }, { id: 6, char: 'H', isTarget: false },
      { id: 7, char: 'n', isTarget: true }, { id: 8, char: 'V', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza NUBE?',
      wordSyllables: 'NU - BE',
      IconComponent: NubeIcon,
      choices: [{ char: 'M', isCorrect: false }, { char: 'N', isCorrect: true }, { char: 'U', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'I D O',
      fullWord: 'NIDO',
      IconComponent: NidoIcon,
      choices: [{ char: 'N', isCorrect: true }, { char: 'M', isCorrect: false }, { char: 'D', isCorrect: false }]
    },
    soundCards: [
      { name: 'NARANJA', hint: 'Na - ran - ja', isCorrect: true, Component: NaranjaIcon },
      { name: 'MANZANA', hint: 'Man - za - na', isCorrect: false, Component: ManzanaIcon },
      { name: 'LUNA', hint: 'Lu - na', isCorrect: false, Component: LunaIcon }
    ]
  },

  // ================= O =================
  O: {
    letter: 'O',
    letterLower: 'o',
    name: 'Letra O',
    bgHeader: 'from-amber-400 to-orange-500',
    textColor: 'text-orange-500',
    bubbles: [
      { id: 1, char: 'O', isTarget: true }, { id: 2, char: 'Q', isTarget: false },
      { id: 3, char: 'o', isTarget: true }, { id: 4, char: 'C', isTarget: false },
      { id: 5, char: 'O', isTarget: true }, { id: 6, char: 'U', isTarget: false },
      { id: 7, char: 'o', isTarget: true }, { id: 8, char: 'D', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza OSO?',
      wordSyllables: 'O - SO',
      IconComponent: OsoIcon,
      choices: [{ char: 'U', isCorrect: false }, { char: 'O', isCorrect: true }, { char: 'A', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'J O',
      fullWord: 'OJO',
      IconComponent: OjoIcon,
      choices: [{ char: 'O', isCorrect: true }, { char: 'U', isCorrect: false }, { char: 'A', isCorrect: false }]
    },
    soundCards: [
      { name: 'OLLA', hint: 'O - lla', isCorrect: true, Component: OllaIcon },
      { name: 'CASA', hint: 'Ca - sa', isCorrect: false, Component: CasaIcon },
      { name: 'FLOR', hint: 'Flor', isCorrect: false, Component: FlorIcon }
    ]
  },

  // ================= P =================
  P: {
    letter: 'P',
    letterLower: 'p',
    name: 'Letra P',
    bgHeader: 'from-rose-400 to-pink-500',
    textColor: 'text-rose-500',
    bubbles: [
      { id: 1, char: 'P', isTarget: true }, { id: 2, char: 'B', isTarget: false },
      { id: 3, char: 'p', isTarget: true }, { id: 4, char: 'D', isTarget: false },
      { id: 5, char: 'P', isTarget: true }, { id: 6, char: 'R', isTarget: false },
      { id: 7, char: 'p', isTarget: true }, { id: 8, char: 'Q', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza PEZ?',
      wordSyllables: 'PE - Z',
      IconComponent: PezIcon,
      choices: [{ char: 'B', isCorrect: false }, { char: 'P', isCorrect: true }, { char: 'D', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'I Ñ A',
      fullWord: 'PIÑA',
      IconComponent: PinaIcon,
      choices: [{ char: 'P', isCorrect: true }, { char: 'B', isCorrect: false }, { char: 'T', isCorrect: false }]
    },
    soundCards: [
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: true, Component: PelotaIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon },
      { name: 'LUNA', hint: 'Lu - na', isCorrect: false, Component: LunaIcon }
    ]
  },

  // ================= Q =================
  Q: {
    letter: 'Q',
    letterLower: 'q',
    name: 'Letra Q',
    bgHeader: 'from-amber-400 to-yellow-500',
    textColor: 'text-amber-500',
    bubbles: [
      { id: 1, char: 'Q', isTarget: true }, { id: 2, char: 'O', isTarget: false },
      { id: 3, char: 'q', isTarget: true }, { id: 4, char: 'P', isTarget: false },
      { id: 5, char: 'Q', isTarget: true }, { id: 6, char: 'G', isTarget: false },
      { id: 7, char: 'q', isTarget: true }, { id: 8, char: 'C', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza QUESO?',
      wordSyllables: 'QUE - SO',
      IconComponent: QuesoIcon,
      choices: [{ char: 'C', isCorrect: false }, { char: 'Q', isCorrect: true }, { char: 'K', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'U I T A S O L',
      fullWord: 'QUITASOL',
      IconComponent: QuitasolIcon,
      choices: [{ char: 'Q', isCorrect: true }, { char: 'C', isCorrect: false }, { char: 'P', isCorrect: false }]
    },
    soundCards: [
      { name: 'QUETZAL', hint: 'Quet - zal', isCorrect: true, Component: QuetzalIcon },
      { name: 'PATO', hint: 'Pa - to', isCorrect: false, Component: PatoIcon },
      { name: 'GATO', hint: 'Ga - to', isCorrect: false, Component: GatoIcon }
    ]
  },

  // ================= R =================
  R: {
    letter: 'R',
    letterLower: 'r',
    name: 'Letra R',
    bgHeader: 'from-indigo-500 to-purple-600',
    textColor: 'text-indigo-600',
    bubbles: [
      { id: 1, char: 'R', isTarget: true }, { id: 2, char: 'P', isTarget: false },
      { id: 3, char: 'r', isTarget: true }, { id: 4, char: 'B', isTarget: false },
      { id: 5, char: 'R', isTarget: true }, { id: 6, char: 'K', isTarget: false },
      { id: 7, char: 'r', isTarget: true }, { id: 8, char: 'D', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza RATÓN?',
      wordSyllables: 'RA - TÓN',
      IconComponent: RatonIcon,
      choices: [{ char: 'P', isCorrect: false }, { char: 'R', isCorrect: true }, { char: 'B', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'E L O J',
      fullWord: 'RELOJ',
      IconComponent: RelojIcon,
      choices: [{ char: 'R', isCorrect: true }, { char: 'P', isCorrect: false }, { char: 'B', isCorrect: false }]
    },
    soundCards: [
      { name: 'RANA', hint: 'Ra - na', isCorrect: true, Component: RanaIcon },
      { name: 'LUNA', hint: 'Lu - na', isCorrect: false, Component: LunaIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon }
    ]
  },

  // ================= S =================
  S: {
    letter: 'S',
    letterLower: 's',
    name: 'Letra S',
    bgHeader: 'from-cyan-400 to-teal-500',
    textColor: 'text-teal-500',
    bubbles: [
      { id: 1, char: 'S', isTarget: true }, { id: 2, char: 'Z', isTarget: false },
      { id: 3, char: 's', isTarget: true }, { id: 4, char: 'C', isTarget: false },
      { id: 5, char: 'S', isTarget: true }, { id: 6, char: 'O', isTarget: false },
      { id: 7, char: 's', isTarget: true }, { id: 8, char: 'E', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza SOL?',
      wordSyllables: 'SOL',
      IconComponent: SolIcon,
      choices: [{ char: 'C', isCorrect: false }, { char: 'S', isCorrect: true }, { char: 'Z', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'I L L A',
      fullWord: 'SILLA',
      IconComponent: SillaIcon,
      choices: [{ char: 'S', isCorrect: true }, { char: 'C', isCorrect: false }, { char: 'T', isCorrect: false }]
    },
    soundCards: [
      { name: 'SOPA', hint: 'So - pa', isCorrect: true, Component: SopaIcon },
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: false, Component: PelotaIcon },
      { name: 'BARCO', hint: 'Bar - co', isCorrect: false, Component: BarcoIcon }
    ]
  },

  // ================= T =================
  T: {
    letter: 'T',
    letterLower: 't',
    name: 'Letra T',
    bgHeader: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-600',
    bubbles: [
      { id: 1, char: 'T', isTarget: true }, { id: 2, char: 'L', isTarget: false },
      { id: 3, char: 't', isTarget: true }, { id: 4, char: 'I', isTarget: false },
      { id: 5, char: 'T', isTarget: true }, { id: 6, char: 'F', isTarget: false },
      { id: 7, char: 't', isTarget: true }, { id: 8, char: 'D', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza TORTUGA?',
      wordSyllables: 'TOR - TU - GA',
      IconComponent: TortugaIcon,
      choices: [{ char: 'P', isCorrect: false }, { char: 'T', isCorrect: true }, { char: 'L', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'O M A T E',
      fullWord: 'TOMATE',
      IconComponent: TomateIcon,
      choices: [{ char: 'T', isCorrect: true }, { char: 'P', isCorrect: false }, { char: 'D', isCorrect: false }]
    },
    soundCards: [
      { name: 'TAMBOR', hint: 'Tam - bor', isCorrect: true, Component: TamborIcon },
      { name: 'FLOR', hint: 'Flor', isCorrect: false, Component: FlorIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon }
    ]
  },

  // ================= U =================
  U: {
    letter: 'U',
    letterLower: 'u',
    name: 'Letra U',
    bgHeader: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-600',
    bubbles: [
      { id: 1, char: 'U', isTarget: true }, { id: 2, char: 'V', isTarget: false },
      { id: 3, char: 'u', isTarget: true }, { id: 4, char: 'O', isTarget: false },
      { id: 5, char: 'U', isTarget: true }, { id: 6, char: 'W', isTarget: false },
      { id: 7, char: 'u', isTarget: true }, { id: 8, char: 'A', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza UVAS?',
      wordSyllables: 'U - VAS',
      IconComponent: UvasIcon,
      choices: [{ char: 'O', isCorrect: false }, { char: 'U', isCorrect: true }, { char: 'A', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'Ñ A',
      fullWord: 'UÑA',
      IconComponent: UnaIcon,
      choices: [{ char: 'U', isCorrect: true }, { char: 'O', isCorrect: false }, { char: 'E', isCorrect: false }]
    },
    soundCards: [
      { name: 'UNICORNIO', hint: 'U - ni - cor - nio', isCorrect: true, Component: UnicornioIcon },
      { name: 'BARCO', hint: 'Bar - co', isCorrect: false, Component: BarcoIcon },
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: false, Component: PelotaIcon }
    ]
  },

  // ================= V =================
  V: {
    letter: 'V',
    letterLower: 'v',
    name: 'Letra V',
    bgHeader: 'from-teal-500 to-emerald-600',
    textColor: 'text-teal-600',
    bubbles: [
      { id: 1, char: 'V', isTarget: true }, { id: 2, char: 'U', isTarget: false },
      { id: 3, char: 'v', isTarget: true }, { id: 4, char: 'W', isTarget: false },
      { id: 5, char: 'V', isTarget: true }, { id: 6, char: 'B', isTarget: false },
      { id: 7, char: 'v', isTarget: true }, { id: 8, char: 'Y', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza VACA?',
      wordSyllables: 'VA - CA',
      IconComponent: VacaIcon,
      choices: [{ char: 'B', isCorrect: false }, { char: 'V', isCorrect: true }, { char: 'U', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'E L A',
      fullWord: 'VELA',
      IconComponent: VelaIcon,
      choices: [{ char: 'V', isCorrect: true }, { char: 'B', isCorrect: false }, { char: 'L', isCorrect: false }]
    },
    soundCards: [
      { name: 'VOLCÁN', hint: 'Vol - cán', isCorrect: true, Component: VolcanIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon },
      { name: 'LUNA', hint: 'Lu - na', isCorrect: false, Component: LunaIcon }
    ]
  },

  // ================= W =================
  W: {
    letter: 'W',
    letterLower: 'w',
    name: 'Letra W',
    bgHeader: 'from-sky-500 to-indigo-600',
    textColor: 'text-sky-600',
    bubbles: [
      { id: 1, char: 'W', isTarget: true }, { id: 2, char: 'M', isTarget: false },
      { id: 3, char: 'w', isTarget: true }, { id: 4, char: 'V', isTarget: false },
      { id: 5, char: 'W', isTarget: true }, { id: 6, char: 'U', isTarget: false },
      { id: 7, char: 'w', isTarget: true }, { id: 8, char: 'N', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza WAFLE?',
      wordSyllables: 'WA - FLE',
      IconComponent: WafleIcon,
      choices: [{ char: 'M', isCorrect: false }, { char: 'W', isCorrect: true }, { char: 'V', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'E B',
      fullWord: 'WEB',
      IconComponent: WebIcon,
      choices: [{ char: 'W', isCorrect: true }, { char: 'V', isCorrect: false }, { char: 'M', isCorrect: false }]
    },
    soundCards: [
      { name: 'WATERPOLO', hint: 'Wa - ter - po - lo', isCorrect: true, Component: WaterpoloIcon },
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: false, Component: PelotaIcon },
      { name: 'CASA', hint: 'Ca - sa', isCorrect: false, Component: CasaIcon }
    ]
  },

  // ================= X =================
  X: {
    letter: 'X',
    letterLower: 'x',
    name: 'Letra X',
    bgHeader: 'from-amber-400 to-orange-500',
    textColor: 'text-amber-600',
    bubbles: [
      { id: 1, char: 'X', isTarget: true }, { id: 2, char: 'K', isTarget: false },
      { id: 3, char: 'x', isTarget: true }, { id: 4, char: 'Z', isTarget: false },
      { id: 5, char: 'X', isTarget: true }, { id: 6, char: 'S', isTarget: false },
      { id: 7, char: 'x', isTarget: true }, { id: 8, char: 'Y', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza XILÓFONO?',
      wordSyllables: 'XI - LÓ - FO - NO',
      IconComponent: XilofonoIcon,
      choices: [{ char: 'S', isCorrect: false }, { char: 'X', isCorrect: true }, { char: 'Z', isCorrect: false }]
    },
    fillWord: {
      prefix: 'TA',
      wordRemainder: 'I',
      fullWord: 'TAXI',
      IconComponent: TaxiIcon,
      choices: [{ char: 'X', isCorrect: true }, { char: 'S', isCorrect: false }, { char: 'C', isCorrect: false }]
    },
    soundCards: [
      { name: 'RAYOS X', hint: 'Ra - yos X', isCorrect: true, Component: RayosXIcon },
      { name: 'SOL', hint: 'Sol', isCorrect: false, Component: SolIcon },
      { name: 'LUNA', hint: 'Lu - na', isCorrect: false, Component: LunaIcon }
    ]
  },

  // ================= Y =================
  Y: {
    letter: 'Y',
    letterLower: 'y',
    name: 'Letra Y',
    bgHeader: 'from-rose-500 to-pink-500',
    textColor: 'text-pink-600',
    bubbles: [
      { id: 1, char: 'Y', isTarget: true }, { id: 2, char: 'V', isTarget: false },
      { id: 3, char: 'y', isTarget: true }, { id: 4, char: 'J', isTarget: false },
      { id: 5, char: 'Y', isTarget: true }, { id: 6, char: 'I', isTarget: false },
      { id: 7, char: 'y', isTarget: true }, { id: 8, char: 'X', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza YOYÓ?',
      wordSyllables: 'YO - YÓ',
      IconComponent: YoyoIcon,
      choices: [{ char: 'I', isCorrect: false }, { char: 'Y', isCorrect: true }, { char: 'L', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'A T E',
      fullWord: 'YATE',
      IconComponent: YateIcon,
      choices: [{ char: 'Y', isCorrect: true }, { char: 'L', isCorrect: false }, { char: 'I', isCorrect: false }]
    },
    soundCards: [
      { name: 'YOGUR', hint: 'Yo - gur', isCorrect: true, Component: YogurIcon },
      { name: 'MANZANA', hint: 'Man - za - na', isCorrect: false, Component: ManzanaIcon },
      { name: 'PELOTA', hint: 'Pe - lo - ta', isCorrect: false, Component: PelotaIcon }
    ]
  },

  // ================= Z =================
  Z: {
    letter: 'Z',
    letterLower: 'z',
    name: 'Letra Z',
    bgHeader: 'from-emerald-400 to-green-600',
    textColor: 'text-emerald-600',
    bubbles: [
      { id: 1, char: 'Z', isTarget: true }, { id: 2, char: 'S', isTarget: false },
      { id: 3, char: 'z', isTarget: true }, { id: 4, char: 'C', isTarget: false },
      { id: 5, char: 'Z', isTarget: true }, { id: 6, char: 'X', isTarget: false },
      { id: 7, char: 'z', isTarget: true }, { id: 8, char: 'N', isTarget: false }
    ],
    soundQuestion: {
      question: '¿Con qué letra empieza ZORRO?',
      wordSyllables: 'ZOR - RO',
      IconComponent: ZorroIcon,
      choices: [{ char: 'S', isCorrect: false }, { char: 'Z', isCorrect: true }, { char: 'C', isCorrect: false }]
    },
    fillWord: {
      wordRemainder: 'A P A T O',
      fullWord: 'ZAPATO',
      IconComponent: ZapatoIcon,
      choices: [{ char: 'Z', isCorrect: true }, { char: 'S', isCorrect: false }, { char: 'C', isCorrect: false }]
    },
    soundCards: [
      { name: 'ZANAHORIA', hint: 'Za - na - ho - ria', isCorrect: true, Component: ZanahoriaIcon },
      { name: 'MANZANA', hint: 'Man - za - na', isCorrect: false, Component: ManzanaIcon },
      { name: 'FLOR', hint: 'Flor', isCorrect: false, Component: FlorIcon }
    ]
  }
};
