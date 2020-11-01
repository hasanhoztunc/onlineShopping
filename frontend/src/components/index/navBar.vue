<template>
    <div class="nav">
        <div class="colors">
            <div class="color" />
            <div class="color" />
            <div class="color" />
            <div class="color" />
            <div class="color" />
            <div class="color" />
        </div>
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
        box-shadow: 0px 1px 2px #00000050;
        position: relative;
    }
    .colors {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 10px;
        width: 100%;
        bottom: 100%
    }
    .color:first-of-type {
        background: rgb(118,34,218);
        display: flex;
        flex: 2;
    }
    .color:nth-of-type(2){
        background: rgb(71,198,235);
        display: flex;
        flex: 2;
    }
    .color:nth-of-type(3){
        background: rgb(237,95,31);
        display: flex;
        flex: 4;
    }
    .color:nth-of-type(4){
        background: rgb(245,159,40);
        display: flex;
        flex: 2;
    }
    .color:nth-of-type(5){
        background: rgb(107,30,91);
        display: flex;
        flex: 2;
    }
    .color:nth-of-type(6){
        background: rgb(69,183, 148);
        display: flex;
        flex: 2;
    }
    .navWrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 70%;
        max-width: 100%;
        margin: 10px 0px;
    }
    .navItem {
        padding: 0px 15px;
        border-left: 0.5px solid #cbcbcb;
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        color: #666;
        display: flex;
        align-items: center;
        word-wrap: break-spaces;
    }
</style>