<template>
    <div class="container">
        你好
    </div>
</template>

<script>
export default {
    name:'',
    components: {

    },
    data() {
        return {
            obj3:{
                姓:"高",
                名:"圆圆",

                get xm(){
                    console.log(this.姓+this.名)
                    return this.姓+this.名

                }

            }
        };
    },
    computed: {

    },
    watch: {

    },
    created() {


    },
    mounted() {
        this.obj3.xm

    },
    methods: {

    },
};
</script>

<style scoped >

</style>
