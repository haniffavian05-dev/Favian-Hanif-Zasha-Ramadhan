import { Calendar, Clock, Bell, TrendingUp, Zap, MoreVertical, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Schedule() {
  const upcomingQueue = [
    {
      id: 1,
      date: "12/05",
      title: "Morning Inspiration",
      platform: "Instagram",
      time: "08:30",
    },
    {
      id: 2,
      date: "14/05",
      title: "Product Showcase",
      platform: "TikTok",
      time: "19:15",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      {/* Editorial Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface mb-2">Atur Waktumu.</h1>
        <p className="text-on-surface-variant max-w-md text-lg font-medium">Jadwalkan konten kreatifmu dengan presisi dan biarkan AI kami mengurus sisanya.</p>
      </header>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Scheduling Form Section */}
        <section className="lg:col-span-7 bg-surface-container-lowest rounded-lg p-10 custom-shadow">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-xl">💡</div>
            <h2 className="text-2xl font-bold">Detail Penjadwalan</h2>
          </div>
          <form className="space-y-8">
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-on-surface-variant ml-1">Pilih Tanggal</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface" 
                    type="date"
                  />
                  <Calendar className="absolute right-4 top-4 w-5 h-5 text-on-surface-variant pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-on-surface-variant ml-1">Pilih Waktu</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface" 
                    type="time"
                  />
                  <Clock className="absolute right-4 top-4 w-5 h-5 text-on-surface-variant pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Notification Toggle */}
            <div className="flex items-center justify-between bg-surface-container rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Aktifkan notifikasi</h4>
                  <p className="text-xs text-on-surface-variant">Dapatkan pengingat 15 menit sebelum tayang.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="pt-4">
              <button className="w-full primary-gradient text-white py-5 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                Simpan Jadwal 📅
              </button>
            </div>
          </form>
        </section>

        {/* Right: Preview & Meta Section */}
        <aside className="lg:col-span-5 space-y-8">
          {/* Preview Card */}
          <div className="bg-surface-container-low rounded-lg p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 z-10">
              <div className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Live Preview</div>
            </div>
            <div className="aspect-video w-full rounded-md bg-surface-container-highest mb-4 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
                alt="Content Preview" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-2/3 bg-surface-container-highest rounded-full"></div>
              <div className="h-4 w-1/2 bg-surface-container-highest rounded-full opacity-60"></div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              AI Optimization Active
            </div>
          </div>

          {/* Tips / Info Bento */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary-container p-6 rounded-lg flex flex-col justify-between">
              <TrendingUp className="w-6 h-6 text-secondary" />
              <div className="mt-4">
                <p className="text-xs font-bold text-secondary uppercase tracking-tight">Best Time</p>
                <h3 className="text-lg font-bold text-secondary">19:00 WIB</h3>
              </div>
            </div>
            <div className="bg-tertiary-container p-6 rounded-lg flex flex-col justify-between">
              <Zap className="w-6 h-6 text-tertiary" />
              <div className="mt-4">
                <p className="text-xs font-bold text-tertiary uppercase tracking-tight">Peak Reach</p>
                <h3 className="text-lg font-bold text-tertiary">High Impact</h3>
              </div>
            </div>
          </div>

          {/* Summary List */}
          <div className="p-6 bg-surface rounded-lg">
            <h4 className="text-sm font-bold mb-4 text-on-surface">Upcoming Queue</h4>
            <div className="space-y-4">
              {upcomingQueue.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-xl custom-shadow">
                  <div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center font-bold text-xs text-on-surface-variant">{item.date}</div>
                  <div>
                    <p className="text-sm font-bold truncate w-32">{item.title}</p>
                    <p className="text-[10px] text-on-surface-variant">{item.platform} • {item.time}</p>
                  </div>
                  <button className="ml-auto p-1 hover:bg-surface-container rounded-full">
                    <MoreVertical className="w-4 h-4 text-on-surface-variant" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
