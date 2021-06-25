<template>
    <observer @change="onChange" class="v-lazy-img">
        <img height="200" style="max-width: 100%" :src="currentInfo" :alt="alt" />
    </observer>
</template>

<script>
import Observer from 'vue-intersection-observer'
export default {
    components: {
        Observer,
    },
    data() {
        return {
            currentInfo: false,
        }
    },
    props: {
        src: {
            type: [String, Number],
            default: '',
        },
        alt: {
            type: [String, Number],
            default: '',
        },
    },

    methods: {
        onChange(entry, unobserve) {
            if (entry.isIntersecting) unobserve()
            this.currentInfo = entry.isIntersecting
                ? this.src
                : 'https://avatars2.githubusercontent.com/u/20992106?s=460&v=4'
        },
    },
}
</script>
