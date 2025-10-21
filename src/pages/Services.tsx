import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "User",
      title: "Индивидуальная консультация",
      duration: "50 минут",
      price: "от 3000 ₽",
      description: "Личная встреча с психологом для работы над вашими целями",
      benefits: ["Конфиденциальность", "Индивидуальный подход", "Гибкий график"]
    },
    {
      icon: "Users",
      title: "Семейная терапия",
      duration: "90 минут",
      price: "от 5000 ₽",
      description: "Работа с семейными отношениями и конфликтами",
      benefits: ["Улучшение коммуникации", "Решение конфликтов", "Укрепление связи"]
    },
    {
      icon: "Heart",
      title: "Парная терапия",
      duration: "90 минут",
      price: "от 5000 ₽",
      description: "Помощь парам в преодолении трудностей в отношениях",
      benefits: ["Восстановление доверия", "Развитие близости", "Общие цели"]
    },
    {
      icon: "Users",
      title: "Групповая терапия",
      duration: "120 минут",
      price: "от 1500 ₽",
      description: "Работа в группе единомышленников под руководством терапевта",
      benefits: ["Поддержка группы", "Обмен опытом", "Доступная цена"]
    }
  ];

  const faqs = [
    {
      question: "Как проходит первая консультация?",
      answer: "Первая встреча — это знакомство. Вы расскажете о том, что вас беспокоит, а психолог объяснит, как будет строиться работа. Это безопасное пространство, где вы можете говорить открыто."
    },
    {
      question: "Сколько длится курс терапии?",
      answer: "Длительность терапии индивидуальна. Некоторые вопросы решаются за 5-10 встреч, другие требуют более длительной работы. Вы всегда можете обсудить прогресс с психологом."
    },
    {
      question: "Как проходят онлайн-сессии?",
      answer: "Онлайн-консультации проводятся через безопасные видеоплатформы. Вам нужно тихое место, стабильный интернет и устройство с камерой. Эффективность онлайн-терапии не уступает очной."
    },
    {
      question: "Конфиденциальны ли консультации?",
      answer: "Да, абсолютно. Психологи соблюдают этический кодекс и не разглашают информацию о клиентах. Исключение — ситуации угрозы жизни, о которых вас предупредят."
    },
    {
      question: "Можно ли сменить специалиста?",
      answer: "Конечно. Важно, чтобы вам было комфортно с психологом. Если контакт не установился, вы всегда можете выбрать другого специалиста без объяснения причин."
    }
  ];

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональная психологическая помощь в удобном для вас формате
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-purple-100 hover:border-primary transition-all hover-scale"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center shrink-0">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-t pt-4">
                    <span className="flex items-center gap-2 text-gray-600">
                      <Icon name="Clock" size={16} />
                      {service.duration}
                    </span>
                    <span className="text-xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-700 mb-2 text-sm">Преимущества:</p>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <Icon name="Check" size={16} className="text-primary shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => navigate('/booking')}
                  >
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-2 border-purple-100"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Services;
