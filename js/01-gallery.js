import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv=document.querySelector(".gallery");

galleryItems.forEach(element => {
  const stringToHtml=`<a class="gallery__link" href="${element.original}"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"></img></a>`;
  galleryDiv.insertAdjacentHTML("afterbegin",stringToHtml);
});

galleryDiv.addEventListener("click", (evt)=>{
  evt.preventDefault();
  if (evt.target.tagName!=="IMG") {
    return
  };
  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`)
  instance.show();
  galleryDiv.addEventListener("keydown",()=>{
    instance.close()
  });
});

