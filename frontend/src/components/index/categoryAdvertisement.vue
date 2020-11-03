<template>
    <div class="categoryAdvertisementWrapper">
        <div class="advertisement">
            <div class="advertisementDescription">
                Efsane fırsatlar 5 Kasım'da geliyor
            </div>
            <div class="advertisementBody">
                <advertisement />
            </div>
        </div>
    </div>
</template>

<script>
import advertisement from './product/advertisement'
export default {
    name: 'CategoryAdvertisement',
    components: {
        advertisement
    }
}
</script>

<style scoped>
    .categoryAdvertisementWrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 70%;
    }
    .advertisement {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-width: 250px;
    }
    .advertisementDescription {
        text-align: left;
        margin-bottom: 30px;
        font-size: 21px;
        font-weight: 500;
        max-width: 100%;
        word-wrap: break-word;
    }
</style>