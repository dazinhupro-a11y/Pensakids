import React, { useState, useRef } from 'react';
import { 
  Printer, 
  RotateCcw, 
  Sparkles, 
  Download, 
  Loader2, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  FileDown, 
  ChevronRight,
  Eye,
  Home,
  ArrowLeft
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LETTERS_CONFIG, LetterType } from './data/lettersData.tsx';
import { WorksheetItem } from './components/WorksheetItem.tsx';
import { PrintablesHomePage } from './components/PrintablesHomePage.tsx';
import { InteractiveDigitalGames } from './components/InteractiveDigitalGames.tsx';

const ALL_LETTERS: LetterType[] = [
  'A', 'B', 'C', 'D', 'E', 
  'F', 'G', 'H', 'I', 'J', 
  'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 
  'U', 'V', 'W', 'X', 'Y', 'Z'
];

interface ProgressState {
  current: number;
  total: number;
  letter: LetterType;
  status: string;
}

export default function App() {
  const [screenView, setScreenView] = useState<'home' | 'interactive' | 'activities'>('home');
  const [currentLetter, setCurrentLetter] = useState<LetterType>('A');
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');

  // Estado para la actividad 3 (circular la letra objetivo) por cada letra
  const [selectedLettersByTab, setSelectedLettersByTab] = useState<Record<LetterType, number[]>>({
    A: [], B: [], C: [], D: [], E: [],
    F: [], G: [], H: [], I: [], J: [],
    K: [], L: [], M: [], N: [], O: [],
    P: [], Q: [], R: [], S: [], T: [],
    U: [], V: [], W: [], X: [], Y: [], Z: []
  });

  // Estado para completar las palabras en la actividad 4
  const [inputsByTab, setInputsByTab] = useState<Record<LetterType, Record<string, string>>>({
    A: {}, B: {}, C: {}, D: {}, E: {},
    F: {}, G: {}, H: {}, I: {}, J: {},
    K: {}, L: {}, M: {}, N: {}, O: {},
    P: {}, Q: {}, R: {}, S: {}, T: {},
    U: {}, V: {}, W: {}, X: {}, Y: {}, Z: {}
  });

  // Estado para las casillas de la actividad 5
  const [checkedBoxesByTab, setCheckedBoxesByTab] = useState<Record<LetterType, Record<number, boolean>>>({
    A: {}, B: {}, C: {}, D: {}, E: {},
    F: {}, G: {}, H: {}, I: {}, J: {},
    K: {}, L: {}, M: {}, N: {}, O: {},
    P: {}, Q: {}, R: {}, S: {}, T: {},
    U: {}, V: {}, W: {}, X: {}, Y: {}, Z: {}
  });

  // Estados de generación de PDF
  const [isGeneratingFullPdf, setIsGeneratingFullPdf] = useState(false);
  const [isGeneratingSinglePdf, setIsGeneratingSinglePdf] = useState(false);
  const [pdfProgress, setPdfProgress] = useState<ProgressState | null>(null);
  const [downloadCompleted, setDownloadCompleted] = useState(false);
  const [captureLetter, setCaptureLetter] = useState<LetterType | null>(null);

  const printSingleRef = useRef<HTMLDivElement>(null);

  // Alternar letra en sopa de letras (Actividad 3)
  const toggleLetter = (letter: LetterType, id: number) => {
    setSelectedLettersByTab(prev => {
      const current = prev[letter];
      const updated = current.includes(id) 
        ? current.filter(item => item !== id) 
        : [...current, id];
      return { ...prev, [letter]: updated };
    });
  };

  // Actualizar input de palabra (Actividad 4)
  const handleInputChange = (letter: LetterType, key: string, val: string) => {
    setInputsByTab(prev => ({
      ...prev,
      [letter]: {
        ...prev[letter],
        [key]: val.toUpperCase()
      }
    }));
  };

  // Alternar checkbox (Actividad 5)
  const toggleCheckbox = (letter: LetterType, id: number) => {
    setCheckedBoxesByTab(prev => ({
      ...prev,
      [letter]: {
        ...prev[letter],
        [id]: !prev[letter][id]
      }
    }));
  };

  // Limpiar para imprimir
  const clearForPrinting = () => {
    setSelectedLettersByTab(prev => ({ ...prev, [currentLetter]: [] }));
    setInputsByTab(prev => ({ ...prev, [currentLetter]: {} }));
    setCheckedBoxesByTab(prev => ({ ...prev, [currentLetter]: {} }));
  };

  // ========================================================
  // DESCARGA DIRECTA DEL PDF COMPLETO (A–Z EN UN SOLO ARCHIVO)
  // ========================================================
  const handleDownloadFullPdf = async () => {
    if (isGeneratingFullPdf) return;
    setIsGeneratingFullPdf(true);
    setDownloadCompleted(false);

    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const totalPages = ALL_LETTERS.length;

      for (let i = 0; i < totalPages; i++) {
        const letter = ALL_LETTERS[i];
        setCaptureLetter(letter);
        setPdfProgress({
          current: i + 1,
          total: totalPages,
          letter,
          status: `Compilando página ${i + 1} de ${totalPages} (Letra ${letter})...`
        });

        // Esperar renderizado React en el DOM
        await new Promise(r => setTimeout(r, 65));

        const element = document.getElementById('pdf-single-capture-container');
        if (!element) {
          throw new Error(`Contenedor para letra ${letter} no encontrado`);
        }

        // Renderizado nítido en canvas
        const canvas = await html2canvas(element, {
          scale: 1.5,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          width: 794,
          height: 1123,
          windowWidth: 794,
          windowHeight: 1123
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.94);

        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }

        // Medidas exactas A4 en mm: 210 x 297 mm
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
      }

      setPdfProgress({
        current: totalPages,
        total: totalPages,
        letter: 'Z',
        status: '¡Listo! Descargando archivo PDF...'
      });

      // Crear descarga directa automática mediante Blob y link HTML5
      const pdfBlob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(pdfBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = 'Cuaderno_Actividades_Alfabeto_A-Z_PensaKids.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);
      setDownloadCompleted(true);
    } catch (err) {
      console.error('Error generando PDF completo:', err);
      // NUNCA llamar a window.print() aquí
      alert('Hubo un inconveniente al generar el archivo PDF. Por favor, intenta nuevamente.');
    } finally {
      setCaptureLetter(null);
      setIsGeneratingFullPdf(false);
      setTimeout(() => {
        setPdfProgress(null);
      }, 3000);
    }
  };

  // ========================================================
  // DESCARGA INDIVIDUAL DE LA LETRA ACTUAL EN PDF
  // ========================================================
  const handleDownloadSinglePdf = async () => {
    if (isGeneratingSinglePdf) return;
    setIsGeneratingSinglePdf(true);

    try {
      setCaptureLetter(currentLetter);
      await new Promise(r => setTimeout(r, 75));

      const element = document.getElementById('pdf-single-capture-container');
      if (!element) throw new Error('Contenedor no disponible');

      const canvas = await html2canvas(element, {
        scale: 1.6,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123,
        windowWidth: 794,
        windowHeight: 1123
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');

      const pdfBlob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(pdfBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = `Ficha_Lectoescritura_Letra_${currentLetter}_PensaKids.pdf`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);
    } catch (err) {
      console.error('Error generando PDF individual:', err);
      // NUNCA llamar a window.print() aquí
    } finally {
      setCaptureLetter(null);
      setIsGeneratingSinglePdf(false);
    }
  };

  // Impresión directa del navegador para todas las 26 páginas
  const handlePrintFullWorkbook = () => {
    setViewMode('all');
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-3 sm:py-6 px-2 sm:px-4 flex flex-col items-center select-none font-['Fredoka',sans-serif]">
      
      {/* ======================================================== */}
      {/* VISTA A: PÁGINA INICIAL DE LA SECCIÓN DE IMPRIMIBLES      */}
      {/* ======================================================== */}
      {screenView === 'home' && (
        <PrintablesHomePage
          onOpenActivities={() => setScreenView('activities')}
          onOpenInteractiveGames={() => setScreenView('interactive')}
          onDownloadFullPdf={handleDownloadFullPdf}
          isGeneratingPdf={isGeneratingFullPdf}
          pdfProgress={pdfProgress}
          downloadCompleted={downloadCompleted}
        />
      )}

      {/* ======================================================== */}
      {/* VISTA B: JUEGOS DIGITALES INTERACTIVOS (LETRAS A, B, C, D, E) */}
      {/* ======================================================== */}
      {screenView === 'interactive' && (
        <InteractiveDigitalGames
          onBackToHome={() => setScreenView('home')}
          onOpenPrintables={() => setScreenView('activities')}
        />
      )}

      {/* ======================================================== */}
      {/* VISTA C: EXPLORADOR DE ACTIVIDADES Y FICHAS IMPRIMIBLES   */}
      {/* ======================================================== */}
      {screenView === 'activities' && (
        <>
          {/* BARRA SUPERIOR DE CONTROL (Oculta al imprimir) */}
          <nav className="no-print w-full max-w-[210mm] mb-3 bg-white rounded-3xl shadow-xl p-3.5 sm:p-5 border-2 border-slate-300 flex flex-col gap-3.5">
            
            {/* Cabecera de Navegación con Botón Volver al Inicio */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setScreenView('home')}
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black transition border border-slate-300 cursor-pointer shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Inicio</span>
                </button>

                <button
                  onClick={() => setScreenView('interactive')}
                  type="button"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 text-xs font-black transition border border-sky-300 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Juegos A–Z</span>
                </button>

                <div className="w-20 sm:w-24 flex-shrink-0">
                  <img 
                    src="/pensa-kids-logo.png" 
                    alt="PENSA KIDS" 
                    className="w-full h-auto object-contain drop-shadow-sm" 
                  />
                </div>

                <div className="hidden sm:block">
                  <span className="text-xs font-black text-slate-900 block leading-tight">
                    Fichas Imprimibles: Alfabeto A–Z
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold">
                    Formato A4 • 1 ficha por hoja
                  </span>
                </div>
              </div>

              {/* Botones de acción principales */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={clearForPrinting}
                  type="button"
                  title="Borrar respuestas"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition shadow-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Limpiar</span>
                </button>

                <button
                  onClick={handlePrintFullWorkbook}
                  type="button"
                  title="Imprimir todo el cuaderno A4"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border-2 border-slate-800 bg-white hover:bg-slate-50 text-slate-800 text-xs font-black transition shadow-[0_2px_0_#0f172a] active:translate-y-0.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-sky-600" />
                  <span>Imprimir A–Z</span>
                </button>
              </div>
            </div>

            {/* BANNER DESTACADO: DESCARGA DEL PDF COMPLETO A–Z */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-3 sm:p-4 rounded-2xl text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center border border-white/30 flex-shrink-0">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bubble text-sm sm:text-base tracking-wide text-white">
                      CUADERNO COMPLETO (A–Z) EN 1 SOLO PDF
                    </span>
                    <span className="bg-amber-300 text-amber-950 font-black text-[9px] px-2 py-0.5 rounded-full uppercase">
                      26 Páginas
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100 font-medium">
                    Todas las actividades organizadas de A a Z en alta resolución para imprimir.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleDownloadFullPdf}
                  disabled={isGeneratingFullPdf}
                  type="button"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs sm:text-sm font-black transition shadow-[0_3px_0_#78350f] active:translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isGeneratingFullPdf ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-amber-950" />
                      <span>Generando ({pdfProgress ? `${pdfProgress.current}/26` : '...'})</span>
                    </>
                  ) : downloadCompleted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                      <span>¡PDF Descargado!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4.5 h-4.5 text-amber-950" />
                      <span>Descargar PDF Completo (A–Z)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Alternador de Modo de Vista y Selector de Letras */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-300 w-full sm:w-auto">
                <button
                  onClick={() => setViewMode('single')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    viewMode === 'single'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-300 font-black'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileDown className="w-3.5 h-3.5 text-rose-500" />
                  <span>Ver Ficha Individual</span>
                </button>

                <button
                  onClick={() => setViewMode('all')}
                  className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    viewMode === 'all'
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-300 font-black'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 text-sky-500" />
                  <span>Ver Todas las 26 Fichas</span>
                </button>
              </div>

              {viewMode === 'single' && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-bold hidden sm:inline">
                    Descarga individual:
                  </span>
                  <button
                    onClick={handleDownloadSinglePdf}
                    disabled={isGeneratingSinglePdf}
                    type="button"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {isGeneratingSinglePdf ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-600" />
                    ) : (
                      <Download className="w-3.5 h-3.5 text-rose-600" />
                    )}
                    <span>Baixar PDF ({currentLetter})</span>
                  </button>
                </div>
              )}
            </div>

            {/* Selector de Pestañas para las 26 letras del alfabeto */}
            {viewMode === 'single' && (
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-0.5">
                  <span>Selecciona una letra para visualizar:</span>
                  <span>Letra activa: <strong>{LETTERS_CONFIG[currentLetter].name}</strong> ({currentLetter})</span>
                </div>
                <div className="grid grid-cols-13 sm:flex sm:flex-wrap items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
                  {ALL_LETTERS.map((letter) => {
                    const isActive = currentLetter === letter;
                    return (
                      <button
                        key={letter}
                        onClick={() => setCurrentLetter(letter)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bubble text-sm sm:text-base flex items-center justify-center transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-gradient-to-b from-rose-500 to-red-600 text-white shadow-md border-2 border-slate-900 scale-110 -translate-y-0.5 ring-2 ring-rose-300' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                        }`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </nav>

          {/* VISTA 1: FICHA INDIVIDUAL */}
          {viewMode === 'single' && (
            <main 
              ref={printSingleRef}
              className="print-page-container w-full flex flex-col items-center"
            >
              <WorksheetItem
                letter={currentLetter}
                pageNumber={ALL_LETTERS.indexOf(currentLetter) + 1}
                selectedLetters={selectedLettersByTab[currentLetter]}
                inputs={inputsByTab[currentLetter]}
                checkedBoxes={checkedBoxesByTab[currentLetter]}
                onToggleLetter={(id) => toggleLetter(currentLetter, id)}
                onInputChange={(key, val) => handleInputChange(currentLetter, key, val)}
                onToggleCheckbox={(id) => toggleCheckbox(currentLetter, id)}
                isCleanForPrint={false}
                domId="worksheet-page"
              />
            </main>
          )}

          {/* VISTA 2: TODAS LAS 26 FICHAS EN SECUENCIA */}
          {viewMode === 'all' && (
            <div className="w-full flex flex-col items-center gap-6">
              <div className="no-print bg-sky-50 border-2 border-sky-300 rounded-2xl p-3 text-sky-950 text-xs font-bold flex items-center gap-2 max-w-[210mm] w-full">
                <BookOpen className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>
                  Visualizando las 26 páginas de actividades de A a Z en orden secuencial. Cada una representa una página A4 independiente lista para imprimir.
                </span>
              </div>

              {ALL_LETTERS.map((letter, idx) => (
                <div key={letter} className="w-full flex flex-col items-center">
                  <div className="no-print mb-1 flex items-center gap-2 text-xs font-extrabold text-slate-600">
                    <span className="bg-white px-2 py-0.5 rounded-full border border-slate-300 shadow-xs">
                      Página {idx + 1} de 26 • Letra {letter} ({LETTERS_CONFIG[letter].name})
                    </span>
                  </div>
                  <WorksheetItem
                    letter={letter}
                    pageNumber={idx + 1}
                    selectedLetters={selectedLettersByTab[letter]}
                    inputs={inputsByTab[letter]}
                    checkedBoxes={checkedBoxesByTab[letter]}
                    onToggleLetter={(id) => toggleLetter(letter, id)}
                    onInputChange={(key, val) => handleInputChange(letter, key, val)}
                    onToggleCheckbox={(id) => toggleCheckbox(letter, id)}
                    isCleanForPrint={false}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ======================================================== */}
      {/* MODAL / OVERLAY DE DESCARGA EN PROCESO                  */}
      {/* ======================================================== */}
      {isGeneratingFullPdf && pdfProgress && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border-4 border-slate-900 shadow-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-400 border-3 border-slate-900 flex items-center justify-center mb-3 shadow-[0_3px_0_#0f172a]">
              <Loader2 className="w-8 h-8 animate-spin text-slate-950" />
            </div>

            <h3 className="font-bubble text-xl sm:text-2xl text-slate-900 mb-1">
              Descargando Cuaderno A–Z en PDF
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-4">
              {pdfProgress.status}
            </p>

            {/* Barra de progreso visual */}
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden border-2 border-slate-900 mb-2">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all duration-150 rounded-full"
                style={{ width: `${(pdfProgress.current / pdfProgress.total) * 100}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between w-full text-xs font-black text-slate-700 mb-3 px-1">
              <span>Página {pdfProgress.current} de {pdfProgress.total}</span>
              <span className="bg-amber-300 text-amber-950 px-2 py-0.5 rounded-full border border-slate-900">
                {Math.round((pdfProgress.current / pdfProgress.total) * 100)}%
              </span>
            </div>

            <span className="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300">
              El archivo PDF comenzará a descargarse directamente en tu dispositivo
            </span>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* CONTENEDOR ESPECÍFICO PARA CAPTURA DE ALTA DEFINICIÓN A PDF */}
      {/* Renderiza 1 única página en coordenadas (0, 0) para captura exacta */}
      {/* ======================================================== */}
      <div 
        id="pdf-single-capture-container" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '794px',
          height: '1123px',
          zIndex: -9999,
          pointerEvents: 'none',
          backgroundColor: '#ffffff',
          overflow: 'hidden'
        }}
        aria-hidden="true"
      >
        {captureLetter && (
          <div style={{ width: '794px', height: '1123px', boxSizing: 'border-box', backgroundColor: '#ffffff' }}>
            <WorksheetItem
              letter={captureLetter}
              pageNumber={ALL_LETTERS.indexOf(captureLetter) + 1}
              isCleanForPrint={true}
            />
          </div>
        )}
      </div>

    </div>
  );
}
