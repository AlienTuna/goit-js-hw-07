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

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
 });

