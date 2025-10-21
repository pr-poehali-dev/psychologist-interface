import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      link: "tel:+74951234567"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@psy-help.ru",
      link: "mailto:info@psy-help.ru"
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "Москва, ул. Примерная, д. 10",
      link: "#"
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Вс: 09:00 - 21:00",
      link: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Сообщение отправлено!",
      description: "Мы ответим вам в ближайшее время",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="border-2 border-purple-100 hover:border-primary transition-all hover-scale text-center"
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                {item.link !== "#" ? (
                  <a 
                    href={item.link}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-purple-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Icon name="MessageSquare" className="text-primary" />
                Форма обратной связи
              </CardTitle>
              <CardDescription className="text-base">
                Напишите нам, и мы ответим в течение 24 часов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя *</Label>
                  <Input
                    id="contact-name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Тема</Label>
                  <Input
                    id="subject"
                    placeholder="О чем ваш вопрос?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message">Сообщение *</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6"
                >
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="HelpCircle" className="text-primary" />
                  Часто задаваемые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-gray-800 mb-1">Как быстро вы отвечаете?</p>
                  <p className="text-gray-600 text-sm">Обычно в течение 1-2 часов в рабочее время</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Можно ли позвонить вечером?</p>
                  <p className="text-gray-600 text-sm">Да, мы работаем до 21:00 каждый день</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Есть ли очные консультации?</p>
                  <p className="text-gray-600 text-sm">Да, по адресу в Москве, запись по телефону</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" />
                  Мы в социальных сетях
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="w-12 h-12 border-2 border-purple-100 hover:border-primary hover:bg-primary/10"
                  >
                    <span className="text-2xl">📘</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="w-12 h-12 border-2 border-purple-100 hover:border-primary hover:bg-primary/10"
                  >
                    <span className="text-2xl">📷</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="w-12 h-12 border-2 border-purple-100 hover:border-primary hover:bg-primary/10"
                  >
                    <span className="text-2xl">✈️</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="w-12 h-12 border-2 border-purple-100 hover:border-primary hover:bg-primary/10"
                  >
                    <span className="text-2xl">📺</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
