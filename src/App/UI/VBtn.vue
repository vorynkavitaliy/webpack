<template>
    <a v-if="href" :href="href" class="v-btn">
        <span v-if="!loading">
            <slot></slot>
        </span>
        <span v-else></span>
    </a>
    <router-link v-else-if="to" :to="to" :class="[$style.red, ...className]">
        <span v-if="!loading">
            <slot></slot>
        </span>
        <span v-else></span>
    </router-link>
    <button v-else :class="className" :disabled="disabled" class="v-btn">
        <span v-if="!loading">
            <slot></slot>
        </span>
        <span v-else></span>
    </button>
</template>

<script>
export default {
    name: 'VBtn',
    props: {
        href: {
            type: String,
            default: '',
        },
        to: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        error: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        success: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        className() {
            return {
                'v-btn__disable': this.disabled,
                'v-btn__error': this.error,
                'v-btn__loading': this.loading,
                'v-btn__success': this.success,
            }
        },
    },
}
</script>

<style lang="sass" module scoped>
.red
    color: red
</style>
