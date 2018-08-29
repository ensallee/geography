import React from 'react';

const Tile = (props) => {
  return (
    <div className="tile">
      <h6 className="copy vertical-align">{props.name}</h6>
    </div>
  )
}



export default Tile;
