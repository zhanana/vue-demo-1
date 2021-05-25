<template>
    <div class="container">
        {{n}}
        <button @click="add">+1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            n:0
        };
    },
    // created、mounted、updated、destroyed四个钩子的实现
    created(){
        // debugger断点测试created没有出现在页面中
        console.log('这个东西出现在内存里面，没有在页面中')
    },
    mounted(){
        console.log('这个东西出现在页面中')
    },
    updated(){
        console.log('更新了')
        console.log(this.n)
    },
    destroyed(){
        console.log('消亡了')
    },
    methods: {
        add(){
            this.n+=1
        }
    },
};
</script>

<style scoped >

</style>
