<template>
    <div class="legendBrandWrapper">
        <div class="legendBrandImage">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="legendBrandTitle">
            {{ $t('ADIDAS') }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'LegendBrand'
}
</script>

<style scoped>
    .legendBrandWrapper {
        margin: 30px 26px 00px 26px;
    }
    .legendBrandImage {
        border: 1px solid rgb(221,221,221);
        border-radius: 8px;
        height: 75px;
        width: 120px;
        padding: 5px
    }
    .legendBrandImage img {
        width: 100%;
        height: 100%;
    }
    .legendBrandTitle {
        margin-top: 10px;
        font-size: 17px;
        font-weight: 600;
    }
</style>