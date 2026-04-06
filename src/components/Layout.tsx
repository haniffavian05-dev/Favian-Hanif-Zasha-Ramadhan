import { Outlet, Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { HelpCircle, LayoutDashboard, Sparkles, FileText, Calendar } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Layout() {
  const location = useLocation();

  const mobileLinks = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Generate', path: '/generate', icon: Sparkles },
    { name: 'Script', path: '/script', icon: FileText },
    { name: 'Schedule', path: '/schedule', icon: Calendar },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-on-surface text-surface rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 transition-transform z-40 hidden md:flex">
        <HelpCircle className="w-6 h-6" />
      </button>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest border-t border-surface-container-highest px-6 py-3 flex justify-between items-center z-50">
        {mobileLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors",
                isActive ? "text-primary" : "text-on-surface-variant"
              )}
            >
              <Icon className={cn("w-6 h-6", isActive && "fill-primary/10")} />
              <span className={cn("text-[10px] font-medium", isActive && "font-bold")}>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
