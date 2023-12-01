import './styles/index.css';
import {buildHeader, buildFooter} from './pages/initalize';
import {displayHome} from './pages/home.js';
import { displayContact } from './pages/contact.js';

const body = document.querySelector('body');
const content = document.querySelector('#content');

body.insertBefore(buildHeader(), content);
displayHome();
displayContact();
body.appendChild(buildFooter());
 