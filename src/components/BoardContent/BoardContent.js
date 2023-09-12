import './BoardContent.scss';
import Column from '../Column/Column';
import { initData } from '../../actions/initData';
import { useState, useEffect } from 'react';

const BoardContent = () => {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const boardInitData = initData.boards.find(item => item.id === 'board-1');
        if (boardInitData){
            setBoard(boardInitData);
        }
    }, []);

    return (
        <>
            <div className="board-columns">
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
        
            </div>
        
        </>
    )
}

export default BoardContent;