<template>
    <div class="outstandingsWrapper">
        <div class="outstandingsTitle">
            {{ $t('OUTSTANDINGS_TITLE') }}
        </div>
        <div class="outstandingsBody">
            <product />
            <product />
            <product />
            <product />
            <product />
            <product />
            <product />
        </div>
    </div>
</template>

<script>
import product from './product/product'
export default {
    name: 'Outstandings',
    components: {
        product
    }
}
</script>

<style scoped>
    .outstandingsWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 70%;
        margin: 60px 20px 20px 20px;
    }
    .outstandingsTitle {
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 1px;
        margin-bottom: 35px;
    }
    .outstandingsBody {
        display: flex;
        flex-direction: row ;
    }
    .outstandingsBody .productWrapper:first-of-type {
        margin-left: 0;
    }
</style>