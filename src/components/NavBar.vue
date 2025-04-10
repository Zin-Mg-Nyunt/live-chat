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

import logoutUser from "../composable/logoutUser";
import { useRouter } from 'vue-router';
import getUser from '../composable/getUser';
export default {
    setup(){
        let router = useRouter();
        
        let user = getUser();

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