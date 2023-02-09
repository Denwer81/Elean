import imageUrl1 from '../../images/productCards/3c95a50d-b188-44f2-b5be-b7620401fddc-590x965.jpeg'
import imageUrl2 from '../../images/productCards/a9dff593-5bd7-4cf6-ae6c-0021ba167278-700x900.jpeg'
import imageUrl3 from '../../images/productCards/ab42a0fe-f636-4164-8dd1-a503734650d9-700x900.jpeg'
import imageUrl4 from '../../images/productCards/elean01091-700x900.jpg'

export const cardData = [
  {
    image: imageUrl1,
    title: 'Жакет шоколадный',
    price: 33500,
    text: 'Новинка',
  },
  {
    image: imageUrl2,
    title: 'Жакет приталенный шоколадный',
    price: 14400,
    text: 'супер',
  },
  {
    image: imageUrl3,
    title: 'Жакет приталенный',
    price: 555,
    text: 'Новинка',
  },
  {
    image: imageUrl4,
    title: 'шоколадный',
    price: 42000,
    text: 'Новинка',
  },
  {
    image: imageUrl1,
    title: 'Жакет шоколадный',
    price: 66044,
    text: 'Новинка',
  },
  {
    image: imageUrl2,
    title: 'Жакет приталенный шоколадный',
    price: 77552,
    text: 'Новинка',
  },
  {
    image: imageUrl3,
    title: 'Жакет приталенный шоколадный',
    price: 6633,
    text: 'Новинка',
  },
  {
    image: imageUrl4,
    title: 'Жакет приталенный',
    price: 5444,
    text: 'супер',
  },
  {
    image: imageUrl1,
    title: 'приталенный шоколадный',
    price: 33500,
    text: 'Новинка',
  },
  {
    image: imageUrl2,
    title: 'Жакет шоколадный',
    price: 55222,
    text: 'Новинка',
  },
]

export function shuffleCardData(array) {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array;
}
