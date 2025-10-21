import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const benefits = [
    {
      icon: 'Shield',
      title: 'Конфиденциальность',
      description: 'Полная анонимность и соблюдение профессиональной этики',
    },
    {
      icon: 'Award',
      title: 'Профессионализм',
      description: 'Опытные специалисты с высшим образованием и сертификатами',
    },
    {
      icon: 'Heart',
      title: 'Индивидуальный подход',
      description: 'Персональная программа терапии для каждого клиента',
    },
    {
      icon: 'Calendar',
      title: 'Гибкий график',
      description: 'Удобное время для консультаций, включая вечерние часы',
    },
  ];

  const services = [
    {
      title: 'Индивидуальная терапия',
      description: 'Работа с личными проблемами, тревогой, депрессией, самооценкой',
      price: 'от 3 500 ₽',
    },
    {
      title: 'Семейная терапия',
      description: 'Решение семейных конфликтов, улучшение отношений',
      price: 'от 5 000 ₽',
    },
    {
      title: 'Консультации пар',
      description: 'Помощь в построении здоровых отношений',
      price: 'от 4 500 ₽',
    },
    {
      title: 'Детская психология',
      description: 'Помощь детям и подросткам в сложных ситуациях',
      price: 'от 3 000 ₽',
    },
  ];

  const faqs = [
    {
      question: 'Как проходит первая консультация?',
      answer: 'На первой встрече мы знакомимся, обсуждаем вашу ситуацию и определяем цели терапии. Длительность консультации - 50 минут. Вы можете задавать любые вопросы и решить, подходит ли вам специалист.',
    },
    {
      question: 'Сколько сеансов потребуется?',
      answer: 'Количество сеансов индивидуально и зависит от сложности запроса. В среднем, для решения конкретной проблемы требуется от 5 до 15 встреч. После первой консультации специалист даст вам примерный прогноз.',
    },
    {
      question: 'Гарантируется ли конфиденциальность?',
      answer: 'Абсолютно. Все специалисты центра строго соблюдают профессиональную этику. Информация о клиентах и содержание консультаций остаются конфиденциальными.',
    },
    {
      question: 'Можно ли пройти онлайн-консультацию?',
      answer: 'Да, мы проводим консультации онлайн через защищенные видеосвязи. Эффективность онлайн-терапии сопоставима с очными встречами.',
    },
    {
      question: 'Как выбрать подходящего специалиста?',
      answer: 'Вы можете ознакомиться с профилями наших психологов в разделе "О специалистах". Если сомневаетесь, позвоните нам - мы поможем подобрать специалиста под ваш запрос.',
    },
  ];

  return (
    <div className="flex flex-col">
      
      <main className="flex-grow">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Путь к внутренней гармонии начинается здесь
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Профессиональная психологическая помощь в комфортной и конфиденциальной обстановке. 
                  Мы поможем вам обрести уверенность и душевное равновесие.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Записаться на консультацию
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Узнать больше
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/e412ce10-818a-4e68-b5f6-e55c0c19c7b6/files/e5f56bb1-a6ed-4875-8d4f-35a017fe2849.jpg" 
                  alt="Психологическая консультация" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы создали пространство, где каждый может получить качественную психологическую помощь
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <Icon name={benefit.icon} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Различные виды психотерапии для решения ваших задач
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
                    <Link to="/booking">
                      <Button className="w-full" variant="outline">
                        Записаться
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Все услуги
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/e412ce10-818a-4e68-b5f6-e55c0c19c7b6/files/c00376b7-a35a-4911-a0dd-8341dd39a7f7.jpg" 
                  alt="Гармония и спокойствие" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Начните путь к изменениям уже сегодня
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Обращение к психологу - это проявление силы и заботы о себе. Наши специалисты помогут вам:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Справиться с тревогой и стрессом',
                    'Улучшить отношения с близкими',
                    'Повысить самооценку и уверенность',
                    'Найти жизненные ориентиры',
                    'Разрешить внутренние конфликты',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                        <Icon name="Check" className="text-primary" size={16} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/booking">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Записаться на первую консультацию
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ответы на популярные вопросы о психотерапии
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы сделать первый шаг?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Запишитесь на консультацию прямо сейчас или свяжитесь с нами для получения дополнительной информации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться онлайн
                </Button>
              </Link>
              <a href="tel:+74951234567">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить нам
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;