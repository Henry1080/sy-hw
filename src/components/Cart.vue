<template>
    <div class="container">
        <div class="title">购物车</div>
        <div class="iskong">
          <div class=""></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {};
    },
    computed: {
        cartNumber() {
            return this.$store.state.cartNumber;
        },
    },
};
</script>

<style scoped>
.container {
    flex-grow: 1;
    display: flex;
}
.title {
    flex-shrink: 0;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 0.9rem;
    color: #191919;
    background-color: #fff;
}
</style>
