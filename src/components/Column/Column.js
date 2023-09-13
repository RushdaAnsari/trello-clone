import './Column.scss';
import Card from '../Card/Card';
import { mapOrder } from '../../utilities/sorts';


const Column = (props) => {

    const { column } = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');


    return (
        <>
            <div class="column">
                <header>{column.title}</header>
                <ul className='card-list'>
                    {cards && cards.length > 0 && cards.map((card, index) => {
                        return (
                            <Card key={card.id} card={card}/>
                        )
                    })}
                </ul>
                <footer>Add another card</footer>
            </div>
        </>
    )
}

export default Column;