import { renderPictures } from './pictures.js';
import './forms.js';
import { getData, sendData } from './api.js';
import { renderGetErrorMessage } from './error.js';
getData((data) => { renderPictures(data) }, renderGetErrorMessage);
