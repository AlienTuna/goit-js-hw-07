import { galleryItems } from './gallery-items.js';

const parrentGalleryEl = document.querySelector('ul.gallery');
// создание разметки галереи
parrentGalleryEl.insertAdjacentHTML('beforeend', createGallery(galleryItems));
function createGallery(items) {

    return items.map(({ preview, original, description }, ind) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `;
    }).join('');
}

let bigImgEl;
// прослушивание события при нажатии на изображение (делигирование)
parrentGalleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
    e.preventDefault();
    const TARGET_TYPE = 'IMG';
    const isImg = e.target.nodeName === TARGET_TYPE;
    if (!isImg) {
        return;
    }

    const currentImgAdress = e.target.getAttribute('data-source')

    bigImgEl = basicLightbox.create(`
        <img src="${currentImgAdress}" width="800" height="600">
    `).show()

    // document.addEventListener('keydown', onEscapeKeyDown)
}

// function onEscapeKeyDown(e) {

//     console.log(e.code);
//     if (e.code !== 'Escape'){
//         return 'Not escape'
//     }
//     bigImgEl.close();
//     document.removeEventListener('keydown', onEscapeKeyDown);

// }
