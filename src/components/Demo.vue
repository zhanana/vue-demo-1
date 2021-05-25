<template>
<div>

    <div class="red">
        {{n}}
        <button @click="add">+1</button>
        <hr>
        {{array.filter(i => i % 2 != 0)}}
        <hr>
    </div>
    <div>
        {{myfilter}}
    </div>
</div>
    
</template>

<script>
export default {
    name:'Demo',
    data () {
       return {
           n:0,
           array:[1,2,3,4,5,6,7,8]
       }
    },
    computed:{
        myfilter() {
            return this.n * 3
        }
    },
    methods: {
        add(){
            this.n += 1
        },
        log() {
            console.log("2222")
        }

    }
};
</script>

<style  scoped >
    .red{
        color: brown;
    }
</style>