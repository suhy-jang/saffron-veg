import html from './html.js'

const navTap = (() => {
  const taps = html.createElement({ type: 'ul', classes: ['nav-tap', 'list-style-none'] });
  const tapAbout = html.createElement({ type: 'li', classes: ['about'], text: 'about' });
  const tapMenu = html.createElement({ type: 'li', classes: ['menu'], text: 'menu' });
  const tapContact = html.createElement({ type: 'li', classes: ['contact'], text: 'contact' });
  const tapReserved = html.createElement({ type: 'li', classes: ['reserved'] });
  taps.appendChild(tapAbout);
  taps.appendChild(tapMenu);
  taps.appendChild(tapContact);
  taps.appendChild(tapReserved);
  return { taps };
})();

export default navTap;
