<template>
    <div class="productWrapper">
        <div class="productImage">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="productBody">
            <div class="onCartDiscount">
                {{ $t('DISCOUNT_ON_CART') }}
            </div>
            <div class="priceWithDiscount">
                99.99TL
            </div>
            <div class="price">
                <div class="priceCount">
                    99.99TL
                </div>
                <div class="discountPercentage">
                    %23
                </div>
            </div>
            <div class="priceDescription">
                Price Description Field
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Product'
}
</script>

<style scoped>
    .productWrapper {
        width: 160px;
        margin: 0px 17.5px
    }
    .productImage {
        border: 1px solid rgb(221,221,221);
        border-radius: 8px;
        width: 160px;
        height: 160px;
        padding: 10px;
    }
    .productImage:hover {
        box-shadow: 0px 1px 2px #00000040;
    }
    .productBody {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 5px 0px 0px 5px;
    }
    .productImage img {
        width: 100%;
        height: 100%;
    }
    .onCartDiscount {
        text-align: left;
        font-size: 14px;
        font-weight: 400;
        color: #43934a;
    }
    .priceWithDiscount {
        color: #43934a;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .price {
        display: flex;
        flex-direction: row;
    }
    .priceCount {
        color: rgb(180, 180, 180);
        letter-spacing: 1px;
        text-decoration: line-through;
        margin-right: 10px;
    }
    .discountPercentage {
        font-size: 14px;
        font-weight: 600;
        color: #F90000;
    }
    .priceDescription {
        font-size: 14px;
        font-weight: 500;
    }
</style>