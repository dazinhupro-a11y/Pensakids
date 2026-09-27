import React from 'react';

interface PensaKidsLogoProps {
  className?: string;
}

/**
 * PensaKidsLogo - Renderizado SVG vectorial de ultra-alta fidelidad (HD)
 * Proporciones idénticas a la imagen original enviada:
 * - Tubo de ensayo con cápsulas de metal y reflejo cristalino
 * - Cerebro sonriente bipartito (izq: rosa #ff2a7a, der: celeste #00b4d8)
 * - Letras 3D infladas de 'PENSA' en blanco brillante con reborde azul profundo (#091838)
 * - Letras 3D 'KIDS': K (naranja mandarina), I (rosa chicle), D (verde lima), S (azul/celeste)
 * - Dos cápsulas (verde y naranja) en el tubo derecho
 * - Gotas de energía amarillas (#ffda08) con reborde grueso
 */
export const PensaKidsLogo: React.FC<PensaKidsLogoProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 880 340"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 4px 6px rgba(9, 24, 56, 0.15))' }}
    >
      <defs>
        {/* Sombra oscura de contorno 3D */}
        <filter id="navyDrop" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="0" floodColor="#091838" />
        </filter>

        {/* Gradiente líquido del tubo */}
        <linearGradient id="tubeGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#bae6fd" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Gradiente metal de las tapas */}
        <linearGradient id="metalRim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="25%" stopColor="#f1f5f9" />
          <stop offset="50%" stopColor="#cbd5e1" />
          <stop offset="75%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Cerebro Rosa */}
        <linearGradient id="gradPinkBrain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff4088" />
          <stop offset="60%" stopColor="#f41d72" />
          <stop offset="100%" stopColor="#d80a5b" />
        </linearGradient>

        {/* Cerebro Celeste */}
        <linearGradient id="gradCyanBrain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38c9f8" />
          <stop offset="60%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        {/* Cápsula Verde */}
        <linearGradient id="gradPillGreen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="35%" stopColor="#4ade80" />
          <stop offset="80%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>

        {/* Cápsula Naranja */}
        <linearGradient id="gradPillOrange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="35%" stopColor="#fb923c" />
          <stop offset="80%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>

        {/* Letra K Naranja */}
        <linearGradient id="gradK" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>

        {/* Letra I Rosa */}
        <linearGradient id="gradI" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="70%" stopColor="#db2777" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>

        {/* Letra D Verde Lima */}
        <linearGradient id="gradD" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bef264" />
          <stop offset="50%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#4d7c0f" />
        </linearGradient>

        {/* Letra S Azul Celeste */}
        <linearGradient id="gradS" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      {/* ========================================================== */}
      {/* 1. EL TUBO DE ENSAYO CIENTÍFICO HORIZONTAL                */}
      {/* ========================================================== */}
      <g>
        {/* Contorno exterior del tubo */}
        <rect
          x="75"
          y="108"
          width="730"
          height="124"
          rx="62"
          fill="#091838"
        />

        {/* Interior del tubo de vidrio */}
        <rect
          x="87"
          y="120"
          width="706"
          height="100"
          rx="50"
          fill="url(#tubeGlass)"
          stroke="#ffffff"
          strokeWidth="3.5"
        />

        {/* Franja de líquido azul más oscuro en el tercio inferior */}
        <path
          d="M 90 170 Q 440 170 790 170 L 790 172 C 790 198 768 219 742 219 L 138 219 C 112 219 90 198 90 172 Z"
          fill="#0284c7"
          opacity="0.25"
        />

        {/* Reflejo horizontal de vidrio blanco nítido */}
        <path
          d="M 120 126 L 760 126 C 772 126 778 132 770 138 L 110 138 C 102 132 108 126 120 126 Z"
          fill="#ffffff"
          opacity="0.8"
        />

        {/* Tapa metálica izquierda */}
        <g>
          <ellipse cx="90" cy="170" rx="26" ry="62" fill="#091838" />
          <ellipse cx="90" cy="170" rx="20" ry="56" fill="url(#metalRim)" stroke="#091838" strokeWidth="4.5" />
          <ellipse cx="96" cy="170" rx="9" ry="46" fill="#334155" opacity="0.45" />
          {/* Anillo de brillo */}
          <path d="M 82 130 C 88 125 94 125 96 130" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>

        {/* Tapa metálica derecha */}
        <g>
          <ellipse cx="790" cy="170" rx="26" ry="62" fill="#091838" />
          <ellipse cx="790" cy="170" rx="20" ry="56" fill="url(#metalRim)" stroke="#091838" strokeWidth="4.5" />
          <ellipse cx="784" cy="170" rx="9" ry="46" fill="#f8fafc" opacity="0.75" />
          <path d="M 782 130 C 788 125 794 125 796 130" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>
      </g>

      {/* ========================================================== */}
      {/* 2. CEREBRO MASCOTA DENTRO DEL TUBO (Lado Izquierdo)        */}
      {/* ========================================================== */}
      <g transform="translate(100, 116) scale(0.92)">
        {/* Contorno exterior silueta marina */}
        <path
          d="M 58 12 C 46 12 38 20 36 28 C 26 27 16 35 16 46 C 16 55 23 62 19 72 C 14 82 22 93 34 96 C 39 108 52 110 60 110 L 60 12 Z"
          fill="#091838"
        />
        <path
          d="M 60 12 C 72 12 80 20 82 28 C 92 27 102 35 102 46 C 102 55 95 62 99 72 C 104 82 96 93 84 96 C 79 108 66 110 60 110 L 60 12 Z"
          fill="#091838"
        />

        {/* Lado izquierdo Rosa */}
        <path
          d="M 58 16 C 48 16 42 23 41 29 C 32 29 23 37 23 46 C 23 54 29 60 25 69 C 21 77 28 87 38 89 C 42 99 53 102 58 102 L 58 16 Z"
          fill="url(#gradPinkBrain)"
          stroke="#091838"
          strokeWidth="4"
        />
        {/* Ojo y sonrisa rosa */}
        <circle cx="43" cy="52" r="5" fill="#091838" />
        <circle cx="45" cy="50" r="1.8" fill="#ffffff" />
        <path d="M 38 65 Q 45 74 53 67" stroke="#091838" strokeWidth="4" strokeLinecap="round" fill="none" />
        <ellipse cx="34" cy="30" rx="5" ry="2.5" fill="#ffffff" opacity="0.85" transform="rotate(-25 34 30)" />

        {/* Lado derecho Celeste */}
        <path
          d="M 60 16 C 70 16 76 23 77 29 C 86 29 95 37 95 46 C 95 54 89 60 93 69 C 97 77 90 87 80 89 C 76 99 65 102 60 102 L 60 16 Z"
          fill="url(#gradCyanBrain)"
          stroke="#091838"
          strokeWidth="4"
        />
        {/* Ojo y sonrisa celeste */}
        <circle cx="75" cy="52" r="5" fill="#091838" />
        <circle cx="77" cy="50" r="1.8" fill="#ffffff" />
        <path d="M 65 67 Q 73 74 80 65" stroke="#091838" strokeWidth="4" strokeLinecap="round" fill="none" />
        <ellipse cx="84" cy="30" rx="5" ry="2.5" fill="#ffffff" opacity="0.85" transform="rotate(25 84 30)" />
      </g>

      {/* ========================================================== */}
      {/* 3. CÁPSULAS VERDE Y NARANJA DENTRO DEL TUBO (Lado Derecho) */}
      {/* ========================================================== */}
      {/* Cápsula Verde */}
      <g>
        <rect
          x="634"
          y="134"
          width="44"
          height="74"
          rx="22"
          fill="#091838"
        />
        <rect
          x="639"
          y="139"
          width="34"
          height="64"
          rx="17"
          fill="url(#gradPillGreen)"
        />
        {/* Brillo longitudinal */}
        <line x1="648" y1="147" x2="648" y2="192" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
      </g>

      {/* Cápsula Naranja */}
      <g>
        <rect
          x="706"
          y="134"
          width="44"
          height="74"
          rx="22"
          fill="#091838"
        />
        <rect
          x="711"
          y="139"
          width="34"
          height="64"
          rx="17"
          fill="url(#gradPillOrange)"
        />
        <line x1="720" y1="147" x2="720" y2="192" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
      </g>

      {/* ========================================================== */}
      {/* 4. CEREBRO MASCOTA CENTRAL SUPERIOR (Con gotitas amarillas)*/}
      {/* ========================================================== */}
      {/* Gotitas amarillas superiores izquierda */}
      <path d="M 334 100 C 322 92 325 76 340 85 C 352 94 346 109 334 100 Z" fill="#ffda08" stroke="#091838" strokeWidth="5" />
      <path d="M 346 62 C 335 53 342 42 355 48 C 367 56 357 70 346 62 Z" fill="#ffda08" stroke="#091838" strokeWidth="5" />

      {/* Gotitas amarillas superiores derecha */}
      <path d="M 546 100 C 558 92 555 76 540 85 C 528 94 534 109 546 100 Z" fill="#ffda08" stroke="#091838" strokeWidth="5" />
      <path d="M 534 62 C 545 53 538 42 525 48 C 513 56 523 70 534 62 Z" fill="#ffda08" stroke="#091838" strokeWidth="5" />

      {/* Cerebro grande central superior */}
      <g transform="translate(365, 20) scale(1.25)">
        {/* Contorno marino */}
        <path
          d="M 58 10 C 42 10 35 21 33 27 C 22 26 11 36 11 49 C 11 60 20 68 15 79 C 9 90 18 103 33 105 C 37 117 52 119 60 119 L 60 10 Z"
          fill="#091838"
        />
        <path
          d="M 60 10 C 76 10 83 21 85 27 C 96 26 107 36 107 49 C 107 60 98 68 103 79 C 109 90 100 103 85 105 C 81 117 66 119 60 119 L 60 10 Z"
          fill="#091838"
        />

        {/* Rosa */}
        <path
          d="M 58 16 C 46 16 39 25 38 31 C 28 30 18 39 18 50 C 18 58 26 65 21 75 C 16 84 23 95 36 97 C 40 108 52 110 58 110 L 58 16 Z"
          fill="url(#gradPinkBrain)"
          stroke="#091838"
          strokeWidth="4.5"
        />
        <circle cx="43" cy="56" r="5.5" fill="#091838" />
        <circle cx="45" cy="54" r="2" fill="#ffffff" />
        <path d="M 38 72 Q 46 81 53 74" stroke="#091838" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <ellipse cx="30" cy="34" rx="6" ry="3" fill="#ffffff" opacity="0.85" transform="rotate(-25 30 34)" />

        {/* Celeste */}
        <path
          d="M 60 16 C 72 16 79 25 80 31 C 90 30 100 39 100 50 C 100 58 92 65 97 75 C 102 84 95 95 82 97 C 78 108 66 110 60 110 L 60 16 Z"
          fill="url(#gradCyanBrain)"
          stroke="#091838"
          strokeWidth="4.5"
        />
        <circle cx="75" cy="56" r="5.5" fill="#091838" />
        <circle cx="77" cy="54" r="2" fill="#ffffff" />
        <path d="M 65 74 Q 72 81 80 72" stroke="#091838" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <ellipse cx="88" cy="34" rx="6" ry="3" fill="#ffffff" opacity="0.85" transform="rotate(25 88 34)" />
      </g>

      {/* ========================================================== */}
      {/* 5. FONDO / SILUETA MARINA PARA "PENSA KIDS"               */}
      {/* ========================================================== */}
      <path
        d="M 280 135 C 255 135 240 160 248 185 C 230 198 238 230 258 250 C 278 270 320 276 355 270 C 385 290 495 290 525 270 C 560 276 602 270 622 250 C 642 230 650 198 632 185 C 640 160 625 135 600 135 C 570 110 540 118 520 125 C 490 105 390 105 360 125 C 340 118 310 110 280 135 Z"
        fill="#091838"
      />

      {/* ========================================================== */}
      {/* 6. TEXTO "PENSA" EN 3D BLANCO GORDITO                     */}
      {/* ========================================================== */}
      <g>
        {/* Letra P */}
        <path
          d="M 285 204 L 285 142 C 285 134 293 126 304 126 L 318 126 C 336 126 348 136 348 152 C 348 168 336 178 318 178 L 305 178 L 305 204 C 305 208 300 210 295 210 C 290 210 285 208 285 204 Z M 305 160 L 317 160 C 324 160 328 157 328 152 C 328 147 324 144 317 144 L 305 144 Z"
          fill="#ffffff"
          stroke="#091838"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        {/* Letra E */}
        <path
          d="M 358 204 L 358 142 C 358 134 366 126 376 126 L 406 126 C 412 126 416 130 416 135 C 416 140 412 144 406 144 L 378 144 L 378 160 L 402 160 C 408 160 412 164 412 169 C 412 174 408 178 402 178 L 378 178 L 378 194 L 408 194 C 414 194 418 198 418 203 C 418 208 414 212 408 212 L 376 212 C 366 212 358 208 358 204 Z"
          fill="#ffffff"
          stroke="#091838"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        {/* Letra N */}
        <path
          d="M 428 204 L 428 142 C 428 134 436 126 446 126 C 452 126 456 129 460 135 L 484 176 L 484 142 C 484 134 490 128 497 128 C 504 128 510 134 510 142 L 510 204 C 510 212 502 218 494 218 C 488 218 484 215 480 209 L 454 165 L 454 204 C 454 212 448 216 441 216 C 434 216 428 212 428 204 Z"
          fill="#ffffff"
          stroke="#091838"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        {/* Letra S */}
        <path
          d="M 522 198 C 522 206 532 214 547 214 C 564 214 576 206 576 195 C 576 182 566 176 548 172 C 536 169 532 166 532 160 C 532 154 538 148 548 148 C 558 148 565 152 566 158 C 567 163 571 166 576 166 C 582 166 586 161 585 155 C 582 143 568 132 548 132 C 531 132 518 142 518 158 C 518 173 530 180 546 183 C 560 186 564 190 564 196 C 564 202 556 206 547 206 C 536 206 529 201 528 194 C 527 189 523 186 518 186 C 513 186 509 191 510 196 Z"
          fill="#ffffff"
          stroke="#091838"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        {/* Letra A */}
        <path
          d="M 606 208 L 620 144 C 622 134 630 126 640 126 C 650 126 658 134 660 144 L 674 208 C 676 215 670 220 663 220 C 657 220 652 216 650 210 L 647 194 L 633 194 L 630 210 C 628 216 623 220 617 220 C 610 220 604 215 606 208 Z M 636 178 L 644 178 L 640 152 Z"
          fill="#ffffff"
          stroke="#091838"
          strokeWidth="10"
          strokeLinejoin="round"
        />
      </g>

      {/* ========================================================== */}
      {/* 7. TEXTO "KIDS" EN 4 COLORES DE CARAMELO (K, I, D, S)      */}
      {/* ========================================================== */}
      {/* Letra K (Naranja) */}
      <g>
        <path
          d="M 320 286 L 320 226 C 320 220 326 214 334 214 C 342 214 348 220 348 226 L 348 247 L 366 226 C 372 218 382 218 388 224 C 394 230 393 240 386 247 L 368 263 L 392 284 C 398 290 396 300 389 306 C 383 311 374 309 369 303 L 348 279 L 348 286 C 348 293 342 298 334 298 C 326 298 320 293 320 286 Z"
          fill="url(#gradK)"
          stroke="#091838"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        <ellipse cx="332" cy="236" rx="4" ry="9" fill="#ffffff" opacity="0.8" transform="rotate(-15 332 236)" />
      </g>

      {/* Letra I (Rosa) */}
      <g>
        <circle cx="414" cy="218" r="10" fill="url(#gradI)" stroke="#091838" strokeWidth="10" />
        <ellipse cx="412" cy="215" rx="3.5" ry="2.5" fill="#ffffff" opacity="0.9" />
        <path
          d="M 404 286 L 404 246 C 404 239 410 234 417 234 C 424 234 430 239 430 246 L 430 286 C 430 293 424 298 417 298 C 410 298 404 293 404 286 Z"
          fill="url(#gradI)"
          stroke="#091838"
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <ellipse cx="414" cy="254" rx="2.5" ry="8" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Letra D (Verde Lima) */}
      <g>
        <path
          d="M 456 286 L 456 226 C 456 218 464 212 476 212 L 494 212 C 520 212 536 228 536 256 C 536 284 520 300 494 300 L 476 300 C 464 300 456 294 456 286 Z M 482 278 L 492 278 C 506 278 514 268 514 256 C 514 244 506 234 492 234 L 482 234 Z"
          fill="url(#gradD)"
          stroke="#091838"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        <path d="M 474 228 Q 502 226 506 242" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85" />
      </g>

      {/* Letra S (Azul / Celeste) */}
      <g>
        <path
          d="M 556 284 C 556 294 568 302 584 302 C 604 302 616 292 616 278 C 616 262 602 254 584 250 C 572 247 568 243 568 238 C 568 232 574 226 584 226 C 596 226 602 231 604 238 C 605 244 610 248 616 248 C 622 248 626 242 625 235 C 621 221 606 210 584 210 C 564 210 550 222 550 240 C 550 258 564 266 582 270 C 596 273 602 278 602 284 C 602 290 594 294 584 294 C 572 294 564 288 563 280 C 562 274 557 270 551 270 C 545 270 541 276 542 282 Z"
          fill="url(#gradS)"
          stroke="#091838"
          strokeWidth="12"
          strokeLinejoin="round"
        />
        <ellipse cx="578" cy="226" rx="5" ry="3" fill="#ffffff" opacity="0.85" transform="rotate(-20 578 226)" />
        <ellipse cx="590" cy="286" rx="5" ry="3" fill="#ffffff" opacity="0.85" transform="rotate(-20 590 286)" />
      </g>

      {/* Gotitas amarillas inferiores */}
      <path d="M 280 265 C 270 274 260 268 266 256 C 272 246 286 252 280 265 Z" fill="#ffda08" stroke="#091838" strokeWidth="4.5" />
      <path d="M 292 290 C 282 298 274 290 282 278 C 290 268 300 278 292 290 Z" fill="#ffda08" stroke="#091838" strokeWidth="4.5" />

      <path d="M 640 265 C 650 274 660 268 654 256 C 648 246 634 252 640 265 Z" fill="#ffda08" stroke="#091838" strokeWidth="4.5" />
      <path d="M 628 290 C 638 298 646 290 638 278 C 630 268 620 278 628 290 Z" fill="#ffda08" stroke="#091838" strokeWidth="4.5" />
    </svg>
  );
};
