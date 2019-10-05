import html from './html.js';
import moment from 'moment';

const layout = (() => {
  const createHeader = () => html.createElement({
    tag: 'div',
    classes: 'restaurant-name text-stroke-black',
    text: 'Saffron Veg',
  });
  const createFooter = () => html.createElement({
    tag: 'div',
    classes: 'copyright',
    text: `© Copyright ${moment().year()} Saffron veg. All rights reserved.`,
  });
  return { createHeader, createFooter };
})();

export default layout;
