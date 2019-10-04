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

  const togglePartial = (partialGroup, choiceName) => {
    partialGroup.forEach(partial => {
      if (partial.name == choiceName) {
        partial.obj.style.display = 'block';
      } else {
        partial.obj.style.display = 'none';
      }
    })
  }

  const addClicks = () => {
    let partials = [];
    ['about', 'menu', 'contact'].forEach(name => partials.push({ name: name }))
    partials.forEach(p => p.obj = document.querySelector(`#${p.name}`));
    partials.forEach(p => {
      const selector = document.querySelector(`.tap-${p.name}`);
      selector.addEventListener('click', () => togglePartial(partials, p.name));
    });
    togglePartial(partials, partials[1].name);
  }

  return { create, addClicks };
})();

export default navTap;
