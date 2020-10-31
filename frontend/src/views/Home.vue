<template>
    <div class="home">
        <top-nav />
        <navBar />
        <div class="caro">
            <carouselTypes />
            <carousel />
        </div>
    </div>
</template>

<script>
import navBar from '@/components/index/navBar'
import topNav from '../components/index/topNav'
import carouselTypes from '../components/index/carouselTypes'
import carousel from '@/components/utils/carousel'
export default {
    name: 'Home',
    components: {
        topNav,
        carousel,
        navBar,
        carouselTypes
    },
}
</script>
<style scoped>
.test {
    background: #fff;
    color: #ddd;
}
    .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #555;
    }
    .caro {
        background-image: linear-gradient(#aaa8a8, #dbd9d8);
        padding: 0px 0px 65px 0px;
        width: 100%;
    }
</style>