window.onload = () => {
  const burger = document.querySelector('.burger');
  const projects = document.querySelector('.projects');
  const technologiesText = document.querySelectorAll('.technologies-text');
  const descriptionText = document.querySelectorAll('.description-text');
  const technologiesButton = document.querySelectorAll('.technologies-button');
  const descriptionButton = document.querySelectorAll('.description-button');
  // const card = document.querySelectorAll('i');
  //
  // card.forEach(card => {
  //   card.classList.add('card');
  // })

  const welcomeInView = () => {
    const projectsInView = projects.getBoundingClientRect();
    if(projectsInView.top >= 0 && projectsInView.bottom <= (window.innerHeight || document. documentElement.clientHeight)){
      return true;
    } else {
      return false;
    }
  };

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

  window.addEventListener('scroll', () => {
    if (welcomeInView()) {
      console.log('doesnt need navburger');
      burger.classList.remove('burger-show');
    } else {
      console.log('needs navburger');
      burger.classList.add('burger-show');
    }
  });
};
