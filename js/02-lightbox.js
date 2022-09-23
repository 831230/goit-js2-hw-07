import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList=document.querySelector(".gallery");

galleryItems.forEach(element => {
  const stringToHtml=`<a class="gallery__item" href="${element.original}"><img class="gallery__image" src="${element.preview}" alt="${element.description}"></img></a>`;
  galleryList.insertAdjacentHTML("afterbegin",stringToHtml);
});

galleryList.addEventListener("click", (evt)=>{
    evt.preventDefault();
    if (evt.target.tagName!=="IMG") {
      return
    };
    let gallery = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay:250 });
    gallery.on('show.simplelightbox')
  });