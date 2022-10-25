import galleryItems from './js/data';
import { clickOnImg } from './js/modal';

const refs = {
  ListGalleryItems: document.querySelector('.js-gallery'),
  modalGallery: document.querySelector('.js-lightbox'),
  btnClose: document.querySelector('.lightbox__button'),
  lightBoxImg: document.querySelector('.lightbox__image'),
  owerlay: document.querySelector('.lightbox__overlay'),
  lazyImg: document.querySelectorAll('img[loading="lazy"]'),
}


const markupItemGallery = creatMarkupGaleryItem(galleryItems);

refs.ListGalleryItems.insertAdjacentHTML('beforeend', markupItemGallery); 
refs.ListGalleryItems.addEventListener('click', clickOnImg);

function creatMarkupGaleryItem(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
    return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            loading="lazy"
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
    }).join('');
};

 function updataAtrr(src = '', alt = '') { 
  refs.lightBoxImg.src = src;
  refs.lightBoxImg.alt = alt;
}

export { galleryItems, refs, updataAtrr };
















