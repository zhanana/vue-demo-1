<template>
    <div class="container">
        App.vue我现在有{{total}}
        <hr>
        <!-- <Demo7c :money = "total" v-on:update:money="total=$event"/> -->
        <!-- 上面的语句和下面的语句表达同样的意思，都是儿子想用爸爸的钱，爸爸得允许和知道儿子用了多少钱，下面:money.sync更简练 -->
        <!--vue规则1 组件不能修改props外部数据  -->
        <!-- 规则2 $emit可以触发事件并传参  -->
        <!-- 规则3 $event可以获取$emit的参数  -->
        <Demo7c :money.sync = "total" />
    </div>
</template>

<script>
import Demo7c from './Demo7c.vue'

export default {
    name:'',
    components: {
        Demo7c
    },
    data() {
        return {
            total:10000
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
    .container{
        border: 1px solid red;
    }

</style>
