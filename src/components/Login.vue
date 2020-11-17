<template>
    <form @submit="login" class="login">
        <input type="text" placeholder="Enter your name" v-model="loginForm.yourname">
        <input type="password"  placeholder="Enter your password" v-model="loginForm.yourpw">
        <button>Login</button>
    </form>
</template>
<script>
export default {
    name : 'Login',
    data(){
        return {
            loginForm : {
                yourname : null,
                yourpw : null,
            }
        }
    },
    methods : {
        login(){
            console.log(this.loginForm.yourname, this.loginForm.yourpw)
        }
    }
}
</script>

<style scoped>
    .login {padding: 0 25px;}
    .login input {width: 100%; height: 52px; margin-bottom: 15px; padding: 0 15px;}
    button {width: 100%; height: 52px; border-radius: 5px; color: #fff; background: #35495e; border: none;}
</style>