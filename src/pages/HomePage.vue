<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

import MySelect from '@/components/MySelect.vue';
import MyPizzas from '@/components/MyPizzas.vue';
import MyCategory from '../components/MyCategory.vue';

export default {
    components: {
        MySelect,
        MyPizzas,
        MyCategory
    },
    computed: {
        ...mapState({
            category: state => state.pizzas.category,
            categories: state => state.pizzas.categories,
            selectedSort: state => state.pizzas.selectedSort,
            sortOptions: state => state.pizzas.sortOptions,
        }),
        ...mapGetters({
            getCategoriesPizzas: 'pizzas/getCategoriesPizzas',
        })
    },
    methods: {
        ...mapActions({
            addItem: 'cart/addItem'
        }),
        ...mapMutations({
            setPizzas: 'pizzas/setPizzas',
            setSelectedSort: 'pizzas/setSelectedSort',
            setCategory: 'pizzas/setCategory',
        })
        
    },
}
</script>
<template>
    <div class="main">
        <div class="main__top">
            <MyCategory 
                :category="category"
                :categories="categories"
                @update:cate="setCategory"
            >
            </MyCategory>
            <MySelect 
                :options="sortOptions" 
                :selectedSort="selectedSort" 
                @update:sorted="setSelectedSort"
            >
            </MySelect>
        </div>
        <h2 class="main__title">Все пиццы</h2>
        <MyPizzas :pizzas="getCategoriesPizzas" @update="addItem"></MyPizzas>
    </div>
</template>
<style scoped lang="scss">
.main {
    padding: 40px 48px 90px 67px; 

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        color: var(--bg-black);
        margin-top: 32px;
        font-size: 32px;
        font-weight: 700;
    }
}
</style>