import './Card.scss';
import '../Column/Column';
import React from 'react';

const Card = (props) => {
    const {card, onDeleteCard} = props;

    const handleDeleteClick = () => {
        // Call the onDeleteCard function with the card object
        onDeleteCard(card);
      };

    return (
        <>
            <div className='card-item'>

                {card.image &&
                    <img className='card-cover' 
                    src={card.image} 
                    style={{width: '120px', transform: 'translate(50px, 0%)', height: 'auto'}}
                        onMouseDown={event => event.preventDefault()}
                    />
                }
                {card.title}
                <div className='card-delete-btn'>
                <button 
                    className='btn'
                    onClick={handleDeleteClick}
                    ><i className='fa fa-times icon'></i></button>
                </div>

            </div>
        </>
    )

} 

export default Card;