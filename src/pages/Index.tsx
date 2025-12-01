import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Стейк Рибай',
      category: 'Говядина',
      price: 1890,
      image: 'https://cdn.poehali.dev/projects/78a3f817-199a-480c-a7b8-ae623457e098/files/7004dd2f-3078-4cee-8f20-dca61ed59a3c.jpg',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Свиная корейка',
      category: 'Свинина',
      price: 890,
      image: 'https://cdn.poehali.dev/projects/78a3f817-199a-480c-a7b8-ae623457e098/files/726aa8b9-76f8-4cfa-bd14-a98a2c92db76.jpg',
      badge: 'Акция'
    },
    {
      id: 3,
      name: 'Куриное филе',
      category: 'Птица',
      price: 490,
      image: 'https://cdn.poehali.dev/projects/78a3f817-199a-480c-a7b8-ae623457e098/files/726aa8b9-76f8-4cfa-bd14-a98a2c92db76.jpg',
      badge: null
    },
    {
      id: 4,
      name: 'Вырезка премиум',
      category: 'Говядина',
      price: 2490,
      image: 'https://cdn.poehali.dev/projects/78a3f817-199a-480c-a7b8-ae623457e098/files/7004dd2f-3078-4cee-8f20-dca61ed59a3c.jpg',
      badge: 'Премиум'
    }
  ];

  const specialOffers = [
    { id: 1, title: 'Скидка 20% на говядину', description: 'При покупке от 3 кг', discount: '20%' },
    { id: 2, title: 'Бесплатная доставка', description: 'При заказе от 5000 ₽', discount: '0₽' },
    { id: 3, title: 'Набор для шашлыка', description: 'Специальная цена', discount: '-30%' }
  ];

  const loyaltyLevels = [
    { level: 'Серебро', discount: '5%', minAmount: 10000, icon: 'Medal' },
    { level: 'Золото', discount: '10%', minAmount: 50000, icon: 'Award' },
    { level: 'Платина', discount: '15%', minAmount: 100000, icon: 'Crown' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Beef" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">PrimeMeat</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveSection('home')} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('catalog')} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Каталог
            </button>
            <button 
              onClick={() => setActiveSection('delivery')} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'delivery' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Доставка
            </button>
            <button 
              onClick={() => setActiveSection('about')} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              О компании
            </button>
            <button 
              onClick={() => setActiveSection('loyalty')} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'loyalty' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Программа лояльности
            </button>
            <button 
              onClick={() => setActiveSection('contacts')} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" className="h-5 w-5" />
            </Button>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      <main>
        {activeSection === 'home' && (
          <>
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/78a3f817-199a-480c-a7b8-ae623457e098/files/7004dd2f-3078-4cee-8f20-dca61ed59a3c.jpg')`
                }}
              />
              <div className="container relative z-10 text-center text-white animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Премиальное мясо<br />для истинных ценителей
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Свежесть, качество и вкус в каждом кусочке
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8" onClick={() => setActiveSection('catalog')}>
                    <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
                    Перейти в каталог
                  </Button>
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-16 bg-muted/50">
              <div className="container">
                <h2 className="text-4xl font-bold text-center mb-12">Специальные предложения</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {specialOffers.map((offer, index) => (
                    <Card 
                      key={offer.id} 
                      className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in border-2 border-primary/20"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="destructive" className="text-lg px-3 py-1">{offer.discount}</Badge>
                          <Icon name="Sparkles" className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-2xl">{offer.title}</CardTitle>
                        <CardDescription className="text-base">{offer.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button className="w-full">Подробнее</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container">
                <h2 className="text-4xl font-bold text-center mb-12">Популярные товары</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map((product, index) => (
                    <Card 
                      key={product.id} 
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        {product.badge && (
                          <Badge className="absolute top-3 right-3 bg-secondary text-white">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.category}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                        <Button size="sm">
                          <Icon name="Plus" className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button size="lg" variant="outline" onClick={() => setActiveSection('catalog')}>
                    Смотреть весь каталог
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'catalog' && (
          <section className="py-16">
            <div className="container">
              <h1 className="text-5xl font-bold mb-8 animate-fade-in">Каталог продукции</h1>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="all">Все товары</TabsTrigger>
                  <TabsTrigger value="beef">Говядина</TabsTrigger>
                  <TabsTrigger value="pork">Свинина</TabsTrigger>
                  <TabsTrigger value="chicken">Птица</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                      <Card 
                        key={product.id} 
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {product.badge && (
                            <Badge className="absolute top-3 right-3 bg-secondary">
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                        <CardHeader>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                          <Button>В корзину</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="beef">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.filter(p => p.category === 'Говядина').map((product) => (
                      <Card key={product.id} className="overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <CardHeader>
                          <CardTitle>{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                          <Button>В корзину</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {activeSection === 'delivery' && (
          <section className="py-16">
            <div className="container max-w-4xl">
              <h1 className="text-5xl font-bold mb-12 animate-fade-in">Доставка</h1>
              
              <div className="mb-12">
                <img 
                  src="https://cdn.poehali.dev/projects/78a3f817-199a-480c-a7b8-ae623457e098/files/491cc36b-8e74-4840-bee4-f8d31e5dc41e.jpg"
                  alt="Доставка"
                  className="w-full h-64 object-cover rounded-lg shadow-lg animate-scale-in"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center animate-fade-in">
                  <CardHeader>
                    <Icon name="Truck" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Быстрая доставка</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Доставим ваш заказ в течение 2-4 часов</p>
                  </CardContent>
                </Card>

                <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <Icon name="Snowflake" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Холодильник</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Специальный транспорт с холодильными камерами</p>
                  </CardContent>
                </Card>

                <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <Icon name="MapPin" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>По всему городу</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Доставляем по всем районам города</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Условия доставки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Бесплатная доставка</p>
                      <p className="text-muted-foreground">При заказе от 5000 ₽</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Стоимость доставки</p>
                      <p className="text-muted-foreground">300 ₽ для заказов до 5000 ₽</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">График работы</p>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="py-16">
            <div className="container max-w-4xl">
              <h1 className="text-5xl font-bold mb-12 animate-fade-in">О компании</h1>
              
              <Card className="mb-8 animate-scale-in">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed mb-4">
                    <strong className="text-primary">PrimeMeat</strong> — это ваш надежный партнер в мире премиального мяса. 
                    Мы работаем с лучшими фермерскими хозяйствами и поставщиками, чтобы обеспечить вас 
                    продукцией высочайшего качества.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Наша миссия — сделать премиальное мясо доступным для каждого, кто ценит качество и вкус. 
                    Мы тщательно отбираем каждый продукт и гарантируем его свежесть.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center animate-fade-in">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <CardTitle>Лет на рынке</CardTitle>
                  </CardHeader>
                </Card>

                <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                    <CardTitle>Довольных клиентов</CardTitle>
                  </CardHeader>
                </Card>

                <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <CardTitle>Видов продукции</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'loyalty' && (
          <section className="py-16 bg-muted/50">
            <div className="container max-w-5xl">
              <h1 className="text-5xl font-bold mb-4 text-center animate-fade-in">Программа лояльности</h1>
              <p className="text-xl text-center text-muted-foreground mb-12">
                Покупайте больше — получайте больше выгод!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {loyaltyLevels.map((level, index) => (
                  <Card 
                    key={level.level} 
                    className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in border-2 border-primary/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <Icon name={level.icon as any} className="h-16 w-16 mx-auto mb-4 text-primary" />
                      <CardTitle className="text-3xl mb-2">{level.level}</CardTitle>
                      <div className="text-4xl font-bold text-primary mb-4">{level.discount}</div>
                      <CardDescription className="text-base">
                        Покупок на сумму от {level.minAmount.toLocaleString()} ₽
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Как это работает?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Регистрируйтесь</p>
                      <p className="text-muted-foreground">Создайте аккаунт и получите карту участника программы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Совершайте покупки</p>
                      <p className="text-muted-foreground">Накапливайте сумму покупок для перехода на новые уровни</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Получайте скидки</p>
                      <p className="text-muted-foreground">Скидка применяется автоматически ко всем вашим заказам</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full">
                    <Icon name="UserPlus" className="mr-2 h-5 w-5" />
                    Присоединиться к программе
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-16">
            <div className="container max-w-4xl">
              <h1 className="text-5xl font-bold mb-12 animate-fade-in">Контакты</h1>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-6">Свяжитесь с нами</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Phone" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Mail" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@primemeat.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="MapPin" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">г. Москва, ул. Мясницкая, д. 15</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Clock" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Режим работы</p>
                        <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <CardTitle className="text-2xl">Напишите нам</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Имя</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Телефон</label>
                        <input 
                          type="tel" 
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Ваше сообщение"
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-foreground text-background py-12 mt-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Beef" className="h-8 w-8" />
                <span className="text-2xl font-bold">PrimeMeat</span>
              </div>
              <p className="text-sm opacity-80">
                Премиальное мясо для истинных ценителей качества
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Говядина</li>
                <li>Свинина</li>
                <li>Птица</li>
                <li>Деликатесы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О компании</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Программа лояльности</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@primemeat.ru</li>
                <li>г. Москва, ул. Мясницкая, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            © 2024 PrimeMeat. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
