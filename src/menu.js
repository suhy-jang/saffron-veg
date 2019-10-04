import html from './html.js'

const menu = (() => {
  const create = () => {
    const mainContainer = html.createElement({ type: 'div', id: 'menu', text: 'menu' });
    const setMenu = html.createElement({ type: 'div', classes: ['set-menu', 'food-items', 'd-flex', 'flex-wrap']});
    const setMenuHeader = html.createElement({ type: 'h1', classes: ['h-title'], text: 'Meal'});
    // const setMenuitems = [];
    let foodItem = html.createElement({ type: 'div', classes: ['food-item']});
    let foodImage, foodBody;
    foodImage = html.createElement({ type: 'img', src: './../assets/images/dosa_320.webp', alter: 'Dosa image' });
    foodBody = html.createElement({ type: 'div', classes: ['menu-description'], text: 'Dosai (+ sambar, chutney) Rs.60'});
    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodBody);
    setMenu.appendChild(setMenuHeader);
    setMenu.appendChild(foodItem);
    mainContainer.appendChild(setMenu);
    // setMenuitems << foodItem;
    return mainContainer;
  }
  return { create };
})();

export default menu;
