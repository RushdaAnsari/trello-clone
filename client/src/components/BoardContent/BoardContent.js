import './BoardContent.scss';
import Column from '../Column/Column';
import { initData } from '../../actions/initData';
import { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { mapOrder } from '../../utilities/sorts';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from '../../utilities/dragDrop';
import { v4 as uuidv4 } from 'uuid';


const BoardContent = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    const [isShowAddBoard, setIsShowAddBoard] = useState(false);
    const inputRef = useRef(null);
    const [valueInput, setValueInput] = useState("");

    useEffect(() => {
        // check if add list button is pressed check if there is input by user
        if(isShowAddBoard === true && inputRef && inputRef.current){
            // highlight input box
            inputRef.current.focus();
        }
        // It specifies that this effect should only run when the value of isShowAddBoard changes.
    }, [isShowAddBoard])


    useEffect(() => {
        // This line searches for a board with the ID 'board-1' within the initData.boards array. 
        const boardInitData = initData.boards.find(item => item.id === 'board-1');
        if (boardInitData){
            // this line sets the component's board state to the data of the found board.
            setBoard(boardInitData);

            // sort columns
            // This line sorts the columns of the board based on the order specified in boardInitData.columnOrder 
            // using the mapOrder utility function. It then sets the component's columns state with the sorted columns.
            setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id'))
        }
    }, []);

 
    const onColumnDrop = (dropResult) => {
        // A new variable newColumns is created as a shallow copy of the columns state using the spread operator ([...columns]). 
        // This is done to avoid directly modifying the original state.
        let newColumns = [...columns];

        // applyDrag is a utility function that reorders elements within an array based on the drop result. The result of this 
        // function call is assigned back to newColumns, which means it contains the updated column order after the drop operation.
        newColumns = applyDrag(newColumns, dropResult);



        let newBoard = {...board};

        // The columnOrder property of newBoard is updated with an array of column IDs. This array is derived by 
        // mapping the newColumns array, extracting the id property from each column object. 
        // This step is likely necessary to update the order in which columns should be displayed in the board.
        newBoard.columnOrder = newColumns.map(column => column.id);

        // The columns property of newBoard is updated with the reordered newColumns array. 
        newBoard.columns = newColumns;

        //  the component's state is updated with the new newColumns and newBoard objects. This update triggers 
        // a re-render of the component.
        setColumns(newColumns);
        setBoard(newBoard);
    }

    // handles the drop event when a user drags and drops a card within a specific column id.
    const onCardDrop = (dropResult, columnId) => {
        // checks if card was moved
        if(dropResult.removedIndex !== null || dropResult.addedIndex !== null){
            let newColumns = [...columns];

            // This line finds the specific column (currentColumn) within newColumns that matches the columnId provided as a parameter.
            let currentColumn = newColumns.find(column => column.id === columnId);

            // reorders the cards within the column based on the dropResult. It ensures that the cards are in the correct order after the drop operation.
            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);

            // It updates the cardOrder property of currentColumn with an array of card IDs. This array is created by mapping the currentColumn.cards array 
            // and extracting the id property from each card. The cardOrder is used to store the order of card IDs within the column.
            currentColumn.cardOrder = currentColumn.cards.map(card => card.id);

            // This update triggers a re-render of the component, reflecting the updated card order within the specified column.
            setColumns(newColumns);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey){
            event.preventDefault(); // Prevent the default Enter behavior (newline)
            handleAddBoard();
        }

    }

    if(_.isEmpty(board)){
        return (
            <>
                <div className='not-found'>Board not found</div>
            </>
        )
    }

    const handleAddBoard = () => {
        // If valueInput is empty, this block of code checks if inputRef exists and if its current property is defined
        if(!valueInput){
            if(inputRef && inputRef.current)
                // If both conditions are met, it sets the focus on the input field
                inputRef.current.focus();
            // if the user attempts to add a new column without providing a title, the function will not proceed.    
            return;
        }
        const _columns = _.cloneDeep(columns);
        _columns.push({
            id: uuidv4(),
            boardId: board.id,
            title: valueInput,
            cards: [],
        });

        setColumns(_columns);
        setValueInput("");
        inputRef.current.focus();
    }

    const onUpdateColumn = (newColumn) => {
        const  columnIdUpdate = newColumn.id;
        let ncols = [...columns]; //original columns
        let index = ncols.findIndex(item => item.id === columnIdUpdate);
        if(newColumn._destroy){
            // remove column
            ncols.splice(index, 1);
        }else {
            // update column
            ncols[index] = newColumn;
        }
        setColumns(ncols);
    }


    return (
        <>
            <div className="board-columns">
                <Container
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    getChildPayload={index => columns[index]}
                    dragHandleSelector=".column-drag-handle"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'column-drop-preview'
                    }}
                >

                    {columns && columns.length > 0 && columns.map((column, index) => {
                        return (
                            <Draggable key={column.id}>
                            <Column 
                                column={column}
                                onCardDrop={onCardDrop}
                                onUpdateColumn={onUpdateColumn}
                            />
                            </Draggable>
                        )
                    })}
                </Container>    

                    {isShowAddBoard === false ?
                        <div className='add-new-column' onClick={() => setIsShowAddBoard(true)}>
                            <i className='fa fa-plus icon'>
                            </i>Create New Board
                        </div>
                        :
                    
                        <div className='content-add-column'>
                            <input 
                                type='text' 
                                className='form-control' 
                                ref={inputRef}
                                value={valueInput}
                                spellCheck='false'
                                placeholder='Enter Board Title...'
                                onKeyDown={handleKeyDown}
                                onChange={(event) => setValueInput(event.target.value)}
                                />
                            <div className='group-btn'>
                                <button className='btn btn-success' 
                                onClick={() => handleAddBoard()}
                                >Create Board</button>
                                <i className='fa fa-times icon' 
                                onClick={() => setIsShowAddBoard(false)}></i>
                            </div>
                        </div>

                    }   
                
                
            </div>
        
        </>
    )
}

export default BoardContent;