<template>
    <div class="legendBrands">
        <div class="legendBrandsTitle">
            {{ $t('LEGENDARY_BRANDS_ON_LEGENDARY_DECEMBER') }}
        </div>
        <div class="legendBrandBody">
            <legendBrand />
            <legendBrand />
            <legendBrand />
            <legendBrand />
            <legendBrand />
            <legendBrand />
            <legendBrand />
            <legendBrand />
        </div>
    </div>
</template>

<script>
import legendBrand from './legendBrand'

export default {
    name: 'LegendBrands',
    components: {
        legendBrand
    }
}
</script>

<style scoped>
    .legendBrands {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 70%;
        margin: 60px 0px;
    }
    .legendBrandsTitle {
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .legendBrandBody {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .legendBrandBody .legendBrandWrapper:first-of-type {
        margin-left: 0px;
    }
</style>