import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const achievements = [
    { title: "Олимпиады по математике", count: 47, color: "bg-school-orange" },
    { title: "Конкурсы по русскому языку", count: 23, color: "bg-school-yellow" },
    { title: "Научные проекты", count: 31, color: "bg-school-blue" },
    { title: "Спортивные достижения", count: 19, color: "bg-school-green" }
  ];

  const news = [
    { date: "15 сентября", title: "Начало нового учебного года", category: "Важное" },
    { date: "12 сентября", title: "Победа в региональной олимпиаде", category: "Достижения" },
    { date: "8 сентября", title: "День открытых дверей", category: "События" }
  ];

  const teachers = [
    { name: "Анна Петровна Иванова", subject: "Математика", experience: "15 лет" },
    { name: "Сергей Александрович Волков", subject: "Физика", experience: "12 лет" },
    { name: "Мария Викторовна Смирнова", subject: "Русский язык", experience: "18 лет" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-school-orange to-school-yellow rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Школа №555</h1>
                <p className="text-sm text-gray-600">Образование нового поколения</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-school-orange transition-colors">О школе</a>
              <a href="#news" className="text-gray-700 hover:text-school-orange transition-colors">Новости</a>
              <a href="#teachers" className="text-gray-700 hover:text-school-orange transition-colors">Учителя</a>
              <a href="#students" className="text-gray-700 hover:text-school-orange transition-colors">Ученики</a>
              <a href="#contacts" className="text-gray-700 hover:text-school-orange transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Добро пожаловать в<br />
                <span className="bg-gradient-to-r from-school-orange to-school-yellow bg-clip-text text-transparent">
                  Школу №555
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы гордимся нашими учениками и их выдающимися достижениями в олимпиадах, 
                конкурсах и научных проектах. Наша школа — это место, где рождаются будущие лидеры!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-school-orange hover:bg-school-orange/90 text-white">
                  <Icon name="Users" size={20} className="mr-2" />
                  Поступить в школу
                </Button>
                <Button variant="outline" size="lg" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white">
                  <Icon name="Play" size={20} className="mr-2" />
                  Виртуальная экскурсия
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e7b4c148-ca98-4cd8-9443-829ff58dbdfc.jpg" 
                alt="Школа №555" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-school-green to-school-blue rounded-full flex items-center justify-center">
                    <Icon name="Trophy" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">120+</p>
                    <p className="text-sm text-gray-600">Наград и достижений</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши достижения</h3>
            <p className="text-lg text-gray-600">Гордимся успехами наших учеников</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <span className="text-2xl font-bold text-white">{achievement.count}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-center mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 text-center">призовых мест</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-school-lavender/10 to-school-turquoise/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/26d6a889-ce30-4def-a5d7-280945be64cc.jpg" 
                alt="Ученики школы" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">О нашей школе</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Школа №555 — это современное образовательное учреждение с богатой историей и 
                инновационными подходами к обучению. Мы создаем условия для всестороннего 
                развития каждого ученика.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-school-green rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Современные образовательные программы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-school-blue rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Квалифицированные педагоги</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-school-orange rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700">Индивидуальный подход к каждому ученику</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Новости школы</h3>
            <p className="text-lg text-gray-600">Следите за нашими событиями</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge variant="secondary" className="bg-school-yellow/20 text-school-orange border-0">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <Button variant="ghost" size="sm" className="text-school-orange hover:text-school-orange/80 p-0">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши учителя</h3>
            <p className="text-lg text-gray-600">Профессиональная команда педагогов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-school-lavender to-school-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{teacher.name}</h4>
                  <p className="text-school-orange font-medium mb-1">{teacher.subject}</p>
                  <p className="text-sm text-gray-600">Стаж: {teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section id="students" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши ученики</h3>
            <p className="text-lg text-gray-600">Гордимся достижениями каждого</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-school-orange to-school-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">850</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Учеников</h4>
              <p className="text-sm text-gray-600">в нашей школе</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-school-blue to-school-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">34</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Класса</h4>
              <p className="text-sm text-gray-600">с 1 по 11</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-school-lavender to-school-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">96%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Поступление</h4>
              <p className="text-sm text-gray-600">в ВУЗы</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-school-green to-school-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">120+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Наград</h4>
              <p className="text-sm text-gray-600">за последний год</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-school-blue/10 to-school-green/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-lg text-gray-600">Мы всегда рады общению</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-school-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Адрес</h4>
              <p className="text-gray-600">ул. Образования, 555<br />Москва, 101000</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-school-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 555-55-55<br />+7 (495) 555-55-56</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-school-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">info@school555.edu<br />director@school555.edu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-school-orange to-school-yellow rounded-full flex items-center justify-center">
                  <Icon name="GraduationCap" size={16} className="text-white" />
                </div>
                <span className="font-bold text-xl">Школа №555</span>
              </div>
              <p className="text-gray-400">Образование нового поколения для успешного будущего</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О школе</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#teachers" className="hover:text-white transition-colors">Учителя</a></li>
                <li><a href="#students" className="hover:text-white transition-colors">Ученики</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Поступление</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Программы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Расписание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-school-orange rounded-full flex items-center justify-center hover:bg-school-orange/80 transition-colors">
                  <Icon name="Instagram" size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-school-blue rounded-full flex items-center justify-center hover:bg-school-blue/80 transition-colors">
                  <Icon name="Facebook" size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-school-green rounded-full flex items-center justify-center hover:bg-school-green/80 transition-colors">
                  <Icon name="Youtube" size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Школа №555. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}