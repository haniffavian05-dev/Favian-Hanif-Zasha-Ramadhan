import { Play, BarChart as Analytics, Anchor, Mic2, Palette, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function VideoReference() {
  const similarVideos = [
    {
      id: 1,
      title: "Cara Membangun Personal Brand",
      views: "1.2M",
      time: "2 hari lalu",
      category: "STORYTELLING",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Lighting Setup Untuk Pemula",
      views: "850K",
      time: "1 minggu lalu",
      category: "TUTORIAL",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Cinematic Vlog Backgrounds",
      views: "500K",
      time: "4 hari lalu",
      category: "VISUAL",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-[1440px] mx-auto px-6 py-8"
    >
      {/* Header Section */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
            Video Reference Page
          </h1>
          <p className="text-on-surface-variant text-lg font-medium max-w-lg">
            Bedah anatomi konten viral untuk inspirasi pembuatan video kamu selanjutnya. Fokus pada hook dan visual.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-tertiary-container p-3 rounded-full flex items-center justify-center text-2xl">💡</div>
          <div className="bg-secondary-container p-3 rounded-full flex items-center justify-center text-2xl">🚀</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Primary Video Player */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="relative group aspect-video bg-surface-container-highest rounded-lg overflow-hidden shadow-sm transition-all">
            <img 
              className="w-full h-full object-cover opacity-80" 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200" 
              alt="Video Preview"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-xl hover:scale-110 transition-transform">
                <Play className="w-10 h-10 fill-primary" />
              </button>
            </div>
            {/* Metadata Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden border-2 border-white">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                    alt="Creator"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Konsep: "Minimalist Daily Routine"</h3>
                  <p className="text-white/80 text-sm">Referensi Visual & Storytelling</p>
                </div>
              </div>
            </div>
          </div>

          {/* Insights Section */}
          <div className="bg-surface-container-low p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Analytics className="w-6 h-6 text-primary" />
              Anatomi Kesuksesan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Insight Card */}
              <div className="bg-surface-container-lowest p-6 rounded-lg transition-all hover:translate-y-[-4px] custom-shadow">
                <div className="text-primary mb-3">
                  <Anchor className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-on-surface mb-2">• Hook menarik</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">3 detik pertama menampilkan visual yang kontras atau pertanyaan retoris yang kuat.</p>
              </div>
              {/* Insight Card */}
              <div className="bg-surface-container-lowest p-6 rounded-lg transition-all hover:translate-y-[-4px] custom-shadow">
                <div className="text-primary mb-3">
                  <Mic2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-on-surface mb-2">• Penyampaian jelas</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Intonasi dinamis dengan pemotongan klip (jump-cut) tepat pada akhir kalimat.</p>
              </div>
              {/* Insight Card */}
              <div className="bg-surface-container-lowest p-6 rounded-lg transition-all hover:translate-y-[-4px] custom-shadow">
                <div className="text-primary mb-3">
                  <Palette className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-on-surface mb-2">• Visual estetik</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">Penggunaan color grading warm-neutral yang memberikan kesan premium.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Sidebar Recommendation */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container p-6 rounded-lg h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-on-surface">Contoh video serupa</h3>
              <span className="text-sm font-medium text-primary cursor-pointer hover:underline">Lihat Semua</span>
            </div>
            <div className="flex flex-col gap-4">
              {similarVideos.map((video) => (
                <div key={video.id} className="group cursor-pointer">
                  <div className="flex gap-4 p-2 rounded-lg transition-all group-hover:bg-white/50">
                    <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-surface-container-highest relative">
                      <img 
                        className="w-full h-full object-cover" 
                        src={video.image} 
                        alt={video.title}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">{video.category}</span>
                      <h5 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">{video.title}</h5>
                      <p className="text-on-surface-variant text-xs mt-1">{video.views} Views • {video.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Card in Sidebar */}
            <div className="mt-8 primary-gradient rounded-lg p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">Mau script otomatis?</h4>
                <p className="text-white/80 text-xs mb-4">Biarkan AI kami membuatkan script berdasarkan referensi ini.</p>
                <button className="bg-white text-primary px-4 py-2 rounded-full text-xs font-bold hover:bg-on-primary transition-colors">Coba Sekarang</button>
              </div>
              <Sparkles className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
