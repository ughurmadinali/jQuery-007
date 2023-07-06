1
// С помощью каких методов мы можем получить контент в Jquery?

//.text(), .html(), .val()

2
// Для чего нужен метод .text()

//Устанавливает или возвращает текстовое содержимое выбранных элементов

3
// Для чего нужен метод .html()

//Устанавливает или возвращает содержимое выбранных элементов

4
// Для чего нужен метод .val()

//Устанавливает или возвращает значение полей формы

5
// Получите контент из элемента ниже c помощью .text()
//<div class="text">Some text</div>

$('.text').text()

6
// Получите контент из элемента ниже c помощью .html()
//<div class="text">Some text</div>

$('.text').html()

7
// Получите контент из элемента ниже c помощью .val()
// <input type="text" class="text">

$('.text').val()

8
// Поместите текст "New Text" в тег ниже с помощью .text() 
//<div class="text">Some text</div>

$('.text').click(function(){
    $('.text1').text('New Text')
})

9
// Поместите текст "New Text" в тег ниже с помощью .html() 
//<div class="text">Some text</div>

$('.text').click(function(){
    $('.text2').html('New Text')
})

10
// Поместите текст "New Text" в тег ниже с помощью .val()
// <input type="text" class="text">

$('.text').click(function(){
    $('.text3').val('New Text')
})

11
// Для чего нужен метод .attr()

//используется для получения значений атрибутов

12
// Установите атрибут title="text" для элемента ниже
//<a href="#">Link</a>
$('a').attr('title', 'text')

13
// Установите атрибут title="text" для элемента ниже
//<a href="#">Link</a>

14
// Измените атрибут title="text" на title="title" для элемента ниже
//<a href="#" title="text">Link</a>

15
// Установите атрибуты title="text" и class="text" для элемента ниже с помощью одного метода .attr()
//<a href="#">Link</a>
$('a').attr({
    'title': 'text',
    'class': 'text'
})

16
// Добавьте первый тег div ниже внутрь в конец второго тега div с помощью метода .append()
// 1) <div class="child"></div>
// 2) <div class="parent"></div>
$('.parent').append($('.child'))
17
// Добавьте первый тег div ниже внутрь в начало второго тега div с помощью метода .append()
// 1) <div class="child"></div>
// 2) <div class="parent"></div>

18
// Добавьте первый тег div ниже до второго тега div с помощью метода .append()
// 1) <div class="child"></div>
// 2) <div class="parent"></div>

19
// Добавьте первый тег div ниже после второго тега div с помощью метода .append()
// 1) <div class="child"></div>
// 2) <div class="parent"></div>

20
// Удалите элемент ниже
//<div class="child"></div>

$('.child').empty()

21
// Очистите элемент ниже
//<div class="child"></div>

$('.child').remove()