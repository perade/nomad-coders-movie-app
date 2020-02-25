import React from 'react';

function Food ({ name, image }) {
  return (
    <div>
      <h2>I love { name }</h2>
      <img src={ image } />
    </div>
  );
}

const foods = [
  {
    name: 'kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg'
  },
  {
    name: 'bulgogi',
    image: 'https://damndelicious.net/wp-content/uploads/2019/04/Korean-Beef-BulgogiIMG_9246.jpg'
  },
  {
    name: 'ramen',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.7496251874062968xh;center,top&resize=1200:*'
  }
];

function App () {
  return (
    <div>
      {foods.map(dish => <Food name={dish.name} image={dish.image} />)}
    </div>
  );
}

export default App;
