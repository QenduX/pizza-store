<script>
export default {
    props: {
        category: [Object, null],
        categories: Array,
    },
    data() {
        return {
            activeCategory: null,
        }
    },
    methods: {
        onChangeCategry(index, category){
            // console.log(index)
            this.activeCategory = index;
            this.$emit('update:cate', category)
        },
    }
}
</script>
<template>
    <ul class="tabs">
        <li 
            class="tab" 
            :class="activeCategory === null ? 'active' : ''"
            @click="onChangeCategry(null, null)"
        >
            Все
        </li>
        <li 
            class="tab" 
            v-for="option in categories" 
            :key="option.value" 
            :class="option.value === category?.value ? 'active' : ''"
            @click="onChangeCategry(option.value, option)"
        >
            {{option.name}}
        </li>
    </ul>
</template>
<style scoped lang="scss">

.tabs {
    display: flex;
    align-items: flex-start;
}

.tab {
    padding: 14px 30px 16px 30px;
    margin-right: 9px;
    border-radius: 30px;
    background: #F9F9F9;
    color: #2C2C2C;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.24px;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        background: #CACACA;
    }

    &.active {
        background: #282828;
        color: var(--white);

        &:hover {
            background: #282828;
            opacity: 0.8;
        }
    }
}
</style>