<template>
    <div class="container">
        {{n}}
        <hr>
        <button @click="add">+1</button>
        <button @click="add1">+2</button>
        <button @click="minus">-1</button>
        <button @click="minus1">-2</button>
        <hr>
        <button @click="Cx">撤销</button>
        <hr>
        {{history}}
    </div>
</template>

<script>
export default {
    name:'',
    components: {

    },
    data() {
        return {
            n:0,
            history:[],
            inCxModle:false
        };
    },
    computed: {

    },
    watch: {
        n(newValue,oldValue){
            console.log(`在不在撤销模式:${this.inCxModle ? '在':'不在'}`)
            if(!this.inCxModle){
                this.history.push({from: oldValue,to:newValue
                })
            }
        }

    },
    created() {

    },
    mounted() {

    },
    methods: {
        add(){
            this.n+=1
        },
        add1(){
            this.n+=2
        },
        minus(){
            this.n-=1
        },
        minus1(){
            this.n-=2
        },
        Cx(){
            const last = this.history.pop();
            console.log(last);
            const old = last.from
            this.inCxModle = true
            this.n = old    //watch是异步的
            this.$nextTick(()=>{
                this.inCxModle = false
            },0)
        }
    },
};
</script>

<style scoped >

</style>
