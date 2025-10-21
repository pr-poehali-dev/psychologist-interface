import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Specialists = () => {

  const specialists = [
    {
      name: "Анна Петрова",
      specialty: "Когнитивно-поведенческая терапия",
      experience: "12 лет",
      education: "МГУ, клинический психолог",
      specializations: ["Тревожность", "Депрессия", "Панические атаки"],
      image: "👩‍⚕️"
    },
    {
      name: "Дмитрий Соколов",
      specialty: "Гештальт-терапия",
      experience: "8 лет",
      education: "СПбГУ, психотерапевт",
      specializations: ["Самооценка", "Личностный рост", "Отношения"],
      image: "👨‍⚕️"
    },
    {
      name: "Елена Волкова",
      specialty: "Семейная терапия",
      experience: "15 лет",
      education: "МГППУ, семейный психолог",
      specializations: ["Семейные конфликты", "Детско-родительские отношения", "Развод"],
      image: "👩‍⚕️"
    },
    {
      name: "Михаил Орлов",
      specialty: "Психоанализ",
      experience: "10 лет",
      education: "МГУ, психоаналитик",
      specializations: ["Глубинные страхи", "Травмы", "Самопознание"],
      image: "👨‍⚕️"
    }
  ];

  return (
    <div className="py-12 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Наши специалисты
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Команда квалифицированных психологов с многолетним опытом работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialists.map((specialist, index) => (
            <Card 
              key={index} 
              className="border-2 border-purple-100 hover:border-primary transition-all hover-scale overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50 pb-6">
                <div className="flex items-start gap-4">
                  <div className="text-6xl">{specialist.image}</div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{specialist.name}</CardTitle>
                    <CardDescription className="text-base text-primary font-medium">
                      {specialist.specialty}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Icon name="GraduationCap" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-700">Образование</p>
                      <p className="text-gray-600">{specialist.education}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Icon name="Award" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium text-gray-700">Опыт работы</p>
                      <p className="text-gray-600">{specialist.experience}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-700 mb-2">Специализации</p>
                    <div className="flex flex-wrap gap-2">
                      {specialist.specializations.map((spec, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="bg-purple-100 text-primary hover:bg-purple-200"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to="/booking">
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                      Записаться на консультацию
                      <Icon name="Calendar" className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialists;