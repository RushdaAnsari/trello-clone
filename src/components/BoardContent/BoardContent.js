import './BoardContent.scss';
import Column from '../Column/Column';

const BoardContent = () => {

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