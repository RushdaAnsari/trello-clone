
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
                            image: 'https://www.pinclipart.com/picdir/big/553-5532290_calender-clip-art.png'
                        },
                        {
                            id: 'card-2', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Create your first task...',
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
                            image: 'https://www.pinclipart.com/picdir/big/573-5733082_youve-got-mail-clipart.png'
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
                            image: 'https://www.pinclipart.com/picdir/big/520-5203533_checklist-clipart.png'
                        },
                        
                    ]
                },
                
                

            ]
        }
    ]
}


