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
  