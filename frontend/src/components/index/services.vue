<template>
    <div class="servicesWrapper">
        <div class="servicesTitle">
            {{ $t('SERVICES_TITLE') }}
        </div>
        <div class="servicesBody">
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
    name: 'Services',
    components: {
        legendBrand
    }
}
</script>

<style scoped>
    .servicesWrapper {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 70%;
    }
    .servicesTitle {
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 1px;
    }
    .servicesBody {
        display: flex;
        flex-direction: row;
    }
    .servicesBody .legendBrandWrapper:first-of-type {
        margin-left: 0px;
    }
</style>