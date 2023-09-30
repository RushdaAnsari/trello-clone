import calander from '../assets/calender.jpg';
import mail from '../assets/mail.jpg';
import checklist from '../assets/checklist.jpg';


export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
            
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To Do',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {
                            id: 'card-1', 
                            boardId: 'board',
                            columnId: 'column',
                            title: '',
                            image: calander
                        },
                        {
                            id: 'card-2', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Add your first card...',
                            image: ''
                        },
                        
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'In Progress',
                    cardOrder: ['card-8', 'card-9', 'card-10'],
                    cards: [
                        {
                            id: 'card-3', 
                            boardId: 'board',
                            columnId: 'column',
                            title: '',
                            image: mail
                        },
                        
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Completed',
                    cardOrder: ['card-11', 'card-12', 'card-13'],
                    cards: [
                        {
                            id: 'card-4', 
                            boardId: 'board',
                            columnId: 'column',
                            title: '',
                            image: checklist
                        },
                        
                    ]
                },
                
                

            ]
        }
    ]
}


