import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/specialists', label: 'О специалистах' },
    { to: '/services', label: 'Услуги' },
    { to: '/booking', label: 'Онлайн-запись' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Icon name="Heart" className="text-primary" size={24} />
            </div>
            <span className="text-xl font-semibold">Центр психологии</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+74951234567" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground">
              <Icon name="Phone" size={18} />
              <span>+7 (495) 123-45-67</span>
            </a>
            <Link to="/booking">
              <Button className="bg-primary hover:bg-primary/90">
                Записаться
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-foreground/80 hover:text-foreground">
                    {link.label}
                  </Button>
                </Link>
              ))}
              <a href="tel:+74951234567" className="flex items-center space-x-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                <Icon name="Phone" size={18} />
                <span>+7 (495) 123-45-67</span>
              </a>
              <div className="px-4 pt-2">
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Записаться
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
