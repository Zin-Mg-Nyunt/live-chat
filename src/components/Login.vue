<template>
    <h1>Login</h1>
  <form @submit.prevent="logIn">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">
        {{error}}
    </div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import loginUser from "../composable/loginUser";
export default {
    setup(){
        let email = ref("");
        let password = ref("");
        let {error,loginAccount}=loginUser()
        let logIn=async ()=>{
            let res = await loginAccount(email.value,password.value);
            if (res) {
                // if login success, work this code
                console.log(res.user)
            }
        }

        return {email,password,logIn,error}
    }
}
</script>

<style>

</style>