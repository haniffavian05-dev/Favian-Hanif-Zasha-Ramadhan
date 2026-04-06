import { Link, useLocation } from 'react-router-dom';
import { User, Rocket } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Generate', path: '/generate' },
    { name: 'Script', path: '/script' },
    { name: 'Schedule', path: '/schedule' },
  ];

  return (
    <nav className="bg-surface dark:bg-slate-900 flex justify-between items-center w-full px-8 py-4 max-w-full sticky top-0 z-50">
      <div className="text-2xl font-bold tracking-tighter text-primary dark:text-primary-fixed font-headline">
        KontenLab
      </div>
      <div className="hidden md:flex items-center gap-8 font-headline text-sm tracking-tight">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "font-medium transition-colors duration-200",
              location.pathname === link.path
                ? "text-primary dark:text-primary-fixed font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden lg:block text-on-surface-variant font-medium text-sm">Halo, Creator 👋</span>
        <Link 
          to="/generate"
          className="primary-gradient text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/20 active:scale-95 transition-transform flex items-center gap-2"
        >
          Generate Ide <Rocket className="w-4 h-4" />
        </Link>
        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
          <User className="text-on-surface-variant w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
