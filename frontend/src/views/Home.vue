<template>
    <div class="home">
        <top-nav />
        <navBar />
        <div class="caro">
            <div class="caroWrapper">
                <carouselTypes />
                <carousel />
            </div>
        </div>
        <div class="onDiscount">
            <onDiscount />
        </div>
        <div class="categoryAdversitement">
            <categoryAdvertisement />
        </div>
        <div class="legendBrandsWrapper">
            <legendBrands />
        </div>
        <div class="services">
            <services />
        </div>
        <div class="outstandings">
            <outstandings />
        </div>
    </div>
</template>

<script>
import navBar from '@/components/index/navBar'
import topNav from '../components/index/topNav'
import carouselTypes from '../components/index/carouselTypes'
import carousel from '@/components/utils/carousel'
import onDiscount from '../components/index/onDiscount'
import categoryAdvertisement from '../components/index/categoryAdvertisement'
import legendBrands from '../components/index/legendBrands'
import services from '../components/index/services'
import outstandings from '../components/index/outstandings'

export default {
    name: 'Home',
    components: {
        topNav,
        carousel,
        navBar,
        carouselTypes,
        onDiscount,
        categoryAdvertisement,
        legendBrands,
        services,
        outstandings
    },
}
</script>
<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #555;
        background: #fff;
    }
    .caro {
        background-image: linear-gradient(#aaa8a8, #dbd9d8);
        padding: 0px 0px 65px 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .caroWrapper {
        width: 70%;
    }
    .onDiscount {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
    .categoryAdversitement {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
    .legendBrandsWrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
    .services {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
    .outstandings {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
</style>