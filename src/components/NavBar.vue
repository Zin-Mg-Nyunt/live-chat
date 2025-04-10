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
import getUser from '../composable/getUser';
export default {
    setup(){

        let user = getUser();

        let logOut = async()=>{
            await logoutUser();
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