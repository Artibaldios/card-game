import {useRef} from 'react';
import { iCard } from "../../types/interfaces";
import './Card.css';

interface CardProps {
  card: iCard;
  handleCardClick: (event: React.MouseEvent) => void;
  inspectTouchStart: (event: React.TouchEvent) => void;
  handleImageLoad: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}

const Card: React.FC<CardProps> = ({ card, handleCardClick, inspectTouchStart, handleImageLoad }) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const handleImageLoad2 = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if(imgRef.current?.complete){
      handleImageLoad(event)
    }
  };
  return (
    <div
      onClick={handleCardClick}
      onTouchStart={inspectTouchStart}
      className={`card ${card.live ? 'live' : 'killed'}`}
      key={card.id}
      style={{ backgroundColor: card.highlighted ? '#ff5722' : '#fff' }}
    >
      <img ref={imgRef} onLoad={handleImageLoad2} src={card.getImageSrc()} alt={card.id.toString()}></img>
      <div className='card-info'>
        <h3>{card.name}</h3>
      </div>
      <h3 className='diagonal-text'>{card.live === false ? "DEAD" : ""}</h3>
    </div>
  );
};

export default Card;