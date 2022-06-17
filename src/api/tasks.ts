type Task = {
    id: number,
    title: string,
    description: string,
    is_archived: boolean,
    user_id: number,
}

export async function getList(): Promise<Task[] |undefined > {
    

    try {
        return [
            {
                id: 0,
                title: 'Buy a pack of milk',
                description: 'I saw chip milk in new market near by home on the corner',
                is_archived: false,
                user_id: 3893,
            },
            {
                id: 3,
                title: 'Call Patrik about the weekend',
                description: '',
                is_archived: false,
                user_id: 3893,
            },
            {
                id: 200,
                title: 'Pay for Netflix',
                description: '',
                is_archived: false,
                user_id: 3893,
            },
            {
                id: 90,
                title: 'Pay for Netflix',
                description: '',
                is_archived: false,
                user_id: 3893,
            },
        ];
    } catch(e) {
        throw new Error(`The request went wrong. Check the url : `);
    }
}