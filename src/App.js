import React from 'react';
import PropTypes from 'prop-types';

function Food ({ name, image, rating }) {
  return (
    <div>
      <h2>I love { name }</h2>
      <h4>{rating} / 5</h4>
      <img src={ image } alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foods = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'bulgogi',
    image: 'https://damndelicious.net/wp-content/uploads/2019/04/Korean-Beef-BulgogiIMG_9246.jpg',
    rating: 4
  },
  {
    id: 3,
    name: 'ramen',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.7496251874062968xh;center,top&resize=1200:*',
    rating: 3
  }
];

function App () {
  return (
    <div>
      {foods.map(dish => <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;
