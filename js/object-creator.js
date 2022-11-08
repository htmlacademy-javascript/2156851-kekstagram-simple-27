import {getRandomPositiveInteger} from './utils.js'
import {PHOTOS_COUNT, AVATARS_COUNT, COMMENTS_COUNT, LikesCount, MESSAGES, DESCRIPTIONS, NICKNAMES} from './costants.js';

const createMessage = () => {
  Array.from({ length: getRandomPositiveInteger(1, 2)}, () => getRandomArrayElement(MESSAGES)).join('');
};

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_COUNT)}.jpg`,
  message: createMessage(),
  name: getRandomArrayElement(NICKNAMES),
});

const createPhoto = (_, index) => ({
  id: (index + 1),
  url: `photos/${index + 1}.jpg`,
  description: `${getRandomArrayElement(DESCRIPTIONS)}`,
  likes: getRandomPositiveInteger(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from(
    {length: getRandomPositiveInteger(0, COMMENTS_COUNT)}, creatComment
  )
});

const getPhotos = Array.from({length: PHOTOS_COUNT}, createPhoto);
export {getPhotos}
