const renderPictures = (pictures) => {
  const userPictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const pictureFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const { url, comments, likes } = picture;
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureFragment.appendChild(pictureElement);
  });

  userPictures.appendChild(pictureFragment);
};
export { renderPictures };
