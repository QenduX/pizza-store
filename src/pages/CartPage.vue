<script>
import { mapState, mapActions, mapGetters} from 'vuex'
import CartItem from '@/components/CartItem.vue'

export default {
    components: {
        CartItem
    },
    methods: {
        ...mapActions({
            clearCart: 'cart/clearCart',
            removeItem: 'cart/removeItem',
            plusItem: 'cart/plusItem',
            minusItem: 'cart/minusItem',
        })
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cart,
        }),
        ...mapGetters({
            getCountCart:'cart/getCountCart',
            getCostCart:'cart/getCostCart',
        })
    }
}
</script>
<template>
    <div class="cart">
        <div class="cart__block" v-if="cartItems.length">
                <div class="cart__top">
                    <div class="cart__title">
                        <svg class="cart__title-icon" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path d="M10.6667 28.7917C12.0014 28.7917 13.0833 27.7097 13.0833 26.375C13.0833 25.0403 12.0014 23.9583 10.6667 23.9583C9.33198 23.9583 8.25 25.0403 8.25 26.375C8.25 27.7097 9.33198 28.7917 10.6667 28.7917Z" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M25.1667 28.7917C26.5014 28.7917 27.5833 27.7097 27.5833 26.375C27.5833 25.0403 26.5014 23.9583 25.1667 23.9583C23.832 23.9583 22.75 25.0403 22.75 26.375C22.75 27.7097 23.832 28.7917 25.1667 28.7917Z" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.85117 8.24999H28.7916L26.7616 18.3879C26.6511 18.9442 26.3484 19.4439 25.9066 19.7996C25.4648 20.1553 24.912 20.3442 24.3449 20.3333H11.5728C10.9828 20.3383 10.4113 20.1273 9.96612 19.74C9.52095 19.3527 9.23286 18.8159 9.15617 18.2308L7.3195 4.31083C7.24334 3.72991 6.95872 3.19643 6.51862 2.80968C6.07852 2.42292 5.5129 2.20922 4.927 2.20833H2.20825" stroke="#3F3F3F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="cart__title-text">Корзина</p>
                    </div>
                    <button class="cart__clear" @click="clearCart">
                        <svg class="cart__clear-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="cart__clear-text">Очистить корзину</span>
                    </button>
                </div>
                <div class="cart__items">
                    <CartItem 
                        v-for="item in cartItems" 
                        :item="item" 
                        :key="item"
                        @remove="removeItem"
                        @plus="plusItem"
                        @minus="minusItem"
                    ></CartItem>
                </div>
                <div class="cart__bottom">
                    <div class="cart__info">
                        <div class="cart__count">
                            <p class="cart__count-text">Всего пицц: <span>{{ getCountCart }} шт.</span></p>
                        </div>
                        <div class="cart__total">
                            <p class="cart__total-text">Сумма заказа: <span>{{ getCostCart }} ₽</span></p>
                        </div>
                    </div>
                    <div class="cart__btns">
                        <router-link to="/" class="cart__link">
                            <svg class="cart__link-icon" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="cart__link-text">Вернуться назад</span> 
                        </router-link>
                        <button class="cart__btn">Оплатить сейчас</button>
                    </div>
                </div>
        </div>
        <div class="cart__empty" v-else>
            <h2 class="cart__empty-title">Корзина пустая 😕</h2>
            <p class="cart__empty-text">Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img class="cart__empty-img" src="/src/assets/images/cartImg.png" alt="">
            <router-link class="cart__empty-link" to="/">Вернуться назад</router-link>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.cart {
    display: flex;
    justify-content: center;

    &__block {
        display: flex;
        flex-direction: column;
        max-width: 820px;
        width: 100%;
        margin: 94px auto 131px;
    }

    &__top {
        display: flex;
        justify-content: space-between;
    }

    &__title {
        display: flex;
        align-items: center;

        &-icon {
            width: 29px;
            height: 29px;
            object-fit: cover;
            margin-right: 17px;
        }

        &-text {
            color: #000;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 0.32px;
        }
    }

    &__clear {
        display: flex;
        align-items: center;
        background: var(--white);
        border: none;
        cursor: pointer;

        &:hover {
            svg {
                path {
                    stroke: #2C2C2C;
                }
            }
            span {
                color: #2C2C2C;
            }
        }

        &-icon {
            width: 20px;
            height: 20px;
            object-fit: cover;
            margin: 0 7px 3px 0;
            
            path {
                transition: all 0.2s ease;
            }
        }

        &-text {
            color: #B6B6B6;
            font-size: 16px;
            font-weight: 400;
            transition: all 0.2s ease;
        }
    }

    &__items {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    &__bottom {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
    }

    &__info {
        display: flex;
        justify-content: space-between;
    }

    &__count {
        &-text {
            color: #000;
            font-size: 22px;
            font-weight: 400;
            letter-spacing: 0.22px;

            span {
                font-weight: 700;
            }
        }
    }

    &__total {
        &-text {
            color: #000;
            font-size: 22px;
            font-weight: 400;
            letter-spacing: 0.22px;
            
            span {
                font-weight: 700;
                color: var(--orange);
            }
        }
    }

    &__btns {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }

    &__link {
        background: #FFF;
        border-radius: 30px;
        border: 1px solid #D3D3D3;
        padding: 16px 20px 16px;
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
            border: 1px solid #2C2C2C;

            svg {
                path {
                    stroke: #2C2C2C;
                }
            }
            span {
                color: #2C2C2C;
            }
        }

        &-icon {
            width: 6px;
            height: 12px;
            object-fit: cover;
            margin-right: 10px;

            path {
                transition: all 0.2s ease;
            }
        }

        &-text {
            color: #CACACA;
            font-size: 16px;
            font-weight: 400;
            transition: all 0.2s ease;
        }
    }

    &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--orange);
        width: 211px;
        padding: 16px 20px 16px;
        border: none;
        border-radius: 30px;
        color: #FFF;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            opacity: 0.8;
        }
    }

    &__empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 0;

        &-title {
            color: #000;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 0.32px;
        }

        &-text {
            color: #777;
            text-align: center;
            font-size: 18px;
            font-weight: 400;
            line-height: 145.4%;
            letter-spacing: 0.18px;
            max-width: 547px;
            margin-top: 10px;
        }

        &-img {
            width: 300px;
            height: 255px;
            margin-top: 47px;
            object-fit: cover;
        }

        &-link {
            background: var(--bg-black);
            color: #FFF;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.24px;
            padding: 14px 30px 16px;
            margin-top: 74px;
            border-radius: 30px;
            text-decoration: none;
            transition: all 0.2s ease;

            &:hover {
                opacity: 0.8;
            }
        }
    }
}
</style>