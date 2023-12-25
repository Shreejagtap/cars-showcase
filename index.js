// Dark Mode Toggle Function
const darkMode = () => {
  const mode = document.getElementById('mainHTML');
  if (mode.classList.contains('dark')) {
    mode.classList.remove('dark');
    document.getElementById('mainhead').classList.remove('white-shadow');
    document.getElementById(
      'dark-button'
    ).innerHTML = `<i class="fa-solid fa-moon moon-animation"></i>`;
    document.getElementById('hero-container').innerHTML = `<img
        src="/images/QUANTUMLIGHT.png"
        alt=""
        id="heroimg"
        />`;
  } else {
    mode.classList.add('dark');
    document.getElementById('mainhead').classList.add('white-shadow');
    document.getElementById(
      'dark-button'
    ).innerHTML = `<i class="fa-solid fa-sun sun-animation"></i>`;
    document.getElementById('hero-container').innerHTML = `<img
          src="/images/QUANTUMDARK.png"
          alt=""
          id="heroimg"
        />`;
  }
};

// Mobile Nav On Off Function
const mobNav = () => {
  const nav = document.getElementById('mobile');
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    document.getElementById(
      'hamburgerico'
    ).innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    nav.classList.add('open');
    document.getElementById(
      'hamburgerico'
    ).innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};
