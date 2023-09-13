export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'Todo-1',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
                    cards: [
                        {
                            id: 'card-1', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 1',
                            image: './img-design.png'
                        },
                        {
                            id: 'card-2', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 2',
                            image: null
                        },
                        {
                            id: 'card-3', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 3',
                            image: null
                        },
                        {
                            id: 'card-4', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 4',
                            image: null
                        },
                        {
                            id: 'card-5', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 5',
                            image: null
                        },
                        {
                            id: 'card-6', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 6',
                            image: null
                        },
                        {
                            id: 'card-7', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 7',
                            image: null
                        },
                        
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Todo-2',
                    cardOrder: ['card-8', 'card-9', 'card-10'],
                    cards: [
                        {
                            id: 'card-8', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 8',
                            image: null
                        },
                        {
                            id: 'card-9', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 9',
                            image: null
                        },
                        {
                            id: 'card-10', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 10',
                            image: null
                        },
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Todo-3',
                    cardOrder: ['card-11', 'card-12', 'card-13'],
                    cards: [
                        {
                            id: 'card-11', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 11',
                            image: null
                        },
                        {
                            id: 'card-12', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 12',
                            image: null
                        },
                        {
                            id: 'card-13', 
                            boardId: 'board',
                            columnId: 'column',
                            title: 'Title of card 13',
                            image: null
                        },
                    ]
                }

            ]
        }
    ]
}