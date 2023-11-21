<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    props: {
        item: Object,
    },
    data() {
        return {
            cartItem: {},

            activeIndexType: this.item.types.findIndex(type => type.value),
            activeIndexSize: this.item.sizes.findIndex(size => size.value),

            activeType: this.item.types.find(type => type.value).name,
            activeSize: this.item.sizes.find(size => size.value).name,
            count: 0,
        }
    },
    methods: {
        onSelectType(index, value) {
            this.activeIndexType = index;
            this.activeType = value;
        },
        onSelectSize(index, value) {
            this.activeIndexSize = index;
            this.activeSize = value;
        },
        onAddCart(item){
            let fullCost = Number(item.cost + item.types[this.activeIndexType].plusCost + item.sizes[this.activeIndexSize].plusCost);

            this.cartItem = {
                id: item.id,
                name: item.name,
                cost: fullCost,
                type: this.activeType,
                size: this.activeSize,
                image: item.image,
                count: 1,
            }

            this.$emit('update', this.cartItem);
        },
    },
}
</script>
<template>
    <div class="item">
        <img class="item__img" :src="item.image" alt="">
        <p class="item__name">{{item.name}}</p>
        <div class="item__info">
            <ul class="item__tabs">
                <li 
                    v-for="(itemType, index) in item.types" 
                    :key="itemType.name"
                    @click="onSelectType(index, itemType.name)"
                    class="item__tab"
                    :class="activeIndexType === index ? 'active' : '', itemType.value ? '' : 'disabled'" 
                >
                    {{itemType.name}} 
                </li>
            </ul>
            <ul class="item__tabs">
                <li 
                    class="item__tab"  
                    v-for="(itemSize, index) in item.sizes" 
                    :key="itemSize.name"
                    @click="onSelectSize(index, itemSize.name)"
                    :class="activeIndexSize === index ? 'active' : '', itemSize.value ? '' : 'disabled'"
                >
                    {{ itemSize.name }} см.
                </li>
            </ul>
            <!-- <ul class="item__tabs">
                <li 
                    class="item__tab"  
                    v-for="(size, index) in availableSizes" 
                    :key="size"
                    @click="onSelectSize(index, size)"
                    :class="activeIndexSize === index ? 'active' : '', !item.sizes[index]?.size ? 'disabled' : ''"
                    
                >
                    {{ size }} см.
                </li>
            </ul> -->
        </div>
        <div class="item__bottom">
            <p class="item__cost">от {{item.cost}} ₽</p>
            <button class="item__btn" @click="onAddCart(item)">
                <svg class="item__btn-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E"/>
                </svg>
                Добавить
                <span v-if="count" class="item__btn-count">{{count}}</span>
            </button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.item {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 280px;

    @media screen and (max-width: 1440px) {
        margin: 0 35px 65px 0;
    }

    &__img {
        width: 260px;
        height: 260px;
        object-fit: cover;
    }

    &__name {
        color: #000;
        text-align: center;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: 0.2px;
        margin-top: 11px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #F3F3F3;
        margin-top: 22px;
        padding: 7px 6px;
        border-radius: 10px;
    }

    &__tabs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
        user-select: none;

        &:last-child {
            margin-top: 7px;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__tab {
        background: transparent;
        color: #2C2C2C;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.21px;
        padding: 11px;
        width: auto;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease;

        &:hover {
            background: #F9F9F9;
        }   

        &.disabled {
            color: rgba(44, 44, 44, 0.5);
            pointer-events: none;
        }

        &.active {
            background: #FFF;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
        }
    }

    &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 17px;
    }

    &__cost {
        color: #000;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.33px;
    }

    &__btn {
        display: flex;
        align-items: center;
        position: relative;
        background: var(--white);
        color: #EB5A1E;
        font-size: 16px;
        font-weight: 700;
        height: 40px;
        padding: 11px 14px 11px 17px;
        border-radius: 30px;
        border: 1px solid #EB5A1E;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            opacity: 0.8;
        }

        &-icon {
            width: 12px;
            height: 12px;
            margin-right: 8px;
        }

        &-count {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFF;
            background: var(--red);
            font-size: 13px;
            font-weight: 700;
            border-radius: 50%;
            width: 22px;
            height: 22px;
            margin-left: 10px;
        }
    }
}
</style>