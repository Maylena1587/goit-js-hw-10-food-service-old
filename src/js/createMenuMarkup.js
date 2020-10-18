import menuItems from '../menu.json';
import itemsTemplate from '../templates/menu-items.hbs';

const menuEl = document.querySelector('.js-menu');

const markup = itemsTemplate(menuItems);
menuEl.insertAdjacentHTML('beforeend', markup);