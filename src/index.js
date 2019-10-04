import navTap from './nav_tap.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';

const main = document.querySelector('div#content');

main.appendChild(navTap.create());
main.appendChild(about.create());
main.appendChild(menu.create());
main.appendChild(contact.create());

navTap.addClicks();
