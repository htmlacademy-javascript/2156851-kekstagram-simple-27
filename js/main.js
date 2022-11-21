//import {getPhotos} from './object-creator.js';
import {renderPictures} from'./pictures.js';
import './forms.js';
import {getData, sendData} from './api.js';
//renderPictures(getPhotos());
import {renderGetErrorMessage} from './error.js';
getData((data) => {renderPictures(data)}, renderGetErrorMessage);
