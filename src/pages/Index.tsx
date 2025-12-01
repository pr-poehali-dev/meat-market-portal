import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = {
    shashlik: [
      { 
        id: 1, 
        name: 'Шашлык из свиной шеи', 
        price: 520, 
        weight: '250 г.', 
        description: 'Попробуйте наш шашлык из свиной шеи! Сочное мясо, предварительно замаринованное с ароматными специями, луком и зеленью, приготовлено на мангале. Это блюдо относится к категории Блюда на мангале и точно придётся по вкусу любителям классических шашлыков',
        image: 'https://cdn.poehali.dev/files/9bdb683a-cf99-4637-872e-07e91b038668.png'
      },
      { 
        id: 2, 
        name: 'Шашлык из свиных ребер', 
        price: 450, 
        weight: '250 г.', 
        description: 'Сочные свиные ребра, приготовленные на мангале до румяной аппетитной корочки. Фирменный маринад придает неповторимый вкус этому блюду. Попробуйте!',
        image: 'https://cdn.poehali.dev/files/9bdb683a-cf99-4637-872e-07e91b038668.png'
      },
      { 
        id: 3, 
        name: 'Шашлык из свиной корейки стейк', 
        price: 750, 
        weight: '400 г.', 
        description: 'Нежная свиная корейка, прожаренная до идеальной сочности. Эти стейки, пожаренные на мангале, никого не оставят равнодушным!',
        image: 'https://cdn.poehali.dev/files/9bdb683a-cf99-4637-872e-07e91b038668.png'
      },
      { 
        id: 4, 
        name: 'Шашлык из куриной голени', 
        price: 400, 
        weight: '250 г.', 
        description: 'Куриные ножки с хрустящей корочкой и сочной мякотью — классика мангала. В компании с лавашом, свежим луком и пикантным соусом они становятся отличным сытным блюдом. Закажите шашлык из куриной голени с доставкой или на вынос!',
        image: 'https://cdn.poehali.dev/files/74fb3c09-0eff-470e-ba3e-f6e38f250c1a.png'
      },
      { 
        id: 5, 
        name: 'Шашлык из куриного филе', 
        price: 420, 
        weight: '250 г.', 
        description: 'Мягкое куриное филе с лёгкой золотистой корочкой — нежное и сочное в каждом кусочке. Шашлык из курицы любят и взрослые, и дети. Это прекрасное блюдо для тех, кто считает калории. Подаётся с лавашом, маринованным луком и шашлычным соусом.',
        image: 'https://cdn.poehali.dev/files/74fb3c09-0eff-470e-ba3e-f6e38f250c1a.png'
      },
      { 
        id: 6, 
        name: 'Шашлык из куриных крылышек', 
        price: 400, 
        weight: '250 г.', 
        description: 'Аппетитные куриные крылышки с золотистой корочкой и насыщенным ароматом специй. Фирменный маринад придает неповторимый пикантный вкус, который запомнится вам надолго!',
        image: 'https://cdn.poehali.dev/files/74fb3c09-0eff-470e-ba3e-f6e38f250c1a.png'
      },
      { 
        id: 7, 
        name: 'Люля-кебаб из курицы', 
        price: 450, 
        weight: '250 г.', 
        description: 'Сочный куриный люля-кебаб с ароматными специями, приготовленный на углях. Идеально подходит для тех, кто любит нежное мясо с лёгкой дымной ноткой.',
        image: 'https://cdn.poehali.dev/files/74fb3c09-0eff-470e-ba3e-f6e38f250c1a.png'
      },
      { 
        id: 8, 
        name: 'Шашлык из бараньей мякоти', 
        price: 720, 
        weight: '250 г.', 
        description: 'Нежные кусочки отборной бараньей мякоти, пропитанные специями и ароматом мангала. В каждом кусочке — настоящий вкус кавказского шашлыка.',
        image: 'https://cdn.poehali.dev/files/3a455f63-58ec-4afa-929c-04e46d94532b.png'
      },
      { 
        id: 9, 
        name: 'Шашлык из бараньей корейки', 
        price: 830, 
        weight: '250 г.', 
        description: 'Нежная баранья корейка, которая тает во рту после жарки на мангале. Вкус мяса дополняют свежий лаваш, острый лук и пикантный шашлычный соус. Отличный выбор для тех, кто ценит насыщенный мясной вкус.',
        image: 'https://cdn.poehali.dev/files/3a455f63-58ec-4afa-929c-04e46d94532b.png'
      },
      { 
        id: 10, 
        name: 'Шашлык из бараньих ребер', 
        price: 550, 
        weight: '250 г.', 
        description: 'Шашлык из бараньих рёбер готовится из мяса молодого барашка и маринуется по фирменному рецепту с пряностями и свежим луком. Благодаря такому рецепту рёбра получаются мягкими, сочными и сохраняют свой натуральный вкус. Отлично подходит и как основное блюдо, и как аппетитная закуска к пенному.',
        image: 'https://cdn.poehali.dev/files/3a455f63-58ec-4afa-929c-04e46d94532b.png'
      },
      { 
        id: 11, 
        name: 'Люля-кебаб из баранины', 
        price: 590, 
        weight: '250 г.', 
        description: 'Люля-кебаб из баранины — это ароматное блюдо из рубленого мяса барашка с луком и набором восточных специй. На мангале люля обретает аппетистную корочку, внутри остаётся нежным и сочным. Пряный вкус баранины и дымок углей создают яркое, запоминающееся сочетание.',
        image: 'https://cdn.poehali.dev/files/3a455f63-58ec-4afa-929c-04e46d94532b.png'
      },
      { 
        id: 12, 
        name: 'Люля-кебаб из говядины', 
        price: 550, 
        weight: '250 г.', 
        description: 'Люля-кебаб из говядины — это сочный фарш из отборного мяса, смешанный с луком и специями, нанизанный на шампур и обжаренный на углях. Благодаря такому способу приготовления он получается нежным внутри и слегка поджаренным снаружи. Аромат дымка и пряности делают этот люля-кебаб особенно вкусным и сытным.',
        image: 'https://cdn.poehali.dev/files/3a455f63-58ec-4afa-929c-04e46d94532b.png'
      },
      { 
        id: 13, 
        name: 'Шашлык по-карски', 
        price: 620, 
        weight: '250 г.', 
        description: 'Шашлык по-карски — это сочная свиная шея, приготовленная вместе с болгарским перцем, помидорами и луком. К мясу подаём свежий лаваш, маринованный лук и ароматный шашлычный соус. Простое и вкусное блюдо для настоящего застолья.',
        image: 'https://cdn.poehali.dev/files/e2d945d9-02c3-461a-bede-8edc80fb4a92.png'
      },
      { 
        id: 14, 
        name: 'Шашлык из куриного бедра', 
        price: 420, 
        weight: '250 г.', 
        description: 'Шашлык из нежной части курочки, бедро без кости',
        image: 'https://cdn.poehali.dev/files/e2d945d9-02c3-461a-bede-8edc80fb4a92.png'
      }
    ],
    shawarma: [],
    hot: [],
    sauces: []
  };

  const specialOffers = [
    { id: 1, title: 'Комбо "Шашлычное"', description: 'Шашлык + гарнир + напиток', discount: '-20%' },
    { id: 2, title: 'Бесплатная доставка', description: 'При заказе от 1500 ₽', discount: '0₽' },
    { id: 3, title: 'Счастливые часы', description: 'Скидка 15% с 14:00 до 16:00', discount: '-15%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Ареал</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveSection('home')} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('menu')} 
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'menu' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Меню
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
              О нас
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
            <Button>Заказать</Button>
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
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/78a3f817-199a-480c-a7b8-ae623457e098/files/744f0912-3e0a-4bd7-a7d8-a7454c3226f1.jpg')`
                }}
              />
              <div className="container relative z-10 text-center text-white animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Кавказская кухня<br />с доставкой на дом
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Шашлыки на углях, сочная шаурма и горячие блюда
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8" onClick={() => setActiveSection('menu')}>
                    <Icon name="UtensilsCrossed" className="mr-2 h-5 w-5" />
                    Смотреть меню
                  </Button>
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    +7 (495) 123-45-67
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
                        <Button className="w-full">Заказать</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container">
                <h2 className="text-4xl font-bold text-center mb-12">Популярные блюда</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {menuItems.shashlik.slice(0, 4).map((item, index) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        {index === 0 && <Badge className="absolute top-3 right-3 bg-secondary text-white">Хит</Badge>}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>{item.weight}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                        <Button size="sm" className="rounded-full">
                          <Icon name="Plus" className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Button size="lg" variant="outline" onClick={() => setActiveSection('menu')}>
                    Полное меню
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'menu' && (
          <section className="py-16">
            <div className="container">
              <h1 className="text-5xl font-bold mb-8 animate-fade-in">Меню</h1>
              
              <Tabs defaultValue="shashlik" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="shashlik">Шашлыки</TabsTrigger>
                  <TabsTrigger value="shawarma">Шаурма</TabsTrigger>
                  <TabsTrigger value="hot">Горячие блюда</TabsTrigger>
                  <TabsTrigger value="sauces">Соусы</TabsTrigger>
                </TabsList>
                
                <TabsContent value="shashlik" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuItems.shashlik.map((item, index) => (
                      <Card 
                        key={item.id} 
                        className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-2"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-start justify-between mb-3">
                            <CardTitle className="text-2xl">{item.name}</CardTitle>
                            <div className="flex gap-2">
                              <button className="hover:text-primary transition-colors">
                                <Icon name="ExternalLink" className="h-5 w-5 text-primary" />
                              </button>
                              <button className="hover:text-primary transition-colors">
                                <Icon name="Heart" className="h-5 w-5 text-muted-foreground hover:text-red-500" />
                              </button>
                            </div>
                          </div>
                          <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                          <Badge variant="outline" className="w-fit mt-3 border-primary text-primary">{item.weight}</Badge>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center pt-6">
                          <span className="text-3xl font-bold text-primary">{item.price} ₽</span>
                          <Button size="lg" className="rounded-full w-14 h-14 p-0">
                            <Icon name="Plus" className="h-6 w-6" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="shawarma" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.shawarma.map((item, index) => (
                      <Card 
                        key={item.id} 
                        className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-start justify-between">
                            <span>{item.name}</span>
                            <Icon name="Cookie" className="h-5 w-5 text-primary flex-shrink-0" />
                          </CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                          <Badge variant="secondary" className="w-fit mt-2">{item.weight}</Badge>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                          <Button>В корзину</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="hot" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.hot.map((item, index) => (
                      <Card 
                        key={item.id} 
                        className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-start justify-between">
                            <span>{item.name}</span>
                            <Icon name="ChefHat" className="h-5 w-5 text-primary flex-shrink-0" />
                          </CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                          <Badge variant="secondary" className="w-fit mt-2">{item.weight}</Badge>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                          <Button>В корзину</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="sauces" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.sauces.map((item, index) => (
                      <Card 
                        key={item.id} 
                        className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-start justify-between">
                            <span>{item.name}</span>
                            <Icon name="Droplet" className="h-5 w-5 text-primary flex-shrink-0" />
                          </CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                          <Badge variant="secondary" className="w-fit mt-2">{item.weight}</Badge>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
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

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center animate-fade-in">
                  <CardHeader>
                    <Icon name="Clock" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>45-60 минут</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Среднее время доставки по городу</p>
                  </CardContent>
                </Card>

                <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <Icon name="Truck" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>Бесплатно от 1500₽</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Доставка при заказе от 1500 рублей</p>
                  </CardContent>
                </Card>

                <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <Icon name="MapPin" className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle>По всему городу</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Доставляем во все районы</p>
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
                      <p className="text-muted-foreground">При заказе от 1500 ₽</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Стоимость доставки</p>
                      <p className="text-muted-foreground">200 ₽ для заказов до 1500 ₽</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">График работы</p>
                      <p className="text-muted-foreground">Ежедневно с 11:00 до 23:00</p>
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
              <h1 className="text-5xl font-bold mb-12 animate-fade-in">О нас</h1>
              
              <Card className="mb-8 animate-scale-in">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed mb-4">
                    <strong className="text-primary">Кафе "Ареал"</strong> — это место, где традиции кавказской кухни 
                    встречаются с современным сервисом. Мы готовим шашлыки на настоящих углях, 
                    используем только свежие продукты и следуем аутентичным рецептам.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Наша команда поваров имеет многолетний опыт работы и знает все секреты приготовления 
                    идеального шашлыка, ароматного плова и сочной шаурмы.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center animate-fade-in">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">7+</div>
                    <CardTitle>Лет работы</CardTitle>
                  </CardHeader>
                </Card>

                <Card className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">15k+</div>
                    <CardTitle>Довольных гостей</CardTitle>
                  </CardHeader>
                </Card>

                <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <CardTitle>Блюд в меню</CardTitle>
                  </CardHeader>
                </Card>
              </div>
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
                        <p className="text-muted-foreground">info@cafe-arel.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="MapPin" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">г. Москва, ул. Центральная, д. 25</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Clock" className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Режим работы</p>
                        <p className="text-muted-foreground">Ежедневно с 11:00 до 23:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
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
                        <label className="text-sm font-medium mb-2 block">Комментарий</label>
                        <textarea 
                          rows={4}
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Ваш комментарий к заказу"
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Отправить заявку
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
                <Icon name="Flame" className="h-8 w-8" />
                <span className="text-2xl font-bold">Ареал</span>
              </div>
              <p className="text-sm opacity-80">
                Кавказская кухня с доставкой на дом
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Меню</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Шашлыки</li>
                <li>Шаурма</li>
                <li>Горячие блюда</li>
                <li>Соусы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Акции</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@cafe-arel.ru</li>
                <li>г. Москва, ул. Центральная, 25</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            © 2024 Кафе "Ареал". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;