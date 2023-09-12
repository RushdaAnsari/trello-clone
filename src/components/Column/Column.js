import './Column.scss';
import Task from '../Task/Task';

const Column = () => {
    return (
        <>
            <div class="column">
                <header>Brainstrom</header>
                <ul className='task-list'>
                    <Task/>

                    <li className='task-item'>Second</li>
                    <li className='task-item'>Third</li>
                    <li className='task-item'>Third</li>
                    <li className='task-item'>Third</li>
                    <li className='task-item'>Third</li>
                    <li className='task-item'>Second</li>
                    <li className='task-item'>Third</li>
                    <li className='task-item'>Third</li>
                    <li className='task-item'>Third</li>
                    <li className='task-item'>Third</li>
                </ul>
                <footer>Add another card</footer>
            </div>
        </>
    )
}

export default Column;