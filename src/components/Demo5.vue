<template>
    <div class="container">
        {{users.nickname||users.emails||users.phones}}
        <hr>
        {{displayName}}
        <button @click="add">set</button>
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
            }
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
        }
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
