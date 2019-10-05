import html from './html.js';
import menuItems from './menu_items.js';

const menu = (() => {
  const removeSideDish = name => name.split(' (')[0];

  const createFoodItem = (item) => {
    const foodItem = html.createElement({ tag: 'div', classes: 'food-item' });
    const imageAlt = `${removeSideDish(item.displayName)} image`;
    const foodImage = html.createElement({ tag: 'img', src: item.imgSrc, alt: imageAlt });
    const foodBody = html.createElement({
      tag: 'div',
      classes: 'menu-description white-space-wrap',
      text: `${item.displayName} ${item.price}`,
    });
    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodBody);
    return foodItem;
  };

  const createFoodItemGroup = ({ itemClass, headerText, menuItem }) => {
    const container = html.createElement({ tag: 'div', classes: `${itemClass} food-items d-flex flex-wrap` });
    const header = html.createElement({ tag: 'h1', classes: 'h-title', text: headerText });
    container.appendChild(header);
    Object.values(menuItems[menuItem]).forEach(item => container.appendChild(createFoodItem(item)));
    return container;
  };

  const create = () => {
    const mainContainer = html.createElement({ tag: 'div', id: 'menu' });
    mainContainer.appendChild(createFoodItemGroup({ itemClass: 'set-menu', headerText: 'Meal', menuItem: 'setMenu' }));
    mainContainer.appendChild(createFoodItemGroup({ itemClass: 'non-set-menu', headerText: 'General Dishes', menuItem: 'nonSetMenu' }));
    mainContainer.appendChild(createFoodItemGroup({ itemClass: 'sweet-menu', headerText: 'Sweets', menuItem: 'sweetMenu' }));
    const drinkContainer = html.createElement({ tag: 'div', classes: 'drink-menu food-items d-flex flex-wrap' });
    drinkContainer.appendChild(createFoodItemGroup({ itemClass: 'hot-drink-menu', headerText: 'Hot drinks', menuItem: 'hotDrinkMenu' }));
    drinkContainer.appendChild(createFoodItemGroup({ itemClass: 'cold-drink-menu', headerText: 'Cold drinks', menuItem: 'coldDrinkMenu' }));
    mainContainer.appendChild(drinkContainer);
    return mainContainer;
  };
  return { create };
})();

export default menu;
