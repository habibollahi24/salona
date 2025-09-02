import { NavLink } from 'react-router';
import { Switch } from './ui/switch';
import { useTheme } from '@/context/ThemeProvider';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky top-0  backdrop-blur-md z-50 border-1 w-full bg-transparent  ">
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, var(--secondary) 20px, var(--secondary) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, var(--secondary) 30px, var(--secondary) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, var(--secondary) 40px, var(--secondary) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, var(--secondary) 35px, var(--secondary) 36px)
      `,
        }}
      />
      <div className=" ">
        <div className="max-w-[1300px] mx-auto py-6 px-2 flex items-center justify-between">
          <h2 className="text-lg font-light">SalonaBox</h2>
          <nav className="flex gap-x-2 md:gap-x-4 text-base font-light">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium' : ''
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium' : ''
              }
            >
              About
            </NavLink>
          </nav>
          <div className="flex items-center space-x-2 ">
            <Switch
              id="theme-mode"
              checked={theme === 'dark'}
              onCheckedChange={(checked) =>
                setTheme(checked ? 'dark' : 'light')
              }
              className="cursor-pointer"
            />
            <label htmlFor="theme-mode">
              {theme === 'dark' ? (
                <MoonIcon className="stroke-1" />
              ) : (
                <SunIcon className="stroke-1" />
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
