window.onload = () => {
  const burger = document.querySelector('.burger');
  const projects = document.querySelector('.projects');

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
      console.log('doesnt need navburger');
      burger.classList.remove('burger-show');
    } else {
      console.log('needs navburger');
      burger.classList.add('burger-show');
    }
  });
};
