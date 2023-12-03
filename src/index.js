import './styles/index.css';
import {buildHeader, buildFooter} from './pages/initalize';
import {displayHome} from './pages/home.js';

const body = document.querySelector('body');
const content = document.querySelector('#content');

body.insertBefore(buildHeader(), content);
content.innerHTML = displayHome();
body.appendChild(buildFooter());
 