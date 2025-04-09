<template>
  <nav class="navBar container" v-if="user">
    <div>
      <p>Welcome {{user.displayName}}</p>
      <p>Login as {{user.email}}</p>
    </div>
    <button @click="logOut">Logout</button>
  </nav>
</template>

<script>
import { auth } from '@/firebase/config'
import { ref } from 'vue'
import logoutUser from "../composable/logoutUser";
import { useRouter } from 'vue-router';
export default {
    setup(){
        let router = useRouter();
        let user=ref(auth.currentUser);
        // onAuthStateChanged is always run when auth change anything like (singUp,login,logout)
        auth.onAuthStateChanged((_user)=>{
            user.value=_user
        })

        let logOut = async()=>{
            await logoutUser();
            router.push({name:'welcome'})
        }
        return {user,logOut}
    }
}
</script>

<style>
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>