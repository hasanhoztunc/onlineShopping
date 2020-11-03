<template>
    <div class="onDiscountWrapper">
        <div class="onDicountTitle">
            {{ $t('ON_DISCOUNT') }}
            <span class="all">
                {{ $t('SEE_ALL') + ' ' + '>' }}
            </span>
        </div>
        <div class="content">
            <div class="advertisement">
                <advertisement />
            </div>
            <div class="onDicountItems">
                <productLong />
                <productLong />
                <productLong />
                <productLong />
            </div>
        </div>
    </div>
</template>

<script>
import productLong from '@/components/index/product/productLong'
import advertisement from './product/advertisement'

export default {
    name: 'OnDiscount',
    components: {
        productLong,
        advertisement
    }
}
</script>

<style scoped>
    .onDiscountWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: flex-start;
        margin: 50px 0px;
        width: 70%;
    }
    .onDicountTitle {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-start;
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .all {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 16px;
        margin-left: 5px;
        margin-bottom: 3px;
        color: rgb(255,96,0);
        cursor: pointer;
    }
    .content {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .advertisement {
        display: flex;
        margin: 10px 10px 10px 0px;
    }
    .advertisement div {
    }
    .onDicountItems {
        display: flex;
        flex-direction: row;
    }
    .onDicountItems div {
        margin: 10px;
    }
</style>