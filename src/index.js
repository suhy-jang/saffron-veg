import navTap from './components/nav_tap';
import about from './components/about';
import menu from './components/menu';
import contact from './components/contact';
import layout from './components/layout';
import html from './components/html';

const main = document.querySelector('div#content');

main.appendChild(navTap.create());
main.appendChild(about.create());
main.appendChild(menu.create());
main.appendChild(contact.create());

main.parentNode.insertBefore(layout.createHeader(), main);
main.parentNode.appendChild(layout.createFooter());

navTap.toggle({ defaultTapName: 'about' });
html.resizeTextarea();
