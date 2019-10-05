import html from './html';

const navTap = (() => {
  const create = () => {
    const taps = html.createElement({ tag: 'ul', classes: 'nav-tap list-style-none' });
    taps.appendChild(html.createElement({ tag: 'li', classes: 'tap-about', text: 'about' }));
    taps.appendChild(html.createElement({ tag: 'li', classes: 'tap-menu', text: 'menu' }));
    taps.appendChild(html.createElement({ tag: 'li', classes: 'tap-contact', text: 'contact' }));
    taps.appendChild(html.createElement({ tag: 'li', classes: 'tap-reserved' }));
    return taps;
  };

  const togglePartial = (choiceName) => {
    const selector = document.querySelector(`#${choiceName}`);
    const startIndex = 1;
    const numTap = 3;
    for (let i = startIndex; i < startIndex + numTap; i++) {
      selector.parentNode.childNodes[i].style.display = 'none';
    }
    selector.style.display = 'block';
  };

  const toggle = ({ defaultTapName }) => {
    ['about', 'menu', 'contact'].forEach((name) => {
      const selector = document.querySelector(`.tap-${name}`);
      selector.addEventListener('click', () => togglePartial(name));
    });
    togglePartial(defaultTapName);
  };

  return { create, toggle };
})();

export default navTap;
