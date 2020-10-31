<template>
    <div class="carouselTypes">
        <div class="type selectedCarousel">
            {{ $t('CAMPAINS') }}
        </div>
        <div class="type">
            {{ $t('CHANCES') }}
        </div>
        <div class="type">
            {{ $t('FASHION_FOR_YOUR_MODE') }}
        </div>
        <div class="type">
            {{ $t('FIND') }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselTypes'
}
</script>

<style scoped>
    .carouselTypes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 20px;
        font-size: 16px;
        font-weight: 600;
    }
    .selectedCarousel {
        background: #fff;
        border-radius: 10px;
        padding: 10px 20px;
    }
    .type {
        padding: 10px 20px;
        margin: 0px 20px;
    }
</style>