import {PHOTOS_COUNT, AVATARS_COUNT, COMMENTS_COUNT, MESSAGES, DESCRIPTIONS, NICKNAMES} from './main.js'

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function isCorrectLength (string, length) {
  return string.length <= length;
}


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createMessage = () => {
  Array.from({ length: getRandomPositiveInteger(1, 2)}, () => getRandomArrayElement(MESSAGES)).join('');
};

const creatComment = (index) => ({
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

isCorrectLength(1, 140);
getRandomPositiveInteger();
getPhotos();



