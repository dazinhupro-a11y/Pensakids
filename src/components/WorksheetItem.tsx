import React from 'react';
import { Check } from 'lucide-react';
import { LETTERS_CONFIG, LetterType } from '../data/lettersData.tsx';

interface WorksheetItemProps {
  letter: LetterType;
  pageNumber?: number;
  selectedLetters?: number[];
  inputs?: Record<string, string>;
  checkedBoxes?: Record<number, boolean>;
  onToggleLetter?: (id: number) => void;
  onInputChange?: (key: string, val: string) => void;
  onToggleCheckbox?: (id: number) => void;
  isCleanForPrint?: boolean;
  domId?: string;
}

export const WorksheetItem: React.FC<WorksheetItemProps> = ({
  letter,
  pageNumber,
  selectedLetters = [],
  inputs = {},
  checkedBoxes = {},
  onToggleLetter,
  onInputChange,
  onToggleCheckbox,
  isCleanForPrint = false,
  domId
}) => {
  const config = LETTERS_CONFIG[letter];
  if (!config) return null;

  return (
    <div
      id={domId}
      className="worksheet-sheet w-full max-w-[210mm] bg-white rounded-3xl print:rounded-none shadow-2xl print:shadow-none p-3.5 sm:p-5 border-4 border-slate-900 print:border-none relative flex flex-col justify-between overflow-hidden"
      style={{
        boxSizing: 'border-box'
      }}
    >
      {/* ================= CABECERA ESCOLAR CON EL ÍCONO EXACTO ================= */}
      <header className="relative mb-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
          {/* ÍCONO ORIGINAL ENVIADO POR EL USUARIO (PENSA KIDS) */}
          <div className="flex items-center gap-2.5">
            <div className="w-56 sm:w-68 flex-shrink-0">
              <img
                src="/pensa-kids-logo.png"
                alt="PENSA KIDS"
                className="w-full h-auto object-contain filter contrast-105"
              />
            </div>

            {/* Título de la Ficha integrado armónicamente */}
            <div className="flex flex-col pl-1.5 border-l-2 border-slate-300">
              <div className="flex items-center gap-1">
                <span className="font-bubble text-xl sm:text-2xl text-slate-900 tracking-wide">
                  LETRA
                </span>
                <span
                  className="font-bubble text-3xl sm:text-4xl text-rose-500 tracking-wide drop-shadow-[0_2px_0_#091838] ml-0.5"
                >
                  {config.letter}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-black text-slate-800 uppercase tracking-wider bg-amber-200/90 px-2 py-0.5 rounded-full inline-block w-fit border border-amber-400 -mt-1 shadow-xs">
                Lectoescritura
              </span>
            </div>
          </div>

          {/* Campos de datos del niño (Nombre, Fecha, Grado) */}
          <div className="w-full sm:w-auto flex-1 max-w-[220px] sm:max-w-xs flex flex-col gap-1 text-[10px] sm:text-[11px] font-bold text-slate-800">
            <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-xl border-2 border-slate-300">
              <span className="text-slate-500 uppercase tracking-wider text-[9px]">Nombre:</span>
              <div className="flex-1 border-b-2 border-dotted border-slate-400 h-3"></div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-lg border-2 border-slate-300">
                <span className="text-slate-500 uppercase tracking-wider text-[9px]">Fecha:</span>
                <div className="flex-1 border-b-2 border-dotted border-slate-400 h-3"></div>
              </div>
              <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-lg border-2 border-slate-300">
                <span className="text-slate-500 uppercase tracking-wider text-[9px]">Grado:</span>
                <div className="flex-1 border-b-2 border-dotted border-slate-400 h-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor de arcoíris vibrante */}
        <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-amber-400 via-lime-400 via-sky-400 to-indigo-500 rounded-full mt-2"></div>
      </header>

      {/* ================= CONTENEDOR DE LAS 5 ACTIVIDADES ================= */}
      <div className="flex flex-col gap-2">
        {/* ================= ACTIVIDAD 1: APRESENTAÇÃO ================= */}
        <section className="bg-gradient-to-r from-pink-50 via-amber-50 to-sky-50 rounded-2xl p-2 border-2 border-slate-800 shadow-xs relative">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-pink-500 text-white text-xs font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">
                1
              </span>
              <h2 className="font-bubble text-xs sm:text-sm text-slate-900 tracking-wide">
                Presentación: ¡Conoce la letra {config.letter} mayúscula y la {config.letterLower} minúscula!
              </h2>
            </div>
            <span className="text-[9.5px] font-extrabold text-slate-800 bg-white px-2 py-0.5 rounded-full border-2 border-slate-800">
              {config.name}
            </span>
          </div>

          {/* Tarjetas estilo stickers con brillo y gotas amarillas */}
          <div className="flex items-center justify-center gap-6 sm:gap-14 py-0.5">
            {/* Tarjeta Letra Mayúscula */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute -top-1 -right-2 w-2 h-3 bg-yellow-400 rounded-full rotate-45 border-1.5 border-slate-900"></div>
                <div className="absolute top-2 -left-2 w-2 h-2.5 bg-yellow-400 rounded-full -rotate-45 border-1.5 border-slate-900"></div>

                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-b ${config.gradientHeader} border-3 border-slate-900 shadow-[0_3px_0_#0f172a] flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute top-1 left-2 w-7 h-3.5 bg-white/70 rounded-full rotate-[-25deg]"></div>
                  <span className="font-bubble text-4xl sm:text-5xl text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]">
                    {config.letter}
                  </span>
                </div>
              </div>
              <span className="font-bubble text-[11px] text-rose-600 mt-1 uppercase tracking-wider">
                Mayúscula
              </span>
            </div>

            {/* Conector alegre */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-bubble text-xl text-amber-500 select-none">★</span>
              <span className="text-[9px] font-black text-slate-400 uppercase">y</span>
            </div>

            {/* Tarjeta Letra Minúscula */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute -top-1 -left-2 w-2 h-3 bg-yellow-400 rounded-full -rotate-45 border-1.5 border-slate-900"></div>
                <div className="absolute top-2 -right-2 w-2 h-2.5 bg-yellow-400 rounded-full rotate-45 border-1.5 border-slate-900"></div>

                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-b from-sky-400 via-cyan-500 to-blue-600 border-3 border-slate-900 shadow-[0_3px_0_#0f172a] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-1 left-2 w-7 h-3.5 bg-white/70 rounded-full rotate-[-25deg]"></div>
                  <span className="font-bubble text-4xl sm:text-5xl text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]">
                    {config.letterLower}
                  </span>
                </div>
              </div>
              <span className="font-bubble text-[11px] text-cyan-700 mt-1 uppercase tracking-wider">
                Minúscula
              </span>
            </div>
          </div>
        </section>

        {/* ================= ACTIVIDAD 2: TRAÇADO CALIGRÁFICO ================= */}
        <section className="bg-white rounded-2xl p-2 border-2 border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-sky-500 text-white text-xs font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">
                2
              </span>
              <h2 className="font-bubble text-xs sm:text-sm text-slate-900 tracking-wide">
                Trazo: Repasa las líneas punteadas con tu lápiz ({config.letter} y {config.letterLower})
              </h2>
            </div>
            <span className="text-[9.5px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full border border-sky-300">
              Pauta caligráfica
            </span>
          </div>

          <div className="grid grid-cols-12 gap-2 items-center">
            {/* Tarjeta de palabra ejemplo con ilustración */}
            <div className="col-span-12 sm:col-span-3 flex sm:flex-col justify-around items-center bg-amber-50/90 p-1.5 rounded-xl border-2 border-amber-300 text-center">
              <div className="flex items-center justify-center">{config.sampleSvg}</div>
              <div className="mt-1">
                <span className="font-bubble text-xs text-slate-900 uppercase">
                  {config.phoneticSample.word}
                </span>
                <p className="text-[9px] font-bold text-slate-500">
                  {config.phoneticSample.description}
                </p>
              </div>
            </div>

            {/* Renglones de caligrafía escolar de alta nitidez */}
            <div className="col-span-12 sm:col-span-9 flex flex-col gap-1.5">
              {/* Renglón Mayúsculas */}
              <div className="relative bg-sky-50/40 rounded-xl p-1.5 border-2 border-sky-300">
                <div className="absolute inset-x-2 top-2 border-t border-sky-300"></div>
                <div className="absolute inset-x-2 top-1/2 border-t-2 border-dashed border-rose-300"></div>
                <div className="absolute inset-x-2 bottom-2 border-b-2 border-slate-700"></div>

                <div className="relative flex justify-between items-center px-2.5 z-10">
                  <span className="font-bubble text-2xl text-slate-900 pr-1">{config.letter}</span>
                  {[1, 2, 3, 4, 5, 6].map((idx) => (
                    <span
                      key={idx}
                      className="font-bubble text-2xl text-sky-600/70 select-none tracking-widest border-b border-dotted border-sky-400 px-2"
                    >
                      {config.letter}
                    </span>
                  ))}
                </div>
              </div>

              {/* Renglón Minúsculas */}
              <div className="relative bg-sky-50/40 rounded-xl p-1.5 border-2 border-sky-300">
                <div className="absolute inset-x-2 top-2 border-t border-sky-300"></div>
                <div className="absolute inset-x-2 top-1/2 border-t-2 border-dashed border-rose-300"></div>
                <div className="absolute inset-x-2 bottom-2 border-b-2 border-slate-700"></div>

                <div className="relative flex justify-between items-center px-2.5 z-10">
                  <span className="font-bubble text-2xl text-slate-900 pr-1">
                    {config.letterLower}
                  </span>
                  {[1, 2, 3, 4, 5, 6].map((idx) => (
                    <span
                      key={idx}
                      className="font-bubble text-2xl text-pink-500/70 select-none tracking-widest border-b border-dotted border-pink-400 px-2"
                    >
                      {config.letterLower}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ACTIVIDAD 3: DISCRIMINACIÓN VISUAL ================= */}
        <section className="bg-amber-50/70 rounded-2xl p-2 border-2 border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">
                3
              </span>
              <h2 className="font-bubble text-xs sm:text-sm text-slate-900 tracking-wide">
                ¡Atrapa la letra {config.letter}! Encuentra y encierra en un círculo todas las letras{' '}
                {config.letter}
              </h2>
            </div>
            <span className="text-[9.5px] font-bold text-amber-900 bg-amber-200 px-2 py-0.5 rounded-full border border-amber-400">
              Toca o colorea
            </span>
          </div>

          {/* Secuencia de burbujas en estilo gomitas de caramelo */}
          <div className="flex flex-wrap items-center justify-between gap-1.5 px-1 py-0.5">
            {config.bubbleLetters.map((item) => {
              const isSelected = !isCleanForPrint && selectedLetters.includes(item.id);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onToggleLetter && onToggleLetter(item.id)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl font-bubble text-xl sm:text-2xl transition-all flex items-center justify-center relative cursor-pointer ${
                    isSelected
                      ? 'ring-4 ring-rose-500 ring-offset-2 scale-110 shadow-lg rotate-6'
                      : 'hover:scale-105 active:scale-95'
                  } bg-gradient-to-br ${item.bgGrad} ${item.textColor} border-2 border-slate-900 shadow-[0_2px_0_#0f172a]`}
                >
                  {/* Brillo superior blanco estilo gloss */}
                  <div className="absolute top-0.5 left-1 w-3.5 h-1.5 bg-white/70 rounded-full rotate-[-20deg] pointer-events-none"></div>

                  <span>{item.letter}</span>

                  {/* Círculo indicador si fue marcada por el niño */}
                  {isSelected && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-lime-400 border border-slate-900 rounded-full flex items-center justify-center text-[9px] font-black text-slate-900">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ================= ACTIVIDAD 4: COMPLETAR PALAVRAS ================= */}
        <section className="bg-emerald-50/70 rounded-2xl p-2 border-2 border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-xs font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">
                4
              </span>
              <h2 className="font-bubble text-xs sm:text-sm text-slate-900 tracking-wide">
                Completa las palabras: Escribe la letra {config.letter} que falta en cada línea
              </h2>
            </div>
            <span className="text-[9.5px] font-bold text-emerald-900 bg-emerald-200 px-2 py-0.5 rounded-full border border-emerald-400">
              Vocabulario
            </span>
          </div>

          {/* 4 Tarjetas de Palabras con Ilustraciones Reales y Divertidas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {config.fillWords.map((word) => {
              return (
                <div
                  key={word.id}
                  className="bg-white rounded-xl p-1.5 border-2 border-slate-800 shadow-[0_2px_0_#0f172a] flex flex-col items-center"
                >
                  <div className="w-11 h-9 mb-0.5 flex items-center justify-center">
                    {word.svgIcon}
                  </div>

                  <div className="flex items-center justify-center gap-1 font-bubble text-base text-slate-900">
                    {word.parts.map((p, pIdx) => {
                      const inputKey = `${word.id}_${pIdx}`;
                      if (p.isBlank) {
                        return (
                          <div
                            key={pIdx}
                            className="w-6 h-7 border-b-3 border-dashed border-rose-500 bg-rose-50 rounded-md flex items-center justify-center text-rose-600"
                          >
                            {isCleanForPrint ? (
                              <span className="text-transparent">_</span>
                            ) : (
                              <input
                                type="text"
                                maxLength={1}
                                value={inputs[inputKey] || ''}
                                onChange={(e) =>
                                  onInputChange && onInputChange(inputKey, e.target.value)
                                }
                                placeholder="_"
                                className="w-full h-full text-center bg-transparent focus:outline-none uppercase font-bubble text-base"
                              />
                            )}
                          </div>
                        );
                      }
                      return <span key={pIdx}>{p.text}</span>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= ACTIVIDAD 5: QUAL COMEÇA COM A LETRA? ================= */}
        <section className="bg-purple-50/70 rounded-2xl p-2 border-2 border-slate-800 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-xs font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">
                5
              </span>
              <h2 className="font-bubble text-xs sm:text-sm text-slate-900 tracking-wide">
                ¿Cuál comienza con {config.letter}? Observa el dibujo y marca la casilla si empieza con{' '}
                {config.letter}
              </h2>
            </div>
            <span className="text-[9.5px] font-bold text-purple-900 bg-purple-200 px-2 py-0.5 rounded-full border border-purple-400">
              Conciencia fonológica
            </span>
          </div>

          {/* 4 Espacios con Ilustraciones Claras, Lindas e Infantiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {config.soundItems.map((item) => {
              const isChecked = !isCleanForPrint && Boolean(checkedBoxes[item.id]);

              return (
                <div
                  key={item.id}
                  onClick={() => onToggleCheckbox && onToggleCheckbox(item.id)}
                  className={`bg-white rounded-xl border-2 transition-all p-1.5 flex flex-col justify-between items-center min-h-[110px] sm:min-h-[125px] shadow-xs relative cursor-pointer group hover:scale-[1.02] ${
                    isChecked
                      ? 'border-lime-500 ring-2 ring-lime-400/50 bg-lime-50/20'
                      : 'border-slate-800'
                  }`}
                >
                  {/* Nombre en mayúsculas grandes */}
                  <div className="w-full flex items-center justify-between text-[10px] font-black text-slate-600 mb-0.5 px-0.5">
                    <span className="bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200">
                      {item.name}
                    </span>
                    <span className="text-[8.5px] text-slate-400 font-semibold">
                      {item.hint}
                    </span>
                  </div>

                  {/* Espacio central con la ilustración vectorial colorida y dulce */}
                  <div className="w-full flex-1 flex flex-col items-center justify-center p-1 relative rounded-lg bg-gradient-to-b from-purple-50/40 to-white">
                    <item.Component className="w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-110 drop-shadow-xs" />
                  </div>

                  {/* Casilla de verificación interactiva para el niño */}
                  <div className="mt-1 w-full flex items-center justify-center gap-1.5 pt-1 border-t border-slate-100 select-none">
                    <div
                      className={`w-4.5 h-4.5 rounded-lg border-2 border-slate-800 flex items-center justify-center transition ${
                        isChecked
                          ? 'bg-lime-500 text-slate-900 shadow-xs'
                          : 'bg-white group-hover:border-purple-600'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-700">
                      ¿Empieza con {config.letter}?
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ================= PIE DE PÁGINA ESCOLAR ================= */}
      <footer className="mt-1.5 pt-1 border-t-2 border-slate-800 flex items-center justify-between text-[9.5px] font-bold text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime-500 border border-slate-800"></span>
          <span>¡Excelente trabajo! Has practicado la {config.name} con éxito.</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-slate-400">
            Colección PENSA KIDS {pageNumber ? `• Pág. ${pageNumber}/26` : '• Ficha A4'}
          </span>
          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-0.5 rounded-md border border-amber-300 text-amber-900 font-extrabold">
            <span>Nota:</span>
            <div className="w-5 border-b border-slate-600"></div>
            <span>/ 10</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
