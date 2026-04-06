import { Settings, Sparkles, Copy, Share2, Lightbulb, Anchor, ArrowRight, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Generate() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      {/* Header Section */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">
              Waktunya Viral. <span className="text-primary">Tanpa Pusing.</span>
            </h1>
            <p className="text-lg text-on-surface-variant font-medium">
              Isi form di bawah untuk mendapatkan ide konten yang dirancang khusus oleh AI untuk audiensmu.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-tertiary-container text-on-tertiary-container px-4 py-3 rounded-2xl flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <span className="text-sm font-bold leading-tight">Pro Tip: Pilih gaya "Storytelling"<br/>untuk engagement lebih tinggi.</span>
            </div>
          </div>
        </div>
      </header>

      {/* Generation Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Form */}
        <section className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container-low rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Konfigurasi Konten
            </h2>
            <form className="space-y-6">
              {/* Niche */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant px-1">Niche</label>
                <select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/40 text-on-surface font-medium appearance-none">
                  <option>Tech & Gadgets</option>
                  <option>Beauty & Skincare</option>
                  <option>Lifestyle & Daily</option>
                  <option>Food & Beverage</option>
                  <option>Education / Tutorial</option>
                </select>
              </div>
              {/* Tujuan */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant px-1">Tujuan</label>
                <select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/40 text-on-surface font-medium appearance-none">
                  <option>FYP (Engagement)</option>
                  <option>Jualan (Conversion)</option>
                  <option>Branding (Awareness)</option>
                </select>
              </div>
              {/* Gaya Konten */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant px-1">Gaya Konten</label>
                <select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/40 text-on-surface font-medium appearance-none">
                  <option>Storytelling</option>
                  <option>Review Jujur</option>
                  <option>Edukasi Cepat</option>
                  <option>POV (Point of View)</option>
                </select>
              </div>
              {/* Emosi */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant px-1">Emosi</label>
                <select className="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/40 text-on-surface font-medium appearance-none">
                  <option>Relatable</option>
                  <option>Shock / Surprise</option>
                  <option>Lucu / Humor</option>
                  <option>Inspiratif</option>
                </select>
              </div>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full primary-gradient text-white py-5 rounded-xl font-black text-lg shadow-xl shadow-primary/30 active:scale-95 transition-all mt-4 flex items-center justify-center gap-3 disabled:opacity-70" 
                type="button"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>Generate Ide 🚀</>
                )}
              </button>
            </form>
          </div>
          {/* Secondary Visual Card */}
          <div className="relative h-48 rounded-lg overflow-hidden group">
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
              alt="Creator Workspace"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <p className="text-white font-bold">Gabung dengan 2,000+ Kreator Viral</p>
            </div>
          </div>
        </section>

        {/* Right: Results Placeholder */}
        <section className="lg:col-span-7">
          <div className="bg-surface-container rounded-lg p-8 h-full min-h-[600px] flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-headline">Hasil Generasi ✨</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors">
                  <Copy className="w-5 h-5 text-on-surface-variant" />
                </button>
                <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors">
                  <Share2 className="w-5 h-5 text-on-surface-variant" />
                </button>
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {!hasGenerated && !isGenerating ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-grow flex flex-col items-center justify-center text-center p-12"
                >
                  <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-10 h-10 text-on-surface-variant opacity-20" />
                  </div>
                  <h3 className="text-xl font-bold text-on-surface mb-2">Belum ada hasil</h3>
                  <p className="text-on-surface-variant">Klik tombol "Generate Ide" untuk mulai membuat konten viral.</p>
                </motion.div>
              ) : isGenerating ? (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-grow flex flex-col items-center justify-center text-center p-12"
                >
                  <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                  <h3 className="text-xl font-bold text-on-surface mb-2">Sedang Meracik Ide...</h3>
                  <p className="text-on-surface-variant">AI kami sedang menganalisis tren terbaru untukmu.</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 flex-grow"
                >
                  {/* Ide Konten Card */}
                  <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm border-l-4 border-primary">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-4 h-4 text-primary fill-primary/20" />
                      <span className="text-xs font-black uppercase tracking-widest text-primary">Ide Konten</span>
                    </div>
                    <h3 className="text-xl font-bold text-on-surface mb-3">5 Gadget yang Sebenarnya Kamu Nggak Butuh (Tapi Pengen)</h3>
                    <p className="text-on-surface-variant leading-relaxed">Gunakan format "Listicle" dengan transisi cepat. Tunjukkan produk yang aesthetic tapi fungsinya minimalis untuk memancing perdebatan di kolom komentar.</p>
                  </div>
                  {/* Hook Card */}
                  <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm border-l-4 border-secondary">
                    <div className="flex items-center gap-2 mb-4">
                      <Anchor className="w-4 h-4 text-secondary fill-secondary/20" />
                      <span className="text-xs font-black uppercase tracking-widest text-secondary">Hook (3 Detik Pertama)</span>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-surface-container rounded-xl">
                        <p className="font-bold italic text-on-surface">"Berhenti beli barang ini kalau kamu mau hemat 5 juta bulan ini..."</p>
                      </div>
                      <div className="p-4 bg-surface-container rounded-xl">
                        <p className="font-bold italic text-on-surface">"Nggak ada yang kasih tau kamu, tapi gadget ini sebenernya cuma sampah aesthetic."</p>
                      </div>
                    </div>
                  </div>
                  {/* Visual Suggestion Bento Item */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm">
                      <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant block mb-3">Visual Style</span>
                      <p className="text-sm font-medium">Clean, High-Contrast, Minimalist White Desk Setup.</p>
                    </div>
                    <div className="bg-surface-container-lowest rounded-lg p-6 shadow-sm">
                      <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant block mb-3">Best Time</span>
                      <p className="text-sm font-medium">Post jam 19:30 - 20:15 WIB (Selasa/Kamis).</p>
                    </div>
                  </div>
                  
                  {/* Footer Action */}
                  <div className="mt-8 pt-8 border-t border-on-surface-variant/10 flex justify-center">
                    <Link 
                      to="/script"
                      className="text-primary font-bold flex items-center gap-2 hover:underline transition-all"
                    >
                      Simpan ke Draft Script
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>

      {/* Floating UI Helper */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-14 h-14 rounded-full primary-gradient text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform">
          <Bot className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
}
