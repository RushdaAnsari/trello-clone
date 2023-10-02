import './Column.scss';
import Card from '../Card/Card';
import { mapOrder } from '../../utilities/sorts';
import { Container, Draggable } from 'react-smooth-dnd';
import Dropdown from 'react-bootstrap/Dropdown'
import ConfirmModal from '../Common/ConfirmModal';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';


import { useEffect, useState, useRef } from 'react';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM} from '../../utilities/constant';


const Column = (props) => {

    const { column, onCardDrop, onUpdateColumn } = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');

    const [isShowModalDelete, setShowModalDelete] = useState(false);
    const [titleColumn, setTitleColumn] = useState('');

    const [isFirstClick, setFirstClick] = useState(true);

    const inputRef = useRef(null);

    const [isShowAddNewCard, setIsShowAddNewCard] = useState(false);
    const [valueTextArea, setValueTextArea] = useState('');
    const textAreaRef = useRef(null);

    useEffect(() => {
        if(isShowAddNewCard === true && textAreaRef && textAreaRef.current){
            textAreaRef.current.focus();
        }
    }, [isShowAddNewCard])


    useEffect(() => {
        if(column && column.title) {
            setTitleColumn(column.title)
        }
    }, [column])

    const toggleModal = () => {
        setShowModalDelete(!isShowModalDelete);
    }

    const onModalAction = (type) => {
        if(type === MODAL_ACTION_CLOSE){
            // do nothing
        }
        if(type === MODAL_ACTION_CONFIRM){
            // remove column
            const newColumn = {
                ...column, 
                _destroy: true
            }
            onUpdateColumn(newColumn)
        }
        toggleModal();
    }

    const selectAllText = (e) => {
        setFirstClick(false);

        if(isFirstClick){
            e.target.select();
        }else {
            inputRef.current.setSelectionRange(titleColumn.length, titleColumn.length);
        }
    }

    const handleClickOutside = () => {
        setFirstClick(true);
        const newColumn = {
            ...column,
            title: titleColumn,
            _destroy: false
        }
        onUpdateColumn(newColumn)
    }
        
    const handleAddNewCard = () => {
        if(!valueTextArea) {
            textAreaRef.current.focus();
            return;
        }

        const newCard = {
            id: uuidv4(),
            boardId: column.boardId,
            columnId: column.id,
            title: valueTextArea,
            image: null
        }
        let newColumn = {...column};
        newColumn.cards = [...newColumn.cards, newCard];
        newColumn.cardOrder = newColumn.cards.map(card => card.id);

        onUpdateColumn(newColumn);
        setValueTextArea('');
        setIsShowAddNewCard(false);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey){
            event.preventDefault(); // Prevent the default Enter behavior (newline)
            handleAddNewCard();
        }

    }

    const handleDeleteCard = (cardToDelete) => {
        // Filter out the card to delete from the column's cards
        const updatedCards = column.cards.filter((card) => card.id !== cardToDelete.id);
      
        const newColumn = {
          ...column,
          cards: updatedCards,
        };
      
        onUpdateColumn(newColumn);
      };




    return (
        <>
            <div class="column">
                <header className='column-drag-handle'>
                    <div className='column-title'>
                        
                        <Form.Control
                            size={'sm'}
                            type='text'
                            value={titleColumn}
                            className='customize-input-column'
                            onClick={selectAllText}
                            onChange={(e)=> setTitleColumn(e.target.value)}
                            spellCheck='false'
                            onBlur={handleClickOutside}
                            onMouseDown={(e) => e.preventDefault()}
                            ref={inputRef}
                        />
                    </div>
                    <div className='column-dropdown'>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" size='sm'></Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* <Dropdown.Item href="#">Add card...</Dropdown.Item> */}
                                <Dropdown.Item onClick={toggleModal}>Delete Board</Dropdown.Item>
                                {/* <Dropdown.Item href="#">Something else</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </header>
                <div className='card-list'>
                    <Container
                        groupName="col"
                        onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
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
                                    <Card card={card} onDeleteCard={handleDeleteCard}/>
                                </Draggable>
                            )
                        })}
                     </Container>

                {isShowAddNewCard === true && 
                    <div className='add-new-card'>
                        <textarea
                            type='text' 
                            className='form-control' 
                            rows='1'
                            placeholder='Enter card title...'
                            spellCheck="false"
                            ref={textAreaRef}
                            value={valueTextArea}
                            onChange={(e) => setValueTextArea(e.target.value)}
                            onKeyDown={handleKeyDown}
                        >
                        </textarea>
                        <div className='group-btn'>
                            <button 
                            className='btn btn-secondary'
                            onClick={() => handleAddNewCard()}

                            > Add card</button>
                            <i className='fa fa-times icon'
                            onClick={() => setIsShowAddNewCard(false)}
                            >
                            </i>
                        </div>
                    </div>   
                }
                </div> 

                {isShowAddNewCard === false && 
                    <footer>
                       
                        <div className='footer-action' onClick={() => setIsShowAddNewCard(true)}>
                            <i 
                            className='fa fa-plus icon' 
                            >
                            </i>Add a card
                        </div>
                    </footer>
                }
            </div>
            <ConfirmModal
                show={isShowModalDelete}
                title={'Remove a column'}
                content={`Are you sure you want to remove column: ${column.title}?`}
                onAction={onModalAction}
            />
        </>
    )
}


export default Column;

