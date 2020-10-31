<template>
    <div class="nav">
        <div class="navWrapper">
            <div class="navItem">
                {{ $t('ELECTRONICAL') }}
            </div>
            <div class="navItem">
                {{ $t('MODE') }}
            </div>
            <div class="navItem">
                {{ $t('HOME_AND_STUFF') }}
            </div>
            <div class="navItem">
                {{ $t('CAR_AND_STUFF') }}
            </div>
            <div class="navItem">
                {{ $t('MOM_AND_BABY_STUFF') }}
            </div>
            <div class="navItem">
                {{ $t('SPORT_STUFF') }}
            </div>
            <div class="navItem">
                {{ $t('PERSONAL_CLEANING') }}
            </div>
            <div class="navItem">
                {{ $t('PET_SHOP') }}
            </div>
            <div class="navItem">
                {{ $t('BOOKS_MUSIC_AND_STUFF') }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.nav {
    background: rgb(245,245,245);
    color: #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}
    .navWrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 80%;
    }
    .navItem {
        padding: 0px 20px;
        border-left: 0.5px solid #cbcbcb;
        margin: 20px 0px;
        font-size: 14px;
        font-weight: 600;
        color: #666;
        display: flex;
        align-items: center;
    }
</style>