<template>
    <div class="advertisementWrapper">
        <div class="adversitementImage">
            <img src="../../../assets/logo.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Advertisement'
}
</script>

<style scoped>
    .advertisementWrapper {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        min-width: 250px;
        max-width: 250px;
        border: 1px solid rgb(221,221,221);
        height: 100%;
    }
    .adversitementImage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>