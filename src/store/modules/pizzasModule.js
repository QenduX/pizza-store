export const pizzasModule = {
    state: {
        pizzas: [
            {id: 1, name: 'Чизбургер-пицца', image: 'src/assets/images/pizzas/pizza1.png', cost: 395,
                types: [{name: 'тонкое', value: true, plusCost: 0}, {name: 'традиционное', value: true, plusCost: 100}],
                sizes: [{name: 26, value: true, plusCost: 0}, {name: 30, value: true, plusCost: 100}, {name: 40, value: true, plusCost: 150}],
                category: ['мясная', 'острая'],
                popular: 0,
            },
            {id: 2, name: 'Сырная', image: 'src/assets/images/pizzas/pizza2.png', cost: 280,
                types: [{name: 'тонкое', value: true, plusCost: 0}, {name: 'традиционное', value: true, plusCost: 100}],
                sizes: [{name: 26, value: true, plusCost: 0}, {name: 30, value: false, plusCost: 100}, {name: 40, value: true, plusCost: 150}],
                category: ['вегетарианская'],
                popular: 3,
            },
            {id: 3, name: 'Креветки по-азиатски', image: 'src/assets/images/pizzas/pizza3.png', cost: 450,
                types: [{name: 'тонкое', value: true, plusCost: 0}, {name: 'традиционное', value: true, plusCost: 100}],
                sizes: [{name: 26, value: true, plusCost: 0}, {name: 30, value: false, plusCost: 100}, {name: 40, value: true, plusCost: 150}],
                category: ['мясная', 'гриль'],
                popular: 2,
            },
            {id: 4, name: 'Гавайская', image: 'src/assets/images/pizzas/pizza3.png', cost: 360,
                types: [{name: 'тонкое', value: true, plusCost: 0}, {name: 'традиционное', value: true, plusCost: 100}],
                sizes: [{name: 26, value: false, plusCost: 0}, {name: 30, value: true, plusCost: 100}, {name: 40, value: true, plusCost: 150}],
                category: ['мясная', 'гриль'],
                popular: 1,
            },
            {id: 5, name: 'Сырный цыпленок', image: 'src/assets/images/pizzas/pizza4.png', cost: 385,
                types: [{name: 'тонкое', value: true, plusCost: 0}, {name: 'традиционное', value: true, plusCost: 100}],
                sizes: [{name: 26, value: true, plusCost: 0}, {name: 30, value: true, plusCost: 100}, {name: 40, value: false, plusCost: 150}],
                category: ['мясная', 'гриль'],
                popular: 2,
            },
            {id: 6, name: 'Сырный цыпленок', image: 'src/assets/images/pizzas/pizza2.png', cost: 405,
                types: [{name: 'тонкое', value: true, plusCost: 0}, {name: 'традиционное', value: true, plusCost: 100}],
                sizes: [{name: 26, value: true, plusCost: 0}, {name: 30, value: true, plusCost: 100}, {name: 40, value: true, plusCost: 150}],
                category: ['мясная', 'гриль'],
                popular: 5,
            },
        ],
        selectedSort: {value: 'popular', name: 'по популярности'},
        sortOptions: [
            {value: 'popular', name: 'по популярности'},
            {value: 'cost', name: 'по цене'},
            {value: 'name', name: 'по алфавиту'}
        ],
        category: null,
        categories: [
            { value: 'мясная', name: 'Мясные'},
            { value: 'вегетарианская', name: 'Вегетарианская'},
            { value: 'гриль', name: 'Гриль'},
            { value: 'острая', name: 'Острые'},
            { value: 'закрытая', name: 'Закрытые'},
        ],
    },
    getters: {
        getSortedPizzas(state) {
            return  state.pizzas.sort((s1, s2) => {
                let item1 = s1[state.selectedSort.value];
                let item2 = s2[state.selectedSort.value];

                if (state.selectedSort.value === 'name') {
                    return item1.toLowerCase() < item2.toLowerCase() ? -1 : 1;
                }
                else {
                    return item1 - item2
                }
            })
        },
        getCategoriesPizzas(state, getters) {
            return getters.getSortedPizzas.filter(pizza => {
                if (state.category === null) {
                    return true
                }
                else {
                    let category = pizza.category.filter(category => category.toLowerCase() == state.category?.value.toLowerCase())
                    return state.category?.value.toLowerCase() === category[0]
                }
            })
        }
    },
    mutations: {
        setPizzas(state, pizzas) {
            state.pizzas = pizzas;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setCategory(state, category) {
            state.category = category;
        }
    },
    actions: {

    },
    namespaced: true,
}