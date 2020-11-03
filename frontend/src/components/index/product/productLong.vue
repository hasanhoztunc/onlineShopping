<template>
    <div class="product">
        <div class="productName">
            Fairy Hepsi Bir Arada 90 Yıkama Bulaşık Makinesi Detarjanı
        </div>
        <div class="productImage">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="productPriceWithDiscount">
            89.89 ₺
        </div>
        <div class="productPrice">
            124.90 ₺
        </div>
        <div class="addToCart">
            {{ $t('ADD_TO_CART') }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductLong'
}
</script>

<style scoped>
    .product {
        border: 1px solid rgb(221,221,221);
        border-radius: 10px;
        padding: 30px 20px 30px 20px;
        max-width: 250px;
        height: 375px;
        max-height: 375px;
        position: relative;
    }
    .productName {
        font-size: 14px;
        font-weight: 400;
        word-wrap: break-word;
        padding-bottom: 20px;
    }
    .product:hover .productPriceWithDiscount {
        display: none;
        transition: 0.3s all ease-in-out;
    }
    .product:hover .productPrice {
        display: none;
        transition: 0.3s all ease-in-out;
    }
    .productPriceWithDiscount {
        margin-top: 20px;
        font-size: 24px;
        font-weight: 700;
        color: rgb(255,96,0);
    }
    .productPrice {
        font-size: 16px;
        font-weight: 600;
        color: rgb(201,201,201);
        text-decoration: line-through;
    }
    .product:hover .addToCart {
        display: unset;
        transition: 0.2s all ease-in-out;
    }
    .addToCart {
        display: none;
        position: absolute;
        bottom: 20px;
        left: 0px;
        right: 0px;
        margin: 0px 20px;
        padding: 10px 0px;
        background: rgba(255,96,0,0.2);
        color: rgb(255,96,0);
        font-size: 16px;
        font-weight: 700;
        width: 82.5%;
        border-radius: 8px;
    }
    .addToCart:hover {
        background: rgba(255,96,0,0.4);
        transition: 0.2s all ease-in-out;
    }
</style>