<template>
    <div class="sign">
        <div class="brandName">
            {{ $t('BRAND_NAME') }}
        </div>
        <div class="form">
            <div class="multiSelect">
                <div class="selectItem" :class="{selectedItem: (selectedType === 1)}" @click="selectedType = 1">
                    {{ $t('LOGIN') }}
                </div>
                <div class="selectItem" :class="{selectedItem: (selectedType === 2)}" @click="selectedType = 2">
                    {{ $t('SIGN_UP') }}
                </div>
            </div>
            <div class="signInformation">
                <div class="info">
                    <customInput
                        v-model="email"
                        height="56px"
                        class="infoInput"
                        :placeholder="$t('MAIL')"
                    />
                </div>
                <div class="info">
                    <customInput
                        v-model="password"
                        height="56px"
                        class="infoInput"
                        right-icon="input/viewPassword"
                        :placeholder="$t('PASSWORD')"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import customInput from '@/components/utils/input'
export default {
    name: 'Sign',
    components: {
        customInput
    },
    data () {
        return {
            email: '',
            password: '',
            selectedType: 2
        }
    }
}
</script>

<style scoped>
    .sign {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .brandName {
        font-size: 26px;
        font-weight: 600;
        color: rgb(255,96,0);
    }
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid rgb(221,221,221);
        width: auto;
        border-radius: 10px;
        padding: 72px;
        margin: 20px;
        width: 472px;
        max-width: 472px;
    }
    .multiSelect {
        display: flex;
        flex-direction: row;
        background: rgb(238,238,238);
        color: #484848;
        padding: 3px;
        border-radius: 10px;
        margin-bottom: 26px;
        width: 100%;
    }
    .selectItem {
        padding: 10px 30px;
        font-size: 18px;
        font-weight: 600;
        border-radius: 10px;
        cursor: pointer;
        width: 100%;
    }
    .selectedItem {
        background: #fff;
        transition: 0.3s all ease-in-out;
    }
    .signInformation {
        width: 100%;
    }
    .info {
        margin-bottom: 38px;
    }
    .infoInput {
        background: rgb(238,238,238);
    }
    .infoInput:focus-within {
        background: #fff;
    }
</style>