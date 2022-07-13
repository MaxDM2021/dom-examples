const titleEl = document.querySelector('.title');
// Возвращает только тект
console.log(titleEl.textContent)
// Возвращает все что вложено в контент
console.log(titleEl.innerHTML);

// Создает ссылку внутри контента
// titleEl.innerHTML = '<a href =""> Это ссылка)</a>';
// Чистит контент:
// titleEl.innerHTML = "";
// .так делать нельзя, слишком грузит браузер(удаляя старое, записывая новое и добавляя к нему еще ссылку)
// titleEl.innerHTML += '<a href =""> Это ссылка)</a>';

titleEl.insertAdjacentHTML('afterbegin', '<a href ="" class ="title__link"> Это ссылка)</a>');

