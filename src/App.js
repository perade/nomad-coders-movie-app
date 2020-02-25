import React from 'react';

function Food ({ fav }) {
return <h1>I love { fav }</h1>;
}

function App () {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food
        fav="kimchi"
      />
      <Food
        fav="ramen"
      />
      <Food
        fav="bulgogi"
      />
    </div>
  );
}

export default App;
