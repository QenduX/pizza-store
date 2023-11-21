export const cartModule = {
    state: {
        cost: 0,
        count: 0,
        cart: [],
    },
    getters: {
        getCountCart(state) {
            return state.cart.reduce((acc, current) => acc + current.count, 0)
        },
        getCostCart(state) {
            return state.cart.reduce((sum, current) => sum + current.cost, 0);
        }
    },
    mutations: {
        setCart(state, cart) {
            state.cart = cart
        },
        setCount(state, count) {
            state.count = count
        },
        setCost(state, cost) {
            state.cost = cost
        }
    },
    actions: {
        addItem({commit, state}, item) {
            if (state.cart.length === 0) {
                commit('setCart', [...state.cart, item]);
            }
            else if (state.cart.find(el => el.id === item.id)) {
                if (state.cart.find(el => el.id === item.id && el.type.toLowerCase() === item.type.toLowerCase() && el.size === item.size)) {
                    commit('setCart', state.cart.filter((el) => {
                        if (el.id === item.id && el.type.toLowerCase() === item.type.toLowerCase() && el.size === item.size) {
                            return el.count += 1;
                        }
                        else {
                            return el;
                        }
                    }));
                }
                else {
                    commit('setCart', [...state.cart, item]);
                }
            }
            else {
                commit('setCart', [...state.cart, item]);
            }
        },
        plusItem({commit, state}, item){
            commit('setCart', state.cart.filter((el) => {
                if (el.id === item.id && el.type.toLowerCase() === item.type.toLowerCase() && el.size === item.size) {
                    return el.count += 1;
                }
                else {
                    return el;
                }
            }));
        },
        minusItem({commit, state}, item){
            commit('setCart', state.cart.filter((el) => {
                if (el.id === item.id && el.type.toLowerCase() === item.type.toLowerCase() && el.size === item.size) {
                    if (el.count === 1) {
                        return el.count = 1;
                    }
                    else {
                        return el.count -= 1;
                    }
                }
                else {
                    return el;
                }
            }));
        },
        removeItem({commit, state}, item) {
            commit('setCart', state.cart.filter(el => (el.id === item.id && el.size === item.size && el.type.toLowerCase() === item.type.toLowerCase()) ? false : true ));
        },
        clearCart({commit}) {
            commit('setCart', []);
            commit('setCount', 0);;
            commit('setCost', 0);;
        }
    },
    namespaced: true,
}