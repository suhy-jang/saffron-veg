import moment from 'moment';
import html from './html';

const layout = (() => {
  const createHeader = () => html.createElement({
    tag: 'header',
    classes: 'restaurant-name text-stroke-black',
    text: 'Saffron Veg',
  });
  const createFooter = () => html.createElement({
    tag: 'footer',
    classes: 'copyright',
    text: `© Copyright ${moment().year()} Saffron veg. All rights reserved.`,
  });
  return { createHeader, createFooter };
})();

export default layout;
