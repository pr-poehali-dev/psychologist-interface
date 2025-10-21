import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const therapyTypes = [
    {
      icon: "Brain",
      title: "Когнитивно-поведенческая терапия",
      description: "Помогает изменить деструктивные мысли и поведение"
    },
    {
      icon: "Heart",
      title: "Гештальт-терапия",
      description: "Работа с эмоциями и осознанностью в настоящем моменте"
    },
    {
      icon: "Users",
      title: "Семейная терапия",
      description: "Решение конфликтов и улучшение отношений в семье"
    },
    {
      icon: "Sparkles",
      title: "Арт-терапия",
      description: "Самовыражение через творчество и искусство"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Путь к гармонии начинается здесь
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональная психологическая помощь онлайн. Найдите своего специалиста и запишитесь на консультацию в удобное время.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/booking')}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all hover-scale"
              >
                Записаться на консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/specialists')}
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 transition-all"
              >
                Выбрать специалиста
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Виды психотерапии
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapyTypes.map((type, index) => (
              <Card 
                key={index} 
                className="border-2 border-purple-100 hover:border-primary transition-all hover-scale cursor-pointer"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={type.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600 text-lg">Довольных клиентов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600 text-lg">Квалифицированных специалистов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-primary mb-2">5 лет</div>
              <p className="text-gray-600 text-lg">Опыта работы</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Готовы сделать первый шаг?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Запишитесь на консультацию прямо сейчас — это просто и безопасно
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/booking')}
            className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all hover-scale"
          >
            Начать путь к себе
            <Icon name="Sparkles" className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
