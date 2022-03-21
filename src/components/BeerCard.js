import React, { useState } from 'react';
import './beer.css'

function BeerCard(props) {
  const { image_url, name, abv, tagline, description } = props.singleBeer;
  const [isLiked, setIsLiked] = useState(false)

  return (
    <li className='beerListItem'>
      <div className="beerImageWrapper">
        <img 
          className='beerImage' 
          src={image_url} 
          alt={name} 
        />
      </div>
      <div className="beerDescription">
        <h2>{name}</h2>
        <h3>{abv} abv | {tagline}</h3>
        <p>{description}</p>
        <button className='heartButton' onClick={() => {!isLiked ? setIsLiked(true) : setIsLiked(false)}}>
          {isLiked ? 
            <i style={{color: "rgb(15, 15, 15)"}} class="fas fa-heart fa-2x"></i> :
              <i style={{color: "rgb(15, 15, 15)"}} className="far fa-heart fa-2x"></i>
          }
        </button>
      </div>
    </li>
  )
}

export default BeerCard;