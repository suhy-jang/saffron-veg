import html from './html.js'

const navTap = (() => {

  const create = () => {
    const taps = html.createElement({ type: 'ul', classes: ['nav-tap', 'list-style-none'] });
    const tapAbout = html.createElement({ type: 'li', classes: ['tap-about'], text: 'about' });
    const tapMenu = html.createElement({ type: 'li', classes: ['tap-menu'], text: 'menu' });
    const tapContact = html.createElement({ type: 'li', classes: ['tap-contact'], text: 'contact' });
    const tapReserved = html.createElement({ type: 'li', classes: ['tap-reserved'] });
    taps.appendChild(tapAbout);
    taps.appendChild(tapMenu);
    taps.appendChild(tapContact);
    taps.appendChild(tapReserved);
    return taps;
  };

  const toggleDisplay = (taps, choice) => {
    taps.forEach(tap => {
      if (tap == choice) {
        tap.style.display = 'block';
      } else {
        tap.style.display = 'none';
      }
    })
  }

  const addClicks = () => {
    const partialAbout = document.querySelector('#about');
    const partialMenu = document.querySelector('#menu');
    const partialContact = document.querySelector('#contact');

    const openAbout = toggleDisplay([partialAbout, partialMenu, partialContact], partialAbout);
    const openMenu = toggleDisplay([partialAbout, partialMenu, partialContact], partialMenu);
    const openContact = toggleDisplay([partialAbout, partialMenu, partialContact], partialContact);

    document.querySelector('.tap-about').addEventListener('click', openAbout);
    document.querySelector('.tap-menu').addEventListener('click', openMenu);
    document.querySelector('.tap-contact').addEventListener('click', openContact);
    openAbout();
  }

  return { create, addClicks };
})();

export default navTap;
