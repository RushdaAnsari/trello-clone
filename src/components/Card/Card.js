import './Card.scss';

const Card = (props) => {
    const {card} = props;


    return (
        <>
            <li className='card-item'>
                {card.image &&
                    <img className='card-cover' src={card.image}/>
                
                }
                {card.title}
            </li>
        </>
    )

} 

export default Card;