<template>
    <div class="input">
        <label>{{ label }}</label>
        <input :type="type" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    .input {
        border: 2px solid #cbcbcb;
        border-radius: 5px;
        background: #ffffff;
    }
.input input {
    border: none;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    background: transparent;
}
</style>