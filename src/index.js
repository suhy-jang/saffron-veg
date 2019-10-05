import navTap from './nav_tap';
import about from './about';
import menu from './menu';
import contact from './contact';
import layout from './layout';
import html from './html';

const main = document.querySelector('div#content');

main.appendChild(navTap.create());
main.appendChild(about.create());
main.appendChild(menu.create());
main.appendChild(contact.create());

main.parentNode.insertBefore(layout.createHeader(), main);
main.parentNode.appendChild(layout.createFooter());

navTap.toggle({ defaultTapName: 'about' });
html.resizeTextarea();
