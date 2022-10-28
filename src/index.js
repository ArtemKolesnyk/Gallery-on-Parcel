import galleryItems from './js/data.json';
import gallerycardsTpl from './tamplates/gallery-cards.hbs' 
// import galleryCardTpl from './tamplates/gallery-card.hbs'; is one gallery card
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
  // return galleryItems.map(galleryCardTpl).join(''); render one card
  return gallerycardsTpl(galleryItems); 
};

 function updataAtrr(src = '', alt = '') { 
  refs.lightBoxImg.src = src;
  refs.lightBoxImg.alt = alt;
}

export { galleryItems, refs, updataAtrr };
















