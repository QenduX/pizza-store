import { createStore } from 'vuex'
import { cartModule } from '@/store/modules/cartModule'
import { pizzasModule } from '@/store/modules/pizzasModule'
// import categoryModule from './modules/categoryModule'

const store = createStore({
    modules: {
        cart: cartModule,
        pizzas: pizzasModule,
        // categories: categoryModule,
    }
})

export default store