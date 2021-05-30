<template>
    <div class="container">
        登录{{user}}
        <hr>
        <form action="">
            <label>
                <span>用户名:</span>
                <input type="text" v-model.lazy="user.username">
            </label>
            <label>
                <span>密码:</span>
                <input type="password" v-model.lazy="user.password">
            </label>
            <button type="submit">登录</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'',
    components: {

    },
    data() {
        return {
            user:{
                username:'',
                password:'',
            }
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
