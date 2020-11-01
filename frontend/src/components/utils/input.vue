<template>
    <div class="input" @click="$emit('inputFocus')">
        <label @cinputFocus="focus">{{ label }}<span v-if="required">*</span></label>
        <div class="inputIcons">
            <div class="icon">
                <search color="#adadad" />
            </div>
            <input
                ref="input"
                v-model="data"
                :type="type"
                :placeholder="placeholder"
                @input="input"
            >
            <div
                v-if="rightButtonText !== undefined"
                ref="rightButton"
                class="rightButton"
                :class="{focused: focused}"
            >
                {{ rightButtonText }}
            </div>
        </div>
    </div>
</template>

<script>
import search from '../../assets/input/search'
export default {
    name: 'Input',
    components: {
        search
    },
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: [ String, Number ],
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        required: Boolean,
        validation: {
            type: Function,
            default: () => {
                return undefined
            }
        },
        rightButtonText: {
            type: String,
            default: undefined
        }
    },
    data () {
        return {
            data: '',
            message: undefined,
        }
    },
    watch: {
        value: {
            immediate: true,
            deep: true,
            handler (val) {
                if (val !== undefined) {
                    this.data = JSON.parse(JSON.stringify(val))
                }
            }
        }
    },
    methods: {
        focus () {
            this.$refs.input.focus()
        },
        input () {
            if (this.validation !== undefined) {
                let res = this.validation(this.data)
                if (res !== undefined) {
                    this.message = undefined
                } else {
                    this.message = undefined
                }
            }
            this.$emit('input', this.data)
        }
    }
}
</script>

<style scoped>
    .input {
        border: 2px solid #cbcbcb;
        border-radius: 5px;
        background: #ffffff;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .input:focus-within {
        border: 2px solid rgb(255,96,0);
    }
    .input:focus-within .rightButton {
        background: rgb(255,96,0);
    }
    .inputIcons {
        height: 100%;
        width: 100%;
        display: flex;
        flex: 1;
    }
    .icon {
        display: flex;
        margin-left: 15px;
        flex: 1;
        align-items: center;
    }
    label {
        position: absolute;
        left: 10px;
        bottom: 100%;
        font-size: 16px;
        font-weight: 500;
    }
    .input input {
        border: none;
        font-size: 16px;
        font-weight: 400;
        outline: none;
        background: transparent;
        height: 100%;
        padding: 0px 5px;
        display: flex;
        align-items: center;
        flex: 8;
    }
    .rightButton {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #cbcbcb;
        color: #fff;
        flex: 1;
        font-size: 16px;
        padding: 0px 10px;
    }
</style>