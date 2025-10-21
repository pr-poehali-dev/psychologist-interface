import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Icon name="Heart" className="text-primary" size={24} />
              </div>
              <span className="text-xl font-semibold">Центр психологии</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Профессиональная психологическая помощь для вас и вашей семьи. 
              Мы помогаем людям обрести гармонию и внутреннее равновесие.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/specialists" className="hover:text-primary transition-colors">
                  О специалистах
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-primary transition-colors">
                  Онлайн-запись
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                <span>г. Москва, ул. Примерная, д. 10</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={18} className="flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={18} className="flex-shrink-0" />
                <a href="mailto:info@psycenter.ru" className="hover:text-primary transition-colors">
                  info@psycenter.ru
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Clock" size={18} className="flex-shrink-0" />
                <span>Пн-Пт: 9:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Центр психологии. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
