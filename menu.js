// menu.js
const dishes = [
    { keyword: 'gaspacho', name: 'Гаспачо', price: 300, category: 'soup', count: '250 г', image: 'gazpacho.jpg', kind: 'вегетарианский' },
    { keyword: 'mushroom_soup', name: 'Грибной суп-пюре', price: 185, category: 'soup', count: '330 г', image: 'mushroom_soup.jpg', kind: 'вегетарианский' },
    { keyword: 'chicken', name: 'chicken', price: 330, category: 'soup', count: '350 г', image: 'chicken.jpg', kind: 'мясной' },
    { keyword: 'norwegian', name: 'Норвежский суп', price: 270, category: 'soup', count: '330 г', image: 'norwegian_soup.jpg', kind: 'мясной' },
    { keyword: 'ramen', name: 'Рамен', price: 375, category: 'soup', count: '425 г', image: 'ramen.jpg', kind: 'рыбный' },
    { keyword: 'tomyum', name: 'Том ям с креветками', price: 650, category: 'soup', count: '500 г', image: 'tomyum.jpg', kind: 'рыбный' },
    { keyword: 'chickencutletsandmashedpotatoes', name: 'Котлеты из курицы с картофельным пюре', price: 225, category: 'main_course', count: '280 г', image: 'chickencutletsandmashedpotatoes.jpg', kind: 'мясное' },
    { keyword: 'fishrice', name: 'Рыбная котлета с рисом и спажей', price: 320, category: 'main_course', count: '270 г', image: 'fishrice.jpg', kind: 'рыбное' },
    { keyword: 'friedpotatoeswithmushrooms1', name: 'Жареная картошка с грибами', price: 150, category: 'main_course', count: '250 г', image: 'friedpotatoeswithmushrooms1.jpg', kind: 'вегетарианское' },
    { keyword: 'lasagna', name: 'Лазанья', price: 285, category: 'main_course', count: '310 г', image: 'lasagna.jpg', kind: 'мясное' },
    { keyword: 'pizza', name: 'Пицца Маргарита', price: 500, category: 'main_course', count: '250 г', image: 'pizza.jpg', kind: 'вегетарианское' },
    { keyword: 'shrimppasta', name: 'Паста с креветками', price: 340, category: 'main_course', count: '280 г', image: 'shrimppasta.jpg', kind: 'рыбное' },
    { keyword: 'tea', name: 'Чёрный чай', price: 90, category: 'beverages', count: '300 мл', image: 'tea.jpg', kind: 'горячий' },
    { keyword: 'orangejuice', name: 'Апельсиновый сок', price: 120, category: 'beverages', count: '300 мл', image: 'orangejuice.jpg', kind: 'холодный' },
    { keyword: 'greentea', name: 'Зелёный чай', price: 100, category: 'beverages', count: '300 мл', image: 'greentea.jpg', kind: 'горячий' },
    { keyword: 'carrotjuice', name: 'Морковный сок', price: 110, category: 'beverages', count: '300 мл', image: 'carrotjuice.jpg', kind: 'холодный' },
    { keyword: 'cappuccino', name: 'Капучина', price: 180, category: 'beverages', count: '300 мл', image: 'cappuccino.jpg', kind: 'горячий' },
    { keyword: 'applejuice', name: 'Яблочный сок', price: 500, category: 'beverages', count: '300 мл', image: 'applejuice.jpg', kind: 'холодный' },
    { keyword: 'caesar', name: 'Цезарь с цыплёнком', price: 370, category: 'salads_starters', count: '220 г', image: 'caesar.jpg', kind: 'мясной' },
    { keyword: 'caprese', name: 'Капреза с моцарелой', price: 350, category: 'salads_starters', count: '235 г', image: 'caprese.jpg', kind: 'вегетарианский' },
    { keyword: 'frenchfries1', name: 'Картофель фри с соусом Цезарь', price: 280, category: 'salads_starters', count: '235 г', image: 'frenchfries1.jpg', kind: 'вегетарианский' },
    { keyword: 'frenchfries2', name: 'Картофель фри с соусом кетчупом', price: 260, category: 'salads_starters', count: '235 г', image: 'frenchfries2.jpg', kind: 'вегетарианский' },
    { keyword: 'saladwithegg', name: 'Корейский салат с овощами и яйцом', price: 330, category: 'salads_starters', count: '250 г', image: 'saladwithegg.jpg', kind: 'вегетарианский' },
    { keyword: 'tunasalad', name: 'Салат с тунцом', price: 480, category: 'salads_starters', count: '250 г', image: 'tunasalad.jpg', kind: 'рыбный' },
    { keyword: 'baklava', name: 'Пахлава', price: 220, category: 'desserts', count: '300 г', image: 'baklava.jpg', kind: 'средняя порция' },
    { keyword: 'checheesecake', name: 'Чизкейк', price: 240, category: 'desserts', count: '125 г', image: 'checheesecake.jpg', kind: 'маленькая порция' },
    { keyword: 'chocolatecheesecake', name: 'Шоколадный чизкейк', price: 260, category: 'desserts', count: '150 г', image: 'chocolatecheesecake.jpg', kind: 'маленькая порция' },
    { keyword: 'chocolatecake', name: 'Шоколадный торт', price: 270, category: 'desserts', count: '140 г', image: 'chocolatecake.jpg', kind: 'маленькая порция' },
    { keyword: 'donuts', name: 'Пончики (6 штук)', price: 650, category: 'desserts', count: '700 г', image: 'donuts.jpg', kind: 'большая порция' },
    { keyword: 'donuts2', name: 'Пончики (3 штуки)', price: 410, category: 'desserts', count: '350 г', image: 'donuts2.jpg', kind: 'средняя порция' }
];
