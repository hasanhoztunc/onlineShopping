<template>
    <div class="topNav">
        <div class="brandName">
            {{ $t('BRAND_NAME') }}
        </div>
        <div class="searchInput">
            <customInput v-model="search" right-button-text="Ara" :placeholder="$t('SEARCH_PLACEHOLDER')" />
        </div>
        <div class="buttons">
            <div class="button">
                <CustomButton
                    text="Giriş Yap"
                    under-text="veya üye ol"
                    left-icon="button/user"
                    right-icon="button/downArrow"
                    color="#fff"
                    border="2px solid #919191"
                    text-color="#919191"
                    @click="login"
                />
            </div>
            <div>
                <CustomButton
                    text="Sepetim"
                    left-icon="button/shoppingCart"
                    color="#919191"
                    text-color="#fff"
                    @click="login"
                />
            </div>
        </div>
    </div>
</template>

<script>
import customInput from '../utils/input'
import CustomButton from '../utils/button'

export default {
    name: 'TopNav',
    components: {
        customInput,
        CustomButton
    },
    data () {
        return {
            search: ''
        }
    },
    methods: {
        login () {
            
        }
    }
}
</script>

<style scoped>
    .topNav {
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 26px;
        padding: 20px;
        font-weight: 800;
        margin-bottom: 10px;
    }
    .brandName {
        margin-left: 20px;
        color: rgb(255,96,0);
        display: flex;
        flex: 3;
    }
    .searchInput {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex: 3;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        flex: 3;
    }
    .buttons div {
        margin: 0px 5px;
    }
</style>