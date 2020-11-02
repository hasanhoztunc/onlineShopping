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
    }
    .productName {
        font-size: 14px;
        font-weight: 400;
        word-wrap: break-word;
        padding-bottom: 20px;
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
</style>