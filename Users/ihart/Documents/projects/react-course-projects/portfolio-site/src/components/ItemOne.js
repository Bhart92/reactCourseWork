import React from 'react';

const ItemOne = (props) => (

  <div>

  <h1>Item one {props.match.params.id}</h1>

  </div>
);



export default ItemOne;
