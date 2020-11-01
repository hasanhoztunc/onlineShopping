<template>
    <div :style="[borderColor,buttonColor,textColorComp]" class="button" @click="$emit('click')">
        <div v-if="leftIcon !== ''" class="leftIcon">
            <component :is="dynamicIcon" />
        </div>
        <div class="buttonText">
            <div class="topText">
                {{ text }}
            </div>
            <div v-if="underText !== ''" class="underText">
                {{ underText }}
            </div>
        </div>
        <div v-if="rightIcon !== ''" class="rightIcon">
            <component :is="dynamicRightIcon" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: ''
        },
        underText: {
            type: String,
            default: ''
        },
        leftIcon: {
            type: String,
            default: ''
        },
        rightIcon: {
            type: String,
            default: ''
        },
        textColor: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        border: {
            type: String,
            default: ''
        }
    },
    computed: {
        dynamicIcon () {
            let c = undefined
            if (this.leftIcon !== '') {
                c = () => import('@/assets/' + this.leftIcon)
            }
            return c
        },
        dynamicRightIcon () {
            let c = undefined
            if (this.rightIcon !== '') {
                c = () => import('@/assets/' + this.rightIcon)
            }
            return c
        },
        buttonColor () {
            let color = undefined
            if (this.color !== '') {
                color = {
                    background: this.color
                }
            }
            return color
        },
        borderColor () {
            let border = undefined
            if (this.border !== '') {
                border = {
                    border: this.border
                }
            }
            return border
        },
        textColorComp () {
            let color = undefined
            if (this.textColor !== '') {
                color = {
                    color: this.textColor
                }
            }
            return color
        }
    }
}
</script>

<style scoped>
    .button {
        border-radius: 8px;
        width: auto;
        height: 100%;
        font-size: 16px;
        font-weight: 400;
        cursor:pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 5px 15px;
    }
    .buttonText {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 0px 15px;
        font-size: 16px;
    }
    .topText {
        font-size: 16px;
        font-weight: 600;
    }
    .underText {
        font-size: 12px;
        font-weight: 400;
    }
</style>