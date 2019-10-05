import html from './html.js';

const about = (() => {
  const descriptionSaffron = 'Saffron is a spice derived from the flower.'
    + 'The threads of the flower are collected and dried to be used mainly as a'
    + 'seasoning and colouring agent in food.';

  const descriptionVegetarian = 'Vegetables contain important vitamins and minerals for our body.'
    + 'Our restaurant serve south Indian cuisine made by fresh vegetables.'
    + 'Please visit us to enjoy healthy meals and the flavour with spice.';

  const writeDescriptions = () => [
    html.createElement({ tag: 'h1', classes: 'text-align-center h-title', text: 'About Us' }),
    html.createElement({ tag: 'p', classes: 'description', text: descriptionSaffron }),
    html.createElement({ tag: 'p', classes: 'description', text: descriptionVegetarian }),
  ];

  const writeInfos = () => [
    html.createElement({ tag: 'span', classes: 'title', text: 'ADDRESS: ' }),
    html.createElement({ tag: 'span', text: 'xxx, Tamil Nadu, India\n' }),
    html.createElement({ tag: 'span', classes: 'title', text: 'CONTACT: ' }),
    html.createElement({ tag: 'span', text: '+91.xxxx.xxxx\n' }),
    html.createElement({ tag: 'span', classes: 'title', text: 'CUISINE: ' }),
    html.createElement({ tag: 'span', text: 'South Indian\n' }),
    html.createElement({ tag: 'span', classes: 'title', text: 'TIMINGS: ' }),
    html.createElement({ tag: 'span', text: '07:00 AM - 2:30 PM, 4:00 PM - 8:30 PM\n' }),
  ];

  const create = () => {
    const mainContainer = html.createElement({ tag: 'div', id: 'about', classes: 'main-contents' });
    const infoContainer = html.createElement({ tag: 'div', classes: 'about-info white-space-wrap' });
    writeInfos().forEach(info => infoContainer.appendChild(info));
    writeDescriptions().forEach(description => mainContainer.appendChild(description));
    mainContainer.appendChild(infoContainer);
    return mainContainer;
  };
  return { create };
})();

export default about;
