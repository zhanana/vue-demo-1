<template>
    <div class="container">
        <div v-x>斑鳜可爱吗?</div>
        <div v-y>斑鳜可爱吗?</div>
        <div v-on2:click="hi">点我吧！</div>
    </div>
</template>

<script>
export default {
    name:'',
    directives:{
        'y':{
            inserted(el){
                el.addEventListener('click',()=>{console.log('不可爱')})
            }
        },
        // 模仿v-on:click事件，让页面监听点击完后清楚removeEventListener，减少不必要的垃圾
        'on2':{
            inserted(el,info){
                el.addEventListener(info.arg,info.value)
            },
            unbind(el,info){
                el.removeEventListener(info.arg,info.value)
            },
        }
    },
    // 定义局部变量，只能在这个组件里调用
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
        hi(){
            console.log('小虎子真帅')
        }

    },
};
</script>

<style scoped >

</style>
