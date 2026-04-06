import { Copy, Edit3, Lightbulb, AlertTriangle, Sparkles, Megaphone, Video, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Script() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-6 py-12"
    >
      {/* Header Section */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">AI Script Generator</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-4">Mastering the Art of Minimalist UI 🎨</h1>
          <p className="text-on-surface-variant text-lg">Your generated script is ready. We've optimized the flow for maximum engagement on short-form platforms.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-high p-3 rounded-full hover:bg-surface-container-highest transition-colors">
            <Copy className="w-5 h-5" />
          </button>
          <button className="bg-surface-container-high p-3 rounded-full hover:bg-surface-container-highest transition-colors">
            <Edit3 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Script Structure: Bento Grid Style */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Section 1: Hook */}
        <div className="md:col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-lg shadow-sm relative overflow-hidden group border-l-4 border-primary-fixed">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-primary fill-primary/20" />
            </div>
            <h3 className="font-headline font-bold text-xl text-primary">1. Hook</h3>
          </div>
          <p className="text-xl font-medium leading-relaxed text-on-surface italic">
            "Stop building boring apps. Here is how you can use the 'Digital Curator' principle to make your UI feel like luxury."
          </p>
          <div className="mt-6 flex gap-2">
            <span className="px-3 py-1 bg-tertiary-container text-tertiary text-xs font-bold rounded-full">Visual: Text Overlay</span>
            <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-medium rounded-full">0:00 - 0:03</span>
          </div>
        </div>

        {/* Section 2: Problem */}
        <div className="md:col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 rounded-lg shadow-sm relative border-l-4 border-error-container">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-error-container/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-error" />
            </div>
            <h3 className="font-headline font-bold text-xl text-error">2. Problem</h3>
          </div>
          <p className="text-lg leading-relaxed text-on-surface">
            Most SaaS tools feel like an Excel spreadsheet had a baby with a gray box. They’re cluttered, they’re rigid, and they kill creativity. You're losing users because your interface feels like a chore, not a playground.
          </p>
          <div className="mt-6 flex gap-2">
            <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-medium rounded-full">0:03 - 0:15</span>
          </div>
        </div>

        {/* Section 3: Solution */}
        <div className="md:col-span-12 bg-surface-container-low p-8 md:p-12 rounded-lg border border-primary-fixed/20 relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white fill-white/20" />
                </div>
                <h3 className="font-headline font-extrabold text-2xl text-on-surface">3. Solution</h3>
              </div>
              <div className="space-y-4 max-w-3xl">
                <p className="text-xl leading-relaxed text-on-surface">
                  Introduce the <span className="font-bold text-primary">No-Line Rule</span>. Stop using 1px borders to separate content. Instead, use tonal layering. 
                </p>
                <p className="text-xl leading-relaxed text-on-surface">
                  Shift background colors between sections to create natural boundaries. Use a signature 135-degree gradient for your primary buttons to give them a "visual soul." This makes your app feel expansive and breathable.
                </p>
              </div>
            </div>
            <div className="hidden lg:block w-64 h-64 rounded-2xl overflow-hidden shadow-xl rotate-3">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" 
                alt="Abstract UI"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="mt-8 flex gap-2">
            <span className="px-4 py-1.5 bg-primary-fixed/20 text-primary text-sm font-bold rounded-full">Action: Show UI Demo</span>
            <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-sm font-medium rounded-full">0:15 - 0:45</span>
          </div>
        </div>

        {/* Section 4: CTA */}
        <div className="md:col-span-12 bg-surface-container-lowest p-8 rounded-lg shadow-sm relative border-l-4 border-tertiary">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-tertiary" />
            </div>
            <h3 className="font-headline font-bold text-xl text-tertiary">4. Call to Action</h3>
          </div>
          <p className="text-xl font-bold leading-relaxed text-on-surface">
            "Want the full design token list? Comment 'DESIGN' below and I'll DM you the link to our latest UI Kit!"
          </p>
          <div className="mt-6 flex gap-2">
            <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-medium rounded-full">0:45 - 0:55</span>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <footer className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          to="/video-reference"
          className="w-full sm:w-auto bg-secondary-container text-secondary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95"
        >
          <Video className="w-5 h-5" />
          Lihat Video Referensi 🎬
        </Link>
        <Link 
          to="/schedule"
          className="w-full sm:w-auto primary-gradient text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
        >
          <Calendar className="w-5 h-5" />
          Simpan & Jadwalkan 📅
        </Link>
      </footer>
    </motion.div>
  );
}
