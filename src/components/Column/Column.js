import './Column.scss';
import Card from '../Card/Card';

const Column = () => {
    return (
        <>
            <div class="column">
                <header>Brainstrom</header>
                <ul className='card-list'>
                    <Card/>

                    <li className='card-item'>Second</li>
                    <li className='card-item'>Third</li>
                    <li className='card-item'>Third</li>
                    <li className='card-item'>Third</li>
                    <li className='card-item'>Third</li>
                    <li className='card-item'>Second</li>
                    <li className='card-item'>Third</li>
                    <li className='card-item'>Third</li>
                    <li className='card-item'>Third</li>
                    <li className='card-item'>Third</li>
                </ul>
                <footer>Add another card</footer>
            </div>
        </>
    )
}

export default Column;