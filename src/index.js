import './styles/index.css';
import {buildHeader, buildFooter} from './pages/initalize';
import { displayMenu } from './pages/menu.js';
// import {displayHome} from './pages/home.js';

const body = document.querySelector('body');
const content = document.querySelector('#content');

body.insertBefore(buildHeader(), content);
content.innerHTML = displayMenu();
// content.innerHTML = displayHome();
body.appendChild(buildFooter());
 