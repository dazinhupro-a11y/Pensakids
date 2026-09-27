import React from 'react';
import { 
  Download, 
  Printer, 
  Sparkles, 
  Pencil, 
  Palette, 
  Scissors, 
  BookOpen, 
  CheckCircle2, 
  Loader2,
  ArrowRight,
  Smile
} from 'lucide-react';

interface PrintablesHomePageProps {
  onOpenActivities: () => void;
  onOpenInteractiveGames?: () => void;
  onDownloadFullPdf: () => void;
  isGeneratingPdf: boolean;
  pdfProgress: { current: number; total: number; letter: string; status: string } | null;
  downloadCompleted: boolean;
}

export const PrintablesHomePage: React.FC<PrintablesHomePageProps> = ({
  onOpenActivities,
  onOpenInteractiveGames,
  onDownloadFullPdf,
  isGeneratingPdf,
  pdfProgress,
  downloadCompleted
}) => {
  return (
    <div className="w-full max-w-lg sm:max-w-2xl mx-auto flex flex-col items-center px-4 py-4 sm:py-8 font-['Fredoka',sans-serif] text-slate-800">
      
      {/* ======================================================== */}
      {/* LOGO PENSA KIDS & BADGE DIVERTIDO                        */}
      {/* ======================================================== */}
      <header className="flex flex-col items-center text-center mb-6">
        <div className="w-44 sm:w-56 mb-3 transition-transform hover:scale-105">
          <img 
            src="/pensa-kids-logo.png" 
            alt="PENSA KIDS" 
            className="w-full h-auto object-contain drop-shadow-md" 
          />
        </div>

        {/* Insignia alegre */}
        <div className="inline-flex items-center gap-1.5 bg-amber-300 text-amber-950 font-black text-xs sm:text-sm px-4 py-1.5 rounded-full border-2 border-slate-900 shadow-[0_2px_0_#0f172a] uppercase tracking-wide">
          <Sparkles className="w-4 h-4 text-amber-800 fill-amber-700" />
          <span>Fichas Físicas de Aprendizaje</span>
        </div>
      </header>

      {/* ======================================================== */}
      {/* TÍTULO Y SUBTÍTULO PRINCIPALES                           */}
      {/* ======================================================== */}
      <section className="text-center mb-7 sm:mb-9 max-w-md sm:max-w-xl">
        <h1 className="font-bubble text-3xl sm:text-5xl text-rose-500 tracking-wide sticker-title-lg leading-tight mb-2">
          Actividades para imprimir
        </h1>
        <p className="font-bubble text-base sm:text-xl text-slate-700 font-semibold leading-snug">
          Descarga, imprime y diviértete aprendiendo.
        </p>
      </section>

      {/* ======================================================== */}
      {/* BOTÓN PRINCIPAL GIGANTE: DESCARGAR ACTIVIDADES           */}
      {/* ======================================================== */}
      <div className="w-full flex flex-col items-center gap-3 mb-8 sm:mb-10">
        <button
          onClick={onDownloadFullPdf}
          disabled={isGeneratingPdf}
          type="button"
          className="w-full max-w-md py-4 sm:py-5 px-6 rounded-3xl bg-gradient-to-b from-amber-400 via-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 border-4 border-slate-900 shadow-[0_6px_0_#0f172a] active:translate-y-1.5 active:shadow-[0_1px_0_#0f172a] transition-all flex items-center justify-center gap-3 sm:gap-4 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
        >
          {isGeneratingPdf ? (
            <>
              <Loader2 className="w-7 h-7 sm:w-8 sm:h-8 animate-spin text-slate-900" />
              <div className="flex flex-col text-left">
                <span className="font-bubble text-lg sm:text-2xl text-slate-900 leading-tight">
                  Generando PDF...
                </span>
                <span className="text-xs sm:text-sm font-black text-amber-950">
                  {pdfProgress ? `Página ${pdfProgress.current} de ${pdfProgress.total}` : 'Preparando cuaderno'}
                </span>
              </div>
            </>
          ) : downloadCompleted ? (
            <>
              <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-800" />
              <div className="flex flex-col text-left">
                <span className="font-bubble text-xl sm:text-2xl text-slate-900 leading-tight">
                  ¡Descargado con éxito!
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-950">
                  Toca aquí para descargar otra vez
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/40 flex items-center justify-center border-2 border-slate-900 group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6 sm:w-7 sm:h-7 text-slate-900 stroke-[2.8]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bubble text-xl sm:text-2xl text-slate-900 leading-tight">
                  Descargar actividades
                </span>
                <span className="text-xs sm:text-sm font-black text-amber-950">
                  PDF Completo de la A a la Z (26 fichas A4)
                </span>
              </div>
            </>
          )}
        </button>

        {/* Modal / Barra de progreso al generar el PDF */}
        {isGeneratingPdf && pdfProgress && (
          <div className="w-full max-w-md bg-white border-3 border-slate-900 rounded-2xl p-3 shadow-[0_3px_0_#0f172a] flex flex-col gap-1.5 animate-pulse">
            <div className="flex items-center justify-between text-xs font-black text-slate-800">
              <span>{pdfProgress.status}</span>
              <span className="bg-amber-300 px-2 py-0.5 rounded-full border border-slate-900">
                {Math.round((pdfProgress.current / pdfProgress.total) * 100)}%
              </span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden border-2 border-slate-900">
              <div 
                className="h-full bg-emerald-500 transition-all duration-150 rounded-full"
                style={{ width: `${(pdfProgress.current / pdfProgress.total) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Botón destacado: Juegos Digitales Interactivos (A–Z) */}
        {onOpenInteractiveGames && (
          <button
            onClick={onOpenInteractiveGames}
            type="button"
            className="w-full max-w-md py-4 px-6 rounded-3xl bg-gradient-to-b from-sky-400 via-cyan-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-white border-4 border-slate-900 shadow-[0_5px_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_#0f172a] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/30 flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bubble text-lg sm:text-xl text-white leading-tight">
                Juegos Digitales Interactivos
              </span>
              <span className="text-xs sm:text-sm font-black text-sky-100">
                Tocar y jugar en pantalla (Alfabeto Completo A a Z)
              </span>
            </div>
          </button>
        )}

        {/* Botón secundario para explorar o ver las fichas en pantalla */}
        <button
          onClick={onOpenActivities}
          type="button"
          className="w-full max-w-md py-3 px-5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border-3 border-slate-900 shadow-[0_4px_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_#0f172a] transition-all flex items-center justify-center gap-2 text-sm sm:text-base font-bubble cursor-pointer"
        >
          <BookOpen className="w-5 h-5 text-amber-500" />
          <span>Ver todas las 26 fichas para imprimir</span>
          <ArrowRight className="w-4 h-4 text-slate-500 ml-1" />
        </button>
      </div>

      {/* ======================================================== */}
      {/* SECCIÓN: ¿CÓMO JUGAR? (3 PASOS ULTRA VISUALES)           */}
      {/* ======================================================== */}
      <section className="w-full bg-white rounded-3xl p-4 sm:p-6 border-4 border-slate-900 shadow-[0_6px_0_#0f172a] mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">✏️</span>
          <h2 className="font-bubble text-xl sm:text-2xl text-slate-900">
            ¿Cómo jugar?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Paso 1 */}
          <div className="bg-gradient-to-b from-sky-50 to-sky-100/70 rounded-2xl p-3.5 border-2 border-sky-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-sky-400 text-white flex items-center justify-center font-bubble text-2xl border-2 border-slate-900 shadow-[0_2px_0_#0f172a] mb-2">
              1
            </div>
            <span className="font-bubble text-lg text-sky-950 mb-0.5">
              Descargar
            </span>
            <p className="text-xs text-slate-600 font-semibold">
              Guarda el archivo PDF en tu teléfono, tablet o computadora.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="bg-gradient-to-b from-amber-50 to-amber-100/70 rounded-2xl p-3.5 border-2 border-amber-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bubble text-2xl border-2 border-slate-900 shadow-[0_2px_0_#0f172a] mb-2">
              2
            </div>
            <span className="font-bubble text-lg text-amber-950 mb-0.5">
              Imprimir
            </span>
            <p className="text-xs text-slate-600 font-semibold">
              Imprime en hojas tamaño A4 estándar con tu impresora.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="bg-gradient-to-b from-emerald-50 to-emerald-100/70 rounded-2xl p-3.5 border-2 border-emerald-300 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-400 text-slate-950 flex items-center justify-center font-bubble text-2xl border-2 border-slate-900 shadow-[0_2px_0_#0f172a] mb-2">
              3
            </div>
            <span className="font-bubble text-lg text-emerald-950 mb-0.5">
              ¡A jugar!
            </span>
            <p className="text-xs text-slate-600 font-semibold">
              Escribe, traza, colorea y aprende cada letra del alfabeto.
            </p>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECCIÓN: MATERIALES (LÁPIZ, COLORES, TIJERAS)           */}
      {/* ======================================================== */}
      <section className="w-full bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-3xl p-4 sm:p-5 border-3 border-slate-900 shadow-[0_4px_0_#0f172a]">
        <h3 className="font-bubble text-sm sm:text-base text-slate-800 text-center mb-3">
          Puedes hacer tus actividades con:
        </h3>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          
          {/* Lápiz */}
          <div className="bg-white rounded-2xl p-2.5 sm:p-3 border-2 border-slate-800 flex flex-col items-center text-center shadow-xs">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 flex items-center justify-center border-1.5 border-amber-300 mb-1">
              <Pencil className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
            </div>
            <span className="font-bubble text-sm sm:text-base text-slate-900">
              Lápiz
            </span>
            <span className="text-[10px] text-slate-500 font-bold">
              Para trazar
            </span>
          </div>

          {/* Colores */}
          <div className="bg-white rounded-2xl p-2.5 sm:p-3 border-2 border-slate-800 flex flex-col items-center text-center shadow-xs">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pink-100 flex items-center justify-center border-1.5 border-pink-300 mb-1">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
            </div>
            <span className="font-bubble text-sm sm:text-base text-slate-900">
              Colores
            </span>
            <span className="text-[10px] text-slate-500 font-bold">
              Para pintar
            </span>
          </div>

          {/* Tijeras */}
          <div className="bg-white rounded-2xl p-2.5 sm:p-3 border-2 border-slate-800 flex flex-col items-center text-center shadow-xs">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan-100 flex items-center justify-center border-1.5 border-cyan-300 mb-1">
              <Scissors className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-700" />
            </div>
            <span className="font-bubble text-sm sm:text-base text-slate-900">
              Tijeras
            </span>
            <span className="text-[10px] text-slate-500 font-bold">
              Si es necesario
            </span>
          </div>

        </div>
      </section>

      {/* Pie amigable */}
      <footer className="mt-6 text-center text-xs text-slate-500 font-semibold flex items-center justify-center gap-1.5">
        <Smile className="w-4 h-4 text-amber-500" />
        <span>PensaKids • Diseñado con amor para aprender jugando</span>
      </footer>

    </div>
  );
};
