import html from './html.js';

const contact = (() => {
  const create = () => {
    const mainContainer = html.createElement({ type: 'div', id: 'contact', text: 'contact' });
    return mainContainer;
  };
  return { create };
})();

export default contact;
