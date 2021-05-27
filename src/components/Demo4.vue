<template>
    <div class="container">
        你好
    <hr>
        {{obj3.b}}
    <hr>
        {{obj3.c}}
        <button @click="setB">set b</button>
        {{array[3]}}
    <hr>
        {{array[4]}}
    <hr>
        {{array}}
        <button @click="setD">setD</button>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name:'',
    components: {

    },
    data() {
        return {
            obj3:{
                a:0,
                姓:"高",
                名:"圆圆",

                get xm(){
                    console.log(this.姓+this.名)
                    return this.姓+this.名

                }
            },
            array:['a','b','c']
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
        setB(){
            // this.obj3.b = 1 这个时候页面是不会显示出1的，因为vue没法监听不存在的b
            Vue.set(this.obj3,'b',2) 
            this.$set(this.obj3,'c',3)
            // Vue.set和this.$set的作用，①新增key，②自动创建代理和监听（如果没有创建），③触发UI更新
        },
        setD(){
            Vue.set(this.array,3,'d')
            this.$set(this.array,4,'e')
        }
    },
};
</script>

<style scoped >

</style>
