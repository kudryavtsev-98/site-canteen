// $('.searching-drop').change(function(){
//   var text = $(this).find('option:selected').text()
//   var $aux = $('<select/>').append($('<option/>').text(text))
//   $(this).after($aux)
//   $(this).width($aux.width())
//   $aux.remove()
// }).change()


//Навигационное меню (max-width 960)


document.querySelector('.nav-3-button').onclick = function() {
  document.querySelector('.nav-3-button').classList.toggle('nav-3-button-active'),
  document.querySelector('.nav-3').classList.toggle('nav-3-dropdown');
}

// Навигационное меню (мобильная версия)

navOpen = false;

document.querySelector('.nav-button-container').onclick = function(){

  document.querySelector('.nav-button').classList.toggle('nav-button-active');

  document.body.classList.toggle('dropdown-open'); //when dropdown is opened

  document.querySelector('.header-container').classList.toggle('header-container-active');

  document.querySelector('header').classList.toggle('header-active');

  navOpen = !navOpen;
}

// Скрытие навигационного меню при переходе на десктопную версию

$(window).resize(function() {
  if (($(window).width() > 768) && (navOpen == true)) {

    navOpen = false;

    document.body.classList.remove('dropdown-open');

    document.getElementById('header').classList.remove('header-active');

    document.querySelector('.nav-button').classList.remove('nav-button-active');

    document.querySelector('.header-container').classList.remove('header-container-active');
  }
});


// Изменение свойств при наведении на корзину покупок

function checkWidth() {
  if ($(window).width() <= 768) {
    document.querySelector('.basket').classList.remove('basket-hover');
  } else {
    document.querySelector('.basket').classList.add('basket-hover');
  }
}

if ($(window).width() <= 768) {
  document.querySelector('.basket').classList.remove('basket-hover');
}



$(window).resize(checkWidth);

//Выпадающее меню(прокрутка экрана)

function menuScroll() {
  var prevScroll = 0;
  $(window).scroll(function(event){
    var scroller = $(this).scrollTop();
    if (scroller > prevScroll){
      $('section.category-scroll').filter(':not(:animated)').slideUp();
    }
    else if (scroller <= prevScroll) {
      $('section.category-scroll').filter(':not(:animated)').slideDown();
    }
    prevScroll = scroller;
  });
}

if ($(window).width() > 768) {
  document.querySelector('.categories').classList.add('category-scroll');
  menuScroll();
};



$(window).resize(function() {

  if ($(window).width() > 768) {
    document.querySelector('.categories').classList.add('category-scroll');
    menuScroll();
  }
  else {
    document.querySelector('.categories').classList.remove('category-scroll');
  }
});

//Выпадающее меню(событие 'click')
var selectIsActive = false;

let select = function() {
  let  selectHeader = document.querySelectorAll('.select-header');
  let  selectItem = document.querySelectorAll('.select-item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  })

  selectItem.forEach(item => {
    item.addEventListener('click',selectChoose)
  })

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
    selectIsActive = !selectIsActive;
  }

  function selectChoose() {
    let text = this.innerText,
    select = this.closest('.select'),
    currentText = select.querySelector('.select-current');
    currentText.innerText = text;
    select.classList.remove('is-active');
    selectIsActive = false;
  }
};

select();

$(document).on('click', function(e) {
  if ((!$(e.target).closest(".select").length) && document.querySelector('.select').classList.contains('is-active')) {
    document.querySelector('.select').classList.remove('is-active');
  }

  else if ((!$(e.target).closest(".header-container").length) && ($(e.target).closest("#header").length)) {
    document.querySelector('.header-container').classList.remove('header-container-active');
    document.getElementById('header').classList.remove('header-active');
    document.body.classList.remove('dropdown-open');
    document.querySelector('.nav-button').classList.remove('nav-button-active');
  }
  e.stopPropagation();
});

$(window).resize(function() {

  if (($(window).width() <= 768) && selectIsActive == true) {

    selectIsActive = false;

    document.querySelector('.select').classList.remove('is-active');
  }
});




//Вешаем действие при нажатии на один из блоков "Специальные предложения"

var proposal = document.querySelectorAll('.proposal');

proposal.forEach(function(el) {
  el.onclick = function(link) {
    window.location.href = '#';
  }
});

//Вешаем действие при нажатии на один из блоков "Новости производителей"

var news = document.querySelectorAll('.news-js');

news.forEach(function(el) {
  el.onclick = function(link) {
    window.location.href = '#';
  }
});

//Вешаем действие при нажатии на элемент из блока "Рекомендуем"

var recomend = document.querySelectorAll('.recomend-js');

recomend.forEach(function(el) {
  el.onclick = function(link) {
    window.location.href = '#';
  }
});

//Вешаем действие при нажатии на элемент из блока "Наши клиенты"

var client = document.querySelectorAll('.client-js');

client.forEach(function(el) {
  el.onclick = function(link) {
    window.location.href = '#';
  }
});

//Вешаем действие при нажатии на элемент из блока "footer-company"

var footer = document.querySelectorAll('.footer-company');

footer.forEach(function(el) {
  el.onclick = function(link) {
    window.location.href = '#';
  }
});

//Инициализация и установление медиазапроса для слайдера категорий.

if (($(window).width() <= 1500) && ($(window).width() > 768)) {

  var sliderIsLife = true;

  $(document).ready(function(){
    $('.categories-slider').slick({
      dots: false,
      adaptiveHeight: false,
      speed: 1000,
      infinite: false,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 8,
      arrows: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 6,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
      ]
    });
  });
}

else {
  var sliderIsLife = false;
}

$(window).resize(function() {
  if (($(window).width() > 768) && ($(window).width() <= 1500) && (sliderIsLife == false)) {

    sliderIsLife = true;

    $(document).ready(function(){
      $('.categories-slider').slick({
        dots: false,
        adaptiveHeight: false,
        speed: 1000,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 8,
        arrows: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },
        ]
      });
    });
  }

  else if ((($(window).width() <= 768) || ($(window).width() > 1500)) && (sliderIsLife == true)) {

    sliderIsLife = false;

    $('.categories-slider').slick('unslick');
  }
});



$(document).ready(function() {
  $('.mix-slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: false,
    speed: 1000,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,

        }
      },
    ],
  });
});

$(document).ready(function() {
  $('.service-slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: false,
    speed: 1000,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,

        }
      },
    ],
  });
});


// Выпадающее меню

var dropdownOpen = false;

document.getElementById('category-1').onclick = function(){
  document.getElementById('dropdown-2').hidden = true;
  if (document.getElementById('dropdown-1').hidden == true) {
    dropdownOpen = true;
    document.getElementById('dropdown-1').hidden = false;
    document.body.classList.add('dropdown-open'); //when dropdown is opened
  }

  else if (document.getElementById('dropdown-1').hidden == false){
    dropdownOpen = false;
    document.getElementById('dropdown-1').hidden = true;
    document.body.classList.remove('dropdown-open'); //when dropdown is closed
  };
};


// Выпадающее длинное меню
document.getElementById('category-2').onclick = function(){

  document.getElementById('dropdown-1').hidden = true;

  if (document.getElementById('dropdown-2').hidden == true) {
    dropdownOpen = true;
    document.getElementById('dropdown-2').hidden = false;
    document.body.classList.add('dropdown-open'); //when dropdown is opened
  }

  else if (document.getElementById('dropdown-2').hidden == false){
    dropdownOpen = false;
    document.getElementById('dropdown-2').hidden = true;
    document.body.classList.remove('dropdown-open'); //when dropdown is closed
  };
};

// Скрытие выпадающего меню при переходе на мобильную версию
$(window).resize(function() {
  if (($(window).width() <= 768) && (dropdownOpen == true)) {

    dropdownOpen = false;
    document.body.classList.remove('dropdown-open');

    document.getElementById('dropdown-1').hidden = true;
    document.getElementById('dropdown-2').hidden = true;
  }
});

// Регулировка границ в секции BRANDS при адаптации

var maxWidth = 768;

if ($(window).width() <= 768) {

  maxWidth = 768;

  // Настройка BORDER-LEFT
  document.getElementById('brand-a2').classList.add('brand-border-left');
  document.getElementById('brand-a3').classList.remove('brand-border-left');
  document.getElementById('brand-a4').classList.add('brand-border-left');
  document.getElementById('brand-a5').classList.remove('brand-border-left');
  document.getElementById('brand-a6').classList.add('brand-border-left');

  // Настройка BORDER-TOP
  document.getElementById('brand-li2').classList.remove('brand-border-top');
  document.getElementById('brand-li3').classList.add('brand-border-top');
  document.getElementById('brand-li4').classList.add('brand-border-top');
  document.getElementById('brand-li5').classList.add('brand-border-top');
  document.getElementById('brand-li6').classList.add('brand-border-top');
}

else if (($(window).width() > 768) && ($(window).width() <= 1024)) {

  maxWidth = 1024;

  document.getElementById('brand-a2').classList.add('brand-border-left');
  document.getElementById('brand-a3').classList.add('brand-border-left');
  document.getElementById('brand-a4').classList.remove('brand-border-left');
  document.getElementById('brand-a5').classList.add('brand-border-left');
  document.getElementById('brand-a6').classList.add('brand-border-left');

  // Настройка BORDER-TOP
  document.getElementById('brand-li2').classList.remove('brand-border-top');
  document.getElementById('brand-li3').classList.remove('brand-border-top');
  document.getElementById('brand-li4').classList.add('brand-border-top');
  document.getElementById('brand-li5').classList.add('brand-border-top');
  document.getElementById('brand-li6').classList.add('brand-border-top');
}

else if ($(window).width() > 1024) {

  maxWidth = 1300;

  // Настройка BORDER-LEFT
  document.getElementById('brand-a2').classList.add('brand-border-left');
  document.getElementById('brand-a3').classList.add('brand-border-left');
  document.getElementById('brand-a4').classList.add('brand-border-left');
  document.getElementById('brand-a5').classList.add('brand-border-left');
  document.getElementById('brand-a6').classList.add('brand-border-left');

  // Настройка BORDER-TOP
}


$(window).resize(function() {
  if (($(window).width() <= 768) && (maxWidth != 768)) {

    maxWidth = 768;

    // Настройка BORDER-LEFT
    document.getElementById('brand-a2').classList.add('brand-border-left');
    document.getElementById('brand-a3').classList.remove('brand-border-left');
    document.getElementById('brand-a4').classList.add('brand-border-left');
    document.getElementById('brand-a5').classList.remove('brand-border-left');
    document.getElementById('brand-a6').classList.add('brand-border-left');

    // Настройка BORDER-TOP
    document.getElementById('brand-li2').classList.remove('brand-border-top');
    document.getElementById('brand-li3').classList.add('brand-border-top');
    document.getElementById('brand-li4').classList.add('brand-border-top');
    document.getElementById('brand-li5').classList.add('brand-border-top');
    document.getElementById('brand-li6').classList.add('brand-border-top');
  }

  else if (($(window).width() > 768) && ($(window).width() <= 1024) && (maxWidth != 1024)) {
    // Настройка BORDER-LEFT
    maxWidth = 1024;

    document.getElementById('brand-a2').classList.add('brand-border-left');
    document.getElementById('brand-a3').classList.add('brand-border-left');
    document.getElementById('brand-a4').classList.remove('brand-border-left');
    document.getElementById('brand-a5').classList.add('brand-border-left');
    document.getElementById('brand-a6').classList.add('brand-border-left');

    // Настройка BORDER-TOP
    document.getElementById('brand-li2').classList.remove('brand-border-top');
    document.getElementById('brand-li3').classList.remove('brand-border-top');
    document.getElementById('brand-li4').classList.add('brand-border-top');
    document.getElementById('brand-li5').classList.add('brand-border-top');
    document.getElementById('brand-li6').classList.add('brand-border-top');
  }

  else if (($(window).width() > 1024) && (maxWidth != 1300)) {

    maxWidth = 1300;

    // Настройка BORDER-LEFT
    document.getElementById('brand-a2').classList.add('brand-border-left');
    document.getElementById('brand-a3').classList.add('brand-border-left');
    document.getElementById('brand-a4').classList.add('brand-border-left');
    document.getElementById('brand-a5').classList.add('brand-border-left');
    document.getElementById('brand-a6').classList.add('brand-border-left');

    // Настройка BORDER-TOP
  }
});

// Анимация секции Клиенты (section.clients)

var clientIsHidden = document.querySelectorAll('.client-mobile');

var clientsInRow = 3;

if (($(window).width() <= 768)) {

  clientIsHidden.forEach(item => {
    item.classList.add('client-hidden')
  });

  if ($(window).width() > 559) {
    clientsInRow = 2;
  }

  else {
    clientsInRow = 1;

    document.getElementById('client-4').classList.add('client-hidden');
    document.getElementById('client-5').classList.add('client-hidden');
    document.getElementById('client-6').classList.add('client-hidden');
  }

}

document.getElementById('clients-btn').onclick = function() {
  document.getElementById('client-4').classList.remove('client-hidden');
  document.getElementById('client-5').classList.remove('client-hidden');
  document.getElementById('client-6').classList.remove('client-hidden');

  clientIsHidden.forEach(item => {
    item.classList.remove('client-hidden')
  });

  document.querySelector('.clients-button').classList.add('clients-button-hidden');

}

$(window).resize(function() {
  if (($(window).width() > 768) && (clientsInRow != 3)) {
    clientsInRow = 3;
  }

  else if (($(window).width() <= 768) && ($(window).width() > 559) && (clientsInRow != 2)) {
    clientsInRow = 2;

    document.getElementById('client-4').classList.remove('client-hidden');
    document.getElementById('client-5').classList.remove('client-hidden');
    document.getElementById('client-6').classList.remove('client-hidden');

    document.querySelector('.clients-button').classList.remove('clients-button-hidden')

    clientIsHidden.forEach(item => {
      item.classList.add('client-hidden')
    });
  }

  else if (($(window).width() <= 559) && (clientsInRow != 1)) {
    clientsInRow = 1;

    document.getElementById('client-4').classList.add('client-hidden');
    document.getElementById('client-5').classList.add('client-hidden');
    document.getElementById('client-6').classList.add('client-hidden');

    clientIsHidden.forEach(item => {
      item.classList.add('client-hidden')
    });

    document.querySelector('.clients-button').classList.remove('clients-button-hidden')
  }
});

//Анимация секции "footer-menu"

document.getElementById('footer-info-ul').classList.add('footer-ul-hidden');
document.getElementById('footer-equipment-ul').classList.add('footer-ul-hidden');
document.getElementById('footer-offers-ul').classList.add('footer-ul-hidden');
document.getElementById('footer-contacts-ul').classList.add('footer-ul-hidden');
document.getElementById('footer-requisites-ul').classList.add('footer-ul-hidden');

var footMenuMobile = false;

var ulIsHidden = false;
var footerItems = document.querySelectorAll('.footer-menu-header');

footerItems.forEach(item => {

  item.addEventListener('click', function() {
    if (this.nextElementSibling.classList.contains('footer-ul-hidden')) {
      ulIsHidden = true;
    }

    footerItems.forEach(item => {
      item.lastElementChild.classList.add('menu-item-sign-active');
      item.nextElementSibling.classList.add('footer-ul-hidden');
    });

    if (ulIsHidden == false) {
      ulIsHidden = true;

      this.lastElementChild.classList.add('menu-item-sign-active');

      this.nextElementSibling.classList.add('footer-ul-hidden');
    }

    else {
      ulIsHidden = false;

      this.lastElementChild.classList.remove('menu-item-sign-active');

      this.nextElementSibling.classList.remove('footer-ul-hidden');
    }
  });
})

if ($(window).width() <= 768) {
  footMenuMobile = true;
};


$(window).resize(function() {

  if ((footMenuMobile == true) && ($(window).width() > 768)) {
    footMenuMobile = false;
  }

  else if ((footMenuMobile == false) && ($(window).width() <= 768)) {
    footMenuMobile = true;

    document.getElementById('footer-info-ul').classList.add('footer-ul-hidden');
    document.getElementById('footer-equipment-ul').classList.add('footer-ul-hidden');
    document.getElementById('footer-offers-ul').classList.add('footer-ul-hidden');
    document.getElementById('footer-contacts-ul').classList.add('footer-ul-hidden');
    document.getElementById('footer-requisites-ul').classList.add('footer-ul-hidden');

    footerItems.forEach(item => {
      item.lastElementChild.classList.add('menu-item-sign-active');
    });

    ulIsHidden = true;
  }
});
