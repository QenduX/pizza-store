<script>
export default {
    props: {
        selectedSort: Object,
        options: Array,
    },
    data() {
        return {
            showDrowdown: false,
        }
    },
    methods: {
        onShowDropdown() {
            this.showDrowdown = !this.showDrowdown;
        },  
        onSorting(option){
            this.$emit('update:sorted', option)
        }
    }
}
</script>
<template>
    <div class="sort">
        <p class="sort__text">
            <svg class="sort__icon" :class="showDrowdown ? 'active' : ''" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
            </svg>
            Сортировка по:
        </p>
        <p class="sort__name" @click="onShowDropdown">{{selectedSort.name}}</p>
        <ul class="sort__list" :class="showDrowdown ? 'active' : ''">
            <li 
                class="sort__item" 
                v-for="option in options" 
                :key="option.value"
                :class="option.value == selectedSort.value ? 'active' : ''"
                @click="onSorting(option), onShowDropdown()"
            >
                {{option.name}}
            </li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
.sort {
    display: flex;
    align-items: center;
    position: relative;

    &__text {
        color: #2C2C2C;
        font-size: 14px;
        font-weight: 700;
        margin-right: 8px;
        user-select: none;
    }

    &__icon {
        transform: rotate(180deg);
        transition: all 0.3s ease;
        margin-right: 6px;
        margin-bottom: 2px;

        &.active {
            transform: rotate(0);
            margin-bottom: 0;
        }
    }

    &__name {
        color: #FE5F1E;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.21px;
        border-bottom: 1px dashed #FE5F1E;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease;

        &:hover {
            opacity: 0.8;
        }
    }

    &__list {
        position: absolute;
        right: 0;
        bottom: -10px;
        transform: translate(0, 100%);
        display: flex;
        flex-direction: column;
        padding: 13px 0;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
        background: var(--white);
        border-radius: 10px;
        opacity: 0;
        pointer-events: none;
        user-select: none;
        
        &.active {
            opacity: 1;
            pointer-events: all;
        }
    }

    &__item {
        font-size: 14px;
        font-weight: 400;
        color: #000000;
        padding: 10px 22px 10px 14px;
        background: var(--white);
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background: rgba(254, 95, 30, 0.05);
        }

        &.active {
            font-weight: 700;
            color: #FE5F1E;
            background: rgba(254, 95, 30, 0.05);
        }
    }
}
</style>