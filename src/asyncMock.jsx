const data = [
    {
        id: '1',
        name: 'Starter Deck: Straw Hat Crew',
        price: 15000,
        category: 'Estructuras',
        img: 'https://nipponrama.com/store/wp-content/uploads/2023/06/4549660824022-1-600x600.png',
        stock: 15,
        description: 'One Piece Card Game ST-01 Starter Deck: Straw Hat Crew [Japanese Edition]'
    },

    {
        id: '2',
        name: 'Starter Deck: Worst Generation',
        price: 15000,
        category: 'Estructuras',
        img: 'https://nipponrama.com/store/wp-content/uploads/2023/06/4549660853237-600x600.png',
        stock: 15,
        description: 'One Piece Card Game ST-02 Starter Deck: Worst Generation [Japanese Edition]'
    },

    {
        id: '3',
        name: 'Starter Deck: The Seven Warlords of the Sea',
        price: 15000,
        category: 'Estructuras',
        img: 'https://nipponrama.com/store/wp-content/uploads/2023/06/4549660853244-600x600.png',
        stock: 15,
        description: 'One Piece Card Game ST-03 Starter Deck: The Seven Warlords of the Sea [Japanese Edition]'
    },

    {
        id: '4',
        name: 'Starter Deck: Animal Kingdom Pirates',
        price: 15000,
        category: 'Estructuras',
        img: 'https://nipponrama.com/store/wp-content/uploads/2023/06/4549660853251-600x600.png',
        stock: 15,
        description: 'One Piece Card Game ST-04 Starter Deck: Animal Kingdom Pirates [Japanese Edition]'
    },

    {
        id: '5',
        name: 'Monkey D. Luffy (25th Anniversary Parallel)',
        price: 2019,
        category: 'Cartas',
        img: 'https://nipponrama.com/store/wp-content/uploads/2023/06/P-001_p1-600x600.png',
        stock: 7,
        description: 'Monkey D. Luffy (25th Anniversary Parallel) P-001 P - One Piece Card Game [Japanese Card]'
    },

    {
        id: '6',
        name: 'Portgas D. Ace',
        price: 1087,
        category: 'Cartas',
        img: 'https://nipponrama.com/store/wp-content/uploads/2023/06/ST09-010-600x600.png',
        stock: 10,
        description: 'Portgas D. Ace ST09-010 SR - One Piece Card Game [Japanese Card]'
    },

    {
        id: '7',
        name: 'Trafalgar Law (Parallel)',
        price: 14755,
        category: 'Cartas',
        img: 'https://nipponrama.com/store/wp-content/uploads/2023/06/ST03-008_p1-600x600.png',
        stock: 4,
        description: 'Trafalgar Law (Parallel) ST03-008 C - One Piece Card Game [Japanese Card]'
    },

    {
        id: '8',
        name: 'Monkey D. Luffy',
        price: 1301,
        category: 'Cartas',
        img: 'https://nipponrama.com/store/wp-content/uploads/2023/06/P-035-600x600.png',
        stock: 10,
        description: 'Monkey D. Luffy P-035 P - One Piece Card Game [Japanese Card]'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((el) => el.id ===id);
        
        if (item) {
            resolve(item);
        } else{
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}

