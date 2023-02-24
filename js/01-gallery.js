import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createImageMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onImgClick);

function createImageMarkup (galleryItems)  {
    return galleryItems.map(({preview, original, description}) => {
            return `
            <div class = 'gallery__item'> 
                <a class = 'gallery__link' href = '${original}'>
                    <img    
                        class = 'gallery__image'
                        src = '${preview}' 
                        alt = '${description}' 
                        width = '340' 
                        data-source = '${original}'></img>
                </a>
            </div>
            `
    }).join('');
}




function onImgClick(e){
  e.preventDefault();
  const isItemImage = e.target.classList.contains('gallery__image')
  if(!isItemImage){
    return;
  }
  const currentImgUrl = e.target.dataset.source;
  
    const instance = basicLightbox.create(
    `
		<img src="${currentImgUrl}" width="1280" height="auto"/>
        `,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscapeKeyPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscapeKeyPress);
      },
    }
  );
  instance.show();

  function onEscapeKeyPress(e) {
        const ESCAPE_KEY_CODE = 'Escape';
        const isEscapeKey = e.code === ESCAPE_KEY_CODE;
        if (!isEscapeKey) return;
        instance.close();
      }
}