import './style.css';
import CarouselElement from './carousel';

const imagesList = ['france.jpg','england.jpg','times_square.jpg','amsterdam.jpg']

const carouselInstance = new CarouselElement(imagesList);

document.querySelector('#app')!.innerHTML = carouselInstance.elementBuilder()

carouselInstance.imageAppender()
