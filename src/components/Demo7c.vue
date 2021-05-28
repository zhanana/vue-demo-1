<template>
    <div class="container1">
        {{money}}
        <button @click="$emit('update:money',money - 100)">
            <span>花钱</span>
        </button>
    </div>
</template>

<script>
export default {
    props:["money"],
    name:'',
    components: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped >
    .container1{
        border: 1px solid green;
    }
</style>
