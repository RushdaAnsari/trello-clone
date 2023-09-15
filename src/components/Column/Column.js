import './Column.scss';
import Card from '../Card/Card';
import { mapOrder } from '../../utilities/sorts';
import { Container, Draggable } from 'react-smooth-dnd';
import Dropdown from 'react-bootstrap/Dropdown'
import ConfirmModal from '../Common/ConfirmModal';
import Form from 'react-bootstrap/Form';

import { useEffect, useState, useRef } from 'react';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM} from '../../utilities/constant';


const Column = (props) => {

    const { column, onCardDrop, onUpdateColumn } = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');

    const [isShowModalDelete, setShowModalDelete] = useState(false);
    const [titleColumn, setTitleColumn] = useState('');

    const [isFirstClick, setFirstClick] = useState(true);

    const inputRef = useRef(null);

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
                                <Dropdown.Item href="#">Add card...</Dropdown.Item>
                                <Dropdown.Item onClick={toggleModal}>Remove this column...</Dropdown.Item>
                                <Dropdown.Item href="#">Something else</Dropdown.Item>
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
                                    <Card card={card}/>
                                </Draggable>
                            )
                        })}

                    </Container>
                </div>
                <footer>
                    <div className='footer-action'>
                        <i className='fa fa-plus icon'></i> Add another card
                    </div>
                </footer>
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