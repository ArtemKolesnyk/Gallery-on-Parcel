import { refs, updataAtrr } from '../index';
import { slideLeft, slideRight } from './slider';

const ESC_KEY_CODE = 'Escape';

function openModal() {
  refs.modalGallery.classList.add('is-open');
  addEventListener('keydown', onEscKeyPress);
  addEventListener('keydown', slideRight);
  addEventListener('keydown', slideLeft);
  refs.owerlay.addEventListener('click', onOwerlayClick);
  refs.btnClose.addEventListener('click', closeModalGalery);
}

function clickOnImg(e) {
  e.preventDefault();
  const isImg = e.target;
  if (!isImg) {
   return
  }
  refs.lightBoxImg.src = isImg.dataset.source;
  openModal();
}

function onOwerlayClick () {
  closeModalGalery();
}

function onEscKeyPress(e) {
  const isEscKey = e.code;
  if (isEscKey === ESC_KEY_CODE) {
    closeModalGalery();
  }
}

function closeModalGalery() {
  refs.modalGallery.classList.remove('is-open');
  updataAtrr();
}

export { openModal, clickOnImg, onOwerlayClick, closeModalGalery};