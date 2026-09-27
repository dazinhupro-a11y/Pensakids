import React from 'react';

interface IllustrationProps {
  className?: string;
}

// ==========================================
// LETRA A
// ==========================================
export const AnilloIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <path d="M 50 8 L 53 18 L 63 21 L 53 24 L 50 34 L 47 24 L 37 21 L 47 18 Z" fill="#fde047" stroke="#091838" strokeWidth="2.5" />
    <ellipse cx="50" cy="62" rx="30" ry="24" fill="#facc15" stroke="#091838" strokeWidth="6" />
    <ellipse cx="50" cy="62" rx="20" ry="15" fill="#ffffff" stroke="#091838" strokeWidth="5" />
    <ellipse cx="44" cy="56" rx="16" ry="10" fill="#fef08a" opacity="0.6" />
    <polygon points="50,22 66,34 50,48 34,34" fill="#38bdf8" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    <polygon points="50,22 60,34 50,48" fill="#bae6fd" stroke="#091838" strokeWidth="3" />
    <polygon points="40,30 46,30 43,36" fill="#ffffff" />
  </svg>
);

export const PelotaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <circle cx="50" cy="50" r="38" fill="#f97316" stroke="#091838" strokeWidth="6" />
    <path d="M 50 12 C 34 26 34 74 50 88 C 66 74 66 26 50 12 Z" fill="#38bdf8" stroke="#091838" strokeWidth="5" />
    <path d="M 50 12 C 58 26 58 74 50 88 C 84 80 88 20 50 12 Z" fill="#e11d48" stroke="#091838" strokeWidth="5" />
    <path d="M 50 12 C 42 26 42 74 50 88 C 16 80 12 20 50 12 Z" fill="#facc15" stroke="#091838" strokeWidth="5" />
    <circle cx="50" cy="18" r="7" fill="#ffffff" stroke="#091838" strokeWidth="4" />
    <path d="M 28 32 C 32 24 40 20 48 20" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

export const AvionIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <polygon points="26,40 12,28 20,48" fill="#f43f5e" stroke="#091838" strokeWidth="4" strokeLinejoin="round" />
    <polygon points="26,60 12,72 20,52" fill="#f43f5e" stroke="#091838" strokeWidth="4" strokeLinejoin="round" />
    <path d="M 22 50 C 22 36 68 34 84 46 C 90 50 90 52 84 56 C 68 66 22 64 22 50 Z" fill="#38bdf8" stroke="#091838" strokeWidth="6" strokeLinejoin="round" />
    <polygon points="46,48 34,16 54,46" fill="#fb923c" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    <polygon points="46,52 34,84 54,54" fill="#ea580c" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    <circle cx="70" cy="48" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="3" />
    <circle cx="58" cy="48" r="4" fill="#ffffff" stroke="#091838" strokeWidth="3" />
    <circle cx="46" cy="48" r="4" fill="#ffffff" stroke="#091838" strokeWidth="3" />
    <path d="M 80 44 C 88 47 88 53 80 56 Z" fill="#f43f5e" />
  </svg>
);

export const SolIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <g stroke="#091838" strokeWidth="4.5" fill="#f59e0b" strokeLinejoin="round">
      <polygon points="50,6 56,22 44,22" />
      <polygon points="50,94 56,78 44,78" />
      <polygon points="6,50 22,56 22,44" />
      <polygon points="94,50 78,56 78,44" />
      <polygon points="19,19 34,26 26,34" />
      <polygon points="81,81 66,74 74,66" />
      <polygon points="81,19 74,34 66,26" />
      <polygon points="19,81 26,66 34,74" />
    </g>
    <circle cx="50" cy="50" r="28" fill="#fde047" stroke="#091838" strokeWidth="6" />
    <circle cx="41" cy="46" r="3.5" fill="#091838" />
    <circle cx="59" cy="46" r="3.5" fill="#091838" />
    <circle cx="34" cy="54" r="3.5" fill="#f472b6" opacity="0.8" />
    <circle cx="66" cy="54" r="3.5" fill="#f472b6" opacity="0.8" />
    <path d="M 43 56 Q 50 64 57 56" stroke="#091838" strokeWidth="3.5" strokeLinecap="round" fill="none" />
  </svg>
);

// ==========================================
// LETRA B
// ==========================================
// Barco
export const BarcoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Casco del barco */}
    <path d="M 18 64 L 82 64 L 72 82 L 28 82 Z" fill="#ef4444" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    {/* Franja blanca */}
    <path d="M 22 72 L 78 72 L 75 77 L 25 77 Z" fill="#ffffff" />
    {/* Mástil */}
    <line x1="50" y1="20" x2="50" y2="64" stroke="#091838" strokeWidth="5" strokeLinecap="round" />
    {/* Vela grande celeste */}
    <path d="M 52 24 L 78 54 L 52 54 Z" fill="#38bdf8" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    {/* Vela pequeña amarilla */}
    <path d="M 48 30 L 26 54 L 48 54 Z" fill="#facc15" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    {/* Bandera roja superior */}
    <polygon points="50,18 64,22 50,26" fill="#f43f5e" stroke="#091838" strokeWidth="3" />
    {/* Olas */}
    <path d="M 12 88 Q 24 82 36 88 Q 48 94 60 88 Q 72 82 84 88" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

// Ballena
export const BallenaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Chorro de agua */}
    <path d="M 46 26 C 46 16 38 12 34 16" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M 48 26 C 48 14 54 10 58 14" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Cuerpo de ballena azul marino/celeste */}
    <path d="M 22 56 C 22 36 68 34 82 50 C 92 60 88 66 78 68 C 66 70 30 76 22 56 Z" fill="#0284c7" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    {/* Cola */}
    <path d="M 22 56 L 8 46 C 14 56 14 62 8 70 Z" fill="#0369a1" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    {/* Barriga blanca */}
    <path d="M 44 68 C 54 70 70 66 74 60 C 60 62 48 64 44 68 Z" fill="#ffffff" />
    {/* Ojo sonriente y mejilla */}
    <circle cx="70" cy="50" r="3.5" fill="#091838" />
    <circle cx="71" cy="49" r="1.2" fill="#ffffff" />
    <circle cx="76" cy="55" r="3" fill="#f472b6" opacity="0.8" />
    <path d="M 68 56 Q 73 60 78 56" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Botas
export const BotaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Bota de lluvia amarilla */}
    <path d="M 36 20 L 56 20 L 56 54 C 56 60 62 66 74 68 C 80 70 82 76 80 82 L 32 82 C 28 82 28 78 30 72 L 36 20 Z" fill="#facc15" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Suela gruesa roja */}
    <rect x="28" y="78" width="56" height="8" rx="4" fill="#ef4444" stroke="#091838" strokeWidth="4.5" />
    {/* Borde superior decorado */}
    <rect x="34" y="18" width="24" height="7" rx="3.5" fill="#ef4444" stroke="#091838" strokeWidth="4" />
    {/* Brillo */}
    <path d="M 42 30 L 40 50" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Manzana (NO empieza con B -> empieza con M)
export const ManzanaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Tallo */}
    <path d="M 50 30 C 50 18 58 16 62 14" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    {/* Hoja verde */}
    <path d="M 52 26 C 64 22 68 12 68 12 C 68 12 56 16 52 26 Z" fill="#22c55e" stroke="#091838" strokeWidth="3" />
    {/* Manzana roja */}
    <path d="M 50 34 C 36 24 16 34 18 56 C 20 78 38 88 50 82 C 62 88 80 78 82 56 C 84 34 64 24 50 34 Z" fill="#ef4444" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Brillo */}
    <ellipse cx="32" cy="46" rx="5" ry="10" fill="#ffffff" opacity="0.8" transform="rotate(-20 32 46)" />
  </svg>
);

// ==========================================
// LETRA C
// ==========================================
// Casa
export const CasaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Chimenea */}
    <rect x="64" y="22" width="10" height="18" fill="#ea580c" stroke="#091838" strokeWidth="4" />
    {/* Techo rojo triangular */}
    <polygon points="50,18 16,46 84,46" fill="#ef4444" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Pared amarilla */}
    <rect x="24" y="46" width="52" height="38" fill="#fef08a" stroke="#091838" strokeWidth="5.5" />
    {/* Puerta azul */}
    <rect x="42" y="60" width="16" height="24" rx="2" fill="#38bdf8" stroke="#091838" strokeWidth="4" />
    <circle cx="53" cy="72" r="2" fill="#091838" />
    {/* Ventana redonda en el ático */}
    <circle cx="50" cy="35" r="6" fill="#ffffff" stroke="#091838" strokeWidth="3.5" />
    <line x1="50" y1="29" x2="50" y2="41" stroke="#091838" strokeWidth="2.5" />
    <line x1="44" y1="35" x2="56" y2="35" stroke="#091838" strokeWidth="2.5" />
  </svg>
);

// Caracol
export const CaracolIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuerpo babosa verde suave */}
    <path d="M 16 78 C 22 78 28 72 32 72 L 76 72 C 84 72 88 78 82 82 C 76 86 24 86 16 78 Z" fill="#a3e635" stroke="#091838" strokeWidth="4.5" />
    {/* Cabeza y antenas */}
    <circle cx="78" cy="64" r="9" fill="#a3e635" stroke="#091838" strokeWidth="4" />
    <line x1="80" y1="56" x2="84" y2="44" stroke="#091838" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="85" cy="43" r="3" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
    <line x1="74" y1="56" x2="72" y2="46" stroke="#091838" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="71" cy="45" r="3" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
    {/* Ojo y sonrisa */}
    <circle cx="80" cy="62" r="2.5" fill="#091838" />
    {/* Concha espiral naranja / amarilla */}
    <circle cx="46" cy="56" r="22" fill="#fb923c" stroke="#091838" strokeWidth="5" />
    <circle cx="46" cy="56" r="14" fill="#fde047" stroke="#091838" strokeWidth="4" />
    <circle cx="46" cy="56" r="6" fill="#f97316" stroke="#091838" strokeWidth="3.5" />
  </svg>
);

// Conejo
export const ConejoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Orejas largas */}
    <ellipse cx="40" cy="28" rx="8" ry="20" fill="#ffffff" stroke="#091838" strokeWidth="4.5" transform="rotate(-10 40 28)" />
    <ellipse cx="40" cy="28" rx="4" ry="14" fill="#f472b6" opacity="0.8" transform="rotate(-10 40 28)" />
    <ellipse cx="60" cy="28" rx="8" ry="20" fill="#ffffff" stroke="#091838" strokeWidth="4.5" transform="rotate(10 60 28)" />
    <ellipse cx="60" cy="28" rx="4" ry="14" fill="#f472b6" opacity="0.8" transform="rotate(10 60 28)" />
    {/* Cabeza redonda */}
    <circle cx="50" cy="60" r="24" fill="#ffffff" stroke="#091838" strokeWidth="5.5" />
    {/* Ojos y nariz */}
    <circle cx="42" cy="56" r="3" fill="#091838" />
    <circle cx="58" cy="56" r="3" fill="#091838" />
    <polygon points="50,62 46,67 54,67" fill="#f43f5e" stroke="#091838" strokeWidth="2" strokeLinejoin="round" />
    {/* Bigotes */}
    <line x1="36" y1="64" x2="22" y2="62" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="36" y1="68" x2="24" y2="72" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="64" y1="64" x2="78" y2="62" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="64" y1="68" x2="76" y2="72" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Pato (NO empieza con C -> empieza con P)
export const PatoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuerpo de patito de hule amarillo */}
    <path d="M 24 64 C 24 48 54 46 64 56 C 74 66 68 80 48 80 C 32 80 24 74 24 64 Z" fill="#facc15" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    <path d="M 24 62 L 12 52 C 18 64 22 70 24 74 Z" fill="#facc15" stroke="#091838" strokeWidth="4" />
    {/* Cabeza redonda */}
    <circle cx="64" cy="40" r="16" fill="#facc15" stroke="#091838" strokeWidth="5" />
    {/* Pico naranja */}
    <polygon points="76,38 94,42 76,48" fill="#fb923c" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
    {/* Ojo */}
    <circle cx="68" cy="36" r="3" fill="#091838" />
    <circle cx="69" cy="35" r="1" fill="#ffffff" />
  </svg>
);

// ==========================================
// LETRA D
// ==========================================
// Dado
export const DadoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cubo dado rojo */}
    <rect x="22" y="22" width="56" height="56" rx="12" fill="#ef4444" stroke="#091838" strokeWidth="6" />
    {/* Puntos blancos del dado (cara del 5) */}
    <circle cx="36" cy="36" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
    <circle cx="64" cy="36" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
    <circle cx="50" cy="50" r="5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
    <circle cx="36" cy="64" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
    <circle cx="64" cy="64" r="4.5" fill="#ffffff" stroke="#091838" strokeWidth="2" />
    {/* Brillo curvo */}
    <path d="M 28 32 C 34 26 44 26 50 26" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
  </svg>
);

// Diente
export const DienteIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Destello de diente limpio */}
    <polygon points="76,18 80,26 88,28 80,32 78,40 74,32 66,30 74,26" fill="#facc15" stroke="#091838" strokeWidth="2" />
    {/* Silueta de diente muela blanca sonriente */}
    <path d="M 32 24 C 20 28 18 52 24 64 C 28 72 32 86 40 86 C 46 86 46 72 50 72 C 54 72 54 86 60 86 C 68 86 72 72 76 64 C 82 52 80 28 68 24 C 58 20 54 26 50 26 C 46 26 42 20 32 24 Z" fill="#ffffff" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Carita sonriente */}
    <circle cx="40" cy="46" r="3" fill="#091838" />
    <circle cx="60" cy="46" r="3" fill="#091838" />
    <circle cx="34" cy="52" r="3" fill="#f472b6" opacity="0.8" />
    <circle cx="66" cy="52" r="3" fill="#f472b6" opacity="0.8" />
    <path d="M 44 54 Q 50 62 56 54" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// Delfín
export const DelfinIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Salto del delfín celeste */}
    <path d="M 18 72 C 26 42 56 26 78 36 C 88 42 84 50 74 54 C 54 62 44 68 34 78 Z" fill="#38bdf8" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Aleta dorsal */}
    <path d="M 52 30 C 58 18 68 18 68 28 Z" fill="#0284c7" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    {/* Aleta pectoral */}
    <path d="M 50 52 L 44 64 L 56 60 Z" fill="#0284c7" stroke="#091838" strokeWidth="3.5" />
    {/* Cola */}
    <path d="M 18 72 L 8 66 C 14 74 14 80 8 86 Z" fill="#0284c7" stroke="#091838" strokeWidth="4" />
    {/* Ojo sonriente */}
    <circle cx="74" cy="42" r="2.5" fill="#091838" />
  </svg>
);

// Flor (NO empieza con D -> empieza con F)
export const FlorIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Tallo */}
    <path d="M 50 56 L 50 88" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" />
    <path d="M 50 72 C 60 70 66 64 68 58 C 58 60 52 68 50 72 Z" fill="#4ade80" stroke="#091838" strokeWidth="3" />
    {/* Pétalos fucsia */}
    <circle cx="50" cy="30" r="12" fill="#f43f5e" stroke="#091838" strokeWidth="4" />
    <circle cx="68" cy="44" r="12" fill="#f43f5e" stroke="#091838" strokeWidth="4" />
    <circle cx="62" cy="64" r="12" fill="#f43f5e" stroke="#091838" strokeWidth="4" />
    <circle cx="38" cy="64" r="12" fill="#f43f5e" stroke="#091838" strokeWidth="4" />
    <circle cx="32" cy="44" r="12" fill="#f43f5e" stroke="#091838" strokeWidth="4" />
    {/* Centro amarillo */}
    <circle cx="50" cy="48" r="14" fill="#fde047" stroke="#091838" strokeWidth="4.5" />
  </svg>
);

// ==========================================
// LETRA E
// ==========================================
// Estrella
export const EstrellaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Estrella amarilla dorada con puntas redondeadas */}
    <polygon points="50,12 62,36 88,38 68,56 74,82 50,68 26,82 32,56 12,38 38,36" fill="#facc15" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Carita sonriente tierna */}
    <circle cx="43" cy="46" r="3" fill="#091838" />
    <circle cx="57" cy="46" r="3" fill="#091838" />
    <circle cx="37" cy="52" r="3" fill="#f472b6" opacity="0.8" />
    <circle cx="63" cy="52" r="3" fill="#f472b6" opacity="0.8" />
    <path d="M 45 54 Q 50 60 55 54" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// Elefante
export const ElefanteIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Oreja grande gris-azulada */}
    <ellipse cx="36" cy="48" rx="16" ry="20" fill="#94a3b8" stroke="#091838" strokeWidth="4.5" />
    <ellipse cx="36" cy="48" rx="10" ry="14" fill="#f472b6" opacity="0.6" />
    {/* Cuerpo y cabeza elefante */}
    <circle cx="56" cy="50" r="22" fill="#cbd5e1" stroke="#091838" strokeWidth="5.5" />
    {/* Trompa hacia arriba alegre */}
    <path d="M 68 56 C 78 58 84 50 82 38 C 80 34 76 34 76 38 C 76 44 72 48 66 48" fill="#cbd5e1" stroke="#091838" strokeWidth="4" strokeLinecap="round" />
    {/* Ojo sonriente */}
    <circle cx="64" cy="44" r="3" fill="#091838" />
    <circle cx="65" cy="43" r="1" fill="#ffffff" />
    {/* Colmillo blanco */}
    <path d="M 66 54 Q 72 58 74 54" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="#ffffff" />
  </svg>
);

// Escalera
export const EscaleraIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Laterales de madera / color naranja */}
    <line x1="36" y1="16" x2="26" y2="84" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" />
    <line x1="64" y1="16" x2="74" y2="84" stroke="#fb923c" strokeWidth="6" strokeLinecap="round" />
    <line x1="36" y1="16" x2="26" y2="84" stroke="#091838" strokeWidth="6" strokeLinecap="round" strokeDasharray="0" />
    {/* Peldaños amarillos */}
    <line x1="34" y1="28" x2="66" y2="28" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
    <line x1="32" y1="44" x2="68" y2="44" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
    <line x1="30" y1="60" x2="70" y2="60" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
    <line x1="28" y1="74" x2="72" y2="74" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

// Luna (NO empieza con E -> empieza con L)
export const LunaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Media luna amarilla brillante */}
    <path d="M 64 18 C 36 22 24 50 36 78 C 42 90 58 92 68 84 C 52 82 46 60 54 42 C 58 34 66 26 64 18 Z" fill="#fde047" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Ojo durmiendo */}
    <path d="M 44 48 Q 48 52 52 48" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Gorrito de dormir lila opcional / estrellita */}
    <polygon points="74,32 76,36 80,38 76,40 74,44 72,40 68,38 72,36" fill="#38bdf8" />
  </svg>
);

// ==========================================
// LETRA F
// ==========================================
// Foca
export const FocaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Pelota en la nariz */}
    <circle cx="78" cy="22" r="9" fill="#ef4444" stroke="#091838" strokeWidth="3" />
    <path d="M 72 20 Q 78 16 84 22" stroke="#ffffff" strokeWidth="2.5" fill="none" />
    {/* Cuerpo foca celeste grisáceo */}
    <path d="M 18 82 C 16 72 32 64 42 60 C 50 56 60 46 68 34 C 74 38 76 46 72 54 C 64 70 52 82 18 82 Z" fill="#93c5fd" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Aleta delantera */}
    <path d="M 46 66 C 40 74 46 80 54 78 C 58 74 54 66 46 66 Z" fill="#60a5fa" stroke="#091838" strokeWidth="4" />
    {/* Cola posterior */}
    <path d="M 18 82 L 8 76 C 12 82 12 86 8 92 Z" fill="#60a5fa" stroke="#091838" strokeWidth="4" />
    {/* Ojo y bigotes */}
    <circle cx="66" cy="38" r="3" fill="#091838" />
    <line x1="72" y1="42" x2="82" y2="40" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="72" y1="45" x2="80" y2="48" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Fresa / Frutilla
export const FresaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Hojas verdes y tallo */}
    <path d="M 50 20 L 50 12" stroke="#15803d" strokeWidth="4.5" strokeLinecap="round" />
    <polygon points="50,22 42,14 36,24 50,26" fill="#22c55e" stroke="#091838" strokeWidth="2.5" />
    <polygon points="50,22 58,14 64,24 50,26" fill="#22c55e" stroke="#091838" strokeWidth="2.5" />
    <polygon points="50,22 50,28 38,28" fill="#16a34a" />
    <polygon points="50,22 50,28 62,28" fill="#16a34a" />
    {/* Cuerpo fresa roja acorazonada */}
    <path d="M 28 32 C 22 46 26 72 50 88 C 74 72 78 46 72 32 C 64 24 36 24 28 32 Z" fill="#ef4444" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Semillitas amarillas */}
    <ellipse cx="38" cy="44" rx="2" ry="3" fill="#fde047" stroke="#091838" strokeWidth="1.5" />
    <ellipse cx="50" cy="40" rx="2" ry="3" fill="#fde047" stroke="#091838" strokeWidth="1.5" />
    <ellipse cx="62" cy="44" rx="2" ry="3" fill="#fde047" stroke="#091838" strokeWidth="1.5" />
    <ellipse cx="44" cy="58" rx="2" ry="3" fill="#fde047" stroke="#091838" strokeWidth="1.5" />
    <ellipse cx="56" cy="58" rx="2" ry="3" fill="#fde047" stroke="#091838" strokeWidth="1.5" />
    <ellipse cx="50" cy="72" rx="2" ry="3" fill="#fde047" stroke="#091838" strokeWidth="1.5" />
  </svg>
);

// Fuego / Fogata
export const FuegoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Leños cruzados */}
    <line x1="20" y1="80" x2="80" y2="80" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />
    <line x1="28" y1="86" x2="72" y2="74" stroke="#92400e" strokeWidth="6" strokeLinecap="round" />
    {/* Llama roja exterior */}
    <path d="M 50 16 C 58 28 74 44 74 62 C 74 74 64 82 50 82 C 36 82 26 74 26 62 C 26 44 42 28 50 16 Z" fill="#ef4444" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    {/* Llama naranja intermedia */}
    <path d="M 50 32 C 56 42 66 52 66 64 C 66 74 58 78 50 78 C 42 78 34 74 34 64 C 34 52 44 42 50 32 Z" fill="#f97316" stroke="#091838" strokeWidth="3.5" />
    {/* Núcleo amarillo brillante */}
    <path d="M 50 50 C 53 56 58 62 58 68 C 58 74 54 76 50 76 C 46 76 42 74 42 68 C 42 62 47 56 50 50 Z" fill="#fde047" />
  </svg>
);

// ==========================================
// LETRA G
// ==========================================
// Gato
export const GatoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Orejas puntiagudas con rosa */}
    <polygon points="32,24 22,46 44,42" fill="#fb923c" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    <polygon points="32,28 26,44 40,41" fill="#f472b6" opacity="0.8" />
    <polygon points="68,24 56,42 78,46" fill="#fb923c" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    <polygon points="68,28 60,41 74,44" fill="#f472b6" opacity="0.8" />
    {/* Cabeza redonda naranja suave */}
    <circle cx="50" cy="56" r="26" fill="#fed7aa" stroke="#091838" strokeWidth="5.5" />
    {/* Ojos vivaces */}
    <circle cx="40" cy="52" r="3.5" fill="#091838" />
    <circle cx="41" cy="51" r="1.2" fill="#ffffff" />
    <circle cx="60" cy="52" r="3.5" fill="#091838" />
    <circle cx="61" cy="51" r="1.2" fill="#ffffff" />
    {/* Nariz rosa triangular */}
    <polygon points="50,58 46,63 54,63" fill="#f43f5e" stroke="#091838" strokeWidth="2" strokeLinejoin="round" />
    {/* Hocico sonriente */}
    <path d="M 46 64 Q 50 68 50 64 Q 50 68 54 64" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Bigotitos tiernos */}
    <line x1="34" y1="58" x2="20" y2="56" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="34" y1="63" x2="22" y2="66" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="66" y1="58" x2="80" y2="56" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="66" y1="63" x2="78" y2="66" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Gorra / Sombrero
export const GorraIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Botón superior */}
    <circle cx="46" cy="34" r="3.5" fill="#ef4444" stroke="#091838" strokeWidth="2" />
    {/* Copa redonda de la gorra */}
    <path d="M 24 64 C 22 42 38 34 56 34 C 70 34 76 44 74 64 Z" fill="#38bdf8" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Costura frontal */}
    <path d="M 46 34 L 46 64" stroke="#0284c7" strokeWidth="3" strokeDasharray="2 2" />
    {/* Visera horizontal curvada */}
    <path d="M 22 64 C 44 60 74 60 88 64 C 88 74 64 74 22 68 Z" fill="#facc15" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
  </svg>
);

// Gusano
export const GusanoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuerpecito segmentado en colinas alegres */}
    <circle cx="24" cy="62" r="10" fill="#a3e635" stroke="#091838" strokeWidth="4.5" />
    <circle cx="38" cy="54" r="10" fill="#84cc16" stroke="#091838" strokeWidth="4.5" />
    <circle cx="52" cy="62" r="10" fill="#a3e635" stroke="#091838" strokeWidth="4.5" />
    <circle cx="66" cy="54" r="10" fill="#84cc16" stroke="#091838" strokeWidth="4.5" />
    {/* Cabeza sonriente */}
    <circle cx="78" cy="42" r="13" fill="#bef264" stroke="#091838" strokeWidth="5" />
    <circle cx="76" cy="38" r="2.5" fill="#091838" />
    <circle cx="84" cy="38" r="2.5" fill="#091838" />
    <circle cx="72" cy="44" r="2.5" fill="#f472b6" opacity="0.8" />
    <path d="M 76 45 Q 80 50 84 45" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Antenitas */}
    <line x1="76" y1="30" x2="72" y2="20" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
    <circle cx="71" cy="19" r="3" fill="#facc15" stroke="#091838" strokeWidth="2" />
    <line x1="82" y1="30" x2="86" y2="20" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
    <circle cx="87" cy="19" r="3" fill="#facc15" stroke="#091838" strokeWidth="2" />
  </svg>
);

// ==========================================
// LETRA H
// ==========================================
// Hoja verde
export const HojaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Tallo que atraviesa */}
    <path d="M 22 84 C 40 68 62 44 80 20" stroke="#15803d" strokeWidth="5.5" strokeLinecap="round" />
    {/* Hoja ovalada con puntas */}
    <path d="M 28 78 C 14 52 36 22 78 22 C 78 64 48 86 28 78 Z" fill="#4ade80" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Nervaduras secundarias */}
    <path d="M 40 56 Q 34 46 36 38" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <path d="M 52 44 Q 60 48 68 44" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <path d="M 58 36 Q 52 28 54 24" stroke="#15803d" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* Gotita de rocío */}
    <circle cx="48" cy="62" r="3.5" fill="#bae6fd" stroke="#091838" strokeWidth="2" />
  </svg>
);

// Huevo
export const HuevoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Sombra base */}
    <ellipse cx="50" cy="84" rx="26" ry="8" fill="#e2e8f0" />
    {/* Silueta de huevo de granja suave */}
    <path d="M 50 16 C 30 16 22 46 22 64 C 22 78 34 86 50 86 C 66 86 78 78 78 64 C 78 46 70 16 50 16 Z" fill="#ffedd5" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Brillo curvo */}
    <path d="M 38 32 C 32 40 32 54 34 66" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
    {/* Carita linda opcional de pollito por nacer */}
    <circle cx="44" cy="52" r="2.5" fill="#091838" />
    <circle cx="56" cy="52" r="2.5" fill="#091838" />
    <circle cx="38" cy="56" r="2.5" fill="#f472b6" opacity="0.8" />
    <circle cx="62" cy="56" r="2.5" fill="#f472b6" opacity="0.8" />
    <path d="M 47 57 Q 50 60 53 57" stroke="#091838" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

// Hada mágica
export const HadaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Alas de mariposa / hada transparentes */}
    <ellipse cx="32" cy="42" rx="14" ry="20" fill="#c4b5fd" stroke="#091838" strokeWidth="4" opacity="0.8" transform="rotate(-25 32 42)" />
    <ellipse cx="68" cy="42" rx="14" ry="20" fill="#c4b5fd" stroke="#091838" strokeWidth="4" opacity="0.8" transform="rotate(25 68 42)" />
    {/* Vestido lila */}
    <polygon points="50,52 36,82 64,82" fill="#f472b6" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    {/* Cabeza y pelo amarillo */}
    <circle cx="50" cy="38" r="14" fill="#fed7aa" stroke="#091838" strokeWidth="4.5" />
    <path d="M 38 36 C 38 24 62 24 62 36 Z" fill="#facc15" stroke="#091838" strokeWidth="3" />
    {/* Ojos sonrientes */}
    <circle cx="46" cy="38" r="2" fill="#091838" />
    <circle cx="54" cy="38" r="2" fill="#091838" />
    {/* Varita mágica con estrella */}
    <line x1="62" y1="56" x2="80" y2="40" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
    <polygon points="82,38 84,32 88,36 84,40" fill="#fde047" stroke="#091838" strokeWidth="1.5" />
  </svg>
);

// ==========================================
// LETRA I
// ==========================================
// Isla
export const IslaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Palmera tronco */}
    <path d="M 52 68 C 50 48 58 38 60 30" stroke="#78350f" strokeWidth="5.5" strokeLinecap="round" />
    {/* Hojas palmera */}
    <path d="M 60 30 C 44 26 36 34 34 38" stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <path d="M 60 30 C 72 22 84 26 88 32" stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <path d="M 60 30 C 56 16 66 12 70 12" stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    {/* Coco */}
    <circle cx="57" cy="32" r="3" fill="#78350f" />
    {/* Montículo de arena dorada */}
    <path d="M 16 76 C 30 64 70 64 84 76 Z" fill="#fde047" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    {/* Agua de mar */}
    <path d="M 10 82 Q 25 76 40 82 Q 55 88 70 82 Q 85 76 92 82" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Iglú
export const IgluIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cúpula de hielo celeste suave */}
    <path d="M 18 76 C 18 38 82 38 82 76 Z" fill="#e0f2fe" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Bloques de hielo líneas */}
    <line x1="24" y1="62" x2="76" y2="62" stroke="#38bdf8" strokeWidth="3" />
    <line x1="32" y1="48" x2="68" y2="48" stroke="#38bdf8" strokeWidth="3" />
    <line x1="42" y1="48" x2="42" y2="62" stroke="#38bdf8" strokeWidth="2.5" />
    <line x1="58" y1="48" x2="58" y2="62" stroke="#38bdf8" strokeWidth="2.5" />
    {/* Puerta túnel redondeada */}
    <path d="M 40 76 C 40 60 60 60 60 76 Z" fill="#0284c7" stroke="#091838" strokeWidth="4.5" />
  </svg>
);

// Imán
export const ImanIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Herradura del imán en U roja */}
    <path d="M 26 24 L 26 56 C 26 74 74 74 74 56 L 74 24" stroke="#ef4444" strokeWidth="16" strokeLinecap="round" />
    {/* Hueco central */}
    <path d="M 26 24 L 26 56 C 26 74 74 74 74 56 L 74 24" stroke="#091838" strokeWidth="18" strokeLinecap="round" />
    <path d="M 26 24 L 26 56 C 26 74 74 74 74 56 L 74 24" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />
    {/* Polos metálicos plateados en las puntas */}
    <rect x="18" y="20" width="16" height="14" rx="2" fill="#e2e8f0" stroke="#091838" strokeWidth="3.5" />
    <rect x="66" y="20" width="16" height="14" rx="2" fill="#e2e8f0" stroke="#091838" strokeWidth="3.5" />
    {/* Chispa magnética amarilla */}
    <polygon points="50,14 53,22 60,25 53,28 50,36 47,28 40,25 47,22" fill="#facc15" stroke="#091838" strokeWidth="1.5" />
  </svg>
);

// ==========================================
// LETRA J
// ==========================================
// Jirafa
export const JirafaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuello largo amarillo */}
    <path d="M 44 86 L 46 36 L 62 36 L 64 86 Z" fill="#fde047" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Cabeza jirafa */}
    <path d="M 42 36 C 42 24 66 24 66 36 Z" fill="#fde047" stroke="#091838" strokeWidth="5" />
    <ellipse cx="54" cy="40" rx="14" ry="10" fill="#fef08a" stroke="#091838" strokeWidth="4" />
    {/* Cuernitos */}
    <line x1="46" y1="24" x2="44" y2="14" stroke="#091838" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="43" cy="13" r="3" fill="#ea580c" stroke="#091838" strokeWidth="2" />
    <line x1="62" y1="24" x2="64" y2="14" stroke="#091838" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="65" cy="13" r="3" fill="#ea580c" stroke="#091838" strokeWidth="2" />
    {/* Manchas marrones cuadradas/redondeadas */}
    <circle cx="53" cy="54" r="5" fill="#ea580c" stroke="#091838" strokeWidth="2" />
    <circle cx="56" cy="70" r="4.5" fill="#ea580c" stroke="#091838" strokeWidth="2" />
    <circle cx="50" cy="82" r="5" fill="#ea580c" stroke="#091838" strokeWidth="2" />
    {/* Ojo y sonrisa */}
    <circle cx="58" cy="34" r="2.5" fill="#091838" />
    <circle cx="48" cy="40" r="1.5" fill="#091838" />
    <circle cx="60" cy="40" r="1.5" fill="#091838" />
  </svg>
);

// Jarra / Jugo
export const JarraIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Asa de la jarra */}
    <path d="M 68 36 C 84 36 84 66 68 68" stroke="#091838" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M 68 36 C 84 36 84 66 68 68" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* Cuerpo de vidrio de la jarra */}
    <path d="M 32 28 L 68 28 L 64 80 C 64 86 36 86 36 80 Z" fill="#e0f2fe" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Jugo de naranja en el interior */}
    <path d="M 35 46 L 65 46 L 63 78 C 63 83 37 83 37 78 Z" fill="#fb923c" stroke="#091838" strokeWidth="3" />
    {/* Rodaja de naranja en el borde */}
    <circle cx="34" cy="28" r="10" fill="#f97316" stroke="#091838" strokeWidth="3" />
    <circle cx="34" cy="28" r="7" fill="#fed7aa" />
  </svg>
);

// Juguete (Tren de juguete)
export const JugueteIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Chimenea con nube de humo */}
    <rect x="30" y="28" width="8" height="12" fill="#facc15" stroke="#091838" strokeWidth="3" />
    <circle cx="34" cy="18" r="5" fill="#cbd5e1" stroke="#091838" strokeWidth="2" />
    {/* Cabina locomotora roja */}
    <rect x="52" y="32" width="26" height="34" rx="4" fill="#ef4444" stroke="#091838" strokeWidth="5" />
    {/* Ventana */}
    <rect x="58" y="38" width="14" height="12" rx="2" fill="#38bdf8" stroke="#091838" strokeWidth="3" />
    {/* Caldera delantera azul */}
    <rect x="22" y="44" width="30" height="22" rx="4" fill="#38bdf8" stroke="#091838" strokeWidth="5" />
    {/* Ruedas amarillas */}
    <circle cx="32" cy="74" r="8" fill="#facc15" stroke="#091838" strokeWidth="4" />
    <circle cx="32" cy="74" r="3" fill="#ef4444" />
    <circle cx="48" cy="74" r="8" fill="#facc15" stroke="#091838" strokeWidth="4" />
    <circle cx="48" cy="74" r="3" fill="#ef4444" />
    <circle cx="68" cy="74" r="10" fill="#facc15" stroke="#091838" strokeWidth="4" />
    <circle cx="68" cy="74" r="4" fill="#ef4444" />
  </svg>
);

// ==========================================
// LETRA K
// ==========================================
// Koala
export const KoalaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Orejas redondas y peludas con rosa */}
    <circle cx="28" cy="38" r="16" fill="#94a3b8" stroke="#091838" strokeWidth="4.5" />
    <circle cx="28" cy="38" r="9" fill="#f472b6" opacity="0.7" />
    <circle cx="72" cy="38" r="16" fill="#94a3b8" stroke="#091838" strokeWidth="4.5" />
    <circle cx="72" cy="38" r="9" fill="#f472b6" opacity="0.7" />
    {/* Cabeza koala */}
    <circle cx="50" cy="54" r="26" fill="#cbd5e1" stroke="#091838" strokeWidth="5.5" />
    {/* Nariz negra grande característica */}
    <ellipse cx="50" cy="56" rx="8" ry="12" fill="#091838" />
    <ellipse cx="48" cy="52" rx="2.5" ry="4" fill="#ffffff" opacity="0.7" />
    {/* Ojos curiosos */}
    <circle cx="38" cy="48" r="3" fill="#091838" />
    <circle cx="62" cy="48" r="3" fill="#091838" />
    <circle cx="39" cy="47" r="1" fill="#ffffff" />
    <circle cx="63" cy="47" r="1" fill="#ffffff" />
    {/* Sonrisa tierna */}
    <path d="M 44 70 Q 50 74 56 70" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Kiwi (fruta)
export const KiwiIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Piel exterior marrón con textura */}
    <circle cx="50" cy="50" r="38" fill="#854d0e" stroke="#091838" strokeWidth="5.5" />
    {/* Pulpa verde brillante */}
    <circle cx="50" cy="50" r="32" fill="#84cc16" stroke="#091838" strokeWidth="4" />
    {/* Centro blanco ovalado */}
    <ellipse cx="50" cy="50" rx="10" ry="13" fill="#fef08a" stroke="#091838" strokeWidth="2.5" />
    {/* Semillitas negras pequeñas en círculo */}
    <circle cx="40" cy="42" r="1.8" fill="#091838" />
    <circle cx="60" cy="42" r="1.8" fill="#091838" />
    <circle cx="36" cy="50" r="1.8" fill="#091838" />
    <circle cx="64" cy="50" r="1.8" fill="#091838" />
    <circle cx="40" cy="58" r="1.8" fill="#091838" />
    <circle cx="60" cy="58" r="1.8" fill="#091838" />
    <circle cx="50" cy="34" r="1.8" fill="#091838" />
    <circle cx="50" cy="66" r="1.8" fill="#091838" />
  </svg>
);

// Karateca (Kimono / cinturón)
export const KimonoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Chaqueta kimono blanco */}
    <path d="M 28 24 L 72 24 L 84 46 L 72 52 L 66 42 L 66 78 L 34 78 L 34 42 L 28 52 L 16 46 Z" fill="#ffffff" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    {/* Cuello cruzado en V */}
    <line x1="34" y1="24" x2="52" y2="58" stroke="#091838" strokeWidth="4" />
    <line x1="66" y1="24" x2="48" y2="58" stroke="#091838" strokeWidth="4" />
    {/* Cinturón negro de karate (cinta) */}
    <rect x="32" y="56" width="36" height="8" rx="2" fill="#091838" stroke="#091838" strokeWidth="2" />
    <path d="M 46 64 L 42 78 L 48 78 L 50 64" fill="#091838" />
    <path d="M 50 64 L 54 80 L 60 78 L 54 64" fill="#091838" />
  </svg>
);

// ==========================================
// LETRA L
// ==========================================
// León
export const LeonIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Melena frondosa naranja / marrón */}
    <circle cx="50" cy="50" r="36" fill="#f97316" stroke="#091838" strokeWidth="5.5" strokeDasharray="16 4" />
    {/* Cara redonda amarilla */}
    <circle cx="50" cy="50" r="23" fill="#fde047" stroke="#091838" strokeWidth="4.5" />
    {/* Orejitas */}
    <circle cx="34" cy="32" r="6" fill="#facc15" stroke="#091838" strokeWidth="3" />
    <circle cx="66" cy="32" r="6" fill="#facc15" stroke="#091838" strokeWidth="3" />
    {/* Ojos y nariz */}
    <circle cx="42" cy="48" r="2.5" fill="#091838" />
    <circle cx="58" cy="48" r="2.5" fill="#091838" />
    <polygon points="50,53 45,58 55,58" fill="#ea580c" stroke="#091838" strokeWidth="1.5" />
    <path d="M 46 60 Q 50 64 54 60" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Bigotitos */}
    <line x1="36" y1="56" x2="26" y2="54" stroke="#091838" strokeWidth="2" strokeLinecap="round" />
    <line x1="64" y1="56" x2="74" y2="54" stroke="#091838" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Lápiz
export const LapizIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Borrador rosa superior */}
    <rect x="22" y="24" width="16" height="12" rx="3" fill="#f472b6" stroke="#091838" strokeWidth="3.5" transform="rotate(-45 22 24)" />
    {/* Aro metálico */}
    <rect x="28" y="30" width="16" height="6" fill="#cbd5e1" stroke="#091838" strokeWidth="3.5" transform="rotate(-45 28 30)" />
    {/* Cuerpo del lápiz amarillo */}
    <path d="M 38 28 L 72 62 L 62 72 L 28 38 Z" fill="#facc15" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    <line x1="33" y1="33" x2="67" y2="67" stroke="#eab308" strokeWidth="3" />
    {/* Punta de madera y grafito */}
    <polygon points="72,62 86,76 62,72" fill="#fed7aa" stroke="#091838" strokeWidth="4" strokeLinejoin="round" />
    <polygon points="80,70 86,76 76,74" fill="#091838" />
  </svg>
);

// Lámpara
export const LamparaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Pantalla de lámpara rosa/violeta */}
    <polygon points="40,24 60,24 74,52 26,52" fill="#f43f5e" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    <path d="M 30 52 Q 50 48 70 52" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.6" />
    {/* Pie y base de la lámpara */}
    <line x1="50" y1="52" x2="50" y2="78" stroke="#091838" strokeWidth="5" strokeLinecap="round" />
    <ellipse cx="50" cy="80" rx="18" ry="6" fill="#facc15" stroke="#091838" strokeWidth="4" />
    {/* Rayos de luz cálida */}
    <line x1="28" y1="60" x2="20" y2="66" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="72" y1="60" x2="80" y2="66" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

// ==========================================
// LETRA M
// ==========================================
// Mono
export const MonoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Orejas grandes laterales */}
    <circle cx="24" cy="50" r="13" fill="#854d0e" stroke="#091838" strokeWidth="4.5" />
    <circle cx="24" cy="50" r="7" fill="#fed7aa" />
    <circle cx="76" cy="50" r="13" fill="#854d0e" stroke="#091838" strokeWidth="4.5" />
    <circle cx="76" cy="50" r="7" fill="#fed7aa" />
    {/* Cabeza marrón redonda */}
    <circle cx="50" cy="50" r="26" fill="#854d0e" stroke="#091838" strokeWidth="5.5" />
    {/* Cara con forma de corazón invertido beige */}
    <ellipse cx="42" cy="44" rx="10" ry="12" fill="#fed7aa" />
    <ellipse cx="58" cy="44" rx="10" ry="12" fill="#fed7aa" />
    <ellipse cx="50" cy="58" rx="16" ry="13" fill="#fed7aa" stroke="#091838" strokeWidth="3" />
    {/* Ojos y nariz de botón */}
    <circle cx="43" cy="44" r="2.8" fill="#091838" />
    <circle cx="57" cy="44" r="2.8" fill="#091838" />
    <circle cx="47" cy="54" r="1.5" fill="#091838" />
    <circle cx="53" cy="54" r="1.5" fill="#091838" />
    {/* Sonrisa alegre */}
    <path d="M 42 61 Q 50 67 58 61" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// Mariposa
export const MariposaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Alas superiores fucsia con círculos amarillos */}
    <ellipse cx="32" cy="38" rx="18" ry="15" fill="#f43f5e" stroke="#091838" strokeWidth="4.5" transform="rotate(-15 32 38)" />
    <circle cx="32" cy="38" r="5" fill="#fde047" stroke="#091838" strokeWidth="2" />
    <ellipse cx="68" cy="38" rx="18" ry="15" fill="#f43f5e" stroke="#091838" strokeWidth="4.5" transform="rotate(15 68 38)" />
    <circle cx="68" cy="38" r="5" fill="#fde047" stroke="#091838" strokeWidth="2" />
    {/* Alas inferiores violetas */}
    <ellipse cx="36" cy="62" rx="14" ry="11" fill="#a855f7" stroke="#091838" strokeWidth="4" transform="rotate(15 36 62)" />
    <circle cx="36" cy="62" r="3.5" fill="#38bdf8" />
    <ellipse cx="64" cy="62" rx="14" ry="11" fill="#a855f7" stroke="#091838" strokeWidth="4" transform="rotate(-15 64 62)" />
    <circle cx="64" cy="62" r="3.5" fill="#38bdf8" />
    {/* Cuerpecito alargado central */}
    <ellipse cx="50" cy="50" rx="5" ry="24" fill="#091838" stroke="#091838" strokeWidth="2" />
    {/* Antenas en espiral */}
    <path d="M 48 28 Q 42 16 38 20" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 52 28 Q 58 16 62 20" stroke="#091838" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

// Mesa
export const MesaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Tablero superior de madera */}
    <polygon points="20,44 76,44 84,52 12,52" fill="#fb923c" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    <rect x="16" y="52" width="68" height="6" fill="#ea580c" stroke="#091838" strokeWidth="3.5" />
    {/* 4 Patas de la mesa */}
    <line x1="22" y1="58" x2="22" y2="84" stroke="#091838" strokeWidth="5.5" strokeLinecap="round" />
    <line x1="32" y1="58" x2="32" y2="78" stroke="#9a3412" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="68" y1="58" x2="68" y2="78" stroke="#9a3412" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="78" y1="58" x2="78" y2="84" stroke="#091838" strokeWidth="5.5" strokeLinecap="round" />
  </svg>
);

// ==========================================
// LETRA N
// ==========================================
// Nube
export const NubeIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cúmulos redondeados de la nube esponjosa */}
    <path d="M 30 68 L 74 68 C 84 68 88 58 82 50 C 86 38 74 30 64 34 C 58 20 40 22 36 34 C 26 32 18 42 22 52 C 16 60 22 68 30 68 Z" fill="#e0f2fe" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Carita sonriente kawaii */}
    <circle cx="44" cy="50" r="3" fill="#091838" />
    <circle cx="62" cy="50" r="3" fill="#091838" />
    <circle cx="37" cy="55" r="3" fill="#f472b6" opacity="0.7" />
    <circle cx="69" cy="55" r="3" fill="#f472b6" opacity="0.7" />
    <path d="M 49 55 Q 53 60 57 55" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Nido con huevitos
export const NidoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Tres huevitos celestes descansando */}
    <ellipse cx="38" cy="46" rx="8" ry="12" fill="#7dd3fc" stroke="#091838" strokeWidth="3" transform="rotate(-15 38 46)" />
    <ellipse cx="62" cy="46" rx="8" ry="12" fill="#7dd3fc" stroke="#091838" strokeWidth="3" transform="rotate(15 62 46)" />
    <ellipse cx="50" cy="42" rx="8" ry="12" fill="#bae6fd" stroke="#091838" strokeWidth="3" />
    {/* Base trenzada de ramitas marrones */}
    <path d="M 20 54 C 20 76 80 76 80 54 C 80 62 20 62 20 54 Z" fill="#b45309" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    {/* Ramitas cruzadas de adorno */}
    <line x1="24" y1="62" x2="42" y2="72" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
    <line x1="76" y1="62" x2="58" y2="72" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
    <line x1="38" y1="68" x2="62" y2="68" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Naranja
export const NaranjaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Tallo verde y hoja */}
    <path d="M 50 26 C 50 16 54 14 58 12" stroke="#15803d" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <path d="M 52 22 C 64 18 70 24 66 30 C 56 30 52 24 52 22 Z" fill="#4ade80" stroke="#091838" strokeWidth="3" />
    {/* Esfera naranja jugosa */}
    <circle cx="50" cy="56" r="32" fill="#f97316" stroke="#091838" strokeWidth="5.5" />
    {/* Brillo curvo */}
    <path d="M 32 46 C 36 38 44 34 52 34" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
  </svg>
);

// ==========================================
// LETRA O
// ==========================================
// Oso
export const OsoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Orejitas redondas */}
    <circle cx="30" cy="34" r="12" fill="#78350f" stroke="#091838" strokeWidth="4.5" />
    <circle cx="30" cy="34" r="6" fill="#fbcfe8" />
    <circle cx="70" cy="34" r="12" fill="#78350f" stroke="#091838" strokeWidth="4.5" />
    <circle cx="70" cy="34" r="6" fill="#fbcfe8" />
    {/* Cabeza de oso marrón */}
    <circle cx="50" cy="54" r="26" fill="#92400e" stroke="#091838" strokeWidth="5.5" />
    {/* Hocico crema ovalado */}
    <ellipse cx="50" cy="62" rx="14" ry="10" fill="#fde68a" stroke="#091838" strokeWidth="3.5" />
    <ellipse cx="50" cy="58" rx="6" ry="4" fill="#091838" />
    <path d="M 46 65 Q 50 69 54 65" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Ojos de botón */}
    <circle cx="41" cy="48" r="2.8" fill="#091838" />
    <circle cx="59" cy="48" r="2.8" fill="#091838" />
  </svg>
);

// Ojo
export const OjoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Pestañas superiores */}
    <line x1="34" y1="32" x2="28" y2="22" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
    <line x1="50" y1="30" x2="50" y2="18" stroke="#091838" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="66" y1="32" x2="72" y2="22" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
    {/* Contorno almendrado del ojo */}
    <path d="M 16 50 C 28 32 72 32 84 50 C 72 68 28 68 16 50 Z" fill="#ffffff" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Iris azul cielo */}
    <circle cx="50" cy="50" r="16" fill="#38bdf8" stroke="#091838" strokeWidth="3.5" />
    {/* Pupila negra */}
    <circle cx="50" cy="50" r="9" fill="#091838" />
    {/* Brillo blanco alegre */}
    <circle cx="46" cy="46" r="4" fill="#ffffff" />
    <circle cx="54" cy="54" r="2" fill="#ffffff" />
  </svg>
);

// Olla
export const OllaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Vapor saliendo */}
    <path d="M 42 22 Q 38 14 42 8" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 58 22 Q 62 14 58 8" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Asa izquierda y derecha */}
    <path d="M 22 44 C 10 44 10 60 22 60" stroke="#091838" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M 78 44 C 90 44 90 60 78 60" stroke="#091838" strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* Cuerpo de la olla roja */}
    <rect x="22" y="38" width="56" height="38" rx="10" fill="#ef4444" stroke="#091838" strokeWidth="5.5" />
    {/* Tapa con tirador circular */}
    <rect x="18" y="32" width="64" height="8" rx="4" fill="#facc15" stroke="#091838" strokeWidth="4" />
    <circle cx="50" cy="27" r="5" fill="#facc15" stroke="#091838" strokeWidth="3.5" />
    {/* Brillo curvo */}
    <path d="M 30 50 L 30 64" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
  </svg>
);

// ==========================================
// LETRA P
// ==========================================
// Pez
export const PezIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cola del pez */}
    <polygon points="26,50 10,32 10,68" fill="#f97316" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    {/* Aleta dorsal */}
    <path d="M 44 32 C 52 18 64 24 64 34 Z" fill="#fb923c" stroke="#091838" strokeWidth="3.5" strokeLinejoin="round" />
    {/* Cuerpo ovalado naranja brillante */}
    <ellipse cx="52" cy="50" rx="30" ry="22" fill="#fb923c" stroke="#091838" strokeWidth="5.5" />
    {/* Franjas blancas de pez payaso */}
    <path d="M 48 29 C 52 40 52 60 48 71" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
    <path d="M 48 29 C 52 40 52 60 48 71" stroke="#091838" strokeWidth="1.5" fill="none" />
    {/* Ojo grande kawaii */}
    <circle cx="68" cy="44" r="5" fill="#ffffff" stroke="#091838" strokeWidth="2.5" />
    <circle cx="70" cy="44" r="2.5" fill="#091838" />
    {/* Sonrisa */}
    <path d="M 72 54 Q 76 56 78 52" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Piña
export const PinaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Corona de hojas verdes */}
    <polygon points="50,12 40,32 50,30 60,32" fill="#22c55e" stroke="#091838" strokeWidth="3" />
    <polygon points="34,16 38,34 46,30" fill="#16a34a" stroke="#091838" strokeWidth="2.5" />
    <polygon points="66,16 54,30 62,34" fill="#16a34a" stroke="#091838" strokeWidth="2.5" />
    {/* Cuerpo de piña ovalado amarillo con patrón */}
    <ellipse cx="50" cy="58" rx="22" ry="28" fill="#facc15" stroke="#091838" strokeWidth="5.5" />
    {/* Rombos de piña */}
    <path d="M 36 44 L 64 72" stroke="#ca8a04" strokeWidth="3" />
    <path d="M 64 44 L 36 72" stroke="#ca8a04" strokeWidth="3" />
    <path d="M 32 58 L 50 76" stroke="#ca8a04" strokeWidth="3" />
    <path d="M 68 58 L 50 76" stroke="#ca8a04" strokeWidth="3" />
  </svg>
);

// ==========================================
// LETRA Q
// ==========================================
// Queso
export const QuesoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuña de queso triangular en perspectiva */}
    <polygon points="18,66 82,66 70,36 18,50" fill="#facc15" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    <polygon points="70,36 18,50 36,28 78,28" fill="#fde047" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    {/* Agujeros de queso gruyère */}
    <ellipse cx="36" cy="58" rx="6" ry="4" fill="#eab308" stroke="#091838" strokeWidth="2" />
    <circle cx="56" cy="54" r="4.5" fill="#eab308" stroke="#091838" strokeWidth="2" />
    <circle cx="68" cy="60" r="3" fill="#eab308" stroke="#091838" strokeWidth="1.5" />
    <ellipse cx="50" cy="38" rx="5" ry="3" fill="#ca8a04" stroke="#091838" strokeWidth="1.5" />
    <ellipse cx="30" cy="40" rx="4" ry="2.5" fill="#ca8a04" stroke="#091838" strokeWidth="1.5" />
  </svg>
);

// Quetzal (ave mística hermosa y colorida de Centro/Latinoamérica)
export const QuetzalIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cola larga verde esmeralda ondulada */}
    <path d="M 44 68 Q 38 82 46 92 Q 40 92 38 82 Q 42 74 40 68" fill="#10b981" stroke="#091838" strokeWidth="3" />
    <path d="M 48 68 Q 44 84 52 94 Q 48 94 46 84 Q 46 74 46 68" fill="#059669" stroke="#091838" strokeWidth="2.5" />
    {/* Pecho rojo brillante */}
    <path d="M 46 44 C 42 56 46 68 56 68 C 66 68 64 56 60 48 Z" fill="#ef4444" stroke="#091838" strokeWidth="4" />
    {/* Cabeza y cresta verde */}
    <circle cx="56" cy="38" r="14" fill="#10b981" stroke="#091838" strokeWidth="4.5" />
    <path d="M 52 26 C 54 20 62 20 62 28 Z" fill="#34d399" stroke="#091838" strokeWidth="3" />
    {/* Pico amarillo */}
    <polygon points="68,36 80,40 68,44" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
    {/* Ojo vivaz */}
    <circle cx="60" cy="36" r="2.5" fill="#091838" />
  </svg>
);

// Quitasol / Sombrilla de playa
export const QuitasolIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Palo inclinado */}
    <line x1="50" y1="42" x2="32" y2="86" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
    {/* Cúpula de sombrilla en gajos multicolor */}
    <path d="M 18 46 C 26 22 74 22 82 46 Z" fill="#38bdf8" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    <path d="M 34 46 C 38 28 62 28 66 46 Z" fill="#facc15" stroke="#091838" strokeWidth="3.5" />
    <path d="M 46 46 C 48 30 52 30 54 46 Z" fill="#ef4444" stroke="#091838" strokeWidth="2" />
    {/* Onditas del borde inferior */}
    <path d="M 18 46 Q 26 50 34 46 Q 42 50 50 46 Q 58 50 66 46 Q 74 50 82 46" stroke="#091838" strokeWidth="3" fill="none" />
  </svg>
);

// ==========================================
// LETRA R
// ==========================================
// Ratón
export const RatonIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cola en espiral larga */}
    <path d="M 22 66 Q 10 60 12 48 Q 14 42 20 44" stroke="#f472b6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* Oreja redonda grande con rosa */}
    <circle cx="48" cy="34" r="14" fill="#cbd5e1" stroke="#091838" strokeWidth="4.5" />
    <circle cx="48" cy="34" r="8" fill="#f472b6" opacity="0.8" />
    {/* Cuerpo en cuña gris suave */}
    <path d="M 24 68 C 24 48 46 44 64 48 C 76 52 84 62 86 64 C 74 72 40 76 24 68 Z" fill="#94a3b8" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Nariz rosa y ojo */}
    <circle cx="86" cy="63" r="3" fill="#f43f5e" />
    <circle cx="68" cy="52" r="2.8" fill="#091838" />
    {/* Bigotitos */}
    <line x1="82" y1="62" x2="94" y2="58" stroke="#091838" strokeWidth="2" strokeLinecap="round" />
    <line x1="82" y1="66" x2="92" y2="70" stroke="#091838" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Reloj
export const RelojIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Campanitas superiores de despertador */}
    <path d="M 26 24 C 20 28 20 38 28 38 Z" fill="#ef4444" stroke="#091838" strokeWidth="3.5" />
    <path d="M 74 24 C 80 28 80 38 72 38 Z" fill="#ef4444" stroke="#091838" strokeWidth="3.5" />
    {/* Patitas */}
    <line x1="30" y1="78" x2="22" y2="88" stroke="#091838" strokeWidth="5" strokeLinecap="round" />
    <line x1="70" y1="78" x2="78" y2="88" stroke="#091838" strokeWidth="5" strokeLinecap="round" />
    {/* Esfera redonda roja y blanca */}
    <circle cx="50" cy="54" r="30" fill="#ef4444" stroke="#091838" strokeWidth="5.5" />
    <circle cx="50" cy="54" r="23" fill="#ffffff" stroke="#091838" strokeWidth="3.5" />
    {/* Manecillas marcando las 3:00 */}
    <line x1="50" y1="54" x2="50" y2="38" stroke="#091838" strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="54" x2="64" y2="54" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="50" cy="54" r="3" fill="#091838" />
  </svg>
);

// Rana
export const RanaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Ojos saltones redondos */}
    <circle cx="34" cy="36" r="12" fill="#84cc16" stroke="#091838" strokeWidth="4.5" />
    <circle cx="34" cy="36" r="6" fill="#ffffff" />
    <circle cx="35" cy="36" r="3" fill="#091838" />
    <circle cx="66" cy="36" r="12" fill="#84cc16" stroke="#091838" strokeWidth="4.5" />
    <circle cx="66" cy="36" r="6" fill="#ffffff" />
    <circle cx="65" cy="36" r="3" fill="#091838" />
    {/* Cabeza y boca ancha sonriente */}
    <ellipse cx="50" cy="56" rx="30" ry="22" fill="#a3e635" stroke="#091838" strokeWidth="5.5" />
    {/* Mejillas sonrosadas */}
    <circle cx="30" cy="56" r="4" fill="#f472b6" opacity="0.7" />
    <circle cx="70" cy="56" r="4" fill="#f472b6" opacity="0.7" />
    {/* Gran sonrisa de rana */}
    <path d="M 32 60 Q 50 72 68 60" stroke="#091838" strokeWidth="3.5" strokeLinecap="round" fill="none" />
  </svg>
);

// ==========================================
// LETRA S
// ==========================================
// Silla
export const SillaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Respaldo alto */}
    <rect x="26" y="18" width="10" height="38" rx="2" fill="#fb923c" stroke="#091838" strokeWidth="4.5" />
    <line x1="31" y1="26" x2="31" y2="48" stroke="#ea580c" strokeWidth="2.5" />
    {/* Asiento cuadrado en perspectiva */}
    <polygon points="26,54 74,54 66,64 22,64" fill="#facc15" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    {/* 4 Patas */}
    <line x1="26" y1="64" x2="26" y2="86" stroke="#091838" strokeWidth="5" strokeLinecap="round" />
    <line x1="66" y1="64" x2="66" y2="86" stroke="#091838" strokeWidth="5" strokeLinecap="round" />
    <line x1="72" y1="56" x2="72" y2="76" stroke="#9a3412" strokeWidth="4" strokeLinecap="round" />
    <line x1="34" y1="56" x2="34" y2="76" stroke="#9a3412" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Serpiente
export const SerpienteIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuerpo sinuoso en forma de S verde */}
    <path d="M 68 34 C 68 18 38 20 38 38 C 38 56 68 56 64 74 C 60 84 44 86 32 78" stroke="#22c55e" strokeWidth="14" strokeLinecap="round" fill="none" />
    <path d="M 68 34 C 68 18 38 20 38 38 C 38 56 68 56 64 74 C 60 84 44 86 32 78" stroke="#091838" strokeWidth="18" strokeLinecap="round" fill="none" style={{ zIndex: -1 }} />
    <path d="M 68 34 C 68 18 38 20 38 38 C 38 56 68 56 64 74 C 60 84 44 86 32 78" stroke="#4ade80" strokeWidth="10" strokeLinecap="round" fill="none" />
    {/* Cabeza redonda */}
    <circle cx="68" cy="30" r="10" fill="#22c55e" stroke="#091838" strokeWidth="3.5" />
    <circle cx="70" cy="28" r="2.5" fill="#091838" />
    {/* Lengüita bífida roja */}
    <path d="M 76 30 L 84 30 L 88 26 M 84 30 L 88 34" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// Sopa (Tazón con cuchara)
export const SopaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Vapor caliente */}
    <path d="M 40 20 Q 36 14 40 8" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M 52 20 Q 56 14 52 8" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Cuchara dentro del plato */}
    <line x1="62" y1="24" x2="48" y2="48" stroke="#cbd5e1" strokeWidth="4.5" strokeLinecap="round" />
    {/* Tazón hondo naranja */}
    <path d="M 18 42 L 82 42 C 82 72 18 72 18 42 Z" fill="#f97316" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Sopa amarilla nutritiva */}
    <ellipse cx="50" cy="42" rx="30" ry="8" fill="#fde047" stroke="#091838" strokeWidth="3.5" />
    {/* Tropezones de verduritas */}
    <circle cx="40" cy="42" r="2" fill="#22c55e" />
    <circle cx="56" cy="43" r="2" fill="#ef4444" />
  </svg>
);

// ==========================================
// LETRA T
// ==========================================
// Tortuga
export const TortugaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Patitas y colita */}
    <ellipse cx="26" cy="66" rx="7" ry="5" fill="#a3e635" stroke="#091838" strokeWidth="3" />
    <ellipse cx="70" cy="66" rx="7" ry="5" fill="#a3e635" stroke="#091838" strokeWidth="3" />
    <polygon points="22,54 12,56 22,60" fill="#a3e635" stroke="#091838" strokeWidth="2.5" />
    {/* Cabeza asomada alegre */}
    <ellipse cx="78" cy="46" rx="10" ry="8" fill="#a3e635" stroke="#091838" strokeWidth="4" />
    <circle cx="82" cy="44" r="2" fill="#091838" />
    <path d="M 80 50 Q 84 52 86 48" stroke="#091838" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Caparazón abombado verde oscuro */}
    <path d="M 22 58 C 22 34 74 34 74 58 Z" fill="#15803d" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Escudos poligonales en caparazón */}
    <polygon points="48,38 36,46 42,56 54,56 60,46" fill="#22c55e" stroke="#091838" strokeWidth="2.5" />
  </svg>
);

// Tomate
export const TomateIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Pedúnculo estrella verde */}
    <polygon points="50,22 42,16 46,26 36,28 46,32 50,26 54,32 64,28 54,26 58,16" fill="#22c55e" stroke="#091838" strokeWidth="2.5" />
    <path d="M 50 22 L 50 14" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
    {/* Tomate rojo redondo y brillante */}
    <circle cx="50" cy="56" r="30" fill="#ef4444" stroke="#091838" strokeWidth="5.5" />
    {/* Brillo curvo */}
    <path d="M 34 46 C 38 38 46 36 54 36" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
  </svg>
);

// Tambor
export const TamborIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Baquetas cruzadas arriba */}
    <line x1="22" y1="22" x2="52" y2="40" stroke="#78350f" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="22" cy="22" r="3.5" fill="#facc15" stroke="#091838" strokeWidth="2" />
    <line x1="78" y1="22" x2="48" y2="40" stroke="#78350f" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="78" cy="22" r="3.5" fill="#facc15" stroke="#091838" strokeWidth="2" />
    {/* Parche superior elíptico */}
    <ellipse cx="50" cy="44" rx="30" ry="10" fill="#fef08a" stroke="#091838" strokeWidth="4.5" />
    {/* Cuerpo cilíndrico rojo */}
    <path d="M 20 44 L 20 74 C 20 84 80 84 80 74 L 80 44 Z" fill="#ef4444" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Cuerdas en zigzag */}
    <polyline points="22,48 36,78 50,48 64,78 78,48" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// ==========================================
// LETRA U
// ==========================================
// Uvas
export const UvasIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Tallo marrón y zarcillo */}
    <path d="M 50 24 C 50 14 56 12 60 10" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <path d="M 50 22 C 40 18 36 24 38 28 C 46 28 50 22 50 22 Z" fill="#22c55e" stroke="#091838" strokeWidth="2.5" />
    {/* Racimo de uvas moradas */}
    {/* Fila 1 */}
    <circle cx="38" cy="34" r="8" fill="#9333ea" stroke="#091838" strokeWidth="3" />
    <circle cx="52" cy="32" r="8" fill="#a855f7" stroke="#091838" strokeWidth="3" />
    <circle cx="64" cy="36" r="8" fill="#9333ea" stroke="#091838" strokeWidth="3" />
    {/* Fila 2 */}
    <circle cx="32" cy="46" r="8" fill="#a855f7" stroke="#091838" strokeWidth="3" />
    <circle cx="46" cy="46" r="8" fill="#7e22ce" stroke="#091838" strokeWidth="3" />
    <circle cx="60" cy="48" r="8" fill="#a855f7" stroke="#091838" strokeWidth="3" />
    {/* Fila 3 */}
    <circle cx="40" cy="58" r="8" fill="#9333ea" stroke="#091838" strokeWidth="3" />
    <circle cx="54" cy="60" r="8" fill="#7e22ce" stroke="#091838" strokeWidth="3" />
    {/* Fila 4 punta */}
    <circle cx="47" cy="72" r="8" fill="#a855f7" stroke="#091838" strokeWidth="3" />
    {/* Brillos blancos */}
    <circle cx="44" cy="43" r="2" fill="#ffffff" />
    <circle cx="51" cy="57" r="2" fill="#ffffff" />
  </svg>
);

// Unicornio
export const UnicornioIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuerno dorado en espiral */}
    <polygon points="56,12 50,32 64,30" fill="#facc15" stroke="#091838" strokeWidth="3" strokeLinejoin="round" />
    <line x1="53" y1="20" x2="60" y2="18" stroke="#ea580c" strokeWidth="2" />
    <line x1="51" y1="26" x2="62" y2="24" stroke="#ea580c" strokeWidth="2" />
    {/* Crin arcoíris */}
    <path d="M 38 32 C 32 36 28 50 32 62" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" fill="none" />
    <path d="M 34 42 C 28 48 26 58 28 68" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" fill="none" />
    {/* Cabeza blanca de unicornio */}
    <path d="M 38 68 C 38 48 48 34 66 36 C 76 38 80 50 74 60 C 66 66 54 68 38 68 Z" fill="#ffffff" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    {/* Orejita */}
    <polygon points="46,32 40,20 52,24" fill="#ffffff" stroke="#091838" strokeWidth="3" />
    <polygon points="45,30 42,22 49,25" fill="#f472b6" />
    {/* Ojo durmiente con pestañas kawaii */}
    <path d="M 60 48 Q 64 54 68 48" stroke="#091838" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Nariz rosa y mejilla */}
    <circle cx="70" cy="56" r="3" fill="#f472b6" opacity="0.8" />
  </svg>
);

// Uña
export const UnaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Dedo con uña pintada de rosa */}
    <rect x="34" y="24" width="32" height="60" rx="16" fill="#fed7aa" stroke="#091838" strokeWidth="5.5" />
    {/* Uña brillante fucsia */}
    <path d="M 38 28 C 38 24 62 24 62 28 L 62 46 C 62 48 38 48 38 46 Z" fill="#f43f5e" stroke="#091838" strokeWidth="3.5" />
    {/* Brillo curvo en la uña */}
    <path d="M 44 30 L 44 42" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    {/* Pliegues de articulación del dedo */}
    <line x1="40" y1="58" x2="60" y2="58" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
    <line x1="42" y1="64" x2="58" y2="64" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ==========================================
// LETRA V
// ==========================================
// Vaca
export const VacaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuernos pequeños amarillos */}
    <polygon points="34,26 28,16 38,20" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
    <polygon points="66,26 72,16 62,20" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
    {/* Orejas caídas */}
    <ellipse cx="24" cy="38" rx="8" ry="5" fill="#ffffff" stroke="#091838" strokeWidth="3" transform="rotate(-15 24 38)" />
    <ellipse cx="76" cy="38" rx="8" ry="5" fill="#ffffff" stroke="#091838" strokeWidth="3" transform="rotate(15 76 38)" />
    {/* Cabeza blanca */}
    <circle cx="50" cy="46" r="26" fill="#ffffff" stroke="#091838" strokeWidth="5.5" />
    {/* Mancha negra grande en la cabeza */}
    <path d="M 38 26 C 34 36 44 42 46 36 C 48 30 42 22 38 26 Z" fill="#091838" />
    {/* Ojos curiosos */}
    <circle cx="38" cy="42" r="3" fill="#091838" />
    <circle cx="62" cy="42" r="3" fill="#091838" />
    {/* Morro rosa ovalado con orificios */}
    <ellipse cx="50" cy="58" rx="16" ry="11" fill="#fbcfe8" stroke="#091838" strokeWidth="3.5" />
    <circle cx="45" cy="58" r="2" fill="#091838" />
    <circle cx="55" cy="58" r="2" fill="#091838" />
  </svg>
);

// Vela
export const VelaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Pabilo negro */}
    <line x1="50" y1="44" x2="50" y2="36" stroke="#091838" strokeWidth="3" strokeLinecap="round" />
    {/* Llama amarilla y naranja */}
    <path d="M 50 14 C 58 24 62 30 50 38 C 38 30 42 24 50 14 Z" fill="#facc15" stroke="#091838" strokeWidth="3" />
    <path d="M 50 24 C 54 28 56 32 50 36 C 44 32 46 28 50 24 Z" fill="#ea580c" />
    {/* Cuerpo de la vela cilíndrico rojo */}
    <rect x="36" y="44" width="28" height="42" rx="4" fill="#ef4444" stroke="#091838" strokeWidth="5" />
    {/* Gotita de cera derretida */}
    <path d="M 40 44 L 40 54 Q 43 56 46 54 L 46 44" fill="#f87171" stroke="#091838" strokeWidth="2" />
    {/* Base platillo dorado */}
    <ellipse cx="50" cy="86" rx="28" ry="6" fill="#facc15" stroke="#091838" strokeWidth="4" />
  </svg>
);

// Volcán
export const VolcanIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Humo y ceniza */}
    <circle cx="44" cy="18" r="6" fill="#cbd5e1" stroke="#091838" strokeWidth="2" />
    <circle cx="56" cy="14" r="8" fill="#94a3b8" stroke="#091838" strokeWidth="2.5" />
    {/* Lava saliendo */}
    <polygon points="50,22 46,38 54,38" fill="#facc15" stroke="#091838" strokeWidth="2" />
    {/* Montaña volcán triangular marrón */}
    <polygon points="50,34 16,84 84,84" fill="#78350f" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Ríos de lava roja bajando */}
    <path d="M 44 34 L 38 56 L 44 72" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M 56 34 L 62 54 L 56 68" stroke="#f97316" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

// ==========================================
// LETRA W
// ==========================================
// Wafle
export const WafleIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Wafle redondo dorado */}
    <circle cx="50" cy="50" r="36" fill="#facc15" stroke="#091838" strokeWidth="5.5" />
    {/* Rejilla de cuadrados tostados */}
    <line x1="32" y1="24" x2="32" y2="76" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="16" x2="50" y2="84" stroke="#b45309" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="68" y1="24" x2="68" y2="76" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
    <line x1="24" y1="32" x2="76" y2="32" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
    <line x1="16" y1="50" x2="84" y2="50" stroke="#b45309" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="24" y1="68" x2="76" y2="68" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
    {/* Cuadrito de mantequilla derritiéndose en el centro */}
    <rect x="42" y="42" width="16" height="16" rx="3" fill="#fef08a" stroke="#091838" strokeWidth="2.5" transform="rotate(15 50 50)" />
  </svg>
);

// Waterpolo (Balón acuático con gorro)
export const WaterpoloIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Pelota de waterpolo amarilla con textura */}
    <circle cx="50" cy="46" r="28" fill="#facc15" stroke="#091838" strokeWidth="5.5" />
    <path d="M 50 18 C 36 28 36 64 50 74" stroke="#091838" strokeWidth="3.5" fill="none" />
    <path d="M 50 18 C 64 28 64 64 50 74" stroke="#091838" strokeWidth="3.5" fill="none" />
    <line x1="22" y1="46" x2="78" y2="46" stroke="#091838" strokeWidth="3.5" />
    {/* Olas de piscina azul */}
    <path d="M 12 78 Q 24 72 36 78 Q 48 84 60 78 Q 72 72 88 78" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" fill="none" />
  </svg>
);

// Web (Araña en su telaraña)
export const WebIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Líneas radiales de la telaraña (web) */}
    <line x1="18" y1="18" x2="82" y2="82" stroke="#94a3b8" strokeWidth="3" />
    <line x1="82" y1="18" x2="18" y2="82" stroke="#94a3b8" strokeWidth="3" />
    <line x1="50" y1="12" x2="50" y2="88" stroke="#94a3b8" strokeWidth="3" />
    <line x1="12" y1="50" x2="88" y2="50" stroke="#94a3b8" strokeWidth="3" />
    {/* Círculos concéntricos de la red */}
    <circle cx="50" cy="50" r="18" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="50" r="30" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
    {/* Arañita simpática en el centro */}
    <circle cx="50" cy="50" r="8" fill="#091838" />
    <circle cx="48" cy="48" r="1.5" fill="#ffffff" />
    <circle cx="52" cy="48" r="1.5" fill="#ffffff" />
  </svg>
);

// ==========================================
// LETRA X
// ==========================================
// Xilófono
export const XilofonoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* 4 Placas afinadas de colores alegres */}
    <rect x="20" y="24" width="11" height="52" rx="3" fill="#ef4444" stroke="#091838" strokeWidth="3.5" />
    <rect x="36" y="28" width="11" height="48" rx="3" fill="#facc15" stroke="#091838" strokeWidth="3.5" />
    <rect x="52" y="32" width="11" height="44" rx="3" fill="#22c55e" stroke="#091838" strokeWidth="3.5" />
    <rect x="68" y="36" width="11" height="40" rx="3" fill="#38bdf8" stroke="#091838" strokeWidth="3.5" />
    {/* Tornillos */}
    <circle cx="25.5" cy="30" r="1.5" fill="#091838" />
    <circle cx="41.5" cy="34" r="1.5" fill="#091838" />
    <circle cx="57.5" cy="38" r="1.5" fill="#091838" />
    <circle cx="73.5" cy="42" r="1.5" fill="#091838" />
    {/* Baqueta */}
    <line x1="28" y1="78" x2="68" y2="18" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
    <circle cx="68" cy="18" r="5" fill="#f472b6" stroke="#091838" strokeWidth="2" />
  </svg>
);

// Rayos X
export const RayosXIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Placa radiográfica azul oscura */}
    <rect x="20" y="16" width="60" height="68" rx="8" fill="#0f172a" stroke="#091838" strokeWidth="5.5" />
    {/* Huesos de la mano iluminados en celeste/blanco */}
    <ellipse cx="50" cy="62" rx="14" ry="10" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
    <line x1="38" y1="56" x2="32" y2="34" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="44" y1="54" x2="42" y2="28" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="52" y1="54" x2="52" y2="26" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
    <line x1="60" y1="54" x2="62" y2="32" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

// Taxi (palabra que contiene X destacada)
export const TaxiIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Letrero TAXI superior */}
    <rect x="42" y="24" width="16" height="8" rx="2" fill="#ffffff" stroke="#091838" strokeWidth="2" />
    {/* Techo y cabina */}
    <polygon points="32,46 40,32 60,32 68,46" fill="#fde047" stroke="#091838" strokeWidth="4.5" />
    {/* Ventana */}
    <polygon points="36,44 42,35 58,35 64,44" fill="#38bdf8" stroke="#091838" strokeWidth="2" />
    {/* Carrocería amarilla */}
    <rect x="18" y="46" width="64" height="24" rx="6" fill="#facc15" stroke="#091838" strokeWidth="5" />
    {/* Cuadriculado blanco y negro de taxi */}
    <rect x="36" y="52" width="6" height="6" fill="#091838" />
    <rect x="42" y="52" width="6" height="6" fill="#ffffff" />
    <rect x="48" y="52" width="6" height="6" fill="#091838" />
    <rect x="54" y="52" width="6" height="6" fill="#ffffff" />
    {/* Ruedas */}
    <circle cx="32" cy="72" r="7" fill="#091838" />
    <circle cx="32" cy="72" r="3" fill="#cbd5e1" />
    <circle cx="68" cy="72" r="7" fill="#091838" />
    <circle cx="68" cy="72" r="3" fill="#cbd5e1" />
  </svg>
);

// ==========================================
// LETRA Y
// ==========================================
// Yoyo
export const YoyoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Cuerda enrollada */}
    <path d="M 50 16 Q 44 26 50 36 Q 56 46 50 56" stroke="#e2e8f0" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    {/* Mitad izquierda y derecha del yoyo */}
    <ellipse cx="44" cy="62" rx="14" ry="24" fill="#38bdf8" stroke="#091838" strokeWidth="4.5" />
    <ellipse cx="56" cy="62" rx="14" ry="24" fill="#0284c7" stroke="#091838" strokeWidth="4.5" />
    {/* Eje central con estrella */}
    <ellipse cx="50" cy="62" rx="6" ry="16" fill="#facc15" stroke="#091838" strokeWidth="2.5" />
    <polygon points="50,56 52,60 56,62 52,64 50,68 48,64 44,62 48,60" fill="#ffffff" />
  </svg>
);

// Yate
export const YateIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Casco blanco elegante de yate */}
    <path d="M 16 64 L 84 64 L 72 82 L 28 82 Z" fill="#ffffff" stroke="#091838" strokeWidth="5" strokeLinejoin="round" />
    <path d="M 22 72 L 78 72 L 75 76 L 25 76 Z" fill="#38bdf8" />
    {/* Cabina moderna con ventanas tintadas */}
    <path d="M 32 64 L 40 44 L 68 44 L 74 64 Z" fill="#e0f2fe" stroke="#091838" strokeWidth="4" strokeLinejoin="round" />
    <polygon points="42,48 46,58 64,58 64,48" fill="#0284c7" />
    {/* Olas azules */}
    <path d="M 10 88 Q 25 82 40 88 Q 55 94 70 88 Q 85 82 92 88" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

// Yogur (vasito con fresa)
export const YogurIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Tapa y cucharita */}
    <line x1="60" y1="20" x2="48" y2="44" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
    {/* Vaso de yogur */}
    <polygon points="26,38 74,38 66,82 34,82" fill="#ffffff" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Borde superior */}
    <rect x="22" y="34" width="56" height="7" rx="3.5" fill="#f472b6" stroke="#091838" strokeWidth="3.5" />
    {/* Etiqueta con fresa */}
    <rect x="33" y="52" width="34" height="20" rx="3" fill="#fbcfe8" stroke="#091838" strokeWidth="2" />
    <circle cx="50" cy="62" r="5" fill="#ef4444" />
    <polygon points="50,56 47,53 53,53" fill="#22c55e" />
  </svg>
);

// ==========================================
// LETRA Z
// ==========================================
// Zorro
export const ZorroIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Orejas puntiagudas con blanco y negro */}
    <polygon points="26,20 20,44 42,38" fill="#ea580c" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    <polygon points="26,24 23,40 36,36" fill="#ffffff" />
    <polygon points="74,20 58,38 80,44" fill="#ea580c" stroke="#091838" strokeWidth="4.5" strokeLinejoin="round" />
    <polygon points="74,24 64,36 77,40" fill="#ffffff" />
    {/* Cabeza triangular naranja zorro */}
    <polygon points="50,74 18,44 82,44" fill="#f97316" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Mejillas blancas */}
    <polygon points="50,74 22,46 36,54" fill="#ffffff" />
    <polygon points="50,74 78,46 64,54" fill="#ffffff" />
    {/* Nariz negra y ojos rasgados */}
    <circle cx="50" cy="72" r="3.5" fill="#091838" />
    <ellipse cx="38" cy="46" rx="2.5" ry="3.5" fill="#091838" transform="rotate(-15 38 46)" />
    <ellipse cx="62" cy="46" rx="2.5" ry="3.5" fill="#091838" transform="rotate(15 62 46)" />
  </svg>
);

// Zapato
export const ZapatoIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Zapato deportivo / tenis rojo */}
    <path d="M 22 56 L 36 34 L 54 34 L 58 48 L 76 52 C 84 54 86 64 82 72 L 20 72 Z" fill="#ef4444" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Suela gruesa blanca */}
    <rect x="18" y="70" width="68" height="12" rx="4" fill="#ffffff" stroke="#091838" strokeWidth="4.5" />
    {/* Cordones blancos */}
    <line x1="42" y1="40" x2="52" y2="40" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    <line x1="44" y1="46" x2="54" y2="46" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
    {/* Puntera blanca */}
    <path d="M 72 52 C 78 54 82 62 82 70 L 72 70 Z" fill="#ffffff" stroke="#091838" strokeWidth="2.5" />
  </svg>
);

// Zanahoria
export const ZanahoriaIcon: React.FC<IllustrationProps> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Hojas verdes superiores */}
    <polygon points="50,14 42,32 50,30 58,32" fill="#22c55e" stroke="#091838" strokeWidth="3" />
    <polygon points="36,18 40,32 46,30" fill="#16a34a" stroke="#091838" strokeWidth="2.5" />
    <polygon points="64,18 54,30 60,32" fill="#16a34a" stroke="#091838" strokeWidth="2.5" />
    {/* Cuerpo cónico naranja de la zanahoria */}
    <polygon points="34,32 66,32 50,86" fill="#f97316" stroke="#091838" strokeWidth="5.5" strokeLinejoin="round" />
    {/* Ranuras horizontales */}
    <line x1="40" y1="44" x2="54" y2="44" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
    <line x1="46" y1="56" x2="58" y2="56" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
    <line x1="46" y1="68" x2="54" y2="68" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);




