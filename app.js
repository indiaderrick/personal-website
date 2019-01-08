window.onload = () => {
  const burger = document.querySelector('.burger');
  const projects = document.querySelector('.projects');
  const technologiesText = document.querySelector('.technologies-text');
  const descriptionText = document.querySelector('.description-text');
  const technologiesButton = document.querySelector('.technologies-button');
  const descriptionButton = document.querySelector('.description-button');

  const welcomeInView = () => {
    const projectsInView = projects.getBoundingClientRect();
    if(projectsInView.top >= 0 && projectsInView.bottom <= (window.innerHeight || document. documentElement.clientHeight)){
      return true;
    } else {
      return false;
    }
  };

  technologiesButton.addEventListener('click', () => {
    technologiesText.classList.add('show-technologies');
    technologiesButton.classList.add('white');
    descriptionButton.classList.remove('white');
    descriptionText.classList.add('hide-description');
  });

  descriptionButton.addEventListener('click', () => {
    technologiesText.classList.remove('show-technologies');
    technologiesButton.classList.remove('white');
    descriptionButton.classList.add('white');
    descriptionText.classList.remove('hide-description');
  });


  window.addEventListener('scroll', () => {
    if (welcomeInView()) {
      console.log('doesnt need navburger');
      burger.classList.remove('burger-show');
      // navAbout.classList.remove('burger-show');
    } else {
      console.log('needs navburger');
      burger.classList.add('burger-show');
      // navAbout.classList.add('burger-show');
    }
  });
  //look up how to do a hoverable nav bar with js css and html
};
