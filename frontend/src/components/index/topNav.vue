<template>
    <div class="topNav">
        <div class="brandName">
            {{ $t('BRAND_NAME') }}
        </div>
        <customInput />
    </div>
</template>

<script>
import customInput from '../utils/input'

export default {
    name: 'TopNav',
    components: {
        customInput
    }
}
</script>

<style scoped>
    .topNav {
        width: 80%;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: flex-start;
        font-size: 26px;
        padding: 20px;
        font-weight: 800;
    }
    .brandName {
        margin-left: 20px;
        color: rgb(255,96,0);
    }
</style>