// ================================================================

const gallery = document.querySelector('.gallery');

function createGalleryItems() {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
gallery.innerHTML = createGalleryItems();

// ================================================================

gallery.addEventListener('click', onShowOriginalImg);

function onShowOriginalImg(e) {
  if (e.target === e.currentTarget) return;
  e.preventDefault();

  const instance = basicLightbox.create(
    `
    <img src=${e.target.dataset.source} alt="${e.target.alt}" width="1112" height="auto"/>`,
    {
      onShow: instance => {
        document.addEventListener('keydown', onPressEscapeImg);
      },

      onClose: instance => {
        document.removeEventListener('keydown', onPressEscapeImg);
      },
    }
  );

  instance.show();

  function onPressEscapeImg(e) {
    if (e.code === 'Escape') instance.close();
  }
}
