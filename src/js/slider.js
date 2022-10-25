import { refs, galleryItems, updataAtrr } from '../index';
const ARR_RIHGT_KEY_CODE = 'ArrowRight';
const ARR_LEFT_KEY_CODE = 'ArrowLeft';


function slider(idx) {
  const { original, description } = galleryItems[idx];
  updataAtrr(original, description);
}

function slideRight(e) {
  const isRightKey = e.code;
  if (isRightKey === ARR_RIHGT_KEY_CODE) {
    let indexOfCurentImg = getIndex();
    if (indexOfCurentImg + 1 > galleryItems.length -1) {
      indexOfCurentImg = -1;
    }
    slider(indexOfCurentImg +1)
  }
}

function getIndex() {
 const source = galleryItems.map(({ original }) => original);
  return source.indexOf(refs.lightBoxImg.src);
}

function slideLeft(e) {
  const isLeftKey = e.code;
  if (isLeftKey === ARR_LEFT_KEY_CODE) {
    let indexOfCurentImg = getIndex();
    if (indexOfCurentImg === 0) {
      indexOfCurentImg = galleryItems.length;
    }
    slider(indexOfCurentImg -1)
  } 
}

export { slideRight, slideLeft, };






