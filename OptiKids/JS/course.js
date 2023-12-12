let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;

    currentIndex = (currentIndex + 1) % slideCount;
    showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.querySelector('.slides');
  const slideCount = slides.children.length;
  const slideWidth = document.querySelector('.slide').clientWidth;

  // Изменение здесь: убираем сброс индекса на 0
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;

  // Добавляем проверку, чтобы избежать прокрутки в начало слайдов
  if (currentIndex !== slideCount - 1) {
      slides.style.transition = 'transform 0.5s ease-in-out';
      slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }
}





  let currentIndexMobile = 0;

  function showSlideMobile(index) {
      const slidesMobile = document.querySelector('#slider_mobile .slides');
      const slideWidthMobile = document.querySelector('#slider_mobile .slide').clientWidth;
      slidesMobile.style.transform = `translateX(${-index * slideWidthMobile}px)`;
  }
  
  function nextSlideMobile() {
      const slidesMobile = document.querySelector('#slider_mobile .slides');
      const slideCountMobile = slidesMobile.children.length;
  
      currentIndexMobile = (currentIndexMobile + 1) % slideCountMobile;
      showSlideMobile(currentIndexMobile);
  }
  
  function prevSlideMobile() {
      const slidesMobile = document.querySelector('#slider_mobile .slides');
      const slideCountMobile = slidesMobile.children.length;
  
      currentIndexMobile = (currentIndexMobile - 1 + slideCountMobile) % slideCountMobile;
      showSlideMobile(currentIndexMobile);
  }
  


 
  function toggleButton(id) {
    const btn = document.getElementById(id);
    const featuresDiv = document.querySelector('.features');
    const productDiv = document.querySelector('.product');

    // Снимаем подсветку с активных кнопок
    const activeButtons = document.querySelectorAll('.active');
    activeButtons.forEach(button => {
      button.classList.remove('active');
    });

    // Выделяем (подсвечиваем) текущую кнопку
    btn.classList.add('active');

    // Управление видимостью features и product
    if (id === 'btn1') {
      featuresDiv.classList.remove('hidden');
      productDiv.classList.add('hidden');
    } else if (id === 'btn2') {
      featuresDiv.classList.add('hidden');
      productDiv.classList.remove('hidden');
    }
  }

  let currentInfoIndexMobile = 0;

  function toggleInfoMobile(id) {
      const btn = document.getElementById(id);
      const featuresDiv = document.querySelector('.features_mobile');
      const productDiv = document.querySelector('.product_mobile');
  
      // Снимаем подсветку с активных кнопок
      const activeButtons = document.querySelectorAll('.info_mobile .active');
      activeButtons.forEach(button => {
          button.classList.remove('active');
      });
  
      // Выделяем (подсвечиваем) текущую кнопку
      btn.classList.add('active');
  
      // Управление видимостью features_mobile и product_mobile
      if (id === 'btn10' || id === 'btn12' || id === 'btn14' || id === 'btn16') {
          featuresDiv.classList.remove('hidden');
          productDiv.classList.add('hidden');
      } else if (id === 'btn11' || id === 'btn13' || id === 'btn15' || id === 'btn17') {
          featuresDiv.classList.add('hidden');
          productDiv.classList.remove('hidden');
      }
  }
  
  // Используйте toggleInfoMobile('btn10') и другие аналогичные вызовы в соответствующих кнопках.
  
  
  // Используйте toggleInfoMobile('btn10') и другие аналогичные вызовы в соответствующих кнопках.
  


  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  

  const slides = document.querySelector('.slides');

  function changeSlide(index) {
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  function prevSlide() {
    const slideWidth = document.querySelector('.slide').clientWidth;
    const currentIndex = Math.floor(slides.scrollLeft / slideWidth);
    changeSlide(currentIndex - 1);
  }





  function openModal() {
    var modal = document.getElementById('buyModal');
    modal.classList.add('where_buy--active');
}

function closeModal(event) {
    var modal = document.getElementById('buyModal');
    if (event.target === modal) {
        modal.classList.remove('where_buy--active');
    }
}

document.addEventListener('click', closeModal);