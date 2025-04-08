<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import {auth} from "../firebase/config";
export default {
    setup(){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let error = ref("")
        let signUp = async ()=>{
            try {
                let res = await auth.createUserWithEmailAndPassword(email.value,password.value);
                // firebase already check any error but only this error check byself
                if(!res){
                    throw new Error("Couldn't create new user")
                }
            } catch (err) {
                error.value = err.message
            }

        }

        return {displayName,email,password,signUp}
    }
}
</script>

<style>

</style>