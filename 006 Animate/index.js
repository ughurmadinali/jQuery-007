1
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>

$(selector).slideDown(speed, callBack)

2
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>

$(selector).slideUp(speed, callBack)

3
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button
// <div class="slide"></div>
// <button class="btn"></button>

$(selector).slideToggle(speed, callBack)

4
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button и установите время анимации на 4s
// <div class="slide"></div>
// <button class="btn"></button>

$('#slide').click(function(){
    $('#btn').slideDown(4000)
})

5
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button и установите время анимации на 5s
// <div class="slide"></div>
// <button class="btn"></button>

$('#slide').click(function(){
    $('#btn').slideUp(5000)
})

6
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button и установите время анимации на 6s
// <div class="slide"></div>
// <button class="btn"></button>

$('#slide').click(function(){
    $('#btn').slideToggle(6000)
})

7
// Создайте эффект слайдера используя slideUp для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Вверх"
// <div class="slide"></div>
// <button class="btn"></button>

$('slide').click(function(){
    $('#btn').slideUp(5000)
    alert('Вверх')
})

8
// Создайте эффект слайдера используя slideDown для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Вниз"
// <div class="slide"></div>
// <button class="btn"></button>

$('slide').click(function(){
    $('#btn').slideDown(5000)
    alert('Вниз')
})

9
// Создайте эффект слайдера используя slideToggle для тега div при нажатии на тег button, установите время анимации на 5s и в конце анимации выведите в alert сообщение "Движение"
// <div class="slide"></div>
// <button class="btn"></button>

$('slide').click(function(){
    $('#btn').slideToggle(5000)
    alert('Движение')
})

10
// Создайте эффект движения в лево для тега div, при нажатии на button с помощью метода animate
// <div class="slide"></div>
// <button class="btn"></button>



11
// Создайте эффект увеличения высоты и ширины для тега div, при нажатии на button с помощью метода animate
// <div class="slide"></div>
// <button class="btn"></button>



12
// Для чего используется метод .stop()?

//используется для остановки анимации или эффекта до ее завершения.

13
// Какие 2 параметра принимает в себя .stop() метод?

//В следующем примере демонстрируется без параметров

14
// Для чего мы используем метод .css({})?

//задает или возвращает одно или несколько свойств стиля для выбранных элементов

15
// Является ли скрипт ниже ошибочным?
$("#p1").css("color", "red").slideUp(2000).slideDown(2000)

//Нет не является ошибочным