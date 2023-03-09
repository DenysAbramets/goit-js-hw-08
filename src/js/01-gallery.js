import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";




console.log(galleryItems);

const containerGallery = document.querySelector(".gallery");
 const makeGallery = createGalleryImage(galleryItems);

 containerGallery.innerHTML = makeGallery;

function createGalleryImage(galleryItems){
    return galleryItems.map(image => {
        return ` <a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" title="" />
</a>
        `
    }).join("");

};

    




const lightbox = new SimpleLightbox(".gallery a", {
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
  });