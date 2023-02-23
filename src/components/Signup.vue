<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signup">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '@/firebase/config';
export default {
    setup(){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let error = ref(null);
        let signup = async()=>{
            try {
              let res = await auth.createUserWithEmailAndPassword(email.value, password.value);
              if (!res) {
                throw new Error("This email is already in used.");
              }
              console.log(res.user)
            } catch (err) {
              error.value = err.message;
              console.log(error.value);
            }
        }
        return {displayName, email, password,signup}
    }
}
</script>

<style>
    
</style>