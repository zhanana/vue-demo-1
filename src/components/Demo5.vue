<template>
    <div class="container">
        {{users.nickname||users.emails||users.phones}}
        <hr>
        {{displayName}}
        <button @click="add">set</button>
        <hr>
        <button>全部</button>
        <button>男</button>
        <button>女</button>
        <hr>
        <ul>
            <li v-for="item in genders" :key="item.name">{{item.name}}|{{item.age}}|{{item.gender}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'',
    components: {

    },
    data() {
        return {
            users:{
                nickname:"娜娜",
                emails:"614556279@qq.com",
                phones:"18156466003"
            },
            genders:[
                {name:'娜娜',age:24,gender:'女'},
                {name:'虎虎',age:22,gender:'男'},
                {name:'斑鳜',age:0.5,gender:'男'},
            ]
        };
    },
    computed: {
        displayName:{
            get(){
                const users = this.users
                return users.nickname||users.emails||users.phones
            },
            set(value){
                this.users.nickname = value
            }
        },
    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        add(){
            // this.users.nickname = "虎虎"
            this.displayName = "虎虎"
        }
    },
};
</script>

<style scoped >

</style>
