import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const PillNav = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projetos', path: '/projetos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1 bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ease-in-out",
              "hover:bg-muted/100 hover:text-foreground",
              isActive(item.path)
                ? "bg-blue-700 text-white shadow-sm hover:bg-blue-800 hover:shadow-md hover:text-white"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default PillNav;
