window.onload = () => {

  const burger = document.querySelector('.burger');
  const projects = document.querySelector('.projects');
  const technologiesText = document.querySelectorAll('.technologies-text');
  const descriptionText = document.querySelectorAll('.description-text');
  const technologiesButton = document.querySelectorAll('.technologies-button');
  const descriptionButton = document.querySelectorAll('.description-button');
  const titleElements = document.querySelectorAll('.about-section .titles');
  const projectsSection = document.querySelectorAll('.project-container');
  const windowHeight = window.innerHeight;

  $('.name-and-role').animate({
    'opacity': '1',
    'margin-top': '-=105%'
  }, 2000, 'linear');

  const welcomeInView = () => {
    const projectsInView = projects.getBoundingClientRect();
    if(projectsInView.top >= 0 && projectsInView.bottom <= (window.innerHeight || document. documentElement.clientHeight)){
      return true;
    } else {
      return false;
    }
  };

  window.addEventListener('scroll', () => {
    if (welcomeInView()) {
      burger.classList.remove('burger-show');
    } else {
      burger.classList.add('burger-show');
    }
  });

  const animate = () => {
    function init() {
      addEventHandlers();
      checkPosition();
      // checkProjectPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      // window.addEventListener('scroll', checkProjectPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (let i = 0; i < titleElements.length; i++) {
        const fromTop = titleElements[i].getBoundingClientRect().top;
        if(fromTop - windowHeight <= 0) {
          titleElements[i].classList.add('titles-animate');
        }
      }
    }
    // function checkProjectPosition(){
    //   for (let i = 0; i < projectsSection.length; i++){
    //     const fromTop = projectsSection[i].getBoundingClientRect().top;
    //     if(fromTop - windowHeight <= 0) {
    //       console.log('you made it to', projectsSection[i]);
    //       projectsSection[i].classList.add('fadeIn');
    //     }
    //   }
    // }
    return {
      init: init
    };
  };
  animate().init();

  technologiesButton.forEach((button, i) => {
    button.addEventListener('click', () => {
      console.log(`click t button ${i}`);
      technologiesText[i].classList.add('show-technologies');
      technologiesButton[i].classList.add('white');
      descriptionButton[i].classList.remove('white');
      descriptionText[i].classList.add('hide-description');
    });
  });

  descriptionButton.forEach((button, i) => {
    button.addEventListener('click', () => {
      technologiesText[i].classList.remove('show-technologies');
      technologiesButton[i].classList.remove('white');
      descriptionButton[i].classList.add('white');
      descriptionText[i].classList.remove('hide-description');
    });
  });

};
