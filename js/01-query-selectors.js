
// Вызывает из памяти
// const magicBtn = document.querySelector('.js-magic-btn');


// .site-nav__link - CSS селектор
// #qwe - id селектор
// Если ненаходит ничего возвращает null
// const navItem = document.querySelector('.site-nav__link');
// console.log(navItem);

// const siteNav = document.querySelector('.site-nav');

// Находит всю коллекцию
// Если ненаходит ничего возвращает пустой массив
// Если document, ищет по всему докуиенту

// const navLinkEl = document.querySelectorAll('.site-nav__item');
// console.log('navLinkEl', navLinkEl);

// Ищет только в siteNav все
// const navLinkEl1 = siteNav.querySelectorAll('.site-nav__item');
// console.log('navLinkEl1', navLinkEl1);

// можно еще так записать, так чаще ищуют с помощью document и вложенных селекторов:
// const navLinkE2 = document.querySelectorAll('.site-na .site-nav__item');


// Изменение картинки
// magicBtn.addEventListener('click', () => {
// const imageEl = document.querySelector('.hero__img');
// console.log('imageEl ', imageEl);
// console.log(imageEl.src);
// imageEl.src = './IMG_20220515_103947.jpg'
// imageEl.alt = "Это новый котик";
// })


// Изменение тестового контента
// const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl);
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'Я сладкий пирожочек!!'


// console.log(imageEl.getAttribute('src'));
// Этот вариант чаще используют при вызове свойст 
// console.log(imageEl.src);

// удалает картинку
// imageEl.removeAttribute('src');
// возвращает true или false
// console.log(imageEl.hasAtribute('src123123'))

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[2].dataset.action);



// У input используют value
// magicBtn.addEventListener('click', () => {
//     const inputEl = document.querySelector('.js-input');
//     console.log(inputEl.value);
//     inputEl.value = 'zdfsfdsfsf'
// });

// Работа со стилями классов

// C помощью метода add можно добавить один или  несколько названий классов в сам класс.

// magicBtn.addEventListener('click', () => {
// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// Добавляет класс
// navEl.classList.add('super-cool','ghjhgjgjh');
// Убирает класс
// navEl.classList.remove('ghjhgjgjh');
// Добавляет и убирает при повторном нажатии
// navEl.classList.toggle('qwerty');
// Заменяет старый класс на новый
// navEl.classList.replace('super-cool', 'qwerty');
// Проверяет содержит ли, ответ true или false
// console.log(navEl.classList.contains('qwerty'));

// });

// Добавление стиля(цвета) из css класса:

// const currentPageUrl = '/about';

// const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`)

// site-nav__item[href="/about"]

// console.log(linkEl);
// linkEl.classList.add('style-nav__link--curent');


// const navEl = document.querySelector('.site-nav')


// const firstNavItemEl = navEl.querySelector('.site-nav__item')
// Вызывает первого ребенка в ul:
// const firstNavItemEl = navEl.firstElementChild
// console.log(firstNavItemEl);
// console.log(navEl.children[1]);
// console.log(navEl.lastChild);


// Создание заголовка
// Создаем тег (должен быть валидный): 
// const titleEl = document.createElement('h1');
// Создаем класс:
// titleEl.classList.add('page-title');
// Создаем текст заголовка:
// titleEl.textContent = 'Это заголовок страницы :)'
// console.log(titleEl);
// Добавление в body в виде последнего ребенка в конец аж после скрипта:
// document.body.appendChild(titleEl);

// Создание картинки
// const imageEl = document.createElement('img');
// imageEl.src = './IMG_20220325_115103.jpg'
// imageEl.alt = 'Это мое фото))'
// imageEl.width = 640;
// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);


const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl3 = document.createElement('a');
navLinkEl3.classList.add('site-nav__link');
navLinkEl3.textContent = 'Личный кабинет';
navLinkEl3.href = '/profile';

// Добавление в li  ссылки а
navItemEl.appendChild(navLinkEl3);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
// Добавление в ul всей готоввой ветки li вместе с а в конец всех детей
navEl.appendChild(navItemEl);


// Вставить перед первым элеменом 
navEl.insertBefore(navItemEl, navEl.firstElementChild);

// Вставить перед последним элеменом 
navEl.insertBefore(navItemEl, navEl.lastElementChild);

// Вставить перед третим элементом (вместо второго)
navEl.insertBefore(navItemEl, navEl.children[2]);


// Можно добавить за одину операцию несколько элементов с поощью append
// const heroEl = document.querySelector('.hero');
// heroEl.append(titleEl, imageEl);

// Создание коллекции элементов

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'gray', color: '#607D88' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F5185' },
]


// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// console.log(buttonEl);

const colorPickerContainerEl = document.querySelector('.js-color-picker')


// ====== Старая версия перебора массива:
// for (let i = 0; i < colorPickerOptions.length; i +=1) {
    
//     const option = colorPickerOptions[i];

//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     elements.push(buttonEl);
// } 

// console.log(elements);

// colorPickerContainerEl.append(...elements);


// ======= Новая версия перебора через map
// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
    
//     return buttonEl
//     });
    
//     console.log(elements);
    
//     colorPickerContainerEl.append(...elements);

    // ======= Новая версия перебора через функцию
    // Все коллекции в js делаются вот так:

    const makeColorPickerOptions = options => {
        return options.map(option => {
            const buttonEl = document.createElement('button');
            buttonEl.type = 'button';
            buttonEl.classList.add('color-picker__option');
            buttonEl.textContent = option.label;
            buttonEl.style.backgroundColor = option.color;

            return buttonEl;
        })
    }

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);