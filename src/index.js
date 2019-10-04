import navTap from './nav_tap.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';
import html from './html.js';

const main = document.querySelector('div#content');

const header = html.createElement({ tag: 'div',
  classes: 'restaurant-name text-stroke-black', text: 'Saffron Veg' });
main.appendChild(header);

main.appendChild(navTap.create());
main.appendChild(about.create());
main.appendChild(menu.create());
main.appendChild(contact.create());

const footer = html.createElement({ tag: 'div', classes: 'copyright',
  text: '© Copyright 2019 Saffron veg. All rights reserved.' });
main.appendChild(footer);

navTap.addClicks();
