
(() => {
  const letters = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЮЯ";
  let tittles = document.querySelectorAll('.js_tittle')
  let interval = null;

  for (let i = 0; i < tittles.length; i++) {
    tittles[i].onmouseover = event => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    }
  }

})();


(() => {

  let foto = document.querySelector('.js_img');

  if (window.innerWidth < 571) {
    foto.src = './img/img/third_m.png';
  } else {
    foto.src = './img/img/third.png';
  }

})();


(() => {
  var textString = `
    500+ завершённых кейсов
  	Сотни отзывов от реальных клиентов
  	Работаем через гарантов — без риска
  	Инсайды — только в Telegram`;

  // Элемент, куда вставляем текст
  const textElem = document.querySelector('.hacking-animation__text');

  // Блок, до которого нужно доскроллить
  const triggerBlock = document.querySelector('.trigger-block');

  // Разбиваем строку на массив символов
  const textArray = textString.split('');
  let count = 0;
  let animationStarted = false;

  function animText() {
    const intervalId = setInterval(() => {
      if (count >= textArray.length) {
        clearInterval(intervalId);
        return;
      }

      if (textArray[count] === "\n") {
        const br = document.createElement('br');
        textElem.appendChild(br);
      } else {
        const span = document.createElement('span');
        span.className = 'hacking-animation__character';
        span.textContent = textArray[count];
        textElem.appendChild(span);
      }
      count++;
    }, 20);
  }


  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animationStarted) {
        animationStarted = true;
        animText();
        obs.disconnect();
      }
    });
  }, { threshold: 0.7 });


  if (triggerBlock) {
    observer.observe(triggerBlock);
  }
})();

//animation
(() => {
  const animItems = document.querySelectorAll('.anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;

        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_animation');
        } /*else{
                animItem.classList.remove('_animation'); 
            }*/
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTot;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };


  };
  window.onload = function () {
    setTimeout(() => {
      document.querySelector('.main_flex_haker').classList.add('_animation');
      document.querySelector('.main_flex_text').classList.add('_animation');
      document.querySelector('.text1').classList.add('_animation');
      document.querySelector('.text2').classList.add('_animation');
    }, 100);
  };

})();



const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: false,
});


const texts = [
  document.getElementById('text1'),
];

function updateGlitch() {
  const maxOffset = 8; // px
  texts.forEach(text => {
      const offsetX = (Math.random() * maxOffset - maxOffset /3).toFixed(2) + 'px';
      const offsetY = (Math.random() * maxOffset - maxOffset /3).toFixed(2) + 'px';
      const offsetZ = (Math.random() * 1.5 * maxOffset - maxOffset /2).toFixed(2) + 'deg';

      text.style.setProperty('--offset-x', offsetX);
      text.style.setProperty('--offset-y', offsetY);
      text.style.setProperty('--offset-z', offsetZ);
  });
}

// Обновляем параметры каждые ~300 мс
setInterval(updateGlitch, 20);



//burger menu
(() => {

  menuButton = document.querySelector('.js_header');
  menuBox = document.querySelector('.js_menu');
  menuClose = document.querySelector('.js_close');
  menuLinks = document.querySelectorAll('.menu_link');

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      menuBox.classList.add('active');
      document.querySelector('body').classList.add('noscroll');
    })
  }
  if (menuClose) {
    menuClose.addEventListener('click', function () {
      menuBox.classList.remove('active');
      document.querySelector('body').classList.remove('noscroll');
    })
  }

  if (menuLinks) {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', function () {
        menuBox.classList.remove('active');
        document.querySelector('body').classList.remove('noscroll');
      })
    }
  }

})();