import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createImageMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);


function createImageMarkup (galleryItems)  {
    return galleryItems.map(({preview, original, description}) => {
            return `
             <li>
                <a class = 'gallery__item' href = '${original}'>
                    <img    
                        class = 'gallery__image'
                        src = '${preview}' 
                        alt = '${description}' />
                </a>
            </li>
            `
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

