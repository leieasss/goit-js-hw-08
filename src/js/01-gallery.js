import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");


galleryUl.innerHTML = galleryItems.map(item => {
    // console.log(item)

    const {preview, original, description} = item;

    const html = `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>
        </li>`
    return html.trim();
}).join("")


const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

