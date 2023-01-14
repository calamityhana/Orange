// бургер меню
const menuIcon = document.querySelector(".header .menu-icon"),
      header = document.querySelector(".header"),
      body = document.querySelector("body");

menuIcon.addEventListener("click", function(){
    menuIcon.classList.toggle("menu-icon--active");
    header.classList.toggle("header--mobile");
    body.classList.toggle("no-scroll");
})

//СЛАЙДЕР со стрелками

const sliderArrows = document.querySelector(".slider-arrows"), //сам слайдер, будем на него ссылаться))
      slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item"), //картинка в слайдере
      sliderArrowsPrevButton = sliderArrows.querySelector(".slider-arrows__arrow--left"), //кнопка назад
      sliderArrowsNextButton = sliderArrows.querySelector(".slider-arrows__arrow--right"); //кнопка вперед

let slideIndex = 0; // - индекс слайдов

sliderArrowsNextButton.addEventListener("click", function() { //событие на прибавление индекса по клику
    showSlideArrows(+1);
});

sliderArrowsPrevButton.addEventListener("click", function() { //событие на убавление индекса по клику
    showSlideArrows(-1);
});

function showSlideArrows(n) {    // функция для изменения индекса
    slideIndex = slideIndex + n; //меняем индекс
    if (slideIndex < 0) {
        slideIndex = slidesArrows.length - 1; //если индекс меньше нуля, меняем на длинну слайда -1
    } 
    if (slideIndex >= slidesArrows.length) { //если индекс больше длинны, меняем на 0
        slideIndex = 0;
    }
    // console.log(slideIndex);
    slidesArrows.forEach(item => item.classList.add("hide")); // прячет все слайды 
    slidesArrows[slideIndex].classList.remove("hide");  // показывает слайд с нужным индексом
}

showSlideArrows(0);

// слайдер с точками

const sliderDots = document.querySelector(".slider-dots"),
      sliderDotsSlide = sliderDots.querySelectorAll(".slider-dots__item"), //все как и выше
      sliderDotsWrapper = sliderDots.querySelector(".slider-dots__nav"); // ОБЕРТКА В КОТОРОЙ ХРАНЯТСЯ ТОЧКИ

const dots = []; //массив с точками

for (let i = 0; i < sliderDotsSlide.length; i++) { // цикл для создания точек
    // прибавляем индекс от длинны массива со слайдами
    const dot = document.createElement("button"); //создает точку
    console.log(i);
    dot.dataset.slideTo = i; //при создании точки, вешает на нее дата атрибут, равный i

    dot.classList.add("slider-dots__nav-item", "opasity");//вешает на нее класс
    if (i == 0) dot.classList.add("slider-dots__nav-item__active"); //первой точке добавляет класс актив

    if (i != 0) sliderDotsSlide[i].classList.add("hide")//Добавляет хайд всем слайдам кроме первого

    dot.addEventListener("click", showSlideDots); //по клике вызываем функцию 

    sliderDotsWrapper.append(dot); //добавляет созданную точку в обертку
    dots.push(dot);//при создании точки добавляет ее в массив
}
// функция для показа слайда
function showSlideDots(event) {
    const slideTo = event.target.dataset.slideTo; //он вытаскивает датасет у точек
    console.log(slideTo);
    console.log(sliderDotsSlide[slideTo]);

    sliderDotsSlide.forEach(slide => slide.classList.add("hide"));
    sliderDotsSlide[slideTo].classList.remove("hide"); //показывает нужный слайд по датасету

    dots.forEach(dot => dot.classList.remove("slider-dots__nav-item__active"));
    dots[slideTo].classList.add("slider-dots__nav-item__active");
}





    //   console.log(sliderDotsSlide);