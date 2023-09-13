import './Column.scss';
import Card from '../Card/Card';
import { mapOrder } from '../../utilities/sorts';
import { Container, Draggable } from 'react-smooth-dnd';


const Column = (props) => {

    const { column } = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');


    const onCardDrop = (dropResult) => {
        
    }
    return (
        <>
            <div class="column">
                <header className='column-drag-handle'>{column.title}</header>
                <div className='card-list'>
                    <Container
                        groupName="col"
                        onDrop={onCardDrop}
                        getChildPayload={index => cards[index]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"
                        dropPlaceholder={{                      
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'card-drop-preview' 
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >

                        {cards && cards.length > 0 && cards.map((card, index) => {
                            return (
                                <Draggable key={card.id}>
                                    <Card card={card}/>
                                </Draggable>
                            )
                        })}

                    </Container>
                </div>
                <footer>Add another card</footer>
            </div>
        </>
    )
}

export default Column;