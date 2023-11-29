import './styles/index.css';
import { buildHeader, buildFooter } from './pages/initalize';

const body = document.querySelector('body');
const content = document.querySelector('#content');


body.insertBefore(buildHeader(), content);
body.appendChild(buildFooter());