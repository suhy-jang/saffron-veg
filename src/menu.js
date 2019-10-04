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
        displayName: 'Hot Idli (+ sambar, chutney) \n (breakfast only)',
        price: 'Rs.60',
      },
      bisiBele: {
        imgSrc: './../assets/images/bisibele_bath_320.webp',
        displayName: 'Bisi bele (+ chips)',
        price: 'Rs.80',
      },
    },
    nonSetMenu: {
      chitranna: {
        imgSrc: './../assets/images/chitranna_320.webp',
        displayName: 'Chitranna',
        price: 'Rs.40',
      },
      chanaMasala: {
        imgSrc: './../assets/images/chana_masala_320.webp',
        displayName: 'Chana masala',
        price: 'Rs.40',
      },
      sambar: {
        imgSrc: './../assets/images/sambar_320.webp',
        displayName: 'Sambar',
        price: 'Rs.30',
      },
      potatoCurry: {
        imgSrc: './../assets/images/potato_curry_320.webp',
        displayName: 'Potato curry',
        price: 'Rs.40',
      },
      alooVada: {
        imgSrc: './../assets/images/aloo_vada_213.webp',
        displayName: 'Aloo vada',
        price: 'Rs.20',
      },
    },
    sweetMenu: {
      gulabJamun: {
        imgSrc: './../assets/images/gulab_jamun_213.webp',
        displayName: 'Gulab jamun',
        price: 'Rs.10',
      },
      jalebi: {
        imgSrc: './../assets/images/jalebi_320.webp',
        displayName: 'Jalebi',
        price: 'Rs.10',
      },
      carrotHalwa: {
        imgSrc: './../assets/images/carrot_halwa_213.webp',
        displayName: 'Carrot halwa',
        price: 'Rs.20',
      },
    },
    hotDrinkMenu: {
      tea: {
        imgSrc: './../assets/images/chai_213.webp',
        displayName: 'Coffee with milk / \nBlack tea with milk',
        price: 'Rs.20',
      },
    },
    coldDrinkMenu: {
      water: {
        imgSrc: './../assets/images/water_jug_213.webp',
        displayName: 'Water',
        price: 'Rs.20',
      },
      cola: {
        imgSrc: './../assets/images/cola_213.webp',
        displayName: 'Cola',
        price: 'Rs.40',
      },
      pomegranateMilk: {
        imgSrc: './../assets/images/pomegranate_milk_213.webp',
        displayName: 'Pomegranate milk shake',
        price: 'Rs.60',
      },
      chocolateMilk: {
        imgSrc: './../assets/images/choco_milk_213.webp',
        displayName: 'Chocolate milk shake',
        price: 'Rs.60',
      },
    },
  };

  const removeSideDish = name => name.split(' (')[0];

  const createFoodItem = item => {
    const foodItem = html.createElement({ tag: 'div', classes: 'food-item' });
    const imageAlt = `${removeSideDish(item.displayName)} image`;
    const foodImage = html.createElement({ tag: 'img', src: item.imgSrc, alt: imageAlt });
    const foodBody = html.createElement({ tag: 'div',
                                          classes: 'menu-description white-space-wrap',
                                          text: `${item.displayName} ${item.price}` });
    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodBody);
    return foodItem;
  }

  const createFoodItemGroup = ({ itemClass, headerText, menuItem }) => {
    const container = html.createElement({ tag: 'div', classes: `${itemClass} food-items d-flex flex-wrap` });
    const header = html.createElement({ tag: 'h1', classes: 'h-title', text: headerText });
    container.appendChild(header);
    Object.values(menuItems[menuItem]).forEach(item => container.appendChild(createFoodItem(item)));
    return container;
  }

  const create = () => {
    const mainContainer = html.createElement({ tag: 'div', id: 'menu'});
    mainContainer.appendChild(createFoodItemGroup({ itemClass: 'set-menu', headerText: 'Meal', menuItem: 'setMenu' }));
    mainContainer.appendChild(createFoodItemGroup({ itemClass: 'non-set-menu', headerText: 'General Dishes', menuItem: 'nonSetMenu' }));
    mainContainer.appendChild(createFoodItemGroup({ itemClass: 'sweet-menu', headerText: 'Sweets', menuItem: 'sweetMenu' }));
    const drinkContainer = html.createElement({ tag: 'div', classes: 'drink-menu food-items d-flex flex-wrap'});
    drinkContainer.appendChild(createFoodItemGroup({ itemClass: 'hot-drink-menu', headerText: 'Hot drinks', menuItem: 'hotDrinkMenu'}));
    drinkContainer.appendChild(createFoodItemGroup({ itemClass: 'cold-drink-menu', headerText: 'Cold drinks', menuItem: 'coldDrinkMenu'}));
    mainContainer.appendChild(drinkContainer);
    return mainContainer;
  };
  return { create };
})();

export default menu;
