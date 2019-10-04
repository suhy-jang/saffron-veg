import html from './html.js';

const menu = (() => {
  const menuItems = {
    setMenu: {
      dosa: {
        imgSrc: './../assets/images/dosa_320.webp',
        displayName: 'Dosai (+ sambar, chutney)',
        price: 'Rs.60',
      },
      upma: {
        imgSrc: './../assets/images/upma_320.webp',
        displayName: 'Upma (+ sambar, chutney)',
        price: 'Rs.60',
      },
      idly: {
        imgSrc: './../assets/images/idly_320.webp',
        displayName: 'Hot Idli (+ sambar, chutney, \n' + 'breakfast only)',
        price: 'Rs.60',
      },
      bisi_bele: {
        imgSrc: './../assets/images/bisibele_bath_320.webp',
        displayName: 'Bisi bele (+ chips)',
        price: 'Rs.80',
      },
    },

  };

  const removeSideDish = name => name.split(' (')[0];

  const createFoodItem = item => {
    const foodItem = html.createElement({ type: 'div', classes: ['food-item'] });
    const imageAlt = `#{removeSideDish(item.displayName)} image`;
    const foodImage = html.createElement({ type: 'img', src: item.imgSrc, alt: imageAlt });
    const foodBody = html.createElement({ type: 'div', classes: ['menu-description'],
                                          text: `${item.displayName} ${item.price}` });
    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodBody);
    return foodItem;
  }

  const create = () => {
    const mainContainer = html.createElement({ type: 'div', id: 'menu' });
    const setMenuContainer = html.createElement({ type: 'div', classes: ['set-menu', 'food-items', 'd-flex', 'flex-wrap'] });

    const setMenuHeader = html.createElement({ type: 'h1', classes: ['h-title'], text: 'Meal' });
    setMenuContainer.appendChild(setMenuHeader);
    Object.values(menuItems.setMenu).forEach(item => setMenuContainer.appendChild(createFoodItem(item)));
    mainContainer.appendChild(setMenuContainer);
    return mainContainer;
  };
  return { create };
})();

export default menu;
