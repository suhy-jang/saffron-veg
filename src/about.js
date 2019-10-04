import html from './html.js'

const about = (() => {
  const description_saffron =
    'Saffron is a spice derived from the flower. \
    The threads of the flower are collected and dried to be used mainly as a \
    seasoning and colouring agent in food.';
  const description_vegetarian =
    'Vegetables contain important vitamins and minerals for our body. \
    Our restaurant serve south Indian cuisine made by fresh vegetables. \
    Please visit us to enjoy healthy meals and the flavour with spice.';

  const create = () => {
    const mainContainer = html.createElement({ type: 'div', id: 'about', classes: ['main-contents'] });
    const header = html.createElement({ type: 'h1', classes: ['text-align-center', 'h-title'], text: 'About Us'});
    const pOne = html.createElement({ type: 'p', classes: ['description'], text: description_saffron});
    const pTwo = html.createElement({ type: 'p', classes: ['description'], text: description_vegetarian});
    const info = html.createElement({ type: 'div', classes: ['about-info', 'white-space-pre'] });
    const addressHeader = html.createElement({ type: 'span', classes: ['title'], text: 'ADDRESS:' });
    const addressBody = html.createElement({ type: 'span', text: 'xxx, Tamil Nadu, India\n' });
    const contactHeader = html.createElement({ type: 'span', classes: ['title'], text: 'CONTACT:' });
    const contactBody = html.createElement({ type: 'span', text: '+91.xxxx.xxxx\n' });
    const cuisineHeader = html.createElement({ type: 'span', classes: ['title'], text: 'CUISINE:' });
    const cuisineBody = html.createElement({ type: 'span', text: 'South Indian\n' });
    const timingsHeader = html.createElement({ type: 'span', classes: ['title'], text: 'TIMINGS:' });
    const timingsBody = html.createElement({ type: 'span', text: '07:00 AM - 2:30 PM, 4:00 PM - 8:30 PM\n' });
    mainContainer.appendChild(header);
    mainContainer.appendChild(pOne);
    mainContainer.appendChild(pTwo);
    mainContainer.appendChild(info);
    info.appendChild(addressHeader);
    info.appendChild(addressBody);
    info.appendChild(contactHeader);
    info.appendChild(contactBody);
    info.appendChild(cuisineHeader);
    info.appendChild(cuisineBody);
    info.appendChild(timingsHeader);
    info.appendChild(timingsBody);
    return mainContainer;
  }
  return { create };
})();

export default about;
