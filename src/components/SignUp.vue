<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">
        {{error}}
    </div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import createUser from "../composable/createUser";
export default {
    emits: ['enterChatroom'], //emit declare because if didn't declare, vue show warning in parent
    setup(props,context){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        // refactoring concept
        let {createAccount,error}=createUser()

        let signUp=async()=>{
            let res = await createAccount(email.value,password.value,displayName.value)
            if(res){
                context.emit("enterChatroom")
            }
        }

        return {displayName,email,password,signUp,error}
    }
}
</script>

<style>

</style>