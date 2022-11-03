function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


function checkStringLength (string, length) {
  return string.length <= length;
}

const PHOTOS_COUNT = 25;
const AVATARS_COUNT = 6;
const COMMENTS_COUNT = getRandomPositiveInteger(1, 10);

const LikesCount = {
  MIN: 15,
  MAX: 200,
};

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Пространное описание',
  'Смешное описание',
  'Описание - стихотворение',
  'Грустное описание',
  'Загадочное описание',
  'Краткое описание',
  'Описание - цитата',
  'Рекламное описание',
  'Девятое описание',
];

const NICKNAMES = [
  'Бэтмен',
  'Человек-паук',
  'Женщина-кошка',
  'Чудо-женщина',
  'Робин',
  'Альфред',
];

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
