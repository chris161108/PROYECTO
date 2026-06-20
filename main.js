const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


/*==================== SHOW MENU ====================*/
if(navToggle)
{
    navToggle.addEventListener('click' , () => {
    if(navMenu) navMenu.classList.add("show-menu")
    })
}

/*===== MENU SHOW =====*/

/*===== MENU HIDDEN =====*/

/*==================== REMOVE MENU MOBILE ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
  const header = document.getElementById('header');
  if(!header) return;

  if(window.scrollY >= 50) {
    header.classList.add('bg-header');
  } else {
    header.classList.remove('bg-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80;
    const sectionId = section.getAttribute('id');
    const targetLink = document.querySelector('.nav-menu a[href="#' + sectionId + '"]');

    if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active-link'));
      if(targetLink) targetLink.classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
scrollHeader();
scrollActive();

/*==================== TESTIMONIAL SWIPER ====================*/
var swiper = new Swiper(".testimonial-wrapper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper.on('slideChange', () => {
  updateNeonEffect();
});

/*==================== REMOVE MENU MOBILE ====================*/
if(navClose){
  navClose.addEventListener('click', () =>{
    if(navMenu) navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
  if(navMenu) navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*===== PORTFOLIO ITEM FILTER =====*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;

for(let i=0; i<totalFilterBtn; i++)
{
    filterBtns[i].addEventListener("click", function()
    {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        console.log(filterValue)
    })
}
/*==================== THEME/DISPLAY CUSTOMIZATION ====================*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*==================== CUSTOMIZE THEME TOGGLE ====================*/
const themeButton = document.getElementById('theme-button')
const customizeTheme = document.querySelector('.customize-theme')

if(themeButton && customizeTheme){
  themeButton.addEventListener('click', ()=>{
    customizeTheme.classList.toggle('show-customize')
  })

  // Close when clicking outside the card (on overlay)
  customizeTheme.addEventListener('click', (e) =>{
    if(e.target === customizeTheme) customizeTheme.classList.remove('show-customize')
  })

  // Close with Escape key
  document.addEventListener('keydown', (e) =>{
    if(e.key === 'Escape') customizeTheme.classList.remove('show-customize')
  })
}


/*===== FONTS =====*/
/*===== FONTS =====*/
const removeSize = () => {
  fontSizes.forEach(s => s.classList.remove('active'));
}

fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    let fontSize;
    removeSize();
    size.classList.add('active');

    if (size.classList.contains('font-size-1')) {
      fontSize = '12px';
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '14px';
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '18px';
    }

    document.querySelector('html').style.fontSize = fontSize;
  });
});
/*===== PRIMARY COLORS =====*/
const changeActiveColorClass = () => {
  colorPalette.forEach(c => c.classList.remove('active'));
}
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    } else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    } else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    } else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-hue', primaryHue);
    root.style.setProperty('--neon-hue', primaryHue);
    updateNeonEffect();
  });
});

/*===== THEME BACKGROUNDS =====*/
const body = document.body;

const setBodyTheme = (themeClass) => {
  if (!body) return;
  body.classList.remove('bg-1', 'bg-2', 'bg-3');
  body.classList.add(themeClass);
  updateNeonEffect();
};

const clearBgActive = () => {
  [Bg1, Bg2, Bg3].forEach(bg => bg && bg.classList.remove('active'));
};

const updateNeonEffect = () => {
  if (!body) return;
  if (body.classList.contains('bg-2') || body.classList.contains('bg-3')) {
    body.classList.add('neon-effect');
  } else {
    body.classList.remove('neon-effect');
  }
};

if (Bg1) {
  Bg1.addEventListener('click', () => {
    clearBgActive();
    Bg1.classList.add('active');
    setBodyTheme('bg-1');
  });
}

if (Bg2) {
  Bg2.addEventListener('click', () => {
    clearBgActive();
    Bg2.classList.add('active');
    setBodyTheme('bg-2');
  });
}

if (Bg3) {
  Bg3.addEventListener('click', () => {
    clearBgActive();
    Bg3.classList.add('active');
    setBodyTheme('bg-3');
  });
}

updateNeonEffect();
