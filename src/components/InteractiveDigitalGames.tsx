import React, { useState } from 'react';
import { 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Star, 
  Smile, 
  ArrowLeft,
  Award,
  Sparkles,
  Trophy
} from 'lucide-react';
import { soundEffects } from '../utils/audio.ts';
import {
  ALL_INTERACTIVE_LETTERS,
  INTERACTIVE_GAMES_DATA,
  InteractiveLetter
} from '../data/interactiveGamesData.ts';

interface InteractiveDigitalGamesProps {
  onBackToHome: () => void;
  onOpenPrintables: () => void;
}

export const InteractiveDigitalGames: React.FC<InteractiveDigitalGamesProps> = ({
  onBackToHome,
  onOpenPrintables
}) => {
  const [activeLetter, setActiveLetter] = useState<InteractiveLetter>('A');
  const [currentStep, setCurrentStep] = useState<number>(0); // 0, 1, 2, 3 (4 actividades por letra)
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Estados de retroalimentación
  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'wrong' | null;
    message: string;
  }>({ type: null, message: '' });

  // Estado para la actividad 1 (Caza de letras - encontrar las 4 objetivo)
  const [foundLetterIds, setFoundLetterIds] = useState<number[]>([]);

  // Estado para la actividad 3 (Completar palabra)
  const [filledLetter, setFilledLetter] = useState<string | null>(null);

  // Estado para evitar toques múltiples durante animación de acierto
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Configuración de la letra actual
  const letterConfig = INTERACTIVE_GAMES_DATA[activeLetter];

  // Reiniciar estados al cambiar de letra o de paso
  const resetStepState = () => {
    setFeedback({ type: null, message: '' });
    setFoundLetterIds([]);
    setFilledLetter(null);
    setIsTransitioning(false);
  };

  const selectLetter = (letter: InteractiveLetter) => {
    setActiveLetter(letter);
    setCurrentStep(0);
    setIsCompleted(false);
    resetStepState();
    soundEffects.playPop();
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
      resetStepState();
      soundEffects.playPop();
    } else {
      setIsCompleted(true);
      soundEffects.playVictory();
    }
  };

  const restartLetter = () => {
    setCurrentStep(0);
    setIsCompleted(false);
    resetStepState();
    soundEffects.playPop();
  };

  const goToNextLetter = () => {
    const nextIdx = ALL_INTERACTIVE_LETTERS.indexOf(activeLetter) + 1;
    if (nextIdx < ALL_INTERACTIVE_LETTERS.length) {
      selectLetter(ALL_INTERACTIVE_LETTERS[nextIdx]);
    } else {
      selectLetter('A');
    }
  };

  // Manejador de acierto con feedback visual y sonoro alegre
  const handleCorrect = (msg: string, autoAdvance = true) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    soundEffects.playCorrect();
    setFeedback({ type: 'correct', message: msg });

    if (autoAdvance) {
      setTimeout(() => {
        nextStep();
      }, 1250);
    }
  };

  // Manejador de error amigable (sin castigo, permite intentar inmediatamente)
  const handleWrong = (msg = '¡Casi! Inténtalo de nuevo 😊') => {
    soundEffects.playRetry();
    setFeedback({ type: 'wrong', message: msg });
    setTimeout(() => {
      setFeedback({ type: null, message: '' });
    }, 1800);
  };

  return (
    <div className="w-full max-w-lg sm:max-w-xl mx-auto flex flex-col items-center px-3 py-3 sm:py-6 font-['Fredoka',sans-serif] text-slate-800 select-none">
      
      {/* ======================================================== */}
      {/* BARRA SUPERIOR: NAVEGACIÓN Y SELECTOR DE LETRAS (A–Z)    */}
      {/* ======================================================== */}
      <div className="w-full flex flex-col gap-2 mb-3 bg-white p-2.5 sm:p-3 rounded-2xl border-2 border-slate-300 shadow-sm">
        
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={onBackToHome}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold border border-slate-300 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Inicio</span>
          </button>

          <div className="flex items-center gap-1.5">
            <span className="font-bubble text-xs sm:text-sm text-slate-700">
              Letra: <strong>{letterConfig.name}</strong> ({activeLetter})
            </span>
          </div>

          <button
            onClick={onOpenPrintables}
            type="button"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold border border-amber-300 transition cursor-pointer"
          >
            <span>Fichas A4</span>
          </button>
        </div>

        {/* Selector de 26 letras con desplazamiento suave o grilla adaptable */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1 px-0.5 scrollbar-thin">
          {ALL_INTERACTIVE_LETTERS.map(l => {
            const isCurrent = activeLetter === l;
            return (
              <button
                key={l}
                onClick={() => selectLetter(l)}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl font-bubble text-sm sm:text-base flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-gradient-to-b from-amber-400 to-yellow-400 text-slate-950 font-black border-2 border-slate-900 scale-110 shadow-[0_2px_0_#0f172a]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-300'
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>

      </div>

      {/* ======================================================== */}
      {/* CABECERA DE LA LETRA ACTIVA & PROGRESO DE ACTIVIDAD      */}
      {/* ======================================================== */}
      <div className="w-full bg-white rounded-3xl p-3.5 sm:p-4 border-3 border-slate-900 shadow-[0_4px_0_#0f172a] mb-4">
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-b ${letterConfig.bgHeader} text-white font-bubble text-lg flex items-center justify-center border-2 border-slate-900 shadow-xs`}>
              {letterConfig.letter}
            </span>
            <div>
              <h1 className="font-bubble text-base sm:text-lg text-slate-900 leading-tight">
                {letterConfig.name}: Actividades Digitales
              </h1>
              <span className="text-[11px] font-bold text-slate-500">
                Paso {currentStep + 1} de 4 • Toca y juega en pantalla
              </span>
            </div>
          </div>

          {/* Indicador de 4 estrellas de progreso */}
          <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-300">
            {[0, 1, 2, 3].map(stepIdx => (
              <Star
                key={stepIdx}
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                  stepIdx < currentStep || isCompleted
                    ? 'text-amber-400 fill-amber-400 scale-110'
                    : stepIdx === currentStep
                    ? 'text-amber-500 fill-amber-200 animate-pulse'
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Barra de progreso visual */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-300">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-lime-400 transition-all duration-300 rounded-full"
            style={{ width: isCompleted ? '100%' : `${((currentStep + 1) / 4) * 100}%` }}
          ></div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* ÁREA INTERACTIVA PRINCIPAL (CADA ACTIVIDAD)              */}
      {/* ======================================================== */}
      <div className="w-full bg-white rounded-3xl p-4 sm:p-6 border-4 border-slate-900 shadow-[0_6px_0_#0f172a] flex flex-col items-center min-h-[380px] sm:min-h-[420px] justify-between relative overflow-hidden">
        
        {/* PANTALLA DE VICTORIA AL COMPLETAR LA LETRA */}
        {isCompleted ? (
          <div className="w-full flex-1 flex flex-col items-center justify-center text-center py-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-amber-400 border-4 border-slate-900 shadow-[0_5px_0_#0f172a] flex items-center justify-center mb-3 animate-bounce">
              {activeLetter === 'Z' ? (
                <Trophy className="w-12 h-12 text-slate-950 stroke-[2.5]" />
              ) : (
                <Award className="w-12 h-12 text-slate-950 stroke-[2.5]" />
              )}
            </div>

            <h2 className="font-bubble text-2xl sm:text-4xl text-rose-500 mb-1 sticker-title-lg">
              {activeLetter === 'Z' ? '¡FELICITACIONES TOTALES!' : '¡EXCELENTE TRABAJO!'}
            </h2>
            <p className="font-bubble text-base sm:text-lg text-slate-700 mb-6">
              {activeLetter === 'Z' ? (
                <>¡Completaste todo el alfabeto de la <strong>A a la Z</strong>! Eres un campeón ⭐⭐⭐</>
              ) : (
                <>Completaste todas las actividades de la <strong>{letterConfig.name}</strong> ⭐⭐⭐</>
              )}
            </p>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={goToNextLetter}
                type="button"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bubble text-lg border-3 border-slate-900 shadow-[0_4px_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_#0f172a] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{activeLetter === 'Z' ? '¡Volver a jugar desde la A!' : '¡Siguiente letra!'}</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <button
                onClick={restartLetter}
                type="button"
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bubble text-base border-2 border-slate-800 shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-slate-600" />
                <span>Jugar de nuevo</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* ======================================================== */}
            {/* ACTIVIDAD 1: CAZA DE LETRAS (Identificar letra objetivo) */}
            {/* ======================================================== */}
            {currentStep === 0 && (
              <div className="w-full flex-1 flex flex-col items-center justify-between">
                <div className="text-center mb-3">
                  <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-full border border-amber-300 uppercase">
                    Paso 1 de 4 • Caza de Letras
                  </span>
                  <h2 className="font-bubble text-lg sm:text-2xl text-slate-900 mt-1.5">
                    Toca todas las letras <span className={letterConfig.textColor}>{letterConfig.letter}</span> y <span className={letterConfig.textColor}>{letterConfig.letterLower}</span>
                  </h2>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    Encontradas: {foundLetterIds.length} de 4
                  </p>
                </div>

                {/* Grilla de 8 burbujas táctiles */}
                <div className="grid grid-cols-4 gap-3 sm:gap-4 my-2 sm:my-4 w-full max-w-sm">
                  {letterConfig.bubbles.map(b => {
                    const isFound = foundLetterIds.includes(b.id);
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => {
                          if (isFound) return;
                          if (b.isTarget) {
                            soundEffects.playPop();
                            const newFound = [...foundLetterIds, b.id];
                            setFoundLetterIds(newFound);
                            if (newFound.length === 4) {
                              handleCorrect(`¡Genial! Encontraste todas las letras ${letterConfig.letter} 🎉`);
                            }
                          } else {
                            handleWrong(`Esa es la letra ${b.char}. ¡Busca la letra ${letterConfig.letter}!`);
                          }
                        }}
                        className={`h-16 sm:h-20 rounded-2xl font-bubble text-2xl sm:text-3xl flex items-center justify-center transition-all cursor-pointer relative ${
                          isFound
                            ? 'bg-emerald-400 text-slate-950 border-3 border-slate-900 shadow-[0_2px_0_#0f172a] scale-95'
                            : 'bg-gradient-to-b from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-slate-800 border-3 border-slate-800 shadow-[0_4px_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_#0f172a]'
                        }`}
                      >
                        <span>{b.char}</span>
                        {isFound && (
                          <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-lime-400 border-2 border-slate-900 flex items-center justify-center text-xs font-black">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="w-full flex justify-center mt-2">
                  <span className="text-xs font-bold text-slate-500">
                    Toca con tu dedo cada letra correcta
                  </span>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* ACTIVIDAD 2: ELEGIR LA LETRA CORRECTA CON ILUSTRACIÓN    */}
            {/* ======================================================== */}
            {currentStep === 1 && (
              <div className="w-full flex-1 flex flex-col items-center justify-between">
                <div className="text-center mb-2">
                  <span className="bg-sky-100 text-sky-900 text-xs font-black px-3 py-1 rounded-full border border-sky-300 uppercase">
                    Paso 2 de 4 • Sonido Inicial
                  </span>
                  <h2 className="font-bubble text-lg sm:text-2xl text-slate-900 mt-1">
                    {letterConfig.soundQuestion.question}
                  </h2>
                </div>

                {/* Ilustración destacada grande */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-slate-50 border-3 border-slate-800 flex flex-col items-center justify-center p-3 my-2 shadow-inner">
                  <letterConfig.soundQuestion.IconComponent className="w-24 h-24 sm:w-28 sm:h-28" />

                  <span className="font-bubble text-sm sm:text-base text-slate-700 tracking-widest mt-1">
                    {letterConfig.soundQuestion.wordSyllables}
                  </span>
                </div>

                {/* 3 Botones Gigantes de Letras */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-sm my-2">
                  {letterConfig.soundQuestion.choices.map((c, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        if (c.isCorrect) {
                          handleCorrect(`¡Excelente! Empieza con la letra ${c.char} ⭐`);
                        } else {
                          handleWrong(`¡Casi! Escucha el sonido inicial e intenta otra vez 😊`);
                        }
                      }}
                      className="h-16 sm:h-20 rounded-2xl bg-gradient-to-b from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-white font-bubble text-3xl sm:text-4xl border-3 border-slate-900 shadow-[0_4px_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_#0f172a] transition cursor-pointer flex items-center justify-center"
                    >
                      {c.char}
                    </button>
                  ))}
                </div>

                <span className="text-xs font-bold text-slate-500">
                  Toca la letra correcta
                </span>
              </div>
            )}

            {/* ======================================================== */}
            {/* ACTIVIDAD 3: COMPLETAR LA PALABRA CON TOQUE             */}
            {/* ======================================================== */}
            {currentStep === 2 && (
              <div className="w-full flex-1 flex flex-col items-center justify-between">
                <div className="text-center mb-2">
                  <span className="bg-emerald-100 text-emerald-900 text-xs font-black px-3 py-1 rounded-full border border-emerald-300 uppercase">
                    Paso 3 de 4 • Completa la Palabra
                  </span>
                  <h2 className="font-bubble text-lg sm:text-2xl text-slate-900 mt-1">
                    Toca la letra que falta
                  </h2>
                </div>

                {/* Ilustración de la palabra */}
                <div className="flex flex-col items-center my-2">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-center p-2 mb-2 shadow-xs">
                    <letterConfig.fillWord.IconComponent className="w-20 h-20" />
                  </div>

                  {/* Palabra con casilla de letra vacía */}
                  <div className="flex items-center gap-1.5 sm:gap-2 font-bubble text-2xl sm:text-4xl text-slate-900 bg-white px-4 py-2 rounded-2xl border-3 border-slate-900 shadow-xs">
                    {letterConfig.fillWord.prefix && (
                      <span>{letterConfig.fillWord.prefix}</span>
                    )}

                    {/* Casilla interactiva de la letra faltante */}
                    <div className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl border-3 border-dashed border-rose-500 bg-rose-50 flex items-center justify-center text-rose-600">
                      {filledLetter || '_'}
                    </div>

                    {/* Resto de la palabra */}
                    <span>{letterConfig.fillWord.wordRemainder}</span>
                  </div>
                </div>

                {/* Opciones de letras para rellenar */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-sm my-2">
                  {letterConfig.fillWord.choices.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        if (opt.isCorrect) {
                          setFilledLetter(opt.char);
                          handleCorrect(`¡Genial! Completaste la palabra con la letra ${opt.char} 🌟`);
                        } else {
                          handleWrong('¡Casi! Prueba con otra letra para completar la palabra');
                        }
                      }}
                      className="h-16 sm:h-20 rounded-2xl bg-gradient-to-b from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-bubble text-3xl sm:text-4xl border-3 border-slate-900 shadow-[0_4px_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_#0f172a] transition cursor-pointer flex items-center justify-center"
                    >
                      {opt.char}
                    </button>
                  ))}
                </div>

                <span className="text-xs font-bold text-slate-500">
                  Toca la letra que encaja en la casilla
                </span>
              </div>
            )}

            {/* ======================================================== */}
            {/* ACTIVIDAD 4: ¿CUÁL EMPIEZA CON LA LETRA?                 */}
            {/* ======================================================== */}
            {currentStep === 3 && (
              <div className="w-full flex-1 flex flex-col items-center justify-between">
                <div className="text-center mb-2">
                  <span className="bg-purple-100 text-purple-900 text-xs font-black px-3 py-1 rounded-full border border-purple-300 uppercase">
                    Paso 4 de 4 • ¿Cuál empieza con la letra?
                  </span>
                  <h2 className="font-bubble text-lg sm:text-2xl text-slate-900 mt-1">
                    Toca el dibujo que empieza con <span className={letterConfig.textColor}>{letterConfig.letter}</span>
                  </h2>
                </div>

                {/* 3 Tarjetas Grandes con Ilustraciones */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-4 w-full my-3">
                  {letterConfig.soundCards.map((card, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        if (card.isCorrect) {
                          handleCorrect(`¡SÍ! ${card.name} empieza con la letra ${letterConfig.letter} 🌟`);
                        } else {
                          handleWrong(`¡Casi! ${card.name} no empieza con ${letterConfig.letter}. ¡Prueba otro dibujo!`);
                        }
                      }}
                      className="rounded-2xl p-2 sm:p-3 bg-white hover:bg-slate-50 border-3 border-slate-800 shadow-[0_4px_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_#0f172a] transition cursor-pointer flex flex-col items-center justify-between min-h-[140px] sm:min-h-[160px] group"
                    >
                      <span className="text-[11px] font-black text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                        {card.name}
                      </span>

                      <div className="w-full flex-1 flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
                        <card.Component className="w-16 h-16 sm:w-20 sm:h-20" />
                      </div>

                      <span className="text-[10px] text-slate-500 font-bold">
                        {card.hint}
                      </span>
                    </button>
                  ))}
                </div>

                <span className="text-xs font-bold text-slate-500">
                  Toca la ilustración correcta con tu dedo
                </span>
              </div>
            )}
          </>
        )}

        {/* ======================================================== */}
        {/* BANNER DE FEEDBACK ALEGRE Y AMISTOSO (SIN CASTIGO)        */}
        {/* ======================================================== */}
        {feedback.type && (
          <div className={`w-full mt-3 p-3 rounded-2xl border-2 flex items-center justify-center gap-2 animate-bounce ${
            feedback.type === 'correct'
              ? 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black'
              : 'bg-amber-100 border-amber-400 text-amber-950 font-bold'
          }`}>
            {feedback.type === 'correct' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            ) : (
              <Smile className="w-5 h-5 text-amber-600 flex-shrink-0" />
            )}
            <span className="text-xs sm:text-sm text-center">
              {feedback.message}
            </span>
          </div>
        )}

      </div>

      {/* ======================================================== */}
      {/* BOTONES INFERIORES DE AYUDA / NAVEGACIÓN                */}
      {/* ======================================================== */}
      <div className="w-full flex items-center justify-between mt-3 px-1">
        <button
          onClick={restartLetter}
          type="button"
          className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 p-2 rounded-xl transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar esta letra</span>
        </button>

        <span className="text-xs font-extrabold text-slate-400">
          PensaKids Interactivo • Letras A a Z
        </span>
      </div>

    </div>
  );
};
