<template>
    <div class="container">
        这里是小张的大本营
        {{message}}
        <button @click="fn">call fn</button>
    </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String,
            default:''
        },
        fn:{
            type:Function
        }
    }

    }
    // props可以传具体的值也可以传函数
</script>

<style scoped >
.container{
    color: tomato;
    border: 1px solid palegreen;
}

</style>
