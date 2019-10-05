import navTap from './nav_tap.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';
import layout from './layout.js';
import html from './html.js';

const main = document.querySelector('div#content');

main.appendChild(navTap.create());
main.appendChild(about.create());
main.appendChild(menu.create());
main.appendChild(contact.create());

main.parentNode.insertBefore(layout.createHeader(), main);
main.parentNode.appendChild(layout.createFooter());

navTap.toggle({ default_tap: 'about' });
html.resizeTextarea();
