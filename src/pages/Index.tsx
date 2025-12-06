import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const houses = [
  {
    id: 1,
    title: 'Дом с баней Осина',
    image: 'https://cdn.poehali.dev/files/d9c95fd0-6bb6-4a81-92fd-db840681974f.jpeg',
    price: '15 000 ₽',
    guests: 4,
    bedrooms: 1,
    rating: 4.9,
    reviews: 42
  },
  {
    id: 2,
    title: 'Семейный люкс номер',
    image: 'https://cdn.poehali.dev/projects/7f3a8850-278f-4553-b2e5-a08ed597819e/files/3cbd383f-b98b-4056-a700-3fbbfedb5fab.jpg',
    price: '12 000 ₽',
    guests: 6,
    bedrooms: 3,
    rating: 4.8,
    reviews: 38
  },
  {
    id: 3,
    title: 'Дом с сауной Синюха',
    image: 'https://cdn.poehali.dev/projects/7f3a8850-278f-4553-b2e5-a08ed597819e/files/936d3b0c-53fb-4ece-968f-9427785b2b59.jpg',
    price: '18 000 ₽',
    guests: 10,
    bedrooms: 5,
    rating: 5.0,
    reviews: 56
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Анна Петрова',
    rating: 5,
    text: 'Потрясающее место для отдыха с семьёй! Всё было идеально чисто, дом оборудован всем необходимым. Обязательно вернёмся!',
    date: 'Октябрь 2024'
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    rating: 5,
    text: 'Отличная локация для выходных. Природа вокруг невероятная, а дом современный и комфортный. Спасибо команде Дагар!',
    date: 'Сентябрь 2024'
  },
  {
    id: 3,
    name: 'Елена Волкова',
    rating: 4,
    text: 'Очень красивый дом с панорамными окнами. Закаты из гостиной просто волшебные. Единственный минус - далеко от магазина.',
    date: 'Август 2024'
  }
];

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={28} className="text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Дагар
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('houses')} className="hover:text-primary transition-colors">Дома</button>
            <button onClick={() => scrollToSection('booking')} className="hover:text-primary transition-colors">Бронирование</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            Забронировать
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Пространство для отдыха<br />в сердце природы
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Современные дома в аренду для незабываемого отдыха с семьёй и друзьями
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform" onClick={() => scrollToSection('houses')}>
              <Icon name="Search" className="mr-2" size={20} />
              Выбрать дом
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:scale-105 transition-transform" onClick={() => scrollToSection('contact')}>
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="houses" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Наши дома
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.map((house, index) => (
              <Card key={house.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden group">
                  <img 
                    src={house.image} 
                    alt={house.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{house.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Дом с баней Осина</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      {house.guests} гостей
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Bed" size={16} />
                      {house.bedrooms} спальни
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{house.price}</span>
                      <span className="text-muted-foreground"> / ночь</span>
                    </div>
                    <Button className="bg-gradient-to-r from-secondary to-accent">
                      Подробнее
                    </Button>
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">
                    {house.reviews} отзывов
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Бронирование
          </h2>
          <Card className="p-8 shadow-xl border-0">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <Label className="text-lg font-semibold mb-2 block">Выберите даты</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border w-full"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="guests" className="text-lg font-semibold">Количество гостей</Label>
                  <Input id="guests" type="number" placeholder="2" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="house" className="text-lg font-semibold">Выберите дом</Label>
                  <select id="house" className="w-full mt-2 px-3 py-2 border rounded-md">
                    {houses.map(house => (
                      <option key={house.id} value={house.id}>{house.title}</option>
                    ))}
                  </select>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Детали бронирования</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>3 ночи</span>
                      <span className="font-semibold">45 000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Сервисный сбор</span>
                      <span className="font-semibold">2 250 ₽</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between text-lg font-bold">
                      <span>Итого</span>
                      <span className="text-primary">47 250 ₽</span>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Отзывы гостей
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card key={review.id} className="p-6 hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-white to-gray-50 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <Icon name="Quote" size={32} className="text-primary opacity-20" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших пожеланиях..." className="mt-1 min-h-[120px]" />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить
                </Button>
              </form>
            </Card>
            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (913) 065-59-00</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">info@dagar.ru</p>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Адрес</h4>
                    <p className="text-muted-foreground">Московская область,<br />Дмитровский район</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} className="text-primary" />
                <span className="text-xl font-bold">Дагар</span>
              </div>
              <p className="text-gray-400">Пространство для отдыха в сердце природы</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-gray-400">
                <button onClick={() => scrollToSection('home')} className="block hover:text-primary transition-colors">Главная</button>
                <button onClick={() => scrollToSection('houses')} className="block hover:text-primary transition-colors">Дома</button>
                <button onClick={() => scrollToSection('booking')} className="block hover:text-primary transition-colors">Бронирование</button>
                <button onClick={() => scrollToSection('reviews')} className="block hover:text-primary transition-colors">Отзывы</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (913) 065-59-00</p>
                <p>info@dagar.ru</p>
                <p>Московская область</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Дагар. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;