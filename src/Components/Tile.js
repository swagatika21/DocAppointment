import React from "react";
import "./Styles/tile.css";
function Tile({ no, name, phone, token, selected })
 {
  const tileClass = selected ? 'hilightTile' : '';
  return (
    <div className={`mainTile ${tileClass}`}>
      <div className="tile">{no}</div>
      <div className="tile">{name}</div>
      <div className="tile">{phone}</div>
      <div className="tile">{token}</div>
    </div>
  );
}

export default Tile;
