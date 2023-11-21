<script>
import PizzaItem from '@/components/PizzaItem.vue';
export default {
    components: {
        PizzaItem,
    },
    props: {
        pizzas: Array,
    },
    methods: {
        updateCart(item) {
            this.$emit('update', item);
        }
    }
}
</script>
<template>
    <div class="items">
        <PizzaItem 
            v-for="pizza in pizzas" 
            :item="pizza"
            @update="updateCart"
        >
        </PizzaItem>
    </div>
</template>
<style scoped lang="scss">
.items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 65px 35px;
        margin-top: 35px;

        @media screen and (max-width: 1440px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: unset;
        }
    }
</style>