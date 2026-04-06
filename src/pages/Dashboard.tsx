import { Sparkles, Flame, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const trendingContent = [
    {
      id: 1,
      title: "Morning Routine Minimalis untuk Kulit Berjerawat",
      views: "2.4k",
      likes: 482,
      category: "AESTHETIC",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Battle Sunscreen: Lokal vs Korea (Mana yang Gak Whitecast?)",
      views: "5.1k",
      likes: "1.2k",
      category: "REVIEW",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Apa itu Retinol? Kenapa Semua Orang Membahasnya Sekarang?",
      views: "1.8k",
      likes: 310,
      category: "KNOWLEDGE",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Double Cleansing: Cara Benar Membersihkan Sisa Sunscreen",
      views: "3.2k",
      likes: 894,
      category: "TECHNIQUE",
      image: "https://images.unsplash.com/photo-1556228515-919086f74644?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      {/* Hero Header Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2">Halo, Creator 👋</h1>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container rounded-full">
              <Sparkles className="w-3 h-3 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Skincare Content Creator</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/generate"
              className="primary-gradient text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Generate Konten 🚀
            </Link>
            <Link 
              to="/script"
              className="bg-surface-container-highest text-on-surface font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-surface-container-high active:scale-95 transition-all duration-200"
            >
              Lihat Script 🎬
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Insights Bento Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Daily Idea Card */}
        <div className="bg-surface-container-low rounded-lg p-8 custom-shadow flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center text-2xl">💡</div>
            <h2 className="text-2xl font-bold">Ide hari ini</h2>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg">
            <p className="text-lg leading-relaxed text-on-surface-variant font-medium">
              "7 Kandungan Skincare yang Tidak Boleh Dicampur: Panduan Visual untuk Pemula yang Sering Salah Langkah."
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">Educational</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">Tutorial</span>
            </div>
          </div>
        </div>

        {/* Daily Hook Card */}
        <div className="bg-surface-container-low rounded-lg p-8 custom-shadow flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">🔥</div>
            <h2 className="text-2xl font-bold">Hook hari ini</h2>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-lg">
            <p className="text-lg leading-relaxed text-on-surface-variant font-medium italic">
              "Berhenti pakai Vitamin C kalau kamu masih melakukan kesalahan fatal ini di pagi hari..."
            </p>
            <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold">
              <TrendingUp className="w-4 h-4" />
              Potensi Retensi Tinggi
            </div>
          </div>
        </div>
      </section>

      {/* Trending Content Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Trending Konten 🔥</h2>
          <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingContent.map((item) => (
            <div key={item.id} className="bg-surface-container-lowest rounded-lg overflow-hidden group cursor-pointer custom-shadow">
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  src={item.image} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-[10px] font-bold backdrop-blur-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-on-surface mb-2 line-clamp-2 leading-snug">{item.title}</h3>
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>{item.views} Views</span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-primary text-primary" /> {item.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
