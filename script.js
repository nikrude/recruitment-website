function scrollToSection(sectionId, event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    const navbarHeight = document.querySelector('nav').offsetHeight;
    const section = document.getElementById(sectionId);
    const sectionOffset = section.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: sectionOffset,
      behavior: 'smooth'
    });
  }

  const toggleBtn = document.querySelector('.toggle-btn')
  const toggleBtnIcon = document.querySelector('.toggle-btn i')
  const dropDownMenu = document.querySelector('.main-menu')

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
  }