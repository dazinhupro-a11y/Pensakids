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

export type LetterType = 
  | 'A' | 'B' | 'C' | 'D' | 'E' 
  | 'F' | 'G' | 'H' | 'I' | 'J' 
  | 'K' | 'L' | 'M' | 'N' | 'O' 
  | 'P' | 'Q' | 'R' | 'S' | 'T' 
  | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

export interface LetterBubble {
  id: number;
  letter: string;
  isTarget: boolean;
  bgGrad: string;
  textColor: string;
}

export interface WordFillItem {
  id: string;
  parts: { text: string; isBlank?: boolean }[];
  hintName: string;
  svgIcon: React.ReactNode;
}

export interface SoundCheckItem {
  id: number;
  name: string;
  startsWithTarget: boolean;
  Component: React.FC<{ className?: string }>;
  hint: string;
}

export interface LetterConfig {
  letter: LetterType;
  letterLower: string;
  name: string;
  themeColor: string; // Tailwind color name: rose, sky, amber, emerald, purple
  gradientHeader: string;
  accentBg: string;
  accentBorder: string;
  phoneticSample: {
    word: string;
    description: string;
  };
  sampleSvg: React.ReactNode;
  bubbleLetters: LetterBubble[];
  fillWords: WordFillItem[];
  soundItems: SoundCheckItem[];
}

export const LETTERS_CONFIG: Record<LetterType, LetterConfig> = {
  // ==========================================
  // LETRA A
  // ==========================================
  A: {
    letter: 'A',
    letterLower: 'a',
    name: 'Letra A',
    themeColor: 'rose',
    gradientHeader: 'from-rose-500 to-pink-500',
    accentBg: 'bg-rose-50/70',
    accentBorder: 'border-rose-400',
    phoneticSample: {
      word: 'A - BE - JA',
      description: 'Abeja trabajadora'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <ellipse cx="40" cy="24" rx="8" ry="14" fill="#bae6fd" stroke="#091838" strokeWidth="3" transform="rotate(-25 40 24)" />
        <ellipse cx="60" cy="24" rx="8" ry="14" fill="#bae6fd" stroke="#091838" strokeWidth="3" transform="rotate(25 60 24)" />
        <ellipse cx="50" cy="52" rx="22" ry="18" fill="#facc15" stroke="#091838" strokeWidth="4.5" />
        <line x1="42" y1="36" x2="42" y2="68" stroke="#091838" strokeWidth="4.5" />
        <line x1="56" y1="36" x2="56" y2="68" stroke="#091838" strokeWidth="4.5" />
        <circle cx="34" cy="50" r="3" fill="#091838" />
        <circle cx="35" cy="49" r="1" fill="#ffffff" />
        <path d="M 30 56 Q 34 60 38 56" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'A', isTarget: true, bgGrad: 'from-pink-500 to-rose-500', textColor: 'text-white' },
      { id: 2, letter: 'M', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'O', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'A', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'P', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'B', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 7, letter: 'A', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 8, letter: 'C', isTarget: false, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'D', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
      { id: 10, letter: 'A', isTarget: true, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Avión',
        parts: [{ text: '', isBlank: true }, { text: 'V I Ó N' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M10 32 L46 22 C52 20 56 24 56 30 C56 36 52 40 46 38 L10 32 Z" fill="#0284c7" stroke="#0f172a" strokeWidth="2.5" />
            <polygon points="26,26 34,10 42,24" fill="#f43f5e" stroke="#0f172a" strokeWidth="2" />
            <polygon points="28,36 36,50 42,37" fill="#f43f5e" stroke="#0f172a" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Casa',
        parts: [{ text: 'C' }, { text: '', isBlank: true }, { text: 'S' }, { text: '', isBlank: true }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="32,10 12,28 52,28" fill="#f43f5e" stroke="#0f172a" strokeWidth="2.5" strokeLinejoin="round" />
            <rect x="18" y="28" width="28" height="24" fill="#fde047" stroke="#0f172a" strokeWidth="2.5" />
            <rect x="28" y="38" width="8" height="14" fill="#38bdf8" stroke="#0f172a" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Árbol',
        parts: [{ text: '', isBlank: true }, { text: 'R B O L' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="28" y="34" width="8" height="18" fill="#b45309" stroke="#0f172a" strokeWidth="2.5" rx="2" />
            <circle cx="24" cy="24" r="12" fill="#22c55e" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="40" cy="24" r="12" fill="#22c55e" stroke="#0f172a" strokeWidth="2.5" />
            <circle cx="32" cy="18" r="12" fill="#4ade80" stroke="#0f172a" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Abeja',
        parts: [{ text: '', isBlank: true }, { text: 'B E J' }, { text: '', isBlank: true }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <ellipse cx="26" cy="18" rx="6" ry="10" fill="#bae6fd" stroke="#0f172a" strokeWidth="2" transform="rotate(-25 26 18)" />
            <ellipse cx="38" cy="18" rx="6" ry="10" fill="#bae6fd" stroke="#0f172a" strokeWidth="2" transform="rotate(25 38 18)" />
            <ellipse cx="32" cy="34" rx="14" ry="11" fill="#facc15" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="28" y1="24" x2="28" y2="44" stroke="#0f172a" strokeWidth="3" />
            <line x1="36" y1="24" x2="36" y2="44" stroke="#0f172a" strokeWidth="3" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'ANILLO', startsWithTarget: true, Component: AnilloIcon, hint: 'A - ni - llo' },
      { id: 2, name: 'PELOTA', startsWithTarget: false, Component: PelotaIcon, hint: 'Pe - lo - ta' },
      { id: 3, name: 'AVIÓN', startsWithTarget: true, Component: AvionIcon, hint: 'A - vión' },
      { id: 4, name: 'SOL', startsWithTarget: false, Component: SolIcon, hint: 'Sol' }
    ]
  },

  // ==========================================
  // LETRA B
  // ==========================================
  B: {
    letter: 'B',
    letterLower: 'b',
    name: 'Letra B',
    themeColor: 'sky',
    gradientHeader: 'from-sky-500 to-blue-600',
    accentBg: 'bg-sky-50/70',
    accentBorder: 'border-sky-400',
    phoneticSample: {
      word: 'BAR - CO',
      description: 'Barco navegante'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <path d="M 18 64 L 82 64 L 72 82 L 28 82 Z" fill="#ef4444" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <line x1="50" y1="20" x2="50" y2="64" stroke="#091838" strokeWidth="4" strokeLinecap="round" />
        <path d="M 52 24 L 78 54 L 52 54 Z" fill="#38bdf8" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M 48 30 L 26 54 L 48 54 Z" fill="#facc15" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'B', isTarget: true, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 2, letter: 'D', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 3, letter: 'P', isTarget: false, bgGrad: 'from-pink-400 to-rose-500', textColor: 'text-white' },
      { id: 4, letter: 'B', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'R', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
      { id: 6, letter: 'B', isTarget: true, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 7, letter: 'E', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'B', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'V', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'B', isTarget: true, bgGrad: 'from-teal-400 to-cyan-500', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Barco',
        parts: [{ text: '', isBlank: true }, { text: 'A R C O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M12 44 L52 44 L44 54 L20 54 Z" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
            <line x1="32" y1="16" x2="32" y2="44" stroke="#091838" strokeWidth="2.5" />
            <polygon points="34,20 48,38 34,38" fill="#38bdf8" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Boca',
        parts: [{ text: '', isBlank: true }, { text: 'O C A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 14 32 Q 32 46 50 32 Q 32 38 14 32 Z" fill="#f43f5e" stroke="#091838" strokeWidth="2.5" />
            <path d="M 14 32 Q 32 20 50 32" stroke="#091838" strokeWidth="2.5" fill="none" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Bebé',
        parts: [{ text: '', isBlank: true }, { text: 'E' }, { text: '', isBlank: true }, { text: 'É' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="16" fill="#fef08a" stroke="#091838" strokeWidth="2.5" />
            <circle cx="26" cy="30" r="2.5" fill="#091838" />
            <circle cx="38" cy="30" r="2.5" fill="#091838" />
            <circle cx="32" cy="38" r="4" fill="#38bdf8" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Bota',
        parts: [{ text: '', isBlank: true }, { text: 'O T A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 24 16 L 38 16 L 38 36 C 38 42 42 46 50 48 L 50 54 L 20 54 L 24 16 Z" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
            <rect x="18" y="52" width="34" height="5" fill="#ef4444" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'BARCO', startsWithTarget: true, Component: BarcoIcon, hint: 'Bar - co' },
      { id: 2, name: 'MANZANA', startsWithTarget: false, Component: ManzanaIcon, hint: 'Man - za - na' },
      { id: 3, name: 'BALLENA', startsWithTarget: true, Component: BallenaIcon, hint: 'Ba - lle - na' },
      { id: 4, name: 'BOTA', startsWithTarget: true, Component: BotaIcon, hint: 'Bo - ta' }
    ]
  },

  // ==========================================
  // LETRA C
  // ==========================================
  C: {
    letter: 'C',
    letterLower: 'c',
    name: 'Letra C',
    themeColor: 'amber',
    gradientHeader: 'from-amber-500 to-orange-500',
    accentBg: 'bg-amber-50/70',
    accentBorder: 'border-amber-400',
    phoneticSample: {
      word: 'CA - SA',
      description: 'Casa dulce hogar'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <polygon points="50,18 16,46 84,46" fill="#ef4444" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <rect x="24" y="46" width="52" height="38" fill="#fef08a" stroke="#091838" strokeWidth="4.5" />
        <rect x="42" y="60" width="16" height="24" rx="2" fill="#38bdf8" stroke="#091838" strokeWidth="3" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'C', isTarget: true, bgGrad: 'from-amber-400 to-orange-500', textColor: 'text-white' },
      { id: 2, letter: 'O', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'C', isTarget: true, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'G', isTarget: false, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'C', isTarget: true, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'Q', isTarget: false, bgGrad: 'from-teal-400 to-cyan-500', textColor: 'text-white' },
      { id: 7, letter: 'C', isTarget: true, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'U', isTarget: false, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'C', isTarget: true, bgGrad: 'from-red-500 to-orange-500', textColor: 'text-white' },
      { id: 10, letter: 'D', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Casa',
        parts: [{ text: '', isBlank: true }, { text: 'A S A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="32,10 12,28 52,28" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
            <rect x="18" y="28" width="28" height="24" fill="#fde047" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Cama',
        parts: [{ text: '', isBlank: true }, { text: 'A M A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="12" y="28" width="40" height="16" rx="3" fill="#38bdf8" stroke="#091838" strokeWidth="2.5" />
            <circle cx="20" cy="24" r="5" fill="#fef08a" stroke="#091838" strokeWidth="2" />
            <line x1="12" y1="44" x2="12" y2="52" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
            <line x1="52" y1="44" x2="52" y2="52" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Copa',
        parts: [{ text: '', isBlank: true }, { text: 'O P A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 22 18 L 42 18 L 38 34 C 36 38 34 38 32 38 C 30 38 28 38 26 34 Z" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
            <line x1="32" y1="38" x2="32" y2="48" stroke="#091838" strokeWidth="3" />
            <ellipse cx="32" cy="50" rx="10" ry="3" fill="#facc15" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Coco',
        parts: [{ text: '', isBlank: true }, { text: 'O' }, { text: '', isBlank: true }, { text: 'O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="14" fill="#78350f" stroke="#091838" strokeWidth="2.5" />
            <circle cx="28" cy="28" r="2.5" fill="#091838" />
            <circle cx="36" cy="28" r="2.5" fill="#091838" />
            <circle cx="32" cy="36" r="2.5" fill="#091838" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'CASA', startsWithTarget: true, Component: CasaIcon, hint: 'Ca - sa' },
      { id: 2, name: 'PATO', startsWithTarget: false, Component: PatoIcon, hint: 'Pa - to' },
      { id: 3, name: 'CARACOL', startsWithTarget: true, Component: CaracolIcon, hint: 'Ca - ra - col' },
      { id: 4, name: 'CONEJO', startsWithTarget: true, Component: ConejoIcon, hint: 'Co - ne - jo' }
    ]
  },

  // ==========================================
  // LETRA D
  // ==========================================
  D: {
    letter: 'D',
    letterLower: 'd',
    name: 'Letra D',
    themeColor: 'emerald',
    gradientHeader: 'from-emerald-500 to-teal-600',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'border-emerald-400',
    phoneticSample: {
      word: 'DA - DO',
      description: 'Dado de juego'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <rect x="22" y="22" width="56" height="56" rx="12" fill="#ef4444" stroke="#091838" strokeWidth="5" />
        <circle cx="36" cy="36" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
        <circle cx="64" cy="36" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
        <circle cx="50" cy="50" r="5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
        <circle cx="36" cy="64" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
        <circle cx="64" cy="64" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'D', isTarget: true, bgGrad: 'from-emerald-400 to-teal-500', textColor: 'text-white' },
      { id: 2, letter: 'B', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'P', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'D', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'O', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 6, letter: 'D', isTarget: true, bgGrad: 'from-cyan-400 to-blue-500', textColor: 'text-white' },
      { id: 7, letter: 'Q', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 8, letter: 'D', isTarget: true, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 9, letter: 'T', isTarget: false, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 10, letter: 'D', isTarget: true, bgGrad: 'from-emerald-500 to-green-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Dado',
        parts: [{ text: '', isBlank: true }, { text: 'A' }, { text: '', isBlank: true }, { text: 'O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="18" y="16" width="28" height="28" rx="6" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
            <circle cx="26" cy="24" r="2.5" fill="#ffffff" />
            <circle cx="38" cy="36" r="2.5" fill="#ffffff" />
            <circle cx="32" cy="30" r="2.5" fill="#ffffff" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Dedo',
        parts: [{ text: '', isBlank: true }, { text: 'E' }, { text: '', isBlank: true }, { text: 'O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="26" y="16" width="12" height="32" rx="6" fill="#fde047" stroke="#091838" strokeWidth="2.5" />
            <line x1="26" y1="26" x2="38" y2="26" stroke="#091838" strokeWidth="2" />
            <line x1="26" y1="36" x2="38" y2="36" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Día',
        parts: [{ text: '', isBlank: true }, { text: 'Í A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="12" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
            <line x1="32" y1="12" x2="32" y2="16" stroke="#091838" strokeWidth="2.5" />
            <line x1="32" y1="48" x2="32" y2="52" stroke="#091838" strokeWidth="2.5" />
            <line x1="12" y1="32" x2="16" y2="32" stroke="#091838" strokeWidth="2.5" />
            <line x1="48" y1="32" x2="52" y2="32" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Diente',
        parts: [{ text: '', isBlank: true }, { text: 'I E N T E' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 22 18 C 16 22 16 36 20 44 C 22 48 24 52 28 52 C 32 52 32 44 34 44 C 36 44 36 52 40 52 C 44 52 46 48 48 44 C 52 36 52 22 46 18 C 40 16 36 20 34 20 C 32 20 28 16 22 18 Z" fill="#ffffff" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'DADO', startsWithTarget: true, Component: DadoIcon, hint: 'Da - do' },
      { id: 2, name: 'FLOR', startsWithTarget: false, Component: FlorIcon, hint: 'Flor' },
      { id: 3, name: 'DIENTE', startsWithTarget: true, Component: DienteIcon, hint: 'Dien - te' },
      { id: 4, name: 'DELFÍN', startsWithTarget: true, Component: DelfinIcon, hint: 'Del - fín' }
    ]
  },

  // ==========================================
  // LETRA E
  // ==========================================
  E: {
    letter: 'E',
    letterLower: 'e',
    name: 'Letra E',
    themeColor: 'purple',
    gradientHeader: 'from-purple-500 to-indigo-600',
    accentBg: 'bg-purple-50/70',
    accentBorder: 'border-purple-400',
    phoneticSample: {
      word: 'ES - TRE - LLA',
      description: 'Estrella luminosa'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <polygon points="50,12 62,36 88,38 68,56 74,82 50,68 26,82 32,56 12,38 38,36" fill="#facc15" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <circle cx="43" cy="46" r="3" fill="#091838" />
        <circle cx="57" cy="46" r="3" fill="#091838" />
        <path d="M 45 54 Q 50 60 55 54" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'E', isTarget: true, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 2, letter: 'F', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'E', isTarget: true, bgGrad: 'from-pink-500 to-rose-500', textColor: 'text-white' },
      { id: 4, letter: 'L', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 5, letter: 'E', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 6, letter: 'I', isTarget: false, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'E', isTarget: true, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'T', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 9, letter: 'E', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 10, letter: 'H', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Estrella',
        parts: [{ text: '', isBlank: true }, { text: 'S T R E L L A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="32,10 38,24 54,26 42,36 46,52 32,44 18,52 22,36 10,26 26,24" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Elefante',
        parts: [{ text: '', isBlank: true }, { text: 'L' }, { text: '', isBlank: true }, { text: 'F A N T' }, { text: '', isBlank: true }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <ellipse cx="24" cy="32" rx="8" ry="12" fill="#94a3b8" stroke="#091838" strokeWidth="2" />
            <circle cx="36" cy="32" r="12" fill="#cbd5e1" stroke="#091838" strokeWidth="2.5" />
            <path d="M 44 36 C 50 38 52 32 50 24" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Escalera',
        parts: [{ text: '', isBlank: true }, { text: 'S C A L E R A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <line x1="24" y1="12" x2="20" y2="52" stroke="#091838" strokeWidth="2.5" />
            <line x1="40" y1="12" x2="44" y2="52" stroke="#091838" strokeWidth="2.5" />
            <line x1="23" y1="20" x2="41" y2="20" stroke="#facc15" strokeWidth="2.5" />
            <line x1="22" y1="32" x2="42" y2="32" stroke="#facc15" strokeWidth="2.5" />
            <line x1="21" y1="44" x2="43" y2="44" stroke="#facc15" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Erizo',
        parts: [{ text: '', isBlank: true }, { text: 'R I Z O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 16 38 C 16 24 38 20 48 30 C 52 34 50 44 42 44 L 20 44 Z" fill="#78350f" stroke="#091838" strokeWidth="2.5" />
            <circle cx="44" cy="36" r="2" fill="#091838" />
            <line x1="24" y1="22" x2="20" y2="14" stroke="#091838" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="20" x2="32" y2="12" stroke="#091838" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="24" x2="44" y2="16" stroke="#091838" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'ESTRELLA', startsWithTarget: true, Component: EstrellaIcon, hint: 'Es - tre - lla' },
      { id: 2, name: 'LUNA', startsWithTarget: false, Component: LunaIcon, hint: 'Lu - na' },
      { id: 3, name: 'ELEFANTE', startsWithTarget: true, Component: ElefanteIcon, hint: 'E - le - fan - te' },
      { id: 4, name: 'ESCALERA', startsWithTarget: true, Component: EscaleraIcon, hint: 'Es - ca - le - ra' }
    ]
  },

  // ==========================================
  // LETRA F
  // ==========================================
  F: {
    letter: 'F',
    letterLower: 'f',
    name: 'Letra F',
    themeColor: 'rose',
    gradientHeader: 'from-rose-500 to-red-500',
    accentBg: 'bg-rose-50/70',
    accentBorder: 'border-rose-400',
    phoneticSample: {
      word: 'FO - CA',
      description: 'Foca marina'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <circle cx="78" cy="24" r="8" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
        <path d="M 20 78 C 20 68 34 62 44 58 C 52 54 60 44 68 34 C 74 38 76 46 72 54 C 64 70 52 78 20 78 Z" fill="#93c5fd" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <circle cx="66" cy="38" r="2.5" fill="#091838" />
        <line x1="70" y1="42" x2="78" y2="40" stroke="#091838" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'F', isTarget: true, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 2, letter: 'E', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'T', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'F', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'P', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'F', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'L', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'F', isTarget: true, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 9, letter: 'R', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
      { id: 10, letter: 'F', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Foca',
        parts: [{ text: '', isBlank: true }, { text: 'O C A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="48" cy="18" r="5" fill="#ef4444" stroke="#091838" strokeWidth="1.5" />
            <path d="M 14 50 C 14 42 26 38 34 34 C 40 30 46 24 50 18 C 54 22 54 28 50 34 C 44 44 36 50 14 50 Z" fill="#93c5fd" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Fresa',
        parts: [{ text: '', isBlank: true }, { text: 'R E S A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="32,14 26,10 24,18 32,20" fill="#22c55e" stroke="#091838" strokeWidth="1.5" />
            <polygon points="32,14 38,10 40,18 32,20" fill="#22c55e" stroke="#091838" strokeWidth="1.5" />
            <path d="M 20 22 C 16 32 18 46 32 54 C 46 46 48 32 44 22 Z" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
            <circle cx="28" cy="30" r="1" fill="#fde047" />
            <circle cx="36" cy="30" r="1" fill="#fde047" />
            <circle cx="32" cy="40" r="1" fill="#fde047" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Fuego',
        parts: [{ text: '', isBlank: true }, { text: 'U E G O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <line x1="16" y1="52" x2="48" y2="52" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
            <path d="M 32 16 C 38 24 46 32 46 42 C 46 48 40 52 32 52 C 24 52 18 48 18 42 C 18 32 26 24 32 16 Z" fill="#ef4444" stroke="#091838" strokeWidth="2" />
            <path d="M 32 26 C 36 32 40 38 40 44 C 40 48 36 50 32 50 C 28 50 24 48 24 44 C 24 38 28 32 32 26 Z" fill="#facc15" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Foto',
        parts: [{ text: '', isBlank: true }, { text: 'O T O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="14" y="20" width="36" height="26" rx="4" fill="#38bdf8" stroke="#091838" strokeWidth="2.5" />
            <circle cx="32" cy="33" r="8" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="33" r="4" fill="#091838" />
            <rect x="20" y="16" width="10" height="4" fill="#f43f5e" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'FOCA', startsWithTarget: true, Component: FocaIcon, hint: 'Fo - ca' },
      { id: 2, name: 'PELOTA', startsWithTarget: false, Component: PelotaIcon, hint: 'Pe - lo - ta' },
      { id: 3, name: 'FRESA', startsWithTarget: true, Component: FresaIcon, hint: 'Fre - sa' },
      { id: 4, name: 'FUEGO', startsWithTarget: true, Component: FuegoIcon, hint: 'Fue - go' }
    ]
  },

  // ==========================================
  // LETRA G
  // ==========================================
  G: {
    letter: 'G',
    letterLower: 'g',
    name: 'Letra G',
    themeColor: 'amber',
    gradientHeader: 'from-amber-500 to-yellow-500',
    accentBg: 'bg-amber-50/70',
    accentBorder: 'border-amber-400',
    phoneticSample: {
      word: 'GA - TO',
      description: 'Gatito curioso'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <polygon points="32,24 22,46 44,42" fill="#fb923c" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
        <polygon points="68,24 56,42 78,46" fill="#fb923c" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
        <circle cx="50" cy="56" r="26" fill="#fed7aa" stroke="#091838" strokeWidth="4.5" />
        <circle cx="40" cy="52" r="3" fill="#091838" />
        <circle cx="60" cy="52" r="3" fill="#091838" />
        <polygon points="50,58 46,63 54,63" fill="#f43f5e" stroke="#091838" strokeWidth="1.5" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'G', isTarget: true, bgGrad: 'from-amber-400 to-orange-500', textColor: 'text-white' },
      { id: 2, letter: 'C', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'O', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'G', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'Q', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'G', isTarget: true, bgGrad: 'from-teal-400 to-cyan-500', textColor: 'text-white' },
      { id: 7, letter: 'D', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'G', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'S', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
      { id: 10, letter: 'G', isTarget: true, bgGrad: 'from-red-500 to-orange-500', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Gato',
        parts: [{ text: '', isBlank: true }, { text: 'A T O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="20,16 14,28 28,26" fill="#fb923c" stroke="#091838" strokeWidth="2" />
            <polygon points="44,16 36,26 50,28" fill="#fb923c" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="34" r="16" fill="#fed7aa" stroke="#091838" strokeWidth="2.5" />
            <circle cx="26" cy="32" r="2" fill="#091838" />
            <circle cx="38" cy="32" r="2" fill="#091838" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Gorra',
        parts: [{ text: '', isBlank: true }, { text: 'O R R A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 18 40 C 16 26 26 22 38 22 C 48 22 52 28 50 40 Z" fill="#38bdf8" stroke="#091838" strokeWidth="2.5" />
            <path d="M 16 40 C 30 38 50 38 60 40 C 60 46 44 46 16 43 Z" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Gota',
        parts: [{ text: '', isBlank: true }, { text: 'O T A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 32 14 C 32 14 18 34 18 42 C 18 50 24 54 32 54 C 40 54 46 50 46 42 C 46 34 32 14 32 14 Z" fill="#38bdf8" stroke="#091838" strokeWidth="2.5" />
            <ellipse cx="26" cy="40" rx="2" ry="5" fill="#ffffff" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Gusano',
        parts: [{ text: '', isBlank: true }, { text: 'U S A N O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="16" cy="40" r="6" fill="#a3e635" stroke="#091838" strokeWidth="2" />
            <circle cx="26" cy="36" r="6" fill="#84cc16" stroke="#091838" strokeWidth="2" />
            <circle cx="36" cy="40" r="6" fill="#a3e635" stroke="#091838" strokeWidth="2" />
            <circle cx="48" cy="30" r="8" fill="#bef264" stroke="#091838" strokeWidth="2.5" />
            <circle cx="46" cy="28" r="1.5" fill="#091838" />
            <circle cx="52" cy="28" r="1.5" fill="#091838" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'GATO', startsWithTarget: true, Component: GatoIcon, hint: 'Ga - to' },
      { id: 2, name: 'SOL', startsWithTarget: false, Component: SolIcon, hint: 'Sol' },
      { id: 3, name: 'GORRA', startsWithTarget: true, Component: GorraIcon, hint: 'Go - rra' },
      { id: 4, name: 'GUSANO', startsWithTarget: true, Component: GusanoIcon, hint: 'Gu - sa - no' }
    ]
  },

  // ==========================================
  // LETRA H
  // ==========================================
  H: {
    letter: 'H',
    letterLower: 'h',
    name: 'Letra H',
    themeColor: 'emerald',
    gradientHeader: 'from-emerald-500 to-green-600',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'border-emerald-400',
    phoneticSample: {
      word: 'HO - JA',
      description: 'Hoja natural (muda)'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <path d="M 22 84 C 40 68 62 44 80 20" stroke="#15803d" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 28 78 C 14 52 36 22 78 22 C 78 64 48 86 28 78 Z" fill="#4ade80" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <circle cx="48" cy="62" r="3" fill="#bae6fd" stroke="#091838" strokeWidth="1.5" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'H', isTarget: true, bgGrad: 'from-emerald-400 to-teal-500', textColor: 'text-white' },
      { id: 2, letter: 'N', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'M', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'H', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'K', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 6, letter: 'H', isTarget: true, bgGrad: 'from-cyan-400 to-blue-500', textColor: 'text-white' },
      { id: 7, letter: 'I', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 8, letter: 'H', isTarget: true, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 9, letter: 'U', isTarget: false, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 10, letter: 'H', isTarget: true, bgGrad: 'from-emerald-500 to-green-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Hoja',
        parts: [{ text: '', isBlank: true }, { text: 'O J A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 16 52 C 26 42 40 28 50 14" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
            <path d="M 20 48 C 10 32 24 16 50 16 C 50 42 32 54 20 48 Z" fill="#4ade80" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Huevo',
        parts: [{ text: '', isBlank: true }, { text: 'U E V O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 32 14 C 20 14 16 30 16 42 C 16 50 22 54 32 54 C 42 54 48 50 48 42 C 48 30 44 14 32 14 Z" fill="#ffedd5" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Hada',
        parts: [{ text: '', isBlank: true }, { text: 'A D A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <ellipse cx="20" cy="28" rx="8" ry="12" fill="#c4b5fd" stroke="#091838" strokeWidth="2" />
            <ellipse cx="44" cy="28" rx="8" ry="12" fill="#c4b5fd" stroke="#091838" strokeWidth="2" />
            <polygon points="32,32 24,52 40,52" fill="#f472b6" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="24" r="8" fill="#fed7aa" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Hielo',
        parts: [{ text: '', isBlank: true }, { text: 'I E L O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="20" y="20" width="24" height="24" rx="4" fill="#e0f2fe" stroke="#091838" strokeWidth="2.5" />
            <path d="M 24 24 L 40 24" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 24 28 L 24 40" stroke="#38bdf8" strokeWidth="2" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'HOJA', startsWithTarget: true, Component: HojaIcon, hint: 'Ho - ja' },
      { id: 2, name: 'CASA', startsWithTarget: false, Component: CasaIcon, hint: 'Ca - sa' },
      { id: 3, name: 'HUEVO', startsWithTarget: true, Component: HuevoIcon, hint: 'Hue - vo' },
      { id: 4, name: 'HADA', startsWithTarget: true, Component: HadaIcon, hint: 'Ha - da' }
    ]
  },

  // ==========================================
  // LETRA I
  // ==========================================
  I: {
    letter: 'I',
    letterLower: 'i',
    name: 'Letra I',
    themeColor: 'sky',
    gradientHeader: 'from-sky-400 to-indigo-500',
    accentBg: 'bg-sky-50/70',
    accentBorder: 'border-sky-400',
    phoneticSample: {
      word: 'IS - LA',
      description: 'Isla paradisíaca'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <path d="M 52 68 C 50 48 58 38 60 30" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 60 30 C 44 26 36 34 34 38" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M 60 30 C 72 22 84 26 88 32" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M 16 76 C 30 64 70 64 84 76 Z" fill="#fde047" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'I', isTarget: true, bgGrad: 'from-sky-400 to-indigo-500', textColor: 'text-white' },
      { id: 2, letter: 'L', isTarget: false, bgGrad: 'from-pink-500 to-rose-500', textColor: 'text-white' },
      { id: 3, letter: 'T', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'I', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'J', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'I', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'E', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'I', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'F', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'I', isTarget: true, bgGrad: 'from-blue-500 to-sky-500', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Isla',
        parts: [{ text: '', isBlank: true }, { text: 'S L A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 36 44 C 34 32 40 24 40 20" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
            <path d="M 40 20 C 30 18 24 22 22 26" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 12 48 C 22 40 46 40 54 48 Z" fill="#fde047" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Iglú',
        parts: [{ text: '', isBlank: true }, { text: 'G L Ú' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 14 50 C 14 26 50 26 50 50 Z" fill="#e0f2fe" stroke="#091838" strokeWidth="2.5" />
            <path d="M 26 50 C 26 40 38 40 38 50 Z" fill="#0284c7" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Imán',
        parts: [{ text: '', isBlank: true }, { text: 'M Á N' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 20 20 L 20 38 C 20 48 44 48 44 38 L 44 20" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" fill="none" />
            <rect x="16" y="18" width="8" height="6" fill="#e2e8f0" stroke="#091838" strokeWidth="1.5" />
            <rect x="40" y="18" width="8" height="6" fill="#e2e8f0" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Indio',
        parts: [{ text: '', isBlank: true }, { text: 'N D' }, { text: '', isBlank: true }, { text: 'O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="36" r="14" fill="#fed7aa" stroke="#091838" strokeWidth="2.5" />
            <rect x="18" y="24" width="28" height="5" fill="#f43f5e" stroke="#091838" strokeWidth="2" />
            <polygon points="40,24 44,12 42,24" fill="#38bdf8" stroke="#091838" strokeWidth="1.5" />
            <circle cx="28" cy="34" r="1.5" fill="#091838" />
            <circle cx="36" cy="34" r="1.5" fill="#091838" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'ISLA', startsWithTarget: true, Component: IslaIcon, hint: 'Is - la' },
      { id: 2, name: 'BARCO', startsWithTarget: false, Component: BarcoIcon, hint: 'Bar - co' },
      { id: 3, name: 'IGLÚ', startsWithTarget: true, Component: IgluIcon, hint: 'I - glú' },
      { id: 4, name: 'IMÁN', startsWithTarget: true, Component: ImanIcon, hint: 'I - mán' }
    ]
  },

  // ==========================================
  // LETRA J
  // ==========================================
  J: {
    letter: 'J',
    letterLower: 'j',
    name: 'Letra J',
    themeColor: 'purple',
    gradientHeader: 'from-purple-500 to-pink-500',
    accentBg: 'bg-purple-50/70',
    accentBorder: 'border-purple-400',
    phoneticSample: {
      word: 'JI - RA - FA',
      description: 'Jirafa alta'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <path d="M 44 86 L 46 36 L 62 36 L 64 86 Z" fill="#fde047" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <ellipse cx="54" cy="40" rx="14" ry="10" fill="#fef08a" stroke="#091838" strokeWidth="3" />
        <line x1="46" y1="24" x2="44" y2="14" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
        <circle cx="43" cy="13" r="2.5" fill="#ea580c" stroke="#091838" strokeWidth="1.5" />
        <circle cx="53" cy="54" r="4" fill="#ea580c" />
        <circle cx="56" cy="70" r="3.5" fill="#ea580c" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'J', isTarget: true, bgGrad: 'from-purple-500 to-pink-500', textColor: 'text-white' },
      { id: 2, letter: 'I', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'L', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'J', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'F', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 6, letter: 'J', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'U', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'J', isTarget: true, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 9, letter: 'T', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
      { id: 10, letter: 'J', isTarget: true, bgGrad: 'from-fuchsia-400 to-purple-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Jirafa',
        parts: [{ text: '', isBlank: true }, { text: 'I R A F A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="28" y="24" width="8" height="28" fill="#fde047" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="20" r="6" fill="#fde047" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="34" r="2" fill="#ea580c" />
            <circle cx="32" cy="42" r="2" fill="#ea580c" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Jarra',
        parts: [{ text: '', isBlank: true }, { text: 'A R R A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 22 20 L 44 20 L 42 50 C 42 54 24 54 24 50 Z" fill="#e0f2fe" stroke="#091838" strokeWidth="2.5" />
            <path d="M 44 26 C 54 26 54 44 44 46" stroke="#091838" strokeWidth="3" fill="none" />
            <path d="M 24 32 L 42 32 L 40 48 C 40 52 26 52 26 48 Z" fill="#fb923c" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Juguete',
        parts: [{ text: '', isBlank: true }, { text: 'U G U E T E' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="34" y="22" width="16" height="22" rx="2" fill="#ef4444" stroke="#091838" strokeWidth="2" />
            <rect x="16" y="30" width="18" height="14" rx="2" fill="#38bdf8" stroke="#091838" strokeWidth="2" />
            <circle cx="22" cy="48" r="5" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <circle cx="42" cy="48" r="5" fill="#facc15" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Jugo',
        parts: [{ text: '', isBlank: true }, { text: 'U' }, { text: '', isBlank: true }, { text: 'O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="20,18 44,18 40,52 24,52" fill="#fde047" stroke="#091838" strokeWidth="2.5" />
            <line x1="36" y1="12" x2="28" y2="34" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'JIRAFA', startsWithTarget: true, Component: JirafaIcon, hint: 'Ji - ra - fa' },
      { id: 2, name: 'CONEJO', startsWithTarget: false, Component: ConejoIcon, hint: 'Co - ne - jo' },
      { id: 3, name: 'JARRA', startsWithTarget: true, Component: JarraIcon, hint: 'Ja - rra' },
      { id: 4, name: 'JUGUETE', startsWithTarget: true, Component: JugueteIcon, hint: 'Ju - gue - te' }
    ]
  },

  // ==========================================
  // LETRA K
  // ==========================================
  K: {
    letter: 'K',
    letterLower: 'k',
    name: 'Letra K',
    themeColor: 'amber',
    gradientHeader: 'from-amber-500 to-orange-500',
    accentBg: 'bg-amber-50/70',
    accentBorder: 'border-amber-400',
    phoneticSample: {
      word: 'KO - A - LA',
      description: 'Koala en el árbol'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <circle cx="28" cy="38" r="14" fill="#94a3b8" stroke="#091838" strokeWidth="4" />
        <circle cx="28" cy="38" r="8" fill="#f472b6" opacity="0.6" />
        <circle cx="72" cy="38" r="14" fill="#94a3b8" stroke="#091838" strokeWidth="4" />
        <circle cx="72" cy="38" r="8" fill="#f472b6" opacity="0.6" />
        <circle cx="50" cy="54" r="24" fill="#cbd5e1" stroke="#091838" strokeWidth="4.5" />
        <ellipse cx="50" cy="56" rx="7" ry="11" fill="#091838" />
        <circle cx="38" cy="48" r="2.5" fill="#091838" />
        <circle cx="62" cy="48" r="2.5" fill="#091838" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'K', isTarget: true, bgGrad: 'from-amber-400 to-orange-500', textColor: 'text-white' },
      { id: 2, letter: 'X', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'H', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'K', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'R', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'K', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'Y', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'K', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'T', isTarget: false, bgGrad: 'from-red-500 to-orange-500', textColor: 'text-white' },
      { id: 10, letter: 'K', isTarget: true, bgGrad: 'from-blue-500 to-indigo-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Koala',
        parts: [{ text: '', isBlank: true }, { text: 'O A L A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="20" cy="24" r="8" fill="#94a3b8" stroke="#091838" strokeWidth="2" />
            <circle cx="44" cy="24" r="8" fill="#94a3b8" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="34" r="14" fill="#cbd5e1" stroke="#091838" strokeWidth="2.5" />
            <ellipse cx="32" cy="36" rx="4" ry="6" fill="#091838" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Kiwi',
        parts: [{ text: '', isBlank: true }, { text: 'I W I' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="18" fill="#854d0e" stroke="#091838" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="14" fill="#84cc16" stroke="#091838" strokeWidth="2" />
            <ellipse cx="32" cy="32" rx="4" ry="6" fill="#fef08a" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Kilo',
        parts: [{ text: '', isBlank: true }, { text: 'I L O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="18" y="24" width="28" height="26" rx="4" fill="#64748b" stroke="#091838" strokeWidth="2.5" />
            <circle cx="32" cy="20" r="5" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="36" r="6" fill="#ffffff" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Kimono',
        parts: [{ text: '', isBlank: true }, { text: 'I M O N O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 20 18 L 44 18 L 50 32 L 44 36 L 42 50 L 22 50 L 20 36 L 14 32 Z" fill="#ffffff" stroke="#091838" strokeWidth="2" />
            <rect x="22" y="36" width="20" height="5" fill="#091838" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'KOALA', startsWithTarget: true, Component: KoalaIcon, hint: 'Ko - a - la' },
      { id: 2, name: 'PATO', startsWithTarget: false, Component: PatoIcon, hint: 'Pa - to' },
      { id: 3, name: 'KIWI', startsWithTarget: true, Component: KiwiIcon, hint: 'Ki - wi' },
      { id: 4, name: 'KIMONO', startsWithTarget: true, Component: KimonoIcon, hint: 'Ki - mo - no' }
    ]
  },

  // ==========================================
  // LETRA L
  // ==========================================
  L: {
    letter: 'L',
    letterLower: 'l',
    name: 'Letra L',
    themeColor: 'sky',
    gradientHeader: 'from-sky-500 to-blue-600',
    accentBg: 'bg-sky-50/70',
    accentBorder: 'border-sky-400',
    phoneticSample: {
      word: 'LE - ÓN',
      description: 'León rey de la selva'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <circle cx="50" cy="50" r="32" fill="#f97316" stroke="#091838" strokeWidth="4.5" strokeDasharray="14 3" />
        <circle cx="50" cy="50" r="21" fill="#fde047" stroke="#091838" strokeWidth="4" />
        <circle cx="43" cy="48" r="2.5" fill="#091838" />
        <circle cx="57" cy="48" r="2.5" fill="#091838" />
        <polygon points="50,53 46,57 54,57" fill="#ea580c" stroke="#091838" strokeWidth="1.5" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'L', isTarget: true, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 2, letter: 'I', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 3, letter: 'T', isTarget: false, bgGrad: 'from-pink-400 to-rose-500', textColor: 'text-white' },
      { id: 4, letter: 'L', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'J', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
      { id: 6, letter: 'L', isTarget: true, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 7, letter: 'E', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'L', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'F', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'L', isTarget: true, bgGrad: 'from-teal-400 to-cyan-500', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'León',
        parts: [{ text: '', isBlank: true }, { text: 'E Ó N' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="18" fill="#f97316" stroke="#091838" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="12" fill="#fde047" stroke="#091838" strokeWidth="2" />
            <circle cx="28" cy="30" r="1.5" fill="#091838" />
            <circle cx="36" cy="30" r="1.5" fill="#091838" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Luna',
        parts: [{ text: '', isBlank: true }, { text: 'U N A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 40 16 C 24 18 18 34 26 50 C 30 56 38 56 44 52 C 34 50 30 38 34 28 C 36 24 40 20 40 16 Z" fill="#fde047" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Lápiz',
        parts: [{ text: '', isBlank: true }, { text: 'Á P I Z' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 22 18 L 44 40 L 38 46 L 16 24 Z" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
            <polygon points="44,40 52,48 38,46" fill="#fed7aa" stroke="#091838" strokeWidth="2" />
            <polygon points="48,44 52,48 46,46" fill="#091838" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Loro',
        parts: [{ text: '', isBlank: true }, { text: 'O R O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="28" r="12" fill="#22c55e" stroke="#091838" strokeWidth="2.5" />
            <polygon points="40,26 52,30 40,36" fill="#f97316" stroke="#091838" strokeWidth="2" />
            <circle cx="36" cy="26" r="2" fill="#091838" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'LEÓN', startsWithTarget: true, Component: LeonIcon, hint: 'Le - ón' },
      { id: 2, name: 'MANZANA', startsWithTarget: false, Component: ManzanaIcon, hint: 'Man - za - na' },
      { id: 3, name: 'LÁPIZ', startsWithTarget: true, Component: LapizIcon, hint: 'Lá - piz' },
      { id: 4, name: 'LÁMPARA', startsWithTarget: true, Component: LamparaIcon, hint: 'Lám - pa - ra' }
    ]
  },

  // ==========================================
  // LETRA M
  // ==========================================
  M: {
    letter: 'M',
    letterLower: 'm',
    name: 'Letra M',
    themeColor: 'rose',
    gradientHeader: 'from-rose-500 to-pink-600',
    accentBg: 'bg-rose-50/70',
    accentBorder: 'border-rose-400',
    phoneticSample: {
      word: 'MO - NO',
      description: 'Mono saltarín'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <circle cx="24" cy="50" r="11" fill="#854d0e" stroke="#091838" strokeWidth="3.5" />
        <circle cx="24" cy="50" r="6" fill="#fed7aa" />
        <circle cx="76" cy="50" r="11" fill="#854d0e" stroke="#091838" strokeWidth="3.5" />
        <circle cx="76" cy="50" r="6" fill="#fed7aa" />
        <circle cx="50" cy="50" r="24" fill="#854d0e" stroke="#091838" strokeWidth="4.5" />
        <ellipse cx="50" cy="58" rx="14" ry="11" fill="#fed7aa" stroke="#091838" strokeWidth="2.5" />
        <circle cx="43" cy="44" r="2.5" fill="#091838" />
        <circle cx="57" cy="44" r="2.5" fill="#091838" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'M', isTarget: true, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 2, letter: 'N', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'W', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'M', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'V', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'M', isTarget: true, bgGrad: 'from-teal-400 to-cyan-500', textColor: 'text-white' },
      { id: 7, letter: 'H', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'M', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'U', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'M', isTarget: true, bgGrad: 'from-blue-500 to-indigo-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Mono',
        parts: [{ text: '', isBlank: true }, { text: 'O N O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="16" cy="32" r="7" fill="#854d0e" stroke="#091838" strokeWidth="2" />
            <circle cx="48" cy="32" r="7" fill="#854d0e" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="32" r="16" fill="#854d0e" stroke="#091838" strokeWidth="2.5" />
            <ellipse cx="32" cy="36" rx="10" ry="8" fill="#fed7aa" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Mano',
        parts: [{ text: '', isBlank: true }, { text: 'A N O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 22 34 L 22 22 C 22 18 28 18 28 22 L 28 32 L 32 20 C 32 16 38 16 38 20 L 38 32 L 42 22 C 42 18 48 18 48 22 L 48 38 C 48 48 22 48 22 38 Z" fill="#fed7aa" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Mesa',
        parts: [{ text: '', isBlank: true }, { text: 'E S A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="14,28 50,28 56,34 8,34" fill="#fb923c" stroke="#091838" strokeWidth="2" />
            <line x1="16" y1="34" x2="16" y2="52" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
            <line x1="48" y1="34" x2="48" y2="52" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Mamá',
        parts: [{ text: '', isBlank: true }, { text: 'A' }, { text: '', isBlank: true }, { text: 'Á' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="28" r="14" fill="#fed7aa" stroke="#091838" strokeWidth="2.5" />
            <path d="M 18 24 C 18 14 46 14 46 24" fill="#78350f" stroke="#091838" strokeWidth="2" />
            <path d="M 26 40 Q 32 44 38 40" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'MONO', startsWithTarget: true, Component: MonoIcon, hint: 'Mo - no' },
      { id: 2, name: 'SOL', startsWithTarget: false, Component: SolIcon, hint: 'Sol' },
      { id: 3, name: 'MARIPOSA', startsWithTarget: true, Component: MariposaIcon, hint: 'Ma - ri - po - sa' },
      { id: 4, name: 'MESA', startsWithTarget: true, Component: MesaIcon, hint: 'Me - sa' }
    ]
  },

  // ==========================================
  // LETRA N
  // ==========================================
  N: {
    letter: 'N',
    letterLower: 'n',
    name: 'Letra N',
    themeColor: 'emerald',
    gradientHeader: 'from-emerald-500 to-teal-600',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'border-emerald-400',
    phoneticSample: {
      word: 'NU - BE',
      description: 'Nube en el cielo'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <path d="M 30 68 L 74 68 C 84 68 88 58 82 50 C 86 38 74 30 64 34 C 58 20 40 22 36 34 C 26 32 18 42 22 52 C 16 60 22 68 30 68 Z" fill="#e0f2fe" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <circle cx="44" cy="50" r="2.5" fill="#091838" />
        <circle cx="62" cy="50" r="2.5" fill="#091838" />
        <path d="M 49 55 Q 53 60 57 55" stroke="#091838" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'N', isTarget: true, bgGrad: 'from-emerald-400 to-teal-500', textColor: 'text-white' },
      { id: 2, letter: 'M', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'U', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'N', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'H', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 6, letter: 'N', isTarget: true, bgGrad: 'from-cyan-400 to-blue-500', textColor: 'text-white' },
      { id: 7, letter: 'Z', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'N', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'V', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'N', isTarget: true, bgGrad: 'from-emerald-500 to-green-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Nube',
        parts: [{ text: '', isBlank: true }, { text: 'U B E' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 20 44 L 46 44 C 54 44 56 36 50 32 C 52 24 44 20 38 22 C 34 14 24 16 22 22 C 16 20 12 28 16 34 C 12 40 16 44 20 44 Z" fill="#e0f2fe" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Nido',
        parts: [{ text: '', isBlank: true }, { text: 'I D O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <ellipse cx="26" cy="30" rx="4" ry="6" fill="#7dd3fc" />
            <ellipse cx="38" cy="30" rx="4" ry="6" fill="#7dd3fc" />
            <path d="M 14 34 C 14 50 50 50 50 34 Z" fill="#b45309" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Naranja',
        parts: [{ text: '', isBlank: true }, { text: 'A R A' }, { text: '', isBlank: true }, { text: 'J A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="34" r="16" fill="#f97316" stroke="#091838" strokeWidth="2.5" />
            <path d="M 32 18 C 32 12 36 10 38 8" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Nariz',
        parts: [{ text: '', isBlank: true }, { text: 'A R I Z' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 30 18 L 30 38 C 30 44 42 44 42 38" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
            <ellipse cx="26" cy="40" rx="3" ry="2" fill="#091838" />
            <ellipse cx="38" cy="40" rx="3" ry="2" fill="#091838" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'NUBE', startsWithTarget: true, Component: NubeIcon, hint: 'Nu - be' },
      { id: 2, name: 'PELOTA', startsWithTarget: false, Component: PelotaIcon, hint: 'Pe - lo - ta' },
      { id: 3, name: 'NIDO', startsWithTarget: true, Component: NidoIcon, hint: 'Ni - do' },
      { id: 4, name: 'NARANJA', startsWithTarget: true, Component: NaranjaIcon, hint: 'Na - ran - ja' }
    ]
  },

  // ==========================================
  // LETRA O
  // ==========================================
  O: {
    letter: 'O',
    letterLower: 'o',
    name: 'Letra O',
    themeColor: 'purple',
    gradientHeader: 'from-purple-500 to-indigo-600',
    accentBg: 'bg-purple-50/70',
    accentBorder: 'border-purple-400',
    phoneticSample: {
      word: 'O - SO',
      description: 'Oso cariñoso'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <circle cx="30" cy="34" r="10" fill="#78350f" stroke="#091838" strokeWidth="3.5" />
        <circle cx="70" cy="34" r="10" fill="#78350f" stroke="#091838" strokeWidth="3.5" />
        <circle cx="50" cy="54" r="24" fill="#92400e" stroke="#091838" strokeWidth="4.5" />
        <ellipse cx="50" cy="62" rx="12" ry="9" fill="#fde68a" stroke="#091838" strokeWidth="2.5" />
        <ellipse cx="50" cy="58" rx="5" ry="3" fill="#091838" />
        <circle cx="41" cy="48" r="2.5" fill="#091838" />
        <circle cx="59" cy="48" r="2.5" fill="#091838" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'O', isTarget: true, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 2, letter: 'C', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'Q', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'O', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'D', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 6, letter: 'O', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'G', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'O', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'U', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'O', isTarget: true, bgGrad: 'from-blue-500 to-sky-500', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Oso',
        parts: [{ text: '', isBlank: true }, { text: 'S' }, { text: '', isBlank: true }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="20" cy="22" r="6" fill="#78350f" stroke="#091838" strokeWidth="2" />
            <circle cx="44" cy="22" r="6" fill="#78350f" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="34" r="16" fill="#92400e" stroke="#091838" strokeWidth="2.5" />
            <ellipse cx="32" cy="38" rx="8" ry="6" fill="#fde68a" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Ojo',
        parts: [{ text: '', isBlank: true }, { text: 'J' }, { text: '', isBlank: true }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 12 32 C 20 20 44 20 52 32 C 44 44 20 44 12 32 Z" fill="#ffffff" stroke="#091838" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="8" fill="#38bdf8" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="32" r="4" fill="#091838" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Olla',
        parts: [{ text: '', isBlank: true }, { text: 'L L A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="18" y="26" width="28" height="22" rx="4" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
            <rect x="14" y="22" width="36" height="5" rx="2" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="18" r="3" fill="#facc15" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Oreja',
        parts: [{ text: '', isBlank: true }, { text: 'R E J A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 24 16 C 38 16 46 26 42 38 C 38 48 24 50 20 46" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 28 26 C 34 26 36 32 34 36" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'OSO', startsWithTarget: true, Component: OsoIcon, hint: 'O - so' },
      { id: 2, name: 'CASA', startsWithTarget: false, Component: CasaIcon, hint: 'Ca - sa' },
      { id: 3, name: 'OJO', startsWithTarget: true, Component: OjoIcon, hint: 'O - jo' },
      { id: 4, name: 'OLLA', startsWithTarget: true, Component: OllaIcon, hint: 'O - lla' }
    ]
  },

  // ==========================================
  // LETRA P
  // ==========================================
  P: {
    letter: 'P',
    letterLower: 'p',
    name: 'Letra P',
    themeColor: 'rose',
    gradientHeader: 'from-rose-500 to-pink-500',
    accentBg: 'bg-rose-50/70',
    accentBorder: 'border-rose-400',
    phoneticSample: {
      word: 'PE - LLA',
      description: 'Pez nadador'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <polygon points="26,50 10,32 10,68" fill="#f97316" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
        <ellipse cx="52" cy="50" rx="30" ry="22" fill="#fb923c" stroke="#091838" strokeWidth="4.5" />
        <circle cx="68" cy="44" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
        <circle cx="70" cy="44" r="2" fill="#091838" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'P', isTarget: true, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 2, letter: 'B', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'D', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'P', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'R', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'P', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'Q', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'P', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'T', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'P', isTarget: true, bgGrad: 'from-blue-500 to-indigo-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Pez',
        parts: [{ text: '', isBlank: true }, { text: 'E Z' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="18,32 8,20 8,44" fill="#f97316" stroke="#091838" strokeWidth="2" />
            <ellipse cx="34" cy="32" rx="18" ry="14" fill="#fb923c" stroke="#091838" strokeWidth="2.5" />
            <circle cx="44" cy="28" r="2.5" fill="#ffffff" />
            <circle cx="45" cy="28" r="1.5" fill="#091838" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Pelota',
        parts: [{ text: '', isBlank: true }, { text: 'E L O T A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="16" fill="#f97316" stroke="#091838" strokeWidth="2.5" />
            <path d="M 32 16 C 24 24 24 40 32 48" fill="#38bdf8" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Pato',
        parts: [{ text: '', isBlank: true }, { text: 'A T O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 16 40 C 16 30 36 30 42 36 Z" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <circle cx="40" cy="24" r="10" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <polygon points="48,24 58,26 48,30" fill="#fb923c" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Papá',
        parts: [{ text: '', isBlank: true }, { text: 'A' }, { text: '', isBlank: true }, { text: 'Á' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="26" r="12" fill="#fed7aa" stroke="#091838" strokeWidth="2" />
            <rect x="22" y="32" width="20" height="4" rx="2" fill="#091838" />
            <circle cx="28" cy="24" r="1.5" fill="#091838" />
            <circle cx="36" cy="24" r="1.5" fill="#091838" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'PEZ', startsWithTarget: true, Component: PezIcon, hint: 'Pez' },
      { id: 2, name: 'SOL', startsWithTarget: false, Component: SolIcon, hint: 'Sol' },
      { id: 3, name: 'PELOTA', startsWithTarget: true, Component: PelotaIcon, hint: 'Pe - lo - ta' },
      { id: 4, name: 'PIÑA', startsWithTarget: true, Component: PinaIcon, hint: 'Pi - ña' }
    ]
  },

  // ==========================================
  // LETRA Q
  // ==========================================
  Q: {
    letter: 'Q',
    letterLower: 'q',
    name: 'Letra Q',
    themeColor: 'amber',
    gradientHeader: 'from-amber-500 to-yellow-500',
    accentBg: 'bg-amber-50/70',
    accentBorder: 'border-amber-400',
    phoneticSample: {
      word: 'QUE - SO',
      description: 'Rico queso amarillo'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <polygon points="18,66 82,66 70,36 18,50" fill="#facc15" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <polygon points="70,36 18,50 36,28 78,28" fill="#fde047" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
        <circle cx="56" cy="54" r="3.5" fill="#eab308" />
        <ellipse cx="36" cy="58" rx="5" ry="3" fill="#eab308" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'Q', isTarget: true, bgGrad: 'from-amber-400 to-yellow-500', textColor: 'text-white' },
      { id: 2, letter: 'O', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'P', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'Q', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'D', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'Q', isTarget: true, bgGrad: 'from-teal-400 to-cyan-500', textColor: 'text-white' },
      { id: 7, letter: 'C', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 8, letter: 'Q', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'G', isTarget: false, bgGrad: 'from-indigo-400 to-blue-600', textColor: 'text-white' },
      { id: 10, letter: 'Q', isTarget: true, bgGrad: 'from-amber-500 to-orange-500', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Queso',
        parts: [{ text: '', isBlank: true }, { text: 'U E S O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="12,44 52,44 44,24 12,32" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
            <polygon points="44,24 12,32 24,18 50,18" fill="#fde047" stroke="#091838" strokeWidth="2" />
            <circle cx="36" cy="36" r="2.5" fill="#ca8a04" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Quince',
        parts: [{ text: '', isBlank: true }, { text: 'U I N C E' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="14" y="16" width="36" height="32" rx="6" fill="#38bdf8" stroke="#091838" strokeWidth="2.5" />
            <text x="32" y="38" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="18" fontFamily="sans-serif">15</text>
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Química',
        parts: [{ text: '', isBlank: true }, { text: 'U Í M I C A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="28,16 36,16 48,46 16,46" fill="#a855f7" stroke="#091838" strokeWidth="2.5" />
            <circle cx="32" cy="38" r="2" fill="#ffffff" />
            <circle cx="36" cy="32" r="1.5" fill="#ffffff" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Paquete',
        parts: [{ text: 'P A' }, { text: '', isBlank: true }, { text: 'U E T E' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="18" y="20" width="28" height="28" rx="3" fill="#ea580c" stroke="#091838" strokeWidth="2.5" />
            <line x1="32" y1="20" x2="32" y2="48" stroke="#facc15" strokeWidth="3" />
            <line x1="18" y1="34" x2="46" y2="34" stroke="#facc15" strokeWidth="3" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'QUESO', startsWithTarget: true, Component: QuesoIcon, hint: 'Que - so' },
      { id: 2, name: 'MANZANA', startsWithTarget: false, Component: ManzanaIcon, hint: 'Man - za - na' },
      { id: 3, name: 'QUETZAL', startsWithTarget: true, Component: QuetzalIcon, hint: 'Quet - zal' },
      { id: 4, name: 'QUITASOL', startsWithTarget: true, Component: QuitasolIcon, hint: 'Qui - ta - sol' }
    ]
  },

  // ==========================================
  // LETRA R
  // ==========================================
  R: {
    letter: 'R',
    letterLower: 'r',
    name: 'Letra R',
    themeColor: 'emerald',
    gradientHeader: 'from-emerald-500 to-green-600',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'border-emerald-400',
    phoneticSample: {
      word: 'RA - TÓN',
      description: 'Ratón comilón'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <path d="M 22 66 Q 10 60 12 48" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="48" cy="34" r="12" fill="#cbd5e1" stroke="#091838" strokeWidth="3.5" />
        <circle cx="48" cy="34" r="7" fill="#f472b6" opacity="0.7" />
        <path d="M 24 68 C 24 48 46 44 64 48 C 76 52 84 62 86 64 C 74 72 40 76 24 68 Z" fill="#94a3b8" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <circle cx="86" cy="63" r="2.5" fill="#f43f5e" />
        <circle cx="68" cy="52" r="2.5" fill="#091838" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'R', isTarget: true, bgGrad: 'from-emerald-400 to-green-500', textColor: 'text-white' },
      { id: 2, letter: 'P', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'B', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'R', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'K', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 6, letter: 'R', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'F', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 8, letter: 'R', isTarget: true, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 9, letter: 'D', isTarget: false, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 10, letter: 'R', isTarget: true, bgGrad: 'from-emerald-500 to-teal-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Ratón',
        parts: [{ text: '', isBlank: true }, { text: 'A T Ó N' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="24" r="8" fill="#cbd5e1" stroke="#091838" strokeWidth="2" />
            <path d="M 16 44 C 16 32 30 28 42 32 C 50 36 56 42 56 44 Z" fill="#94a3b8" stroke="#091838" strokeWidth="2.5" />
            <circle cx="56" cy="43" r="2" fill="#f43f5e" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Reloj',
        parts: [{ text: '', isBlank: true }, { text: 'E L O J' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="34" r="18" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
            <circle cx="32" cy="34" r="13" fill="#ffffff" />
            <line x1="32" y1="34" x2="32" y2="24" stroke="#091838" strokeWidth="2.5" />
            <line x1="32" y1="34" x2="40" y2="34" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Rana',
        parts: [{ text: '', isBlank: true }, { text: 'A N A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="22" cy="24" r="6" fill="#84cc16" stroke="#091838" strokeWidth="2" />
            <circle cx="42" cy="24" r="6" fill="#84cc16" stroke="#091838" strokeWidth="2" />
            <ellipse cx="32" cy="36" rx="16" ry="12" fill="#a3e635" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Rosa',
        parts: [{ text: '', isBlank: true }, { text: 'O S A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="28" r="12" fill="#f43f5e" stroke="#091838" strokeWidth="2" />
            <path d="M 32 40 L 32 54" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
            <circle cx="32" cy="28" r="6" fill="#fda4af" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'RATÓN', startsWithTarget: true, Component: RatonIcon, hint: 'Ra - tón' },
      { id: 2, name: 'BARCO', startsWithTarget: false, Component: BarcoIcon, hint: 'Bar - co' },
      { id: 3, name: 'RELOJ', startsWithTarget: true, Component: RelojIcon, hint: 'Re - loj' },
      { id: 4, name: 'RANA', startsWithTarget: true, Component: RanaIcon, hint: 'Ra - na' }
    ]
  },

  // ==========================================
  // LETRA S
  // ==========================================
  S: {
    letter: 'S',
    letterLower: 's',
    name: 'Letra S',
    themeColor: 'sky',
    gradientHeader: 'from-sky-400 to-indigo-500',
    accentBg: 'bg-sky-50/70',
    accentBorder: 'border-sky-400',
    phoneticSample: {
      word: 'SOL',
      description: 'Sol radiante'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <circle cx="50" cy="50" r="26" fill="#fde047" stroke="#091838" strokeWidth="4.5" />
        <circle cx="42" cy="46" r="2.5" fill="#091838" />
        <circle cx="58" cy="46" r="2.5" fill="#091838" />
        <path d="M 44 54 Q 50 60 56 54" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'S', isTarget: true, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 2, letter: 'Z', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 3, letter: 'C', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'S', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: '5', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'S', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'E', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'S', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'O', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'S', isTarget: true, bgGrad: 'from-blue-500 to-sky-500', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Sol',
        parts: [{ text: '', isBlank: true }, { text: 'O L' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="14" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
            <line x1="32" y1="10" x2="32" y2="14" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <line x1="32" y1="50" x2="32" y2="54" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <line x1="10" y1="32" x2="14" y2="32" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="32" x2="54" y2="32" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Silla',
        parts: [{ text: '', isBlank: true }, { text: 'I L L A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="20" y="16" width="6" height="24" fill="#fb923c" stroke="#091838" strokeWidth="2" />
            <rect x="20" y="36" width="24" height="6" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <line x1="22" y1="42" x2="22" y2="54" stroke="#091838" strokeWidth="2.5" />
            <line x1="42" y1="42" x2="42" y2="54" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Sopa',
        parts: [{ text: '', isBlank: true }, { text: 'O P A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 14 30 L 50 30 C 50 48 14 48 14 30 Z" fill="#f97316" stroke="#091838" strokeWidth="2.5" />
            <ellipse cx="32" cy="30" rx="18" ry="5" fill="#fde047" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Sapo',
        parts: [{ text: '', isBlank: true }, { text: 'A P O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <ellipse cx="32" cy="36" rx="16" ry="12" fill="#84cc16" stroke="#091838" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="4" fill="#84cc16" stroke="#091838" strokeWidth="1.5" />
            <circle cx="40" cy="24" r="4" fill="#84cc16" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'SOL', startsWithTarget: true, Component: SolIcon, hint: 'Sol' },
      { id: 2, name: 'LUNA', startsWithTarget: false, Component: LunaIcon, hint: 'Lu - na' },
      { id: 3, name: 'SILLA', startsWithTarget: true, Component: SillaIcon, hint: 'Si - lla' },
      { id: 4, name: 'SERPIENTE', startsWithTarget: true, Component: SerpienteIcon, hint: 'Ser - pien - te' }
    ]
  },

  // ==========================================
  // LETRA T
  // ==========================================
  T: {
    letter: 'T',
    letterLower: 't',
    name: 'Letra T',
    themeColor: 'purple',
    gradientHeader: 'from-purple-500 to-indigo-600',
    accentBg: 'bg-purple-50/70',
    accentBorder: 'border-purple-400',
    phoneticSample: {
      word: 'TOR - TU - GA',
      description: 'Tortuga marina'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <ellipse cx="74" cy="46" rx="9" ry="7" fill="#a3e635" stroke="#091838" strokeWidth="3" />
        <circle cx="77" cy="44" r="2" fill="#091838" />
        <path d="M 22 56 C 22 34 70 34 70 56 Z" fill="#15803d" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <ellipse cx="28" cy="62" rx="6" ry="4" fill="#a3e635" stroke="#091838" strokeWidth="2.5" />
        <ellipse cx="64" cy="62" rx="6" ry="4" fill="#a3e635" stroke="#091838" strokeWidth="2.5" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'T', isTarget: true, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 2, letter: 'I', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'L', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'T', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'F', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 6, letter: 'T', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'J', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'T', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'Y', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'T', isTarget: true, bgGrad: 'from-purple-600 to-indigo-700', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Tortuga',
        parts: [{ text: '', isBlank: true }, { text: 'O R' }, { text: '', isBlank: true }, { text: 'U G A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 14 38 C 14 22 48 22 48 38 Z" fill="#15803d" stroke="#091838" strokeWidth="2.5" />
            <circle cx="50" cy="32" r="6" fill="#a3e635" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Tomate',
        parts: [{ text: '', isBlank: true }, { text: 'O M A' }, { text: '', isBlank: true }, { text: 'E' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="34" r="16" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
            <polygon points="32,16 26,12 28,18 20,20 28,22 32,18 36,22 44,20 36,18 38,12" fill="#22c55e" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Tambor',
        parts: [{ text: '', isBlank: true }, { text: 'A M B O R' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <ellipse cx="32" cy="24" rx="16" ry="6" fill="#fef08a" stroke="#091838" strokeWidth="2" />
            <path d="M 16 24 L 16 44 C 16 50 48 50 48 44 L 48 24 Z" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Taza',
        parts: [{ text: '', isBlank: true }, { text: 'A Z A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="18" y="24" width="24" height="22" rx="4" fill="#38bdf8" stroke="#091838" strokeWidth="2.5" />
            <path d="M 42 28 C 48 28 48 40 42 42" stroke="#091838" strokeWidth="2.5" fill="none" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'TORTUGA', startsWithTarget: true, Component: TortugaIcon, hint: 'Tor - tu - ga' },
      { id: 2, name: 'FLOR', startsWithTarget: false, Component: FlorIcon, hint: 'Flor' },
      { id: 3, name: 'TOMATE', startsWithTarget: true, Component: TomateIcon, hint: 'To - ma - te' },
      { id: 4, name: 'TAMBOR', startsWithTarget: true, Component: TamborIcon, hint: 'Tam - bor' }
    ]
  },

  // ==========================================
  // LETRA U
  // ==========================================
  U: {
    letter: 'U',
    letterLower: 'u',
    name: 'Letra U',
    themeColor: 'purple',
    gradientHeader: 'from-purple-500 to-indigo-600',
    accentBg: 'bg-purple-50/70',
    accentBorder: 'border-purple-400',
    phoneticSample: {
      word: 'U - VAS',
      description: 'Uvas dulces'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <path d="M 50 24 C 50 14 56 12 60 10" stroke="#78350f" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="38" cy="34" r="7" fill="#9333ea" stroke="#091838" strokeWidth="2.5" />
        <circle cx="52" cy="32" r="7" fill="#a855f7" stroke="#091838" strokeWidth="2.5" />
        <circle cx="64" cy="36" r="7" fill="#9333ea" stroke="#091838" strokeWidth="2.5" />
        <circle cx="34" cy="46" r="7" fill="#a855f7" stroke="#091838" strokeWidth="2.5" />
        <circle cx="48" cy="46" r="7" fill="#7e22ce" stroke="#091838" strokeWidth="2.5" />
        <circle cx="60" cy="48" r="7" fill="#a855f7" stroke="#091838" strokeWidth="2.5" />
        <circle cx="41" cy="58" r="7" fill="#9333ea" stroke="#091838" strokeWidth="2.5" />
        <circle cx="53" cy="60" r="7" fill="#7e22ce" stroke="#091838" strokeWidth="2.5" />
        <circle cx="47" cy="72" r="7" fill="#a855f7" stroke="#091838" strokeWidth="2.5" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'U', isTarget: true, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 2, letter: 'V', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'O', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'U', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'C', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 6, letter: 'U', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'J', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'U', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'N', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'U', isTarget: true, bgGrad: 'from-blue-500 to-indigo-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Uvas',
        parts: [{ text: '', isBlank: true }, { text: 'V A S' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="26" cy="24" r="5" fill="#9333ea" />
            <circle cx="36" cy="24" r="5" fill="#a855f7" />
            <circle cx="31" cy="32" r="5" fill="#7e22ce" />
            <circle cx="41" cy="32" r="5" fill="#9333ea" />
            <circle cx="36" cy="40" r="5" fill="#a855f7" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Uno',
        parts: [{ text: '', isBlank: true }, { text: 'N O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="16" fill="#38bdf8" stroke="#091838" strokeWidth="2.5" />
            <text x="32" y="40" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="24" fontFamily="sans-serif">1</text>
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Unicornio',
        parts: [{ text: '', isBlank: true }, { text: 'N I C O R N I O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="36,12 32,24 40,24" fill="#facc15" stroke="#091838" strokeWidth="1.5" />
            <path d="M 24 46 C 24 32 32 24 44 26 C 50 28 54 36 50 42 Z" fill="#ffffff" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Uña',
        parts: [{ text: '', isBlank: true }, { text: 'Ñ A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="22" y="18" width="20" height="34" rx="10" fill="#fed7aa" stroke="#091838" strokeWidth="2" />
            <path d="M 25 22 C 25 19 39 19 39 22 L 39 32 L 25 32 Z" fill="#f43f5e" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'UVAS', startsWithTarget: true, Component: UvasIcon, hint: 'U - vas' },
      { id: 2, name: 'CASA', startsWithTarget: false, Component: CasaIcon, hint: 'Ca - sa' },
      { id: 3, name: 'UNICORNIO', startsWithTarget: true, Component: UnicornioIcon, hint: 'U - ni - cor - nio' },
      { id: 4, name: 'UÑA', startsWithTarget: true, Component: UnaIcon, hint: 'U - ña' }
    ]
  },

  // ==========================================
  // LETRA V
  // ==========================================
  V: {
    letter: 'V',
    letterLower: 'v',
    name: 'Letra V',
    themeColor: 'sky',
    gradientHeader: 'from-sky-500 to-blue-600',
    accentBg: 'bg-sky-50/70',
    accentBorder: 'border-sky-400',
    phoneticSample: {
      word: 'VA - CA',
      description: 'Vaca lechera'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <polygon points="34,26 28,16 38,20" fill="#facc15" stroke="#091838" strokeWidth="2" />
        <polygon points="66,26 72,16 62,20" fill="#facc15" stroke="#091838" strokeWidth="2" />
        <circle cx="50" cy="46" r="24" fill="#ffffff" stroke="#091838" strokeWidth="4.5" />
        <path d="M 38 26 C 34 36 44 42 46 36 Z" fill="#091838" />
        <circle cx="38" cy="42" r="2.5" fill="#091838" />
        <circle cx="62" cy="42" r="2.5" fill="#091838" />
        <ellipse cx="50" cy="58" rx="14" ry="9" fill="#fbcfe8" stroke="#091838" strokeWidth="3" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'V', isTarget: true, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 2, letter: 'U', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 3, letter: 'W', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'V', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'Y', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'V', isTarget: true, bgGrad: 'from-teal-400 to-cyan-500', textColor: 'text-white' },
      { id: 7, letter: 'A', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'V', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'T', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'V', isTarget: true, bgGrad: 'from-blue-600 to-indigo-700', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Vaca',
        parts: [{ text: '', isBlank: true }, { text: 'A C A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="30" r="14" fill="#ffffff" stroke="#091838" strokeWidth="2" />
            <path d="M 24 20 C 22 28 30 30 30 24 Z" fill="#091838" />
            <ellipse cx="32" cy="38" rx="8" ry="5" fill="#fbcfe8" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Vela',
        parts: [{ text: '', isBlank: true }, { text: 'E L A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="24" y="24" width="16" height="26" rx="3" fill="#ef4444" stroke="#091838" strokeWidth="2" />
            <path d="M 32 10 C 36 16 38 20 32 24 C 26 20 28 16 32 10 Z" fill="#facc15" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Volcán',
        parts: [{ text: '', isBlank: true }, { text: 'O L C Á N' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="32,20 12,48 52,48" fill="#78350f" stroke="#091838" strokeWidth="2" />
            <polygon points="32,14 28,24 36,24" fill="#ef4444" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Vaso',
        parts: [{ text: '', isBlank: true }, { text: 'A S O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="18,18 46,18 42,48 22,48" fill="#e0f2fe" stroke="#091838" strokeWidth="2.5" />
            <polygon points="20,28 44,28 42,46 22,46" fill="#38bdf8" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'VACA', startsWithTarget: true, Component: VacaIcon, hint: 'Va - ca' },
      { id: 2, name: 'SOL', startsWithTarget: false, Component: SolIcon, hint: 'Sol' },
      { id: 3, name: 'VELA', startsWithTarget: true, Component: VelaIcon, hint: 'Ve - la' },
      { id: 4, name: 'VOLCÁN', startsWithTarget: true, Component: VolcanIcon, hint: 'Vol - cán' }
    ]
  },

  // ==========================================
  // LETRA W
  // ==========================================
  W: {
    letter: 'W',
    letterLower: 'w',
    name: 'Letra W',
    themeColor: 'amber',
    gradientHeader: 'from-amber-500 to-orange-500',
    accentBg: 'bg-amber-50/70',
    accentBorder: 'border-amber-400',
    phoneticSample: {
      word: 'WA - FLE',
      description: 'Wafle con miel'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <circle cx="50" cy="50" r="32" fill="#facc15" stroke="#091838" strokeWidth="4.5" />
        <line x1="36" y1="26" x2="36" y2="74" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="20" x2="50" y2="80" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="64" y1="26" x2="64" y2="74" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
        <line x1="26" y1="36" x2="74" y2="36" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="26" y1="64" x2="74" y2="64" stroke="#b45309" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'W', isTarget: true, bgGrad: 'from-amber-400 to-orange-500', textColor: 'text-white' },
      { id: 2, letter: 'M', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'V', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'W', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'N', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'W', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'U', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'W', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'H', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'W', isTarget: true, bgGrad: 'from-amber-500 to-yellow-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Wafle',
        parts: [{ text: '', isBlank: true }, { text: 'A F L E' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="32" r="16" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
            <line x1="26" y1="20" x2="26" y2="44" stroke="#b45309" strokeWidth="2" />
            <line x1="38" y1="20" x2="38" y2="44" stroke="#b45309" strokeWidth="2" />
            <line x1="20" y1="26" x2="44" y2="26" stroke="#b45309" strokeWidth="2" />
            <line x1="20" y1="38" x2="44" y2="38" stroke="#b45309" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Wi-Fi',
        parts: [{ text: '', isBlank: true }, { text: 'I - F I' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="46" r="3" fill="#38bdf8" />
            <path d="M 22 36 Q 32 26 42 36" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 14 26 Q 32 12 50 26" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Waterpolo',
        parts: [{ text: '', isBlank: true }, { text: 'A T E R P O L O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <circle cx="32" cy="28" r="14" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <path d="M 14 46 Q 32 40 50 46" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Web',
        parts: [{ text: '', isBlank: true }, { text: 'E B' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <line x1="16" y1="16" x2="48" y2="48" stroke="#94a3b8" strokeWidth="2" />
            <line x1="48" y1="16" x2="16" y2="48" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="32" cy="32" r="10" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
            <circle cx="32" cy="32" r="4" fill="#091838" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'WAFLE', startsWithTarget: true, Component: WafleIcon, hint: 'Wa - fle' },
      { id: 2, name: 'PELOTA', startsWithTarget: false, Component: PelotaIcon, hint: 'Pe - lo - ta' },
      { id: 3, name: 'WATERPOLO', startsWithTarget: true, Component: WaterpoloIcon, hint: 'Wa - ter - po - lo' },
      { id: 4, name: 'WEB', startsWithTarget: true, Component: WebIcon, hint: 'Web' }
    ]
  },

  // ==========================================
  // LETRA X
  // ==========================================
  X: {
    letter: 'X',
    letterLower: 'x',
    name: 'Letra X',
    themeColor: 'rose',
    gradientHeader: 'from-rose-500 to-pink-600',
    accentBg: 'bg-rose-50/70',
    accentBorder: 'border-rose-400',
    phoneticSample: {
      word: 'XI - LÓ - FO - NO',
      description: 'Xilófono musical'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <rect x="20" y="24" width="11" height="52" rx="3" fill="#ef4444" stroke="#091838" strokeWidth="3" />
        <rect x="36" y="28" width="11" height="48" rx="3" fill="#facc15" stroke="#091838" strokeWidth="3" />
        <rect x="52" y="32" width="11" height="44" rx="3" fill="#22c55e" stroke="#091838" strokeWidth="3" />
        <rect x="68" y="36" width="11" height="40" rx="3" fill="#38bdf8" stroke="#091838" strokeWidth="3" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'X', isTarget: true, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 2, letter: 'K', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'Y', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'X', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'T', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'X', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'Z', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'X', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'V', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'X', isTarget: true, bgGrad: 'from-red-500 to-rose-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Xilófono',
        parts: [{ text: '', isBlank: true }, { text: 'I L Ó F O N O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="14" y="16" width="7" height="34" rx="2" fill="#ef4444" stroke="#091838" strokeWidth="1.5" />
            <rect x="24" y="20" width="7" height="30" rx="2" fill="#facc15" stroke="#091838" strokeWidth="1.5" />
            <rect x="34" y="24" width="7" height="26" rx="2" fill="#22c55e" stroke="#091838" strokeWidth="1.5" />
            <rect x="44" y="28" width="7" height="22" rx="2" fill="#38bdf8" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Taxi',
        parts: [{ text: 'T A' }, { text: '', isBlank: true }, { text: 'I' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="14" y="28" width="36" height="18" rx="4" fill="#facc15" stroke="#091838" strokeWidth="2" />
            <polygon points="20,28 26,18 38,18 44,28" fill="#fde047" stroke="#091838" strokeWidth="1.5" />
            <circle cx="22" cy="46" r="4" fill="#091838" />
            <circle cx="42" cy="46" r="4" fill="#091838" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Boxeo',
        parts: [{ text: 'B O' }, { text: '', isBlank: true }, { text: 'E O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 22 24 C 22 18 34 18 40 22 C 46 26 44 38 38 42 L 26 42 Z" fill="#ef4444" stroke="#091838" strokeWidth="2.5" />
            <rect x="22" y="42" width="18" height="6" fill="#ffffff" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Texto',
        parts: [{ text: 'T E' }, { text: '', isBlank: true }, { text: 'T O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <rect x="18" y="16" width="28" height="34" rx="3" fill="#ffffff" stroke="#091838" strokeWidth="2" />
            <line x1="24" y1="24" x2="38" y2="24" stroke="#38bdf8" strokeWidth="2" />
            <line x1="24" y1="30" x2="40" y2="30" stroke="#091838" strokeWidth="2" />
            <line x1="24" y1="36" x2="34" y2="36" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'XILÓFONO', startsWithTarget: true, Component: XilofonoIcon, hint: 'Xi - ló - fo - no' },
      { id: 2, name: 'MANZANA', startsWithTarget: false, Component: ManzanaIcon, hint: 'Man - za - na' },
      { id: 3, name: 'RAYOS X', startsWithTarget: true, Component: RayosXIcon, hint: 'Ra - yos X' },
      { id: 4, name: 'TAXI', startsWithTarget: true, Component: TaxiIcon, hint: 'Ta - xi (contiene X)' }
    ]
  },

  // ==========================================
  // LETRA Y
  // ==========================================
  Y: {
    letter: 'Y',
    letterLower: 'y',
    name: 'Letra Y',
    themeColor: 'emerald',
    gradientHeader: 'from-emerald-500 to-teal-600',
    accentBg: 'bg-emerald-50/70',
    accentBorder: 'border-emerald-400',
    phoneticSample: {
      word: 'YO - YO',
      description: 'Yoyo divertido'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <path d="M 50 16 Q 44 26 50 36 Q 56 46 50 56" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" fill="none" />
        <ellipse cx="44" cy="62" rx="14" ry="24" fill="#38bdf8" stroke="#091838" strokeWidth="3.5" />
        <ellipse cx="56" cy="62" rx="14" ry="24" fill="#0284c7" stroke="#091838" strokeWidth="3.5" />
        <ellipse cx="50" cy="62" rx="5" ry="14" fill="#facc15" stroke="#091838" strokeWidth="2" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'Y', isTarget: true, bgGrad: 'from-emerald-400 to-teal-500', textColor: 'text-white' },
      { id: 2, letter: 'V', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'T', isTarget: false, bgGrad: 'from-rose-500 to-pink-500', textColor: 'text-white' },
      { id: 4, letter: 'Y', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: 'X', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 6, letter: 'Y', isTarget: true, bgGrad: 'from-cyan-400 to-blue-500', textColor: 'text-white' },
      { id: 7, letter: 'U', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 8, letter: 'Y', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'J', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'Y', isTarget: true, bgGrad: 'from-emerald-500 to-green-600', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Yoyo',
        parts: [{ text: '', isBlank: true }, { text: 'O' }, { text: '', isBlank: true }, { text: 'O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <ellipse cx="28" cy="34" rx="8" ry="16" fill="#38bdf8" stroke="#091838" strokeWidth="2" />
            <ellipse cx="36" cy="34" rx="8" ry="16" fill="#0284c7" stroke="#091838" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Yate',
        parts: [{ text: '', isBlank: true }, { text: 'A T E' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 12 40 L 52 40 L 44 50 L 20 50 Z" fill="#ffffff" stroke="#091838" strokeWidth="2" />
            <polygon points="22,40 28,26 44,26 48,40" fill="#e0f2fe" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Yogur',
        parts: [{ text: '', isBlank: true }, { text: 'O G U R' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="18,24 46,24 42,48 22,48" fill="#ffffff" stroke="#091838" strokeWidth="2" />
            <rect x="16" y="20" width="32" height="5" rx="2" fill="#f472b6" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Yema',
        parts: [{ text: '', isBlank: true }, { text: 'E M A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <ellipse cx="32" cy="34" rx="18" ry="12" fill="#ffffff" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="34" r="8" fill="#facc15" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'YOYO', startsWithTarget: true, Component: YoyoIcon, hint: 'Yo - yo' },
      { id: 2, name: 'BARCO', startsWithTarget: false, Component: BarcoIcon, hint: 'Bar - co' },
      { id: 3, name: 'YATE', startsWithTarget: true, Component: YateIcon, hint: 'Ya - te' },
      { id: 4, name: 'YOGUR', startsWithTarget: true, Component: YogurIcon, hint: 'Yo - gur' }
    ]
  },

  // ==========================================
  // LETRA Z
  // ==========================================
  Z: {
    letter: 'Z',
    letterLower: 'z',
    name: 'Letra Z',
    themeColor: 'purple',
    gradientHeader: 'from-purple-500 to-pink-500',
    accentBg: 'bg-purple-50/70',
    accentBorder: 'border-purple-400',
    phoneticSample: {
      word: 'ZO - RRO',
      description: 'Zorro veloz'
    },
    sampleSvg: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
        <polygon points="26,20 20,44 42,38" fill="#ea580c" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
        <polygon points="74,20 58,38 80,44" fill="#ea580c" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
        <polygon points="50,74 18,44 82,44" fill="#f97316" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
        <polygon points="50,74 22,46 36,54" fill="#ffffff" />
        <polygon points="50,74 78,46 64,54" fill="#ffffff" />
        <circle cx="50" cy="72" r="2.5" fill="#091838" />
      </svg>
    ),
    bubbleLetters: [
      { id: 1, letter: 'Z', isTarget: true, bgGrad: 'from-purple-500 to-pink-500', textColor: 'text-white' },
      { id: 2, letter: 'S', isTarget: false, bgGrad: 'from-sky-400 to-blue-500', textColor: 'text-white' },
      { id: 3, letter: 'N', isTarget: false, bgGrad: 'from-amber-400 to-orange-400', textColor: 'text-white' },
      { id: 4, letter: 'Z', isTarget: true, bgGrad: 'from-lime-400 to-green-500', textColor: 'text-white' },
      { id: 5, letter: '7', isTarget: false, bgGrad: 'from-purple-500 to-indigo-600', textColor: 'text-white' },
      { id: 6, letter: 'Z', isTarget: true, bgGrad: 'from-cyan-400 to-teal-500', textColor: 'text-white' },
      { id: 7, letter: 'E', isTarget: false, bgGrad: 'from-yellow-400 to-amber-500', textColor: 'text-slate-900' },
      { id: 8, letter: 'Z', isTarget: true, bgGrad: 'from-fuchsia-400 to-pink-500', textColor: 'text-white' },
      { id: 9, letter: 'X', isTarget: false, bgGrad: 'from-orange-400 to-red-500', textColor: 'text-white' },
      { id: 10, letter: 'Z', isTarget: true, bgGrad: 'from-purple-600 to-violet-700', textColor: 'text-white' },
    ],
    fillWords: [
      {
        id: 'w1',
        hintName: 'Zorro',
        parts: [{ text: '', isBlank: true }, { text: 'O R R O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="16,14 12,28 26,24" fill="#ea580c" />
            <polygon points="48,14 38,24 52,28" fill="#ea580c" />
            <polygon points="32,48 12,28 52,28" fill="#f97316" stroke="#091838" strokeWidth="2" />
            <circle cx="32" cy="46" r="2" fill="#091838" />
          </svg>
        )
      },
      {
        id: 'w2',
        hintName: 'Zapato',
        parts: [{ text: '', isBlank: true }, { text: 'A P A T O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <path d="M 14 34 L 24 20 L 36 20 L 40 30 L 50 32 C 54 34 56 40 52 44 L 14 44 Z" fill="#ef4444" stroke="#091838" strokeWidth="2" />
            <rect x="12" y="42" width="42" height="6" rx="2" fill="#ffffff" stroke="#091838" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'w3',
        hintName: 'Zanahoria',
        parts: [{ text: '', isBlank: true }, { text: 'A N A H O R I A' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="22,22 42,22 32,54" fill="#f97316" stroke="#091838" strokeWidth="2" />
            <polygon points="32,10 26,22 32,20 38,22" fill="#22c55e" />
          </svg>
        )
      },
      {
        id: 'w4',
        hintName: 'Zumo',
        parts: [{ text: '', isBlank: true }, { text: 'U M O' }],
        svgIcon: (
          <svg viewBox="0 0 64 64" className="w-10 h-9">
            <polygon points="20,18 44,18 40,48 24,48" fill="#f97316" stroke="#091838" strokeWidth="2.5" />
            <line x1="36" y1="12" x2="28" y2="34" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
          </svg>
        )
      }
    ],
    soundItems: [
      { id: 1, name: 'ZORRO', startsWithTarget: true, Component: ZorroIcon, hint: 'Zo - rro' },
      { id: 2, name: 'FLOR', startsWithTarget: false, Component: FlorIcon, hint: 'Flor' },
      { id: 3, name: 'ZAPATO', startsWithTarget: true, Component: ZapatoIcon, hint: 'Za - pa - to' },
      { id: 4, name: 'ZANAHORIA', startsWithTarget: true, Component: ZanahoriaIcon, hint: 'Za - na - ho - ria' }
    ]
  }
};
