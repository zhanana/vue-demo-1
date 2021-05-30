<template>
    <div class="container">
        <div v-x>斑鳜可爱吗?</div>
        <div v-y>斑鳜可爱吗?</div>
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

    },
};
</script>

<style scoped >

</style>
